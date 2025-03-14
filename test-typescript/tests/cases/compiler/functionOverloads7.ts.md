__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 181,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 180,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 180,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 30,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 27,
              "end": 30,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 59,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 45,
              "end": 59,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 46,
                  "end": 57,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 51,
                      "end": 57
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 63,
            "end": 101,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 74,
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
              "start": 74,
              "end": 101,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 85,
                "end": 101,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 87,
                    "end": 99,
                    "argument": {
                      "type": "Literal",
                      "start": 94,
                      "end": 99,
                      "raw": "\"foo\"",
                      "value": "foo"
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
                  "start": 75,
                  "end": 84,
                  "decorators": [],
                  "name": "foo",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 79,
                    "end": 84,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 81,
                      "end": 84
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 178,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "n",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 113,
              "end": 178,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 178,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 123,
                    "end": 144,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 127,
                        "end": 143,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 130,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 133,
                          "end": 143,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 133,
                            "end": 141,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 133,
                              "end": 137
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 138,
                              "end": 141,
                              "decorators": [],
                              "name": "bar",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 150,
                    "end": 173,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 150,
                      "end": 172,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 153,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 156,
                        "end": 172,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 165,
                            "end": 171,
                            "raw": "\"test\"",
                            "value": "test"
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 156,
                          "end": 164,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 156,
                            "end": 160
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 161,
                            "end": 164,
                            "decorators": [],
                            "name": "bar",
                            "optional": false
                          }
                        },
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
        "end": 9,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
