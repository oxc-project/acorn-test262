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
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 99,
        "body": [
          {
            "type": "IfStatement",
            "start": 28,
            "end": 97,
            "alternate": {
              "type": "BlockStatement",
              "start": 73,
              "end": 97,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 83,
                  "end": 91,
                  "directive": null,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 83,
                    "end": 90,
                    "argument": {
                      "type": "Literal",
                      "start": 89,
                      "end": 90,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
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
            "test": {
              "type": "Literal",
              "start": 32,
              "end": 36,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
