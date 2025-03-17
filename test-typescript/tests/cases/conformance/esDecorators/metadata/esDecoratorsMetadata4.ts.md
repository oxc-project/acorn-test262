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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 22,
            "name": "PRIVATE_METADATA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 25,
            "end": 38,
            "callee": {
              "type": "Identifier",
              "start": 29,
              "end": 36,
              "name": "WeakMap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 342,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 54,
        "name": "meta",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 55,
          "end": 66,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 58,
            "end": 66,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 60,
              "end": 66
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 68,
          "end": 81,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 81,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 75,
              "end": 81
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "name": "_",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 100,
                  "end": 107,
                  "name": "context",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "id": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 134,
                          "name": "metadata",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 137,
                          "end": 175,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 137,
                            "end": 157,
                            "object": {
                              "type": "Identifier",
                              "start": 137,
                              "end": 153,
                              "name": "PRIVATE_METADATA",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 154,
                              "end": 157,
                              "name": "get",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 158,
                              "end": 174,
                              "object": {
                                "type": "Identifier",
                                "start": 158,
                                "end": 165,
                                "name": "context",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 166,
                                "end": 174,
                                "name": "metadata",
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
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 186,
                    "end": 301,
                    "test": {
                      "type": "UnaryExpression",
                      "start": 190,
                      "end": 199,
                      "operator": "!",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 199,
                        "name": "metadata",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 201,
                      "end": 301,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 215,
                          "end": 229,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 215,
                            "end": 228,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 215,
                              "end": 223,
                              "name": "metadata",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "ObjectExpression",
                              "start": 226,
                              "end": 228,
                              "properties": []
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 242,
                          "end": 291,
                          "expression": {
                            "type": "CallExpression",
                            "start": 242,
                            "end": 290,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 242,
                              "end": 262,
                              "object": {
                                "type": "Identifier",
                                "start": 242,
                                "end": 258,
                                "name": "PRIVATE_METADATA",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 259,
                                "end": 262,
                                "name": "set",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 263,
                                "end": 279,
                                "object": {
                                  "type": "Identifier",
                                  "start": 263,
                                  "end": 270,
                                  "name": "context",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 271,
                                  "end": 279,
                                  "name": "metadata",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 281,
                                "end": 289,
                                "name": "metadata",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 311,
                    "end": 333,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 311,
                      "end": 332,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 311,
                        "end": 324,
                        "object": {
                          "type": "Identifier",
                          "start": 311,
                          "end": 319,
                          "name": "metadata",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 320,
                          "end": 323,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 327,
                        "end": 332,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 344,
      "end": 403,
      "id": {
        "type": "Identifier",
        "start": 366,
        "end": 367,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 368,
        "end": 403,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 374,
            "end": 401,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 394,
              "end": 395,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 395,
              "end": 401,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 398,
                "end": 401,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 374,
                "end": 389,
                "expression": {
                  "type": "CallExpression",
                  "start": 375,
                  "end": 389,
                  "callee": {
                    "type": "Identifier",
                    "start": 375,
                    "end": 379,
                    "name": "meta",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 380,
                      "end": 383,
                      "value": "b",
                      "raw": "'b'"
                    },
                    {
                      "type": "Literal",
                      "start": 385,
                      "end": 388,
                      "value": "y",
                      "raw": "'y'"
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 344,
          "end": 359,
          "expression": {
            "type": "CallExpression",
            "start": 345,
            "end": 359,
            "callee": {
              "type": "Identifier",
              "start": 345,
              "end": 349,
              "name": "meta",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 350,
                "end": 353,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 355,
                "end": 358,
                "value": "x",
                "raw": "'x'"
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 405,
      "end": 448,
      "expression": {
        "type": "MemberExpression",
        "start": 405,
        "end": 447,
        "object": {
          "type": "CallExpression",
          "start": 405,
          "end": 445,
          "callee": {
            "type": "MemberExpression",
            "start": 405,
            "end": 425,
            "object": {
              "type": "Identifier",
              "start": 405,
              "end": 421,
              "name": "PRIVATE_METADATA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 422,
              "end": 425,
              "name": "get",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 426,
              "end": 444,
              "object": {
                "type": "Identifier",
                "start": 426,
                "end": 427,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "MemberExpression",
                "start": 428,
                "end": 443,
                "object": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 434,
                  "name": "Symbol",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 443,
                  "name": "metadata",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "computed": true,
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "property": {
          "type": "Identifier",
          "start": 446,
          "end": 447,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 456,
      "end": 499,
      "expression": {
        "type": "MemberExpression",
        "start": 456,
        "end": 498,
        "object": {
          "type": "CallExpression",
          "start": 456,
          "end": 496,
          "callee": {
            "type": "MemberExpression",
            "start": 456,
            "end": 476,
            "object": {
              "type": "Identifier",
              "start": 456,
              "end": 472,
              "name": "PRIVATE_METADATA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 473,
              "end": 476,
              "name": "get",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "MemberExpression",
              "start": 477,
              "end": 495,
              "object": {
                "type": "Identifier",
                "start": 477,
                "end": 478,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "MemberExpression",
                "start": 479,
                "end": 494,
                "object": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 485,
                  "name": "Symbol",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 486,
                  "end": 494,
                  "name": "metadata",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "computed": true,
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "property": {
          "type": "Identifier",
          "start": 497,
          "end": 498,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
