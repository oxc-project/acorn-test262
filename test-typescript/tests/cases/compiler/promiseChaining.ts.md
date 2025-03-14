__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 355,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 353,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 353,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 21,
            "end": 53,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 32,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 32,
              "end": 53,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 50,
                "end": 53,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 33,
                  "end": 48,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 48,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 45,
                      "end": 48,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 47,
                        "end": 48,
                        "typeName": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 48,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 351,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 62,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 351,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 351,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 103,
                    "end": 131,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 107,
                        "end": 130,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 107,
                          "end": 113,
                          "decorators": [],
                          "name": "result",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 116,
                          "end": 130,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 119,
                              "end": 129,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 119,
                                "end": 123
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 124,
                                "end": 129,
                                "decorators": [],
                                "name": "value",
                                "optional": false
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 116,
                            "end": 118,
                            "decorators": [],
                            "name": "cb",
                            "optional": false
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 206,
                    "end": 299,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 210,
                        "end": 288,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 210,
                          "end": 211,
                          "decorators": [],
                          "name": "z",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 214,
                          "end": 288,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 274,
                              "end": 287,
                              "async": false,
                              "body": {
                                "type": "MemberExpression",
                                "start": 279,
                                "end": 287,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 279,
                                  "end": 280,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 281,
                                  "end": 287,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false
                                }
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 274,
                                  "end": 275,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 214,
                            "end": 273,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 214,
                              "end": 258,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 247,
                                  "end": 257,
                                  "async": false,
                                  "body": {
                                    "type": "Literal",
                                    "start": 252,
                                    "end": 257,
                                    "raw": "\"abc\"",
                                    "value": "abc"
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 247,
                                      "end": 248,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false
                                    }
                                  ]
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 214,
                                "end": 246,
                                "computed": false,
                                "object": {
                                  "type": "CallExpression",
                                  "start": 214,
                                  "end": 236,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "start": 224,
                                      "end": 235,
                                      "async": false,
                                      "body": {
                                        "type": "Identifier",
                                        "start": 229,
                                        "end": 235,
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false
                                      },
                                      "expression": true,
                                      "generator": false,
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 224,
                                          "end": 225,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        }
                                      ]
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 214,
                                    "end": 223,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 214,
                                      "end": 218
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 219,
                                      "end": 223,
                                      "decorators": [],
                                      "name": "then",
                                      "optional": false
                                    }
                                  },
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 242,
                                  "end": 246,
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false
                                }
                              },
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 269,
                              "end": 273,
                              "decorators": [],
                              "name": "then",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 320,
                    "end": 345,
                    "argument": {
                      "type": "NewExpression",
                      "start": 327,
                      "end": 344,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 337,
                          "end": 343,
                          "decorators": [],
                          "name": "result",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 331,
                        "end": 336,
                        "decorators": [],
                        "name": "Chain",
                        "optional": false
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
                  "start": 66,
                  "end": 81,
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 68,
                    "end": 81,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 70,
                      "end": 81,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 71,
                          "end": 75,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 72,
                            "end": 75,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 74,
                              "end": 75,
                              "typeName": {
                                "type": "Identifier",
                                "start": 74,
                                "end": 75,
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
                        "start": 77,
                        "end": 81,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 80,
                          "end": 81,
                          "typeName": {
                            "type": "Identifier",
                            "start": 80,
                            "end": 81,
                            "decorators": [],
                            "name": "S",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 82,
                "end": 92,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 84,
                  "end": 92,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 89,
                    "end": 92,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 90,
                        "end": 91,
                        "typeName": {
                          "type": "Identifier",
                          "start": 90,
                          "end": 91,
                          "decorators": [],
                          "name": "S",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 89,
                    "decorators": [],
                    "name": "Chain",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 62,
                "end": 65,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 63,
                    "end": 64,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "decorators": [],
                      "name": "S",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Chain",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
