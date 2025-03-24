__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 57,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 20,
            "end": 55,
            "id": {
              "type": "Identifier",
              "start": 29,
              "end": 32,
              "name": "bar",
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
              "start": 35,
              "end": 55,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 41,
                  "end": 51,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 41,
                    "end": 50,
                    "delegate": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 50,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
