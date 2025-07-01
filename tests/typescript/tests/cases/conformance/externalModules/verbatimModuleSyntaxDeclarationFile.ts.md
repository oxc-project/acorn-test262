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
        "name": "NS",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 36,
              "end": 42
            },
            "declare": false,
            "start": 27,
            "end": 43
          }
        ],
        "start": 21,
        "end": 45
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 58
      },
      "start": 47,
      "end": 59
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 87
      },
      "start": 60,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 89
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "NS",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 19
          },
          "start": 12,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./type1",
        "raw": "'./type1'",
        "start": 25,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 35
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 48
      },
      "start": 37,
      "end": 49
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ModuleATypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 82
      },
      "start": 50,
      "end": 83
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 83
}
```
