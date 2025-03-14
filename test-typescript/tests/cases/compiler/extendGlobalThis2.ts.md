__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 72,
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 72,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 70,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 34,
              "end": 70,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 49,
                "end": 70,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 51,
                    "end": 68,
                    "expression": {
                      "type": "CallExpression",
                      "start": 51,
                      "end": 67,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 63,
                          "end": 66,
                          "raw": "\"x\"",
                          "value": "x"
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 51,
                        "end": 62,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 51,
                          "end": 58,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 59,
                          "end": 62,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 43,
                "end": 46,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "params": []
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "globalThis",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
