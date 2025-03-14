__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 71,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 54,
        "end": 71,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 60,
            "end": 69,
            "argument": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "p",
              "optional": false
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
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 45,
          "end": 49,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 46,
            "end": 49,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 48,
              "end": 49,
              "typeName": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
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
        "start": 50,
        "end": 53,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 52,
          "end": 53,
          "typeName": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 43,
            "const": false,
            "constraint": {
              "type": "TSFunctionType",
              "start": 21,
              "end": 43,
              "params": [
                {
                  "type": "Identifier",
                  "start": 22,
                  "end": 32,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 32,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 26,
                      "end": 32
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 34,
                "end": 43,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 37,
                  "end": 43
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
      "type": "VariableDeclaration",
      "start": 73,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 90,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 81,
            "end": 90,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 83,
                "end": 89,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 83,
                    "end": 84,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
