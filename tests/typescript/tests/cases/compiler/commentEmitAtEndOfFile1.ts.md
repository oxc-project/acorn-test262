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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 16,
            "end": 18
          },
          "definite": false,
          "start": 12,
          "end": 18
        }
      ],
      "declare": false,
      "start": 8,
      "end": 18
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 40
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 63
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 66,
              "end": 69
            },
            "expression": false,
            "start": 51,
            "end": 69
          }
        ],
        "start": 41,
        "end": 71
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 30,
      "end": 71
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "empty",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 95
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 96,
        "end": 99
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 83,
      "end": 99
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 8,
  "end": 110
}
```
