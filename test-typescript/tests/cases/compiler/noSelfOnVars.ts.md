__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 58,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 58,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 21,
            "end": 39,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 36,
              "end": 39,
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
              "name": "bar",
              "optional": false
            },
            "params": []
          },
          {
            "type": "VariableDeclaration",
            "start": 44,
            "end": 56,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 48,
                "end": 55,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 55,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
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
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
