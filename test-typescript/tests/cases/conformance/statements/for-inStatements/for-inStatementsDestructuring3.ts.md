__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 9,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 5,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 7,
          "end": 8,
          "id": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForInStatement",
      "start": 10,
      "end": 32,
      "left": {
        "type": "ArrayPattern",
        "start": 15,
        "end": 21,
        "elements": [
          {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "decorators": [],
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 25,
        "end": 27,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 32,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
