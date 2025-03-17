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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "name": "Chain",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 353,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 21,
            "end": 53,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 32,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 32,
              "end": 53,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "value",
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
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 50,
                "end": 53,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 351,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 62,
              "name": "then",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 351,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 66,
                  "end": 81,
                  "name": "cb",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 68,
                    "end": 81,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 70,
                      "end": 81,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 71,
                          "end": 75,
                          "name": "x",
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
                        "id": {
                          "type": "Identifier",
                          "start": 107,
                          "end": 113,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 116,
                          "end": 130,
                          "callee": {
                            "type": "Identifier",
                            "start": 116,
                            "end": 118,
                            "name": "cb",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 119,
                              "end": 129,
                              "object": {
                                "type": "ThisExpression",
                                "start": 119,
                                "end": 123
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 124,
                                "end": 129,
                                "name": "value",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
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
                        "id": {
                          "type": "Identifier",
                          "start": 210,
                          "end": 211,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 214,
                          "end": 288,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 214,
                            "end": 273,
                            "object": {
                              "type": "CallExpression",
                              "start": 214,
                              "end": 258,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 214,
                                "end": 246,
                                "object": {
                                  "type": "CallExpression",
                                  "start": 214,
                                  "end": 236,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 214,
                                    "end": 223,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 214,
                                      "end": 218
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 219,
                                      "end": 223,
                                      "name": "then",
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
                                      "start": 224,
                                      "end": 235,
                                      "id": null,
                                      "expression": true,
                                      "generator": false,
                                      "async": false,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 224,
                                          "end": 225,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "body": {
                                        "type": "Identifier",
                                        "start": 229,
                                        "end": 235,
                                        "name": "result",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "typeParameters": null,
                                      "returnType": null
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 242,
                                  "end": 246,
                                  "name": "then",
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
                                  "start": 247,
                                  "end": 257,
                                  "id": null,
                                  "expression": true,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 247,
                                      "end": 248,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "body": {
                                    "type": "Literal",
                                    "start": 252,
                                    "end": 257,
                                    "value": "abc",
                                    "raw": "\"abc\""
                                  },
                                  "typeParameters": null,
                                  "returnType": null
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 269,
                              "end": 273,
                              "name": "then",
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
                              "start": 274,
                              "end": 287,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 274,
                                  "end": 275,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "body": {
                                "type": "MemberExpression",
                                "start": 279,
                                "end": 287,
                                "object": {
                                  "type": "Identifier",
                                  "start": 279,
                                  "end": 280,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 281,
                                  "end": 287,
                                  "name": "length",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "typeParameters": null,
                              "returnType": null
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
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 320,
                    "end": 345,
                    "argument": {
                      "type": "NewExpression",
                      "start": 327,
                      "end": 344,
                      "callee": {
                        "type": "Identifier",
                        "start": 331,
                        "end": 336,
                        "name": "Chain",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 337,
                          "end": 343,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 62,
                "end": 65,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 63,
                    "end": 64,
                    "name": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 82,
                "end": 92,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 84,
                  "end": 92,
                  "typeName": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 89,
                    "name": "Chain",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "name": "S",
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
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
