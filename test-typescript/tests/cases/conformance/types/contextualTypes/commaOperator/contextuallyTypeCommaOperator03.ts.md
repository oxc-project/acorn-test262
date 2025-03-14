__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 28,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 28,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 7,
                "end": 28,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 8,
                    "end": 17,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 9,
                      "end": 17,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 11,
                        "end": 17
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 19,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 52,
      "expression": {
        "type": "AssignmentExpression",
        "start": 31,
        "end": 51,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 31,
          "end": 32,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "SequenceExpression",
          "start": 36,
          "end": 50,
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "start": 36,
              "end": 42,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              ]
            },
            {
              "type": "ArrowFunctionExpression",
              "start": 44,
              "end": 50,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 49,
                "end": 50,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              ]
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
