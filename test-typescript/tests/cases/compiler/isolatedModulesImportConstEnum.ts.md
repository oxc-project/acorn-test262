__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 29,
        "raw": "'./file2'",
        "value": "./file2"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 52,
      "expression": {
        "type": "CallExpression",
        "start": 31,
        "end": 51,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 43,
            "end": 50,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 47,
              "end": 50,
              "decorators": [],
              "name": "BAR",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 31,
          "end": 42,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 31,
            "end": 38,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 39,
            "end": 42,
            "decorators": [],
            "name": "log",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 32,
        "body": {
          "type": "TSEnumBody",
          "start": 22,
          "end": 32,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 26,
              "end": 29,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 26,
                "end": 29,
                "decorators": [],
                "name": "BAR",
                "optional": false
              }
            }
          ]
        },
        "const": true,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 18,
          "end": 21,
          "decorators": [],
          "name": "Foo",
          "optional": false
        }
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
