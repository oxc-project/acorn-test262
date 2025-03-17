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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 35,
              "name": "fancy",
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
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": true
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 37,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 37,
              "name": "fancy",
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
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": true
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
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
            "name": "fancy",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "fancy",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "name": "fancy",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
