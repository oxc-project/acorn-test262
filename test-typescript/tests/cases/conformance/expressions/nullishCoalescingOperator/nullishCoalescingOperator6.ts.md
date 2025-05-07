__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 49,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 46,
        "end": 49,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 24,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 24,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 18,
              "end": 24
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 26,
          "end": 44,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 26,
            "end": 29,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "LogicalExpression",
            "start": 32,
            "end": 44,
            "operator": "??",
            "left": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 39,
              "end": 44,
              "raw": "\"bar\"",
              "value": "bar",
              "regex": null,
              "bigint": null
            }
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
