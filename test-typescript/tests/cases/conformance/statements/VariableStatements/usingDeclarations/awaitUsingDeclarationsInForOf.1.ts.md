awaitUsingDeclarationsInForOf.1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 144,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 144,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 28,
            "end": 142,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 135,
              "end": 142,
              "body": []
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 33,
              "end": 47,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 45,
                  "end": 47,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 47,
                    "decorators": [],
                    "name": "d1",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "await using"
            },
            "right": {
              "type": "ArrayExpression",
              "start": 51,
              "end": 133,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 52,
                  "end": 88,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 54,
                      "end": 86,
                      "computed": true,
                      "key": {
                        "type": "MemberExpression",
                        "start": 61,
                        "end": 80,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 67,
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 80,
                          "decorators": [],
                          "name": "asyncDispose",
                          "optional": false
                        }
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 81,
                        "end": 86,
                        "async": true,
                        "body": {
                          "type": "BlockStatement",
                          "start": 84,
                          "end": 86,
                          "body": []
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
                {
                  "type": "ObjectExpression",
                  "start": 90,
                  "end": 115,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 92,
                      "end": 113,
                      "computed": true,
                      "key": {
                        "type": "MemberExpression",
                        "start": 93,
                        "end": 107,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 99,
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 100,
                          "end": 107,
                          "decorators": [],
                          "name": "dispose",
                          "optional": false
                        }
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 108,
                        "end": 113,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 111,
                          "end": 113,
                          "body": []
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
                {
                  "type": "Literal",
                  "start": 117,
                  "end": 121,
                  "raw": "null",
                  "value": null
                },
                {
                  "type": "Identifier",
                  "start": 123,
                  "end": 132,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false
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
        "start": 15,
        "end": 19,
        "decorators": [],
        "name": "main",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
