superCallBeforeThisAccessing3.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 299,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 38,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 38,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 36,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
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
              "start": 29,
              "end": 36,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 36,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 39,
      "end": 298,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 60,
        "end": 298,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 66,
            "end": 77,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 76,
              "decorators": [],
              "name": "_t",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 82,
            "end": 296,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 93,
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
              "start": 93,
              "end": 296,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 96,
                "end": 296,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 106,
                    "end": 132,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 110,
                        "end": 131,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 111,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 114,
                          "end": 131,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 120,
                            "end": 131,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 122,
                                "end": 129,
                                "expression": {
                                  "type": "MemberExpression",
                                  "start": 122,
                                  "end": 129,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 122,
                                    "end": 126
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 127,
                                    "end": 129,
                                    "decorators": [],
                                    "name": "_t",
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
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 141,
                    "end": 145,
                    "expression": {
                      "type": "CallExpression",
                      "start": 141,
                      "end": 144,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 142,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 246,
                    "end": 254,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 246,
                      "end": 253,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 246,
                        "end": 250
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 251,
                        "end": 253,
                        "decorators": [],
                        "name": "_t",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 273,
                    "end": 290,
                    "expression": {
                      "type": "CallExpression",
                      "start": 273,
                      "end": 289,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 279,
                          "end": 288,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 273,
                        "end": 278
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
        "start": 45,
        "end": 46,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 55,
        "end": 59,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
