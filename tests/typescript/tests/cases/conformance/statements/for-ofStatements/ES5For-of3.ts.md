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
      "body": {
        "type": "VariableDeclaration",
        "start": 35,
        "end": 45,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 44,
            "definite": false,
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
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
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
            "raw": "'a'",
            "value": "a"
          },
          {
            "type": "Literal",
            "start": 20,
            "end": 23,
            "raw": "'b'",
            "value": "b"
          },
          {
            "type": "Literal",
            "start": 25,
            "end": 28,
            "raw": "'c'",
            "value": "c"
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
