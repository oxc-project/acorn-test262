__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 455,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 326,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "name": "makePoint",
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
          "start": 19,
          "end": 28,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 28,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 22,
              "end": 28
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 30,
          "end": 39,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 39,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 33,
              "end": 39
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 326,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 47,
            "end": 324,
            "argument": {
              "type": "ObjectExpression",
              "start": 54,
              "end": 324,
              "properties": [
                {
                  "type": "Property",
                  "start": 64,
                  "end": 84,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 69,
                    "end": 84,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 72,
                      "end": 84,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 74,
                          "end": 83,
                          "argument": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 82,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "get",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 117,
                  "end": 137,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 122,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 122,
                    "end": 137,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 125,
                      "end": 137,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 127,
                          "end": 136,
                          "argument": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 135,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "get",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 209,
                  "end": 321,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 213,
                    "name": "dist",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 215,
                    "end": 321,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 227,
                      "end": 321,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 232,
                          "end": 258,
                          "argument": {
                            "type": "CallExpression",
                            "start": 239,
                            "end": 257,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 239,
                              "end": 248,
                              "object": {
                                "type": "Identifier",
                                "start": 239,
                                "end": 243,
                                "name": "Math",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 244,
                                "end": 248,
                                "name": "sqrt",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "start": 249,
                                "end": 256,
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 249,
                                  "end": 252,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 249,
                                    "end": 250,
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 251,
                                    "end": 252,
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "operator": "+",
                                "right": {
                                  "type": "BinaryExpression",
                                  "start": 253,
                                  "end": 256,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 253,
                                    "end": 254,
                                    "name": "y",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 255,
                                    "end": 256,
                                    "name": "y",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
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
      "start": 328,
      "end": 377,
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 335,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 336,
        "end": 377,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 342,
            "end": 375,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 346,
              "end": 347,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 347,
              "end": 375,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 350,
                "end": 375,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 360,
                    "end": 369,
                    "argument": {
                      "type": "Literal",
                      "start": 367,
                      "end": 368,
                      "value": 0,
                      "raw": "0"
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 379,
      "end": 409,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 391,
        "name": "foo",
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
          "start": 392,
          "end": 404,
          "name": "test",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 396,
            "end": 404,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 398,
              "end": 404
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 406,
        "end": 409,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 411,
      "end": 422,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 415,
          "end": 421,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 421,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 416,
              "end": 421,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 418,
                "end": 421
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 423,
      "end": 434,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 433,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 433,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 433,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 430,
                "end": 433
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 436,
      "end": 443,
      "expression": {
        "type": "CallExpression",
        "start": 436,
        "end": 442,
        "callee": {
          "type": "Identifier",
          "start": 436,
          "end": 439,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 440,
            "end": 441,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 444,
      "end": 455,
      "expression": {
        "type": "CallExpression",
        "start": 444,
        "end": 454,
        "callee": {
          "type": "Identifier",
          "start": 444,
          "end": 447,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 448,
            "end": 453,
            "left": {
              "type": "Identifier",
              "start": 448,
              "end": 449,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
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
