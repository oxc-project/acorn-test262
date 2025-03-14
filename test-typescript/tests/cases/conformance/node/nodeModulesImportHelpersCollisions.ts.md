subfolder/index.ts
```json
{
  "type": "Program",
  "start": 19,
  "end": 106,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 53,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 48,
        "end": 52,
        "raw": "\"fs\"",
        "value": "fs"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 27,
          "end": 41,
          "imported": {
            "type": "Identifier",
            "start": 27,
            "end": 34,
            "decorators": [],
            "name": "default",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 38,
            "end": 41,
            "decorators": [],
            "name": "_fs",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 67,
      "expression": {
        "type": "MemberExpression",
        "start": 54,
        "end": 66,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 54,
          "end": 57,
          "decorators": [],
          "name": "_fs",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 58,
          "end": 66,
          "decorators": [],
          "name": "readFile",
          "optional": false
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 68,
      "end": 93,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 88,
        "end": 92,
        "raw": "\"fs\"",
        "value": "fs"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 75,
          "end": 82,
          "local": {
            "type": "Identifier",
            "start": 80,
            "end": 82,
            "decorators": [],
            "name": "fs",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 106,
      "expression": {
        "type": "MemberExpression",
        "start": 94,
        "end": 105,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 94,
          "end": 96,
          "decorators": [],
          "name": "fs",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 97,
          "end": 105,
          "decorators": [],
          "name": "readFile",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
index.ts
```json
{
  "type": "Program",
  "start": 19,
  "end": 106,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 53,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 48,
        "end": 52,
        "raw": "\"fs\"",
        "value": "fs"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 27,
          "end": 41,
          "imported": {
            "type": "Identifier",
            "start": 27,
            "end": 34,
            "decorators": [],
            "name": "default",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 38,
            "end": 41,
            "decorators": [],
            "name": "_fs",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 67,
      "expression": {
        "type": "MemberExpression",
        "start": 54,
        "end": 66,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 54,
          "end": 57,
          "decorators": [],
          "name": "_fs",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 58,
          "end": 66,
          "decorators": [],
          "name": "readFile",
          "optional": false
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 68,
      "end": 93,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 88,
        "end": 92,
        "raw": "\"fs\"",
        "value": "fs"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 75,
          "end": 82,
          "local": {
            "type": "Identifier",
            "start": 80,
            "end": 82,
            "decorators": [],
            "name": "fs",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 106,
      "expression": {
        "type": "MemberExpression",
        "start": 94,
        "end": 105,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 94,
          "end": 96,
          "decorators": [],
          "name": "fs",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 97,
          "end": 105,
          "decorators": [],
          "name": "readFile",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
types.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 20,
      "kind": "module",
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 19,
        "raw": "\"fs\"",
        "value": "fs"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 21,
      "end": 103,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 44,
        "end": 103,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 50,
            "end": 60,
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 36,
        "end": 43,
        "raw": "\"tslib\"",
        "value": "tslib"
      }
    }
  ],
  "sourceType": "module"
}
```
