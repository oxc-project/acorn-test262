__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 425,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 236,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 236,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 26,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 21,
              "end": 25
            }
          },
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 65,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
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
              "start": 34,
              "end": 65,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 37,
                "end": 65,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 47,
                    "end": 59,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 54,
                      "end": 58
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 181,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 81,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 81,
              "end": 181,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 88,
                "end": 181,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 98,
                    "end": 111,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 102,
                        "end": 110,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 102,
                          "end": 103,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 106,
                          "end": 110
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 120,
                    "end": 124,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 120,
                      "end": 123,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 121,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 123,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 133,
                    "end": 137,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 133,
                      "end": 136,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 133,
                        "end": 134,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 136,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 146,
                    "end": 150,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 146,
                      "end": 149,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 147,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 159,
                    "end": 175,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 163,
                        "end": 174,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 163,
                          "end": 164,
                          "decorators": [],
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 167,
                          "end": 174,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 167,
                            "end": 172,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 167,
                              "end": 168,
                              "decorators": [],
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 169,
                              "end": 172,
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
                    ],
                    "declare": false,
                    "kind": "var"
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
                  "start": 82,
                  "end": 86,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 83,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 85,
                      "end": 86,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 86,
                        "decorators": [],
                        "name": "T",
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
          },
          {
            "type": "MethodDefinition",
            "start": 187,
            "end": 223,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 192,
              "end": 223,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 195,
                "end": 223,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 205,
                    "end": 217,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 212,
                      "end": 216
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 229,
            "end": 234,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 230,
              "end": 233,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 232,
                "end": 233,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 233,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
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
      "start": 238,
      "end": 255,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 254,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 254,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 254,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 245,
                "end": 254,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 246,
                  "end": 254,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 247,
                      "end": 253
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 246,
                  "decorators": [],
                  "name": "C",
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
      "type": "VariableDeclaration",
      "start": 266,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 277,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 271,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 274,
            "end": 277,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 274,
              "end": 275,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 279,
      "end": 296,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 295,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 285,
            "decorators": [],
            "name": "ra",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 288,
            "end": 295,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 288,
              "end": 293,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 288,
                "end": 291,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 289,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 291,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 292,
                "end": 293,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 294,
              "end": 295,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 297,
      "end": 310,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 309,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 303,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 306,
            "end": 309,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 308,
              "end": 309,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 311,
      "end": 328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 315,
          "end": 327,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 317,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 320,
            "end": 327,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 320,
              "end": 325,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 320,
                "end": 321,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 322,
                "end": 325,
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
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 329,
      "end": 342,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 341,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 335,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 338,
            "end": 341,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 340,
              "end": 341,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 343,
      "end": 364,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 347,
          "end": 363,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 347,
            "end": 349,
            "decorators": [],
            "name": "rs",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 352,
            "end": 363,
            "elements": [
              {
                "type": "Identifier",
                "start": 353,
                "end": 354,
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 356,
                "end": 358,
                "decorators": [],
                "name": "r2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 360,
                "end": 362,
                "decorators": [],
                "name": "r3",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 366,
      "end": 425,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 366,
        "end": 424,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 377,
            "end": 423,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 382,
              "end": 423,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 388,
                  "end": 394,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 388,
                    "end": 393,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 388,
                      "end": 389,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 390,
                      "end": 393,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 399,
                  "end": 403,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 399,
                    "end": 402,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 399,
                      "end": 400,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 401,
                      "end": 402,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 408,
                  "end": 412,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 408,
                    "end": 411,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 408,
                      "end": 409,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 411,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 417,
                  "end": 421,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 417,
                    "end": 420,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 417,
                      "end": 418,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 419,
                      "end": 420,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
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
                "start": 377,
                "end": 378,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 366,
          "end": 376,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 366,
            "end": 368,
            "decorators": [],
            "name": "rs",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 369,
            "end": 376,
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
