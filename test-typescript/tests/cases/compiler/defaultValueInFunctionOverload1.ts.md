__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 29,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 13,
          "end": 27,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 13,
            "end": 22,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 14,
              "end": 22,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 16,
                "end": 22
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 25,
            "end": 27,
            "raw": "''",
            "value": ""
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 54,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 54,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 42,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 43,
          "end": 49,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 47,
            "end": 49,
            "raw": "''",
            "value": ""
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
