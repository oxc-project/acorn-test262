__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 150,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 150,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 28,
            "end": 148,
            "await": true,
            "body": {
              "type": "BlockStatement",
              "start": 141,
              "end": 148,
              "body": []
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 39,
              "end": 53,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 51,
                  "end": 53,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 53,
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
              "start": 57,
              "end": 139,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 58,
                  "end": 94,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 60,
                      "end": 92,
                      "computed": true,
                      "key": {
                        "type": "MemberExpression",
                        "start": 67,
                        "end": 86,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 73,
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 74,
                          "end": 86,
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
                        "start": 87,
                        "end": 92,
                        "async": true,
                        "body": {
                          "type": "BlockStatement",
                          "start": 90,
                          "end": 92,
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
                  "start": 96,
                  "end": 121,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 98,
                      "end": 119,
                      "computed": true,
                      "key": {
                        "type": "MemberExpression",
                        "start": 99,
                        "end": 113,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 105,
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 113,
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
                        "start": 114,
                        "end": 119,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 117,
                          "end": 119,
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
                  "start": 123,
                  "end": 127,
                  "raw": "null",
                  "value": null
                },
                {
                  "type": "Identifier",
                  "start": 129,
                  "end": 138,
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
  "sourceType": "script",
  "hashbang": null
}
```
