__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
