__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 42,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 40,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 24,
              "end": 40,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 28,
                  "end": 39,
                  "id": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 32,
                    "end": 39,
                    "value": "hello",
                    "raw": "\"hello\""
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 43,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 54,
        "end": 94,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 60,
            "end": 72,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 64,
                "end": 71,
                "id": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 67,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 70,
                  "end": 71,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 77,
            "end": 92,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "name": "F",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 88,
              "end": 91,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          }
        ]
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
