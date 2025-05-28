__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 99,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 99,
        "body": [
          {
            "type": "IfStatement",
            "start": 28,
            "end": 97,
            "test": {
              "type": "Literal",
              "start": 32,
              "end": 36,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 38,
              "end": 63,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 48,
                  "end": 57,
                  "label": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 73,
              "end": 97,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 83,
                  "end": 91,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 83,
                    "end": 90,
                    "argument": {
                      "type": "Literal",
                      "start": 89,
                      "end": 90,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
