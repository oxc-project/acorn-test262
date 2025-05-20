__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 522,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 87,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 87,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 49,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 25,
              "decorators": [],
              "name": "getValue",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 49,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 49,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 38,
                    "end": 47,
                    "argument": {
                      "type": "Literal",
                      "start": 45,
                      "end": 46,
                      "raw": "1",
                      "value": 1
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
                "start": 27,
                "end": 35,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 29,
                  "end": 35
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 85,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 61,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 85,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 72,
                "end": 85,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 74,
                    "end": 83,
                    "argument": {
                      "type": "Literal",
                      "start": 81,
                      "end": 82,
                      "raw": "1",
                      "value": 1
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
                "start": 63,
                "end": 71,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 65,
                  "end": 71
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
        "end": 12,
        "decorators": [],
        "name": "MyBase",
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
      "start": 89,
      "end": 220,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 220,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 124,
            "end": 218,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 135,
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
              "start": 135,
              "end": 218,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 138,
                "end": 218,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 144,
                    "end": 152,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 144,
                      "end": 151,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 144,
                        "end": 149
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 158,
                    "end": 186,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 164,
                        "end": 185,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 166,
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 169,
                          "end": 185,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 169,
                            "end": 183,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 169,
                              "end": 174
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 175,
                              "end": 183,
                              "decorators": [],
                              "name": "getValue",
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
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 191,
                    "end": 214,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 197,
                        "end": 213,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 199,
                          "decorators": [],
                          "name": "f2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 202,
                          "end": 213,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 202,
                            "end": 207
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 208,
                            "end": 213,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
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
        "start": 95,
        "end": 104,
        "decorators": [],
        "name": "MyDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 113,
        "end": 119,
        "decorators": [],
        "name": "MyBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 245,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 227,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 230,
            "end": 245,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 234,
              "end": 243,
              "decorators": [],
              "name": "MyDerived",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 263,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 253,
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 256,
            "end": 263,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 258,
              "end": 263,
              "decorators": [],
              "name": "value",
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
      "type": "ClassDeclaration",
      "start": 266,
      "end": 413,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 274,
        "end": 413,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 280,
            "end": 306,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 297,
              "decorators": [],
              "name": "_property",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 297,
              "end": 305,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 299,
                "end": 305
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 311,
            "end": 352,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 315,
              "end": 323,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 323,
              "end": 352,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 326,
                "end": 352,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 328,
                    "end": 350,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 335,
                      "end": 349,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 335,
                        "end": 339
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 340,
                        "end": 349,
                        "decorators": [],
                        "name": "_property",
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 357,
            "end": 411,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 361,
              "end": 369,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 369,
              "end": 411,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 385,
                "end": 411,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 387,
                    "end": 409,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 387,
                      "end": 409,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 387,
                        "end": 401,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 387,
                          "end": 391
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 392,
                          "end": 401,
                          "decorators": [],
                          "name": "_property",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 404,
                        "end": 409,
                        "decorators": [],
                        "name": "value",
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
                  "start": 370,
                  "end": 383,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 375,
                    "end": 383,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 377,
                      "end": 383
                    }
                  }
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
        "start": 272,
        "end": 273,
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
      "start": 415,
      "end": 522,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 433,
        "end": 522,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 439,
            "end": 520,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 443,
              "end": 451,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 451,
              "end": 520,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 467,
                "end": 520,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 477,
                    "end": 514,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 477,
                      "end": 513,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 477,
                        "end": 491,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 477,
                          "end": 482
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 483,
                          "end": 491,
                          "decorators": [],
                          "name": "property",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 494,
                        "end": 513,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 494,
                          "end": 499,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 502,
                          "end": 513,
                          "raw": "\" addition\"",
                          "value": " addition"
                        }
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
                  "start": 452,
                  "end": 465,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 457,
                    "end": 465,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 459,
                      "end": 465
                    }
                  }
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
        "start": 421,
        "end": 422,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 431,
        "end": 432,
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
