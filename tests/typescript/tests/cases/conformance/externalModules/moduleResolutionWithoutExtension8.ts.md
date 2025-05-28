__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 126,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 91,
      "expression": {
        "type": "CallExpression",
        "start": 62,
        "end": 90,
        "callee": {
          "type": "MemberExpression",
          "start": 62,
          "end": 82,
          "object": {
            "type": "ImportExpression",
            "start": 62,
            "end": 77,
            "source": {
              "type": "Literal",
              "start": 69,
              "end": 76,
              "value": "./foo",
              "raw": "\"./foo\""
            },
            "options": null,
            "phase": null
          },
          "property": {
            "type": "Identifier",
            "start": 78,
            "end": 82,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 83,
            "end": 89,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 83,
                "end": 84,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
