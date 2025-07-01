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
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 14,
                    "end": 20
                  },
                  "start": 12,
                  "end": 20
                },
                "start": 10,
                "end": 20
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 39
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 22,
                "end": 39
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
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 70
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 73,
                        "end": 75
                      },
                      "definite": false,
                      "start": 68,
                      "end": 75
                    }
                  ],
                  "declare": false,
                  "start": 64,
                  "end": 76
                }
              ],
              "start": 44,
              "end": 90
            },
            "id": null,
            "generator": false,
            "start": 9,
            "end": 90
          },
          "definite": false,
          "start": 4,
          "end": 90
        }
      ],
      "declare": false,
      "start": 0,
      "end": 90
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
            "start": 95,
            "end": 104
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
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 112,
                    "end": 118
                  },
                  "start": 110,
                  "end": 118
                },
                "start": 108,
                "end": 118
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
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 145,
                        "end": 147
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 150,
                        "end": 152
                      },
                      "definite": false,
                      "start": 145,
                      "end": 152
                    }
                  ],
                  "declare": false,
                  "start": 141,
                  "end": 153
                }
              ],
              "start": 123,
              "end": 167
            },
            "id": null,
            "generator": false,
            "start": 107,
            "end": 167
          },
          "definite": false,
          "start": 95,
          "end": 167
        }
      ],
      "declare": false,
      "start": 91,
      "end": 167
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
            "start": 173,
            "end": 175
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
                  "start": 182,
                  "end": 196
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 179,
                "end": 196
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
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 213
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 216,
                        "end": 218
                      },
                      "definite": false,
                      "start": 211,
                      "end": 218
                    }
                  ],
                  "declare": false,
                  "start": 207,
                  "end": 219
                }
              ],
              "start": 201,
              "end": 233
            },
            "id": null,
            "generator": false,
            "start": 178,
            "end": 233
          },
          "definite": false,
          "start": 173,
          "end": 233
        }
      ],
      "declare": false,
      "start": 169,
      "end": 233
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
            "start": 238,
            "end": 247
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
                        "name": "_i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 266,
                        "end": 268
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 271,
                        "end": 273
                      },
                      "definite": false,
                      "start": 266,
                      "end": 273
                    }
                  ],
                  "declare": false,
                  "start": 262,
                  "end": 274
                }
              ],
              "start": 256,
              "end": 288
            },
            "id": null,
            "generator": false,
            "start": 250,
            "end": 288
          },
          "definite": false,
          "start": 238,
          "end": 288
        }
      ],
      "declare": false,
      "start": 234,
      "end": 288
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 288
}
```
