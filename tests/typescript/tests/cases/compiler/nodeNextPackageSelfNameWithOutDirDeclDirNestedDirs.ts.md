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
            "decorators": [],
            "name": "srcthing",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 20,
            "end": 25,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
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
      "exportKind": "value",
      "attributes": []
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
      ],
      "source": {
        "type": "Literal",
        "start": 411,
        "end": 426,
        "value": "@this/package",
        "raw": "\"@this/package\""
      },
      "phase": null,
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
            "decorators": [],
            "name": "me",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 432,
            "end": 437,
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
          "decorators": [],
          "name": "srcthing",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
        "body": {
          "type": "BlockStatement",
          "start": 475,
          "end": 477,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
