iterableArrayPattern9.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 261,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 42,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 42,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "fun",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 13,
          "end": 37,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 13,
            "end": 19,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 14,
                "end": 15,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            ],
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "NewExpression",
            "start": 22,
            "end": 37,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 26,
              "end": 37,
              "decorators": [],
              "name": "FooIterator",
              "optional": false
            }
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 43,
      "end": 58,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 53,
        "end": 58,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 55,
            "end": 56,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 52,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 59,
      "end": 86,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 86,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 83,
            "end": 84,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 68,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 77,
        "end": 80,
        "decorators": [],
        "name": "Bar",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 87,
      "end": 261,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 261,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 111,
            "end": 205,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 115,
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
              "start": 115,
              "end": 205,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 205,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 128,
                    "end": 199,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 135,
                      "end": 198,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 149,
                          "end": 163,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 154,
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
                            "start": 156,
                            "end": 163,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 160,
                              "end": 163,
                              "decorators": [],
                              "name": "Foo",
                              "optional": false
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "start": 177,
                          "end": 188,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 177,
                            "end": 181,
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
                            "start": 183,
                            "end": 188,
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
            "start": 211,
            "end": 259,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 212,
              "end": 227,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 212,
                "end": 218,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 219,
                "end": 227,
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
              "start": 228,
              "end": 259,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 231,
                "end": 259,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 241,
                    "end": 253,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 248,
                      "end": 252
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
        "start": 93,
        "end": 104,
        "decorators": [],
        "name": "FooIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
