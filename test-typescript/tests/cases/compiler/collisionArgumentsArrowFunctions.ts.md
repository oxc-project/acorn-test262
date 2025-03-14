collisionArgumentsArrowFunctions.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 429,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 100,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "f1",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 9,
            "end": 100,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 38,
              "end": 100,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 65,
                  "end": 86,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 69,
                      "end": 85,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 85,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 78,
                          "end": 85,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 80,
                            "end": 85,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 80,
                              "end": 83
                            }
                          }
                        }
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 10,
                "end": 19,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 11,
                  "end": 19,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 13,
                    "end": 19
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 21,
                "end": 33,
                "argument": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 33,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 203,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 108,
            "decorators": [],
            "name": "f12",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 111,
            "end": 203,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 143,
              "end": 203,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 170,
                  "end": 189,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 174,
                      "end": 188,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 174,
                        "end": 183,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 186,
                        "end": 188,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 112,
                "end": 129,
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 121,
                  "end": 129,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 123,
                    "end": 129
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 131,
                "end": 138,
                "argument": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 138,
                  "decorators": [],
                  "name": "rest",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 294,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 294,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 217,
            "decorators": [],
            "name": "f1NoError",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 220,
            "end": 294,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 243,
              "end": 294,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 261,
                  "end": 280,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 265,
                      "end": 279,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 274,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 277,
                        "end": 279,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 221,
                "end": 238,
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 230,
                  "end": 238,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 232,
                    "end": 238
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 296,
      "end": 367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 367,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 302,
            "decorators": [],
            "name": "f2",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 305,
            "end": 367,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 328,
              "end": 367,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 334,
                  "end": 353,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 338,
                      "end": 352,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 338,
                        "end": 347,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 350,
                        "end": 352,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "start": 306,
                "end": 323,
                "argument": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 323,
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 368,
      "end": 429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 429,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 381,
            "decorators": [],
            "name": "f2NoError",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 384,
            "end": 429,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 390,
              "end": 429,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 396,
                  "end": 415,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 400,
                      "end": 414,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 400,
                        "end": 409,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 412,
                        "end": 414,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
