__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "parseInt",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 25
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 28,
              "end": 34
            },
            "start": 27,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 36,
          "end": 42
        },
        "start": 35,
        "end": 42
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "parseInt",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 53
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "2",
            "raw": "\"2\"",
            "start": 54,
            "end": 57
          }
        ],
        "optional": false,
        "start": 45,
        "end": 58
      },
      "directive": null,
      "start": 45,
      "end": 59
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 59
}
```
