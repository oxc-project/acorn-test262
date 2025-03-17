__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 324,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 47,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 45,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 45,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 20,
                  "end": 24,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 21,
                    "end": 24,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 23,
                      "end": 24,
                      "typeName": {
                        "type": "Identifier",
                        "start": 23,
                        "end": 24,
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 25,
                "end": 28,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 27,
                  "end": 28,
                  "typeName": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 65,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 65,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 65,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 65,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
      "start": 67,
      "end": 76,
      "expression": {
        "type": "CallExpression",
        "start": 67,
        "end": 75,
        "callee": {
          "type": "MemberExpression",
          "start": 67,
          "end": 72,
          "object": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 73,
            "end": 74,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 97,
            "end": 133,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 101,
                "end": 108,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 102,
                  "end": 108,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 104,
                    "end": 108,
                    "typeName": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 105,
                      "end": 108,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 106,
                          "end": 107,
                          "typeName": {
                            "type": "Identifier",
                            "start": 106,
                            "end": 107,
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 122,
                      "end": 127,
                      "object": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 123,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 127,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 128,
                        "end": 129,
                        "value": 1,
                        "raw": "1"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 97,
              "end": 100,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 98,
                  "end": 99,
                  "name": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
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
      "start": 143,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 191,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 149,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 152,
            "end": 191,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 156,
                "end": 163,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 157,
                  "end": 163,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 159,
                    "end": 163,
                    "typeName": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 160,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 160,
                      "end": 163,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 161,
                          "end": 162,
                          "typeName": {
                            "type": "Identifier",
                            "start": 161,
                            "end": 162,
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 177,
                      "end": 182,
                      "object": {
                        "type": "Identifier",
                        "start": 177,
                        "end": 178,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 182,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 186,
                        "end": 187,
                        "value": 1,
                        "raw": "1"
                      }
                    ],
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
                          "typeName": {
                            "type": "Identifier",
                            "start": 183,
                            "end": 184,
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
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 152,
              "end": 155,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 153,
                  "end": 154,
                  "name": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 154,
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
      "start": 201,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 254,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 207,
            "name": "f3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 210,
            "end": 254,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 214,
                "end": 221,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 215,
                  "end": 221,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 217,
                    "end": 221,
                    "typeName": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 218,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 218,
                      "end": 221,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 219,
                          "end": 220,
                          "typeName": {
                            "type": "Identifier",
                            "start": 219,
                            "end": 220,
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 235,
                      "end": 240,
                      "object": {
                        "type": "Identifier",
                        "start": 235,
                        "end": 236,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 240,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 249,
                        "end": 250,
                        "value": 1,
                        "raw": "1"
                      }
                    ],
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
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 210,
              "end": 213,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 211,
                  "end": 212,
                  "name": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 212,
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
      "start": 264,
      "end": 311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 311,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 270,
            "name": "f4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 273,
            "end": 311,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 274,
                "end": 286,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 275,
                  "end": 286,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 277,
                    "end": 286,
                    "typeName": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 278,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 300,
                      "end": 305,
                      "object": {
                        "type": "Identifier",
                        "start": 300,
                        "end": 301,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 302,
                        "end": 305,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 306,
                        "end": 307,
                        "value": 1,
                        "raw": "1"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
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
