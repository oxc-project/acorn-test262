__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 389,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 27,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
              "start": 18,
              "end": 26,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 20,
                "end": 26
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 389,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 389,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 387,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 76,
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
              "start": 76,
              "end": 387,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 387,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 89,
                    "end": 112,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 93,
                        "end": 111,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 93,
                          "end": 95,
                          "decorators": [],
                          "name": "r2",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 98,
                          "end": 111,
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "start": 104,
                            "end": 111,
                            "arguments": [],
                            "callee": {
                              "type": "Super",
                              "start": 104,
                              "end": 109
                            },
                            "optional": false
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": []
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 121,
                    "end": 148,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 125,
                        "end": 148,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 127,
                          "decorators": [],
                          "name": "r3",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 130,
                          "end": 148,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 136,
                            "end": 148,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 138,
                                "end": 146,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 138,
                                  "end": 145,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Super",
                                    "start": 138,
                                    "end": 143
                                  },
                                  "optional": false
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
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 157,
                    "end": 190,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 161,
                        "end": 190,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 161,
                          "end": 163,
                          "decorators": [],
                          "name": "r4",
                          "optional": false
                        },
                        "init": {
                          "type": "FunctionExpression",
                          "start": 166,
                          "end": 190,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 178,
                            "end": 190,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 180,
                                "end": 188,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 180,
                                  "end": 187,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Super",
                                    "start": 180,
                                    "end": 185
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
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 199,
                    "end": 381,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 203,
                        "end": 381,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 205,
                          "decorators": [],
                          "name": "r5",
                          "optional": false
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 208,
                          "end": 381,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 222,
                              "end": 298,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 226,
                                "end": 229,
                                "decorators": [],
                                "name": "foo",
                                "optional": false
                              },
                              "kind": "get",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 229,
                                "end": 298,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 232,
                                  "end": 298,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 250,
                                      "end": 258,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 250,
                                        "end": 257,
                                        "arguments": [],
                                        "callee": {
                                          "type": "Super",
                                          "start": 250,
                                          "end": 255
                                        },
                                        "optional": false
                                      }
                                    },
                                    {
                                      "type": "ReturnStatement",
                                      "start": 275,
                                      "end": 284,
                                      "argument": {
                                        "type": "Literal",
                                        "start": 282,
                                        "end": 283,
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
                            },
                            {
                              "type": "Property",
                              "start": 312,
                              "end": 371,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 316,
                                "end": 319,
                                "decorators": [],
                                "name": "foo",
                                "optional": false
                              },
                              "kind": "set",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 319,
                                "end": 371,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 331,
                                  "end": 371,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 349,
                                      "end": 357,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 349,
                                        "end": 356,
                                        "arguments": [],
                                        "callee": {
                                          "type": "Super",
                                          "start": 349,
                                          "end": 354
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
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 320,
                                    "end": 329,
                                    "decorators": [],
                                    "name": "v",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 321,
                                      "end": 329,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 323,
                                        "end": 329
                                      }
                                    }
                                  }
                                ]
                              }
                            }
                          ]
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
        "start": 38,
        "end": 45,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 54,
        "end": 58,
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
