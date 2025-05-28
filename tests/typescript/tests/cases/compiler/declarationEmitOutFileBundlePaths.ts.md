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
            "kind": "init",
            "key": {
              "type": "Literal",
              "start": 21,
              "end": 27,
              "value": "@a/b",
              "raw": "\"@a/b\""
            },
            "value": {
              "type": "Literal",
              "start": 29,
              "end": 36,
              "value": "1.0.0",
              "raw": "\"1.0.0\""
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          },
          {
            "type": "Property",
            "start": 42,
            "end": 57,
            "kind": "init",
            "key": {
              "type": "Literal",
              "start": 42,
              "end": 48,
              "value": "@a/c",
              "raw": "\"@a/c\""
            },
            "value": {
              "type": "Literal",
              "start": 50,
              "end": 57,
              "value": "1.2.3",
              "raw": "\"1.2.3\""
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
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
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 43,
        "value": "./versions.static.js",
        "raw": "'./versions.static.js'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 70,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 59,
          "end": 67,
          "local": {
            "type": "Identifier",
            "start": 59,
            "end": 67,
            "decorators": [],
            "name": "versions",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 59,
            "end": 67,
            "decorators": [],
            "name": "versions",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
