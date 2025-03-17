__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 39,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 39,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 21,
            "end": 37,
            "argument": {
              "type": "ObjectExpression",
              "start": 28,
              "end": 36,
              "properties": [
                {
                  "type": "Property",
                  "start": 30,
                  "end": 34,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 33,
                    "end": 34,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ForOfStatement",
      "start": 40,
      "end": 112,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 112,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 66,
            "end": 110,
            "await": false,
            "body": {
              "type": "VariableDeclaration",
              "start": 94,
              "end": 110,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 98,
                  "end": 109,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 102,
                    "end": 109,
                    "computed": false,
                    "object": {
                      "type": "CallExpression",
                      "start": 102,
                      "end": 107,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 105,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "left": {
              "type": "MemberExpression",
              "start": 71,
              "end": 78,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 71,
                "end": 76,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 74,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "ArrayExpression",
              "start": 82,
              "end": 84,
              "elements": []
            }
          }
        ]
      },
      "left": {
        "type": "MemberExpression",
        "start": 45,
        "end": 52,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 45,
          "end": 50,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 45,
            "end": 48,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "right": {
        "type": "ArrayExpression",
        "start": 56,
        "end": 58,
        "elements": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
