__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "jquery",
        "raw": "\"jquery\"",
        "start": 15,
        "end": 23
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 64,
        "end": 68
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 49,
      "end": 69
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 70
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 51
          },
          "start": 48,
          "end": 51
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 57
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 57
          },
          "importKind": "value",
          "start": 54,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "jquery",
        "raw": "\"jquery\"",
        "start": 64,
        "end": 72
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 41,
      "end": 73
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 89
          },
          "start": 81,
          "end": 89
        }
      ],
      "source": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 95,
        "end": 99
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 74,
      "end": 100
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "boom",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 112
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "jquery",
          "raw": "\"jquery\"",
          "start": 123,
          "end": 131
        },
        "start": 115,
        "end": 132
      },
      "importKind": "value",
      "start": 101,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 137
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 141
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 146
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "boom",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 152
          }
        ],
        "optional": false,
        "start": 134,
        "end": 153
      },
      "directive": null,
      "start": 134,
      "end": 154
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 41,
  "end": 154
}
```
