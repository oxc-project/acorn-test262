__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 271,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 29,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 29,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 25,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 203,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 203,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 54,
            "end": 148,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 58,
              "decorators": [],
              "name": "next",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 148,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 148,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 71,
                    "end": 142,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 78,
                      "end": 141,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 92,
                          "end": 106,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 92,
                            "end": 97,
                            "decorators": [],
                            "name": "value",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "NewExpression",
                            "start": 99,
                            "end": 106,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 103,
                              "end": 106,
                              "decorators": [],
                              "name": "Foo",
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "start": 120,
                          "end": 131,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 120,
                            "end": 124,
                            "decorators": [],
                            "name": "done",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 126,
                            "end": 131,
                            "raw": "false",
                            "value": false
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
          },
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 201,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 154,
              "end": 169,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 154,
                "end": 160,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 161,
                "end": 169,
                "decorators": [],
                "name": "iterator",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 170,
              "end": 201,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 173,
                "end": 201,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 183,
                    "end": 195,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 190,
                      "end": 194
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
        "start": 36,
        "end": 47,
        "decorators": [],
        "name": "FooIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ForOfStatement",
      "start": 205,
      "end": 271,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 238,
        "end": 271,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 244,
            "end": 256,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 250,
                "end": 255,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 251,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 254,
                  "end": 255,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 210,
        "end": 217,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 216,
            "end": 217,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "NewExpression",
        "start": 221,
        "end": 236,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 225,
          "end": 236,
          "decorators": [],
          "name": "FooIterator",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
