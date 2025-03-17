__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 9,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 8,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "name": "myFn",
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
      "type": "FunctionDeclaration",
      "start": 10,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 23,
        "name": "myFn",
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
        "start": 31,
        "end": 34,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 25,
        "end": 30,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 27,
          "end": 30
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
