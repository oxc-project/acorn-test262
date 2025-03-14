symbolProperty19.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 103,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "i",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 103,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 44,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 15,
                  "end": 30,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 15,
                    "end": 21,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 30,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 33,
                  "end": 44,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 35,
                      "end": 42,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 35,
                        "end": 36,
                        "decorators": [],
                        "name": "p",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 38,
                        "end": 42,
                        "raw": "null",
                        "value": null
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 50,
                "end": 101,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 51,
                  "end": 69,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 57,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 69,
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 70,
                  "end": 101,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 73,
                    "end": 101,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 75,
                        "end": 99,
                        "argument": {
                          "type": "ObjectExpression",
                          "start": 82,
                          "end": 98,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 84,
                              "end": 96,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 84,
                                "end": 85,
                                "decorators": [],
                                "name": "p",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 87,
                                "end": 96,
                                "decorators": [],
                                "name": "undefined",
                                "optional": false
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
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 111,
            "decorators": [],
            "name": "it",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 114,
            "end": 132,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 116,
              "end": 131,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 116,
                "end": 122,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 123,
                "end": 131,
                "decorators": [],
                "name": "iterator",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 167,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 141,
            "decorators": [],
            "name": "str",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 144,
            "end": 167,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 144,
              "end": 165,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "MemberExpression",
                "start": 146,
                "end": 164,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 152,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 164,
                  "decorators": [],
                  "name": "toStringTag",
                  "optional": false
                }
              }
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
