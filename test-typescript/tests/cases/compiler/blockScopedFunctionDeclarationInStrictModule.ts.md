__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "IfStatement",
      "start": 0,
      "end": 53,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 10,
        "end": 53,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 16,
            "end": 34,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 31,
              "end": 34,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": []
          },
          {
            "type": "ExpressionStatement",
            "start": 39,
            "end": 45,
            "expression": {
              "type": "CallExpression",
              "start": 39,
              "end": 44,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 39,
                "end": 42,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 4,
        "end": 8,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 55,
      "end": 68,
      "expression": {
        "type": "Identifier",
        "start": 64,
        "end": 67,
        "decorators": [],
        "name": "foo",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
