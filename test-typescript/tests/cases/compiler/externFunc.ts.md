__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 43,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 25,
        "decorators": [],
        "name": "parseInt",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 26,
          "end": 34,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 34,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 28,
              "end": 34
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 35,
        "end": 42,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 36,
          "end": 42
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 59,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 45,
        "end": 58,
        "arguments": [
          {
            "type": "Literal",
            "start": 54,
            "end": 57,
            "raw": "\"2\"",
            "value": "2",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 45,
          "end": 53,
          "decorators": [],
          "name": "parseInt",
          "optional": false,
          "typeAnnotation": null
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
