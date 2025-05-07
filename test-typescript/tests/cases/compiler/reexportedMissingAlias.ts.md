__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 60,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 16,
      "end": 60,
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 23,
        "end": 60,
        "id": {
          "type": "Identifier",
          "start": 30,
          "end": 39,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "importKind": "value",
        "moduleReference": {
          "type": "Identifier",
          "start": 42,
          "end": 59,
          "decorators": [],
          "name": "CompletelyMissing",
          "optional": false,
          "typeAnnotation": null
        }
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
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 34,
        "raw": "'./second'",
        "value": "./second",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 18,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "Second",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSExportAssignment",
      "start": 36,
      "end": 52,
      "expression": {
        "type": "Identifier",
        "start": 45,
        "end": 51,
        "decorators": [],
        "name": "Second",
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
  "end": 66,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 35,
        "raw": "'./first'",
        "value": "./first",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 66,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 66,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 53,
        "end": 62,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
