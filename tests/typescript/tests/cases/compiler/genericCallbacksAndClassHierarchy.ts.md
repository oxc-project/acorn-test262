__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 559,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 102,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 102,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
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
                    "name": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 35,
                      "decorators": [],
                      "name": "T",
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
                "start": 37,
                "end": 102,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 47,
                    "end": 96,
                    "key": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 56,
                      "decorators": [],
                      "name": "subscribe",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
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
                            "typeParameters": null,
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 107,
            "end": 161,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 114,
              "end": 161,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 120,
                "end": 122,
                "decorators": [],
                "name": "C1",
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
                      "name": "T",
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
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 126,
                "end": 161,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 136,
                    "end": 155,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 148,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 148,
                      "end": 154,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 150,
                        "end": 154,
                        "typeName": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 151,
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null
                        },
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
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 166,
            "end": 218,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 173,
              "end": 218,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 180,
                "end": 183,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 181,
                    "end": 182,
                    "name": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 182,
                      "decorators": [],
                      "name": "T",
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
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 184,
                "end": 218,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 194,
                    "end": 212,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 201,
                      "end": 206,
                      "decorators": [],
                      "name": "dummy",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 223,
            "end": 261,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 230,
              "end": 261,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
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
                    "name": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 239,
                      "decorators": [],
                      "name": "T",
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
              "superClass": {
                "type": "Identifier",
                "start": 249,
                "end": 251,
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 253,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 258,
                "end": 261,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 266,
            "end": 557,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 273,
              "end": 557,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 279,
                "end": 280,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 280,
                "end": 283,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 281,
                    "end": 282,
                    "name": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 282,
                      "decorators": [],
                      "name": "T",
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
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 284,
                "end": 557,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 294,
                    "end": 551,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 294,
                      "end": 304,
                      "decorators": [],
                      "name": "_subscribe",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 304,
                      "end": 551,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 316,
                                "end": 317,
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null
                              },
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
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
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
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 328,
                        "end": 551,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 342,
                            "end": 374,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 346,
                                "end": 373,
                                "id": {
                                  "type": "Identifier",
                                  "start": 346,
                                  "end": 347,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 350,
                                  "end": 373,
                                  "expression": false,
                                  "async": false,
                                  "typeParameters": null,
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
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 361,
                                            "end": 362,
                                            "decorators": [],
                                            "name": "A",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
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
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "typeArguments": null
                                              }
                                            ]
                                          }
                                        }
                                      }
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 370,
                                    "end": 373,
                                    "body": []
                                  },
                                  "id": null,
                                  "generator": false
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          {
                            "type": "VariableDeclaration",
                            "start": 388,
                            "end": 421,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 392,
                                "end": 420,
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
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 395,
                                        "end": 396,
                                        "decorators": [],
                                        "name": "I",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 396,
                                        "end": 402,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 397,
                                            "end": 401,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 397,
                                              "end": 398,
                                              "decorators": [],
                                              "name": "A",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
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
                                  }
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 405,
                                  "end": 420,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 405,
                                    "end": 414,
                                    "decorators": [],
                                    "name": "viewModel",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 415,
                                    "end": 420,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 476,
                            "end": 491,
                            "expression": {
                              "type": "CallExpression",
                              "start": 476,
                              "end": 490,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 476,
                                "end": 487,
                                "object": {
                                  "type": "Identifier",
                                  "start": 476,
                                  "end": 477,
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 478,
                                  "end": 487,
                                  "decorators": [],
                                  "name": "subscribe",
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
                                  "start": 488,
                                  "end": 489,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 504,
                            "end": 541,
                            "expression": {
                              "type": "CallExpression",
                              "start": 504,
                              "end": 540,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 504,
                                "end": 515,
                                "object": {
                                  "type": "Identifier",
                                  "start": 504,
                                  "end": 505,
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 506,
                                  "end": 515,
                                  "decorators": [],
                                  "name": "subscribe",
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
                                  "start": 516,
                                  "end": 539,
                                  "expression": false,
                                  "async": false,
                                  "typeParameters": null,
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
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 527,
                                            "end": 528,
                                            "decorators": [],
                                            "name": "A",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
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
                                                  "optional": false,
                                                  "typeAnnotation": null
                                                },
                                                "typeArguments": null
                                              }
                                            ]
                                          }
                                        }
                                      }
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 536,
                                    "end": 539,
                                    "body": []
                                  },
                                  "id": null,
                                  "generator": false
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
