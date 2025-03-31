__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 97,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 19,
            "end": 66,
            "argument": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 65,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 65,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 49,
                    "end": 59,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 53,
                        "end": 58,
                        "id": {
                          "type": "Identifier",
                          "start": 53,
                          "end": 54,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 58,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 71,
            "end": 95,
            "expression": {
              "type": "Literal",
              "start": 72,
              "end": 93,
              "value": "harmless extra line",
              "raw": "\"harmless extra line\""
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
