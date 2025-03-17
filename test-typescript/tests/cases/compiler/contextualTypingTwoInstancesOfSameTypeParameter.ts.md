__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f6",
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
          "start": 15,
          "end": 29,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 29,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 18,
              "end": 29,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 19,
                  "end": 23,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 20,
                    "end": 23,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 22,
                      "end": 23,
                      "typeName": {
                        "type": "Identifier",
                        "start": 22,
                        "end": 23,
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
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 25,
                "end": 29,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 28,
                  "end": 29,
                  "typeName": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 51,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 37,
            "end": 49,
            "argument": {
              "type": "Literal",
              "start": 44,
              "end": 48,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 53,
      "end": 77,
      "expression": {
        "type": "CallExpression",
        "start": 53,
        "end": 76,
        "callee": {
          "type": "Identifier",
          "start": 53,
          "end": 55,
          "name": "f6",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 56,
            "end": 75,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 61,
              "end": 75,
              "callee": {
                "type": "Identifier",
                "start": 61,
                "end": 63,
                "name": "f6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 64,
                  "end": 74,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "AssignmentExpression",
                    "start": 69,
                    "end": 74,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
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
