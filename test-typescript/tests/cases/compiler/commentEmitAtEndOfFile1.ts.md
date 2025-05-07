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
          "definite": false,
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
            "raw": "''",
            "value": "",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 30,
      "end": 71,
      "body": {
        "type": "TSModuleBlock",
        "start": 41,
        "end": 71,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 51,
            "end": 69,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 66,
              "end": 69,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 60,
              "end": 63,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 83,
      "end": 99,
      "body": {
        "type": "TSModuleBlock",
        "start": 96,
        "end": 99,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 95,
        "decorators": [],
        "name": "empty",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
