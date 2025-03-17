__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 372,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 143,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 63,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 42,
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
              "start": 42,
              "end": 63,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 60,
                "end": 63,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 43,
                  "end": 58,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 58,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 55,
                      "end": 58,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 57,
                        "end": 58,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 58,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
          },
          {
            "type": "MethodDefinition",
            "start": 68,
            "end": 141,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 72,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 72,
              "end": 141,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 113,
                "end": 141,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 123,
                    "end": 135,
                    "argument": {
                      "type": "Literal",
                      "start": 130,
                      "end": 134,
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
                  "start": 86,
                  "end": 101,
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 90,
                      "end": 101,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 91,
                          "end": 95,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 92,
                            "end": 95,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 94,
                              "end": 95,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 94,
                                "end": 95,
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
                        "start": 97,
                        "end": 101,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 100,
                          "end": 101,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 100,
                            "end": 101,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 102,
                "end": 112,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 104,
                  "end": 112,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 109,
                    "end": 112,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 110,
                        "end": 111,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 111,
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 109,
                    "decorators": [],
                    "name": "Chain",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 72,
                "end": 85,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 73,
                    "end": 84,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 83,
                      "end": 84,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 84,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 23,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 22,
              "end": 23,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "type": "ClassDeclaration",
      "start": 145,
      "end": 163,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 153,
        "end": 163,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 159,
            "end": 161,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 152,
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
      "start": 164,
      "end": 192,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 182,
        "end": 192,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 188,
            "end": 190,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 188,
              "end": 189,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 171,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 180,
        "end": 181,
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
      "start": 193,
      "end": 221,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 211,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 217,
            "end": 219,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 200,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 209,
        "end": 210,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 372,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 285,
        "end": 371,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 360,
            "end": 370,
            "async": false,
            "body": {
              "type": "NewExpression",
              "start": 365,
              "end": 370,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 369,
                "end": 370,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 360,
                "end": 361,
                "decorators": [],
                "name": "b",
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
          "start": 285,
          "end": 359,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 285,
            "end": 354,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 343,
                "end": 353,
                "async": false,
                "body": {
                  "type": "NewExpression",
                  "start": 348,
                  "end": 353,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 352,
                    "end": 353,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 343,
                    "end": 344,
                    "decorators": [],
                    "name": "c",
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
              "start": 285,
              "end": 342,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 285,
                "end": 337,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 326,
                    "end": 336,
                    "async": false,
                    "body": {
                      "type": "NewExpression",
                      "start": 331,
                      "end": 336,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 335,
                        "end": 336,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 326,
                        "end": 327,
                        "decorators": [],
                        "name": "b",
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
                  "start": 285,
                  "end": 325,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 285,
                    "end": 320,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 309,
                        "end": 319,
                        "async": false,
                        "body": {
                          "type": "NewExpression",
                          "start": 314,
                          "end": 319,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 318,
                            "end": 319,
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 309,
                            "end": 310,
                            "decorators": [],
                            "name": "a",
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
                      "start": 285,
                      "end": 308,
                      "computed": false,
                      "object": {
                        "type": "NewExpression",
                        "start": 286,
                        "end": 302,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 296,
                            "end": 301,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 300,
                              "end": 301,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 295,
                          "decorators": [],
                          "name": "Chain",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 304,
                        "end": 308,
                        "decorators": [],
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 325,
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 338,
                "end": 342,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 355,
            "end": 359,
            "decorators": [],
            "name": "then",
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
