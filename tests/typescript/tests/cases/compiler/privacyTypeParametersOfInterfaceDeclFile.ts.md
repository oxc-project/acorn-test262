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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
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
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
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
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
      "start": 116,
      "end": 451,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 123,
        "end": 451,
        "body": {
          "type": "TSInterfaceBody",
          "start": 198,
          "end": 451,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 213,
              "end": 233,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 213,
                "end": 221,
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 222,
                  "end": 228,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 225,
                    "end": 228,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 227,
                      "end": 228,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 228,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 229,
                "end": 232,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 231,
                  "end": 232,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 232,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 238,
              "end": 267,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 238,
                "end": 247,
                "decorators": [],
                "name": "myMethod0",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 249,
                "end": 266,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 251,
                  "end": 266,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 263,
                    "end": 266,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 264,
                        "end": 265,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 264,
                          "end": 265,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 263,
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 272,
              "end": 313,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 272,
                "end": 281,
                "decorators": [],
                "name": "myMethod1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 283,
                "end": 312,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 285,
                  "end": 312,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 298,
                    "end": 312,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 299,
                        "end": 311,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 299,
                          "end": 311,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 298,
                    "decorators": [],
                    "name": "privateClassT",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 319,
              "end": 359,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 319,
                "end": 328,
                "decorators": [],
                "name": "myMethod2",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 330,
                "end": 358,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 332,
                  "end": 358,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 345,
                    "end": 358,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 346,
                        "end": 357,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 357,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 345,
                    "decorators": [],
                    "name": "privateClassT",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 364,
              "end": 404,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 364,
                "end": 373,
                "decorators": [],
                "name": "myMethod3",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 375,
                "end": 403,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 377,
                  "end": 403,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 389,
                    "end": 403,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 390,
                        "end": 402,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 390,
                          "end": 402,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 389,
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 409,
              "end": 448,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 409,
                "end": 418,
                "decorators": [],
                "name": "myMethod4",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 420,
                "end": 447,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 422,
                  "end": 447,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 434,
                    "end": 447,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 435,
                        "end": 446,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 435,
                          "end": 446,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 434,
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 133,
          "end": 173,
          "decorators": [],
          "name": "publicInterfaceWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 173,
          "end": 197,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 174,
              "end": 196,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 184,
                "end": 196,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 196,
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 174,
                "end": 175,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
      "start": 453,
      "end": 774,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 460,
        "end": 774,
        "body": {
          "type": "TSInterfaceBody",
          "start": 533,
          "end": 774,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 539,
              "end": 559,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 539,
                "end": 547,
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 548,
                  "end": 554,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 551,
                    "end": 554,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 553,
                      "end": 554,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 553,
                        "end": 554,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 555,
                "end": 558,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 557,
                  "end": 558,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 557,
                    "end": 558,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 564,
              "end": 592,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 564,
                "end": 573,
                "decorators": [],
                "name": "myMethod0",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 575,
                "end": 592,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 577,
                  "end": 592,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 589,
                    "end": 592,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 590,
                        "end": 591,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 590,
                          "end": 591,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 577,
                    "end": 589,
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 597,
              "end": 638,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 597,
                "end": 606,
                "decorators": [],
                "name": "myMethod1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 608,
                "end": 637,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 610,
                  "end": 637,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 623,
                    "end": 637,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 624,
                        "end": 636,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 624,
                          "end": 636,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 610,
                    "end": 623,
                    "decorators": [],
                    "name": "privateClassT",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 643,
              "end": 683,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 643,
                "end": 652,
                "decorators": [],
                "name": "myMethod2",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 654,
                "end": 682,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 656,
                  "end": 682,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 669,
                    "end": 682,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 670,
                        "end": 681,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 670,
                          "end": 681,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 656,
                    "end": 669,
                    "decorators": [],
                    "name": "privateClassT",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 688,
              "end": 728,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 688,
                "end": 697,
                "decorators": [],
                "name": "myMethod3",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 699,
                "end": 727,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 701,
                  "end": 727,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 713,
                    "end": 727,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 714,
                        "end": 726,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 714,
                          "end": 726,
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 701,
                    "end": 713,
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 733,
              "end": 772,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 733,
                "end": 742,
                "decorators": [],
                "name": "myMethod4",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 744,
                "end": 771,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 746,
                  "end": 771,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 758,
                    "end": 771,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 759,
                        "end": 770,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 759,
                          "end": 770,
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 746,
                    "end": 758,
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 470,
          "end": 509,
          "decorators": [],
          "name": "publicInterfaceWithPublicTypeParameters",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 509,
          "end": 532,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 510,
              "end": 531,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 520,
                "end": 531,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 520,
                  "end": 531,
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 510,
                "end": 511,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
      "start": 776,
      "end": 1094,
      "body": {
        "type": "TSInterfaceBody",
        "start": 852,
        "end": 1094,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 858,
            "end": 878,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 858,
              "end": 866,
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 867,
                "end": 873,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 870,
                  "end": 873,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 872,
                    "end": 873,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 872,
                      "end": 873,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 874,
              "end": 877,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 876,
                "end": 877,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 876,
                  "end": 877,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 883,
            "end": 912,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 883,
              "end": 892,
              "decorators": [],
              "name": "myMethod0",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 894,
              "end": 911,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 896,
                "end": 911,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 908,
                  "end": 911,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 909,
                      "end": 910,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 909,
                        "end": 910,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 896,
                  "end": 908,
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 917,
            "end": 958,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 917,
              "end": 926,
              "decorators": [],
              "name": "myMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 928,
              "end": 957,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 930,
                "end": 957,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 943,
                  "end": 957,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 944,
                      "end": 956,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 944,
                        "end": 956,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 930,
                  "end": 943,
                  "decorators": [],
                  "name": "privateClassT",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 963,
            "end": 1003,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 963,
              "end": 972,
              "decorators": [],
              "name": "myMethod2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 974,
              "end": 1002,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 976,
                "end": 1002,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 989,
                  "end": 1002,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 990,
                      "end": 1001,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 990,
                        "end": 1001,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 976,
                  "end": 989,
                  "decorators": [],
                  "name": "privateClassT",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1008,
            "end": 1048,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1008,
              "end": 1017,
              "decorators": [],
              "name": "myMethod3",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1019,
              "end": 1047,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1021,
                "end": 1047,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1033,
                  "end": 1047,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1034,
                      "end": 1046,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1034,
                        "end": 1046,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1021,
                  "end": 1033,
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1053,
            "end": 1092,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1053,
              "end": 1062,
              "decorators": [],
              "name": "myMethod4",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1064,
              "end": 1091,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1066,
                "end": 1091,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1078,
                  "end": 1091,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1079,
                      "end": 1090,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1079,
                        "end": 1090,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1066,
                  "end": 1078,
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 786,
        "end": 827,
        "decorators": [],
        "name": "privateInterfaceWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 827,
        "end": 851,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 828,
            "end": 850,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 838,
              "end": 850,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 838,
                "end": 850,
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 828,
              "end": 829,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1096,
      "end": 1412,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1170,
        "end": 1412,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1176,
            "end": 1196,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1176,
              "end": 1184,
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1185,
                "end": 1191,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1188,
                  "end": 1191,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1190,
                    "end": 1191,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1190,
                      "end": 1191,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1192,
              "end": 1195,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1194,
                "end": 1195,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1194,
                  "end": 1195,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1201,
            "end": 1230,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1201,
              "end": 1210,
              "decorators": [],
              "name": "myMethod0",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1212,
              "end": 1229,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1214,
                "end": 1229,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1226,
                  "end": 1229,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1227,
                      "end": 1228,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1227,
                        "end": 1228,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1214,
                  "end": 1226,
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1235,
            "end": 1276,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1235,
              "end": 1244,
              "decorators": [],
              "name": "myMethod1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1246,
              "end": 1275,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1248,
                "end": 1275,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1261,
                  "end": 1275,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1262,
                      "end": 1274,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1262,
                        "end": 1274,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1248,
                  "end": 1261,
                  "decorators": [],
                  "name": "privateClassT",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1281,
            "end": 1321,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1281,
              "end": 1290,
              "decorators": [],
              "name": "myMethod2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1292,
              "end": 1320,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1294,
                "end": 1320,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1307,
                  "end": 1320,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1308,
                      "end": 1319,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1308,
                        "end": 1319,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1294,
                  "end": 1307,
                  "decorators": [],
                  "name": "privateClassT",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1326,
            "end": 1366,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1326,
              "end": 1335,
              "decorators": [],
              "name": "myMethod3",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1337,
              "end": 1365,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1339,
                "end": 1365,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1351,
                  "end": 1365,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1352,
                      "end": 1364,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1352,
                        "end": 1364,
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1339,
                  "end": 1351,
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1371,
            "end": 1410,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1371,
              "end": 1380,
              "decorators": [],
              "name": "myMethod4",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1382,
              "end": 1409,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1384,
                "end": 1409,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1396,
                  "end": 1409,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1397,
                      "end": 1408,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1397,
                        "end": 1408,
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1384,
                  "end": 1396,
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1106,
        "end": 1146,
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1146,
        "end": 1169,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1147,
            "end": 1168,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1157,
              "end": 1168,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1157,
                "end": 1168,
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1147,
              "end": 1148,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1414,
      "end": 1550,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1421,
        "end": 1550,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1488,
          "end": 1550,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 1494,
              "end": 1514,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1494,
                "end": 1502,
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1503,
                  "end": 1509,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1506,
                    "end": 1509,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1508,
                      "end": 1509,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1508,
                        "end": 1509,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1510,
                "end": 1513,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1512,
                  "end": 1513,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1512,
                    "end": 1513,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 1519,
              "end": 1548,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1519,
                "end": 1528,
                "decorators": [],
                "name": "myMethod0",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1530,
                "end": 1547,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1532,
                  "end": 1547,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1544,
                    "end": 1547,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1545,
                        "end": 1546,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1545,
                          "end": 1546,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1532,
                    "end": 1544,
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 1431,
          "end": 1484,
          "decorators": [],
          "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1484,
          "end": 1487,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1485,
              "end": 1486,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1485,
                "end": 1486,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
      "start": 1552,
      "end": 1682,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1620,
        "end": 1682,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1626,
            "end": 1646,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1626,
              "end": 1634,
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1635,
                "end": 1641,
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1638,
                  "end": 1641,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1640,
                    "end": 1641,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1640,
                      "end": 1641,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1642,
              "end": 1645,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1644,
                "end": 1645,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1644,
                  "end": 1645,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1651,
            "end": 1680,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1651,
              "end": 1660,
              "decorators": [],
              "name": "myMethod0",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1662,
              "end": 1679,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1664,
                "end": 1679,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1676,
                  "end": 1679,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1677,
                      "end": 1678,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1677,
                        "end": 1678,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1664,
                  "end": 1676,
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1562,
        "end": 1616,
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1616,
        "end": 1619,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1617,
            "end": 1618,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1617,
              "end": 1618,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1685,
      "end": 1823,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 1692,
        "end": 1823,
        "body": {
          "type": "TSInterfaceBody",
          "start": 1811,
          "end": 1823,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 1702,
          "end": 1758,
          "decorators": [],
          "name": "publicInterfaceWithPrivateModuleTypeParameterConstraints",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1758,
          "end": 1810,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1759,
              "end": 1809,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 1769,
                "end": 1809,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1769,
                  "end": 1809,
                  "left": {
                    "type": "Identifier",
                    "start": 1769,
                    "end": 1782,
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1783,
                    "end": 1809,
                    "decorators": [],
                    "name": "publicClassInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1759,
                "end": 1760,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
      "start": 1825,
      "end": 1957,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1945,
        "end": 1957,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1835,
        "end": 1892,
        "decorators": [],
        "name": "privateInterfaceWithPrivateModuleTypeParameterConstraints",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1892,
        "end": 1944,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1893,
            "end": 1943,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1903,
              "end": 1943,
              "typeArguments": null,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 1903,
                "end": 1943,
                "left": {
                  "type": "Identifier",
                  "start": 1903,
                  "end": 1916,
                  "decorators": [],
                  "name": "privateModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 1917,
                  "end": 1943,
                  "decorators": [],
                  "name": "publicClassInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1893,
              "end": 1894,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1959,
      "end": 4796,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 1966,
        "end": 4796,
        "body": {
          "type": "TSModuleBlock",
          "start": 1986,
          "end": 4796,
          "body": [
            {
              "type": "ClassDeclaration",
              "start": 1992,
              "end": 2032,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 2025,
                "end": 2032,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1998,
                "end": 2024,
                "decorators": [],
                "name": "privateClassInPublicModule",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2038,
              "end": 2084,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 2045,
                "end": 2084,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 2077,
                  "end": 2084,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 2051,
                  "end": 2076,
                  "decorators": [],
                  "name": "publicClassInPublicModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": null
              },
              "exportKind": "value",
              "source": null,
              "specifiers": []
            },
            {
              "type": "ClassDeclaration",
              "start": 2090,
              "end": 2134,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 2127,
                "end": 2134,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 2096,
                "end": 2123,
                "decorators": [],
                "name": "privateClassInPublicModuleT",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2123,
                "end": 2126,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2124,
                    "end": 2125,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 2124,
                      "end": 2125,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 2140,
              "end": 2190,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 2147,
                "end": 2190,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 2183,
                  "end": 2190,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 2153,
                  "end": 2179,
                  "decorators": [],
                  "name": "publicClassInPublicModuleT",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2179,
                  "end": 2182,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2180,
                      "end": 2181,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2180,
                        "end": 2181,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
              "start": 2196,
              "end": 2697,
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 2203,
                "end": 2697,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 2292,
                  "end": 2697,
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "start": 2311,
                      "end": 2331,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2311,
                        "end": 2319,
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2320,
                          "end": 2326,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2323,
                            "end": 2326,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2325,
                              "end": 2326,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2325,
                                "end": 2326,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2327,
                        "end": 2330,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2329,
                          "end": 2330,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2329,
                            "end": 2330,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": null
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 2340,
                      "end": 2383,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2340,
                        "end": 2349,
                        "decorators": [],
                        "name": "myMethod0",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2351,
                        "end": 2382,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2353,
                          "end": 2382,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2379,
                            "end": 2382,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2380,
                                "end": 2381,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2380,
                                  "end": 2381,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 2353,
                            "end": 2379,
                            "decorators": [],
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": null
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 2392,
                      "end": 2461,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2392,
                        "end": 2401,
                        "decorators": [],
                        "name": "myMethod1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2403,
                        "end": 2460,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2405,
                          "end": 2460,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2432,
                            "end": 2460,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2433,
                                "end": 2459,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2433,
                                  "end": 2459,
                                  "decorators": [],
                                  "name": "privateClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 2405,
                            "end": 2432,
                            "decorators": [],
                            "name": "privateClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": null
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 2470,
                      "end": 2538,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2470,
                        "end": 2479,
                        "decorators": [],
                        "name": "myMethod2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2481,
                        "end": 2537,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2483,
                          "end": 2537,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2510,
                            "end": 2537,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2511,
                                "end": 2536,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2511,
                                  "end": 2536,
                                  "decorators": [],
                                  "name": "publicClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 2483,
                            "end": 2510,
                            "decorators": [],
                            "name": "privateClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": null
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 2547,
                      "end": 2615,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2547,
                        "end": 2556,
                        "decorators": [],
                        "name": "myMethod3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2558,
                        "end": 2614,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2560,
                          "end": 2614,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2586,
                            "end": 2614,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2587,
                                "end": 2613,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2587,
                                  "end": 2613,
                                  "decorators": [],
                                  "name": "privateClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 2560,
                            "end": 2586,
                            "decorators": [],
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": null
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 2624,
                      "end": 2691,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2624,
                        "end": 2633,
                        "decorators": [],
                        "name": "myMethod4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2635,
                        "end": 2690,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2637,
                          "end": 2690,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2663,
                            "end": 2690,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2664,
                                "end": 2689,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2664,
                                  "end": 2689,
                                  "decorators": [],
                                  "name": "publicClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 2637,
                            "end": 2663,
                            "decorators": [],
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": null
                    }
                  ]
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "start": 2213,
                  "end": 2253,
                  "decorators": [],
                  "name": "publicInterfaceWithPrivateTypeParameters",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2253,
                  "end": 2291,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2254,
                      "end": 2290,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2264,
                        "end": 2290,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2264,
                          "end": 2290,
                          "decorators": [],
                          "name": "privateClassInPublicModule",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2254,
                        "end": 2255,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
              "start": 2703,
              "end": 3192,
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 2710,
                "end": 3192,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 2797,
                  "end": 3192,
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "start": 2807,
                      "end": 2827,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2807,
                        "end": 2815,
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2816,
                          "end": 2822,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2819,
                            "end": 2822,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2821,
                              "end": 2822,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2821,
                                "end": 2822,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2823,
                        "end": 2826,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2825,
                          "end": 2826,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2825,
                            "end": 2826,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": null
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 2836,
                      "end": 2878,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2836,
                        "end": 2845,
                        "decorators": [],
                        "name": "myMethod0",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2847,
                        "end": 2878,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2849,
                          "end": 2878,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2875,
                            "end": 2878,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2876,
                                "end": 2877,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2876,
                                  "end": 2877,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 2849,
                            "end": 2875,
                            "decorators": [],
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": null
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 2887,
                      "end": 2956,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2887,
                        "end": 2896,
                        "decorators": [],
                        "name": "myMethod1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2898,
                        "end": 2955,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2900,
                          "end": 2955,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 2927,
                            "end": 2955,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 2928,
                                "end": 2954,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2928,
                                  "end": 2954,
                                  "decorators": [],
                                  "name": "privateClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 2900,
                            "end": 2927,
                            "decorators": [],
                            "name": "privateClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": null
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 2965,
                      "end": 3033,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2965,
                        "end": 2974,
                        "decorators": [],
                        "name": "myMethod2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2976,
                        "end": 3032,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2978,
                          "end": 3032,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3005,
                            "end": 3032,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3006,
                                "end": 3031,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3006,
                                  "end": 3031,
                                  "decorators": [],
                                  "name": "publicClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 2978,
                            "end": 3005,
                            "decorators": [],
                            "name": "privateClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": null
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 3042,
                      "end": 3110,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3042,
                        "end": 3051,
                        "decorators": [],
                        "name": "myMethod3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 3053,
                        "end": 3109,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3055,
                          "end": 3109,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3081,
                            "end": 3109,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3082,
                                "end": 3108,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3082,
                                  "end": 3108,
                                  "decorators": [],
                                  "name": "privateClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 3055,
                            "end": 3081,
                            "decorators": [],
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": null
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 3119,
                      "end": 3186,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3119,
                        "end": 3128,
                        "decorators": [],
                        "name": "myMethod4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 3130,
                        "end": 3185,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3132,
                          "end": 3185,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 3158,
                            "end": 3185,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 3159,
                                "end": 3184,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3159,
                                  "end": 3184,
                                  "decorators": [],
                                  "name": "publicClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 3132,
                            "end": 3158,
                            "decorators": [],
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": null
                    }
                  ]
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "start": 2720,
                  "end": 2759,
                  "decorators": [],
                  "name": "publicInterfaceWithPublicTypeParameters",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2759,
                  "end": 2796,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2760,
                      "end": 2795,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2770,
                        "end": 2795,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2770,
                          "end": 2795,
                          "decorators": [],
                          "name": "publicClassInPublicModule",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2760,
                        "end": 2761,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
              "start": 3198,
              "end": 3684,
              "body": {
                "type": "TSInterfaceBody",
                "start": 3288,
                "end": 3684,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 3298,
                    "end": 3318,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3298,
                      "end": 3306,
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3307,
                        "end": 3313,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3310,
                          "end": 3313,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3312,
                            "end": 3313,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3312,
                              "end": 3313,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3314,
                      "end": 3317,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3316,
                        "end": 3317,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3316,
                          "end": 3317,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3327,
                    "end": 3370,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3327,
                      "end": 3336,
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3338,
                      "end": 3369,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3340,
                        "end": 3369,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3366,
                          "end": 3369,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3367,
                              "end": 3368,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3367,
                                "end": 3368,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 3340,
                          "end": 3366,
                          "decorators": [],
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3379,
                    "end": 3448,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3379,
                      "end": 3388,
                      "decorators": [],
                      "name": "myMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3390,
                      "end": 3447,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3392,
                        "end": 3447,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3419,
                          "end": 3447,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3420,
                              "end": 3446,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3420,
                                "end": 3446,
                                "decorators": [],
                                "name": "privateClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 3392,
                          "end": 3419,
                          "decorators": [],
                          "name": "privateClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3457,
                    "end": 3525,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3457,
                      "end": 3466,
                      "decorators": [],
                      "name": "myMethod2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3468,
                      "end": 3524,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3470,
                        "end": 3524,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3497,
                          "end": 3524,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3498,
                              "end": 3523,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3498,
                                "end": 3523,
                                "decorators": [],
                                "name": "publicClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 3470,
                          "end": 3497,
                          "decorators": [],
                          "name": "privateClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3534,
                    "end": 3602,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3534,
                      "end": 3543,
                      "decorators": [],
                      "name": "myMethod3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3545,
                      "end": 3601,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3547,
                        "end": 3601,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3573,
                          "end": 3601,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3574,
                              "end": 3600,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3574,
                                "end": 3600,
                                "decorators": [],
                                "name": "privateClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 3547,
                          "end": 3573,
                          "decorators": [],
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3611,
                    "end": 3678,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3611,
                      "end": 3620,
                      "decorators": [],
                      "name": "myMethod4",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3622,
                      "end": 3677,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3624,
                        "end": 3677,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3650,
                          "end": 3677,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3651,
                              "end": 3676,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3651,
                                "end": 3676,
                                "decorators": [],
                                "name": "publicClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 3624,
                          "end": 3650,
                          "decorators": [],
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 3208,
                "end": 3249,
                "decorators": [],
                "name": "privateInterfaceWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3249,
                "end": 3287,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3250,
                    "end": 3286,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 3260,
                      "end": 3286,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3260,
                        "end": 3286,
                        "decorators": [],
                        "name": "privateClassInPublicModule",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 3250,
                      "end": 3251,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            {
              "type": "TSInterfaceDeclaration",
              "start": 3690,
              "end": 4174,
              "body": {
                "type": "TSInterfaceBody",
                "start": 3778,
                "end": 4174,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 3788,
                    "end": 3808,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3788,
                      "end": 3796,
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3797,
                        "end": 3803,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3800,
                          "end": 3803,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3802,
                            "end": 3803,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3802,
                              "end": 3803,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3804,
                      "end": 3807,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3806,
                        "end": 3807,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3806,
                          "end": 3807,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3817,
                    "end": 3860,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3817,
                      "end": 3826,
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3828,
                      "end": 3859,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3830,
                        "end": 3859,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3856,
                          "end": 3859,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3857,
                              "end": 3858,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3857,
                                "end": 3858,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 3830,
                          "end": 3856,
                          "decorators": [],
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3869,
                    "end": 3938,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3869,
                      "end": 3878,
                      "decorators": [],
                      "name": "myMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3880,
                      "end": 3937,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3882,
                        "end": 3937,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3909,
                          "end": 3937,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3910,
                              "end": 3936,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3910,
                                "end": 3936,
                                "decorators": [],
                                "name": "privateClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 3882,
                          "end": 3909,
                          "decorators": [],
                          "name": "privateClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 3947,
                    "end": 4015,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3947,
                      "end": 3956,
                      "decorators": [],
                      "name": "myMethod2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 3958,
                      "end": 4014,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3960,
                        "end": 4014,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 3987,
                          "end": 4014,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 3988,
                              "end": 4013,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3988,
                                "end": 4013,
                                "decorators": [],
                                "name": "publicClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 3960,
                          "end": 3987,
                          "decorators": [],
                          "name": "privateClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4024,
                    "end": 4092,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4024,
                      "end": 4033,
                      "decorators": [],
                      "name": "myMethod3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4035,
                      "end": 4091,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4037,
                        "end": 4091,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 4063,
                          "end": 4091,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 4064,
                              "end": 4090,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4064,
                                "end": 4090,
                                "decorators": [],
                                "name": "privateClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 4037,
                          "end": 4063,
                          "decorators": [],
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4101,
                    "end": 4168,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4101,
                      "end": 4110,
                      "decorators": [],
                      "name": "myMethod4",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4112,
                      "end": 4167,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4114,
                        "end": 4167,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 4140,
                          "end": 4167,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 4141,
                              "end": 4166,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4141,
                                "end": 4166,
                                "decorators": [],
                                "name": "publicClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 4114,
                          "end": 4140,
                          "decorators": [],
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 3700,
                "end": 3740,
                "decorators": [],
                "name": "privateInterfaceWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3740,
                "end": 3777,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3741,
                    "end": 3776,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 3751,
                      "end": 3776,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3751,
                        "end": 3776,
                        "decorators": [],
                        "name": "publicClassInPublicModule",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 3741,
                      "end": 3742,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 4180,
              "end": 4342,
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 4187,
                "end": 4342,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 4254,
                  "end": 4342,
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "start": 4264,
                      "end": 4284,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4264,
                        "end": 4272,
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4273,
                          "end": 4279,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4276,
                            "end": 4279,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 4278,
                              "end": 4279,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4278,
                                "end": 4279,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 4280,
                        "end": 4283,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4282,
                          "end": 4283,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 4282,
                            "end": 4283,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": null
                    },
                    {
                      "type": "TSMethodSignature",
                      "start": 4293,
                      "end": 4336,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4293,
                        "end": 4302,
                        "decorators": [],
                        "name": "myMethod0",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "method",
                      "optional": false,
                      "params": [],
                      "readonly": false,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 4304,
                        "end": 4335,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 4306,
                          "end": 4335,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 4332,
                            "end": 4335,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 4333,
                                "end": 4334,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4333,
                                  "end": 4334,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 4306,
                            "end": 4332,
                            "decorators": [],
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "static": false,
                      "typeParameters": null
                    }
                  ]
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "start": 4197,
                  "end": 4250,
                  "decorators": [],
                  "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4250,
                  "end": 4253,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4251,
                      "end": 4252,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 4251,
                        "end": 4252,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
              "start": 4348,
              "end": 4504,
              "body": {
                "type": "TSInterfaceBody",
                "start": 4416,
                "end": 4504,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 4426,
                    "end": 4446,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4426,
                      "end": 4434,
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 4435,
                        "end": 4441,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 4438,
                          "end": 4441,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 4440,
                            "end": 4441,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4440,
                              "end": 4441,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4442,
                      "end": 4445,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4444,
                        "end": 4445,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4444,
                          "end": 4445,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 4455,
                    "end": 4498,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4455,
                      "end": 4464,
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 4466,
                      "end": 4497,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4468,
                        "end": 4497,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 4494,
                          "end": 4497,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 4495,
                              "end": 4496,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4495,
                                "end": 4496,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 4468,
                          "end": 4494,
                          "decorators": [],
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 4358,
                "end": 4412,
                "decorators": [],
                "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 4412,
                "end": 4415,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 4413,
                    "end": 4414,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 4413,
                      "end": 4414,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "start": 4510,
              "end": 4652,
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 4517,
                "end": 4652,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 4636,
                  "end": 4652,
                  "body": []
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "start": 4527,
                  "end": 4583,
                  "decorators": [],
                  "name": "publicInterfaceWithPrivateModuleTypeParameterConstraints",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 4583,
                  "end": 4635,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 4584,
                      "end": 4634,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 4594,
                        "end": 4634,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 4594,
                          "end": 4634,
                          "left": {
                            "type": "Identifier",
                            "start": 4594,
                            "end": 4607,
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 4608,
                            "end": 4634,
                            "decorators": [],
                            "name": "publicClassInPrivateModule",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 4584,
                        "end": 4585,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
              "start": 4658,
              "end": 4794,
              "body": {
                "type": "TSInterfaceBody",
                "start": 4778,
                "end": 4794,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 4668,
                "end": 4725,
                "decorators": [],
                "name": "privateInterfaceWithPrivateModuleTypeParameterConstraints",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 4725,
                "end": 4777,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 4726,
                    "end": 4776,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 4736,
                      "end": 4776,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 4736,
                        "end": 4776,
                        "left": {
                          "type": "Identifier",
                          "start": 4736,
                          "end": 4749,
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 4750,
                          "end": 4776,
                          "decorators": [],
                          "name": "publicClassInPrivateModule",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 4726,
                      "end": 4727,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 1973,
          "end": 1985,
          "decorators": [],
          "name": "publicModule",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 4798,
      "end": 7376,
      "body": {
        "type": "TSModuleBlock",
        "start": 4819,
        "end": 7376,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 4825,
            "end": 4866,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 4859,
              "end": 4866,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 4831,
              "end": 4858,
              "decorators": [],
              "name": "privateClassInPrivateModule",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4872,
            "end": 4919,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 4879,
              "end": 4919,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 4912,
                "end": 4919,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 4885,
                "end": 4911,
                "decorators": [],
                "name": "publicClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 4925,
            "end": 4970,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 4963,
              "end": 4970,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 4931,
              "end": 4959,
              "decorators": [],
              "name": "privateClassInPrivateModuleT",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 4959,
              "end": 4962,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 4960,
                  "end": 4961,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 4960,
                    "end": 4961,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 4976,
            "end": 5027,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 4983,
              "end": 5027,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 5020,
                "end": 5027,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 4989,
                "end": 5016,
                "decorators": [],
                "name": "publicClassInPrivateModuleT",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 5016,
                "end": 5019,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 5017,
                    "end": 5018,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 5017,
                      "end": 5018,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 5033,
            "end": 5535,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 5040,
              "end": 5535,
              "body": {
                "type": "TSInterfaceBody",
                "start": 5130,
                "end": 5535,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 5140,
                    "end": 5160,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5140,
                      "end": 5148,
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5149,
                        "end": 5155,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5152,
                          "end": 5155,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5154,
                            "end": 5155,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5154,
                              "end": 5155,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5156,
                      "end": 5159,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5158,
                        "end": 5159,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5158,
                          "end": 5159,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5169,
                    "end": 5213,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5169,
                      "end": 5178,
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5180,
                      "end": 5212,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5182,
                        "end": 5212,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5209,
                          "end": 5212,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5210,
                              "end": 5211,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5210,
                                "end": 5211,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 5182,
                          "end": 5209,
                          "decorators": [],
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5222,
                    "end": 5293,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5222,
                      "end": 5231,
                      "decorators": [],
                      "name": "myMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5233,
                      "end": 5292,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5235,
                        "end": 5292,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5263,
                          "end": 5292,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5264,
                              "end": 5291,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5264,
                                "end": 5291,
                                "decorators": [],
                                "name": "privateClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 5235,
                          "end": 5263,
                          "decorators": [],
                          "name": "privateClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5302,
                    "end": 5372,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5302,
                      "end": 5311,
                      "decorators": [],
                      "name": "myMethod2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5313,
                      "end": 5371,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5315,
                        "end": 5371,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5343,
                          "end": 5371,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5344,
                              "end": 5370,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5344,
                                "end": 5370,
                                "decorators": [],
                                "name": "publicClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 5315,
                          "end": 5343,
                          "decorators": [],
                          "name": "privateClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5381,
                    "end": 5451,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5381,
                      "end": 5390,
                      "decorators": [],
                      "name": "myMethod3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5392,
                      "end": 5450,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5394,
                        "end": 5450,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5421,
                          "end": 5450,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5422,
                              "end": 5449,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5422,
                                "end": 5449,
                                "decorators": [],
                                "name": "privateClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 5394,
                          "end": 5421,
                          "decorators": [],
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5460,
                    "end": 5529,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5460,
                      "end": 5469,
                      "decorators": [],
                      "name": "myMethod4",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5471,
                      "end": 5528,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5473,
                        "end": 5528,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5500,
                          "end": 5528,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5501,
                              "end": 5527,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5501,
                                "end": 5527,
                                "decorators": [],
                                "name": "publicClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 5473,
                          "end": 5500,
                          "decorators": [],
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 5050,
                "end": 5090,
                "decorators": [],
                "name": "publicInterfaceWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 5090,
                "end": 5129,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 5091,
                    "end": 5128,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 5101,
                      "end": 5128,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5101,
                        "end": 5128,
                        "decorators": [],
                        "name": "privateClassInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 5091,
                      "end": 5092,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 5541,
            "end": 6040,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 5548,
              "end": 6040,
              "body": {
                "type": "TSInterfaceBody",
                "start": 5636,
                "end": 6040,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 5646,
                    "end": 5666,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5646,
                      "end": 5654,
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 5655,
                        "end": 5661,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5658,
                          "end": 5661,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 5660,
                            "end": 5661,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 5660,
                              "end": 5661,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5662,
                      "end": 5665,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5664,
                        "end": 5665,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5664,
                          "end": 5665,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5675,
                    "end": 5718,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5675,
                      "end": 5684,
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5686,
                      "end": 5718,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5688,
                        "end": 5718,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5715,
                          "end": 5718,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5716,
                              "end": 5717,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5716,
                                "end": 5717,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 5688,
                          "end": 5715,
                          "decorators": [],
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5727,
                    "end": 5798,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5727,
                      "end": 5736,
                      "decorators": [],
                      "name": "myMethod1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5738,
                      "end": 5797,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5740,
                        "end": 5797,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5768,
                          "end": 5797,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5769,
                              "end": 5796,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5769,
                                "end": 5796,
                                "decorators": [],
                                "name": "privateClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 5740,
                          "end": 5768,
                          "decorators": [],
                          "name": "privateClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5807,
                    "end": 5877,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5807,
                      "end": 5816,
                      "decorators": [],
                      "name": "myMethod2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5818,
                      "end": 5876,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5820,
                        "end": 5876,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5848,
                          "end": 5876,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5849,
                              "end": 5875,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5849,
                                "end": 5875,
                                "decorators": [],
                                "name": "publicClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 5820,
                          "end": 5848,
                          "decorators": [],
                          "name": "privateClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5886,
                    "end": 5956,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5886,
                      "end": 5895,
                      "decorators": [],
                      "name": "myMethod3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5897,
                      "end": 5955,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5899,
                        "end": 5955,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 5926,
                          "end": 5955,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 5927,
                              "end": 5954,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 5927,
                                "end": 5954,
                                "decorators": [],
                                "name": "privateClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 5899,
                          "end": 5926,
                          "decorators": [],
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 5965,
                    "end": 6034,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 5965,
                      "end": 5974,
                      "decorators": [],
                      "name": "myMethod4",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 5976,
                      "end": 6033,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 5978,
                        "end": 6033,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 6005,
                          "end": 6033,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 6006,
                              "end": 6032,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 6006,
                                "end": 6032,
                                "decorators": [],
                                "name": "publicClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 5978,
                          "end": 6005,
                          "decorators": [],
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 5558,
                "end": 5597,
                "decorators": [],
                "name": "publicInterfaceWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 5597,
                "end": 5635,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 5598,
                    "end": 5634,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 5608,
                      "end": 5634,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 5608,
                        "end": 5634,
                        "decorators": [],
                        "name": "publicClassInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 5598,
                      "end": 5599,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 6046,
            "end": 6542,
            "body": {
              "type": "TSInterfaceBody",
              "start": 6137,
              "end": 6542,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 6147,
                  "end": 6167,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6147,
                    "end": 6155,
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 6156,
                      "end": 6162,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 6159,
                        "end": 6162,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 6161,
                          "end": 6162,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6161,
                            "end": 6162,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 6163,
                    "end": 6166,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6165,
                      "end": 6166,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6165,
                        "end": 6166,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 6176,
                  "end": 6220,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6176,
                    "end": 6185,
                    "decorators": [],
                    "name": "myMethod0",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 6187,
                    "end": 6219,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6189,
                      "end": 6219,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6216,
                        "end": 6219,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6217,
                            "end": 6218,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6217,
                              "end": 6218,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 6189,
                        "end": 6216,
                        "decorators": [],
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 6229,
                  "end": 6300,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6229,
                    "end": 6238,
                    "decorators": [],
                    "name": "myMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 6240,
                    "end": 6299,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6242,
                      "end": 6299,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6270,
                        "end": 6299,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6271,
                            "end": 6298,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6271,
                              "end": 6298,
                              "decorators": [],
                              "name": "privateClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 6242,
                        "end": 6270,
                        "decorators": [],
                        "name": "privateClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 6309,
                  "end": 6379,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6309,
                    "end": 6318,
                    "decorators": [],
                    "name": "myMethod2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 6320,
                    "end": 6378,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6322,
                      "end": 6378,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6350,
                        "end": 6378,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6351,
                            "end": 6377,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6351,
                              "end": 6377,
                              "decorators": [],
                              "name": "publicClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 6322,
                        "end": 6350,
                        "decorators": [],
                        "name": "privateClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 6388,
                  "end": 6458,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6388,
                    "end": 6397,
                    "decorators": [],
                    "name": "myMethod3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 6399,
                    "end": 6457,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6401,
                      "end": 6457,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6428,
                        "end": 6457,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6429,
                            "end": 6456,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6429,
                              "end": 6456,
                              "decorators": [],
                              "name": "privateClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 6401,
                        "end": 6428,
                        "decorators": [],
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 6467,
                  "end": 6536,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6467,
                    "end": 6476,
                    "decorators": [],
                    "name": "myMethod4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 6478,
                    "end": 6535,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6480,
                      "end": 6535,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6507,
                        "end": 6535,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6508,
                            "end": 6534,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6508,
                              "end": 6534,
                              "decorators": [],
                              "name": "publicClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 6480,
                        "end": 6507,
                        "decorators": [],
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 6056,
              "end": 6097,
              "decorators": [],
              "name": "privateInterfaceWithPrivateTypeParameters",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 6097,
              "end": 6136,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 6098,
                  "end": 6135,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 6108,
                    "end": 6135,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6108,
                      "end": 6135,
                      "decorators": [],
                      "name": "privateClassInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 6098,
                    "end": 6099,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 6548,
            "end": 7042,
            "body": {
              "type": "TSInterfaceBody",
              "start": 6637,
              "end": 7042,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 6647,
                  "end": 6667,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6647,
                    "end": 6655,
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 6656,
                      "end": 6662,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 6659,
                        "end": 6662,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 6661,
                          "end": 6662,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6661,
                            "end": 6662,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 6663,
                    "end": 6666,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6665,
                      "end": 6666,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6665,
                        "end": 6666,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 6676,
                  "end": 6720,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6676,
                    "end": 6685,
                    "decorators": [],
                    "name": "myMethod0",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 6687,
                    "end": 6719,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6689,
                      "end": 6719,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6716,
                        "end": 6719,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6717,
                            "end": 6718,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6717,
                              "end": 6718,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 6689,
                        "end": 6716,
                        "decorators": [],
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 6729,
                  "end": 6800,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6729,
                    "end": 6738,
                    "decorators": [],
                    "name": "myMethod1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 6740,
                    "end": 6799,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6742,
                      "end": 6799,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6770,
                        "end": 6799,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6771,
                            "end": 6798,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6771,
                              "end": 6798,
                              "decorators": [],
                              "name": "privateClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 6742,
                        "end": 6770,
                        "decorators": [],
                        "name": "privateClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 6809,
                  "end": 6879,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6809,
                    "end": 6818,
                    "decorators": [],
                    "name": "myMethod2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 6820,
                    "end": 6878,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6822,
                      "end": 6878,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6850,
                        "end": 6878,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6851,
                            "end": 6877,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6851,
                              "end": 6877,
                              "decorators": [],
                              "name": "publicClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 6822,
                        "end": 6850,
                        "decorators": [],
                        "name": "privateClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 6888,
                  "end": 6958,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6888,
                    "end": 6897,
                    "decorators": [],
                    "name": "myMethod3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 6899,
                    "end": 6957,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6901,
                      "end": 6957,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6928,
                        "end": 6957,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6929,
                            "end": 6956,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6929,
                              "end": 6956,
                              "decorators": [],
                              "name": "privateClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 6901,
                        "end": 6928,
                        "decorators": [],
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 6967,
                  "end": 7036,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 6967,
                    "end": 6976,
                    "decorators": [],
                    "name": "myMethod4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 6978,
                    "end": 7035,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6980,
                      "end": 7035,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 7007,
                        "end": 7035,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 7008,
                            "end": 7034,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 7008,
                              "end": 7034,
                              "decorators": [],
                              "name": "publicClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 6980,
                        "end": 7007,
                        "decorators": [],
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 6558,
              "end": 6598,
              "decorators": [],
              "name": "privateInterfaceWithPublicTypeParameters",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 6598,
              "end": 6636,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 6599,
                  "end": 6635,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 6609,
                    "end": 6635,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 6609,
                      "end": 6635,
                      "decorators": [],
                      "name": "publicClassInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 6599,
                    "end": 6600,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 7048,
            "end": 7211,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 7055,
              "end": 7211,
              "body": {
                "type": "TSInterfaceBody",
                "start": 7122,
                "end": 7211,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 7132,
                    "end": 7152,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7132,
                      "end": 7140,
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 7141,
                        "end": 7147,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 7144,
                          "end": 7147,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 7146,
                            "end": 7147,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 7146,
                              "end": 7147,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 7148,
                      "end": 7151,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7150,
                        "end": 7151,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7150,
                          "end": 7151,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 7161,
                    "end": 7205,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 7161,
                      "end": 7170,
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 7172,
                      "end": 7204,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7174,
                        "end": 7204,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 7201,
                          "end": 7204,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 7202,
                              "end": 7203,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 7202,
                                "end": 7203,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 7174,
                          "end": 7201,
                          "decorators": [],
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 7065,
                "end": 7118,
                "decorators": [],
                "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 7118,
                "end": 7121,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 7119,
                    "end": 7120,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 7119,
                      "end": 7120,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
            "start": 7217,
            "end": 7374,
            "body": {
              "type": "TSInterfaceBody",
              "start": 7285,
              "end": 7374,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 7295,
                  "end": 7315,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 7295,
                    "end": 7303,
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 7304,
                      "end": 7310,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7307,
                        "end": 7310,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 7309,
                          "end": 7310,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 7309,
                            "end": 7310,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 7311,
                    "end": 7314,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7313,
                      "end": 7314,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7313,
                        "end": 7314,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 7324,
                  "end": 7368,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 7324,
                    "end": 7333,
                    "decorators": [],
                    "name": "myMethod0",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 7335,
                    "end": 7367,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7337,
                      "end": 7367,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 7364,
                        "end": 7367,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 7365,
                            "end": 7366,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 7365,
                              "end": 7366,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 7337,
                        "end": 7364,
                        "decorators": [],
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 7227,
              "end": 7281,
              "decorators": [],
              "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 7281,
              "end": 7284,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 7282,
                  "end": 7283,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 7282,
                    "end": 7283,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 4805,
        "end": 4818,
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
