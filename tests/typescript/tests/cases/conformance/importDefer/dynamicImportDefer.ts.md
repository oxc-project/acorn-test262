__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 26,
                    "end": 33
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 34,
                    "end": 37
                  },
                  "optional": false,
                  "computed": false,
                  "start": 26,
                  "end": 37
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "foo from a",
                    "raw": "\"foo from a\"",
                    "start": 38,
                    "end": 50
                  }
                ],
                "optional": false,
                "start": 26,
                "end": 51
              },
              "directive": null,
              "start": 26,
              "end": 52
            }
          ],
          "start": 22,
          "end": 54
        },
        "expression": false,
        "start": 7,
        "end": 54
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 54
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 55
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MetaProperty",
              "meta": {
                "type": "Identifier",
                "decorators": [],
                "name": "import",
                "optional": false,
                "typeAnnotation": null,
                "start": 0,
                "end": 6
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "defer",
                "optional": false,
                "typeAnnotation": null,
                "start": 7,
                "end": 12
              },
              "start": 0,
              "end": 12
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./a.js",
                "raw": "\"./a.js\"",
                "start": 13,
                "end": 21
              }
            ],
            "optional": false,
            "start": 0,
            "end": 22
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 27
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 27
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ns",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 30
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ns",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 38,
                        "end": 40
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 41,
                        "end": 44
                      },
                      "optional": false,
                      "computed": false,
                      "start": 38,
                      "end": 44
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 38,
                    "end": 46
                  },
                  "directive": null,
                  "start": 38,
                  "end": 47
                }
              ],
              "start": 34,
              "end": 49
            },
            "id": null,
            "generator": false,
            "start": 28,
            "end": 49
          }
        ],
        "optional": false,
        "start": 0,
        "end": 50
      },
      "directive": null,
      "start": 0,
      "end": 51
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 51
}
```
