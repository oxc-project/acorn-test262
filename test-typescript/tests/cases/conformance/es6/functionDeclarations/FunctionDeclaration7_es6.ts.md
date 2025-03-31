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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "bar",
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
        "start": 15,
        "end": 114,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 83,
            "end": 112,
            "id": {
              "type": "Identifier",
              "start": 92,
              "end": 95,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": true,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 96,
                "end": 105,
                "left": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "YieldExpression",
                  "start": 100,
                  "end": 105,
                  "delegate": false,
                  "argument": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 107,
              "end": 112,
              "body": []
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
