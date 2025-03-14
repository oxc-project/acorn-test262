superPropertyAccessInComputedPropertiesOfNestedType_ES5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 205,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 35,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 35,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 33,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
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
              "start": 17,
              "end": 33,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 33,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 22,
                    "end": 31,
                    "argument": {
                      "type": "Literal",
                      "start": 29,
                      "end": 30,
                      "raw": "1",
                      "value": 1
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
      "start": 37,
      "end": 205,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 205,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 61,
            "end": 80,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
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
              "start": 64,
              "end": 80,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 80,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 69,
                    "end": 78,
                    "argument": {
                      "type": "Literal",
                      "start": 76,
                      "end": 77,
                      "raw": "2",
                      "value": 2
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
            "start": 85,
            "end": 203,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 88,
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
              "start": 88,
              "end": 203,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 91,
                "end": 203,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 101,
                    "end": 197,
                    "argument": {
                      "type": "ClassExpression",
                      "start": 108,
                      "end": 197,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 114,
                        "end": 197,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 128,
                            "end": 187,
                            "computed": true,
                            "decorators": [],
                            "key": {
                              "type": "CallExpression",
                              "start": 129,
                              "end": 140,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 129,
                                "end": 138,
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "start": 129,
                                  "end": 134
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 135,
                                  "end": 138,
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false
                                }
                              },
                              "optional": false
                            },
                            "kind": "method",
                            "optional": false,
                            "override": false,
                            "static": false,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 141,
                              "end": 187,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 144,
                                "end": 187,
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "start": 162,
                                    "end": 173,
                                    "argument": {
                                      "type": "Literal",
                                      "start": 169,
                                      "end": 172,
                                      "raw": "100",
                                      "value": 100
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
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
