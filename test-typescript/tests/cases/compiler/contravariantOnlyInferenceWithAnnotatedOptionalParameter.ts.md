__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 63,
  "end": 241,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 63,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 86,
        "name": "filter",
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
          "start": 90,
          "end": 137,
          "name": "predicate",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 99,
            "end": 137,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 101,
              "end": 137,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 102,
                  "end": 110,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 109,
                      "end": 110,
                      "typeName": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 112,
                  "end": 125,
                  "name": "index",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 117,
                    "end": 125,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 119,
                      "end": 125
                    }
                  },
                  "decorators": [],
                  "optional": false
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 86,
        "end": 89,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 87,
            "end": 88,
            "name": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 138,
        "end": 141,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 140,
          "end": 141,
          "typeName": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 153,
            "end": 184,
            "callee": {
              "type": "Identifier",
              "start": 153,
              "end": 159,
              "name": "filter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 160,
                "end": 183,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 161,
                    "end": 174,
                    "name": "pose",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 166,
                      "end": 174,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 168,
                        "end": 174
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "body": {
                  "type": "Literal",
                  "start": 179,
                  "end": 183,
                  "value": true,
                  "raw": "true"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 193,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 196,
            "end": 239,
            "callee": {
              "type": "Identifier",
              "start": 196,
              "end": 202,
              "name": "filter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 203,
                "end": 238,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 204,
                    "end": 217,
                    "name": "pose",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 209,
                      "end": 217,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 211,
                        "end": 217
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  {
                    "type": "Identifier",
                    "start": 219,
                    "end": 229,
                    "name": "_",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 221,
                      "end": 229,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 223,
                        "end": 229
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "body": {
                  "type": "Literal",
                  "start": 234,
                  "end": 238,
                  "value": true,
                  "raw": "true"
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
