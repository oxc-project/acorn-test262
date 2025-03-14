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
      "async": false,
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
              "raw": "null",
              "value": null
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
        "end": 11,
        "decorators": [],
        "name": "f6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 29,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 29,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 18,
              "end": 29,
              "params": [
                {
                  "type": "Identifier",
                  "start": 19,
                  "end": 23,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 53,
      "end": 77,
      "expression": {
        "type": "CallExpression",
        "start": 53,
        "end": 76,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 56,
            "end": 75,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 61,
              "end": 75,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 64,
                  "end": 74,
                  "async": false,
                  "body": {
                    "type": "AssignmentExpression",
                    "start": 69,
                    "end": 74,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 61,
                "end": 63,
                "decorators": [],
                "name": "f6",
                "optional": false
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 53,
          "end": 55,
          "decorators": [],
          "name": "f6",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
