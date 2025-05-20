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
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 62,
        "end": 90,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 83,
            "end": 89,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 62,
          "end": 82,
          "computed": false,
          "object": {
            "type": "ImportExpression",
            "start": 62,
            "end": 77,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 69,
              "end": 76,
              "raw": "\"./foo\"",
              "value": "./foo"
            },
            "phase": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 78,
            "end": 82,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
