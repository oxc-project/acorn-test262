commentsOnObjectLiteral2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 299,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 298,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "Person",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 298,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 28,
                "end": 295,
                "properties": [
                  {
                    "type": "Property",
                    "start": 196,
                    "end": 264,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 206,
                      "decorators": [],
                      "name": "initialize",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 208,
                      "end": 264,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 223,
                        "end": 264,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 237,
                            "end": 254,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 237,
                              "end": 253,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 237,
                                "end": 246,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 237,
                                  "end": 241
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 242,
                                  "end": 246,
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 249,
                                "end": 253,
                                "decorators": [],
                                "name": "name",
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 217,
                          "end": 221,
                          "decorators": [],
                          "name": "name",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 13,
              "end": 22,
              "decorators": [],
              "name": "makeClass",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
