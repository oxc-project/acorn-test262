__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 790,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 106,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 106,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 21,
          "decorators": [],
          "name": "inferPipe",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 21,
          "end": 30,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 22,
              "end": 23,
              "name": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 25,
              "end": 29,
              "name": {
                "type": "Identifier",
                "start": 25,
                "end": 29,
                "decorators": [],
                "name": "pipe",
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
          "start": 37,
          "end": 106,
          "checkType": {
            "type": "TSTypeReference",
            "start": 37,
            "end": 41,
            "typeName": {
              "type": "Identifier",
              "start": 37,
              "end": 41,
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSFunctionType",
            "start": 50,
            "end": 68,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 51,
                "end": 56,
                "decorators": [],
                "name": "In",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 56,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 55,
                    "end": 56,
                    "typeName": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 56,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 68,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 61,
                "end": 68
              }
            }
          },
          "trueType": {
            "type": "TSFunctionType",
            "start": 71,
            "end": 98,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 72,
                "end": 77,
                "decorators": [],
                "name": "In",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 74,
                  "end": 77,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 76,
                    "end": 77,
                    "typeName": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 77,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 98,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 82,
                "end": 98,
                "typeName": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 92,
                  "decorators": [],
                  "name": "ReturnType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 92,
                  "end": 98,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 93,
                      "end": 97,
                      "typeName": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 97,
                        "decorators": [],
                        "name": "pipe",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 101,
            "end": 106
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 108,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 122,
        "decorators": [],
        "name": "Type",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 122,
        "end": 125,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 123,
            "end": 124,
            "name": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "t",
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
        "start": 126,
        "end": 201,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 132,
            "end": 199,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 136,
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 136,
              "end": 167,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 137,
                  "end": 166,
                  "name": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 139,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSFunctionType",
                    "start": 148,
                    "end": 166,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 149,
                        "end": 154,
                        "decorators": [],
                        "name": "In",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 151,
                          "end": 154,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 153,
                            "end": 154,
                            "typeName": {
                              "type": "Identifier",
                              "start": 153,
                              "end": 154,
                              "decorators": [],
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 156,
                      "end": 166,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 159,
                        "end": 166
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
            "params": [
              {
                "type": "Identifier",
                "start": 168,
                "end": 174,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 170,
                  "end": 174,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 172,
                    "end": 174,
                    "typeName": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 174,
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 199,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 199,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 181,
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 181,
                  "end": 199,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 182,
                      "end": 198,
                      "typeName": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 191,
                        "decorators": [],
                        "name": "inferPipe",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 191,
                        "end": 198,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 192,
                            "end": 193,
                            "typeName": {
                              "type": "Identifier",
                              "start": 192,
                              "end": 193,
                              "decorators": [],
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 195,
                            "end": 197,
                            "typeName": {
                              "type": "Identifier",
                              "start": 195,
                              "end": 197,
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
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
      "type": "VariableDeclaration",
      "start": 203,
      "end": 232,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 232,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 232,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 218,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 220,
                "end": 232,
                "typeName": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 224,
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 224,
                  "end": 232,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 225,
                      "end": 231
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 270,
      "end": 313,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 277,
        "end": 313,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 283,
            "end": 313,
            "id": {
              "type": "Identifier",
              "start": 283,
              "end": 286,
              "decorators": [],
              "name": "out",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 289,
              "end": 313,
              "callee": {
                "type": "MemberExpression",
                "start": 289,
                "end": 295,
                "object": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 290,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 295,
                  "decorators": [],
                  "name": "pipe",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 296,
                  "end": 312,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 296,
                      "end": 297,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "start": 301,
                    "end": 312,
                    "callee": {
                      "type": "Identifier",
                      "start": 301,
                      "end": 309,
                      "decorators": [],
                      "name": "parseInt",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 310,
                        "end": 311,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 315,
      "end": 580,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 322,
        "end": 580,
        "id": {
          "type": "Identifier",
          "start": 327,
          "end": 337,
          "decorators": [],
          "name": "inferPipe2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 337,
          "end": 346,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 338,
              "end": 339,
              "name": {
                "type": "Identifier",
                "start": 338,
                "end": 339,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 341,
              "end": 345,
              "name": {
                "type": "Identifier",
                "start": 341,
                "end": 345,
                "decorators": [],
                "name": "pipe",
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
          "start": 350,
          "end": 580,
          "checkType": {
            "type": "TSTypeReference",
            "start": 350,
            "end": 354,
            "typeName": {
              "type": "Identifier",
              "start": 350,
              "end": 354,
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSFunctionType",
            "start": 363,
            "end": 381,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 364,
                "end": 369,
                "decorators": [],
                "name": "In",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 366,
                  "end": 369,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 368,
                    "end": 369,
                    "typeName": {
                      "type": "Identifier",
                      "start": 368,
                      "end": 369,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 371,
              "end": 381,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 374,
                "end": 381
              }
            }
          },
          "trueType": {
            "type": "TSFunctionType",
            "start": 386,
            "end": 571,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 387,
                "end": 392,
                "decorators": [],
                "name": "In",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 389,
                  "end": 392,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 391,
                    "end": 392,
                    "typeName": {
                      "type": "Identifier",
                      "start": 391,
                      "end": 392,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 394,
              "end": 571,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 397,
                "end": 571,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 397,
                  "end": 413,
                  "typeName": {
                    "type": "Identifier",
                    "start": 397,
                    "end": 407,
                    "decorators": [],
                    "name": "ReturnType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 407,
                    "end": 413,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 408,
                        "end": 412,
                        "typeName": {
                          "type": "Identifier",
                          "start": 408,
                          "end": 412,
                          "decorators": [],
                          "name": "pipe",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "extendsType": {
                  "type": "TSInferType",
                  "start": 422,
                  "end": 444,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 428,
                    "end": 444,
                    "name": {
                      "type": "Identifier",
                      "start": 428,
                      "end": 429,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 438,
                      "end": 444
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 447,
                  "end": 448,
                  "typeName": {
                    "type": "Identifier",
                    "start": 447,
                    "end": 448,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "falseType": {
                  "type": "TSConditionalType",
                  "start": 453,
                  "end": 571,
                  "checkType": {
                    "type": "TSTypeReference",
                    "start": 453,
                    "end": 469,
                    "typeName": {
                      "type": "Identifier",
                      "start": 453,
                      "end": 463,
                      "decorators": [],
                      "name": "ReturnType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 463,
                      "end": 469,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 464,
                          "end": 468,
                          "typeName": {
                            "type": "Identifier",
                            "start": 464,
                            "end": 468,
                            "decorators": [],
                            "name": "pipe",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "extendsType": {
                    "type": "TSInferType",
                    "start": 478,
                    "end": 500,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 484,
                      "end": 500,
                      "name": {
                        "type": "Identifier",
                        "start": 484,
                        "end": 485,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSStringKeyword",
                        "start": 494,
                        "end": 500
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "start": 503,
                    "end": 504,
                    "typeName": {
                      "type": "Identifier",
                      "start": 503,
                      "end": 504,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "falseType": {
                    "type": "TSConditionalType",
                    "start": 509,
                    "end": 571,
                    "checkType": {
                      "type": "TSTypeReference",
                      "start": 509,
                      "end": 525,
                      "typeName": {
                        "type": "Identifier",
                        "start": 509,
                        "end": 519,
                        "decorators": [],
                        "name": "ReturnType",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 519,
                        "end": 525,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 520,
                            "end": 524,
                            "typeName": {
                              "type": "Identifier",
                              "start": 520,
                              "end": 524,
                              "decorators": [],
                              "name": "pipe",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "extendsType": {
                      "type": "TSInferType",
                      "start": 534,
                      "end": 557,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 540,
                        "end": 557,
                        "name": {
                          "type": "Identifier",
                          "start": 540,
                          "end": 541,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSBooleanKeyword",
                          "start": 550,
                          "end": 557
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "start": 560,
                      "end": 561,
                      "typeName": {
                        "type": "Identifier",
                        "start": 560,
                        "end": 561,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 566,
                      "end": 571
                    }
                  }
                }
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 575,
            "end": 580
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 582,
      "end": 674,
      "id": {
        "type": "Identifier",
        "start": 592,
        "end": 597,
        "decorators": [],
        "name": "Type2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 597,
        "end": 600,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 598,
            "end": 599,
            "name": {
              "type": "Identifier",
              "start": 598,
              "end": 599,
              "decorators": [],
              "name": "t",
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
        "start": 601,
        "end": 674,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 604,
            "end": 672,
            "key": {
              "type": "Identifier",
              "start": 604,
              "end": 608,
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 608,
              "end": 639,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 609,
                  "end": 638,
                  "name": {
                    "type": "Identifier",
                    "start": 609,
                    "end": 611,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSFunctionType",
                    "start": 620,
                    "end": 638,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 621,
                        "end": 626,
                        "decorators": [],
                        "name": "In",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 623,
                          "end": 626,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 625,
                            "end": 626,
                            "typeName": {
                              "type": "Identifier",
                              "start": 625,
                              "end": 626,
                              "decorators": [],
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 628,
                      "end": 638,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 631,
                        "end": 638
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
            "params": [
              {
                "type": "Identifier",
                "start": 640,
                "end": 646,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 642,
                  "end": 646,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 644,
                    "end": 646,
                    "typeName": {
                      "type": "Identifier",
                      "start": 644,
                      "end": 646,
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 647,
              "end": 672,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 649,
                "end": 672,
                "typeName": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 653,
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 653,
                  "end": 672,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 654,
                      "end": 671,
                      "typeName": {
                        "type": "Identifier",
                        "start": 654,
                        "end": 664,
                        "decorators": [],
                        "name": "inferPipe2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 664,
                        "end": 671,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 665,
                            "end": 666,
                            "typeName": {
                              "type": "Identifier",
                              "start": 665,
                              "end": 666,
                              "decorators": [],
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 668,
                            "end": 670,
                            "typeName": {
                              "type": "Identifier",
                              "start": 668,
                              "end": 670,
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
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
      "type": "VariableDeclaration",
      "start": 676,
      "end": 707,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 690,
          "end": 707,
          "id": {
            "type": "Identifier",
            "start": 690,
            "end": 707,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 692,
              "end": 707,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 694,
                "end": 707,
                "typeName": {
                  "type": "Identifier",
                  "start": 694,
                  "end": 699,
                  "decorators": [],
                  "name": "Type2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 699,
                  "end": 707,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 700,
                      "end": 706
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 745,
      "end": 790,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 752,
        "end": 790,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 758,
            "end": 790,
            "id": {
              "type": "Identifier",
              "start": 758,
              "end": 762,
              "decorators": [],
              "name": "out2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 765,
              "end": 790,
              "callee": {
                "type": "MemberExpression",
                "start": 765,
                "end": 772,
                "object": {
                  "type": "Identifier",
                  "start": 765,
                  "end": 767,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 768,
                  "end": 772,
                  "decorators": [],
                  "name": "pipe",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 773,
                  "end": 789,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 773,
                      "end": 774,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "start": 778,
                    "end": 789,
                    "callee": {
                      "type": "Identifier",
                      "start": 778,
                      "end": 786,
                      "decorators": [],
                      "name": "parseInt",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 787,
                        "end": 788,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
