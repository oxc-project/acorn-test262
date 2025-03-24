__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 63,
  "end": 240,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 63,
      "end": 142,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 86,
        "decorators": [],
        "name": "filter",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 90,
          "end": 137,
          "decorators": [],
          "name": "predicate",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 99,
            "end": 137,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 101,
              "end": 137,
              "params": [
                {
                  "type": "Identifier",
                  "start": 102,
                  "end": 110,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 109,
                      "end": 110,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 112,
                  "end": 125,
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 117,
                    "end": 125,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 119,
                      "end": 125
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 127,
                "end": 137,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 130,
                  "end": 137
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 138,
        "end": 141,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 140,
          "end": 141,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 86,
        "end": 89,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 87,
            "end": 88,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 184,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 153,
            "end": 184,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 160,
                "end": 183,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 179,
                  "end": 183,
                  "raw": "true",
                  "value": true
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 161,
                    "end": 174,
                    "decorators": [],
                    "name": "pose",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 166,
                      "end": 174,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 168,
                        "end": 174
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 153,
              "end": 159,
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 186,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 239,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 193,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 196,
            "end": 239,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 203,
                "end": 238,
                "async": false,
                "body": {
                  "type": "Literal",
                  "start": 234,
                  "end": 238,
                  "raw": "true",
                  "value": true
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 204,
                    "end": 217,
                    "decorators": [],
                    "name": "pose",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 209,
                      "end": 217,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 211,
                        "end": 217
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 219,
                    "end": 229,
                    "decorators": [],
                    "name": "_",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 221,
                      "end": 229,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 223,
                        "end": 229
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 196,
              "end": 202,
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
