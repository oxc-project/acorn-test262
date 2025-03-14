checkSuperCallBeforeThisAccessing4.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 356,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 16,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 16,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "Based",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 356,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 356,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 68,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 61,
                "end": 67
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 73,
            "end": 354,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 84,
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
              "start": 84,
              "end": 354,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 354,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 97,
                    "end": 148,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 98,
                      "end": 146,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 104,
                        "end": 146,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 118,
                            "end": 123,
                            "expression": {
                              "type": "ThisExpression",
                              "start": 118,
                              "end": 122
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 157,
                    "end": 206,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 157,
                      "end": 205,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 163,
                        "end": 205,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 177,
                            "end": 182,
                            "expression": {
                              "type": "ThisExpression",
                              "start": 177,
                              "end": 181
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 215,
                    "end": 268,
                    "expression": {
                      "type": "CallExpression",
                      "start": 215,
                      "end": 267,
                      "arguments": [],
                      "callee": {
                        "type": "ArrowFunctionExpression",
                        "start": 216,
                        "end": 264,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 222,
                          "end": 264,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 236,
                              "end": 241,
                              "expression": {
                                "type": "ThisExpression",
                                "start": 236,
                                "end": 240
                              }
                            }
                          ]
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": []
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 277,
                    "end": 285,
                    "expression": {
                      "type": "CallExpression",
                      "start": 277,
                      "end": 284,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 277,
                        "end": 282
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 294,
                    "end": 302,
                    "expression": {
                      "type": "CallExpression",
                      "start": 294,
                      "end": 301,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 294,
                        "end": 299
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 311,
                    "end": 323,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 311,
                      "end": 322,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 311,
                        "end": 317,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 311,
                          "end": 315
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 316,
                          "end": 317,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 320,
                        "end": 322,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 332,
                    "end": 348,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 336,
                        "end": 347,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 336,
                          "end": 340,
                          "decorators": [],
                          "name": "that",
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 343,
                          "end": 347
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
        "start": 23,
        "end": 30,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 39,
        "end": 44,
        "decorators": [],
        "name": "Based",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
