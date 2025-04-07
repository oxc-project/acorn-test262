__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 939,
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
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 262,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 131,
        "end": 262,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 198,
          "end": 262,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 204,
              "end": 260,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 204,
                "end": 212,
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 212,
                "end": 260,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 224,
                  "end": 260,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 243,
                      "end": 254,
                      "argument": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 253,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 213,
                    "end": 219,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 216,
                      "end": 219,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 218,
                        "end": 219,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 218,
                          "end": 219,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 220,
                  "end": 223,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 222,
                    "end": 223,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 223,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 137,
          "end": 173,
          "decorators": [],
          "name": "publicClassWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 264,
      "end": 403,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 271,
        "end": 403,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 336,
          "end": 403,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 342,
              "end": 401,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 342,
                "end": 350,
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 350,
                "end": 401,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 362,
                  "end": 401,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 384,
                      "end": 395,
                      "argument": {
                        "type": "Identifier",
                        "start": 391,
                        "end": 394,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 351,
                    "end": 357,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 354,
                      "end": 357,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 356,
                        "end": 357,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 356,
                          "end": 357,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 358,
                  "end": 361,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 360,
                    "end": 361,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 360,
                      "end": 361,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 277,
          "end": 312,
          "decorators": [],
          "name": "publicClassWithPublicTypeParameters",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 312,
          "end": 335,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 313,
              "end": 334,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 323,
                "end": 334,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 334,
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
                "start": 313,
                "end": 314,
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
      "type": "ClassDeclaration",
      "start": 405,
      "end": 540,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 473,
        "end": 540,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 479,
            "end": 538,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 479,
              "end": 487,
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 487,
              "end": 538,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 499,
                "end": 538,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 521,
                    "end": 532,
                    "argument": {
                      "type": "Identifier",
                      "start": 528,
                      "end": 531,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 488,
                  "end": 494,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 491,
                    "end": 494,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 493,
                      "end": 494,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 493,
                        "end": 494,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 495,
                "end": 498,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 497,
                  "end": 498,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 497,
                    "end": 498,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 411,
        "end": 448,
        "decorators": [],
        "name": "privateClassWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 448,
        "end": 472,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 449,
            "end": 471,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 459,
              "end": 471,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 459,
                "end": 471,
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
              "start": 449,
              "end": 450,
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
      "type": "ClassDeclaration",
      "start": 542,
      "end": 675,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 608,
        "end": 675,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 614,
            "end": 673,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 614,
              "end": 622,
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 622,
              "end": 673,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 634,
                "end": 673,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 656,
                    "end": 667,
                    "argument": {
                      "type": "Identifier",
                      "start": 663,
                      "end": 666,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 623,
                  "end": 629,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 626,
                    "end": 629,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 628,
                      "end": 629,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 628,
                        "end": 629,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 630,
                "end": 633,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 632,
                  "end": 633,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 632,
                    "end": 633,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 548,
        "end": 584,
        "decorators": [],
        "name": "privateClassWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 584,
        "end": 607,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 585,
            "end": 606,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 595,
              "end": 606,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 595,
                "end": 606,
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
              "start": 585,
              "end": 586,
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
      "start": 677,
      "end": 810,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 684,
        "end": 810,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 743,
          "end": 810,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 749,
              "end": 808,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 749,
                "end": 757,
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 757,
                "end": 808,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 769,
                  "end": 808,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 791,
                      "end": 802,
                      "argument": {
                        "type": "Identifier",
                        "start": 798,
                        "end": 801,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 758,
                    "end": 764,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 761,
                      "end": 764,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 763,
                        "end": 764,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 763,
                          "end": 764,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 765,
                  "end": 768,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 767,
                    "end": 768,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 767,
                      "end": 768,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 690,
          "end": 739,
          "decorators": [],
          "name": "publicClassWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 739,
          "end": 742,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 740,
              "end": 741,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 740,
                "end": 741,
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
      "type": "ClassDeclaration",
      "start": 812,
      "end": 939,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 872,
        "end": 939,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 878,
            "end": 937,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 878,
              "end": 886,
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 886,
              "end": 937,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 898,
                "end": 937,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 920,
                    "end": 931,
                    "argument": {
                      "type": "Identifier",
                      "start": 927,
                      "end": 930,
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 887,
                  "end": 893,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 890,
                    "end": 893,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 892,
                      "end": 893,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 892,
                        "end": 893,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 894,
                "end": 897,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 896,
                  "end": 897,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 896,
                    "end": 897,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 818,
        "end": 868,
        "decorators": [],
        "name": "privateClassWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 868,
        "end": 871,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 869,
            "end": 870,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 869,
              "end": 870,
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
