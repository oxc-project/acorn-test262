__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 232,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 19,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 21,
      "end": 34,
      "expression": {
        "type": "Literal",
        "start": 21,
        "end": 33,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 35,
      "end": 228,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 46,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 47,
        "end": 228,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 50,
            "end": 226,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 57,
              "end": 226,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 63,
                "end": 66,
                "decorators": [],
                "name": "Bug",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 67,
                "end": 226,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 71,
                    "end": 111,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 78,
                      "decorators": [],
                      "name": "getName",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 78,
                      "end": 111,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
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
                      },
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
                              "value": "name",
                              "raw": "\"name\""
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 114,
                    "end": 223,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 117,
                      "decorators": [],
                      "name": "bug",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 117,
                      "end": 223,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 120,
                        "end": 223,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 125,
                            "end": 147,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 129,
                                "end": 146,
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
                                  "value": null,
                                  "raw": "null"
                                },
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          {
                            "type": "IfStatement",
                            "start": 151,
                            "end": 219,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 155,
                              "end": 188,
                              "left": {
                                "type": "MemberExpression",
                                "start": 155,
                                "end": 184,
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
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "start": 162,
                                    "end": 176,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 162,
                                      "end": 174,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 162,
                                        "end": 166
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 167,
                                        "end": 174,
                                        "decorators": [],
                                        "name": "getName",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 178,
                                  "end": 184,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "operator": ">",
                              "right": {
                                "type": "Literal",
                                "start": 187,
                                "end": 188,
                                "value": 0,
                                "raw": "0"
                              }
                            },
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
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 196,
                                      "end": 207,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 196,
                                        "end": 203,
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 204,
                                        "end": 207,
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 208,
                                        "end": 212,
                                        "decorators": [],
                                        "name": "name",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "optional": false
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "alternate": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
