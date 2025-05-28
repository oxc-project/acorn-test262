__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 23,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 23,
        "value": "jquery",
        "raw": "\"jquery\""
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 49,
      "end": 69,
      "id": {
        "type": "Literal",
        "start": 64,
        "end": 68,
        "value": "fs",
        "raw": "\"fs\""
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "start": 41,
  "end": 154,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 41,
      "end": 73,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 48,
          "end": 51,
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 51,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 54,
          "end": 57,
          "imported": {
            "type": "Identifier",
            "start": 54,
            "end": 57,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 54,
            "end": 57,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 64,
        "end": 72,
        "value": "jquery",
        "raw": "\"jquery\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 74,
      "end": 100,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 81,
          "end": 89,
          "local": {
            "type": "Identifier",
            "start": 86,
            "end": 89,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 95,
        "end": 99,
        "value": "fs",
        "raw": "\"fs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 101,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 112,
        "decorators": [],
        "name": "boom",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 115,
        "end": 132,
        "expression": {
          "type": "Literal",
          "start": 123,
          "end": 131,
          "value": "jquery",
          "raw": "\"jquery\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 154,
      "expression": {
        "type": "CallExpression",
        "start": 134,
        "end": 153,
        "callee": {
          "type": "Identifier",
          "start": 134,
          "end": 137,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 138,
            "end": 141,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 143,
            "end": 146,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 148,
            "end": 152,
            "decorators": [],
            "name": "boom",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
