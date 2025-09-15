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
        "start": 45,
        "end": 49
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
                "start": 66,
                "end": 69
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
                      "start": 74,
                      "end": 81
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
                          "start": 84,
                          "end": 90
                        },
                        "start": 83,
                        "end": 90
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
                              "start": 103,
                              "end": 109
                            },
                            "start": 96,
                            "end": 110
                          }
                        ],
                        "start": 91,
                        "end": 114
                      },
                      "expression": false,
                      "start": 81,
                      "end": 114
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 74,
                    "end": 114
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
                      "start": 117,
                      "end": 120
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
                                      "start": 137,
                                      "end": 143
                                    },
                                    "start": 136,
                                    "end": 143
                                  },
                                  "start": 132,
                                  "end": 143
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 145,
                                  "end": 149
                                },
                                "definite": false,
                                "start": 132,
                                "end": 149
                              }
                            ],
                            "declare": false,
                            "start": 128,
                            "end": 150
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
                                    "start": 159,
                                    "end": 163
                                  },
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 165,
                                        "end": 169
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "getName",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 170,
                                        "end": 177
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 165,
                                      "end": 177
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 165,
                                    "end": 179
                                  },
                                  "start": 159,
                                  "end": 179
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 181,
                                  "end": 187
                                },
                                "optional": false,
                                "computed": false,
                                "start": 158,
                                "end": 187
                              },
                              "operator": ">",
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 190,
                                "end": 191
                              },
                              "start": 158,
                              "end": 191
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
                                        "start": 199,
                                        "end": 206
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "log",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 207,
                                        "end": 210
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 199,
                                      "end": 210
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "name",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 211,
                                        "end": 215
                                      }
                                    ],
                                    "optional": false,
                                    "start": 199,
                                    "end": 216
                                  },
                                  "directive": null,
                                  "start": 199,
                                  "end": 217
                                }
                              ],
                              "start": 193,
                              "end": 222
                            },
                            "alternate": null,
                            "start": 154,
                            "end": 222
                          }
                        ],
                        "start": 123,
                        "end": 226
                      },
                      "expression": false,
                      "start": 120,
                      "end": 226
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 117,
                    "end": 226
                  }
                ],
                "start": 70,
                "end": 229
              },
              "abstract": false,
              "declare": false,
              "start": 60,
              "end": 229
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 53,
            "end": 229
          }
        ],
        "start": 50,
        "end": 231
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 35,
      "end": 231
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 235
}
```
