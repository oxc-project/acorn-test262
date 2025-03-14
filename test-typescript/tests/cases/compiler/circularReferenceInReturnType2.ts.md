circularReferenceInReturnType2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1181,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 86,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "ObjectType",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 26,
        "end": 85,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 30,
            "end": 45,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 34,
              "decorators": [],
              "name": "kind",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 44,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 36,
                "end": 44,
                "literal": {
                  "type": "Literal",
                  "start": 36,
                  "end": 44,
                  "raw": "\"object\"",
                  "value": "object"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 48,
            "end": 83,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 56,
              "decorators": [],
              "name": "__source",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 82,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 58,
                "end": 82,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 59,
                    "end": 73,
                    "decorators": [],
                    "name": "source",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 65,
                      "end": 73,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 67,
                        "end": 73,
                        "typeName": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 73,
                          "decorators": [],
                          "name": "Source",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 75,
                  "end": 82,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 78,
                    "end": 82
                  }
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 22,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 22,
              "decorators": [],
              "name": "Source",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 88,
      "end": 200,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 98,
        "decorators": [],
        "name": "Field",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 129,
        "end": 199,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 133,
            "end": 159,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 138,
              "decorators": [],
              "name": "__key",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 158,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 140,
                "end": 158,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 141,
                    "end": 149,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 144,
                      "end": 149,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 146,
                        "end": 149,
                        "typeName": {
                          "type": "Identifier",
                          "start": 146,
                          "end": 149,
                          "decorators": [],
                          "name": "Key",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 151,
                  "end": 158,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 154,
                    "end": 158
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 162,
            "end": 197,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 170,
              "decorators": [],
              "name": "__source",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 196,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 172,
                "end": 196,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 173,
                    "end": 187,
                    "decorators": [],
                    "name": "source",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 179,
                      "end": 187,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 181,
                        "end": 187,
                        "typeName": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 187,
                          "decorators": [],
                          "name": "Source",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 189,
                  "end": 196,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 192,
                    "end": 196
                  }
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 98,
        "end": 126,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 99,
            "end": 105,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 99,
              "end": 105,
              "decorators": [],
              "name": "Source",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 107,
            "end": 125,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 107,
              "end": 110,
              "decorators": [],
              "name": "Key",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 202,
      "end": 407,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 406,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 406,
            "decorators": [],
            "name": "object",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 406,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 224,
                "end": 406,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 235,
                  "end": 406,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 238,
                    "end": 406,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 321,
                        "end": 383,
                        "decorators": [],
                        "name": "config",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 327,
                          "end": 383,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 329,
                            "end": 383,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 333,
                                "end": 346,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 333,
                                  "end": 337,
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 337,
                                  "end": 345,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 339,
                                    "end": 345
                                  }
                                }
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 349,
                                "end": 381,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 349,
                                  "end": 355,
                                  "decorators": [],
                                  "name": "fields",
                                  "optional": false
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 355,
                                  "end": 380,
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "start": 357,
                                    "end": 380,
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 357,
                                        "end": 363,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 357,
                                          "end": 363,
                                          "decorators": [],
                                          "name": "Fields",
                                          "optional": false
                                        }
                                      },
                                      {
                                        "type": "TSFunctionType",
                                        "start": 367,
                                        "end": 379,
                                        "params": [],
                                        "returnType": {
                                          "type": "TSTypeAnnotation",
                                          "start": 370,
                                          "end": 379,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 373,
                                            "end": 379,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 373,
                                              "end": 379,
                                              "decorators": [],
                                              "name": "Fields",
                                              "optional": false
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
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 385,
                      "end": 406,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 388,
                        "end": 406,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 398,
                          "end": 406,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 399,
                              "end": 405,
                              "typeName": {
                                "type": "Identifier",
                                "start": 399,
                                "end": 405,
                                "decorators": [],
                                "name": "Source",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 388,
                          "end": 398,
                          "decorators": [],
                          "name": "ObjectType",
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 238,
                      "end": 320,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 242,
                          "end": 318,
                          "const": false,
                          "constraint": {
                            "type": "TSMappedType",
                            "start": 257,
                            "end": 318,
                            "constraint": {
                              "type": "TSTypeOperator",
                              "start": 271,
                              "end": 283,
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 277,
                                "end": 283,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 277,
                                  "end": 283,
                                  "decorators": [],
                                  "name": "Fields",
                                  "optional": false
                                }
                              }
                            },
                            "key": {
                              "type": "Identifier",
                              "start": 264,
                              "end": 267,
                              "decorators": [],
                              "name": "Key",
                              "optional": false
                            },
                            "nameType": null,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 286,
                              "end": 313,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 291,
                                "end": 313,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 292,
                                    "end": 298,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 292,
                                      "end": 298,
                                      "decorators": [],
                                      "name": "Source",
                                      "optional": false
                                    }
                                  },
                                  {
                                    "type": "TSIntersectionType",
                                    "start": 300,
                                    "end": 312,
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 300,
                                        "end": 303,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 300,
                                          "end": 303,
                                          "decorators": [],
                                          "name": "Key",
                                          "optional": false
                                        }
                                      },
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 306,
                                        "end": 312
                                      }
                                    ]
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 286,
                                "end": 291,
                                "decorators": [],
                                "name": "Field",
                                "optional": false
                              }
                            }
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 242,
                            "end": 248,
                            "decorators": [],
                            "name": "Fields",
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
                  "start": 224,
                  "end": 232,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 225,
                      "end": 231,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 225,
                        "end": 231,
                        "decorators": [],
                        "name": "Source",
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 409,
      "end": 528,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 414,
        "end": 438,
        "decorators": [],
        "name": "InferValueFromObjectType",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 473,
        "end": 527,
        "checkType": {
          "type": "TSTypeReference",
          "start": 473,
          "end": 477,
          "typeName": {
            "type": "Identifier",
            "start": 473,
            "end": 477,
            "decorators": [],
            "name": "Type",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 486,
          "end": 510,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 496,
            "end": 510,
            "params": [
              {
                "type": "TSInferType",
                "start": 497,
                "end": 509,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 503,
                  "end": 509,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 509,
                    "decorators": [],
                    "name": "Source",
                    "optional": false
                  },
                  "out": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 486,
            "end": 496,
            "decorators": [],
            "name": "ObjectType",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 522,
          "end": 527
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 513,
          "end": 519,
          "typeName": {
            "type": "Identifier",
            "start": 513,
            "end": 519,
            "decorators": [],
            "name": "Source",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 438,
        "end": 468,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 439,
            "end": 467,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 452,
              "end": 467,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 462,
                "end": 467,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 463,
                    "end": 466
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 452,
                "end": 462,
                "decorators": [],
                "name": "ObjectType",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 439,
              "end": 443,
              "decorators": [],
              "name": "Type",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 530,
      "end": 646,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 535,
        "end": 548,
        "decorators": [],
        "name": "FieldResolver",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 590,
        "end": 645,
        "params": [
          {
            "type": "Identifier",
            "start": 594,
            "end": 608,
            "decorators": [],
            "name": "source",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 600,
              "end": 608,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 602,
                "end": 608,
                "typeName": {
                  "type": "Identifier",
                  "start": 602,
                  "end": 608,
                  "decorators": [],
                  "name": "Source",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 611,
          "end": 645,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 614,
            "end": 645,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 638,
              "end": 645,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 639,
                  "end": 644,
                  "typeName": {
                    "type": "Identifier",
                    "start": 639,
                    "end": 644,
                    "decorators": [],
                    "name": "TType",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 614,
              "end": 638,
              "decorators": [],
              "name": "InferValueFromObjectType",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 548,
        "end": 587,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 549,
            "end": 555,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 549,
              "end": 555,
              "decorators": [],
              "name": "Source",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 557,
            "end": 586,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 571,
              "end": 586,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 581,
                "end": 586,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 582,
                    "end": 585
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 571,
                "end": 581,
                "decorators": [],
                "name": "ObjectType",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 557,
              "end": 562,
              "decorators": [],
              "name": "TType",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 648,
      "end": 765,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 653,
        "end": 666,
        "decorators": [],
        "name": "FieldFuncArgs",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 707,
        "end": 764,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 711,
            "end": 722,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 711,
              "end": 715,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 715,
              "end": 721,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 717,
                "end": 721,
                "typeName": {
                  "type": "Identifier",
                  "start": 717,
                  "end": 721,
                  "decorators": [],
                  "name": "Type",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 725,
            "end": 762,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 725,
              "end": 732,
              "decorators": [],
              "name": "resolve",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 732,
              "end": 761,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 734,
                "end": 761,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 747,
                  "end": 761,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 748,
                      "end": 754,
                      "typeName": {
                        "type": "Identifier",
                        "start": 748,
                        "end": 754,
                        "decorators": [],
                        "name": "Source",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 756,
                      "end": 760,
                      "typeName": {
                        "type": "Identifier",
                        "start": 756,
                        "end": 760,
                        "decorators": [],
                        "name": "Type",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 734,
                  "end": 747,
                  "decorators": [],
                  "name": "FieldResolver",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 666,
        "end": 704,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 667,
            "end": 673,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 667,
              "end": 673,
              "decorators": [],
              "name": "Source",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 675,
            "end": 703,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 688,
              "end": 703,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 698,
                "end": 703,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 699,
                    "end": 702
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 688,
                "end": 698,
                "decorators": [],
                "name": "ObjectType",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 675,
              "end": 679,
              "decorators": [],
              "name": "Type",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 767,
      "end": 909,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 781,
          "end": 908,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 781,
            "end": 908,
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 786,
              "end": 908,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 788,
                "end": 908,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 850,
                    "end": 884,
                    "decorators": [],
                    "name": "field",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 855,
                      "end": 884,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 857,
                        "end": 884,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 870,
                          "end": 884,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 871,
                              "end": 877,
                              "typeName": {
                                "type": "Identifier",
                                "start": 871,
                                "end": 877,
                                "decorators": [],
                                "name": "Source",
                                "optional": false
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 879,
                              "end": 883,
                              "typeName": {
                                "type": "Identifier",
                                "start": 879,
                                "end": 883,
                                "decorators": [],
                                "name": "Type",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 857,
                          "end": 870,
                          "decorators": [],
                          "name": "FieldFuncArgs",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 887,
                  "end": 908,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 890,
                    "end": 908,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 895,
                      "end": 908,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 896,
                          "end": 902,
                          "typeName": {
                            "type": "Identifier",
                            "start": 896,
                            "end": 902,
                            "decorators": [],
                            "name": "Source",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 904,
                          "end": 907,
                          "typeName": {
                            "type": "Identifier",
                            "start": 904,
                            "end": 907,
                            "decorators": [],
                            "name": "Key",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 890,
                      "end": 895,
                      "decorators": [],
                      "name": "Field",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 788,
                  "end": 846,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 789,
                      "end": 795,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 789,
                        "end": 795,
                        "decorators": [],
                        "name": "Source",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 797,
                      "end": 825,
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 810,
                        "end": 825,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 820,
                          "end": 825,
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 821,
                              "end": 824
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 810,
                          "end": 820,
                          "decorators": [],
                          "name": "ObjectType",
                          "optional": false
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 797,
                        "end": 801,
                        "decorators": [],
                        "name": "Type",
                        "optional": false
                      },
                      "out": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 827,
                      "end": 845,
                      "const": false,
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 839,
                        "end": 845
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 827,
                        "end": 830,
                        "decorators": [],
                        "name": "Key",
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 911,
      "end": 944,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 916,
        "end": 925,
        "decorators": [],
        "name": "Something",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 928,
        "end": 943,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 930,
            "end": 941,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 930,
              "end": 933,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 933,
              "end": 941,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 935,
                "end": 941
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 994,
      "end": 1180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1000,
          "end": 1179,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1000,
            "end": 1001,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1004,
            "end": 1179,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 1024,
                "end": 1178,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1028,
                    "end": 1037,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1028,
                      "end": 1032,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 1034,
                      "end": 1037,
                      "raw": "\"A\"",
                      "value": "A"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1041,
                    "end": 1175,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1041,
                      "end": 1047,
                      "decorators": [],
                      "name": "fields",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1049,
                      "end": 1175,
                      "async": false,
                      "body": {
                        "type": "ObjectExpression",
                        "start": 1056,
                        "end": 1174,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1062,
                            "end": 1169,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1062,
                              "end": 1063,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "CallExpression",
                              "start": 1065,
                              "end": 1169,
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "start": 1071,
                                  "end": 1168,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 1079,
                                      "end": 1086,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1079,
                                        "end": 1083,
                                        "decorators": [],
                                        "name": "type",
                                        "optional": false
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "optional": false,
                                      "shorthand": false,
                                      "value": {
                                        "type": "Identifier",
                                        "start": 1085,
                                        "end": 1086,
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false
                                      }
                                    },
                                    {
                                      "type": "Property",
                                      "start": 1094,
                                      "end": 1161,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1094,
                                        "end": 1101,
                                        "decorators": [],
                                        "name": "resolve",
                                        "optional": false
                                      },
                                      "kind": "init",
                                      "method": true,
                                      "optional": false,
                                      "shorthand": false,
                                      "value": {
                                        "type": "FunctionExpression",
                                        "start": 1101,
                                        "end": 1161,
                                        "async": false,
                                        "body": {
                                          "type": "BlockStatement",
                                          "start": 1104,
                                          "end": 1161,
                                          "body": [
                                            {
                                              "type": "ReturnStatement",
                                              "start": 1114,
                                              "end": 1153,
                                              "argument": {
                                                "type": "ObjectExpression",
                                                "start": 1121,
                                                "end": 1152,
                                                "properties": [
                                                  {
                                                    "type": "Property",
                                                    "start": 1133,
                                                    "end": 1141,
                                                    "computed": false,
                                                    "key": {
                                                      "type": "Identifier",
                                                      "start": 1133,
                                                      "end": 1136,
                                                      "decorators": [],
                                                      "name": "foo",
                                                      "optional": false
                                                    },
                                                    "kind": "init",
                                                    "method": false,
                                                    "optional": false,
                                                    "shorthand": false,
                                                    "value": {
                                                      "type": "Literal",
                                                      "start": 1138,
                                                      "end": 1141,
                                                      "raw": "100",
                                                      "value": 100
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
                                        "params": []
                                      }
                                    }
                                  ]
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 1065,
                                "end": 1070,
                                "decorators": [],
                                "name": "field",
                                "optional": false
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "CallExpression",
              "start": 1004,
              "end": 1023,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1004,
                "end": 1010,
                "decorators": [],
                "name": "object",
                "optional": false
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1010,
                "end": 1021,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1011,
                    "end": 1020,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1011,
                      "end": 1020,
                      "decorators": [],
                      "name": "Something",
                      "optional": false
                    }
                  }
                ]
              }
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
