unusedMultipleParameter1InFunctionExpression.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 106,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "func",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 11,
            "end": 106,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 53,
              "end": 106,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 59,
                  "end": 75,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 63,
                      "end": 74,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 69,
                        "decorators": [],
                        "name": "unused",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 72,
                        "end": 74,
                        "raw": "20",
                        "value": 20
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 80,
                  "end": 104,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 80,
                    "end": 103,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 87,
                      "decorators": [],
                      "name": "person2",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 90,
                      "end": 103,
                      "raw": "\"Dummy value\"",
                      "value": "Dummy value"
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 20,
                "end": 34,
                "decorators": [],
                "name": "person",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 26,
                  "end": 34,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 28,
                    "end": 34
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 36,
                "end": 51,
                "decorators": [],
                "name": "person2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 43,
                  "end": 51,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 45,
                    "end": 51
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
