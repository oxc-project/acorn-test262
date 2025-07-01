__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 24,
              "end": 27
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 21,
            "end": 27
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "value": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 36,
              "end": 39
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 33,
            "end": 39
          }
        ],
        "start": 15,
        "end": 42
      },
      "exportKind": "value",
      "start": 0,
      "end": 42
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 43
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "start": 7,
          "end": 8
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 14,
        "end": 19
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "value": {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 30,
            "end": 33
          },
          "start": 27,
          "end": 33
        },
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "b",
            "raw": "\"b\"",
            "start": 35,
            "end": 38
          },
          "value": {
            "type": "Literal",
            "value": "b",
            "raw": "\"b\"",
            "start": 40,
            "end": 43
          },
          "start": 35,
          "end": 43
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 46
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
