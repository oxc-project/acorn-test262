__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 45,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
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
        "type": "VariableDeclaration",
        "start": 35,
        "end": 45,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 44,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
