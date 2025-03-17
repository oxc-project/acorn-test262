__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "name": "ObjectType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 22,
              "name": "Source",
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 34,
              "name": "kind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "object",
                  "raw": "\"object\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 48,
            "end": 83,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 56,
              "name": "__source",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 82,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 58,
                "end": 82,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 59,
                    "end": 73,
                    "name": "source",
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
                          "name": "Source",
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
                  "start": 75,
                  "end": 82,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 78,
                    "end": 82
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 88,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 98,
        "name": "Field",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 99,
              "end": 105,
              "name": "Source",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 107,
            "end": 125,
            "name": {
              "type": "Identifier",
              "start": 107,
              "end": 110,
              "name": "Key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 138,
              "name": "__key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 158,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 140,
                "end": 158,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 141,
                    "end": 149,
                    "name": "key",
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
                          "name": "Key",
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
                  "start": 151,
                  "end": 158,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 154,
                    "end": 158
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 162,
            "end": 197,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 170,
              "name": "__source",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 196,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 172,
                "end": 196,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 173,
                    "end": 187,
                    "name": "source",
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
                          "name": "Source",
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
                  "start": 189,
                  "end": 196,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 192,
                    "end": 196
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 406,
            "name": "object",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 406,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 224,
                "end": 406,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 224,
                  "end": 232,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 225,
                      "end": 231,
                      "name": {
                        "type": "Identifier",
                        "start": 225,
                        "end": 231,
                        "name": "Source",
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
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 235,
                  "end": 406,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 238,
                    "end": 406,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 238,
                      "end": 320,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 242,
                          "end": 318,
                          "name": {
                            "type": "Identifier",
                            "start": 242,
                            "end": 248,
                            "name": "Fields",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSMappedType",
                            "start": 257,
                            "end": 318,
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "start": 264,
                              "end": 283,
                              "name": {
                                "type": "Identifier",
                                "start": 264,
                                "end": 267,
                                "name": "Key",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
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
                                    "name": "Fields",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false
                            },
                            "nameType": null,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 286,
                              "end": 313,
                              "typeName": {
                                "type": "Identifier",
                                "start": 286,
                                "end": 291,
                                "name": "Field",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
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
                                      "name": "Source",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
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
                                          "name": "Key",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSStringKeyword",
                                        "start": 306,
                                        "end": 312
                                      }
                                    ]
                                  }
                                ]
                              }
                            },
                            "optional": null,
                            "readonly": null,
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
                                  "name": "Fields",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "key": {
                              "type": "Identifier",
                              "start": 264,
                              "end": 267,
                              "name": "Key",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        "type": "Identifier",
                        "start": 321,
                        "end": 383,
                        "name": "config",
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
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 333,
                                  "end": 337,
                                  "name": "name",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 337,
                                  "end": 345,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 339,
                                    "end": 345
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 349,
                                "end": 381,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 349,
                                  "end": 355,
                                  "name": "fields",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
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
                                          "name": "Fields",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSFunctionType",
                                        "start": 367,
                                        "end": 379,
                                        "typeParameters": null,
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
                                              "name": "Fields",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        }
                                      }
                                    ]
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 388,
                          "end": 398,
                          "name": "ObjectType",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                                "name": "Source",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 409,
      "end": 528,
      "id": {
        "type": "Identifier",
        "start": 414,
        "end": 438,
        "name": "InferValueFromObjectType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 439,
              "end": 443,
              "name": "Type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 452,
              "end": 467,
              "typeName": {
                "type": "Identifier",
                "start": 452,
                "end": 462,
                "name": "ObjectType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
            "name": "Type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 486,
          "end": 510,
          "typeName": {
            "type": "Identifier",
            "start": 486,
            "end": 496,
            "name": "ObjectType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 509,
                    "name": "Source",
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
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 513,
          "end": 519,
          "typeName": {
            "type": "Identifier",
            "start": 513,
            "end": 519,
            "name": "Source",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 522,
          "end": 527
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 530,
      "end": 646,
      "id": {
        "type": "Identifier",
        "start": 535,
        "end": 548,
        "name": "FieldResolver",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 549,
              "end": 555,
              "name": "Source",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 557,
            "end": 586,
            "name": {
              "type": "Identifier",
              "start": 557,
              "end": 562,
              "name": "TType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 571,
              "end": 586,
              "typeName": {
                "type": "Identifier",
                "start": 571,
                "end": 581,
                "name": "ObjectType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
        "type": "TSFunctionType",
        "start": 590,
        "end": 645,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 594,
            "end": 608,
            "name": "source",
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
                  "name": "Source",
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
          "start": 611,
          "end": 645,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 614,
            "end": 645,
            "typeName": {
              "type": "Identifier",
              "start": 614,
              "end": 638,
              "name": "InferValueFromObjectType",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "name": "TType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 648,
      "end": 765,
      "id": {
        "type": "Identifier",
        "start": 653,
        "end": 666,
        "name": "FieldFuncArgs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 667,
              "end": 673,
              "name": "Source",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 675,
            "end": 703,
            "name": {
              "type": "Identifier",
              "start": 675,
              "end": 679,
              "name": "Type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 688,
              "end": 703,
              "typeName": {
                "type": "Identifier",
                "start": 688,
                "end": 698,
                "name": "ObjectType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
        "type": "TSTypeLiteral",
        "start": 707,
        "end": 764,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 711,
            "end": 722,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 711,
              "end": 715,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "Type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 725,
            "end": 762,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 725,
              "end": 732,
              "name": "resolve",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 732,
              "end": 761,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 734,
                "end": 761,
                "typeName": {
                  "type": "Identifier",
                  "start": 734,
                  "end": 747,
                  "name": "FieldResolver",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "Source",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 756,
                      "end": 760,
                      "typeName": {
                        "type": "Identifier",
                        "start": 756,
                        "end": 760,
                        "name": "Type",
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
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 781,
            "end": 908,
            "name": "field",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 786,
              "end": 908,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 788,
                "end": 908,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 788,
                  "end": 846,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 789,
                      "end": 795,
                      "name": {
                        "type": "Identifier",
                        "start": 789,
                        "end": 795,
                        "name": "Source",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 797,
                      "end": 825,
                      "name": {
                        "type": "Identifier",
                        "start": 797,
                        "end": 801,
                        "name": "Type",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 810,
                        "end": 825,
                        "typeName": {
                          "type": "Identifier",
                          "start": 810,
                          "end": 820,
                          "name": "ObjectType",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                        }
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 827,
                      "end": 845,
                      "name": {
                        "type": "Identifier",
                        "start": 827,
                        "end": 830,
                        "name": "Key",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 839,
                        "end": 845
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
                    "type": "Identifier",
                    "start": 850,
                    "end": 884,
                    "name": "field",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 855,
                      "end": 884,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 857,
                        "end": 884,
                        "typeName": {
                          "type": "Identifier",
                          "start": 857,
                          "end": 870,
                          "name": "FieldFuncArgs",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                                "name": "Source",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 879,
                              "end": 883,
                              "typeName": {
                                "type": "Identifier",
                                "start": 879,
                                "end": 883,
                                "name": "Type",
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
                    "decorators": [],
                    "optional": false
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 890,
                      "end": 895,
                      "name": "Field",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "Source",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 904,
                          "end": 907,
                          "typeName": {
                            "type": "Identifier",
                            "start": 904,
                            "end": 907,
                            "name": "Key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 911,
      "end": 944,
      "id": {
        "type": "Identifier",
        "start": 916,
        "end": 925,
        "name": "Something",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 930,
              "end": 933,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 933,
              "end": 941,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 935,
                "end": 941
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1000,
            "end": 1001,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1004,
            "end": 1179,
            "callee": {
              "type": "CallExpression",
              "start": 1004,
              "end": 1023,
              "callee": {
                "type": "Identifier",
                "start": 1004,
                "end": 1010,
                "name": "object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
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
                      "name": "Something",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1028,
                      "end": 1032,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1034,
                      "end": 1037,
                      "value": "A",
                      "raw": "\"A\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 1041,
                    "end": 1175,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1041,
                      "end": 1047,
                      "name": "fields",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 1049,
                      "end": 1175,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "ObjectExpression",
                        "start": 1056,
                        "end": 1174,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1062,
                            "end": 1169,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1062,
                              "end": 1063,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "CallExpression",
                              "start": 1065,
                              "end": 1169,
                              "callee": {
                                "type": "Identifier",
                                "start": 1065,
                                "end": 1070,
                                "name": "field",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
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
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1079,
                                        "end": 1083,
                                        "name": "type",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "start": 1085,
                                        "end": 1086,
                                        "name": "A",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "kind": "init",
                                      "optional": false
                                    },
                                    {
                                      "type": "Property",
                                      "start": 1094,
                                      "end": 1161,
                                      "method": true,
                                      "shorthand": false,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1094,
                                        "end": 1101,
                                        "name": "resolve",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "FunctionExpression",
                                        "start": 1101,
                                        "end": 1161,
                                        "id": null,
                                        "expression": false,
                                        "generator": false,
                                        "async": false,
                                        "params": [],
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
                                                    "method": false,
                                                    "shorthand": false,
                                                    "computed": false,
                                                    "key": {
                                                      "type": "Identifier",
                                                      "start": 1133,
                                                      "end": 1136,
                                                      "name": "foo",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "value": {
                                                      "type": "Literal",
                                                      "start": 1138,
                                                      "end": 1141,
                                                      "value": 100,
                                                      "raw": "100"
                                                    },
                                                    "kind": "init",
                                                    "optional": false
                                                  }
                                                ]
                                              }
                                            }
                                          ]
                                        },
                                        "declare": false,
                                        "typeParameters": null,
                                        "returnType": null
                                      },
                                      "kind": "init",
                                      "optional": false
                                    }
                                  ]
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
