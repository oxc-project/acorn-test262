__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 42,
      "declaration": {
        "type": "ObjectExpression",
        "start": 15,
        "end": 42,
        "properties": [
          {
            "type": "Property",
            "start": 21,
            "end": 27,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 24,
              "end": 27,
              "value": "a",
              "raw": "\"a\""
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          },
          {
            "type": "Property",
            "start": 33,
            "end": 39,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 36,
              "end": 39,
              "value": "b",
              "raw": "\"b\""
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
  "end": 52,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 46,
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
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 27,
          "end": 33,
          "key": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 30,
            "end": 33,
            "value": "a",
            "raw": "\"a\""
          }
        },
        {
          "type": "ImportAttribute",
          "start": 35,
          "end": 43,
          "key": {
            "type": "Literal",
            "start": 35,
            "end": 38,
            "value": "b",
            "raw": "\"b\""
          },
          "value": {
            "type": "Literal",
            "start": 40,
            "end": 43,
            "value": "b",
            "raw": "\"b\""
          }
        }
      ],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
