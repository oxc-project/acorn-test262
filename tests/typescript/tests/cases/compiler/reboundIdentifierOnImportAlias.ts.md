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
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 42,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 17,
            "end": 40,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 24,
              "end": 40,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 28,
                  "end": 39,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 29,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 32,
                    "end": 39,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 43,
      "end": 94,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 67,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 70,
                  "end": 71,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 77,
            "end": 92,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 88,
              "end": 91,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "decorators": [],
        "name": "Bar",
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
