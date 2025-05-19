__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 60,
      "declaration": {
        "type": "ObjectExpression",
        "start": 15,
        "end": 59,
        "properties": [
          {
            "type": "Property",
            "start": 21,
            "end": 36,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 21,
              "end": 27,
              "raw": "\"@a/b\"",
              "value": "@a/b"
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 29,
              "end": 36,
              "raw": "\"1.0.0\"",
              "value": "1.0.0"
            }
          },
          {
            "type": "Property",
            "start": 42,
            "end": 57,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 42,
              "end": 48,
              "raw": "\"@a/c\"",
              "value": "@a/c"
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 50,
              "end": 57,
              "raw": "\"1.2.3\"",
              "value": "1.2.3"
            }
          }
        ]
      },
      "exportKind": "value"
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
  "end": 70,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 44,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 43,
        "raw": "'./versions.static.js'",
        "value": "./versions.static.js"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 15,
            "decorators": [],
            "name": "versions",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 70,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 59,
          "end": 67,
          "exported": {
            "type": "Identifier",
            "start": 59,
            "end": 67,
            "decorators": [],
            "name": "versions",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 59,
            "end": 67,
            "decorators": [],
            "name": "versions",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
