__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 114,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 114,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 83,
            "end": 112,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 107,
              "end": 112,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": {
              "type": "Identifier",
              "start": 92,
              "end": 95,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 96,
                "end": 105,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "YieldExpression",
                  "start": 100,
                  "end": 105,
                  "argument": null,
                  "delegate": false
                },
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
