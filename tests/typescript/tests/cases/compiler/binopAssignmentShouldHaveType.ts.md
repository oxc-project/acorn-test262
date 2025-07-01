__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 19
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 19
        }
      ],
      "declare": true,
      "start": 0,
      "end": 20
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 21,
        "end": 33
      },
      "directive": null,
      "start": 21,
      "end": 34
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 46
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bug",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 66
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 78
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 81,
                          "end": 87
                        },
                        "start": 80,
                        "end": 87
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": "name",
                              "raw": "\"name\"",
                              "start": 100,
                              "end": 106
                            },
                            "start": 93,
                            "end": 107
                          }
                        ],
                        "start": 88,
                        "end": 111
                      },
                      "expression": false,
                      "start": 78,
                      "end": 111
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 71,
                    "end": 111
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bug",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 114,
                      "end": 117
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "name",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 134,
                                      "end": 140
                                    },
                                    "start": 133,
                                    "end": 140
                                  },
                                  "start": 129,
                                  "end": 140
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 142,
                                  "end": 146
                                },
                                "definite": false,
                                "start": 129,
                                "end": 146
                              }
                            ],
                            "declare": false,
                            "start": 125,
                            "end": 147
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 156,
                                    "end": 160
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 162,
                                        "end": 166
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "getName",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 167,
                                        "end": 174
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 162,
                                      "end": 174
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 162,
                                    "end": 176
                                  },
                                  "start": 156,
                                  "end": 176
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 178,
                                  "end": 184
                                },
                                "optional": false,
                                "computed": false,
                                "start": 155,
                                "end": 184
                              },
                              "operator": ">",
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 187,
                                "end": 188
                              },
                              "start": 155,
                              "end": 188
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 196,
                                        "end": 203
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 204,
                                        "end": 207
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 196,
                                      "end": 207
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "name",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 208,
                                        "end": 212
                                      }
                                    ],
                                    "optional": false,
                                    "start": 196,
                                    "end": 213
                                  },
                                  "directive": null,
                                  "start": 196,
                                  "end": 214
                                }
                              ],
                              "start": 190,
                              "end": 219
                            },
                            "alternate": null,
                            "start": 151,
                            "end": 219
                          }
                        ],
                        "start": 120,
                        "end": 223
                      },
                      "expression": false,
                      "start": 117,
                      "end": 223
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 114,
                    "end": 223
                  }
                ],
                "start": 67,
                "end": 226
              },
              "abstract": false,
              "declare": false,
              "start": 57,
              "end": 226
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 50,
            "end": 226
          }
        ],
        "start": 47,
        "end": 228
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 35,
      "end": 228
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 232
}
```
