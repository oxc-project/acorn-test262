__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 67,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 67,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 26,
            "end": 40,
            "body": {
              "type": "TSModuleBlock",
              "start": 38,
              "end": 40,
              "body": []
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "namespace"
          },
          {
            "type": "VariableDeclaration",
            "start": 44,
            "end": 50,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 48,
                "end": 49,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "TSExportAssignment",
            "start": 54,
            "end": 65,
            "expression": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"foo\"",
        "value": "foo"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 69,
      "end": 113,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 90,
        "end": 113,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 96,
            "end": 111,
            "kind": "module",
            "body": {
              "type": "TSModuleBlock",
              "start": 109,
              "end": 111,
              "body": []
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Literal",
              "start": 103,
              "end": 108,
              "raw": "\"foo\"",
              "value": "foo"
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 84,
        "end": 89,
        "raw": "\"bar\"",
        "value": "bar"
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
