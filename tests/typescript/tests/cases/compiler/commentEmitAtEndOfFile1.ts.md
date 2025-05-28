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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 66,
              "end": 69,
              "body": []
            },
            "expression": false
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
        "decorators": [],
        "name": "empty",
        "optional": false,
        "typeAnnotation": null
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
