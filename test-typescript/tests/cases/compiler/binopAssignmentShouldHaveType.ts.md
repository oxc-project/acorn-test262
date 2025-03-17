__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 19,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 63,
                "end": 66,
                "name": "Bug",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 67,
                "end": 226,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 71,
                    "end": 111,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 78,
                      "name": "getName",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 78,
                      "end": 111,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                      "declare": false,
                      "typeParameters": null,
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
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 114,
                    "end": 223,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 117,
                      "name": "bug",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 117,
                      "end": 223,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 129,
                                  "end": 140,
                                  "name": "name",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 133,
                                    "end": 140,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 134,
                                      "end": 140
                                    }
                                  },
                                  "decorators": [],
                                  "optional": false
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
                            "kind": "var",
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
                                    "name": "name",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
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
                                        "name": "getName",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [],
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 178,
                                  "end": 184,
                                  "name": "length",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
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
                                        "name": "console",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 204,
                                        "end": 207,
                                        "name": "log",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 208,
                                        "end": 212,
                                        "name": "name",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  "directive": null
                                }
                              ]
                            },
                            "alternate": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
