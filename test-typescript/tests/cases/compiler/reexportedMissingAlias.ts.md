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
          "optional": false
        },
        "importKind": "value",
        "moduleReference": {
          "type": "Identifier",
          "start": 42,
          "end": 59,
          "decorators": [],
          "name": "CompletelyMissing",
          "optional": false
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
        "value": "./second"
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
            "optional": false
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
  "start": 0,
  "end": 67,
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
        "value": "./first"
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "Component",
            "optional": false
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
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 53,
        "end": 62,
        "decorators": [],
        "name": "Component",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
