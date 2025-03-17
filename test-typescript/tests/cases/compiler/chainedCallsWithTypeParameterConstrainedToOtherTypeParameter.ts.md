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
        "start": 25,
        "end": 143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 63,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 42,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 63,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 55,
                      "end": 58,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 57,
                        "end": 58,
                        "typeName": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 58,
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
                "start": 60,
                "end": 63,
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
            "start": 68,
            "end": 141,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 72,
              "name": "then",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 72,
              "end": 141,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 86,
                  "end": 101,
                  "name": "cb",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 90,
                      "end": 101,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 91,
                          "end": 95,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 92,
                            "end": 95,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 94,
                              "end": 95,
                              "typeName": {
                                "type": "Identifier",
                                "start": 94,
                                "end": 95,
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
                        "start": 97,
                        "end": 101,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 100,
                          "end": 101,
                          "typeName": {
                            "type": "Identifier",
                            "start": 100,
                            "end": 101,
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 72,
                "end": 85,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 73,
                    "end": 84,
                    "name": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "name": "S",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 83,
                      "end": 84,
                      "typeName": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 84,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 102,
                "end": 112,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 104,
                  "end": 112,
                  "typeName": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 109,
                    "name": "Chain",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 109,
                    "end": 112,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 110,
                        "end": 111,
                        "typeName": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 111,
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
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 23,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 22,
              "end": 23,
              "typeName": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
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
      "type": "ClassDeclaration",
      "start": 145,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 152,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 153,
        "end": 163,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 159,
            "end": 161,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 164,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 171,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 180,
        "end": 181,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 182,
        "end": 192,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 188,
            "end": 190,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 188,
              "end": 189,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 193,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 200,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 209,
        "end": 210,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 211,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 217,
            "end": 219,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 372,
      "expression": {
        "type": "CallExpression",
        "start": 285,
        "end": 371,
        "callee": {
          "type": "MemberExpression",
          "start": 285,
          "end": 359,
          "object": {
            "type": "CallExpression",
            "start": 285,
            "end": 354,
            "callee": {
              "type": "MemberExpression",
              "start": 285,
              "end": 342,
              "object": {
                "type": "CallExpression",
                "start": 285,
                "end": 337,
                "callee": {
                  "type": "MemberExpression",
                  "start": 285,
                  "end": 325,
                  "object": {
                    "type": "CallExpression",
                    "start": 285,
                    "end": 320,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 285,
                      "end": 308,
                      "object": {
                        "type": "NewExpression",
                        "start": 286,
                        "end": 302,
                        "callee": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 295,
                          "name": "Chain",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 296,
                            "end": 301,
                            "callee": {
                              "type": "Identifier",
                              "start": 300,
                              "end": 301,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [],
                            "typeArguments": null
                          }
                        ],
                        "typeArguments": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 304,
                        "end": 308,
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
                        "start": 309,
                        "end": 319,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 309,
                            "end": 310,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "NewExpression",
                          "start": 314,
                          "end": 319,
                          "callee": {
                            "type": "Identifier",
                            "start": 318,
                            "end": 319,
                            "name": "B",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
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
                    "start": 321,
                    "end": 325,
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
                    "start": 326,
                    "end": 336,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 326,
                        "end": 327,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "NewExpression",
                      "start": 331,
                      "end": 336,
                      "callee": {
                        "type": "Identifier",
                        "start": 335,
                        "end": 336,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
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
                "start": 338,
                "end": 342,
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
                "start": 343,
                "end": 353,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 343,
                    "end": 344,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "NewExpression",
                  "start": 348,
                  "end": 353,
                  "callee": {
                    "type": "Identifier",
                    "start": 352,
                    "end": 353,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
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
            "start": 355,
            "end": 359,
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
            "start": 360,
            "end": 370,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 360,
                "end": 361,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "NewExpression",
              "start": 365,
              "end": 370,
              "callee": {
                "type": "Identifier",
                "start": 369,
                "end": 370,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
