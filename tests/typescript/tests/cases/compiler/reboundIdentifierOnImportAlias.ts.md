__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 31,
                    "end": 32
                  },
                  "init": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 35,
                    "end": 42
                  },
                  "definite": false,
                  "start": 31,
                  "end": 42
                }
              ],
              "declare": false,
              "start": 27,
              "end": 43
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 20,
            "end": 43
          }
        ],
        "start": 14,
        "end": 45
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 59
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 73
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 76,
                  "end": 77
                },
                "definite": false,
                "start": 70,
                "end": 77
              }
            ],
            "declare": false,
            "start": 66,
            "end": 78
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 97
            },
            "importKind": "value",
            "start": 83,
            "end": 98
          }
        ],
        "start": 60,
        "end": 100
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 46,
      "end": 100
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 100
}
```
