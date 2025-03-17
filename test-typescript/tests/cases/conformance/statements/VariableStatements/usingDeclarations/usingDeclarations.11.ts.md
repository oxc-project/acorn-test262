__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 515,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 10,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 100,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 100,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 36,
            "end": 98,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 47,
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
              "start": 47,
              "end": 98,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 50,
                "end": 98,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 60,
                    "end": 75,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 66,
                        "end": 74,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 66,
                          "end": 67,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 70,
                          "end": 74,
                          "raw": "null",
                          "value": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "using"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 84,
                    "end": 92,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 84,
                      "end": 91,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 84,
                        "end": 89
                      },
                      "optional": false,
                      "typeArguments": null
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 101,
      "end": 190,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 190,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 188,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 137,
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
              "start": 137,
              "end": 188,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 140,
                "end": 188,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 150,
                    "end": 158,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 150,
                      "end": 157,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 150,
                        "end": 155
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 167,
                    "end": 182,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 173,
                        "end": 181,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 174,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 177,
                          "end": 181,
                          "raw": "null",
                          "value": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "using"
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 109,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 118,
        "end": 119,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 191,
      "end": 291,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 210,
        "end": 291,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 216,
            "end": 222,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 220,
              "end": 221,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 227,
            "end": 289,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 238,
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
              "start": 238,
              "end": 289,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 241,
                "end": 289,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 251,
                    "end": 266,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 257,
                        "end": 265,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 258,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 261,
                          "end": 265,
                          "raw": "null",
                          "value": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "using"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 275,
                    "end": 283,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 275,
                      "end": 282,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 275,
                        "end": 280
                      },
                      "optional": false,
                      "typeArguments": null
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 199,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 208,
        "end": 209,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 292,
      "end": 397,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 311,
        "end": 397,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 317,
            "end": 395,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 328,
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
              "start": 328,
              "end": 395,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 347,
                "end": 395,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 357,
                    "end": 372,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 363,
                        "end": 371,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 363,
                          "end": 364,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 367,
                          "end": 371,
                          "raw": "null",
                          "value": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "using"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 381,
                    "end": 389,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 381,
                      "end": 388,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 381,
                        "end": 386
                      },
                      "optional": false,
                      "typeArguments": null
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
                  "type": "TSParameterProperty",
                  "start": 329,
                  "end": 345,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 336,
                    "end": 345,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 337,
                      "end": 345,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 339,
                        "end": 345
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 298,
        "end": 300,
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 309,
        "end": 310,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 398,
      "end": 514,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 417,
        "end": 514,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 423,
            "end": 429,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 423,
              "end": 424,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 427,
              "end": 428,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 434,
            "end": 512,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 434,
              "end": 445,
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
              "start": 445,
              "end": 512,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 464,
                "end": 512,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 474,
                    "end": 489,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 480,
                        "end": 488,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 480,
                          "end": 481,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 484,
                          "end": 488,
                          "raw": "null",
                          "value": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "using"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 498,
                    "end": 506,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 498,
                      "end": 505,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 498,
                        "end": 503
                      },
                      "optional": false,
                      "typeArguments": null
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
                  "type": "TSParameterProperty",
                  "start": 446,
                  "end": 462,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 453,
                    "end": 462,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 454,
                      "end": 462,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 456,
                        "end": 462
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 404,
        "end": 406,
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 415,
        "end": 416,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
