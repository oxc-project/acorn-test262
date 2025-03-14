superPropertyElementNoUnusedLexicalThisCapture.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 231,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 18,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 18,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 10,
            "end": 16,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 11,
              "end": 16,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 14,
                "end": 16,
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
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 20,
      "end": 231,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 231,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 82,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 55,
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
              "start": 55,
              "end": 82,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 58,
                "end": 82,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 68,
                    "end": 76,
                    "expression": {
                      "type": "CallExpression",
                      "start": 68,
                      "end": 75,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 68,
                        "end": 73
                      },
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
            "start": 87,
            "end": 154,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 90,
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
              "start": 90,
              "end": 154,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 154,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 103,
                    "end": 148,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 110,
                      "end": 148,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 116,
                        "end": 148,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 130,
                            "end": 138,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 130,
                              "end": 137,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 130,
                                "end": 135
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 136,
                                "end": 137,
                                "decorators": [],
                                "name": "x",
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
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
            "start": 159,
            "end": 229,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 162,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 162,
              "end": 229,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 165,
                "end": 229,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 175,
                    "end": 223,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 182,
                      "end": 223,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 188,
                        "end": 223,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 202,
                            "end": 213,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 202,
                              "end": 212,
                              "computed": true,
                              "object": {
                                "type": "Super",
                                "start": 202,
                                "end": 207
                              },
                              "optional": false,
                              "property": {
                                "type": "Literal",
                                "start": 208,
                                "end": 211,
                                "raw": "\"x\"",
                                "value": "x"
                              }
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
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
        "start": 26,
        "end": 27,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
