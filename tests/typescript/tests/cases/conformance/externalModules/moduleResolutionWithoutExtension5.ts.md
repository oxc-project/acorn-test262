__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./foo",
              "raw": "\"./foo\"",
              "start": 69,
              "end": 76
            },
            "options": null,
            "phase": null,
            "start": 62,
            "end": 77
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 82
          },
          "optional": false,
          "computed": false,
          "start": 62,
          "end": 82
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 84
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 89
            },
            "id": null,
            "generator": false,
            "start": 83,
            "end": 89
          }
        ],
        "optional": false,
        "start": 62,
        "end": 90
      },
      "directive": null,
      "start": 62,
      "end": 91
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 62,
  "end": 126
}
```
