__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 10,
            "end": 11
          },
          "definite": false,
          "start": 6,
          "end": 11
        }
      ],
      "declare": false,
      "start": 0,
      "end": 12
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 13
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 48
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 51,
              "end": 52
            },
            "start": 47,
            "end": 52
          },
          "definite": false,
          "start": 43,
          "end": 52
        }
      ],
      "declare": false,
      "start": 37,
      "end": 53
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 37,
  "end": 53
}
```
