__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 36,
  "end": 61,
  "body": [
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 36,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 59,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 48,
  "end": 99,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 48,
      "end": 98,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 69,
        "end": 98,
        "body": [
          {
            "type": "TSNamespaceExportDeclaration",
            "start": 72,
            "end": 96,
            "id": {
              "type": "Identifier",
              "start": 92,
              "end": 95,
              "decorators": [],
              "name": "Bar",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 63,
        "end": 68,
        "raw": "\"Foo\"",
        "value": "Foo"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
'export' is not allowed as a variable declaration name.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 81,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 80,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 40,
        "end": 80,
        "body": {
          "type": "TSModuleBlock",
          "start": 52,
          "end": 80,
          "body": [
            {
              "type": "TSNamespaceExportDeclaration",
              "start": 55,
              "end": 78,
              "id": {
                "type": "Identifier",
                "start": 75,
                "end": 77,
                "decorators": [],
                "name": "C1",
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 50,
          "end": 51,
          "decorators": [],
          "name": "B",
          "optional": false
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 51,
  "end": 90,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 64,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 58,
        "end": 64,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 62,
            "end": 63,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 65,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 87,
        "decorators": [],
        "name": "C2",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
