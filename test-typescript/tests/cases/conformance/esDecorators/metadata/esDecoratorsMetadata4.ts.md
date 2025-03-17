__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 507,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 22,
            "decorators": [],
            "name": "PRIVATE_METADATA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 25,
            "end": 38,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 29,
              "end": 36,
              "decorators": [],
              "name": "WeakMap",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 342,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 342,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 89,
            "end": 340,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 96,
              "end": 339,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 339,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 122,
                    "end": 176,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 126,
                        "end": 175,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 134,
                          "decorators": [],
                          "name": "metadata",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 137,
                          "end": 175,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 158,
                              "end": 174,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 158,
                                "end": 165,
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 166,
                                "end": 174,
                                "decorators": [],
                                "name": "metadata",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 137,
                            "end": 157,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 153,
                              "decorators": [],
                              "name": "PRIVATE_METADATA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 154,
                              "end": 157,
                              "decorators": [],
                              "name": "get",
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
                    "kind": "let"
                  },
                  {
                    "type": "IfStatement",
                    "start": 186,
                    "end": 301,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 201,
                      "end": 301,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 215,
                          "end": 229,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 215,
                            "end": 228,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 215,
                              "end": 223,
                              "decorators": [],
                              "name": "metadata",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "ObjectExpression",
                              "start": 226,
                              "end": 228,
                              "properties": []
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 242,
                          "end": 291,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 242,
                            "end": 290,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 263,
                                "end": 279,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 263,
                                  "end": 270,
                                  "decorators": [],
                                  "name": "context",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 271,
                                  "end": 279,
                                  "decorators": [],
                                  "name": "metadata",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "Identifier",
                                "start": 281,
                                "end": 289,
                                "decorators": [],
                                "name": "metadata",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 242,
                              "end": 262,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 242,
                                "end": 258,
                                "decorators": [],
                                "name": "PRIVATE_METADATA",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 259,
                                "end": 262,
                                "decorators": [],
                                "name": "set",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "UnaryExpression",
                      "start": 190,
                      "end": 199,
                      "argument": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 199,
                        "decorators": [],
                        "name": "metadata",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "!",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 311,
                    "end": 333,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 311,
                      "end": 332,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 311,
                        "end": 324,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 311,
                          "end": 319,
                          "decorators": [],
                          "name": "metadata",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 320,
                          "end": 323,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 327,
                        "end": 332,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 100,
                  "end": 107,
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 54,
        "decorators": [],
        "name": "meta",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 55,
          "end": 66,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 66,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 60,
              "end": 66
            }
          }
        },
        {
          "type": "Identifier",
          "start": 68,
          "end": 81,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 81,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 75,
              "end": 81
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 344,
      "end": 403,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 368,
        "end": 403,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 374,
            "end": 401,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 374,
                "end": 389,
                "expression": {
                  "type": "CallExpression",
                  "start": 375,
                  "end": 389,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 380,
                      "end": 383,
                      "raw": "'b'",
                      "value": "b"
                    },
                    {
                      "type": "Literal",
                      "start": 385,
                      "end": 388,
                      "raw": "'y'",
                      "value": "y"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 375,
                    "end": 379,
                    "decorators": [],
                    "name": "meta",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 394,
              "end": 395,
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
              "start": 395,
              "end": 401,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 398,
                "end": 401,
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
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 344,
          "end": 359,
          "expression": {
            "type": "CallExpression",
            "start": 345,
            "end": 359,
            "arguments": [
              {
                "type": "Literal",
                "start": 350,
                "end": 353,
                "raw": "'a'",
                "value": "a"
              },
              {
                "type": "Literal",
                "start": 355,
                "end": 358,
                "raw": "'x'",
                "value": "x"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 345,
              "end": 349,
              "decorators": [],
              "name": "meta",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 367,
        "decorators": [],
        "name": "C",
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
      "start": 405,
      "end": 448,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 405,
        "end": 447,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 405,
          "end": 445,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 426,
              "end": 444,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 426,
                "end": 427,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "MemberExpression",
                "start": 428,
                "end": 443,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 434,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 443,
                  "decorators": [],
                  "name": "metadata",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 405,
            "end": 425,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 405,
              "end": 421,
              "decorators": [],
              "name": "PRIVATE_METADATA",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 422,
              "end": 425,
              "decorators": [],
              "name": "get",
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
          "start": 446,
          "end": 447,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 456,
      "end": 499,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 456,
        "end": 498,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 456,
          "end": 496,
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 477,
              "end": 495,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 477,
                "end": 478,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "MemberExpression",
                "start": 479,
                "end": 494,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 485,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 486,
                  "end": 494,
                  "decorators": [],
                  "name": "metadata",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 456,
            "end": 476,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 456,
              "end": 472,
              "decorators": [],
              "name": "PRIVATE_METADATA",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 473,
              "end": 476,
              "decorators": [],
              "name": "get",
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
          "start": 497,
          "end": 498,
          "decorators": [],
          "name": "b",
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
