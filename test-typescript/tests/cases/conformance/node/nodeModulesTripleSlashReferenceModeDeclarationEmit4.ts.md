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
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 25,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "ImportInterface",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 25,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "RequireInterface",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
  "start": 71,
  "end": 129,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 71,
      "end": 129,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 78,
        "end": 129,
        "id": {
          "type": "Identifier",
          "start": 88,
          "end": 102,
          "name": "LocalInterface",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "start": 111,
            "end": 126,
            "expression": {
              "type": "Identifier",
              "start": 111,
              "end": 126,
              "name": "ImportInterface",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 127,
          "end": 129,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
