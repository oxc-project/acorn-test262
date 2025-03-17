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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 33,
                    "end": 34,
                    "value": 0,
                    "raw": "0"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ForOfStatement",
      "start": 40,
      "end": 112,
      "await": false,
      "left": {
        "type": "MemberExpression",
        "start": 45,
        "end": 52,
        "object": {
          "type": "CallExpression",
          "start": 45,
          "end": 50,
          "callee": {
            "type": "Identifier",
            "start": 45,
            "end": 48,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        },
        "property": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 56,
        "end": 58,
        "elements": []
      },
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
            "left": {
              "type": "MemberExpression",
              "start": 71,
              "end": 78,
              "object": {
                "type": "CallExpression",
                "start": 71,
                "end": 76,
                "callee": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 74,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 77,
                "end": 78,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 82,
              "end": 84,
              "elements": []
            },
            "body": {
              "type": "VariableDeclaration",
              "start": 94,
              "end": 110,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 98,
                  "end": 109,
                  "id": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 102,
                    "end": 109,
                    "object": {
                      "type": "CallExpression",
                      "start": 102,
                      "end": 107,
                      "callee": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 105,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
