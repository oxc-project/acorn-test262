__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 258,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 37,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 37,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 22,
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
              "end": 22,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 22,
                "body": []
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
            "start": 27,
            "end": 35,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
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
              "start": 30,
              "end": 35,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 35,
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
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 39,
      "end": 68,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 50,
        "end": 68,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 56,
            "end": 66,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
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
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 49,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 71,
      "end": 258,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 98,
        "end": 258,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 104,
            "end": 256,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 115,
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
              "start": 115,
              "end": 256,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 256,
                "body": [
                  {
                    "type": "WithStatement",
                    "start": 128,
                    "end": 212,
                    "body": {
                      "type": "BlockStatement",
                      "start": 142,
                      "end": 212,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 156,
                          "end": 162,
                          "expression": {
                            "type": "CallExpression",
                            "start": 156,
                            "end": 161,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 156,
                              "end": 159,
                              "decorators": [],
                              "name": "foo",
                              "optional": false
                            },
                            "optional": false
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 175,
                          "end": 183,
                          "expression": {
                            "type": "CallExpression",
                            "start": 175,
                            "end": 182,
                            "arguments": [],
                            "callee": {
                              "type": "Super",
                              "start": 175,
                              "end": 180
                            },
                            "optional": false
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 196,
                          "end": 202,
                          "expression": {
                            "type": "CallExpression",
                            "start": 196,
                            "end": 201,
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 196,
                              "end": 199,
                              "decorators": [],
                              "name": "bar",
                              "optional": false
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "object": {
                      "type": "NewExpression",
                      "start": 133,
                      "end": 140,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "TryStatement",
                    "start": 222,
                    "end": 250,
                    "block": {
                      "type": "BlockStatement",
                      "start": 226,
                      "end": 228,
                      "body": []
                    },
                    "finalizer": null,
                    "handler": {
                      "type": "CatchClause",
                      "start": 229,
                      "end": 250,
                      "body": {
                        "type": "BlockStatement",
                        "start": 238,
                        "end": 250,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 240,
                            "end": 248,
                            "expression": {
                              "type": "CallExpression",
                              "start": 240,
                              "end": 247,
                              "arguments": [],
                              "callee": {
                                "type": "Super",
                                "start": 240,
                                "end": 245
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
                      "param": {
                        "type": "Identifier",
                        "start": 235,
                        "end": 236,
                        "decorators": [],
                        "name": "e",
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
        "start": 77,
        "end": 84,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 93,
        "end": 97,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
