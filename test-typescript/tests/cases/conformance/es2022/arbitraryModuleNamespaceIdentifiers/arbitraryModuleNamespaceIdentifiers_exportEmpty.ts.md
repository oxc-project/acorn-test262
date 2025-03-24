__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 147,
  "end": 317,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 158,
            "decorators": [],
            "name": "empty",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 161,
            "end": 168,
            "raw": "\"empty\"",
            "value": "empty"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 170,
      "end": 193,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 179,
          "end": 190,
          "exported": {
            "type": "Literal",
            "start": 188,
            "end": 190,
            "raw": "\"\"",
            "value": ""
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 179,
            "end": 184,
            "decorators": [],
            "name": "empty",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 194,
      "end": 272,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 220,
        "end": 271,
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_exportEmpty\"",
        "value": "./arbitraryModuleNamespaceIdentifiers_exportEmpty"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 203,
          "end": 212,
          "imported": {
            "type": "Literal",
            "start": 203,
            "end": 205,
            "raw": "\"\"",
            "value": ""
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 209,
            "end": 212,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 273,
      "end": 317,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 316,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 310,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 310,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 284,
                "end": 310,
                "literal": {
                  "type": "Literal",
                  "start": 284,
                  "end": 310,
                  "raw": "\"type error expected here\"",
                  "value": "type error expected here"
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 313,
            "end": 316,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
