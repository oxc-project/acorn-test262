__ESTREE_TEST__:PASS:
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 100,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 9,
            "end": 100,
            "expression": false,
            "async": false,
            "typeParameters": null,
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
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 33,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 38,
              "end": 100,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 65,
                  "end": 86,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 69,
                      "end": 85,
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
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
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
      "type": "VariableDeclaration",
      "start": 101,
      "end": 203,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 203,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 108,
            "decorators": [],
            "name": "f12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 111,
            "end": 203,
            "expression": false,
            "async": false,
            "typeParameters": null,
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
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 138,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 143,
              "end": 203,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 170,
                  "end": 189,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 174,
                      "end": 188,
                      "id": {
                        "type": "Identifier",
                        "start": 174,
                        "end": 183,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 186,
                        "end": 188,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
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
      "type": "VariableDeclaration",
      "start": 204,
      "end": 294,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 294,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 217,
            "decorators": [],
            "name": "f1NoError",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 220,
            "end": 294,
            "expression": false,
            "async": false,
            "typeParameters": null,
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
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 243,
              "end": 294,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 261,
                  "end": 280,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 265,
                      "end": 279,
                      "id": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 274,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 277,
                        "end": 279,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
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
      "type": "VariableDeclaration",
      "start": 296,
      "end": 367,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 367,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 302,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 305,
            "end": 367,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 306,
                "end": 323,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 323,
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 328,
              "end": 367,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 334,
                  "end": 353,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 338,
                      "end": 352,
                      "id": {
                        "type": "Identifier",
                        "start": 338,
                        "end": 347,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 350,
                        "end": 352,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
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
      "type": "VariableDeclaration",
      "start": 368,
      "end": 429,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 429,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 381,
            "decorators": [],
            "name": "f2NoError",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 384,
            "end": 429,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 390,
              "end": 429,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 396,
                  "end": 415,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 400,
                      "end": 414,
                      "id": {
                        "type": "Identifier",
                        "start": 400,
                        "end": 409,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 412,
                        "end": 414,
                        "value": 10,
                        "raw": "10"
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
