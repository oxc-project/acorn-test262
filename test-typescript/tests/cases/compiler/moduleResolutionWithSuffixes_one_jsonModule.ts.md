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
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 28,
        "value": "./foo.json",
        "raw": "\"./foo.json\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 51,
      "expression": {
        "type": "CallExpression",
        "start": 30,
        "end": 50,
        "callee": {
          "type": "MemberExpression",
          "start": 30,
          "end": 41,
          "object": {
            "type": "Identifier",
            "start": 30,
            "end": 37,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 38,
            "end": 41,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 42,
            "end": 49,
            "object": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "name": "ios",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
