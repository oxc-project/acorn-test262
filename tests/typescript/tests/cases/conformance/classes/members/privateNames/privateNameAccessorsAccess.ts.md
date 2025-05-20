__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 365,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 236,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 236,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 41,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 19,
              "end": 24,
              "name": "prop"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 41,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 41,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 29,
                    "end": 39,
                    "argument": {
                      "type": "Literal",
                      "start": 36,
                      "end": 38,
                      "raw": "\"\"",
                      "value": ""
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
            "start": 46,
            "end": 74,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 50,
              "end": 55,
              "name": "prop"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 74,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 74,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 69,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 69,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 63,
                      "end": 69
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
            "start": 80,
            "end": 234,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 91,
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
              "start": 91,
              "end": 234,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 234,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 104,
                    "end": 128,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 104,
                      "end": 127,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 116,
                          "end": 126,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 116,
                            "end": 120
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 121,
                            "end": 126,
                            "name": "prop"
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 104,
                        "end": 115,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 111,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 112,
                          "end": 115,
                          "decorators": [],
                          "name": "log",
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
                    "start": 137,
                    "end": 154,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 141,
                        "end": 153,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 146,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 142,
                            "end": 146,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 144,
                              "end": 146,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 144,
                                "end": 146,
                                "decorators": [],
                                "name": "A2",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 149,
                          "end": 153
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 163,
                    "end": 171,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 163,
                      "end": 170,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 164,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 165,
                        "end": 170,
                        "name": "prop"
                      }
                    }
                  },
                  {
                    "type": "FunctionDeclaration",
                    "start": 180,
                    "end": 228,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 196,
                      "end": 228,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 210,
                          "end": 218,
                          "directive": null,
                          "expression": {
                            "type": "MemberExpression",
                            "start": 210,
                            "end": 217,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 210,
                              "end": 211,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 212,
                              "end": 217,
                              "name": "prop"
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 193,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
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
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 237,
      "end": 252,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 237,
        "end": 251,
        "computed": false,
        "object": {
          "type": "NewExpression",
          "start": 237,
          "end": 245,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 241,
            "end": 243,
            "decorators": [],
            "name": "A2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "PrivateIdentifier",
          "start": 246,
          "end": 251,
          "name": "prop"
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 263,
      "end": 311,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 279,
        "end": 311,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 285,
            "end": 300,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 285,
              "end": 299,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 285,
                "end": 293,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 291,
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "PrivateIdentifier",
                "start": 294,
                "end": 299,
                "name": "prop"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 273,
        "end": 276,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 313,
      "end": 365,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 322,
        "end": 365,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 328,
            "end": 363,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 329,
              "end": 363,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 332,
                "end": 363,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 342,
                    "end": 357,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 342,
                      "end": 356,
                      "computed": false,
                      "object": {
                        "type": "NewExpression",
                        "start": 342,
                        "end": 350,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 346,
                          "end": 348,
                          "decorators": [],
                          "name": "A2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 351,
                        "end": 356,
                        "name": "prop"
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 321,
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
