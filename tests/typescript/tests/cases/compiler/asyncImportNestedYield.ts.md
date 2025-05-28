__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 19,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 74,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 28,
            "end": 72,
            "expression": {
              "type": "ImportExpression",
              "start": 28,
              "end": 71,
              "source": {
                "type": "MemberExpression",
                "start": 35,
                "end": 70,
                "object": {
                  "type": "AwaitExpression",
                  "start": 36,
                  "end": 61,
                  "argument": {
                    "type": "ImportExpression",
                    "start": 42,
                    "end": 61,
                    "source": {
                      "type": "YieldExpression",
                      "start": 49,
                      "end": 60,
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "start": 55,
                        "end": 60,
                        "value": "foo",
                        "raw": "\"foo\""
                      }
                    },
                    "options": null,
                    "phase": null
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 70,
                  "decorators": [],
                  "name": "default",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "options": null,
              "phase": null
            },
            "directive": null
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
