__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "srcthing",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 16
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 25
          },
          "exportKind": "value",
          "start": 8,
          "end": 25
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./src/thing.js",
        "raw": "\"./src/thing.js\"",
        "start": 32,
        "end": 48
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 49
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "me",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 405
          },
          "start": 398,
          "end": 405
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@this/package",
        "raw": "\"@this/package\"",
        "start": 411,
        "end": 426
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 391,
      "end": 427
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "me",
            "optional": false,
            "typeAnnotation": null,
            "start": 429,
            "end": 431
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 432,
            "end": 437
          },
          "optional": false,
          "computed": false,
          "start": 429,
          "end": 437
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 429,
        "end": 439
      },
      "directive": null,
      "start": 429,
      "end": 440
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "srcthing",
          "optional": false,
          "typeAnnotation": null,
          "start": 458,
          "end": 466
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 470,
            "end": 474
          },
          "start": 468,
          "end": 474
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 475,
          "end": 477
        },
        "expression": false,
        "start": 449,
        "end": 477
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 442,
      "end": 477
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 391,
  "end": 478
}
```
