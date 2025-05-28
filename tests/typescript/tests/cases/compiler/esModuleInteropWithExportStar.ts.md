__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 23,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 22,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14,
                "end": 22,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 16,
                  "end": 22
                }
              }
            },
            "init": null,
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
  "end": 108,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 14,
            "decorators": [],
            "name": "fs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 26,
        "value": "./fs",
        "raw": "\"./fs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 29,
      "end": 32,
      "expression": {
        "type": "Identifier",
        "start": 29,
        "end": 31,
        "decorators": [],
        "name": "fs",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExportAllDeclaration",
      "start": 34,
      "end": 55,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 48,
        "end": 54,
        "value": "./fs",
        "raw": "\"./fs\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 79,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 64,
          "end": 65,
          "local": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 72,
        "end": 78,
        "value": "./fs",
        "raw": "\"./fs\""
      },
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 80,
      "end": 108,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 88,
          "end": 94,
          "local": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 93,
            "end": 94,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 101,
        "end": 107,
        "value": "./fs",
        "raw": "\"./fs\""
      },
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
