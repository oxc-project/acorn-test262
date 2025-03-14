parserParameterList15.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 20,
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
          "end": 18,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 17,
            "end": 18,
            "raw": "4",
            "value": 4
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 21,
      "end": 42,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 42,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 34,
          "end": 35,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 37,
          "end": 38,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
