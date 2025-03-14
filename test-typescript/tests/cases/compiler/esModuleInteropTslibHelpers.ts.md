__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 22,
      "kind": "module",
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 21,
        "raw": "\"path\"",
        "value": "path"
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
  "end": 70,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 23,
        "raw": "\"path\"",
        "value": "path"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "decorators": [],
            "name": "path",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 49,
      "expression": {
        "type": "CallExpression",
        "start": 25,
        "end": 48,
        "arguments": [
          {
            "type": "Literal",
            "start": 38,
            "end": 40,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 42,
            "end": 47,
            "raw": "\"../\"",
            "value": "../"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 25,
          "end": 37,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 25,
            "end": 29,
            "decorators": [],
            "name": "path",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 30,
            "end": 37,
            "decorators": [],
            "name": "resolve",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 50,
      "end": 70,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 57,
        "end": 70,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 67,
          "end": 70,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 63,
          "end": 66,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "implements": [],
        "superClass": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 28,
        "raw": "\"path\"",
        "value": "path"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 16,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 16,
            "decorators": [],
            "name": "path",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 54,
      "expression": {
        "type": "CallExpression",
        "start": 30,
        "end": 53,
        "arguments": [
          {
            "type": "Literal",
            "start": 43,
            "end": 45,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 47,
            "end": 52,
            "raw": "\"../\"",
            "value": "../"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 30,
          "end": 42,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 30,
            "end": 34,
            "decorators": [],
            "name": "path",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 35,
            "end": 42,
            "decorators": [],
            "name": "resolve",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 55,
      "end": 76,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 62,
        "end": 76,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 73,
          "end": 76,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 72,
          "decorators": [],
          "name": "Foo2",
          "optional": false
        },
        "implements": [],
        "superClass": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 40,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 33,
        "end": 39,
        "raw": "\"path\"",
        "value": "path"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 26,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "decorators": [],
            "name": "default",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 26,
            "decorators": [],
            "name": "resolve",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 60,
      "expression": {
        "type": "CallExpression",
        "start": 41,
        "end": 59,
        "arguments": [
          {
            "type": "Literal",
            "start": 49,
            "end": 51,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 53,
            "end": 58,
            "raw": "\"../\"",
            "value": "../"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 41,
          "end": 48,
          "decorators": [],
          "name": "resolve",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 61,
      "end": 82,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 68,
        "end": 82,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 79,
          "end": 82,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 74,
          "end": 78,
          "decorators": [],
          "name": "Foo3",
          "optional": false
        },
        "implements": [],
        "superClass": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 45,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 38,
        "end": 44,
        "raw": "\"path\"",
        "value": "path"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Bar",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Bar",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 13,
          "end": 31,
          "imported": {
            "type": "Identifier",
            "start": 13,
            "end": 20,
            "decorators": [],
            "name": "default",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 24,
            "end": 31,
            "decorators": [],
            "name": "resolve",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 65,
      "expression": {
        "type": "CallExpression",
        "start": 46,
        "end": 64,
        "arguments": [
          {
            "type": "Literal",
            "start": 54,
            "end": 56,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 58,
            "end": 63,
            "raw": "\"../\"",
            "value": "../"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 46,
          "end": 53,
          "decorators": [],
          "name": "resolve",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 80,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 75,
          "end": 78,
          "exported": {
            "type": "Identifier",
            "start": 75,
            "end": 78,
            "decorators": [],
            "name": "Bar",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 75,
            "end": 78,
            "decorators": [],
            "name": "Bar",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
