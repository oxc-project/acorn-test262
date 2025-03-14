__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 155,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 58,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 58,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 56,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
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
              "start": 25,
              "end": 56,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 56,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 38,
                    "end": 50,
                    "expression": {
                      "type": "CallExpression",
                      "start": 38,
                      "end": 49,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 38,
                        "end": 47,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 38,
                          "end": 43
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 44,
                          "end": 47,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        }
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
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 60,
      "end": 155,
      "body": {
        "type": "TSModuleBlock",
        "start": 73,
        "end": 155,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 79,
            "end": 153,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 87,
              "end": 153,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 97,
                  "end": 147,
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 108,
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
                    "start": 108,
                    "end": 147,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 111,
                      "end": 147,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 125,
                          "end": 137,
                          "expression": {
                            "type": "CallExpression",
                            "start": 125,
                            "end": 136,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 125,
                              "end": 134,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 125,
                                "end": 130
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 131,
                                "end": 134,
                                "decorators": [],
                                "name": "foo",
                                "optional": false
                              }
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
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 67,
        "end": 72,
        "left": {
          "type": "Identifier",
          "start": 67,
          "end": 69,
          "decorators": [],
          "name": "M1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 70,
          "end": 72,
          "decorators": [],
          "name": "M2",
          "optional": false
        }
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
