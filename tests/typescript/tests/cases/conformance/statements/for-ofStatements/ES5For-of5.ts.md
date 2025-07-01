__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "_a",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 11
            },
            "init": null,
            "definite": false,
            "start": 9,
            "end": 11
          }
        ],
        "declare": false,
        "start": 5,
        "end": 11
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 15,
        "end": 17
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 30
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 35
                },
                "definite": false,
                "start": 29,
                "end": 35
              }
            ],
            "declare": false,
            "start": 25,
            "end": 36
          }
        ],
        "start": 19,
        "end": 38
      },
      "start": 0,
      "end": 38
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 38
}
```
