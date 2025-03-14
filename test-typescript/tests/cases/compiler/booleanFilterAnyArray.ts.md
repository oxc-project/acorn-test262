booleanFilterAnyArray.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 674,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 21,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 21,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "Bullean",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 108,
      "body": {
        "type": "TSInterfaceBody",
        "start": 51,
        "end": 108,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 57,
            "end": 80,
            "params": [
              {
                "type": "Identifier",
                "start": 61,
                "end": 69,
                "decorators": [],
                "name": "v1",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 64,
                  "end": 69,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 66,
                    "end": 69
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 79,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 79,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 79,
                  "decorators": [],
                  "name": "Bullean",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 85,
            "end": 106,
            "params": [
              {
                "type": "Identifier",
                "start": 89,
                "end": 95,
                "decorators": [],
                "name": "v2",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 92,
                  "end": 95,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 94,
                    "end": 95,
                    "typeName": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 105,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 98,
                "end": 105,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 100,
                  "decorators": [],
                  "name": "v2",
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 104,
                  "end": 105,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 104,
                    "end": 105,
                    "typeName": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 85,
              "end": 88,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 86,
                  "end": 87,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 87,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 50,
        "decorators": [],
        "name": "BulleanConstructor",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 110,
      "end": 269,
      "body": {
        "type": "TSInterfaceBody",
        "start": 127,
        "end": 269,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 133,
            "end": 219,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 139,
              "decorators": [],
              "name": "filter",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 153,
                "end": 182,
                "decorators": [],
                "name": "cb1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 156,
                  "end": 182,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 158,
                    "end": 182,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 159,
                        "end": 167,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 164,
                          "end": 167,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 166,
                            "end": 167,
                            "typeName": {
                              "type": "Identifier",
                              "start": 166,
                              "end": 167,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 169,
                      "end": 182,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 172,
                        "end": 182,
                        "asserts": false,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 172,
                          "end": 177,
                          "decorators": [],
                          "name": "value",
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 181,
                          "end": 182,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 181,
                            "end": 182,
                            "typeName": {
                              "type": "Identifier",
                              "start": 181,
                              "end": 182,
                              "decorators": [],
                              "name": "S",
                              "optional": false
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 218,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 185,
                "end": 218,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 185,
                  "end": 186,
                  "typeName": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 186,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                "extendsType": {
                  "type": "TSAnyKeyword",
                  "start": 195,
                  "end": 198
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "start": 212,
                  "end": 218,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 215,
                    "end": 218,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 216,
                        "end": 217,
                        "typeName": {
                          "type": "Identifier",
                          "start": 216,
                          "end": 217,
                          "decorators": [],
                          "name": "S",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 215,
                    "decorators": [],
                    "name": "Ari",
                    "optional": false
                  }
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 201,
                  "end": 209,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 204,
                    "end": 209,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 205,
                        "end": 208
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 204,
                    "decorators": [],
                    "name": "Ari",
                    "optional": false
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 139,
              "end": 152,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 140,
                  "end": 151,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 150,
                    "end": 151,
                    "typeName": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 151,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "decorators": [],
                    "name": "S",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 224,
            "end": 267,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 230,
              "decorators": [],
              "name": "filter",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 231,
                "end": 257,
                "decorators": [],
                "name": "cb2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 234,
                  "end": 257,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 236,
                    "end": 257,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 237,
                        "end": 245,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 242,
                          "end": 245,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 244,
                            "end": 245,
                            "typeName": {
                              "type": "Identifier",
                              "start": 244,
                              "end": 245,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 247,
                      "end": 257,
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 250,
                        "end": 257
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 266,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 260,
                "end": 266,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 263,
                  "end": 266,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 264,
                      "end": 265,
                      "typeName": {
                        "type": "Identifier",
                        "start": 264,
                        "end": 265,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 263,
                  "decorators": [],
                  "name": "Ari",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 123,
        "decorators": [],
        "name": "Ari",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 123,
        "end": 126,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 124,
            "end": 125,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 310,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 309,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 309,
            "decorators": [],
            "name": "Bullean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 309,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 291,
                "end": 309,
                "typeName": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 309,
                  "decorators": [],
                  "name": "BulleanConstructor",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 311,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 337,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 337,
            "decorators": [],
            "name": "anys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 327,
              "end": 337,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 329,
                "end": 337,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 332,
                  "end": 337,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 333,
                      "end": 336
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 332,
                  "decorators": [],
                  "name": "Ari",
                  "optional": false
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
      "start": 339,
      "end": 356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 355,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 355,
            "decorators": [],
            "name": "xs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 345,
              "end": 355,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 347,
                "end": 355,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 350,
                  "end": 355,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 351,
                      "end": 354
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 350,
                  "decorators": [],
                  "name": "Ari",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 386,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 363,
            "decorators": [],
            "name": "xs",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 366,
            "end": 386,
            "arguments": [
              {
                "type": "Identifier",
                "start": 378,
                "end": 385,
                "decorators": [],
                "name": "Bullean",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 366,
              "end": 377,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 366,
                "end": 370,
                "decorators": [],
                "name": "anys",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 371,
                "end": 377,
                "decorators": [],
                "name": "filter",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 388,
      "end": 416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 415,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 415,
            "decorators": [],
            "name": "realanys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 408,
              "end": 415,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 410,
                "end": 415,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 410,
                  "end": 413
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
      "start": 417,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 430,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 430,
            "decorators": [],
            "name": "ys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 423,
              "end": 430,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 425,
                "end": 430,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 425,
                  "end": 428
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 432,
      "end": 465,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 465,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 438,
            "decorators": [],
            "name": "ys",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 441,
            "end": 465,
            "arguments": [
              {
                "type": "Identifier",
                "start": 457,
                "end": 464,
                "decorators": [],
                "name": "Boolean",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 441,
              "end": 456,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 441,
                "end": 449,
                "decorators": [],
                "name": "realanys",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 450,
                "end": 456,
                "decorators": [],
                "name": "filter",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 467,
      "end": 492,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 471,
          "end": 492,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 471,
            "end": 474,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 477,
            "end": 492,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 478,
                "end": 491,
                "properties": [
                  {
                    "type": "Property",
                    "start": 480,
                    "end": 489,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 484,
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
                      "start": 486,
                      "end": 489,
                      "raw": "'x'",
                      "value": "x"
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 493,
      "end": 524,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 497,
          "end": 524,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 497,
            "end": 524,
            "decorators": [],
            "name": "foor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 501,
              "end": 524,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 503,
                "end": 524,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 508,
                  "end": 524,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 509,
                      "end": 523,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 510,
                          "end": 522,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 510,
                            "end": 514,
                            "decorators": [],
                            "name": "name",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 514,
                            "end": 522,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 516,
                              "end": 522
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 503,
                  "end": 508,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 525,
      "end": 559,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 529,
          "end": 559,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 529,
            "end": 533,
            "decorators": [],
            "name": "foor",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 536,
            "end": 559,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 547,
                "end": 558,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 552,
                  "end": 558,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 553,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 554,
                    "end": 558,
                    "decorators": [],
                    "name": "name",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 547,
                    "end": 548,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 536,
              "end": 546,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 536,
                "end": 539,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 540,
                "end": 546,
                "decorators": [],
                "name": "filter",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 560,
      "end": 584,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 564,
          "end": 584,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 564,
            "end": 584,
            "decorators": [],
            "name": "foos",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 568,
              "end": 584,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 570,
                "end": 584,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 575,
                  "end": 584,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 576,
                      "end": 583
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 570,
                  "end": 575,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 585,
      "end": 673,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 589,
          "end": 673,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 589,
            "end": 593,
            "decorators": [],
            "name": "foos",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 596,
            "end": 673,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 629,
                "end": 672,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 658,
                  "end": 672,
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "start": 658,
                    "end": 663,
                    "decorators": [],
                    "name": "thing",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 668,
                    "end": 672,
                    "raw": "null",
                    "value": null
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 630,
                    "end": 635,
                    "decorators": [],
                    "name": "thing",
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 636,
                  "end": 654,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 638,
                    "end": 654,
                    "asserts": false,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 638,
                      "end": 643,
                      "decorators": [],
                      "name": "thing",
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 647,
                      "end": 654,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 647,
                        "end": 654
                      }
                    }
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 596,
              "end": 628,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 596,
                "end": 621,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 597,
                    "end": 601,
                    "raw": "true",
                    "value": true
                  },
                  {
                    "type": "Literal",
                    "start": 603,
                    "end": 607,
                    "raw": "true",
                    "value": true
                  },
                  {
                    "type": "Literal",
                    "start": 609,
                    "end": 614,
                    "raw": "false",
                    "value": false
                  },
                  {
                    "type": "Literal",
                    "start": 616,
                    "end": 620,
                    "raw": "null",
                    "value": null
                  }
                ]
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 622,
                "end": 628,
                "decorators": [],
                "name": "filter",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
