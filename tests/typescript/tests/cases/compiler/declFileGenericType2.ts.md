__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1285,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "TSQualifiedName",
        "start": 15,
        "end": 25,
        "left": {
          "type": "Identifier",
          "start": 15,
          "end": 21,
          "decorators": [],
          "name": "templa",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 22,
          "end": 25,
          "decorators": [],
          "name": "mvc",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 58,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 32,
            "end": 56,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 48,
              "decorators": [],
              "name": "IModel",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 49,
              "end": 56,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 59,
      "end": 159,
      "id": {
        "type": "TSQualifiedName",
        "start": 74,
        "end": 84,
        "left": {
          "type": "Identifier",
          "start": 74,
          "end": 80,
          "decorators": [],
          "name": "templa",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 81,
          "end": 84,
          "decorators": [],
          "name": "mvc",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 85,
        "end": 159,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 91,
            "end": 157,
            "id": {
              "type": "Identifier",
              "start": 101,
              "end": 112,
              "decorators": [],
              "name": "IController",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 112,
              "end": 149,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 113,
                  "end": 148,
                  "name": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 122,
                    "decorators": [],
                    "name": "ModelType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 131,
                    "end": 148,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 131,
                      "end": 148,
                      "left": {
                        "type": "TSQualifiedName",
                        "start": 131,
                        "end": 141,
                        "left": {
                          "type": "Identifier",
                          "start": 131,
                          "end": 137,
                          "decorators": [],
                          "name": "templa",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 141,
                          "decorators": [],
                          "name": "mvc",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 148,
                        "decorators": [],
                        "name": "IModel",
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
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 150,
              "end": 157,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 160,
      "end": 301,
      "id": {
        "type": "TSQualifiedName",
        "start": 175,
        "end": 185,
        "left": {
          "type": "Identifier",
          "start": 175,
          "end": 181,
          "decorators": [],
          "name": "templa",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 182,
          "end": 185,
          "decorators": [],
          "name": "mvc",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 186,
        "end": 301,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 192,
            "end": 299,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 198,
              "end": 216,
              "decorators": [],
              "name": "AbstractController",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 216,
              "end": 253,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 217,
                  "end": 252,
                  "name": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 226,
                    "decorators": [],
                    "name": "ModelType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 235,
                    "end": 252,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 235,
                      "end": 252,
                      "left": {
                        "type": "TSQualifiedName",
                        "start": 235,
                        "end": 245,
                        "left": {
                          "type": "Identifier",
                          "start": 235,
                          "end": 241,
                          "decorators": [],
                          "name": "templa",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 242,
                          "end": 245,
                          "decorators": [],
                          "name": "mvc",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 246,
                        "end": 252,
                        "decorators": [],
                        "name": "IModel",
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
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 265,
                "end": 291,
                "expression": {
                  "type": "MemberExpression",
                  "start": 265,
                  "end": 280,
                  "object": {
                    "type": "Identifier",
                    "start": 265,
                    "end": 268,
                    "decorators": [],
                    "name": "mvc",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 280,
                    "decorators": [],
                    "name": "IController",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 280,
                  "end": 291,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 281,
                      "end": 290,
                      "typeName": {
                        "type": "Identifier",
                        "start": 281,
                        "end": 290,
                        "decorators": [],
                        "name": "ModelType",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 292,
              "end": 299,
              "body": []
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 302,
      "end": 465,
      "id": {
        "type": "TSQualifiedName",
        "start": 317,
        "end": 337,
        "left": {
          "type": "TSQualifiedName",
          "start": 317,
          "end": 327,
          "left": {
            "type": "Identifier",
            "start": 317,
            "end": 323,
            "decorators": [],
            "name": "templa",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 324,
            "end": 327,
            "decorators": [],
            "name": "mvc",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 328,
          "end": 337,
          "decorators": [],
          "name": "composite",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 338,
        "end": 465,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 344,
            "end": 463,
            "id": {
              "type": "Identifier",
              "start": 354,
              "end": 379,
              "decorators": [],
              "name": "ICompositeControllerModel",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 388,
                "end": 398,
                "expression": {
                  "type": "MemberExpression",
                  "start": 388,
                  "end": 398,
                  "object": {
                    "type": "Identifier",
                    "start": 388,
                    "end": 391,
                    "decorators": [],
                    "name": "mvc",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 398,
                    "decorators": [],
                    "name": "IModel",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "start": 399,
              "end": 463,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 409,
                  "end": 457,
                  "key": {
                    "type": "Identifier",
                    "start": 409,
                    "end": 423,
                    "decorators": [],
                    "name": "getControllers",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 425,
                    "end": 456,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 427,
                      "end": 456,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 427,
                        "end": 454,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 427,
                          "end": 442,
                          "left": {
                            "type": "Identifier",
                            "start": 427,
                            "end": 430,
                            "decorators": [],
                            "name": "mvc",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 431,
                            "end": 442,
                            "decorators": [],
                            "name": "IController",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 442,
                          "end": 454,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 443,
                              "end": 453,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 443,
                                "end": 453,
                                "left": {
                                  "type": "Identifier",
                                  "start": 443,
                                  "end": 446,
                                  "decorators": [],
                                  "name": "mvc",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 447,
                                  "end": 453,
                                  "decorators": [],
                                  "name": "IModel",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            }
                          ]
                        }
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
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 466,
      "end": 618,
      "id": {
        "type": "TSQualifiedName",
        "start": 473,
        "end": 487,
        "left": {
          "type": "TSQualifiedName",
          "start": 473,
          "end": 483,
          "left": {
            "type": "Identifier",
            "start": 473,
            "end": 479,
            "decorators": [],
            "name": "templa",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 480,
            "end": 483,
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 484,
          "end": 487,
          "decorators": [],
          "name": "mvc",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 488,
        "end": 618,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 494,
            "end": 616,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 501,
              "end": 616,
              "id": {
                "type": "Identifier",
                "start": 511,
                "end": 529,
                "decorators": [],
                "name": "IElementController",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 529,
                "end": 566,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 530,
                    "end": 565,
                    "name": {
                      "type": "Identifier",
                      "start": 530,
                      "end": 539,
                      "decorators": [],
                      "name": "ModelType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 548,
                      "end": 565,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 548,
                        "end": 565,
                        "left": {
                          "type": "TSQualifiedName",
                          "start": 548,
                          "end": 558,
                          "left": {
                            "type": "Identifier",
                            "start": 548,
                            "end": 554,
                            "decorators": [],
                            "name": "templa",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 555,
                            "end": 558,
                            "decorators": [],
                            "name": "mvc",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 559,
                          "end": 565,
                          "decorators": [],
                          "name": "IModel",
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
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "start": 575,
                  "end": 608,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 575,
                    "end": 597,
                    "object": {
                      "type": "MemberExpression",
                      "start": 575,
                      "end": 585,
                      "object": {
                        "type": "Identifier",
                        "start": 575,
                        "end": 581,
                        "decorators": [],
                        "name": "templa",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 585,
                        "decorators": [],
                        "name": "mvc",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 586,
                      "end": 597,
                      "decorators": [],
                      "name": "IController",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 597,
                    "end": 608,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 598,
                        "end": 607,
                        "typeName": {
                          "type": "Identifier",
                          "start": 598,
                          "end": 607,
                          "decorators": [],
                          "name": "ModelType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "start": 609,
                "end": 616,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 629,
      "end": 888,
      "id": {
        "type": "TSQualifiedName",
        "start": 636,
        "end": 650,
        "left": {
          "type": "TSQualifiedName",
          "start": 636,
          "end": 646,
          "left": {
            "type": "Identifier",
            "start": 636,
            "end": 642,
            "decorators": [],
            "name": "templa",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 643,
            "end": 646,
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 647,
          "end": 650,
          "decorators": [],
          "name": "mvc",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 651,
        "end": 888,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 658,
            "end": 886,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 665,
              "end": 886,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 671,
                "end": 696,
                "decorators": [],
                "name": "AbstractElementController",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 696,
                "end": 733,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 697,
                    "end": 732,
                    "name": {
                      "type": "Identifier",
                      "start": 697,
                      "end": 706,
                      "decorators": [],
                      "name": "ModelType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 715,
                      "end": 732,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 715,
                        "end": 732,
                        "left": {
                          "type": "TSQualifiedName",
                          "start": 715,
                          "end": 725,
                          "left": {
                            "type": "Identifier",
                            "start": 715,
                            "end": 721,
                            "decorators": [],
                            "name": "templa",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 722,
                            "end": 725,
                            "decorators": [],
                            "name": "mvc",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 726,
                          "end": 732,
                          "decorators": [],
                          "name": "IModel",
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
              "superClass": {
                "type": "MemberExpression",
                "start": 742,
                "end": 771,
                "object": {
                  "type": "MemberExpression",
                  "start": 742,
                  "end": 752,
                  "object": {
                    "type": "Identifier",
                    "start": 742,
                    "end": 748,
                    "decorators": [],
                    "name": "templa",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 749,
                    "end": 752,
                    "decorators": [],
                    "name": "mvc",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 753,
                  "end": 771,
                  "decorators": [],
                  "name": "AbstractController",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 771,
                "end": 782,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 772,
                    "end": 781,
                    "typeName": {
                      "type": "Identifier",
                      "start": 772,
                      "end": 781,
                      "decorators": [],
                      "name": "ModelType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 794,
                  "end": 823,
                  "expression": {
                    "type": "Identifier",
                    "start": 794,
                    "end": 812,
                    "decorators": [],
                    "name": "IElementController",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 812,
                    "end": 823,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 813,
                        "end": 822,
                        "typeName": {
                          "type": "Identifier",
                          "start": 813,
                          "end": 822,
                          "decorators": [],
                          "name": "ModelType",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 824,
                "end": 886,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 834,
                    "end": 880,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 834,
                      "end": 845,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 845,
                      "end": 880,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 848,
                        "end": 880,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 862,
                            "end": 870,
                            "expression": {
                              "type": "CallExpression",
                              "start": 862,
                              "end": 869,
                              "callee": {
                                "type": "Super",
                                "start": 862,
                                "end": 867
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "constructor",
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 899,
      "end": 1285,
      "id": {
        "type": "TSQualifiedName",
        "start": 906,
        "end": 930,
        "left": {
          "type": "TSQualifiedName",
          "start": 906,
          "end": 920,
          "left": {
            "type": "TSQualifiedName",
            "start": 906,
            "end": 916,
            "left": {
              "type": "Identifier",
              "start": 906,
              "end": 912,
              "decorators": [],
              "name": "templa",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 913,
              "end": 916,
              "decorators": [],
              "name": "dom",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Identifier",
            "start": 917,
            "end": 920,
            "decorators": [],
            "name": "mvc",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 921,
          "end": 930,
          "decorators": [],
          "name": "composite",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 931,
        "end": 1285,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 937,
            "end": 1283,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 944,
              "end": 1283,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 950,
                "end": 984,
                "decorators": [],
                "name": "AbstractCompositeElementController",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 984,
                "end": 1050,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 985,
                    "end": 1049,
                    "name": {
                      "type": "Identifier",
                      "start": 985,
                      "end": 994,
                      "decorators": [],
                      "name": "ModelType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1003,
                      "end": 1049,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 1003,
                        "end": 1049,
                        "left": {
                          "type": "TSQualifiedName",
                          "start": 1003,
                          "end": 1023,
                          "left": {
                            "type": "TSQualifiedName",
                            "start": 1003,
                            "end": 1013,
                            "left": {
                              "type": "Identifier",
                              "start": 1003,
                              "end": 1009,
                              "decorators": [],
                              "name": "templa",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 1010,
                              "end": 1013,
                              "decorators": [],
                              "name": "mvc",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 1014,
                            "end": 1023,
                            "decorators": [],
                            "name": "composite",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1024,
                          "end": 1049,
                          "decorators": [],
                          "name": "ICompositeControllerModel",
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
              "superClass": {
                "type": "MemberExpression",
                "start": 1059,
                "end": 1099,
                "object": {
                  "type": "MemberExpression",
                  "start": 1059,
                  "end": 1073,
                  "object": {
                    "type": "MemberExpression",
                    "start": 1059,
                    "end": 1069,
                    "object": {
                      "type": "Identifier",
                      "start": 1059,
                      "end": 1065,
                      "decorators": [],
                      "name": "templa",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1066,
                      "end": 1069,
                      "decorators": [],
                      "name": "dom",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1070,
                    "end": 1073,
                    "decorators": [],
                    "name": "mvc",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1074,
                  "end": 1099,
                  "decorators": [],
                  "name": "AbstractElementController",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1099,
                "end": 1110,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1100,
                    "end": 1109,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1100,
                      "end": 1109,
                      "decorators": [],
                      "name": "ModelType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              },
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 1111,
                "end": 1283,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 1121,
                    "end": 1186,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1128,
                      "end": 1140,
                      "decorators": [],
                      "name": "_controllers",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1140,
                      "end": 1185,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1142,
                        "end": 1185,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 1142,
                          "end": 1183,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 1142,
                            "end": 1164,
                            "left": {
                              "type": "TSQualifiedName",
                              "start": 1142,
                              "end": 1152,
                              "left": {
                                "type": "Identifier",
                                "start": 1142,
                                "end": 1148,
                                "decorators": [],
                                "name": "templa",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1149,
                                "end": 1152,
                                "decorators": [],
                                "name": "mvc",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 1153,
                              "end": 1164,
                              "decorators": [],
                              "name": "IController",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1164,
                            "end": 1183,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 1165,
                                "end": 1182,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 1165,
                                  "end": 1182,
                                  "left": {
                                    "type": "TSQualifiedName",
                                    "start": 1165,
                                    "end": 1175,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 1165,
                                      "end": 1171,
                                      "decorators": [],
                                      "name": "templa",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 1172,
                                      "end": 1175,
                                      "decorators": [],
                                      "name": "mvc",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 1176,
                                    "end": 1182,
                                    "decorators": [],
                                    "name": "IModel",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1195,
                    "end": 1277,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1195,
                      "end": 1206,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1206,
                      "end": 1277,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1209,
                        "end": 1277,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1223,
                            "end": 1231,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1223,
                              "end": 1230,
                              "callee": {
                                "type": "Super",
                                "start": 1223,
                                "end": 1228
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1244,
                            "end": 1267,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 1244,
                              "end": 1266,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 1244,
                                "end": 1261,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1244,
                                  "end": 1248
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1249,
                                  "end": 1261,
                                  "decorators": [],
                                  "name": "_controllers",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "right": {
                                "type": "ArrayExpression",
                                "start": 1264,
                                "end": 1266,
                                "elements": []
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "constructor",
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
