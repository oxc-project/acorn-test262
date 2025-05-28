__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 0,
  "body": [],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 101,
  "end": 138,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 101,
      "end": 137,
      "declaration": {
        "type": "ObjectExpression",
        "start": 116,
        "end": 136,
        "properties": [
          {
            "type": "Property",
            "start": 118,
            "end": 122,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 121,
              "end": 122,
              "value": 1,
              "raw": "1"
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          },
          {
            "type": "Property",
            "start": 124,
            "end": 128,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 127,
              "end": 128,
              "value": 1,
              "raw": "1"
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          },
          {
            "type": "Property",
            "start": 130,
            "end": 134,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 133,
              "end": 134,
              "value": 1,
              "raw": "1"
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
  "end": 23,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 20,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "value": "./a",
        "raw": "\"./a\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 21,
      "end": 23,
      "expression": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "a",
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
