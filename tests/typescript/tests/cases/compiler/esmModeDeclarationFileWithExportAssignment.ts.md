__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "example",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 26,
        "end": 29,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 28,
          "end": 29,
          "literal": {
            "type": "Literal",
            "start": 28,
            "end": 29,
            "value": 5,
            "raw": "5"
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSExportAssignment",
      "start": 31,
      "end": 48,
      "expression": {
        "type": "Identifier",
        "start": 40,
        "end": 47,
        "decorators": [],
        "name": "example",
        "optional": false,
        "typeAnnotation": null
      }
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
  "end": 45,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "example",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 33,
        "value": "./other.mjs",
        "raw": "\"./other.mjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 35,
      "end": 45,
      "expression": {
        "type": "CallExpression",
        "start": 35,
        "end": 44,
        "callee": {
          "type": "Identifier",
          "start": 35,
          "end": 42,
          "decorators": [],
          "name": "example",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
