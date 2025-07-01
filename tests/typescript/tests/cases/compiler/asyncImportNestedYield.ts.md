__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 19
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ImportExpression",
              "source": {
                "type": "MemberExpression",
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "ImportExpression",
                    "source": {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 55,
                        "end": 60
                      },
                      "start": 49,
                      "end": 60
                    },
                    "options": null,
                    "phase": null,
                    "start": 42,
                    "end": 61
                  },
                  "start": 36,
                  "end": 61
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "default",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 70
                },
                "optional": false,
                "computed": false,
                "start": 35,
                "end": 70
              },
              "options": null,
              "phase": null,
              "start": 28,
              "end": 71
            },
            "directive": null,
            "start": 28,
            "end": 72
          }
        ],
        "start": 22,
        "end": 74
      },
      "expression": false,
      "start": 0,
      "end": 74
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 74
}
```
