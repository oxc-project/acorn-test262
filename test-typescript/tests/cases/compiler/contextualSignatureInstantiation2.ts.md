__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 222,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 92,
            "name": "dot",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 92,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 32,
                "end": 92,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 32,
                  "end": 38,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 33,
                      "end": 34,
                      "name": {
                        "type": "Identifier",
                        "start": 33,
                        "end": 34,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 36,
                      "end": 37,
                      "name": {
                        "type": "Identifier",
                        "start": 36,
                        "end": 37,
                        "name": "S",
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 39,
                    "end": 53,
                    "name": "f",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 40,
                      "end": 53,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 42,
                        "end": 53,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 43,
                            "end": 47,
                            "name": "_",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 44,
                              "end": 47,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 46,
                                "end": 47,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 46,
                                  "end": 47,
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
                          "start": 49,
                          "end": 53,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 52,
                            "end": 53,
                            "typeName": {
                              "type": "Identifier",
                              "start": 52,
                              "end": 53,
                              "name": "S",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
                  "start": 55,
                  "end": 92,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 58,
                    "end": 92,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 58,
                      "end": 61,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 59,
                          "end": 60,
                          "name": {
                            "type": "Identifier",
                            "start": 59,
                            "end": 60,
                            "name": "U",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 62,
                        "end": 76,
                        "name": "g",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 63,
                          "end": 76,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 65,
                            "end": 76,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 66,
                                "end": 70,
                                "name": "_",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 67,
                                  "end": 70,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 69,
                                    "end": 70,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 69,
                                      "end": 70,
                                      "name": "U",
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
                              "start": 72,
                              "end": 76,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 75,
                                "end": 76,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 75,
                                  "end": 76,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
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
                      "start": 78,
                      "end": 92,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 81,
                        "end": 92,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 82,
                            "end": 86,
                            "name": "_",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 83,
                              "end": 86,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 85,
                                "end": 86,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 85,
                                  "end": 86,
                                  "name": "U",
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
                          "start": 88,
                          "end": 92,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 91,
                            "end": 92,
                            "typeName": {
                              "type": "Identifier",
                              "start": 91,
                              "end": 92,
                              "name": "S",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 176,
      "expression": {
        "type": "AssignmentExpression",
        "start": 94,
        "end": 175,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 94,
          "end": 97,
          "name": "dot",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 100,
          "end": 175,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 107,
              "end": 121,
              "name": "f",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 108,
                "end": 121,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 110,
                  "end": 121,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 111,
                      "end": 115,
                      "name": "_",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 112,
                        "end": 115,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 114,
                          "end": 115,
                          "typeName": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 115,
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
                    "start": 117,
                    "end": 121,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 120,
                      "end": 121,
                      "typeName": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 121,
                        "name": "S",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "ArrowFunctionExpression",
            "start": 126,
            "end": 175,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 130,
                "end": 144,
                "name": "g",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 131,
                  "end": 144,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 133,
                    "end": 144,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 134,
                        "end": 138,
                        "name": "_",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 135,
                          "end": 138,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 137,
                            "end": 138,
                            "typeName": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 138,
                              "name": "U",
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
                      "start": 140,
                      "end": 144,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 143,
                        "end": 144,
                        "typeName": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 144,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 161,
              "end": 175,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "CallExpression",
                "start": 168,
                "end": 175,
                "callee": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 170,
                    "end": 174,
                    "callee": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 171,
                      "name": "g",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 172,
                        "end": 173,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 126,
              "end": 129,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 127,
                  "end": 128,
                  "name": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 128,
                    "name": "U",
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 157,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 147,
                "end": 157,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 148,
                    "end": 151,
                    "name": "r",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 149,
                      "end": 151,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 150,
                        "end": 151,
                        "typeName": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 151,
                          "name": "U",
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
                  "start": 153,
                  "end": 157,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 156,
                    "end": 157,
                    "typeName": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 157,
                      "name": "S",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 100,
            "end": 106,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 101,
                "end": 102,
                "name": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
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
              },
              {
                "type": "TSTypeParameter",
                "start": 104,
                "end": 105,
                "name": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "name": "S",
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
          "returnType": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 177,
      "end": 199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 198,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 198,
            "name": "id",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 198,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 185,
                "end": 198,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 185,
                  "end": 188,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 186,
                      "end": 187,
                      "name": {
                        "type": "Identifier",
                        "start": 186,
                        "end": 187,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 189,
                    "end": 192,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 190,
                      "end": 192,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 191,
                        "end": 192,
                        "typeName": {
                          "type": "Identifier",
                          "start": 191,
                          "end": 192,
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
                  "start": 194,
                  "end": 198,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 197,
                    "end": 198,
                    "typeName": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 198,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 200,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 221,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 207,
            "name": "r23",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 210,
            "end": 221,
            "callee": {
              "type": "CallExpression",
              "start": 210,
              "end": 217,
              "callee": {
                "type": "Identifier",
                "start": 210,
                "end": 213,
                "name": "dot",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 214,
                  "end": 216,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 218,
                "end": 220,
                "name": "id",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
