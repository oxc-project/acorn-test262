assignmentCompatBug3.ts
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
      "async": false,
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 69,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 69,
                    "end": 84,
                    "async": false,
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
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "Property",
                  "start": 117,
                  "end": 137,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 122,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 122,
                    "end": 137,
                    "async": false,
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
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "Property",
                  "start": 209,
                  "end": 321,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 213,
                    "decorators": [],
                    "name": "dist",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 215,
                    "end": 321,
                    "async": false,
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
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "start": 249,
                                "end": 256,
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "start": 249,
                                  "end": 252,
                                  "operator": "*",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 249,
                                    "end": 250,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 251,
                                    "end": 252,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "start": 253,
                                  "end": 256,
                                  "operator": "*",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 253,
                                    "end": 254,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 255,
                                    "end": 256,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 239,
                              "end": 248,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 239,
                                "end": 243,
                                "decorators": [],
                                "name": "Math",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 244,
                                "end": 248,
                                "decorators": [],
                                "name": "sqrt",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "decorators": [],
        "name": "makePoint",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 28,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 28,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 22,
              "end": 28
            }
          }
        },
        {
          "type": "Identifier",
          "start": 30,
          "end": 39,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 39,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 33,
              "end": 39
            }
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 328,
      "end": 377,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 336,
        "end": 377,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 342,
            "end": 375,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 346,
              "end": 347,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 347,
              "end": 375,
              "async": false,
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
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 335,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 379,
      "end": 409,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 406,
        "end": 409,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 391,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 392,
          "end": 404,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 396,
            "end": 404,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 398,
              "end": 404
            }
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 421,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 416,
              "end": 421,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 418,
                "end": 421
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 433,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 433,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 430,
                "end": 433
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 436,
      "end": 443,
      "expression": {
        "type": "CallExpression",
        "start": 436,
        "end": 442,
        "arguments": [
          {
            "type": "Identifier",
            "start": 440,
            "end": 441,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 436,
          "end": 439,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 444,
      "end": 455,
      "expression": {
        "type": "CallExpression",
        "start": 444,
        "end": 454,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 448,
            "end": 453,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 448,
              "end": 449,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 444,
          "end": 447,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
