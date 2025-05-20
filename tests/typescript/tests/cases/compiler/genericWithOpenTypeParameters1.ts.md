__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 323,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 47,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 47,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 45,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 29,
                "end": 45,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 31,
                    "end": 43,
                    "argument": {
                      "type": "Literal",
                      "start": 38,
                      "end": 42,
                      "raw": "null",
                      "value": null
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
                  "start": 20,
                  "end": 24,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 21,
                    "end": 24,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 23,
                      "end": 24,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 23,
                        "end": 24,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 25,
                "end": 28,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 27,
                  "end": 28,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 65,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 65,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 65,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 65,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 57,
                  "end": 65,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 58,
                      "end": 64
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 67,
      "end": 76,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 67,
        "end": 75,
        "arguments": [
          {
            "type": "Literal",
            "start": 73,
            "end": 74,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 67,
          "end": 72,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 133,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 97,
            "end": 133,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 113,
              "end": 133,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 115,
                  "end": 131,
                  "argument": {
                    "type": "CallExpression",
                    "start": 122,
                    "end": 130,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 128,
                        "end": 129,
                        "raw": "1",
                        "value": 1
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 122,
                      "end": 127,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 123,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 127,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 101,
                "end": 108,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 102,
                  "end": 108,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 104,
                    "end": 108,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 105,
                      "end": 108,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 106,
                          "end": 107,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 106,
                            "end": 107,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 97,
              "end": 100,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 98,
                  "end": 99,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 191,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 149,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 152,
            "end": 191,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 168,
              "end": 191,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 170,
                  "end": 189,
                  "argument": {
                    "type": "CallExpression",
                    "start": 177,
                    "end": 188,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 186,
                        "end": 187,
                        "raw": "1",
                        "value": 1
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 177,
                      "end": 182,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 178,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 182,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 182,
                      "end": 185,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 183,
                          "end": 184,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 183,
                            "end": 184,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 156,
                "end": 163,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 157,
                  "end": 163,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 159,
                    "end": 163,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 160,
                      "end": 163,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 161,
                          "end": 162,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 161,
                            "end": 162,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 160,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 152,
              "end": 155,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 153,
                  "end": 154,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 154,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 254,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 207,
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 210,
            "end": 254,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 226,
              "end": 254,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 228,
                  "end": 252,
                  "argument": {
                    "type": "CallExpression",
                    "start": 235,
                    "end": 251,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 249,
                        "end": 250,
                        "raw": "1",
                        "value": 1
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 235,
                      "end": 240,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 235,
                        "end": 236,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 240,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 240,
                      "end": 248,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 241,
                          "end": 247
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 214,
                "end": 221,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 215,
                  "end": 221,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 217,
                    "end": 221,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 218,
                      "end": 221,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 219,
                          "end": 220,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 219,
                            "end": 220,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 218,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 210,
              "end": 213,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 211,
                  "end": 212,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 212,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 311,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 270,
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 273,
            "end": 311,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 291,
              "end": 311,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 293,
                  "end": 309,
                  "argument": {
                    "type": "CallExpression",
                    "start": 300,
                    "end": 308,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 306,
                        "end": 307,
                        "raw": "1",
                        "value": 1
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 300,
                      "end": 305,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 300,
                        "end": 301,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 302,
                        "end": 305,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 274,
                "end": 286,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 275,
                  "end": 286,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 277,
                    "end": 286,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 278,
                      "end": 286,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 279,
                          "end": 285
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 278,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
