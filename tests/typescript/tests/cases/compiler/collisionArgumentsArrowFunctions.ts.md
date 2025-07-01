__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 13,
                    "end": 19
                  },
                  "start": 11,
                  "end": 19
                },
                "start": 10,
                "end": 19
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 24,
                  "end": 33
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 21,
                "end": 33
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 80,
                              "end": 83
                            },
                            "start": 80,
                            "end": 85
                          },
                          "start": 78,
                          "end": 85
                        },
                        "start": 69,
                        "end": 85
                      },
                      "init": null,
                      "definite": false,
                      "start": 69,
                      "end": 85
                    }
                  ],
                  "declare": false,
                  "start": 65,
                  "end": 86
                }
              ],
              "start": 38,
              "end": 100
            },
            "id": null,
            "generator": false,
            "start": 9,
            "end": 100
          },
          "definite": false,
          "start": 4,
          "end": 100
        }
      ],
      "declare": false,
      "start": 0,
      "end": 100
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f12",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 108
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 123,
                    "end": 129
                  },
                  "start": 121,
                  "end": 129
                },
                "start": 112,
                "end": 129
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 138
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 131,
                "end": 138
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 174,
                        "end": 183
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 186,
                        "end": 188
                      },
                      "definite": false,
                      "start": 174,
                      "end": 188
                    }
                  ],
                  "declare": false,
                  "start": 170,
                  "end": 189
                }
              ],
              "start": 143,
              "end": 203
            },
            "id": null,
            "generator": false,
            "start": 111,
            "end": 203
          },
          "definite": false,
          "start": 105,
          "end": 203
        }
      ],
      "declare": false,
      "start": 101,
      "end": 203
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1NoError",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 217
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 232,
                    "end": 238
                  },
                  "start": 230,
                  "end": 238
                },
                "start": 221,
                "end": 238
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 274
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 277,
                        "end": 279
                      },
                      "definite": false,
                      "start": 265,
                      "end": 279
                    }
                  ],
                  "declare": false,
                  "start": 261,
                  "end": 280
                }
              ],
              "start": 243,
              "end": 294
            },
            "id": null,
            "generator": false,
            "start": 220,
            "end": 294
          },
          "definite": false,
          "start": 208,
          "end": 294
        }
      ],
      "declare": false,
      "start": 204,
      "end": 294
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 302
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 323
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 306,
                "end": 323
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 338,
                        "end": 347
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 350,
                        "end": 352
                      },
                      "definite": false,
                      "start": 338,
                      "end": 352
                    }
                  ],
                  "declare": false,
                  "start": 334,
                  "end": 353
                }
              ],
              "start": 328,
              "end": 367
            },
            "id": null,
            "generator": false,
            "start": 305,
            "end": 367
          },
          "definite": false,
          "start": 300,
          "end": 367
        }
      ],
      "declare": false,
      "start": 296,
      "end": 367
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2NoError",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 381
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 400,
                        "end": 409
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 412,
                        "end": 414
                      },
                      "definite": false,
                      "start": 400,
                      "end": 414
                    }
                  ],
                  "declare": false,
                  "start": 396,
                  "end": 415
                }
              ],
              "start": 390,
              "end": 429
            },
            "id": null,
            "generator": false,
            "start": 384,
            "end": 429
          },
          "definite": false,
          "start": 372,
          "end": 429
        }
      ],
      "declare": false,
      "start": 368,
      "end": 429
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 429
}
```
