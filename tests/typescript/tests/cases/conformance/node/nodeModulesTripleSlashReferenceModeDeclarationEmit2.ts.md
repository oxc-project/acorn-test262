__ESTREE_TEST__:PASS:
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 25,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 62,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 32,
            "end": 60,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 57,
              "decorators": [],
              "name": "ImportInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 58,
              "end": 60,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
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
  "start": 0,
  "end": 63,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 25,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 63,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 32,
            "end": 61,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 58,
              "decorators": [],
              "name": "RequireInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 59,
              "end": 61,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
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
  "start": 46,
  "end": 104,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 104,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 53,
        "end": 104,
        "id": {
          "type": "Identifier",
          "start": 63,
          "end": 77,
          "decorators": [],
          "name": "LocalInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 86,
            "end": 101,
            "expression": {
              "type": "Identifier",
              "start": 86,
              "end": 101,
              "decorators": [],
              "name": "ImportInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "start": 102,
          "end": 104,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
