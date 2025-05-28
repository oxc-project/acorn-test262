__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 20,
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 45,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 27,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 36,
              "end": 42
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 47,
      "end": 59,
      "expression": {
        "type": "Identifier",
        "start": 56,
        "end": 58,
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 60,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 87,
        "decorators": [],
        "name": "MyTypes",
        "optional": false,
        "typeAnnotation": null
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
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 12,
          "end": 19,
          "local": {
            "type": "Identifier",
            "start": 17,
            "end": 19,
            "decorators": [],
            "name": "NS",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 34,
        "value": "./type1",
        "raw": "'./type1'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "TSExportAssignment",
      "start": 37,
      "end": 49,
      "expression": {
        "type": "Identifier",
        "start": 46,
        "end": 48,
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 50,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 82,
        "decorators": [],
        "name": "ModuleATypes",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
