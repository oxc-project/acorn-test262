__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 537,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 244,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 244,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 25,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 17,
              "end": 21,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 30,
            "end": 71,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 30,
              "end": 34,
              "name": "bar"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 34,
              "end": 71,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 71,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 48,
                    "end": 65,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 55,
                      "end": 64,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 55,
                        "end": 59
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 60,
                        "end": 64,
                        "name": "foo"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 39,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 38,
                  "end": 39,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 76,
            "end": 145,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 87,
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
              "start": 87,
              "end": 145,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 145,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 116,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 102,
                      "end": 115,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 102,
                        "end": 111,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 102,
                          "end": 106
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 107,
                          "end": 111,
                          "name": "foo"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 114,
                        "end": 115,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 123,
                    "end": 139,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 123,
                      "end": 138,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 123,
                        "end": 124,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 127,
                        "end": 138,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 127,
                          "end": 136,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 127,
                            "end": 131
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 132,
                            "end": 136,
                            "name": "bar"
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
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
                  "start": 88,
                  "end": 92,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 89,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 91,
                      "end": 92,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 91,
                        "end": 92,
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
            "start": 150,
            "end": 193,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 157,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 157,
              "end": 193,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 164,
                "end": 193,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 172,
                    "end": 186,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 172,
                      "end": 185,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 172,
                        "end": 181,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 172,
                          "end": 176
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 177,
                          "end": 181,
                          "name": "foo"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 185,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                  "start": 158,
                  "end": 162,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 159,
                    "end": 162,
                    "typeAnnotation": {
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
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 198,
            "end": 242,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 202,
              "end": 205,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 205,
              "end": 242,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 211,
                "end": 242,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 219,
                    "end": 236,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 226,
                      "end": 235,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 226,
                        "end": 230
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 231,
                        "end": 235,
                        "name": "foo"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 207,
                "end": 210,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 209,
                  "end": 210,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 210,
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
      "start": 246,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 262,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 251,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 254,
            "end": 262,
            "arguments": [
              {
                "type": "Literal",
                "start": 260,
                "end": 261,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 258,
              "end": 259,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 286,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 272,
            "end": 286,
            "arguments": [
              {
                "type": "Literal",
                "start": 278,
                "end": 285,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 289,
      "end": 298,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 289,
        "end": 298,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 289,
          "end": 294,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 289,
            "end": 290,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 291,
            "end": 294,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 297,
          "end": 298,
          "raw": "5",
          "value": 5
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 337,
      "end": 360,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 343,
          "end": 360,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 343,
            "end": 352,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 352,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 346,
                "end": 352
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 355,
            "end": 360,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 355,
              "end": 356,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 357,
              "end": 360,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 385,
      "end": 392,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 385,
        "end": 391,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 385,
          "end": 386,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "PrivateIdentifier",
          "start": 387,
          "end": 391,
          "name": "foo"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 436,
      "end": 442,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 436,
        "end": 441,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 436,
          "end": 437,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 440,
          "end": 441,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 487,
      "end": 493,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 487,
        "end": 492,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 487,
          "end": 488,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 491,
          "end": 492,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
