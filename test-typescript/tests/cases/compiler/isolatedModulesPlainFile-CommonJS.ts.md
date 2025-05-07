__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 38,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "run",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 30,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 24,
              "end": 30
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 37,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 33,
          "end": 37
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 46,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 39,
        "end": 45,
        "arguments": [
          {
            "type": "Literal",
            "start": 43,
            "end": 44,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 39,
          "end": 42,
          "decorators": [],
          "name": "run",
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
