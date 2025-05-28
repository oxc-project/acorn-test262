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
      "end": 36,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 36,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 35,
              "decorators": [],
              "name": "fancy",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 26,
                "end": 35,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 28,
                  "end": 35,
                  "literal": {
                    "type": "Literal",
                    "start": 28,
                    "end": 35,
                    "value": "feast",
                    "raw": "\"feast\""
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 39,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 38,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 38,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 37,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 37,
              "decorators": [],
              "name": "fancy",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 26,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 28,
                  "end": 37,
                  "literal": {
                    "type": "Literal",
                    "start": 28,
                    "end": 37,
                    "value": "ketchup",
                    "raw": "\"ketchup\""
                  }
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "fancy",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "fancy",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 33,
        "value": "fancy-lib",
        "raw": "\"fancy-lib\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 35,
      "end": 41,
      "expression": {
        "type": "Identifier",
        "start": 35,
        "end": 40,
        "decorators": [],
        "name": "fancy",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
