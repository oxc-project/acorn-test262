__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 22,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 46,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 31,
        "end": 46,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 40,
          "end": 43,
          "decorators": [],
          "name": "bar",
          "optional": false
        },
        "params": []
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
  "end": 59,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 37,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 31,
        "end": 36,
        "raw": "\"./b\"",
        "value": "./b"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 23,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 16,
            "decorators": [],
            "name": "default",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 20,
            "end": 23,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 48,
      "expression": {
        "type": "CallExpression",
        "start": 38,
        "end": 47,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 38,
          "end": 45,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 38,
            "end": 41,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 42,
            "end": 45,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 59,
      "expression": {
        "type": "CallExpression",
        "start": 49,
        "end": 58,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 49,
          "end": 56,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 49,
            "end": 52,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 53,
            "end": 56,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
