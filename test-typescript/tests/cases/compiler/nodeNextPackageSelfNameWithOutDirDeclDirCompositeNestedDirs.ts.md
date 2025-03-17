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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 25,
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 16,
            "name": "srcthing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 20,
            "end": 25,
            "name": "thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 48,
        "value": "./src/thing.js",
        "raw": "\"./src/thing.js\""
      },
      "attributes": [],
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
  "start": 391,
  "end": 479,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 391,
      "end": 427,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 398,
          "end": 405,
          "local": {
            "type": "Identifier",
            "start": 403,
            "end": 405,
            "name": "me",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 411,
        "end": 426,
        "value": "@this/package",
        "raw": "\"@this/package\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 429,
      "end": 440,
      "expression": {
        "type": "CallExpression",
        "start": 429,
        "end": 439,
        "callee": {
          "type": "MemberExpression",
          "start": 429,
          "end": 437,
          "object": {
            "type": "Identifier",
            "start": 429,
            "end": 431,
            "name": "me",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 432,
            "end": 437,
            "name": "thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 442,
      "end": 477,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 449,
        "end": 477,
        "id": {
          "type": "Identifier",
          "start": 458,
          "end": 466,
          "name": "srcthing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 475,
          "end": 477,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 468,
          "end": 474,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 470,
            "end": 474
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
