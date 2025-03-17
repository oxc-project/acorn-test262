__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 464,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 135,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Red",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 18,
        "end": 23,
        "name": "Color",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 135,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 30,
            "end": 133,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 42,
              "name": "shade",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 133,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 133,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 53,
                    "end": 95,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 57,
                        "end": 94,
                        "id": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 63,
                          "name": "getHue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 66,
                          "end": 94,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 72,
                            "end": 94,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 74,
                                "end": 92,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 81,
                                  "end": 91,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 81,
                                    "end": 89,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 81,
                                      "end": 85
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 86,
                                      "end": 89,
                                      "name": "hue",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 101,
                    "end": 126,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 108,
                      "end": 125,
                      "left": {
                        "type": "CallExpression",
                        "start": 108,
                        "end": 116,
                        "callee": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 114,
                          "name": "getHue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 119,
                        "end": 125,
                        "value": " red",
                        "raw": "\" red\""
                      }
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
            "accessibility": "public"
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
      "start": 137,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 148,
        "name": "Color",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 149,
        "end": 236,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 194,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 167,
              "name": "shade",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 167,
              "end": 194,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 170,
                "end": 194,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 172,
                    "end": 192,
                    "argument": {
                      "type": "Literal",
                      "start": 179,
                      "end": 191,
                      "value": "some shade",
                      "raw": "\"some shade\""
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 199,
            "end": 234,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 206,
              "end": 209,
              "name": "hue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 209,
              "end": 234,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 212,
                "end": 234,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 214,
                    "end": 232,
                    "argument": {
                      "type": "Literal",
                      "start": 221,
                      "end": 231,
                      "value": "some hue",
                      "raw": "\"some hue\""
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
            "accessibility": "public"
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
      "start": 238,
      "end": 380,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 248,
        "name": "Blue",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 257,
        "end": 262,
        "name": "Color",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 263,
        "end": 380,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 274,
            "end": 378,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 281,
              "end": 286,
              "name": "shade",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 286,
              "end": 378,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 289,
                "end": 378,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 297,
                    "end": 339,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 301,
                        "end": 338,
                        "id": {
                          "type": "Identifier",
                          "start": 301,
                          "end": 307,
                          "name": "getHue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 310,
                          "end": 338,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 316,
                            "end": 338,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 318,
                                "end": 336,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 325,
                                  "end": 335,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 325,
                                    "end": 333,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 325,
                                      "end": 329
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 330,
                                      "end": 333,
                                      "name": "hue",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 345,
                    "end": 371,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 352,
                      "end": 370,
                      "left": {
                        "type": "CallExpression",
                        "start": 352,
                        "end": 360,
                        "callee": {
                          "type": "Identifier",
                          "start": 352,
                          "end": 358,
                          "name": "getHue",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 363,
                        "end": 370,
                        "value": " blue",
                        "raw": "\" blue\""
                      }
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
            "accessibility": "public"
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
      "type": "VariableDeclaration",
      "start": 382,
      "end": 400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 386,
          "end": 399,
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 387,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 390,
            "end": 399,
            "callee": {
              "type": "Identifier",
              "start": 394,
              "end": 397,
              "name": "Red",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 420,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 419,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 406,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 409,
            "end": 419,
            "callee": {
              "type": "Identifier",
              "start": 413,
              "end": 417,
              "name": "Blue",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 422,
      "end": 432,
      "expression": {
        "type": "CallExpression",
        "start": 422,
        "end": 431,
        "callee": {
          "type": "MemberExpression",
          "start": 422,
          "end": 429,
          "object": {
            "type": "Identifier",
            "start": 422,
            "end": 423,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 424,
            "end": 429,
            "name": "shade",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 441,
      "expression": {
        "type": "CallExpression",
        "start": 433,
        "end": 440,
        "callee": {
          "type": "MemberExpression",
          "start": 433,
          "end": 438,
          "object": {
            "type": "Identifier",
            "start": 433,
            "end": 434,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 435,
            "end": 438,
            "name": "hue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 442,
      "end": 452,
      "expression": {
        "type": "CallExpression",
        "start": 442,
        "end": 451,
        "callee": {
          "type": "MemberExpression",
          "start": 442,
          "end": 449,
          "object": {
            "type": "Identifier",
            "start": 442,
            "end": 443,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 444,
            "end": 449,
            "name": "shade",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 453,
      "end": 461,
      "expression": {
        "type": "CallExpression",
        "start": 453,
        "end": 460,
        "callee": {
          "type": "MemberExpression",
          "start": 453,
          "end": 458,
          "object": {
            "type": "Identifier",
            "start": 453,
            "end": 454,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 455,
            "end": 458,
            "name": "hue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
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
