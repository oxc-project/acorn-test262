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
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
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
                      "name": "T",
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
                      "name": "subscribe",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                        "name": "callback",
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
                                "name": "newValue",
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
                                      "name": "T",
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
                              "start": 81,
                              "end": 88,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 84,
                                "end": 88
                              }
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
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
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 107,
            "end": 161,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 114,
              "end": 161,
              "id": {
                "type": "Identifier",
                "start": 120,
                "end": 122,
                "name": "C1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 126,
                "end": 161,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 136,
                    "end": 155,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 148,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
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
                          "name": "I",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                "name": "T",
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
                    "accessibility": "public"
                  }
                ]
              },
              "decorators": [],
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
                      "name": "T",
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
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 166,
            "end": 218,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 173,
              "end": 218,
              "id": {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 184,
                "end": 218,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 194,
                    "end": 212,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 201,
                      "end": 206,
                      "name": "dummy",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
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
                    "accessibility": "public"
                  }
                ]
              },
              "decorators": [],
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
                      "name": "T",
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
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 223,
            "end": 261,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 230,
              "end": 261,
              "id": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 249,
                "end": 251,
                "name": "C1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 258,
                "end": 261,
                "body": []
              },
              "decorators": [],
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
                      "name": "T",
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
              "implements": [],
              "abstract": false,
              "declare": false,
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
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 266,
            "end": 557,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 273,
              "end": 557,
              "id": {
                "type": "Identifier",
                "start": 279,
                "end": 280,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 284,
                "end": 557,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 294,
                    "end": 551,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 294,
                      "end": 304,
                      "name": "_subscribe",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 304,
                      "end": 551,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 305,
                          "end": 320,
                          "name": "viewModel",
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
                                "name": "B",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                      "name": "T",
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 346,
                                  "end": 347,
                                  "name": "f",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "ArrowFunctionExpression",
                                  "start": 350,
                                  "end": 373,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 351,
                                      "end": 365,
                                      "name": "newValue",
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
                                            "name": "A",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
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
                                                  "name": "T",
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
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 370,
                                    "end": 373,
                                    "body": []
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "definite": false
                              }
                            ],
                            "kind": "var",
                            "declare": false
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 392,
                                  "end": 402,
                                  "name": "v",
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
                                        "name": "I",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                                              "name": "A",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
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
                                                    "name": "T",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
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
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 405,
                                  "end": 420,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 405,
                                    "end": 414,
                                    "name": "viewModel",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 415,
                                    "end": 420,
                                    "name": "value",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "definite": false
                              }
                            ],
                            "kind": "var",
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
                                  "name": "v",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 478,
                                  "end": 487,
                                  "name": "subscribe",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 488,
                                  "end": 489,
                                  "name": "f",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
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
                                  "name": "v",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 506,
                                  "end": 515,
                                  "name": "subscribe",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 516,
                                  "end": 539,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 517,
                                      "end": 531,
                                      "name": "newValue",
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
                                            "name": "A",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
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
                                                  "name": "T",
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
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 536,
                                    "end": 539,
                                    "body": []
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
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
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
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
                      "name": "T",
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
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
