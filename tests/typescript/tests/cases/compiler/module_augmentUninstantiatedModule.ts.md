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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "foo",
        "raw": "\"foo\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 67,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 26,
            "end": 40,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 38,
              "end": 40,
              "body": []
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          },
          {
            "type": "VariableDeclaration",
            "start": 44,
            "end": 50,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 48,
                "end": 49,
                "id": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
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
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 69,
      "end": 113,
      "id": {
        "type": "Literal",
        "start": 84,
        "end": 89,
        "value": "bar",
        "raw": "\"bar\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 90,
        "end": 113,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 96,
            "end": 111,
            "id": {
              "type": "Literal",
              "start": 103,
              "end": 108,
              "value": "foo",
              "raw": "\"foo\""
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 109,
              "end": 111,
              "body": []
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
