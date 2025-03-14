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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 36,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 35,
            "definite": false,
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
                    "raw": "\"feast\"",
                    "value": "feast"
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
      },
      "exportKind": "type",
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
  "end": 39,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 38,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 37,
            "definite": false,
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
                    "raw": "\"ketchup\"",
                    "value": "ketchup"
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
      },
      "exportKind": "type",
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
  "end": 42,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 33,
        "raw": "\"fancy-lib\"",
        "value": "fancy-lib"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "fancy",
            "optional": false
          }
        }
      ]
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
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
