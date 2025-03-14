/node_modules/pkg/import.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 62,
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 62,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 32,
            "end": 60,
            "body": {
              "type": "TSInterfaceBody",
              "start": 58,
              "end": 60,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 57,
              "decorators": [],
              "name": "ImportInterface",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 25,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    }
  ],
  "sourceType": "module"
}
```
/node_modules/pkg/require.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 63,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 63,
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 63,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 32,
            "end": 61,
            "body": {
              "type": "TSInterfaceBody",
              "start": 59,
              "end": 61,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 58,
              "decorators": [],
              "name": "RequireInterface",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 25,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    }
  ],
  "sourceType": "module"
}
```
/index.ts
```json
{
  "type": "Program",
  "start": 143,
  "end": 219,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 143,
      "end": 219,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 150,
        "end": 219,
        "body": {
          "type": "TSInterfaceBody",
          "start": 217,
          "end": 219,
          "body": []
        },
        "declare": false,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 183,
            "end": 198,
            "expression": {
              "type": "Identifier",
              "start": 183,
              "end": 198,
              "decorators": [],
              "name": "ImportInterface",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceHeritage",
            "start": 200,
            "end": 216,
            "expression": {
              "type": "Identifier",
              "start": 200,
              "end": 216,
              "decorators": [],
              "name": "RequireInterface",
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 160,
          "end": 174,
          "decorators": [],
          "name": "LocalInterface",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
