__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 49,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 48,
        "raw": "\"./src/thing.js\"",
        "value": "./src/thing.js",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 25,
          "exported": {
            "type": "Identifier",
            "start": 20,
            "end": 25,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 16,
            "decorators": [],
            "name": "srcthing",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 391,
  "end": 478,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 391,
      "end": 427,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 411,
        "end": 426,
        "raw": "\"@this/package\"",
        "value": "@this/package",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 398,
          "end": 405,
          "local": {
            "type": "Identifier",
            "start": 403,
            "end": 405,
            "decorators": [],
            "name": "me",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 429,
      "end": 440,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 429,
        "end": 439,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 429,
          "end": 437,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 429,
            "end": 431,
            "decorators": [],
            "name": "me",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 432,
            "end": 437,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 442,
      "end": 477,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 449,
        "end": 477,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 475,
          "end": 477,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 458,
          "end": 466,
          "decorators": [],
          "name": "srcthing",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 468,
          "end": 474,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 470,
            "end": 474
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
