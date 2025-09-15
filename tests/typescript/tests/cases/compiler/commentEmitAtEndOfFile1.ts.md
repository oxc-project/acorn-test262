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
        "start": 40,
        "end": 43
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
              "start": 63,
              "end": 66
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
              "start": 69,
              "end": 72
            },
            "expression": false,
            "start": 54,
            "end": 72
          }
        ],
        "start": 44,
        "end": 74
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 30,
      "end": 74
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "empty",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 101
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 102,
        "end": 105
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 86,
      "end": 105
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 8,
  "end": 116
}
```
