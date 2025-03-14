__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 296,
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
      "end": 296,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 296,
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
            "end": 294,
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
              "end": 294,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 294,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 97,
                    "end": 225,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 110,
                      "end": 225,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 124,
                          "end": 142,
                          "accessibility": "public",
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "Identifier",
                            "start": 131,
                            "end": 132,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 132,
                            "end": 141,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 134,
                              "end": 141
                            }
                          },
                          "value": null
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 155,
                          "end": 215,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 155,
                            "end": 166,
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
                            "start": 166,
                            "end": 215,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 169,
                              "end": 215,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 187,
                                  "end": 201,
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "start": 187,
                                    "end": 200,
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "start": 187,
                                      "end": 193,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 187,
                                        "end": 191
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 192,
                                        "end": 193,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "start": 196,
                                      "end": 200,
                                      "raw": "true",
                                      "value": true
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
                      "start": 103,
                      "end": 109,
                      "decorators": [],
                      "name": "innver",
                      "optional": false
                    },
                    "implements": [],
                    "superClass": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 234,
                    "end": 242,
                    "expression": {
                      "type": "CallExpression",
                      "start": 234,
                      "end": 241,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 234,
                        "end": 239
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 251,
                    "end": 263,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 251,
                      "end": 262,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 251,
                        "end": 257,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 251,
                          "end": 255
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 256,
                          "end": 257,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 260,
                        "end": 262,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 272,
                    "end": 288,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 276,
                        "end": 287,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 280,
                          "decorators": [],
                          "name": "that",
                          "optional": false
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 283,
                          "end": 287
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
  "sourceType": "script",
  "hashbang": null
}
```
