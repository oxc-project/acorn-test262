__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 15,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 38,
              "end": 40
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 26,
            "end": 40
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 49
                },
                "init": null,
                "definite": false,
                "start": 48,
                "end": 49
              }
            ],
            "declare": false,
            "start": 44,
            "end": 50
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 64
            },
            "start": 54,
            "end": 65
          }
        ],
        "start": 21,
        "end": 67
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 67
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "bar",
        "raw": "\"bar\"",
        "start": 84,
        "end": 89
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 103,
              "end": 108
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 109,
              "end": 111
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 96,
            "end": 111
          }
        ],
        "start": 90,
        "end": 113
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 69,
      "end": 113
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 113
}
```
