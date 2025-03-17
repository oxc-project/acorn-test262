__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 455,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 454,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 454,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 24,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 18,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 21,
              "end": 23,
              "raw": "42",
              "value": 42
            }
          },
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 53,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 29,
              "end": 33,
              "name": "bar"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 53,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 53,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 38,
                    "end": 51,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 38,
                      "end": 50,
                      "computed": false,
                      "object": {
                        "type": "NewExpression",
                        "start": 38,
                        "end": 45,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 42,
                          "end": 43,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 46,
                        "end": 50,
                        "name": "baz"
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
            "start": 58,
            "end": 83,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 62,
              "end": 66,
              "name": "baz"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 66,
              "end": 83,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 69,
                "end": 83,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 71,
                    "end": 81,
                    "argument": {
                      "type": "Literal",
                      "start": 78,
                      "end": 80,
                      "raw": "42",
                      "value": 42
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
            "start": 89,
            "end": 452,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
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
              "start": 90,
              "end": 452,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 452,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 103,
                    "end": 446,
                    "argument": {
                      "type": "ClassExpression",
                      "start": 110,
                      "end": 446,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 118,
                        "end": 446,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 132,
                            "end": 141,
                            "accessibility": null,
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "PrivateIdentifier",
                              "start": 132,
                              "end": 136,
                              "name": "bar"
                            },
                            "kind": "method",
                            "optional": false,
                            "override": false,
                            "static": false,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 136,
                              "end": 141,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 139,
                                "end": 141,
                                "body": []
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
                            "start": 154,
                            "end": 312,
                            "accessibility": null,
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 154,
                              "end": 165,
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
                              "start": 165,
                              "end": 312,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 168,
                                "end": 312,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 186,
                                    "end": 199,
                                    "directive": null,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 186,
                                      "end": 198,
                                      "computed": false,
                                      "object": {
                                        "type": "NewExpression",
                                        "start": 186,
                                        "end": 193,
                                        "arguments": [],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 190,
                                          "end": 191,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 194,
                                        "end": 198,
                                        "name": "foo"
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 216,
                                    "end": 229,
                                    "directive": null,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 216,
                                      "end": 228,
                                      "computed": false,
                                      "object": {
                                        "type": "NewExpression",
                                        "start": 216,
                                        "end": 223,
                                        "arguments": [],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 220,
                                          "end": 221,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 224,
                                        "end": 228,
                                        "name": "bar"
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 255,
                                    "end": 268,
                                    "directive": null,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 255,
                                      "end": 267,
                                      "computed": false,
                                      "object": {
                                        "type": "NewExpression",
                                        "start": 255,
                                        "end": 262,
                                        "arguments": [],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 259,
                                          "end": 260,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 263,
                                        "end": 267,
                                        "name": "baz"
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 285,
                                    "end": 298,
                                    "directive": null,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 285,
                                      "end": 297,
                                      "computed": false,
                                      "object": {
                                        "type": "NewExpression",
                                        "start": 285,
                                        "end": 292,
                                        "arguments": [],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 289,
                                          "end": 290,
                                          "decorators": [],
                                          "name": "D",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 293,
                                        "end": 297,
                                        "name": "bar"
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
                            "start": 326,
                            "end": 436,
                            "accessibility": null,
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 326,
                              "end": 327,
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "method",
                            "optional": false,
                            "override": false,
                            "static": false,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 327,
                              "end": 436,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 336,
                                "end": 436,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 354,
                                    "end": 361,
                                    "directive": null,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 354,
                                      "end": 360,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 354,
                                        "end": 355,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 356,
                                        "end": 360,
                                        "name": "foo"
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 378,
                                    "end": 385,
                                    "directive": null,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 378,
                                      "end": 384,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 378,
                                        "end": 379,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 380,
                                        "end": 384,
                                        "name": "bar"
                                      }
                                    }
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 402,
                                    "end": 413,
                                    "directive": null,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 402,
                                      "end": 412,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 402,
                                        "end": 403,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 404,
                                        "end": 412,
                                        "name": "unknown"
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
                                  "start": 328,
                                  "end": 334,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 329,
                                    "end": 334,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 331,
                                      "end": 334
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
                        "start": 116,
                        "end": 117,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "implements": [],
                      "superClass": null,
                      "superTypeArguments": null,
                      "typeParameters": null
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
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
