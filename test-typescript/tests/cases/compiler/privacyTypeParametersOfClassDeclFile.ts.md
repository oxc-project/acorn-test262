__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3649,
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
      "start": 54,
      "end": 192,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 61,
        "end": 192,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 128,
          "end": 192,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 143,
              "end": 190,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 143,
                "end": 151,
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
                "start": 151,
                "end": 190,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 163,
                  "end": 190,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 173,
                      "end": 184,
                      "argument": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 183,
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
                    "start": 152,
                    "end": 158,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 155,
                      "end": 158,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 157,
                        "end": 158,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 157,
                          "end": 158,
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
                  "start": 159,
                  "end": 162,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 161,
                    "end": 162,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 162,
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
          "start": 67,
          "end": 103,
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
          "start": 103,
          "end": 127,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 104,
              "end": 126,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 126,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 126,
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
                "start": 104,
                "end": 105,
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
      "start": 194,
      "end": 321,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 201,
        "end": 321,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 266,
          "end": 321,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 272,
              "end": 319,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 272,
                "end": 280,
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
                "start": 280,
                "end": 319,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 292,
                  "end": 319,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 302,
                      "end": 313,
                      "argument": {
                        "type": "Identifier",
                        "start": 309,
                        "end": 312,
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
                    "start": 281,
                    "end": 287,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 284,
                      "end": 287,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 286,
                        "end": 287,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 286,
                          "end": 287,
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
                  "start": 288,
                  "end": 291,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 290,
                    "end": 291,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 290,
                      "end": 291,
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
          "start": 207,
          "end": 242,
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
          "start": 242,
          "end": 265,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 243,
              "end": 264,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 253,
                "end": 264,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 264,
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
                "start": 243,
                "end": 244,
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
      "start": 323,
      "end": 446,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 391,
        "end": 446,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 397,
            "end": 444,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 397,
              "end": 405,
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
              "start": 405,
              "end": 444,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 417,
                "end": 444,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 427,
                    "end": 438,
                    "argument": {
                      "type": "Identifier",
                      "start": 434,
                      "end": 437,
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
                  "start": 406,
                  "end": 412,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 409,
                    "end": 412,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 411,
                      "end": 412,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 411,
                        "end": 412,
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
                "start": 413,
                "end": 416,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 415,
                  "end": 416,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 415,
                    "end": 416,
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
        "start": 329,
        "end": 366,
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
        "start": 366,
        "end": 390,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 367,
            "end": 389,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 377,
              "end": 389,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 377,
                "end": 389,
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
              "start": 367,
              "end": 368,
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
      "start": 448,
      "end": 570,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 514,
        "end": 570,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 520,
            "end": 568,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 520,
              "end": 528,
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
              "start": 528,
              "end": 568,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 540,
                "end": 568,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 551,
                    "end": 562,
                    "argument": {
                      "type": "Identifier",
                      "start": 558,
                      "end": 561,
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
                  "start": 529,
                  "end": 535,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 532,
                    "end": 535,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 534,
                      "end": 535,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 534,
                        "end": 535,
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
                "start": 536,
                "end": 539,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 538,
                  "end": 539,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 538,
                    "end": 539,
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
        "start": 454,
        "end": 490,
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
        "start": 490,
        "end": 513,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 491,
            "end": 512,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 501,
              "end": 512,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 501,
                "end": 512,
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
              "start": 491,
              "end": 492,
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
      "start": 572,
      "end": 694,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 579,
        "end": 694,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 638,
          "end": 694,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 644,
              "end": 692,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 644,
                "end": 652,
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
                "start": 652,
                "end": 692,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 664,
                  "end": 692,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 675,
                      "end": 686,
                      "argument": {
                        "type": "Identifier",
                        "start": 682,
                        "end": 685,
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
                    "start": 653,
                    "end": 659,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 656,
                      "end": 659,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 658,
                        "end": 659,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 658,
                          "end": 659,
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
                  "start": 660,
                  "end": 663,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 662,
                    "end": 663,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 662,
                      "end": 663,
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
          "start": 585,
          "end": 634,
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
          "start": 634,
          "end": 637,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 635,
              "end": 636,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 635,
                "end": 636,
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
      "start": 696,
      "end": 812,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 756,
        "end": 812,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 762,
            "end": 810,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 762,
              "end": 770,
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
              "start": 770,
              "end": 810,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 782,
                "end": 810,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 793,
                    "end": 804,
                    "argument": {
                      "type": "Identifier",
                      "start": 800,
                      "end": 803,
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
                  "start": 771,
                  "end": 777,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 774,
                    "end": 777,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 776,
                      "end": 777,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 776,
                        "end": 777,
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
                "start": 778,
                "end": 781,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 780,
                  "end": 781,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 780,
                    "end": 781,
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
        "start": 702,
        "end": 752,
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
        "start": 752,
        "end": 755,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 753,
            "end": 754,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 753,
              "end": 754,
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
      "start": 814,
      "end": 990,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 821,
        "end": 990,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 926,
          "end": 990,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 941,
              "end": 988,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 941,
                "end": 949,
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
                "start": 949,
                "end": 988,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 961,
                  "end": 988,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 971,
                      "end": 982,
                      "argument": {
                        "type": "Identifier",
                        "start": 978,
                        "end": 981,
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
                    "start": 950,
                    "end": 956,
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 953,
                      "end": 956,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 955,
                        "end": 956,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 955,
                          "end": 956,
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
                  "start": 957,
                  "end": 960,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 959,
                    "end": 960,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 959,
                      "end": 960,
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
          "start": 827,
          "end": 873,
          "decorators": [],
          "name": "publicClassWithTypeParametersFromPrivateModule",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 873,
          "end": 925,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 874,
              "end": 924,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 884,
                "end": 924,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 884,
                  "end": 924,
                  "left": {
                    "type": "Identifier",
                    "start": 884,
                    "end": 897,
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 898,
                    "end": 924,
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
                "start": 874,
                "end": 875,
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
      "start": 992,
      "end": 1153,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1098,
        "end": 1153,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1104,
            "end": 1151,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1104,
              "end": 1112,
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
              "start": 1112,
              "end": 1151,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1124,
                "end": 1151,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1134,
                    "end": 1145,
                    "argument": {
                      "type": "Identifier",
                      "start": 1141,
                      "end": 1144,
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
                  "start": 1113,
                  "end": 1119,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1116,
                    "end": 1119,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1118,
                      "end": 1119,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1118,
                        "end": 1119,
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
                "start": 1120,
                "end": 1123,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1122,
                  "end": 1123,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1122,
                    "end": 1123,
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
        "start": 998,
        "end": 1045,
        "decorators": [],
        "name": "privateClassWithTypeParametersFromPrivateModule",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1045,
        "end": 1097,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1046,
            "end": 1096,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1056,
              "end": 1096,
              "typeArguments": null,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 1056,
                "end": 1096,
                "left": {
                  "type": "Identifier",
                  "start": 1056,
                  "end": 1069,
                  "decorators": [],
                  "name": "privateModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 1070,
                  "end": 1096,
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
              "start": 1046,
              "end": 1047,
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
      "start": 1155,
      "end": 2596,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 1162,
        "end": 2596,
        "body": {
          "type": "TSModuleBlock",
          "start": 1182,
          "end": 2596,
          "body": [
            {
              "type": "ClassDeclaration",
              "start": 1188,
              "end": 1228,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 1221,
                "end": 1228,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1194,
                "end": 1220,
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
              "start": 1234,
              "end": 1280,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 1241,
                "end": 1280,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 1273,
                  "end": 1280,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 1247,
                  "end": 1272,
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
              "type": "ExportNamedDeclaration",
              "start": 1286,
              "end": 1454,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 1293,
                "end": 1454,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 1374,
                  "end": 1454,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 1393,
                      "end": 1448,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 1393,
                        "end": 1401,
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
                        "start": 1401,
                        "end": 1448,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1413,
                          "end": 1448,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 1427,
                              "end": 1438,
                              "argument": {
                                "type": "Identifier",
                                "start": 1434,
                                "end": 1437,
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
                            "start": 1402,
                            "end": 1408,
                            "decorators": [],
                            "name": "val",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1405,
                              "end": 1408,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1407,
                                "end": 1408,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1407,
                                  "end": 1408,
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
                          "start": 1409,
                          "end": 1412,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1411,
                            "end": 1412,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1411,
                              "end": 1412,
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
                  "start": 1299,
                  "end": 1335,
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
                  "start": 1335,
                  "end": 1373,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1336,
                      "end": 1372,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1346,
                        "end": 1372,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1346,
                          "end": 1372,
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
                        "start": 1336,
                        "end": 1337,
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
              "start": 1460,
              "end": 1617,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 1467,
                "end": 1617,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 1546,
                  "end": 1617,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 1556,
                      "end": 1611,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 1556,
                        "end": 1564,
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
                        "start": 1564,
                        "end": 1611,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 1576,
                          "end": 1611,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 1590,
                              "end": 1601,
                              "argument": {
                                "type": "Identifier",
                                "start": 1597,
                                "end": 1600,
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
                            "start": 1565,
                            "end": 1571,
                            "decorators": [],
                            "name": "val",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1568,
                              "end": 1571,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1570,
                                "end": 1571,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1570,
                                  "end": 1571,
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
                          "start": 1572,
                          "end": 1575,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1574,
                            "end": 1575,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1574,
                              "end": 1575,
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
                  "start": 1473,
                  "end": 1508,
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
                  "start": 1508,
                  "end": 1545,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1509,
                      "end": 1544,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1519,
                        "end": 1544,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1519,
                          "end": 1544,
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
                        "start": 1509,
                        "end": 1510,
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
              "start": 1623,
              "end": 1776,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 1705,
                "end": 1776,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1715,
                    "end": 1770,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1715,
                      "end": 1723,
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
                      "start": 1723,
                      "end": 1770,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1735,
                        "end": 1770,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1749,
                            "end": 1760,
                            "argument": {
                              "type": "Identifier",
                              "start": 1756,
                              "end": 1759,
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
                          "start": 1724,
                          "end": 1730,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1727,
                            "end": 1730,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1729,
                              "end": 1730,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1729,
                                "end": 1730,
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
                        "start": 1731,
                        "end": 1734,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1733,
                          "end": 1734,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1733,
                            "end": 1734,
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
                "start": 1629,
                "end": 1666,
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
                "start": 1666,
                "end": 1704,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1667,
                    "end": 1703,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1677,
                      "end": 1703,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1677,
                        "end": 1703,
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
                      "start": 1667,
                      "end": 1668,
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
              "start": 1782,
              "end": 1933,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 1862,
                "end": 1933,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1872,
                    "end": 1927,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1872,
                      "end": 1880,
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
                      "start": 1880,
                      "end": 1927,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1892,
                        "end": 1927,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1906,
                            "end": 1917,
                            "argument": {
                              "type": "Identifier",
                              "start": 1913,
                              "end": 1916,
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
                          "start": 1881,
                          "end": 1887,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1884,
                            "end": 1887,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1886,
                              "end": 1887,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1886,
                                "end": 1887,
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
                        "start": 1888,
                        "end": 1891,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1890,
                          "end": 1891,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1890,
                            "end": 1891,
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
                "start": 1788,
                "end": 1824,
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
                "start": 1824,
                "end": 1861,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1825,
                    "end": 1860,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1835,
                      "end": 1860,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1835,
                        "end": 1860,
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
                      "start": 1825,
                      "end": 1826,
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
              "start": 1939,
              "end": 2076,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 1946,
                "end": 2076,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 2005,
                  "end": 2076,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 2015,
                      "end": 2070,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 2015,
                        "end": 2023,
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
                        "start": 2023,
                        "end": 2070,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 2035,
                          "end": 2070,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 2049,
                              "end": 2060,
                              "argument": {
                                "type": "Identifier",
                                "start": 2056,
                                "end": 2059,
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
                            "start": 2024,
                            "end": 2030,
                            "decorators": [],
                            "name": "val",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2027,
                              "end": 2030,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2029,
                                "end": 2030,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2029,
                                  "end": 2030,
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
                          "start": 2031,
                          "end": 2034,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2033,
                            "end": 2034,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2033,
                              "end": 2034,
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
                  "start": 1952,
                  "end": 2001,
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
                  "start": 2001,
                  "end": 2004,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2002,
                      "end": 2003,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 2002,
                        "end": 2003,
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
              "start": 2082,
              "end": 2213,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 2142,
                "end": 2213,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 2152,
                    "end": 2207,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2152,
                      "end": 2160,
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
                      "start": 2160,
                      "end": 2207,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2172,
                        "end": 2207,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2186,
                            "end": 2197,
                            "argument": {
                              "type": "Identifier",
                              "start": 2193,
                              "end": 2196,
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
                          "start": 2161,
                          "end": 2167,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2164,
                            "end": 2167,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2166,
                              "end": 2167,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2166,
                                "end": 2167,
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
                        "start": 2168,
                        "end": 2171,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2170,
                          "end": 2171,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2170,
                            "end": 2171,
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
                "start": 2088,
                "end": 2138,
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
                "start": 2138,
                "end": 2141,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2139,
                    "end": 2140,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 2139,
                      "end": 2140,
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
              "start": 2219,
              "end": 2411,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 2226,
                "end": 2411,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 2331,
                  "end": 2411,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 2350,
                      "end": 2405,
                      "accessibility": null,
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 2350,
                        "end": 2358,
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
                        "start": 2358,
                        "end": 2405,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 2370,
                          "end": 2405,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 2384,
                              "end": 2395,
                              "argument": {
                                "type": "Identifier",
                                "start": 2391,
                                "end": 2394,
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
                            "start": 2359,
                            "end": 2365,
                            "decorators": [],
                            "name": "val",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2362,
                              "end": 2365,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2364,
                                "end": 2365,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2364,
                                  "end": 2365,
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
                          "start": 2366,
                          "end": 2369,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2368,
                            "end": 2369,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2368,
                              "end": 2369,
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
                  "start": 2232,
                  "end": 2278,
                  "decorators": [],
                  "name": "publicClassWithTypeParametersFromPrivateModule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "implements": [],
                "superClass": null,
                "superTypeArguments": null,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2278,
                  "end": 2330,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2279,
                      "end": 2329,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2289,
                        "end": 2329,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 2289,
                          "end": 2329,
                          "left": {
                            "type": "Identifier",
                            "start": 2289,
                            "end": 2302,
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 2303,
                            "end": 2329,
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
                        "start": 2279,
                        "end": 2280,
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
              "start": 2417,
              "end": 2594,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 2523,
                "end": 2594,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 2533,
                    "end": 2588,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2533,
                      "end": 2541,
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
                      "start": 2541,
                      "end": 2588,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2553,
                        "end": 2588,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2567,
                            "end": 2578,
                            "argument": {
                              "type": "Identifier",
                              "start": 2574,
                              "end": 2577,
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
                          "start": 2542,
                          "end": 2548,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2545,
                            "end": 2548,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2547,
                              "end": 2548,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2547,
                                "end": 2548,
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
                        "start": 2549,
                        "end": 2552,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2551,
                          "end": 2552,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2551,
                            "end": 2552,
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
                "start": 2423,
                "end": 2470,
                "decorators": [],
                "name": "privateClassWithTypeParametersFromPrivateModule",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2470,
                "end": 2522,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2471,
                    "end": 2521,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 2481,
                      "end": 2521,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 2481,
                        "end": 2521,
                        "left": {
                          "type": "Identifier",
                          "start": 2481,
                          "end": 2494,
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2495,
                          "end": 2521,
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
                      "start": 2471,
                      "end": 2472,
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
          "start": 1169,
          "end": 1181,
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
      "start": 2598,
      "end": 3649,
      "body": {
        "type": "TSModuleBlock",
        "start": 2619,
        "end": 3649,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 2625,
            "end": 2666,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 2659,
              "end": 2666,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 2631,
              "end": 2658,
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
            "start": 2672,
            "end": 2719,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 2679,
              "end": 2719,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 2712,
                "end": 2719,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 2685,
                "end": 2711,
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
            "type": "ExportNamedDeclaration",
            "start": 2725,
            "end": 2885,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 2732,
              "end": 2885,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 2814,
                "end": 2885,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 2824,
                    "end": 2879,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2824,
                      "end": 2832,
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
                      "start": 2832,
                      "end": 2879,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2844,
                        "end": 2879,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 2858,
                            "end": 2869,
                            "argument": {
                              "type": "Identifier",
                              "start": 2865,
                              "end": 2868,
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
                          "start": 2833,
                          "end": 2839,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2836,
                            "end": 2839,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2838,
                              "end": 2839,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2838,
                                "end": 2839,
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
                        "start": 2840,
                        "end": 2843,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2842,
                          "end": 2843,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2842,
                            "end": 2843,
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
                "start": 2738,
                "end": 2774,
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
                "start": 2774,
                "end": 2813,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2775,
                    "end": 2812,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 2785,
                      "end": 2812,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2785,
                        "end": 2812,
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
                      "start": 2775,
                      "end": 2776,
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
            "start": 2891,
            "end": 3049,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 2898,
              "end": 3049,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 2978,
                "end": 3049,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 2988,
                    "end": 3043,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 2988,
                      "end": 2996,
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
                      "start": 2996,
                      "end": 3043,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 3008,
                        "end": 3043,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 3022,
                            "end": 3033,
                            "argument": {
                              "type": "Identifier",
                              "start": 3029,
                              "end": 3032,
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
                          "start": 2997,
                          "end": 3003,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3000,
                            "end": 3003,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3002,
                              "end": 3003,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3002,
                                "end": 3003,
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
                        "start": 3004,
                        "end": 3007,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3006,
                          "end": 3007,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3006,
                            "end": 3007,
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
                "start": 2904,
                "end": 2939,
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
                "start": 2939,
                "end": 2977,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2940,
                    "end": 2976,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 2950,
                      "end": 2976,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2950,
                        "end": 2976,
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
                      "start": 2940,
                      "end": 2941,
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
            "start": 3055,
            "end": 3209,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 3138,
              "end": 3209,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 3148,
                  "end": 3203,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 3148,
                    "end": 3156,
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
                    "start": 3156,
                    "end": 3203,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3168,
                      "end": 3203,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 3182,
                          "end": 3193,
                          "argument": {
                            "type": "Identifier",
                            "start": 3189,
                            "end": 3192,
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
                        "start": 3157,
                        "end": 3163,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3160,
                          "end": 3163,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3162,
                            "end": 3163,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3162,
                              "end": 3163,
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
                      "start": 3164,
                      "end": 3167,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3166,
                        "end": 3167,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3166,
                          "end": 3167,
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
              "start": 3061,
              "end": 3098,
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
              "start": 3098,
              "end": 3137,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3099,
                  "end": 3136,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3109,
                    "end": 3136,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3109,
                      "end": 3136,
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
                    "start": 3099,
                    "end": 3100,
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
            "start": 3215,
            "end": 3367,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 3296,
              "end": 3367,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 3306,
                  "end": 3361,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 3306,
                    "end": 3314,
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
                    "start": 3314,
                    "end": 3361,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3326,
                      "end": 3361,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 3340,
                          "end": 3351,
                          "argument": {
                            "type": "Identifier",
                            "start": 3347,
                            "end": 3350,
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
                        "start": 3315,
                        "end": 3321,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3318,
                          "end": 3321,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3320,
                            "end": 3321,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3320,
                              "end": 3321,
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
                      "start": 3322,
                      "end": 3325,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3324,
                        "end": 3325,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3324,
                          "end": 3325,
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
              "start": 3221,
              "end": 3257,
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
              "start": 3257,
              "end": 3295,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3258,
                  "end": 3294,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3268,
                    "end": 3294,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3268,
                      "end": 3294,
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
                    "start": 3258,
                    "end": 3259,
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
            "start": 3373,
            "end": 3510,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 3380,
              "end": 3510,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 3439,
                "end": 3510,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 3449,
                    "end": 3504,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 3449,
                      "end": 3457,
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
                      "start": 3457,
                      "end": 3504,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 3469,
                        "end": 3504,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 3483,
                            "end": 3494,
                            "argument": {
                              "type": "Identifier",
                              "start": 3490,
                              "end": 3493,
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
                          "start": 3458,
                          "end": 3464,
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3461,
                            "end": 3464,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 3463,
                              "end": 3464,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3463,
                                "end": 3464,
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
                        "start": 3465,
                        "end": 3468,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3467,
                          "end": 3468,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3467,
                            "end": 3468,
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
                "start": 3386,
                "end": 3435,
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
                "start": 3435,
                "end": 3438,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3436,
                    "end": 3437,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 3436,
                      "end": 3437,
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
            "start": 3516,
            "end": 3647,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 3576,
              "end": 3647,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 3586,
                  "end": 3641,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 3586,
                    "end": 3594,
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
                    "start": 3594,
                    "end": 3641,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 3606,
                      "end": 3641,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 3620,
                          "end": 3631,
                          "argument": {
                            "type": "Identifier",
                            "start": 3627,
                            "end": 3630,
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
                        "start": 3595,
                        "end": 3601,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3598,
                          "end": 3601,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3600,
                            "end": 3601,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3600,
                              "end": 3601,
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
                      "start": 3602,
                      "end": 3605,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3604,
                        "end": 3605,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3604,
                          "end": 3605,
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
              "start": 3522,
              "end": 3572,
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
              "start": 3572,
              "end": 3575,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3573,
                  "end": 3574,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3573,
                    "end": 3574,
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
        "start": 2605,
        "end": 2618,
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
