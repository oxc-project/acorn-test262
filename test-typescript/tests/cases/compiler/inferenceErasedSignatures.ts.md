__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 1557,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 22,
      "end": 117,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 50,
        "end": 117,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 56,
            "end": 115,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 59,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 59,
              "end": 115,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 82,
                  "end": 88,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 87,
                      "end": 88,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 88,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 90,
                  "end": 104,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 95,
                    "end": 104,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "start": 97,
                      "end": 104,
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 102,
                        "end": 103,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 103,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "objectType": {
                        "type": "TSThisType",
                        "start": 97,
                        "end": 101
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 105,
                "end": 114,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 107,
                  "end": 114,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 112,
                    "end": 113,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSThisType",
                    "start": 107,
                    "end": 111
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 59,
                "end": 81,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 60,
                    "end": 80,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 70,
                      "end": 80,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 76,
                        "end": 80
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 61,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 49,
        "decorators": [],
        "name": "SomeBaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 119,
      "end": 278,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 183,
        "end": 278,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 189,
            "end": 211,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 189,
              "end": 192,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 210,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 195,
                "end": 210,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 196,
                    "end": 201,
                    "decorators": [],
                    "name": "r",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 198,
                      "end": 201,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 200,
                        "end": 201,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 201,
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 203,
                  "end": 210,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 206,
                    "end": 210
                  }
                },
                "typeParameters": null
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 216,
            "end": 240,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 216,
              "end": 219,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 239,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 222,
                "end": 239,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 223,
                    "end": 230,
                    "decorators": [],
                    "name": "r",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 225,
                      "end": 230,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 227,
                        "end": 230
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 232,
                  "end": 239,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 235,
                    "end": 239
                  }
                },
                "typeParameters": null
              }
            },
            "value": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 245,
            "end": 276,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 257,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 257,
              "end": 276,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 258,
                  "end": 262,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 259,
                    "end": 262,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 261,
                      "end": 262,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 261,
                        "end": 262,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 263,
                "end": 275,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 265,
                  "end": 275,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 272,
                    "end": 275,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 273,
                        "end": 274,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 273,
                          "end": 274,
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 265,
                    "end": 272,
                    "decorators": [],
                    "name": "Promise",
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
        "start": 134,
        "end": 151,
        "decorators": [],
        "name": "SomeAbstractClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 169,
        "end": 182,
        "decorators": [],
        "name": "SomeBaseClass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 151,
        "end": 160,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 153,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 155,
            "end": 156,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 158,
            "end": 159,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "decorators": [],
              "name": "R",
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
      "start": 280,
      "end": 435,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 347,
        "end": 435,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 353,
            "end": 433,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 359,
              "end": 362,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 362,
              "end": 433,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 397,
                "end": 433,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 407,
                    "end": 427,
                    "argument": {
                      "type": "TemplateLiteral",
                      "start": 414,
                      "end": 426,
                      "expressions": [
                        {
                          "type": "Identifier",
                          "start": 417,
                          "end": 424,
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 414,
                          "end": 417,
                          "tail": false,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "start": 424,
                          "end": 426,
                          "tail": true,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          }
                        }
                      ]
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
                  "start": 363,
                  "end": 378,
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 370,
                    "end": 378,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 372,
                      "end": 378
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 379,
                "end": 396,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 381,
                  "end": 396,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 388,
                    "end": 396,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 389,
                        "end": 395
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 381,
                    "end": 388,
                    "decorators": [],
                    "name": "Promise",
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
        "start": 286,
        "end": 295,
        "decorators": [],
        "name": "SomeClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 304,
        "end": 321,
        "decorators": [],
        "name": "SomeAbstractClass",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 321,
        "end": 346,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 322,
            "end": 328
          },
          {
            "type": "TSStringKeyword",
            "start": 330,
            "end": 336
          },
          {
            "type": "TSBooleanKeyword",
            "start": 338,
            "end": 345
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 437,
      "end": 512,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 442,
        "end": 447,
        "decorators": [],
        "name": "CType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 453,
        "end": 511,
        "checkType": {
          "type": "TSTypeReference",
          "start": 453,
          "end": 454,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 453,
            "end": 454,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 463,
          "end": 499,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 480,
            "end": 499,
            "params": [
              {
                "type": "TSInferType",
                "start": 481,
                "end": 488,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 487,
                  "end": 488,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 487,
                    "end": 488,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              },
              {
                "type": "TSAnyKeyword",
                "start": 490,
                "end": 493
              },
              {
                "type": "TSAnyKeyword",
                "start": 495,
                "end": 498
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 463,
            "end": 480,
            "decorators": [],
            "name": "SomeAbstractClass",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 506,
          "end": 511
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 502,
          "end": 503,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 502,
            "end": 503,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 447,
        "end": 450,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 448,
            "end": 449,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 448,
              "end": 449,
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
      "type": "TSTypeAliasDeclaration",
      "start": 513,
      "end": 588,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 518,
        "end": 523,
        "decorators": [],
        "name": "MType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 529,
        "end": 587,
        "checkType": {
          "type": "TSTypeReference",
          "start": 529,
          "end": 530,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 529,
            "end": 530,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 539,
          "end": 575,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 556,
            "end": 575,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 557,
                "end": 560
              },
              {
                "type": "TSInferType",
                "start": 562,
                "end": 569,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 568,
                  "end": 569,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 568,
                    "end": 569,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              },
              {
                "type": "TSAnyKeyword",
                "start": 571,
                "end": 574
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 539,
            "end": 556,
            "decorators": [],
            "name": "SomeAbstractClass",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 582,
          "end": 587
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 578,
          "end": 579,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 578,
            "end": 579,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 523,
        "end": 526,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 524,
            "end": 525,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 524,
              "end": 525,
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
      "type": "TSTypeAliasDeclaration",
      "start": 589,
      "end": 664,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 594,
        "end": 599,
        "decorators": [],
        "name": "RType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 605,
        "end": 663,
        "checkType": {
          "type": "TSTypeReference",
          "start": 605,
          "end": 606,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 605,
            "end": 606,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 615,
          "end": 651,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 632,
            "end": 651,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 633,
                "end": 636
              },
              {
                "type": "TSAnyKeyword",
                "start": 638,
                "end": 641
              },
              {
                "type": "TSInferType",
                "start": 643,
                "end": 650,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 649,
                  "end": 650,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 649,
                    "end": 650,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 615,
            "end": 632,
            "decorators": [],
            "name": "SomeAbstractClass",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 658,
          "end": 663
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 654,
          "end": 655,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 654,
            "end": 655,
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 599,
        "end": 602,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 600,
            "end": 601,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 600,
              "end": 601,
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
      "type": "TSTypeAliasDeclaration",
      "start": 666,
      "end": 701,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 671,
        "end": 681,
        "decorators": [],
        "name": "SomeClassC",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 684,
        "end": 700,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 689,
          "end": 700,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 690,
              "end": 699,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 690,
                "end": 699,
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 684,
          "end": 689,
          "decorators": [],
          "name": "CType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 712,
      "end": 747,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 717,
        "end": 727,
        "decorators": [],
        "name": "SomeClassM",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 730,
        "end": 746,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 735,
          "end": 746,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 736,
              "end": 745,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 736,
                "end": 745,
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 730,
          "end": 735,
          "decorators": [],
          "name": "MType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 758,
      "end": 793,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 763,
        "end": 773,
        "decorators": [],
        "name": "SomeClassR",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 776,
        "end": 792,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 781,
          "end": 792,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 782,
              "end": 791,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 782,
                "end": 791,
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 776,
          "end": 781,
          "decorators": [],
          "name": "RType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 828,
      "end": 1020,
      "body": {
        "type": "TSInterfaceBody",
        "start": 856,
        "end": 1020,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 862,
            "end": 921,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 862,
              "end": 865,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 888,
                "end": 894,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 891,
                  "end": 894,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 893,
                    "end": 894,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 893,
                      "end": 894,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 896,
                "end": 910,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 901,
                  "end": 910,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 903,
                    "end": 910,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 908,
                      "end": 909,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 908,
                        "end": 909,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "objectType": {
                      "type": "TSThisType",
                      "start": 903,
                      "end": 907
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 911,
              "end": 920,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 913,
                "end": 920,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 918,
                  "end": 919,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 918,
                    "end": 919,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSThisType",
                  "start": 913,
                  "end": 917
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 865,
              "end": 887,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 866,
                  "end": 886,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 876,
                    "end": 886,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 882,
                      "end": 886
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 866,
                    "end": 867,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 926,
            "end": 945,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 926,
              "end": 931,
              "decorators": [],
              "name": "useT1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 932,
                "end": 937,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 933,
                  "end": 937,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 935,
                    "end": 937,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 935,
                      "end": 937,
                      "decorators": [],
                      "name": "T1",
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
              "start": 938,
              "end": 944,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 940,
                "end": 944
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 950,
            "end": 970,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 950,
              "end": 955,
              "decorators": [],
              "name": "useT2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 956,
                "end": 962,
                "decorators": [],
                "name": "r",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 958,
                  "end": 962,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 960,
                    "end": 962,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 960,
                      "end": 962,
                      "decorators": [],
                      "name": "T2",
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
              "start": 963,
              "end": 969,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 965,
                "end": 969
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 975,
            "end": 1018,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 975,
              "end": 1002,
              "decorators": [],
              "name": "unrelatedButSomehowRelevant",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1003,
                "end": 1010,
                "decorators": [],
                "name": "r",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1005,
                  "end": 1010,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1007,
                    "end": 1010
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1011,
              "end": 1017,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1013,
                "end": 1017
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
        "start": 838,
        "end": 846,
        "decorators": [],
        "name": "BaseType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 846,
        "end": 854,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 847,
            "end": 849,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 847,
              "end": 849,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 851,
            "end": 853,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 851,
              "end": 853,
              "decorators": [],
              "name": "T2",
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
      "start": 1022,
      "end": 1159,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1080,
        "end": 1159,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1135,
            "end": 1157,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1135,
              "end": 1140,
              "decorators": [],
              "name": "useT1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1141,
                "end": 1150,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1142,
                  "end": 1150,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1144,
                    "end": 1150
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1151,
              "end": 1157,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1153,
                "end": 1157
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1054,
          "end": 1079,
          "expression": {
            "type": "Identifier",
            "start": 1054,
            "end": 1062,
            "decorators": [],
            "name": "BaseType",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1062,
            "end": 1079,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1063,
                "end": 1069
              },
              {
                "type": "TSBooleanKeyword",
                "start": 1071,
                "end": 1078
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1032,
        "end": 1045,
        "decorators": [],
        "name": "InheritedType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1202,
      "end": 1404,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1231,
        "end": 1404,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1237,
            "end": 1296,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1237,
              "end": 1240,
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1263,
                "end": 1269,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1266,
                  "end": 1269,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1268,
                    "end": 1269,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1268,
                      "end": 1269,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1271,
                "end": 1285,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1276,
                  "end": 1285,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 1278,
                    "end": 1285,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 1283,
                      "end": 1284,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1283,
                        "end": 1284,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "objectType": {
                      "type": "TSThisType",
                      "start": 1278,
                      "end": 1282
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1286,
              "end": 1295,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 1288,
                "end": 1295,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1293,
                  "end": 1294,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1293,
                    "end": 1294,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSThisType",
                  "start": 1288,
                  "end": 1292
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1240,
              "end": 1262,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1241,
                  "end": 1261,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 1251,
                    "end": 1261,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 1257,
                      "end": 1261
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1241,
                    "end": 1242,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 1301,
            "end": 1324,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1301,
              "end": 1306,
              "decorators": [],
              "name": "useT1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1307,
                "end": 1316,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1308,
                  "end": 1316,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1310,
                    "end": 1316
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1317,
              "end": 1323,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1319,
                "end": 1323
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1329,
            "end": 1354,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1329,
              "end": 1334,
              "decorators": [],
              "name": "useT2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1335,
                "end": 1346,
                "decorators": [],
                "name": "r",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1337,
                  "end": 1346,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1339,
                    "end": 1346
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1347,
              "end": 1353,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1349,
                "end": 1353
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1359,
            "end": 1402,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1359,
              "end": 1386,
              "decorators": [],
              "name": "unrelatedButSomehowRelevant",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1387,
                "end": 1394,
                "decorators": [],
                "name": "r",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1389,
                  "end": 1394,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1391,
                    "end": 1394
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1395,
              "end": 1401,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1397,
                "end": 1401
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
        "start": 1212,
        "end": 1229,
        "decorators": [],
        "name": "StructuralVersion",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1406,
      "end": 1467,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1411,
        "end": 1416,
        "decorators": [],
        "name": "GetT1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1422,
        "end": 1466,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1422,
          "end": 1423,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1422,
            "end": 1423,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 1432,
          "end": 1454,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1440,
            "end": 1454,
            "params": [
              {
                "type": "TSInferType",
                "start": 1441,
                "end": 1448,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1447,
                  "end": 1448,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1447,
                    "end": 1448,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              },
              {
                "type": "TSAnyKeyword",
                "start": 1450,
                "end": 1453
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1432,
            "end": 1440,
            "decorators": [],
            "name": "BaseType",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1461,
          "end": 1466
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1457,
          "end": 1458,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1457,
            "end": 1458,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1416,
        "end": 1419,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1417,
            "end": 1418,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1417,
              "end": 1418,
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
      "type": "TSTypeAliasDeclaration",
      "start": 1469,
      "end": 1500,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1474,
        "end": 1476,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1479,
        "end": 1499,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1484,
          "end": 1499,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1485,
              "end": 1498,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1485,
                "end": 1498,
                "decorators": [],
                "name": "InheritedType",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1479,
          "end": 1484,
          "decorators": [],
          "name": "GetT1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1511,
      "end": 1546,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1516,
        "end": 1518,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1521,
        "end": 1545,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1526,
          "end": 1545,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1527,
              "end": 1544,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1527,
                "end": 1544,
                "decorators": [],
                "name": "StructuralVersion",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1521,
          "end": 1526,
          "decorators": [],
          "name": "GetT1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
