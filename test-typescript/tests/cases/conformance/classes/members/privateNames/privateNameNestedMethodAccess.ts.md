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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 454,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 24,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 18,
              "name": "foo"
            },
            "value": {
              "type": "Literal",
              "start": 21,
              "end": 23,
              "value": 42,
              "raw": "42"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 53,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 29,
              "end": 33,
              "name": "bar"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 53,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 53,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 38,
                    "end": 51,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 38,
                      "end": 50,
                      "object": {
                        "type": "NewExpression",
                        "start": 38,
                        "end": 45,
                        "callee": {
                          "type": "Identifier",
                          "start": 42,
                          "end": 43,
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 46,
                        "end": 50,
                        "name": "baz"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
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
            "end": 83,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 62,
              "end": 66,
              "name": "baz"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 66,
              "end": 83,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 42,
                      "raw": "42"
                    }
                  }
                ]
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
            "start": 89,
            "end": 452,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 452,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "id": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 117,
                        "name": "D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 118,
                        "end": 446,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 132,
                            "end": 141,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "PrivateIdentifier",
                              "start": 132,
                              "end": 136,
                              "name": "bar"
                            },
                            "kind": "method",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 136,
                              "end": 141,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 139,
                                "end": 141,
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
                            "start": 154,
                            "end": 312,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 154,
                              "end": 165,
                              "name": "constructor",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "constructor",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 165,
                              "end": 312,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 168,
                                "end": 312,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 186,
                                    "end": 199,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 186,
                                      "end": 198,
                                      "object": {
                                        "type": "NewExpression",
                                        "start": 186,
                                        "end": 193,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 190,
                                          "end": 191,
                                          "name": "C",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "arguments": [],
                                        "typeArguments": null
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 194,
                                        "end": 198,
                                        "name": "foo"
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "directive": null
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 216,
                                    "end": 229,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 216,
                                      "end": 228,
                                      "object": {
                                        "type": "NewExpression",
                                        "start": 216,
                                        "end": 223,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 220,
                                          "end": 221,
                                          "name": "C",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "arguments": [],
                                        "typeArguments": null
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 224,
                                        "end": 228,
                                        "name": "bar"
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "directive": null
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 255,
                                    "end": 268,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 255,
                                      "end": 267,
                                      "object": {
                                        "type": "NewExpression",
                                        "start": 255,
                                        "end": 262,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 259,
                                          "end": 260,
                                          "name": "C",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "arguments": [],
                                        "typeArguments": null
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 263,
                                        "end": 267,
                                        "name": "baz"
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "directive": null
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 285,
                                    "end": 298,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 285,
                                      "end": 297,
                                      "object": {
                                        "type": "NewExpression",
                                        "start": 285,
                                        "end": 292,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 289,
                                          "end": 290,
                                          "name": "D",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "arguments": [],
                                        "typeArguments": null
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 293,
                                        "end": 297,
                                        "name": "bar"
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "directive": null
                                  }
                                ]
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
                            "start": 326,
                            "end": 436,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 326,
                              "end": 327,
                              "name": "n",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "method",
                            "value": {
                              "type": "FunctionExpression",
                              "start": 327,
                              "end": 436,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 328,
                                  "end": 334,
                                  "name": "x",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 329,
                                    "end": 334,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 331,
                                      "end": 334
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "body": {
                                "type": "BlockStatement",
                                "start": 336,
                                "end": 436,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 354,
                                    "end": 361,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 354,
                                      "end": 360,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 354,
                                        "end": 355,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 356,
                                        "end": 360,
                                        "name": "foo"
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "directive": null
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 378,
                                    "end": 385,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 378,
                                      "end": 384,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 378,
                                        "end": 379,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 380,
                                        "end": 384,
                                        "name": "bar"
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "directive": null
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 402,
                                    "end": 413,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 402,
                                      "end": 412,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 402,
                                        "end": 403,
                                        "name": "x",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 404,
                                        "end": 412,
                                        "name": "unknown"
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "declare": false,
                              "typeParameters": null,
                              "returnType": null
                            },
                            "decorators": [],
                            "override": false,
                            "optional": false,
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
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
