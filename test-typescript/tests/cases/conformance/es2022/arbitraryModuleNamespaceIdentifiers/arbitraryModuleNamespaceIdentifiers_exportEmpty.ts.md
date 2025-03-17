__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 147,
  "end": 318,
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
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 158,
            "name": "empty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 161,
            "end": 168,
            "value": "empty",
            "raw": "\"empty\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 170,
      "end": 193,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 179,
          "end": 190,
          "local": {
            "type": "Identifier",
            "start": 179,
            "end": 184,
            "name": "empty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Literal",
            "start": 188,
            "end": 190,
            "value": "",
            "raw": "\"\""
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 194,
      "end": 272,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 203,
          "end": 212,
          "imported": {
            "type": "Literal",
            "start": 203,
            "end": 205,
            "value": "",
            "raw": "\"\""
          },
          "local": {
            "type": "Identifier",
            "start": 209,
            "end": 212,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 220,
        "end": 271,
        "value": "./arbitraryModuleNamespaceIdentifiers_exportEmpty",
        "raw": "\"./arbitraryModuleNamespaceIdentifiers_exportEmpty\""
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 310,
            "name": "bar",
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
                  "value": "type error expected here",
                  "raw": "\"type error expected here\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 313,
            "end": 316,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
