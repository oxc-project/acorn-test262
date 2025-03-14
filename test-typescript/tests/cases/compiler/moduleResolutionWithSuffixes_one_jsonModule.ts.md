__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 28,
        "raw": "\"./foo.json\"",
        "value": "./foo.json"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 51,
      "expression": {
        "type": "CallExpression",
        "start": 30,
        "end": 50,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 42,
            "end": 49,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "decorators": [],
              "name": "ios",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 30,
          "end": 41,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 30,
            "end": 37,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 38,
            "end": 41,
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
