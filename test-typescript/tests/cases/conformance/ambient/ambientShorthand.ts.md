declarations.d.ts
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
      "kind": "module",
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 23,
        "raw": "\"jquery\"",
        "value": "jquery"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 49,
      "end": 69,
      "kind": "module",
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 64,
        "end": 68,
        "raw": "\"fs\"",
        "value": "fs"
      }
    }
  ],
  "sourceType": "module"
}
```
user.ts
```json
{
  "type": "Program",
  "start": 41,
  "end": 155,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 41,
      "end": 73,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 64,
        "end": 72,
        "raw": "\"jquery\"",
        "value": "jquery"
      },
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
            "optional": false
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 54,
            "end": 57,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 74,
      "end": 100,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 95,
        "end": 99,
        "raw": "\"fs\"",
        "value": "fs"
      },
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
            "optional": false
          }
        }
      ]
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
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 115,
        "end": 132,
        "expression": {
          "type": "Literal",
          "start": 123,
          "end": 131,
          "raw": "\"jquery\"",
          "value": "jquery"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 154,
      "expression": {
        "type": "CallExpression",
        "start": 134,
        "end": 153,
        "arguments": [
          {
            "type": "Identifier",
            "start": 138,
            "end": 141,
            "decorators": [],
            "name": "bar",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 143,
            "end": 146,
            "decorators": [],
            "name": "baz",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 148,
            "end": 152,
            "decorators": [],
            "name": "boom",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 134,
          "end": 137,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
