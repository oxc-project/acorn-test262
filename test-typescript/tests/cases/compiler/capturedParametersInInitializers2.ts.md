capturedParametersInInitializers2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 226,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 180,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 169,
        "end": 180,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 175,
            "end": 178,
            "expression": {
              "type": "MemberExpression",
              "start": 175,
              "end": 178,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 175,
                "end": 176,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 177,
                "end": 178,
                "decorators": [],
                "name": "c",
                "optional": false
              }
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
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 18,
          "end": 144,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "ClassExpression",
            "start": 22,
            "end": 144,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 28,
              "end": 144,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 38,
                  "end": 51,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "value": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 50,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 60,
                  "end": 81,
                  "computed": true,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "get",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 67,
                    "end": 81,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 70,
                      "end": 81,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 71,
                          "end": 80,
                          "argument": {
                            "type": "Identifier",
                            "start": 78,
                            "end": 79,
                            "decorators": [],
                            "name": "x",
                            "optional": false
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
                  "start": 90,
                  "end": 110,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 101,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 101,
                    "end": 110,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 104,
                      "end": 110,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 106,
                          "end": 108,
                          "expression": {
                            "type": "Identifier",
                            "start": 106,
                            "end": 107,
                            "decorators": [],
                            "name": "x",
                            "optional": false
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
                  "start": 119,
                  "end": 138,
                  "computed": true,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 122,
                    "end": 138,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 125,
                      "end": 138,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 127,
                          "end": 136,
                          "argument": {
                            "type": "Identifier",
                            "start": 134,
                            "end": 135,
                            "decorators": [],
                            "name": "z",
                            "optional": false
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
            "id": null,
            "implements": [],
            "superClass": null
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 150,
          "end": 155,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 150,
            "end": 151,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 154,
            "end": 155,
            "raw": "1",
            "value": 1
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 161,
          "end": 166,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 161,
            "end": 162,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 165,
            "end": 166,
            "raw": "2",
            "value": 2
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 181,
      "end": 226,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 223,
        "end": 226,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 190,
        "end": 194,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 195,
          "end": 214,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 195,
            "end": 196,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "ClassExpression",
            "start": 199,
            "end": 214,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 205,
              "end": 214,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 206,
                  "end": 213,
                  "computed": true,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 207,
                    "end": 208,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 213,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 216,
          "end": 221,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 220,
            "end": 221,
            "raw": "1",
            "value": 1
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
