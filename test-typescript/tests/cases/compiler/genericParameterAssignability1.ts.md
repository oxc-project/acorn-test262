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
      "end": 39,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 39,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 25,
            "end": 37,
            "argument": {
              "type": "Literal",
              "start": 32,
              "end": 36,
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
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 18,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 18,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 17,
              "end": 18,
              "typeName": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
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
        "start": 19,
        "end": 22,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 21,
          "end": 22,
          "typeName": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
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
      "start": 40,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 62,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 48,
            "end": 62,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
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
                "start": 52,
                "end": 56,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 56,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 55,
                    "end": 56,
                    "typeName": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 56,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 48,
              "end": 51,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 49,
                  "end": 50,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 50,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 64,
      "end": 70,
      "expression": {
        "type": "AssignmentExpression",
        "start": 64,
        "end": 69,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 64,
          "end": 65,
          "decorators": [],
          "name": "r",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 68,
          "end": 69,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
