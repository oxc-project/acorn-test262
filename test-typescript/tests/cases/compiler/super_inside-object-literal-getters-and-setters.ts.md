__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 518,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 296,
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 296,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 294,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 294,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 50,
                  "decorators": [],
                  "name": "ThisInObjectLiteral",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 53,
                  "end": 294,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 63,
                      "end": 72,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 67,
                        "decorators": [],
                        "name": "_foo",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 69,
                        "end": 72,
                        "raw": "'1'",
                        "value": "1"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 82,
                      "end": 142,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 89,
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
                        "start": 89,
                        "end": 142,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 100,
                          "end": 142,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 114,
                              "end": 132,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 121,
                                "end": 131,
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "start": 121,
                                  "end": 126
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 127,
                                  "end": 131,
                                  "decorators": [],
                                  "name": "_foo",
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
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 91,
                          "end": 99,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 93,
                            "end": 99
                          }
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "start": 152,
                      "end": 218,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 156,
                        "end": 159,
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
                        "start": 159,
                        "end": 218,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 175,
                          "end": 218,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 189,
                              "end": 208,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 189,
                                "end": 207,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 189,
                                  "end": 199,
                                  "computed": false,
                                  "object": {
                                    "type": "Super",
                                    "start": 189,
                                    "end": 194
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 195,
                                    "end": 199,
                                    "decorators": [],
                                    "name": "_foo",
                                    "optional": false
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 202,
                                  "end": 207,
                                  "decorators": [],
                                  "name": "value",
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 160,
                            "end": 173,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 165,
                              "end": 173,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 167,
                                "end": 173
                              }
                            }
                          }
                        ]
                      }
                    },
                    {
                      "type": "Property",
                      "start": 228,
                      "end": 288,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 232,
                        "decorators": [],
                        "name": "test",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 234,
                        "end": 288,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 246,
                          "end": 288,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 260,
                              "end": 278,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 267,
                                "end": 277,
                                "computed": false,
                                "object": {
                                  "type": "Super",
                                  "start": 267,
                                  "end": 272
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 273,
                                  "end": 277,
                                  "decorators": [],
                                  "name": "_foo",
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
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 20,
        "decorators": [],
        "name": "ObjectLiteral",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 298,
      "end": 346,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 306,
        "end": 346,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 308,
            "end": 344,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 315,
              "end": 319,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 319,
              "end": 344,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 330,
                "end": 344,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 332,
                    "end": 342,
                    "argument": {
                      "type": "Literal",
                      "start": 339,
                      "end": 341,
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
                "start": 321,
                "end": 329,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 323,
                  "end": 329
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
        "start": 304,
        "end": 305,
        "decorators": [],
        "name": "F",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 347,
      "end": 516,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 379,
        "end": 516,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 385,
            "end": 514,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 392,
              "end": 399,
              "decorators": [],
              "name": "testing",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 399,
              "end": 514,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 402,
                "end": 514,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 412,
                    "end": 508,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 416,
                        "end": 507,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 416,
                          "end": 420,
                          "decorators": [],
                          "name": "test",
                          "optional": false
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 423,
                          "end": 507,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 437,
                              "end": 497,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 441,
                                "end": 442,
                                "decorators": [],
                                "name": "F",
                                "optional": false
                              },
                              "kind": "get",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 442,
                                "end": 497,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 445,
                                  "end": 497,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 463,
                                      "end": 483,
                                      "argument": {
                                        "type": "CallExpression",
                                        "start": 470,
                                        "end": 482,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 470,
                                          "end": 480,
                                          "computed": false,
                                          "object": {
                                            "type": "Super",
                                            "start": 470,
                                            "end": 475
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 476,
                                            "end": 480,
                                            "decorators": [],
                                            "name": "test",
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
        "start": 353,
        "end": 368,
        "decorators": [],
        "name": "SuperObjectTest",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 377,
        "end": 378,
        "decorators": [],
        "name": "F",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
