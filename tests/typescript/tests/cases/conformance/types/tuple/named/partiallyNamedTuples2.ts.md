__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 662,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 56,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 77,
        "decorators": [],
        "name": "MultiKeyMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 77,
        "end": 117,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 109,
            "name": {
              "type": "Identifier",
              "start": 78,
              "end": 82,
              "decorators": [],
              "name": "Keys",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 91,
              "end": 109,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 100,
                "end": 109,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 100,
                  "end": 107
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 111,
            "end": 116,
            "name": {
              "type": "Identifier",
              "start": 111,
              "end": 116,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
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
        "start": 118,
        "end": 197,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 122,
            "end": 195,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 125,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 125,
              "end": 152,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 126,
                  "end": 151,
                  "name": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 129,
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 138,
                    "end": 151,
                    "typeName": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 145,
                      "decorators": [],
                      "name": "GetKeys",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 145,
                      "end": 151,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 146,
                          "end": 150,
                          "typeName": {
                            "type": "Identifier",
                            "start": 146,
                            "end": 150,
                            "decorators": [],
                            "name": "Keys",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "RestElement",
                "start": 153,
                "end": 164,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 159,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 159,
                  "end": 164,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 161,
                    "end": 164,
                    "typeName": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 164,
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 194,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 167,
                "end": 194,
                "typeName": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 176,
                  "decorators": [],
                  "name": "GetResult",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 176,
                  "end": 194,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 177,
                      "end": 181,
                      "typeName": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 181,
                        "decorators": [],
                        "name": "Keys",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 183,
                      "end": 186,
                      "typeName": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 186,
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 188,
                      "end": 193,
                      "typeName": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 193,
                        "decorators": [],
                        "name": "Value",
                        "optional": false,
                        "typeAnnotation": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 198,
      "end": 329,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 210,
        "decorators": [],
        "name": "GetKeys",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 210,
        "end": 243,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 211,
            "end": 242,
            "name": {
              "type": "Identifier",
              "start": 211,
              "end": 215,
              "decorators": [],
              "name": "Keys",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 224,
              "end": 242,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 233,
                "end": 242,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 233,
                  "end": 240
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 246,
        "end": 328,
        "checkType": {
          "type": "TSTypeReference",
          "start": 246,
          "end": 250,
          "typeName": {
            "type": "Identifier",
            "start": 246,
            "end": 250,
            "decorators": [],
            "name": "Keys",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 259,
          "end": 292,
          "elementTypes": [
            {
              "type": "TSRestType",
              "start": 263,
              "end": 278,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 266,
                "end": 278,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 272,
                  "end": 278,
                  "name": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 278,
                    "decorators": [],
                    "name": "Remain",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            },
            {
              "type": "TSInferType",
              "start": 282,
              "end": 289,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 288,
                "end": 289,
                "name": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 289,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            }
          ]
        },
        "trueType": {
          "type": "TSUnionType",
          "start": 297,
          "end": 319,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 297,
              "end": 301,
              "typeName": {
                "type": "Identifier",
                "start": 297,
                "end": 301,
                "decorators": [],
                "name": "Keys",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 304,
              "end": 319,
              "typeName": {
                "type": "Identifier",
                "start": 304,
                "end": 311,
                "decorators": [],
                "name": "GetKeys",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 311,
                "end": 319,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 312,
                    "end": 318,
                    "typeName": {
                      "type": "Identifier",
                      "start": 312,
                      "end": 318,
                      "decorators": [],
                      "name": "Remain",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          ]
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 324,
          "end": 328,
          "typeName": {
            "type": "Identifier",
            "start": 324,
            "end": 328,
            "decorators": [],
            "name": "Keys",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 330,
      "end": 539,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 344,
        "decorators": [],
        "name": "GetResult",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 344,
        "end": 417,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 348,
            "end": 377,
            "name": {
              "type": "Identifier",
              "start": 348,
              "end": 350,
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 359,
              "end": 377,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 368,
                "end": 377,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 368,
                  "end": 375
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 381,
            "end": 405,
            "name": {
              "type": "Identifier",
              "start": 381,
              "end": 385,
              "decorators": [],
              "name": "Args",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 394,
              "end": 405,
              "typeName": {
                "type": "Identifier",
                "start": 394,
                "end": 401,
                "decorators": [],
                "name": "GetKeys",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 401,
                "end": 405,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 402,
                    "end": 404,
                    "typeName": {
                      "type": "Identifier",
                      "start": 402,
                      "end": 404,
                      "decorators": [],
                      "name": "Id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 409,
            "end": 414,
            "name": {
              "type": "Identifier",
              "start": 409,
              "end": 414,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 420,
        "end": 538,
        "checkType": {
          "type": "TSTypeReference",
          "start": 420,
          "end": 424,
          "typeName": {
            "type": "Identifier",
            "start": 420,
            "end": 424,
            "decorators": [],
            "name": "Args",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 433,
          "end": 435,
          "typeName": {
            "type": "Identifier",
            "start": 433,
            "end": 435,
            "decorators": [],
            "name": "Id",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSUnionType",
          "start": 440,
          "end": 457,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 440,
              "end": 445,
              "typeName": {
                "type": "Identifier",
                "start": 440,
                "end": 445,
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 448,
              "end": 457
            }
          ]
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 462,
          "end": 538,
          "checkType": {
            "type": "TSTypeReference",
            "start": 462,
            "end": 464,
            "typeName": {
              "type": "Identifier",
              "start": 462,
              "end": 464,
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTupleType",
            "start": 473,
            "end": 497,
            "elementTypes": [
              {
                "type": "TSRestType",
                "start": 474,
                "end": 481,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 477,
                  "end": 481,
                  "typeName": {
                    "type": "Identifier",
                    "start": 477,
                    "end": 481,
                    "decorators": [],
                    "name": "Args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              {
                "type": "TSRestType",
                "start": 483,
                "end": 496,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 486,
                  "end": 496,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 492,
                    "end": 496,
                    "name": {
                      "type": "Identifier",
                      "start": 492,
                      "end": 496,
                      "decorators": [],
                      "name": "Rest",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              }
            ]
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 502,
            "end": 528,
            "typeName": {
              "type": "Identifier",
              "start": 502,
              "end": 510,
              "decorators": [],
              "name": "Iterable",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 510,
              "end": 528,
              "params": [
                {
                  "type": "TSTupleType",
                  "start": 511,
                  "end": 527,
                  "elementTypes": [
                    {
                      "type": "TSRestType",
                      "start": 512,
                      "end": 519,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 515,
                        "end": 519,
                        "typeName": {
                          "type": "Identifier",
                          "start": 515,
                          "end": 519,
                          "decorators": [],
                          "name": "Rest",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 521,
                      "end": 526,
                      "typeName": {
                        "type": "Identifier",
                        "start": 521,
                        "end": 526,
                        "decorators": [],
                        "name": "Value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              ]
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 533,
            "end": 538
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 540,
      "end": 605,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 546,
          "end": 604,
          "id": {
            "type": "Identifier",
            "start": 546,
            "end": 596,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 547,
              "end": 596,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 549,
                "end": 596,
                "typeName": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 560,
                  "decorators": [],
                  "name": "MultiKeyMap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 560,
                  "end": 596,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 561,
                      "end": 587,
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "start": 562,
                          "end": 573,
                          "label": {
                            "type": "Identifier",
                            "start": 562,
                            "end": 565,
                            "decorators": [],
                            "name": "id1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 567,
                            "end": 573
                          },
                          "optional": false
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "start": 575,
                          "end": 586,
                          "label": {
                            "type": "Identifier",
                            "start": 575,
                            "end": 578,
                            "decorators": [],
                            "name": "id2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 580,
                            "end": 586
                          },
                          "optional": false
                        }
                      ]
                    },
                    {
                      "type": "TSObjectKeyword",
                      "start": 589,
                      "end": 595
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "TSNonNullExpression",
            "start": 599,
            "end": 604,
            "expression": {
              "type": "Literal",
              "start": 599,
              "end": 603,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 606,
      "end": 634,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 612,
          "end": 633,
          "id": {
            "type": "Identifier",
            "start": 612,
            "end": 615,
            "decorators": [],
            "name": "id1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 618,
            "end": 633,
            "expression": {
              "type": "Literal",
              "start": 618,
              "end": 623,
              "value": "abc",
              "raw": "\"abc\""
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 627,
              "end": 633
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 635,
      "end": 662,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 641,
          "end": 661,
          "id": {
            "type": "Identifier",
            "start": 641,
            "end": 648,
            "decorators": [],
            "name": "matches",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 651,
            "end": 661,
            "callee": {
              "type": "MemberExpression",
              "start": 651,
              "end": 656,
              "object": {
                "type": "Identifier",
                "start": 651,
                "end": 652,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 653,
                "end": 656,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 657,
                "end": 660,
                "decorators": [],
                "name": "id1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
