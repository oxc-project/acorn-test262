__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 25,
              "end": 29
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 48,
                    "end": 50
                  },
                  "start": 41,
                  "end": 51
                }
              ],
              "start": 31,
              "end": 57
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "42",
                    "raw": "\"42\"",
                    "start": 84,
                    "end": 88
                  },
                  "start": 77,
                  "end": 89
                }
              ],
              "start": 67,
              "end": 95
            },
            "start": 21,
            "end": 95
          }
        ],
        "start": 15,
        "end": 97
      },
      "expression": false,
      "start": 0,
      "end": 97
    },
    {
      "type": "EmptyStatement",
      "start": 97,
      "end": 98
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 98
}
```
