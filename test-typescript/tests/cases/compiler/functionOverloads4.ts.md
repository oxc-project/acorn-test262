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
      "end": 22,
      "async": false,
      "body": null,
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
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 21,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 15,
          "end": 21
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 59,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 59,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 47,
            "end": 57,
            "argument": {
              "type": "Literal",
              "start": 54,
              "end": 57,
              "raw": "\"a\"",
              "value": "a",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 37,
        "end": 44,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 38,
          "end": 44
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
