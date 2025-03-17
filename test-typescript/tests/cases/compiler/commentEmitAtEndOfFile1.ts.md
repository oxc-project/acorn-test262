__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 8,
  "end": 110,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 8,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 16,
            "end": 18,
            "value": "",
            "raw": "''"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 30,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 41,
        "end": 71,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 51,
            "end": 69,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 63,
              "name": "bar",
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
              "start": 66,
              "end": 69,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 83,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 95,
        "name": "empty",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 96,
        "end": 99,
        "body": []
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
