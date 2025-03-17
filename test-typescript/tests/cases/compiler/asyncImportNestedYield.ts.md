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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
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
                    "options": null
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 70,
                  "name": "default",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "options": null
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
