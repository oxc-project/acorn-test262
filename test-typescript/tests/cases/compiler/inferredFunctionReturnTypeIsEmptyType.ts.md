__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 99,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 97,
        "body": [
          {
            "type": "IfStatement",
            "start": 21,
            "end": 95,
            "test": {
              "type": "Literal",
              "start": 25,
              "end": 29,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 31,
              "end": 57,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 41,
                  "end": 51,
                  "argument": {
                    "type": "Literal",
                    "start": 48,
                    "end": 50,
                    "value": 42,
                    "raw": "42"
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 67,
              "end": 95,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 77,
                  "end": 89,
                  "argument": {
                    "type": "Literal",
                    "start": 84,
                    "end": 88,
                    "value": "42",
                    "raw": "\"42\""
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "EmptyStatement",
      "start": 97,
      "end": 98
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
