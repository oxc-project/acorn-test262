inferenceAndHKTs.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 727,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 78,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 29,
        "end": 78,
        "body": {
          "type": "TSInterfaceBody",
          "start": 50,
          "end": 78,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 56,
              "end": 76,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "optional": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 66,
                "end": 75,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 68,
                  "end": 75
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 49,
          "decorators": [],
          "name": "TypeLambda",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 80,
      "end": 152,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 87,
        "end": 152,
        "body": {
          "type": "TSInterfaceBody",
          "start": 129,
          "end": 152,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 135,
              "end": 150,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 144,
                "end": 146,
                "decorators": [],
                "name": "_F",
                "optional": false
              },
              "optional": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 146,
                "end": 149,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 148,
                  "end": 149,
                  "typeName": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 149,
                    "decorators": [],
                    "name": "F",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 97,
          "end": 106,
          "decorators": [],
          "name": "TypeClass",
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 106,
          "end": 128,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 107,
              "end": 127,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 117,
                "end": 127,
                "typeName": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 127,
                  "decorators": [],
                  "name": "TypeLambda",
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "decorators": [],
                "name": "F",
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
      "start": 154,
      "end": 313,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 161,
        "end": 313,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 166,
          "end": 171,
          "decorators": [],
          "name": "Apply",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 199,
          "end": 312,
          "checkType": {
            "type": "TSTypeReference",
            "start": 199,
            "end": 200,
            "typeName": {
              "type": "Identifier",
              "start": 199,
              "end": 200,
              "decorators": [],
              "name": "F",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSTypeLiteral",
            "start": 209,
            "end": 235,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 211,
                "end": 233,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 224,
                  "decorators": [],
                  "name": "type",
                  "optional": false
                },
                "optional": false,
                "readonly": true,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 224,
                  "end": 233,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 226,
                    "end": 233
                  }
                }
              }
            ]
          },
          "falseType": {
            "type": "TSTypeLiteral",
            "start": 280,
            "end": 312,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 282,
                "end": 296,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 292,
                  "decorators": [],
                  "name": "F",
                  "optional": false
                },
                "optional": false,
                "readonly": true,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 292,
                  "end": 295,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 294,
                    "end": 295,
                    "typeName": {
                      "type": "Identifier",
                      "start": 294,
                      "end": 295,
                      "decorators": [],
                      "name": "F",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 297,
                "end": 310,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 307,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "optional": false,
                "readonly": true,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 307,
                  "end": 310,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 309,
                    "end": 310,
                    "typeName": {
                      "type": "Identifier",
                      "start": 309,
                      "end": 310,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
              }
            ]
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "start": 242,
            "end": 273,
            "indexType": {
              "type": "TSLiteralType",
              "start": 266,
              "end": 272,
              "literal": {
                "type": "Literal",
                "start": 266,
                "end": 272,
                "raw": "'type'",
                "value": "type"
              }
            },
            "objectType": {
              "type": "TSIntersectionType",
              "start": 243,
              "end": 264,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 243,
                  "end": 244,
                  "typeName": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 244,
                    "decorators": [],
                    "name": "F",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 247,
                  "end": 264,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 249,
                      "end": 262,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 258,
                        "end": 259,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": true,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 259,
                        "end": 262,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 261,
                          "end": 262,
                          "typeName": {
                            "type": "Identifier",
                            "start": 261,
                            "end": 262,
                            "decorators": [],
                            "name": "A",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 171,
          "end": 196,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 172,
              "end": 192,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 182,
                "end": 192,
                "typeName": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 192,
                  "decorators": [],
                  "name": "TypeLambda",
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "decorators": [],
                "name": "F",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 194,
              "end": 195,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 194,
                "end": 195,
                "decorators": [],
                "name": "A",
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
      "start": 315,
      "end": 354,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 322,
        "end": 354,
        "body": {
          "type": "TSInterfaceBody",
          "start": 337,
          "end": 354,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 343,
              "end": 352,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 343,
                "end": 348,
                "decorators": [],
                "name": "value",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 348,
                "end": 351,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 350,
                  "end": 351,
                  "typeName": {
                    "type": "Identifier",
                    "start": 350,
                    "end": 351,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 332,
          "end": 333,
          "decorators": [],
          "name": "T",
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 333,
          "end": 336,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 334,
              "end": 335,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 334,
                "end": 335,
                "decorators": [],
                "name": "A",
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
      "start": 356,
      "end": 440,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 363,
        "end": 440,
        "body": {
          "type": "TSInterfaceBody",
          "start": 404,
          "end": 440,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 410,
              "end": 438,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 419,
                "end": 423,
                "decorators": [],
                "name": "type",
                "optional": false
              },
              "optional": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 423,
                "end": 437,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 425,
                  "end": 437,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 426,
                    "end": 437,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 427,
                        "end": 436,
                        "indexType": {
                          "type": "TSLiteralType",
                          "start": 432,
                          "end": 435,
                          "literal": {
                            "type": "Literal",
                            "start": 432,
                            "end": 435,
                            "raw": "\"A\"",
                            "value": "A"
                          }
                        },
                        "objectType": {
                          "type": "TSThisType",
                          "start": 427,
                          "end": 431
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 426,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 393,
            "end": 403,
            "expression": {
              "type": "Identifier",
              "start": 393,
              "end": 403,
              "decorators": [],
              "name": "TypeLambda",
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 373,
          "end": 384,
          "decorators": [],
          "name": "TTypeLambda",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 442,
      "end": 565,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 449,
        "end": 565,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 463,
            "end": 564,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 463,
              "end": 564,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 466,
                "end": 564,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 468,
                  "end": 564,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 491,
                      "end": 506,
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 492,
                        "end": 506,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 494,
                          "end": 506,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 503,
                            "end": 506,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 504,
                                "end": 505,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 504,
                                  "end": 505,
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 494,
                            "end": 503,
                            "decorators": [],
                            "name": "TypeClass",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 508,
                    "end": 564,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 511,
                      "end": 564,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 518,
                          "end": 532,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 519,
                            "end": 532,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 521,
                              "end": 532,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 526,
                                "end": 532,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 527,
                                    "end": 528,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 527,
                                      "end": 528,
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "start": 530,
                                    "end": 531,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 530,
                                      "end": 531,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 521,
                                "end": 526,
                                "decorators": [],
                                "name": "Apply",
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 534,
                          "end": 548,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 535,
                            "end": 548,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 537,
                              "end": 548,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 538,
                                  "end": 542,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 539,
                                    "end": 542,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 541,
                                      "end": 542,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 541,
                                        "end": 542,
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 544,
                                "end": 548,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 547,
                                  "end": 548,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 547,
                                    "end": 548,
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false
                                  }
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 550,
                        "end": 564,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 553,
                          "end": 564,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 558,
                            "end": 564,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 559,
                                "end": 560,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 559,
                                  "end": 560,
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 562,
                                "end": 563,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 562,
                                  "end": 563,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 553,
                            "end": 558,
                            "decorators": [],
                            "name": "Apply",
                            "optional": false
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 511,
                        "end": 517,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 512,
                            "end": 513,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 512,
                              "end": 513,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            },
                            "out": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 515,
                            "end": 516,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 515,
                              "end": 516,
                              "decorators": [],
                              "name": "B",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 468,
                    "end": 490,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 469,
                        "end": 489,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 479,
                          "end": 489,
                          "typeName": {
                            "type": "Identifier",
                            "start": 479,
                            "end": 489,
                            "decorators": [],
                            "name": "TypeLambda",
                            "optional": false
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 469,
                          "end": 470,
                          "decorators": [],
                          "name": "F",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 567,
      "end": 615,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 581,
          "end": 614,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 581,
            "end": 614,
            "decorators": [],
            "name": "typeClass",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 590,
              "end": 614,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 592,
                "end": 614,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 601,
                  "end": 614,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 602,
                      "end": 613,
                      "typeName": {
                        "type": "Identifier",
                        "start": 602,
                        "end": 613,
                        "decorators": [],
                        "name": "TTypeLambda",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 592,
                  "end": 601,
                  "decorators": [],
                  "name": "TypeClass",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 617,
      "end": 644,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 631,
          "end": 643,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 631,
            "end": 643,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 632,
              "end": 643,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 634,
                "end": 643,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 635,
                  "end": 643,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 636,
                      "end": 642
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 634,
                  "end": 635,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 646,
      "end": 672,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 652,
          "end": 671,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 652,
            "end": 654,
            "decorators": [],
            "name": "x1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 657,
            "end": 671,
            "arguments": [
              {
                "type": "Identifier",
                "start": 661,
                "end": 670,
                "decorators": [],
                "name": "typeClass",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 657,
              "end": 660,
              "decorators": [],
              "name": "map",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 673,
      "end": 712,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 679,
          "end": 711,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 679,
            "end": 681,
            "decorators": [],
            "name": "x2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 684,
            "end": 711,
            "arguments": [
              {
                "type": "Identifier",
                "start": 699,
                "end": 700,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 702,
                "end": 710,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 709,
                  "end": 710,
                  "decorators": [],
                  "name": "_",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 703,
                    "end": 704,
                    "decorators": [],
                    "name": "_",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "CallExpression",
              "start": 684,
              "end": 698,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 688,
                  "end": 697,
                  "decorators": [],
                  "name": "typeClass",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 684,
                "end": 687,
                "decorators": [],
                "name": "map",
                "optional": false
              },
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
