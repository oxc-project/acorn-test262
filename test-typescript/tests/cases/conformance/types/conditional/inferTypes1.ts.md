__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 6393,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 142,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "Unpacked",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 23,
        "end": 141,
        "checkType": {
          "type": "TSTypeReference",
          "start": 23,
          "end": 24,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "start": 33,
          "end": 44,
          "elementType": {
            "type": "TSInferType",
            "start": 34,
            "end": 41,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 40,
              "end": 41,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 55,
          "end": 141,
          "checkType": {
            "type": "TSTypeReference",
            "start": 55,
            "end": 56,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "extendsType": {
            "type": "TSFunctionType",
            "start": 65,
            "end": 92,
            "params": [
              {
                "type": "RestElement",
                "start": 66,
                "end": 80,
                "argument": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 73,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 73,
                  "end": 80,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 75,
                    "end": 80,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 75,
                      "end": 78
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 92,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 85,
                "end": 92,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 91,
                  "end": 92,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 92,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            },
            "typeParameters": null
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 103,
            "end": 141,
            "checkType": {
              "type": "TSTypeReference",
              "start": 103,
              "end": 104,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 113,
              "end": 129,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 120,
                "end": 129,
                "params": [
                  {
                    "type": "TSInferType",
                    "start": 121,
                    "end": 128,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 127,
                      "end": 128,
                      "const": false,
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 128,
                        "decorators": [],
                        "name": "U",
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
                "start": 113,
                "end": 120,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "falseType": {
              "type": "TSTypeReference",
              "start": 140,
              "end": 141,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 140,
                "end": 141,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 132,
              "end": 133,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 132,
                "end": 133,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 95,
            "end": 96,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 47,
          "end": 48,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
      "start": 144,
      "end": 172,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 152,
        "decorators": [],
        "name": "T00",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 155,
        "end": 171,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 163,
          "end": 171,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 164,
              "end": 170
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 155,
          "end": 163,
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 184,
      "end": 214,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 192,
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 195,
        "end": 213,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 203,
          "end": 213,
          "params": [
            {
              "type": "TSArrayType",
              "start": 204,
              "end": 212,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 204,
                "end": 210
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 195,
          "end": 203,
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 226,
      "end": 260,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 234,
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 237,
        "end": 259,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 245,
          "end": 259,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 246,
              "end": 258,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 249,
                "end": 258,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 252,
                  "end": 258
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 237,
          "end": 245,
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 272,
      "end": 309,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 280,
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 283,
        "end": 308,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 291,
          "end": 308,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 292,
              "end": 307,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 299,
                "end": 307,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 300,
                    "end": 306
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 292,
                "end": 299,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 283,
          "end": 291,
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 321,
      "end": 370,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 326,
        "end": 329,
        "decorators": [],
        "name": "T04",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 332,
        "end": 369,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 340,
          "end": 369,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 341,
              "end": 368,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 349,
                "end": 368,
                "params": [
                  {
                    "type": "TSArrayType",
                    "start": 350,
                    "end": 367,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 350,
                      "end": 365,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 357,
                        "end": 365,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 358,
                            "end": 364
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 350,
                        "end": 357,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 341,
                "end": 349,
                "decorators": [],
                "name": "Unpacked",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 332,
          "end": 340,
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 382,
      "end": 407,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 387,
        "end": 390,
        "decorators": [],
        "name": "T05",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 393,
        "end": 406,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 401,
          "end": 406,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 402,
              "end": 405
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 393,
          "end": 401,
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 416,
      "end": 443,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 421,
        "end": 424,
        "decorators": [],
        "name": "T06",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 427,
        "end": 442,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 435,
          "end": 442,
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 436,
              "end": 441
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 427,
          "end": 435,
          "decorators": [],
          "name": "Unpacked",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 455,
      "end": 508,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 478,
        "end": 508,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 484,
            "end": 506,
            "argument": {
              "type": "ObjectExpression",
              "start": 491,
              "end": 505,
              "properties": [
                {
                  "type": "Property",
                  "start": 493,
                  "end": 497,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 493,
                    "end": 494,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 496,
                    "end": 497,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 499,
                  "end": 503,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 499,
                    "end": 500,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 502,
                    "end": 503,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
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
      "id": {
        "type": "Identifier",
        "start": 464,
        "end": 466,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 467,
          "end": 476,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 468,
            "end": 476,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 470,
              "end": 476
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 510,
      "end": 543,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 518,
        "end": 543,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 524,
            "end": 530,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 524,
              "end": 525,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 528,
              "end": 529,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 535,
            "end": 541,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 535,
              "end": 536,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 539,
              "end": 540,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 516,
        "end": 517,
        "decorators": [],
        "name": "C",
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
      "start": 545,
      "end": 594,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 569,
        "end": 594,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 575,
            "end": 581,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 575,
              "end": 576,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 579,
              "end": 580,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 586,
            "end": 592,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 586,
              "end": 587,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 590,
              "end": 591,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 560,
        "end": 568,
        "decorators": [],
        "name": "Abstract",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 596,
      "end": 632,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 601,
        "end": 604,
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 607,
        "end": 631,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 617,
          "end": 631,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 618,
              "end": 630,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 621,
                "end": 630,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 624,
                  "end": 630
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 607,
          "end": 617,
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 644,
      "end": 687,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 649,
        "end": 652,
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 655,
        "end": 686,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 665,
          "end": 686,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 666,
              "end": 685,
              "params": [
                {
                  "type": "Identifier",
                  "start": 667,
                  "end": 676,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 668,
                    "end": 676,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 670,
                      "end": 676
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 678,
                "end": 685,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 681,
                  "end": 685
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 655,
          "end": 665,
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 697,
      "end": 733,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 702,
        "end": 705,
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 708,
        "end": 732,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 718,
          "end": 732,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 720,
              "end": 730,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 726,
                "end": 730,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 729,
                  "end": 730,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 729,
                    "end": 730,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 720,
                "end": 723,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 721,
                    "end": 722,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 721,
                      "end": 722,
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
        "typeName": {
          "type": "Identifier",
          "start": 708,
          "end": 718,
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 741,
      "end": 807,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 746,
        "end": 749,
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 752,
        "end": 806,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 762,
          "end": 806,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 764,
              "end": 804,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 800,
                "end": 804,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 803,
                  "end": 804,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 803,
                    "end": 804,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 764,
                "end": 797,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 765,
                    "end": 776,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 775,
                      "end": 776,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 775,
                        "end": 776,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 765,
                      "end": 766,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 778,
                    "end": 796,
                    "const": false,
                    "constraint": {
                      "type": "TSArrayType",
                      "start": 788,
                      "end": 796,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 788,
                        "end": 794
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 778,
                      "end": 779,
                      "decorators": [],
                      "name": "U",
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
        "typeName": {
          "type": "Identifier",
          "start": 752,
          "end": 762,
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 821,
      "end": 854,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 826,
        "end": 829,
        "decorators": [],
        "name": "T14",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 832,
        "end": 853,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 842,
          "end": 853,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 843,
              "end": 852,
              "exprName": {
                "type": "Identifier",
                "start": 850,
                "end": 852,
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 832,
          "end": 842,
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 884,
      "end": 911,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 889,
        "end": 892,
        "decorators": [],
        "name": "T15",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 895,
        "end": 910,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 905,
          "end": 910,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 906,
              "end": 909
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 895,
          "end": 905,
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 920,
      "end": 949,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 925,
        "end": 928,
        "decorators": [],
        "name": "T16",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 931,
        "end": 948,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 941,
          "end": 948,
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 942,
              "end": 947
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 931,
          "end": 941,
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 960,
      "end": 990,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 965,
        "end": 968,
        "decorators": [],
        "name": "T17",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 971,
        "end": 989,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 981,
          "end": 989,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 982,
              "end": 988
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 971,
          "end": 981,
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1001,
      "end": 1033,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1006,
        "end": 1009,
        "decorators": [],
        "name": "T18",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1012,
        "end": 1032,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1022,
          "end": 1032,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1023,
              "end": 1031,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1023,
                "end": 1031,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1012,
          "end": 1022,
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1044,
      "end": 1115,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1049,
        "end": 1052,
        "decorators": [],
        "name": "T19",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1072,
        "end": 1114,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1082,
          "end": 1114,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 1083,
              "end": 1113,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1084,
                  "end": 1093,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1085,
                    "end": 1093,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1087,
                      "end": 1093
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1095,
                  "end": 1105,
                  "argument": {
                    "type": "Identifier",
                    "start": 1098,
                    "end": 1102,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1102,
                    "end": 1105,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1104,
                      "end": 1105,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1104,
                        "end": 1105,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1107,
                "end": 1113,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1110,
                  "end": 1113,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 1110,
                    "end": 1111,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1110,
                      "end": 1111,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1072,
          "end": 1082,
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1052,
        "end": 1069,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1053,
            "end": 1068,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 1063,
              "end": 1068,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1063,
                "end": 1066
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1053,
              "end": 1054,
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
      "start": 1125,
      "end": 1159,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1130,
        "end": 1133,
        "decorators": [],
        "name": "U10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1136,
        "end": 1158,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1148,
          "end": 1158,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 1149,
              "end": 1157,
              "exprName": {
                "type": "Identifier",
                "start": 1156,
                "end": 1157,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1136,
          "end": 1148,
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1166,
      "end": 1195,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1171,
        "end": 1174,
        "decorators": [],
        "name": "U11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1177,
        "end": 1194,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1189,
          "end": 1194,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 1190,
              "end": 1193
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1177,
          "end": 1189,
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1204,
      "end": 1235,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1209,
        "end": 1212,
        "decorators": [],
        "name": "U12",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1215,
        "end": 1234,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1227,
          "end": 1234,
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 1228,
              "end": 1233
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1215,
          "end": 1227,
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1246,
      "end": 1278,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1251,
        "end": 1254,
        "decorators": [],
        "name": "U13",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1257,
        "end": 1277,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1269,
          "end": 1277,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1270,
              "end": 1276
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1257,
          "end": 1269,
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1289,
      "end": 1323,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1294,
        "end": 1297,
        "decorators": [],
        "name": "U14",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1300,
        "end": 1322,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1312,
          "end": 1322,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1313,
              "end": 1321,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1313,
                "end": 1321,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1300,
          "end": 1312,
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1334,
      "end": 1375,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1339,
        "end": 1342,
        "decorators": [],
        "name": "U15",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1345,
        "end": 1374,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1357,
          "end": 1374,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 1358,
              "end": 1373,
              "exprName": {
                "type": "Identifier",
                "start": 1365,
                "end": 1373,
                "decorators": [],
                "name": "Abstract",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1345,
          "end": 1357,
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1389,
      "end": 1466,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1394,
        "end": 1397,
        "decorators": [],
        "name": "U16",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1417,
        "end": 1465,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1429,
          "end": 1465,
          "params": [
            {
              "type": "TSConstructorType",
              "start": 1430,
              "end": 1464,
              "abstract": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1435,
                  "end": 1444,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1436,
                    "end": 1444,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1438,
                      "end": 1444
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1446,
                  "end": 1456,
                  "argument": {
                    "type": "Identifier",
                    "start": 1449,
                    "end": 1453,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1453,
                    "end": 1456,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1455,
                      "end": 1456,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1455,
                        "end": 1456,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1458,
                "end": 1464,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1461,
                  "end": 1464,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 1461,
                    "end": 1462,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1461,
                      "end": 1462,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1417,
          "end": 1429,
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1397,
        "end": 1414,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1398,
            "end": 1413,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 1408,
              "end": 1413,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1408,
                "end": 1411
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1398,
              "end": 1399,
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
      "start": 1475,
      "end": 1561,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1480,
        "end": 1483,
        "decorators": [],
        "name": "U17",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1503,
        "end": 1560,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1515,
          "end": 1560,
          "params": [
            {
              "type": "TSConstructorType",
              "start": 1516,
              "end": 1559,
              "abstract": true,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1530,
                  "end": 1539,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1531,
                    "end": 1539,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1533,
                      "end": 1539
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 1541,
                  "end": 1551,
                  "argument": {
                    "type": "Identifier",
                    "start": 1544,
                    "end": 1548,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1548,
                    "end": 1551,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1550,
                      "end": 1551,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1550,
                        "end": 1551,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1553,
                "end": 1559,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1556,
                  "end": 1559,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 1556,
                    "end": 1557,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1556,
                      "end": 1557,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1503,
          "end": 1515,
          "decorators": [],
          "name": "InstanceType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1483,
        "end": 1500,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1484,
            "end": 1499,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 1494,
              "end": 1499,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1494,
                "end": 1497
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1484,
              "end": 1485,
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
      "start": 1571,
      "end": 1658,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1576,
        "end": 1588,
        "decorators": [],
        "name": "ArgumentType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1618,
        "end": 1657,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1618,
          "end": 1619,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1618,
            "end": 1619,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 1628,
          "end": 1647,
          "params": [
            {
              "type": "Identifier",
              "start": 1629,
              "end": 1639,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1630,
                "end": 1639,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 1632,
                  "end": 1639,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1638,
                    "end": 1639,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1638,
                      "end": 1639,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1641,
            "end": 1647,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1644,
              "end": 1647
            }
          },
          "typeParameters": null
        },
        "falseType": {
          "type": "TSAnyKeyword",
          "start": 1654,
          "end": 1657
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 1650,
          "end": 1651,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1650,
            "end": 1651,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1588,
        "end": 1615,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1589,
            "end": 1614,
            "const": false,
            "constraint": {
              "type": "TSFunctionType",
              "start": 1599,
              "end": 1614,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1600,
                  "end": 1606,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1601,
                    "end": 1606,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1603,
                      "end": 1606
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1608,
                "end": 1614,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1611,
                  "end": 1614
                }
              },
              "typeParameters": null
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1589,
              "end": 1590,
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
      "start": 1660,
      "end": 1696,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1665,
        "end": 1668,
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1671,
        "end": 1695,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1683,
          "end": 1695,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 1684,
              "end": 1694,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1687,
                "end": 1694,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1690,
                  "end": 1694
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1671,
          "end": 1683,
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1704,
      "end": 1751,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1709,
        "end": 1712,
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1715,
        "end": 1750,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1727,
          "end": 1750,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 1728,
              "end": 1749,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1729,
                  "end": 1738,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1730,
                    "end": 1738,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1732,
                      "end": 1738
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1740,
                "end": 1749,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1743,
                  "end": 1749
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1715,
          "end": 1727,
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1763,
      "end": 1811,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1768,
        "end": 1771,
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1774,
        "end": 1810,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1786,
          "end": 1810,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 1787,
              "end": 1809,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1788,
                  "end": 1798,
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1790,
                    "end": 1798,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1792,
                      "end": 1798
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1800,
                "end": 1809,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1803,
                  "end": 1809
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1774,
          "end": 1786,
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1835,
      "end": 1890,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1840,
        "end": 1843,
        "decorators": [],
        "name": "T23",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1846,
        "end": 1889,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1858,
          "end": 1889,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 1859,
              "end": 1888,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1860,
                  "end": 1877,
                  "argument": {
                    "type": "Identifier",
                    "start": 1863,
                    "end": 1867,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1867,
                    "end": 1877,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1869,
                      "end": 1877,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 1869,
                        "end": 1875
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1879,
                "end": 1888,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1882,
                  "end": 1888
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1846,
          "end": 1858,
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1902,
      "end": 1960,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1907,
        "end": 1910,
        "decorators": [],
        "name": "T24",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1913,
        "end": 1959,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1925,
          "end": 1959,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 1926,
              "end": 1958,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1927,
                  "end": 1936,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1928,
                    "end": 1936,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1930,
                      "end": 1936
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1938,
                  "end": 1947,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1939,
                    "end": 1947,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1941,
                      "end": 1947
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1949,
                "end": 1958,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1952,
                  "end": 1958
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1913,
          "end": 1925,
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1971,
      "end": 2005,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1976,
        "end": 1979,
        "decorators": [],
        "name": "T25",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1982,
        "end": 2004,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1994,
          "end": 2004,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1995,
              "end": 2003,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1995,
                "end": 2003,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1982,
          "end": 1994,
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2016,
      "end": 2045,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2021,
        "end": 2024,
        "decorators": [],
        "name": "T26",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2027,
        "end": 2044,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2039,
          "end": 2044,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 2040,
              "end": 2043
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2027,
          "end": 2039,
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2054,
      "end": 2085,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2059,
        "end": 2062,
        "decorators": [],
        "name": "T27",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2065,
        "end": 2084,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2077,
          "end": 2084,
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 2078,
              "end": 2083
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2065,
          "end": 2077,
          "decorators": [],
          "name": "ArgumentType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2097,
      "end": 2189,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2102,
        "end": 2104,
        "decorators": [],
        "name": "X1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2137,
        "end": 2188,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2137,
          "end": 2138,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 2137,
            "end": 2138,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 2147,
          "end": 2173,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 2149,
              "end": 2160,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2149,
                "end": 2150,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2150,
                "end": 2159,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 2152,
                  "end": 2159,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 2158,
                    "end": 2159,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 2158,
                      "end": 2159,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 2161,
              "end": 2171,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2161,
                "end": 2162,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2162,
                "end": 2171,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 2164,
                  "end": 2171,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 2170,
                    "end": 2171,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 2170,
                      "end": 2171,
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSAnyKeyword",
          "start": 2185,
          "end": 2188
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 2176,
          "end": 2182,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 2177,
              "end": 2178,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2177,
                "end": 2178,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2180,
              "end": 2181,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2180,
                "end": 2181,
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2104,
        "end": 2134,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2105,
            "end": 2133,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 2115,
              "end": 2133,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2117,
                  "end": 2124,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2117,
                    "end": 2118,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2118,
                    "end": 2123,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2120,
                      "end": 2123
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2125,
                  "end": 2131,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2125,
                    "end": 2126,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2126,
                    "end": 2131,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2128,
                      "end": 2131
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2105,
              "end": 2106,
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
      "start": 2191,
      "end": 2225,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2196,
        "end": 2199,
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2202,
        "end": 2224,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2204,
          "end": 2224,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2205,
              "end": 2223,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2207,
                  "end": 2214,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2207,
                    "end": 2208,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2208,
                    "end": 2213,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2210,
                      "end": 2213
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2215,
                  "end": 2221,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2215,
                    "end": 2216,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2216,
                    "end": 2221,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2218,
                      "end": 2221
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2202,
          "end": 2204,
          "decorators": [],
          "name": "X1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2241,
      "end": 2281,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2246,
        "end": 2249,
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2252,
        "end": 2280,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2254,
          "end": 2280,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2255,
              "end": 2279,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2257,
                  "end": 2267,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2257,
                    "end": 2258,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2258,
                    "end": 2266,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2260,
                      "end": 2266
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2268,
                  "end": 2277,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2268,
                    "end": 2269,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2269,
                    "end": 2277,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2271,
                      "end": 2277
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2252,
          "end": 2254,
          "decorators": [],
          "name": "X1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2303,
      "end": 2355,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2308,
        "end": 2311,
        "decorators": [],
        "name": "T32",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2314,
        "end": 2354,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2316,
          "end": 2354,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2317,
              "end": 2353,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2319,
                  "end": 2329,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2319,
                    "end": 2320,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2320,
                    "end": 2328,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2322,
                      "end": 2328
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2330,
                  "end": 2340,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2330,
                    "end": 2331,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2331,
                    "end": 2339,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2333,
                      "end": 2339
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2341,
                  "end": 2351,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2341,
                    "end": 2342,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2342,
                    "end": 2351,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2344,
                      "end": 2351
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2314,
          "end": 2316,
          "decorators": [],
          "name": "X1",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2378,
      "end": 2440,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2383,
        "end": 2385,
        "decorators": [],
        "name": "X2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2391,
        "end": 2439,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2391,
          "end": 2392,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 2391,
            "end": 2392,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 2401,
          "end": 2427,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 2403,
              "end": 2414,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2403,
                "end": 2404,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2404,
                "end": 2413,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 2406,
                  "end": 2413,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 2412,
                    "end": 2413,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 2412,
                      "end": 2413,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 2415,
              "end": 2425,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2415,
                "end": 2416,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2416,
                "end": 2425,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 2418,
                  "end": 2425,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 2424,
                    "end": 2425,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 2424,
                      "end": 2425,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2434,
          "end": 2439
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 2430,
          "end": 2431,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 2430,
            "end": 2431,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2385,
        "end": 2388,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2386,
            "end": 2387,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2386,
              "end": 2387,
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
      "start": 2442,
      "end": 2460,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2447,
        "end": 2450,
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2453,
        "end": 2459,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2455,
          "end": 2459,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2456,
              "end": 2458,
              "members": []
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2453,
          "end": 2455,
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2471,
      "end": 2500,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2476,
        "end": 2479,
        "decorators": [],
        "name": "T41",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2482,
        "end": 2499,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2484,
          "end": 2499,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2485,
              "end": 2498,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2487,
                  "end": 2496,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2487,
                    "end": 2488,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2488,
                    "end": 2496,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2490,
                      "end": 2496
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2482,
          "end": 2484,
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2511,
      "end": 2551,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2516,
        "end": 2519,
        "decorators": [],
        "name": "T42",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2522,
        "end": 2550,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2524,
          "end": 2550,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2525,
              "end": 2549,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2527,
                  "end": 2537,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2527,
                    "end": 2528,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2528,
                    "end": 2536,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2530,
                      "end": 2536
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2538,
                  "end": 2547,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2538,
                    "end": 2539,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2539,
                    "end": 2547,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2541,
                      "end": 2547
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2522,
          "end": 2524,
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2563,
      "end": 2603,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2568,
        "end": 2571,
        "decorators": [],
        "name": "T43",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2574,
        "end": 2602,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2576,
          "end": 2602,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2577,
              "end": 2601,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2579,
                  "end": 2589,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2579,
                    "end": 2580,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2580,
                    "end": 2588,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2582,
                      "end": 2588
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2590,
                  "end": 2599,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2590,
                    "end": 2591,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2591,
                    "end": 2599,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2593,
                      "end": 2599
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2574,
          "end": 2576,
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2624,
      "end": 2676,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2629,
        "end": 2632,
        "decorators": [],
        "name": "T44",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2635,
        "end": 2675,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2637,
          "end": 2675,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2638,
              "end": 2674,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2640,
                  "end": 2650,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2640,
                    "end": 2641,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2641,
                    "end": 2649,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2643,
                      "end": 2649
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2651,
                  "end": 2661,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2651,
                    "end": 2652,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2652,
                    "end": 2660,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2654,
                      "end": 2660
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2662,
                  "end": 2672,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2662,
                    "end": 2663,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2663,
                    "end": 2672,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2665,
                      "end": 2672
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2635,
          "end": 2637,
          "decorators": [],
          "name": "X2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2698,
      "end": 2786,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2703,
        "end": 2705,
        "decorators": [],
        "name": "X3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2711,
        "end": 2785,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2711,
          "end": 2712,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 2711,
            "end": 2712,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 2721,
          "end": 2773,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 2723,
              "end": 2747,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2723,
                "end": 2724,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2724,
                "end": 2746,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 2726,
                  "end": 2746,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2727,
                      "end": 2737,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2728,
                        "end": 2737,
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "start": 2730,
                          "end": 2737,
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "start": 2736,
                            "end": 2737,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 2736,
                              "end": 2737,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2739,
                    "end": 2746,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 2742,
                      "end": 2746
                    }
                  },
                  "typeParameters": null
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 2748,
              "end": 2771,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2748,
                "end": 2749,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2749,
                "end": 2771,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 2751,
                  "end": 2771,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2752,
                      "end": 2762,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2753,
                        "end": 2762,
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "start": 2755,
                          "end": 2762,
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "start": 2761,
                            "end": 2762,
                            "const": false,
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 2761,
                              "end": 2762,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "out": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2764,
                    "end": 2771,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 2767,
                      "end": 2771
                    }
                  },
                  "typeParameters": null
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2780,
          "end": 2785
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 2776,
          "end": 2777,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 2776,
            "end": 2777,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2705,
        "end": 2708,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2706,
            "end": 2707,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2706,
              "end": 2707,
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
      "start": 2788,
      "end": 2806,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2793,
        "end": 2796,
        "decorators": [],
        "name": "T50",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2799,
        "end": 2805,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2801,
          "end": 2805,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2802,
              "end": 2804,
              "members": []
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2799,
          "end": 2801,
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2817,
      "end": 2859,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2822,
        "end": 2825,
        "decorators": [],
        "name": "T51",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2828,
        "end": 2858,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2830,
          "end": 2858,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2831,
              "end": 2857,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2833,
                  "end": 2855,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2833,
                    "end": 2834,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2834,
                    "end": 2855,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 2836,
                      "end": 2855,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2837,
                          "end": 2846,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2838,
                            "end": 2846,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2840,
                              "end": 2846
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2848,
                        "end": 2855,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2851,
                          "end": 2855
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2828,
          "end": 2830,
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2870,
      "end": 2936,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2875,
        "end": 2878,
        "decorators": [],
        "name": "T52",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2881,
        "end": 2935,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2883,
          "end": 2935,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2884,
              "end": 2934,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2886,
                  "end": 2909,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2886,
                    "end": 2887,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2887,
                    "end": 2908,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 2889,
                      "end": 2908,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2890,
                          "end": 2899,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2891,
                            "end": 2899,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2893,
                              "end": 2899
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2901,
                        "end": 2908,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2904,
                          "end": 2908
                        }
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2910,
                  "end": 2932,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2910,
                    "end": 2911,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2911,
                    "end": 2932,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 2913,
                      "end": 2932,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2914,
                          "end": 2923,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2915,
                            "end": 2923,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2917,
                              "end": 2923
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2925,
                        "end": 2932,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2928,
                          "end": 2932
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2881,
          "end": 2883,
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2948,
      "end": 3014,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2953,
        "end": 2956,
        "decorators": [],
        "name": "T53",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2959,
        "end": 3013,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2961,
          "end": 3013,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 2962,
              "end": 3012,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2964,
                  "end": 2987,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2964,
                    "end": 2965,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2965,
                    "end": 2986,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 2967,
                      "end": 2986,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2968,
                          "end": 2977,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2969,
                            "end": 2977,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2971,
                              "end": 2977
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 2979,
                        "end": 2986,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2982,
                          "end": 2986
                        }
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 2988,
                  "end": 3010,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2988,
                    "end": 2989,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2989,
                    "end": 3010,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 2991,
                      "end": 3010,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2992,
                          "end": 3001,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2993,
                            "end": 3001,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2995,
                              "end": 3001
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 3003,
                        "end": 3010,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 3006,
                          "end": 3010
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 2959,
          "end": 2961,
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3025,
      "end": 3082,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3030,
        "end": 3033,
        "decorators": [],
        "name": "T54",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3036,
        "end": 3081,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3038,
          "end": 3081,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 3039,
              "end": 3080,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3041,
                  "end": 3064,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3041,
                    "end": 3042,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3042,
                    "end": 3063,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 3044,
                      "end": 3063,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 3045,
                          "end": 3054,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3046,
                            "end": 3054,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3048,
                              "end": 3054
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 3056,
                        "end": 3063,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 3059,
                          "end": 3063
                        }
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 3065,
                  "end": 3078,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3065,
                    "end": 3066,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3066,
                    "end": 3078,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 3068,
                      "end": 3078,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 3071,
                        "end": 3078,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 3074,
                          "end": 3078
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 3036,
          "end": 3038,
          "decorators": [],
          "name": "X3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3095,
      "end": 3114,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3100,
        "end": 3103,
        "decorators": [],
        "name": "T60",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSInferType",
        "start": 3106,
        "end": 3113,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 3112,
          "end": 3113,
          "const": false,
          "constraint": null,
          "default": null,
          "in": false,
          "name": {
            "type": "Identifier",
            "start": 3112,
            "end": 3113,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "out": false
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3125,
      "end": 3185,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3130,
        "end": 3133,
        "decorators": [],
        "name": "T61",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3139,
        "end": 3184,
        "checkType": {
          "type": "TSInferType",
          "start": 3140,
          "end": 3147,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 3146,
            "end": 3147,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3146,
              "end": 3147,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        },
        "extendsType": {
          "type": "TSInferType",
          "start": 3157,
          "end": 3164,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 3163,
            "end": 3164,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3163,
              "end": 3164,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        },
        "falseType": {
          "type": "TSInferType",
          "start": 3177,
          "end": 3184,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 3183,
            "end": 3184,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3183,
              "end": 3184,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        },
        "trueType": {
          "type": "TSInferType",
          "start": 3167,
          "end": 3174,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 3173,
            "end": 3174,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3173,
              "end": 3174,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3133,
        "end": 3136,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3134,
            "end": 3135,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3134,
              "end": 3135,
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
      "start": 3196,
      "end": 3240,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3201,
        "end": 3204,
        "decorators": [],
        "name": "T62",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3210,
        "end": 3239,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3210,
          "end": 3211,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3210,
            "end": 3211,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSArrayType",
          "start": 3220,
          "end": 3231,
          "elementType": {
            "type": "TSInferType",
            "start": 3221,
            "end": 3228,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 3227,
              "end": 3228,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 3227,
                "end": 3228,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 3238,
          "end": 3239,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3238,
            "end": 3239,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3234,
          "end": 3235,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3234,
            "end": 3235,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3204,
        "end": 3207,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3205,
            "end": 3206,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3205,
              "end": 3206,
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
      "start": 3251,
      "end": 3341,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3256,
        "end": 3259,
        "decorators": [],
        "name": "T63",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3265,
        "end": 3340,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3265,
          "end": 3266,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3265,
            "end": 3266,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSConditionalType",
          "start": 3276,
          "end": 3321,
          "checkType": {
            "type": "TSInferType",
            "start": 3277,
            "end": 3284,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 3283,
              "end": 3284,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 3283,
                "end": 3284,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          },
          "extendsType": {
            "type": "TSInferType",
            "start": 3294,
            "end": 3301,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 3300,
              "end": 3301,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 3300,
                "end": 3301,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          },
          "falseType": {
            "type": "TSInferType",
            "start": 3314,
            "end": 3321,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 3320,
              "end": 3321,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 3320,
                "end": 3321,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          },
          "trueType": {
            "type": "TSInferType",
            "start": 3304,
            "end": 3311,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 3310,
              "end": 3311,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 3310,
                "end": 3311,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          }
        },
        "falseType": {
          "type": "TSNumberKeyword",
          "start": 3334,
          "end": 3340
        },
        "trueType": {
          "type": "TSStringKeyword",
          "start": 3325,
          "end": 3331
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3259,
        "end": 3262,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3260,
            "end": 3261,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3260,
              "end": 3261,
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
      "start": 3343,
      "end": 3381,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3348,
        "end": 3351,
        "decorators": [],
        "name": "T70",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3372,
        "end": 3380,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3374,
            "end": 3378,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3374,
              "end": 3375,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3375,
              "end": 3378,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3377,
                "end": 3378,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3377,
                  "end": 3378,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3351,
        "end": 3369,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3352,
            "end": 3368,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3362,
              "end": 3368
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3352,
              "end": 3353,
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
      "start": 3382,
      "end": 3436,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3387,
        "end": 3390,
        "decorators": [],
        "name": "T71",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3396,
        "end": 3435,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3396,
          "end": 3397,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3396,
            "end": 3397,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 3406,
          "end": 3418,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3409,
            "end": 3418,
            "params": [
              {
                "type": "TSInferType",
                "start": 3410,
                "end": 3417,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 3416,
                  "end": 3417,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3416,
                    "end": 3417,
                    "decorators": [],
                    "name": "U",
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
            "start": 3406,
            "end": 3409,
            "decorators": [],
            "name": "T70",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3430,
          "end": 3435
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3421,
          "end": 3427,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3424,
            "end": 3427,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3425,
                "end": 3426,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3425,
                  "end": 3426,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3421,
            "end": 3424,
            "decorators": [],
            "name": "T70",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3390,
        "end": 3393,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3391,
            "end": 3392,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3391,
              "end": 3392,
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
      "start": 3438,
      "end": 3476,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3443,
        "end": 3446,
        "decorators": [],
        "name": "T72",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3467,
        "end": 3475,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3469,
            "end": 3473,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3469,
              "end": 3470,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3470,
              "end": 3473,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3472,
                "end": 3473,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3472,
                  "end": 3473,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3446,
        "end": 3464,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3447,
            "end": 3463,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3457,
              "end": 3463
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3447,
              "end": 3448,
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
      "start": 3477,
      "end": 3531,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3482,
        "end": 3485,
        "decorators": [],
        "name": "T73",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3491,
        "end": 3530,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3491,
          "end": 3492,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3491,
            "end": 3492,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 3501,
          "end": 3513,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3504,
            "end": 3513,
            "params": [
              {
                "type": "TSInferType",
                "start": 3505,
                "end": 3512,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 3511,
                  "end": 3512,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3511,
                    "end": 3512,
                    "decorators": [],
                    "name": "U",
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
            "start": 3501,
            "end": 3504,
            "decorators": [],
            "name": "T72",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3525,
          "end": 3530
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3516,
          "end": 3522,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3519,
            "end": 3522,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3520,
                "end": 3521,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3520,
                  "end": 3521,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3516,
            "end": 3519,
            "decorators": [],
            "name": "T70",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3485,
        "end": 3488,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3486,
            "end": 3487,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3486,
              "end": 3487,
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
      "start": 3543,
      "end": 3605,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3548,
        "end": 3551,
        "decorators": [],
        "name": "T74",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3590,
        "end": 3604,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3592,
            "end": 3597,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3592,
              "end": 3593,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3593,
              "end": 3596,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3595,
                "end": 3596,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3595,
                  "end": 3596,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 3598,
            "end": 3602,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3598,
              "end": 3599,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3599,
              "end": 3602,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3601,
                "end": 3602,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3601,
                  "end": 3602,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3551,
        "end": 3587,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3552,
            "end": 3568,
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3562,
              "end": 3568
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3552,
              "end": 3553,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3570,
            "end": 3586,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3580,
              "end": 3586
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3570,
              "end": 3571,
              "decorators": [],
              "name": "U",
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
      "start": 3606,
      "end": 3690,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3611,
        "end": 3614,
        "decorators": [],
        "name": "T75",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3620,
        "end": 3689,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3620,
          "end": 3621,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3620,
            "end": 3621,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 3630,
          "end": 3651,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3633,
            "end": 3651,
            "params": [
              {
                "type": "TSInferType",
                "start": 3634,
                "end": 3641,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 3640,
                  "end": 3641,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3640,
                    "end": 3641,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              },
              {
                "type": "TSInferType",
                "start": 3643,
                "end": 3650,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 3649,
                  "end": 3650,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3649,
                    "end": 3650,
                    "decorators": [],
                    "name": "U",
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
            "start": 3630,
            "end": 3633,
            "decorators": [],
            "name": "T74",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3684,
          "end": 3689
        },
        "trueType": {
          "type": "TSUnionType",
          "start": 3654,
          "end": 3681,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 3654,
              "end": 3660,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3657,
                "end": 3660,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3658,
                    "end": 3659,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3658,
                      "end": 3659,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3654,
                "end": 3657,
                "decorators": [],
                "name": "T70",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 3663,
              "end": 3669,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3666,
                "end": 3669,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3667,
                    "end": 3668,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3667,
                      "end": 3668,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3663,
                "end": 3666,
                "decorators": [],
                "name": "T72",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 3672,
              "end": 3681,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3675,
                "end": 3681,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3676,
                    "end": 3677,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3676,
                      "end": 3677,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3679,
                    "end": 3680,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3679,
                      "end": 3680,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3672,
                "end": 3675,
                "decorators": [],
                "name": "T74",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3614,
        "end": 3617,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3615,
            "end": 3616,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3615,
              "end": 3616,
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
      "start": 3692,
      "end": 3740,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3697,
        "end": 3700,
        "decorators": [],
        "name": "T76",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3731,
        "end": 3739,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3733,
            "end": 3737,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3733,
              "end": 3734,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3734,
              "end": 3737,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3736,
                "end": 3737,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3736,
                  "end": 3737,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3700,
        "end": 3728,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3701,
            "end": 3714,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 3711,
              "end": 3714,
              "elementType": {
                "type": "TSTypeReference",
                "start": 3711,
                "end": 3712,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3711,
                  "end": 3712,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3701,
              "end": 3702,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3716,
            "end": 3727,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3726,
              "end": 3727,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3726,
                "end": 3727,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3716,
              "end": 3717,
              "decorators": [],
              "name": "U",
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
      "start": 3741,
      "end": 3807,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3746,
        "end": 3749,
        "decorators": [],
        "name": "T77",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3755,
        "end": 3806,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3755,
          "end": 3756,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3755,
            "end": 3756,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 3765,
          "end": 3786,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3768,
            "end": 3786,
            "params": [
              {
                "type": "TSInferType",
                "start": 3769,
                "end": 3776,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 3775,
                  "end": 3776,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3775,
                    "end": 3776,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              },
              {
                "type": "TSInferType",
                "start": 3778,
                "end": 3785,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 3784,
                  "end": 3785,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3784,
                    "end": 3785,
                    "decorators": [],
                    "name": "Y",
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
            "start": 3765,
            "end": 3768,
            "decorators": [],
            "name": "T76",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3801,
          "end": 3806
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3789,
          "end": 3798,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3792,
            "end": 3798,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3793,
                "end": 3794,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3793,
                  "end": 3794,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 3796,
                "end": 3797,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3796,
                  "end": 3797,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3789,
            "end": 3792,
            "decorators": [],
            "name": "T76",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3749,
        "end": 3752,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3750,
            "end": 3751,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3750,
              "end": 3751,
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
      "start": 3808,
      "end": 3874,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3813,
        "end": 3816,
        "decorators": [],
        "name": "T78",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3822,
        "end": 3873,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3822,
          "end": 3823,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3822,
            "end": 3823,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 3832,
          "end": 3853,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3835,
            "end": 3853,
            "params": [
              {
                "type": "TSInferType",
                "start": 3836,
                "end": 3843,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 3842,
                  "end": 3843,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3842,
                    "end": 3843,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              },
              {
                "type": "TSInferType",
                "start": 3845,
                "end": 3852,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 3851,
                  "end": 3852,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3851,
                    "end": 3852,
                    "decorators": [],
                    "name": "X",
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
            "start": 3832,
            "end": 3835,
            "decorators": [],
            "name": "T76",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3868,
          "end": 3873
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3856,
          "end": 3865,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3859,
            "end": 3865,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3860,
                "end": 3861,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3860,
                  "end": 3861,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 3863,
                "end": 3864,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3863,
                  "end": 3864,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3856,
            "end": 3859,
            "decorators": [],
            "name": "T76",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3816,
        "end": 3819,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3817,
            "end": 3818,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3817,
              "end": 3818,
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
      "start": 3876,
      "end": 3925,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3881,
        "end": 3884,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 3918,
        "end": 3924,
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "start": 3919,
            "end": 3920,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 3919,
              "end": 3920,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 3922,
            "end": 3923,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 3922,
              "end": 3923,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3884,
        "end": 3915,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3885,
            "end": 3901,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3895,
              "end": 3901
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3885,
              "end": 3886,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3903,
            "end": 3914,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 3913,
              "end": 3914,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3913,
                "end": 3914,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3903,
              "end": 3904,
              "decorators": [],
              "name": "U",
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
      "start": 3926,
      "end": 3992,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3931,
        "end": 3934,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 3940,
        "end": 3991,
        "checkType": {
          "type": "TSTypeReference",
          "start": 3940,
          "end": 3941,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 3940,
            "end": 3941,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 3950,
          "end": 3971,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3953,
            "end": 3971,
            "params": [
              {
                "type": "TSInferType",
                "start": 3954,
                "end": 3961,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 3960,
                  "end": 3961,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3960,
                    "end": 3961,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              },
              {
                "type": "TSInferType",
                "start": 3963,
                "end": 3970,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 3969,
                  "end": 3970,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 3969,
                    "end": 3970,
                    "decorators": [],
                    "name": "Y",
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
            "start": 3950,
            "end": 3953,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3986,
          "end": 3991
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 3974,
          "end": 3983,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3977,
            "end": 3983,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3978,
                "end": 3979,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3978,
                  "end": 3979,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeReference",
                "start": 3981,
                "end": 3982,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3981,
                  "end": 3982,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3974,
            "end": 3977,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3934,
        "end": 3937,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3935,
            "end": 3936,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3935,
              "end": 3936,
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
      "start": 3994,
      "end": 4027,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3999,
        "end": 4002,
        "decorators": [],
        "name": "T90",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4005,
        "end": 4026,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4008,
          "end": 4026,
          "params": [
            {
              "type": "TSTupleType",
              "start": 4009,
              "end": 4025,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 4010,
                  "end": 4016
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4018,
                  "end": 4024
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 4005,
          "end": 4008,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4049,
      "end": 4079,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4054,
        "end": 4057,
        "decorators": [],
        "name": "T91",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4060,
        "end": 4078,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4063,
          "end": 4078,
          "params": [
            {
              "type": "TSTupleType",
              "start": 4064,
              "end": 4077,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 4065,
                  "end": 4071
                },
                {
                  "type": "TSLiteralType",
                  "start": 4073,
                  "end": 4076,
                  "literal": {
                    "type": "Literal",
                    "start": 4073,
                    "end": 4076,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 4060,
          "end": 4063,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4098,
      "end": 4144,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4103,
        "end": 4106,
        "decorators": [],
        "name": "T92",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4109,
        "end": 4143,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4112,
          "end": 4143,
          "params": [
            {
              "type": "TSIntersectionType",
              "start": 4113,
              "end": 4142,
              "types": [
                {
                  "type": "TSTupleType",
                  "start": 4113,
                  "end": 4126,
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4114,
                      "end": 4120
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 4122,
                      "end": 4125,
                      "literal": {
                        "type": "Literal",
                        "start": 4122,
                        "end": 4125,
                        "raw": "\"a\"",
                        "value": "a"
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 4129,
                  "end": 4142,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 4131,
                      "end": 4140,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4131,
                        "end": 4132,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4132,
                        "end": 4140,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4134,
                          "end": 4140
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 4109,
          "end": 4112,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4163,
      "end": 4193,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4168,
        "end": 4171,
        "decorators": [],
        "name": "T93",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4174,
        "end": 4192,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4177,
          "end": 4192,
          "params": [
            {
              "type": "TSTupleType",
              "start": 4178,
              "end": 4191,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 4179,
                  "end": 4182,
                  "literal": {
                    "type": "Literal",
                    "start": 4179,
                    "end": 4182,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4184,
                  "end": 4190
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 4174,
          "end": 4177,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4204,
      "end": 4237,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4209,
        "end": 4212,
        "decorators": [],
        "name": "T94",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4215,
        "end": 4236,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4218,
          "end": 4236,
          "params": [
            {
              "type": "TSTupleType",
              "start": 4219,
              "end": 4235,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 4220,
                  "end": 4226
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4228,
                  "end": 4234
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 4215,
          "end": 4218,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4273,
      "end": 4350,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4278,
        "end": 4293,
        "decorators": [],
        "name": "JsonifiedObject",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 4314,
        "end": 4349,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 4322,
          "end": 4329,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 4328,
            "end": 4329,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 4328,
              "end": 4329,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 4317,
          "end": 4318,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4332,
          "end": 4347,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 4341,
            "end": 4347,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 4342,
                "end": 4346,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 4344,
                  "end": 4345,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4344,
                    "end": 4345,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 4342,
                  "end": 4343,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4342,
                    "end": 4343,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 4332,
            "end": 4341,
            "decorators": [],
            "name": "Jsonified",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4293,
        "end": 4311,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4294,
            "end": 4310,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 4304,
              "end": 4310
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4294,
              "end": 4295,
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
      "start": 4352,
      "end": 4659,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4357,
        "end": 4366,
        "decorators": [],
        "name": "Jsonified",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 4376,
        "end": 4658,
        "checkType": {
          "type": "TSTypeReference",
          "start": 4376,
          "end": 4377,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 4376,
            "end": 4377,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSUnionType",
          "start": 4386,
          "end": 4418,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 4386,
              "end": 4392
            },
            {
              "type": "TSNumberKeyword",
              "start": 4395,
              "end": 4401
            },
            {
              "type": "TSBooleanKeyword",
              "start": 4404,
              "end": 4411
            },
            {
              "type": "TSNullKeyword",
              "start": 4414,
              "end": 4418
            }
          ]
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 4429,
          "end": 4658,
          "checkType": {
            "type": "TSTypeReference",
            "start": 4429,
            "end": 4430,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 4429,
              "end": 4430,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "extendsType": {
            "type": "TSUnionType",
            "start": 4439,
            "end": 4459,
            "types": [
              {
                "type": "TSUndefinedKeyword",
                "start": 4439,
                "end": 4448
              },
              {
                "type": "TSTypeReference",
                "start": 4451,
                "end": 4459,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 4451,
                  "end": 4459,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 4513,
            "end": 4658,
            "checkType": {
              "type": "TSTypeReference",
              "start": 4513,
              "end": 4514,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 4513,
                "end": 4514,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "extendsType": {
              "type": "TSTypeLiteral",
              "start": 4523,
              "end": 4544,
              "members": [
                {
                  "type": "TSMethodSignature",
                  "start": 4525,
                  "end": 4542,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4525,
                    "end": 4531,
                    "decorators": [],
                    "name": "toJSON",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 4533,
                    "end": 4542,
                    "typeAnnotation": {
                      "type": "TSInferType",
                      "start": 4535,
                      "end": 4542,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 4541,
                        "end": 4542,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 4541,
                          "end": 4542,
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "falseType": {
              "type": "TSConditionalType",
              "start": 4600,
              "end": 4658,
              "checkType": {
                "type": "TSTypeReference",
                "start": 4600,
                "end": 4601,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 4600,
                  "end": 4601,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "start": 4610,
                "end": 4616
              },
              "falseType": {
                "type": "TSLiteralType",
                "start": 4644,
                "end": 4658,
                "literal": {
                  "type": "Literal",
                  "start": 4644,
                  "end": 4658,
                  "raw": "\"what is this\"",
                  "value": "what is this"
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 4619,
                "end": 4637,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4634,
                  "end": 4637,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 4635,
                      "end": 4636,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4635,
                        "end": 4636,
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
                  "start": 4619,
                  "end": 4634,
                  "decorators": [],
                  "name": "JsonifiedObject",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 4547,
              "end": 4548,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 4547,
                "end": 4548,
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "start": 4462,
            "end": 4467
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 4421,
          "end": 4422,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 4421,
            "end": 4422,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4366,
        "end": 4369,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4367,
            "end": 4368,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4367,
              "end": 4368,
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
      "start": 4661,
      "end": 4864,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4666,
        "end": 4673,
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 4676,
        "end": 4864,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 4682,
            "end": 4703,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4682,
              "end": 4685,
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4685,
              "end": 4702,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 4687,
                "end": 4702,
                "literal": {
                  "type": "Literal",
                  "start": 4687,
                  "end": 4702,
                  "raw": "\"literalstring\"",
                  "value": "literalstring"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 4708,
            "end": 4723,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4708,
              "end": 4710,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4710,
              "end": 4722,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4712,
                "end": 4722,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4715,
                  "end": 4722,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4718,
                    "end": 4722
                  }
                },
                "typeParameters": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 4728,
            "end": 4739,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4728,
              "end": 4732,
              "decorators": [],
              "name": "date",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4732,
              "end": 4738,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4734,
                "end": 4738,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 4734,
                  "end": 4738,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 4744,
            "end": 4765,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4744,
              "end": 4755,
              "decorators": [],
              "name": "customClass",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4755,
              "end": 4764,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4757,
                "end": 4764,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 4757,
                  "end": 4764,
                  "decorators": [],
                  "name": "MyClass",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 4770,
            "end": 4862,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4770,
              "end": 4773,
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4773,
              "end": 4861,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 4775,
                "end": 4861,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4785,
                    "end": 4802,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4785,
                      "end": 4789,
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4789,
                      "end": 4801,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 4791,
                        "end": 4801,
                        "literal": {
                          "type": "Literal",
                          "start": 4791,
                          "end": 4801,
                          "raw": "\"property\"",
                          "value": "property"
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 4811,
                    "end": 4824,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4811,
                      "end": 4814,
                      "decorators": [],
                      "name": "clz",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4814,
                      "end": 4823,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4816,
                        "end": 4823,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4816,
                          "end": 4823,
                          "decorators": [],
                          "name": "MyClass",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 4833,
                    "end": 4855,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4833,
                      "end": 4839,
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4839,
                      "end": 4855,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 4841,
                        "end": 4855,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 4843,
                            "end": 4853,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 4843,
                              "end": 4847,
                              "decorators": [],
                              "name": "attr",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 4847,
                              "end": 4853,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 4849,
                                "end": 4853,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4849,
                                  "end": 4853,
                                  "decorators": [],
                                  "name": "Date",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 4866,
      "end": 4916,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 4888,
        "end": 4916,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4894,
            "end": 4914,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4894,
              "end": 4900,
              "decorators": [],
              "name": "toJSON",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 4900,
              "end": 4914,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4902,
                "end": 4913,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 4904,
                  "end": 4913,
                  "literal": {
                    "type": "Literal",
                    "start": 4904,
                    "end": 4913,
                    "raw": "\"correct\"",
                    "value": "correct"
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4880,
        "end": 4887,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4918,
      "end": 4961,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4923,
        "end": 4939,
        "decorators": [],
        "name": "JsonifiedExample",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4942,
        "end": 4960,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4951,
          "end": 4960,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 4952,
              "end": 4959,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 4952,
                "end": 4959,
                "decorators": [],
                "name": "Example",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 4942,
          "end": 4951,
          "decorators": [],
          "name": "Jsonified",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 4962,
      "end": 4995,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4974,
          "end": 4994,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4974,
            "end": 4994,
            "decorators": [],
            "name": "ex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4976,
              "end": 4994,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4978,
                "end": 4994,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 4978,
                  "end": 4994,
                  "decorators": [],
                  "name": "JsonifiedExample",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 4996,
      "end": 5033,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5002,
          "end": 5032,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5002,
            "end": 5015,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5004,
              "end": 5015,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 5006,
                "end": 5015,
                "literal": {
                  "type": "Literal",
                  "start": 5006,
                  "end": 5015,
                  "raw": "\"correct\"",
                  "value": "correct"
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 5018,
            "end": 5032,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 5018,
              "end": 5020,
              "decorators": [],
              "name": "ex",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 5021,
              "end": 5032,
              "decorators": [],
              "name": "customClass",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 5034,
      "end": 5072,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5040,
          "end": 5071,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5040,
            "end": 5050,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5042,
              "end": 5050,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5044,
                "end": 5050
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 5053,
            "end": 5071,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 5053,
              "end": 5066,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 5053,
                "end": 5059,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 5053,
                  "end": 5055,
                  "decorators": [],
                  "name": "ex",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 5056,
                  "end": 5059,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 5060,
                "end": 5066,
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 5067,
              "end": 5071,
              "decorators": [],
              "name": "attr",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5097,
      "end": 5141,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5102,
        "end": 5104,
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 5134,
        "end": 5140,
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "start": 5135,
            "end": 5136,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 5135,
              "end": 5136,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 5138,
            "end": 5139,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 5138,
              "end": 5139,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5104,
        "end": 5131,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5105,
            "end": 5106,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5105,
              "end": 5106,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5108,
            "end": 5130,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 5118,
              "end": 5130,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 5120,
                "end": 5130,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 5121,
                    "end": 5124
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 5126,
                    "end": 5129
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 5118,
                "end": 5120,
                "decorators": [],
                "name": "A1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5108,
              "end": 5109,
              "decorators": [],
              "name": "U",
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
      "start": 5142,
      "end": 5203,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5147,
        "end": 5149,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 5155,
        "end": 5202,
        "checkType": {
          "type": "TSTypeReference",
          "start": 5155,
          "end": 5156,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 5155,
            "end": 5156,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 5165,
          "end": 5185,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 5167,
            "end": 5185,
            "params": [
              {
                "type": "TSInferType",
                "start": 5168,
                "end": 5175,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 5174,
                  "end": 5175,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 5174,
                    "end": 5175,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              },
              {
                "type": "TSInferType",
                "start": 5177,
                "end": 5184,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 5183,
                  "end": 5184,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 5183,
                    "end": 5184,
                    "decorators": [],
                    "name": "U",
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
            "start": 5165,
            "end": 5167,
            "decorators": [],
            "name": "A1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5197,
          "end": 5202
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 5188,
          "end": 5194,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 5189,
              "end": 5190,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 5189,
                "end": 5190,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 5192,
              "end": 5193,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 5192,
                "end": 5193,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5149,
        "end": 5152,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5150,
            "end": 5151,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5150,
              "end": 5151,
              "decorators": [],
              "name": "S",
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
      "start": 5205,
      "end": 5241,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5210,
        "end": 5212,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 5234,
        "end": 5240,
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "start": 5235,
            "end": 5236,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 5235,
              "end": 5236,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 5238,
            "end": 5239,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 5238,
              "end": 5239,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5212,
        "end": 5231,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5213,
            "end": 5214,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5213,
              "end": 5214,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5216,
            "end": 5230,
            "const": false,
            "constraint": {
              "type": "TSVoidKeyword",
              "start": 5226,
              "end": 5230
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5216,
              "end": 5217,
              "decorators": [],
              "name": "U",
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
      "start": 5242,
      "end": 5303,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5247,
        "end": 5249,
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 5255,
        "end": 5302,
        "checkType": {
          "type": "TSTypeReference",
          "start": 5255,
          "end": 5256,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 5255,
            "end": 5256,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 5265,
          "end": 5285,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 5267,
            "end": 5285,
            "params": [
              {
                "type": "TSInferType",
                "start": 5268,
                "end": 5275,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 5274,
                  "end": 5275,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 5274,
                    "end": 5275,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              },
              {
                "type": "TSInferType",
                "start": 5277,
                "end": 5284,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 5283,
                  "end": 5284,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 5283,
                    "end": 5284,
                    "decorators": [],
                    "name": "U",
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
            "start": 5265,
            "end": 5267,
            "decorators": [],
            "name": "A2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5297,
          "end": 5302
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 5288,
          "end": 5294,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 5289,
              "end": 5290,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 5289,
                "end": 5290,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 5292,
              "end": 5293,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 5292,
                "end": 5293,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5249,
        "end": 5252,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5250,
            "end": 5251,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5250,
              "end": 5251,
              "decorators": [],
              "name": "S",
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
      "start": 5304,
      "end": 5375,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5309,
        "end": 5311,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 5333,
        "end": 5374,
        "checkType": {
          "type": "TSTypeReference",
          "start": 5333,
          "end": 5334,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 5333,
            "end": 5334,
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 5343,
          "end": 5357,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 5345,
            "end": 5357,
            "params": [
              {
                "type": "TSInferType",
                "start": 5346,
                "end": 5353,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 5352,
                  "end": 5353,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 5352,
                    "end": 5353,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 5355,
                "end": 5356,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 5355,
                  "end": 5356,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 5343,
            "end": 5345,
            "decorators": [],
            "name": "A2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5369,
          "end": 5374
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 5360,
          "end": 5366,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 5361,
              "end": 5362,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 5361,
                "end": 5362,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 5364,
              "end": 5365,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 5364,
                "end": 5365,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5311,
        "end": 5330,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5312,
            "end": 5313,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5312,
              "end": 5313,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5315,
            "end": 5329,
            "const": false,
            "constraint": {
              "type": "TSVoidKeyword",
              "start": 5325,
              "end": 5329
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5315,
              "end": 5316,
              "decorators": [],
              "name": "U",
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
      "start": 5399,
      "end": 5454,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5404,
        "end": 5405,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 5411,
        "end": 5453,
        "checkType": {
          "type": "TSTypeReference",
          "start": 5411,
          "end": 5412,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 5411,
            "end": 5412,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSStringKeyword",
          "start": 5421,
          "end": 5427
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 5452,
          "end": 5453,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 5452,
            "end": 5453,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSMappedType",
          "start": 5430,
          "end": 5449,
          "constraint": {
            "type": "TSTypeReference",
            "start": 5438,
            "end": 5439,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 5438,
              "end": 5439,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 5433,
            "end": 5434,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "nameType": null,
          "optional": null,
          "readonly": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 5442,
            "end": 5446
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5405,
        "end": 5408,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5406,
            "end": 5407,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5406,
              "end": 5407,
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
      "start": 5455,
      "end": 5510,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5460,
        "end": 5461,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 5467,
        "end": 5509,
        "checkType": {
          "type": "TSStringKeyword",
          "start": 5467,
          "end": 5473
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 5482,
          "end": 5483,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 5482,
            "end": 5483,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 5508,
          "end": 5509,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 5508,
            "end": 5509,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSMappedType",
          "start": 5486,
          "end": 5505,
          "constraint": {
            "type": "TSTypeReference",
            "start": 5494,
            "end": 5495,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 5494,
              "end": 5495,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 5489,
            "end": 5490,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "nameType": null,
          "optional": null,
          "readonly": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 5498,
            "end": 5502
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5461,
        "end": 5464,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5462,
            "end": 5463,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5462,
              "end": 5463,
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
      "start": 5544,
      "end": 5658,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5549,
        "end": 5561,
        "decorators": [],
        "name": "MatchingKeys",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 5603,
        "end": 5657,
        "checkType": {
          "type": "TSTypeReference",
          "start": 5603,
          "end": 5604,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 5603,
            "end": 5604,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "start": 5613,
          "end": 5620,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 5619,
            "end": 5620,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 5619,
              "end": 5620,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5652,
          "end": 5657
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 5623,
          "end": 5649,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 5623,
            "end": 5627,
            "indexType": {
              "type": "TSTypeReference",
              "start": 5625,
              "end": 5626,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 5625,
                "end": 5626,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 5623,
              "end": 5624,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 5623,
                "end": 5624,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 5636,
            "end": 5637,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 5636,
              "end": 5637,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 5644,
            "end": 5649
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 5640,
            "end": 5641,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 5640,
              "end": 5641,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5561,
        "end": 5596,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5562,
            "end": 5563,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5562,
              "end": 5563,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5565,
            "end": 5566,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5565,
              "end": 5566,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 5568,
            "end": 5595,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 5578,
              "end": 5585,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5584,
                "end": 5585,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 5584,
                  "end": 5585,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "default": {
              "type": "TSTypeOperator",
              "start": 5588,
              "end": 5595,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5594,
                "end": 5595,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 5594,
                  "end": 5595,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5568,
              "end": 5569,
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
      "type": "TSTypeAliasDeclaration",
      "start": 5660,
      "end": 5701,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5665,
        "end": 5673,
        "decorators": [],
        "name": "VoidKeys",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5679,
        "end": 5700,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5691,
          "end": 5700,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 5692,
              "end": 5693,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 5692,
                "end": 5693,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSVoidKeyword",
              "start": 5695,
              "end": 5699
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 5679,
          "end": 5691,
          "decorators": [],
          "name": "MatchingKeys",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5673,
        "end": 5676,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5674,
            "end": 5675,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5674,
              "end": 5675,
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
      "start": 5703,
      "end": 5743,
      "body": {
        "type": "TSInterfaceBody",
        "start": 5718,
        "end": 5743,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 5724,
            "end": 5729,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5724,
              "end": 5725,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5725,
              "end": 5728,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 5727,
                "end": 5728,
                "literal": {
                  "type": "Literal",
                  "start": 5727,
                  "end": 5728,
                  "raw": "1",
                  "value": 1
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 5734,
            "end": 5741,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5734,
              "end": 5735,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5735,
              "end": 5741,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 5737,
                "end": 5741
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 5713,
        "end": 5717,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5745,
      "end": 5781,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5750,
        "end": 5753,
        "decorators": [],
        "name": "T80",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5756,
        "end": 5780,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5768,
          "end": 5780,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 5769,
              "end": 5773,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 5769,
                "end": 5773,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSVoidKeyword",
              "start": 5775,
              "end": 5779
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 5756,
          "end": 5768,
          "decorators": [],
          "name": "MatchingKeys",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5782,
      "end": 5808,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5787,
        "end": 5790,
        "decorators": [],
        "name": "T81",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5793,
        "end": 5807,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5801,
          "end": 5807,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 5802,
              "end": 5806,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 5802,
                "end": 5806,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 5793,
          "end": 5801,
          "decorators": [],
          "name": "VoidKeys",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5832,
      "end": 5872,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5837,
        "end": 5849,
        "decorators": [],
        "name": "MustBeString",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5870,
        "end": 5871,
        "typeArguments": null,
        "typeName": {
          "type": "Identifier",
          "start": 5870,
          "end": 5871,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5849,
        "end": 5867,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5850,
            "end": 5866,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 5860,
              "end": 5866
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5850,
              "end": 5851,
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
      "start": 5873,
      "end": 5942,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5878,
        "end": 5892,
        "decorators": [],
        "name": "EnsureIsString",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 5898,
        "end": 5941,
        "checkType": {
          "type": "TSTypeReference",
          "start": 5898,
          "end": 5899,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 5898,
            "end": 5899,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 5908,
          "end": 5929,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 5920,
            "end": 5929,
            "params": [
              {
                "type": "TSInferType",
                "start": 5921,
                "end": 5928,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 5927,
                  "end": 5928,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 5927,
                    "end": 5928,
                    "decorators": [],
                    "name": "U",
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
            "start": 5908,
            "end": 5920,
            "decorators": [],
            "name": "MustBeString",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 5936,
          "end": 5941
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 5932,
          "end": 5933,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 5932,
            "end": 5933,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5892,
        "end": 5895,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5893,
            "end": 5894,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5893,
              "end": 5894,
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
      "start": 5944,
      "end": 5981,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5949,
        "end": 5954,
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5957,
        "end": 5980,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5971,
          "end": 5980,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 5972,
              "end": 5979,
              "literal": {
                "type": "Literal",
                "start": 5972,
                "end": 5979,
                "raw": "\"hello\"",
                "value": "hello"
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 5957,
          "end": 5971,
          "decorators": [],
          "name": "EnsureIsString",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5994,
      "end": 6026,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5999,
        "end": 6004,
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 6007,
        "end": 6025,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 6021,
          "end": 6025,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 6022,
              "end": 6024,
              "literal": {
                "type": "Literal",
                "start": 6022,
                "end": 6024,
                "raw": "42",
                "value": 42
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 6007,
          "end": 6021,
          "decorators": [],
          "name": "EnsureIsString",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 6061,
      "end": 6258,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 6153,
        "end": 6258,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 6159,
            "end": 6256,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 6166,
              "end": 6256,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 6239,
                "end": 6256,
                "arguments": [
                  {
                    "type": "SpreadElement",
                    "start": 6248,
                    "end": 6255,
                    "argument": {
                      "type": "Identifier",
                      "start": 6251,
                      "end": 6255,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 6239,
                  "end": 6247,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 6239,
                    "end": 6242,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 6243,
                    "end": 6246,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 6210,
                  "end": 6216,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6213,
                    "end": 6216,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6215,
                      "end": 6216,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6215,
                        "end": 6216,
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
                "start": 6217,
                "end": 6235,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6219,
                  "end": 6235,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6229,
                    "end": 6235,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 6230,
                        "end": 6234,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 6232,
                          "end": 6233,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6232,
                            "end": 6233,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 6230,
                          "end": 6231,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 6230,
                            "end": 6231,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 6219,
                    "end": 6229,
                    "decorators": [],
                    "name": "ReturnType",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 6166,
                "end": 6208,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 6167,
                    "end": 6207,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 6177,
                      "end": 6207,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6183,
                        "end": 6207,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6184,
                            "end": 6185,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6184,
                              "end": 6185,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSFunctionType",
                            "start": 6187,
                            "end": 6206,
                            "params": [
                              {
                                "type": "RestElement",
                                "start": 6188,
                                "end": 6198,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 6191,
                                  "end": 6195,
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 6195,
                                  "end": 6198,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 6197,
                                    "end": 6198,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 6197,
                                      "end": 6198,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                },
                                "value": null
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 6200,
                              "end": 6206,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 6203,
                                "end": 6206
                              }
                            },
                            "typeParameters": null
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 6177,
                        "end": 6183,
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 6167,
                      "end": 6168,
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
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 6070,
        "end": 6077,
        "decorators": [],
        "name": "invoker",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 6133,
          "end": 6139,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6136,
            "end": 6139,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 6138,
              "end": 6139,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 6138,
                "end": 6139,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "RestElement",
          "start": 6141,
          "end": 6151,
          "argument": {
            "type": "Identifier",
            "start": 6144,
            "end": 6148,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6148,
            "end": 6151,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 6150,
              "end": 6151,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 6150,
                "end": 6151,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6078,
        "end": 6131,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 6079,
            "end": 6113,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 6089,
              "end": 6113,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 6089,
                  "end": 6095
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 6098,
                  "end": 6104
                },
                {
                  "type": "TSSymbolKeyword",
                  "start": 6107,
                  "end": 6113
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 6079,
              "end": 6080,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 6115,
            "end": 6130,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 6125,
              "end": 6130,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 6125,
                "end": 6128
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 6115,
              "end": 6116,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 6260,
      "end": 6327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6266,
          "end": 6327,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6266,
            "end": 6272,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 6275,
            "end": 6327,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 6297,
                "end": 6326,
                "properties": [
                  {
                    "type": "Property",
                    "start": 6299,
                    "end": 6324,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 6299,
                      "end": 6303,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 6305,
                      "end": 6324,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 6321,
                        "end": 6324,
                        "raw": "123",
                        "value": 123
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 6306,
                          "end": 6316,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 6307,
                            "end": 6316,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 6309,
                              "end": 6316
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "CallExpression",
              "start": 6275,
              "end": 6296,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 6283,
                  "end": 6289,
                  "raw": "'test'",
                  "value": "test"
                },
                {
                  "type": "Literal",
                  "start": 6291,
                  "end": 6295,
                  "raw": "true",
                  "value": true
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 6275,
                "end": 6282,
                "decorators": [],
                "name": "invoker",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6329,
      "end": 6393,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 6334,
        "end": 6338,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 6358,
        "end": 6392,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 6368,
          "end": 6392,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 6369,
              "end": 6391,
              "params": [
                {
                  "type": "RestElement",
                  "start": 6370,
                  "end": 6380,
                  "argument": {
                    "type": "Identifier",
                    "start": 6373,
                    "end": 6377,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6377,
                    "end": 6380,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6379,
                      "end": 6380,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6379,
                        "end": 6380,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 6382,
                "end": 6391,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 6385,
                  "end": 6391
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 6358,
          "end": 6368,
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6338,
        "end": 6355,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 6339,
            "end": 6354,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 6349,
              "end": 6354,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 6349,
                "end": 6352
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 6339,
              "end": 6340,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
