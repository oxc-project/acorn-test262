unusedSingleParameterInFunctionExpression.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 60,
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
            "end": 60,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 36,
              "end": 60,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 42,
                  "end": 58,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 46,
                      "end": 57,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 52,
                        "decorators": [],
                        "name": "unused",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 55,
                        "end": 57,
                        "raw": "20",
                        "value": 20
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
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
