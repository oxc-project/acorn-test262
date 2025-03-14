__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 101,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 101,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 28,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 19,
              "end": 21,
              "name": "x"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 24,
              "end": 27,
              "raw": "123",
              "value": 123
            }
          },
          {
            "type": "StaticBlock",
            "start": 32,
            "end": 66,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 45,
                "end": 62,
                "expression": {
                  "type": "CallExpression",
                  "start": 45,
                  "end": 62,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 57,
                      "end": 61,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 58,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 59,
                        "end": 61,
                        "name": "x"
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 45,
                    "end": 56,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 52,
                      "decorators": [],
                      "name": "console",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 56,
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
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 99,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 74,
              "end": 99,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 99,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 83,
                    "end": 95,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 90,
                      "end": 94,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 91,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 92,
                        "end": 94,
                        "name": "x"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
