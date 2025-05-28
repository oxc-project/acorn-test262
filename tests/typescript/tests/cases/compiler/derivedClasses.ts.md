__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 463,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 135,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Red",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 18,
        "end": 23,
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 135,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 30,
            "end": 133,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 42,
              "decorators": [],
              "name": "shade",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 133,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 133,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 53,
                    "end": 95,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 57,
                        "end": 94,
                        "id": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 63,
                          "decorators": [],
                          "name": "getHue",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 66,
                          "end": 94,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                                      "decorators": [],
                                      "name": "hue",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
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
                          "decorators": [],
                          "name": "getHue",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 137,
      "end": 236,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 148,
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 149,
        "end": 236,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 194,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 167,
              "decorators": [],
              "name": "shade",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 167,
              "end": 194,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 199,
            "end": 234,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 206,
              "end": 209,
              "decorators": [],
              "name": "hue",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 209,
              "end": 234,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 238,
      "end": 380,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 248,
        "decorators": [],
        "name": "Blue",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 257,
        "end": 262,
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 263,
        "end": 380,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 274,
            "end": 378,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 281,
              "end": 286,
              "decorators": [],
              "name": "shade",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 286,
              "end": 378,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 289,
                "end": 378,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 297,
                    "end": 339,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 301,
                        "end": 338,
                        "id": {
                          "type": "Identifier",
                          "start": 301,
                          "end": 307,
                          "decorators": [],
                          "name": "getHue",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 310,
                          "end": 338,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
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
                                      "decorators": [],
                                      "name": "hue",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        },
                        "definite": false
                      }
                    ],
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
                          "decorators": [],
                          "name": "getHue",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 382,
      "end": 400,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 386,
          "end": 399,
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 387,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 390,
            "end": 399,
            "callee": {
              "type": "Identifier",
              "start": 394,
              "end": 397,
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 420,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 419,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 406,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 409,
            "end": 419,
            "callee": {
              "type": "Identifier",
              "start": 413,
              "end": 417,
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 424,
            "end": 429,
            "decorators": [],
            "name": "shade",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 435,
            "end": 438,
            "decorators": [],
            "name": "hue",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 444,
            "end": 449,
            "decorators": [],
            "name": "shade",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 455,
            "end": 458,
            "decorators": [],
            "name": "hue",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
