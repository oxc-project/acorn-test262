__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 233,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 73,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 73,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 40,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
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
              "start": 25,
              "end": 40,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 40,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 36,
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 30,
                      "end": 36
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 71,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
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
              "start": 46,
              "end": 71,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 71,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 59,
                    "end": 69,
                    "argument": {
                      "type": "Literal",
                      "start": 66,
                      "end": 68,
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 48,
                "end": 56,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 50,
                  "end": 56
                }
              }
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
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 158,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 158,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 99,
            "end": 156,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 110,
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
              "start": 110,
              "end": 156,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 113,
                "end": 156,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 123,
                    "end": 133,
                    "expression": {
                      "type": "CallExpression",
                      "start": 123,
                      "end": 132,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 123,
                        "end": 130,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 123,
                          "end": 128
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 129,
                          "end": 130,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 142,
                    "end": 150,
                    "expression": {
                      "type": "CallExpression",
                      "start": 142,
                      "end": 149,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 142,
                        "end": 147
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
        "start": 80,
        "end": 82,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 159,
      "end": 233,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 178,
        "end": 233,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 184,
            "end": 231,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 195,
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
              "start": 195,
              "end": 231,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 198,
                "end": 231,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 208,
                    "end": 225,
                    "expression": {
                      "type": "CallExpression",
                      "start": 208,
                      "end": 224,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 214,
                          "end": 223,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 214,
                            "end": 221,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 214,
                              "end": 219
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 220,
                              "end": 221,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 208,
                        "end": 213
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
        "start": 165,
        "end": 167,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 176,
        "end": 177,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
