__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 5
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "init": null,
          "definite": false,
          "start": 7,
          "end": 8
        }
      ],
      "declare": false,
      "start": 0,
      "end": 9
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 17
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 20
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 21
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 25,
        "end": 27
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 29,
        "end": 32
      },
      "start": 10,
      "end": 32
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 32
}
```
