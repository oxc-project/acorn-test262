genericCallbacksAndClassHierarchy.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 559,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 559,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 559,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 102,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 102,
              "body": {
                "type": "TSInterfaceBody",
                "start": 37,
                "end": 102,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 47,
                    "end": 96,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 56,
                      "decorators": [],
                      "name": "subscribe",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 57,
                        "end": 88,
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 65,
                          "end": 88,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 67,
                            "end": 88,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 68,
                                "end": 79,
                                "decorators": [],
                                "name": "newValue",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 76,
                                  "end": 79,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 78,
                                    "end": 79,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 78,
                                      "end": 79,
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
                              "start": 81,
                              "end": 88,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 84,
                                "end": 88
                              }
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 90,
                      "end": 95,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 92,
                        "end": 95
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
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "I",
                "optional": false
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 33,
                "end": 36,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 34,
                    "end": 35,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 35,
                      "decorators": [],
                      "name": "T",
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
            "start": 107,
            "end": 161,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 114,
              "end": 161,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 126,
                "end": 161,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 136,
                    "end": 155,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 148,
                      "decorators": [],
                      "name": "value",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 148,
                      "end": 154,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 150,
                        "end": 154,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 151,
                          "end": 154,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 152,
                              "end": 153,
                              "typeName": {
                                "type": "Identifier",
                                "start": 152,
                                "end": 153,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 151,
                          "decorators": [],
                          "name": "I",
                          "optional": false
                        }
                      }
                    },
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 120,
                "end": 122,
                "decorators": [],
                "name": "C1",
                "optional": false
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 122,
                "end": 125,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 123,
                    "end": 124,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 124,
                      "decorators": [],
                      "name": "T",
                      "optional": false
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
            "start": 166,
            "end": 218,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 173,
              "end": 218,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 184,
                "end": 218,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 194,
                    "end": 212,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 201,
                      "end": 206,
                      "decorators": [],
                      "name": "dummy",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 206,
                      "end": 211,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 208,
                        "end": 211
                      }
                    },
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 180,
                "end": 183,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 181,
                    "end": 182,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 182,
                      "decorators": [],
                      "name": "T",
                      "optional": false
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
            "start": 223,
            "end": 261,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 230,
              "end": 261,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 258,
                "end": 261,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "decorators": [],
                "name": "B",
                "optional": false
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 249,
                "end": 251,
                "decorators": [],
                "name": "C1",
                "optional": false
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 251,
                "end": 257,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 252,
                    "end": 256,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 253,
                      "end": 256,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 254,
                          "end": 255,
                          "typeName": {
                            "type": "Identifier",
                            "start": 254,
                            "end": 255,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 253,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                ]
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 237,
                "end": 240,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 238,
                    "end": 239,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 239,
                      "decorators": [],
                      "name": "T",
                      "optional": false
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
            "start": 266,
            "end": 557,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 273,
              "end": 557,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 284,
                "end": 557,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 294,
                    "end": 551,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 294,
                      "end": 304,
                      "decorators": [],
                      "name": "_subscribe",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 304,
                      "end": 551,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 328,
                        "end": 551,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 342,
                            "end": 374,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 346,
                                "end": 373,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 346,
                                  "end": 347,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false
                                },
                                "init": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 350,
                                  "end": 373,
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 370,
                                    "end": 373,
                                    "body": []
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 351,
                                      "end": 365,
                                      "decorators": [],
                                      "name": "newValue",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 359,
                                        "end": 365,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 361,
                                          "end": 365,
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "start": 362,
                                            "end": 365,
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "start": 363,
                                                "end": 364,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 363,
                                                  "end": 364,
                                                  "decorators": [],
                                                  "name": "T",
                                                  "optional": false
                                                }
                                              }
                                            ]
                                          },
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 361,
                                            "end": 362,
                                            "decorators": [],
                                            "name": "A",
                                            "optional": false
                                          }
                                        }
                                      }
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
                            "start": 388,
                            "end": 421,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 392,
                                "end": 420,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 392,
                                  "end": 402,
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 393,
                                    "end": 402,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 395,
                                      "end": 402,
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 396,
                                        "end": 402,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 397,
                                            "end": 401,
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "start": 398,
                                              "end": 401,
                                              "params": [
                                                {
                                                  "type": "TSTypeReference",
                                                  "start": 399,
                                                  "end": 400,
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "start": 399,
                                                    "end": 400,
                                                    "decorators": [],
                                                    "name": "T",
                                                    "optional": false
                                                  }
                                                }
                                              ]
                                            },
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 397,
                                              "end": 398,
                                              "decorators": [],
                                              "name": "A",
                                              "optional": false
                                            }
                                          }
                                        ]
                                      },
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 395,
                                        "end": 396,
                                        "decorators": [],
                                        "name": "I",
                                        "optional": false
                                      }
                                    }
                                  }
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 405,
                                  "end": 420,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 405,
                                    "end": 414,
                                    "decorators": [],
                                    "name": "viewModel",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 415,
                                    "end": 420,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 476,
                            "end": 491,
                            "expression": {
                              "type": "CallExpression",
                              "start": 476,
                              "end": 490,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 488,
                                  "end": 489,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 476,
                                "end": 487,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 476,
                                  "end": 477,
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 478,
                                  "end": 487,
                                  "decorators": [],
                                  "name": "subscribe",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 504,
                            "end": 541,
                            "expression": {
                              "type": "CallExpression",
                              "start": 504,
                              "end": 540,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 516,
                                  "end": 539,
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 536,
                                    "end": 539,
                                    "body": []
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 517,
                                      "end": 531,
                                      "decorators": [],
                                      "name": "newValue",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 525,
                                        "end": 531,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 527,
                                          "end": 531,
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "start": 528,
                                            "end": 531,
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "start": 529,
                                                "end": 530,
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "start": 529,
                                                  "end": 530,
                                                  "decorators": [],
                                                  "name": "T",
                                                  "optional": false
                                                }
                                              }
                                            ]
                                          },
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 527,
                                            "end": 528,
                                            "decorators": [],
                                            "name": "A",
                                            "optional": false
                                          }
                                        }
                                      }
                                    }
                                  ]
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 504,
                                "end": 515,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 504,
                                  "end": 505,
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 506,
                                  "end": 515,
                                  "decorators": [],
                                  "name": "subscribe",
                                  "optional": false
                                }
                              },
                              "optional": false
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
                          "start": 305,
                          "end": 320,
                          "decorators": [],
                          "name": "viewModel",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 314,
                            "end": 320,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 316,
                              "end": 320,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 317,
                                "end": 320,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 318,
                                    "end": 319,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 318,
                                      "end": 319,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 316,
                                "end": 317,
                                "decorators": [],
                                "name": "B",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 321,
                        "end": 327,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 323,
                          "end": 327
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 279,
                "end": 280,
                "decorators": [],
                "name": "D",
                "optional": false
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 280,
                "end": 283,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 281,
                    "end": 282,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 282,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
