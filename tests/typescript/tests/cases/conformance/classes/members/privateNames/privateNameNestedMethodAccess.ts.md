__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 454,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 454,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 454,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 24,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 18,
              "name": "foo"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 21,
              "end": 23,
              "value": 42,
              "raw": "42"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 53,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 29,
              "end": 33,
              "name": "bar"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 53,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": []
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 46,
                        "end": 50,
                        "name": "baz"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 83,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 62,
              "end": 66,
              "name": "baz"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 66,
              "end": 83,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 89,
            "end": 452,
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
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 452,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 118,
                        "end": 446,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 132,
                            "end": 141,
                            "decorators": [],
                            "key": {
                              "type": "PrivateIdentifier",
                              "start": 132,
                              "end": 136,
                              "name": "bar"
                            },
                            "value": {
                              "type": "FunctionExpression",
                              "start": 136,
                              "end": 141,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 139,
                                "end": 141,
                                "body": []
                              },
                              "expression": false
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 154,
                            "end": 312,
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
                            "value": {
                              "type": "FunctionExpression",
                              "start": 165,
                              "end": 312,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
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
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null,
                                        "arguments": []
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 194,
                                        "end": 198,
                                        "name": "foo"
                                      },
                                      "optional": false,
                                      "computed": false
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
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null,
                                        "arguments": []
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 224,
                                        "end": 228,
                                        "name": "bar"
                                      },
                                      "optional": false,
                                      "computed": false
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
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null,
                                        "arguments": []
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 263,
                                        "end": 267,
                                        "name": "baz"
                                      },
                                      "optional": false,
                                      "computed": false
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
                                          "decorators": [],
                                          "name": "D",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null,
                                        "arguments": []
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 293,
                                        "end": 297,
                                        "name": "bar"
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "expression": false
                            },
                            "kind": "constructor",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null
                          },
                          {
                            "type": "MethodDefinition",
                            "start": 326,
                            "end": 436,
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
                            "value": {
                              "type": "FunctionExpression",
                              "start": 327,
                              "end": 436,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
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
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 356,
                                        "end": 360,
                                        "name": "foo"
                                      },
                                      "optional": false,
                                      "computed": false
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
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 380,
                                        "end": 384,
                                        "name": "bar"
                                      },
                                      "optional": false,
                                      "computed": false
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
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "start": 404,
                                        "end": 412,
                                        "name": "unknown"
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "expression": false
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null
                          }
                        ]
                      },
                      "abstract": false,
                      "declare": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
