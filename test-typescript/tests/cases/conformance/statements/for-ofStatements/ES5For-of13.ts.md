__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 49,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 14,
        "end": 29,
        "elements": [
          {
            "type": "Literal",
            "start": 15,
            "end": 18,
            "value": "a",
            "raw": "'a'"
          },
          {
            "type": "Literal",
            "start": 20,
            "end": 23,
            "value": "b",
            "raw": "'b'"
          },
          {
            "type": "Literal",
            "start": 25,
            "end": 28,
            "value": "c",
            "raw": "'c'"
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 49,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 47,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 41,
                "end": 46,
                "id": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
