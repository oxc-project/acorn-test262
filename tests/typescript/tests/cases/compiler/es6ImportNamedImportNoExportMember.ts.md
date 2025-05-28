__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 18,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 17,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 17,
              "value": 10,
              "raw": "10"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 36,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 36,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 30,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 126,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 60,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 59,
        "value": "./es6ImportNamedImportNoExportMember_0",
        "raw": "\"./es6ImportNamedImportNoExportMember_0\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 61,
      "end": 126,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 70,
          "end": 77,
          "imported": {
            "type": "Identifier",
            "start": 70,
            "end": 72,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 85,
        "end": 125,
        "value": "./es6ImportNamedImportNoExportMember_0",
        "raw": "\"./es6ImportNamedImportNoExportMember_0\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
