__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 42,
        "body": [
          {
            "type": "TryStatement",
            "start": 13,
            "end": 40,
            "block": {
              "type": "BlockStatement",
              "start": 17,
              "end": 22,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 25,
              "end": 40,
              "param": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 40,
                "body": []
              }
            },
            "finalizer": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
