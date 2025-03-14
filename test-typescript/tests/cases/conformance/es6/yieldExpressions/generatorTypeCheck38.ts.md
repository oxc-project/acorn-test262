generatorTypeCheck38.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "yield",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 11,
      "end": 66,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 25,
        "end": 66,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 31,
            "end": 39,
            "expression": {
              "type": "YieldExpression",
              "start": 31,
              "end": 38,
              "argument": {
                "type": "Literal",
                "start": 37,
                "end": 38,
                "raw": "0",
                "value": 0
              },
              "delegate": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 44,
            "end": 64,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 48,
                "end": 63,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 63,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 63,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 51,
                      "end": 63,
                      "exprName": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 63,
                        "decorators": [],
                        "name": "yield",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
