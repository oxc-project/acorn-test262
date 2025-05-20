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
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "example",
        "optional": false,
        "typeAnnotation": null
      },
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
            "raw": "5",
            "value": 5
          }
        }
      },
      "typeParameters": null
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
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 33,
        "raw": "\"./other.mjs\"",
        "value": "./other.mjs"
      },
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
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 35,
      "end": 45,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 35,
        "end": 44,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 35,
          "end": 42,
          "decorators": [],
          "name": "example",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
