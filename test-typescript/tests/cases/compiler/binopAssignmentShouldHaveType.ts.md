binopAssignmentShouldHaveType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 233,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 19,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 21,
      "end": 34,
      "expression": {
        "type": "Literal",
        "start": 21,
        "end": 33,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 228,
      "body": {
        "type": "TSModuleBlock",
        "start": 47,
        "end": 228,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 50,
            "end": 226,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 57,
              "end": 226,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 67,
                "end": 226,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 71,
                    "end": 111,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 78,
                      "decorators": [],
                      "name": "getName",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 78,
                      "end": 111,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 88,
                        "end": 111,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 93,
                            "end": 107,
                            "argument": {
                              "type": "Literal",
                              "start": 100,
                              "end": 106,
                              "raw": "\"name\"",
                              "value": "name"
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
                        "start": 80,
                        "end": 87,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 81,
                          "end": 87
                        }
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 114,
                    "end": 223,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 117,
                      "decorators": [],
                      "name": "bug",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 117,
                      "end": 223,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 120,
                        "end": 223,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 125,
                            "end": 147,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 129,
                                "end": 146,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 129,
                                  "end": 140,
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 133,
                                    "end": 140,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 134,
                                      "end": 140
                                    }
                                  }
                                },
                                "init": {
                                  "type": "Literal",
                                  "start": 142,
                                  "end": 146,
                                  "raw": "null",
                                  "value": null
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "IfStatement",
                            "start": 151,
                            "end": 219,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 190,
                              "end": 219,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 196,
                                  "end": 214,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 196,
                                    "end": 213,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 208,
                                        "end": 212,
                                        "decorators": [],
                                        "name": "name",
                                        "optional": false
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 196,
                                      "end": 207,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 196,
                                        "end": 203,
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 204,
                                        "end": 207,
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false
                                      }
                                    },
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "start": 155,
                              "end": 188,
                              "operator": ">",
                              "left": {
                                "type": "MemberExpression",
                                "start": 155,
                                "end": 184,
                                "computed": false,
                                "object": {
                                  "type": "AssignmentExpression",
                                  "start": 156,
                                  "end": 176,
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 156,
                                    "end": 160,
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "start": 162,
                                    "end": 176,
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 162,
                                      "end": 174,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 162,
                                        "end": 166
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 167,
                                        "end": 174,
                                        "decorators": [],
                                        "name": "getName",
                                        "optional": false
                                      }
                                    },
                                    "optional": false
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 178,
                                  "end": 184,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 187,
                                "end": 188,
                                "raw": "0",
                                "value": 0
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
                "start": 63,
                "end": 66,
                "decorators": [],
                "name": "Bug",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 46,
        "decorators": [],
        "name": "Test",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
