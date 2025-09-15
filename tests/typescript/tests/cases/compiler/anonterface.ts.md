__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
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
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 43,
                      "end": 44
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "n",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSNumberKeyword",
                                          "start": 53,
                                          "end": 59
                                        },
                                        "start": 52,
                                        "end": 59
                                      },
                                      "start": 51,
                                      "end": 59
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 61,
                                      "end": 67
                                    },
                                    "start": 60,
                                    "end": 67
                                  },
                                  "start": 50,
                                  "end": 68
                                }
                              ],
                              "start": 48,
                              "end": 70
                            },
                            "start": 47,
                            "end": 70
                          },
                          "start": 45,
                          "end": 70
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 74,
                              "end": 80
                            },
                            "start": 73,
                            "end": 80
                          },
                          "start": 71,
                          "end": 80
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 82,
                          "end": 88
                        },
                        "start": 81,
                        "end": 88
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "fn",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 110,
                                "end": 112
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "n2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 113,
                                  "end": 115
                                }
                              ],
                              "optional": false,
                              "start": 110,
                              "end": 116
                            },
                            "start": 103,
                            "end": 117
                          }
                        ],
                        "start": 89,
                        "end": 127
                      },
                      "expression": false,
                      "start": 44,
                      "end": 127
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 43,
                    "end": 127
                  }
                ],
                "start": 33,
                "end": 133
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 133
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 133
          }
        ],
        "start": 12,
        "end": 135
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 135
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 142
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 148
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 150
              },
              "optional": false,
              "computed": false,
              "start": 147,
              "end": 150
            },
            "typeArguments": null,
            "arguments": [],
            "start": 143,
            "end": 152
          },
          "definite": false,
          "start": 141,
          "end": 152
        }
      ],
      "declare": false,
      "start": 137,
      "end": 153
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 155
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 157
          },
          "optional": false,
          "computed": false,
          "start": 154,
          "end": 157
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 168
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "hello: ",
                      "raw": "\"hello: \"",
                      "start": 179,
                      "end": 188
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 189,
                      "end": 190
                    },
                    "start": 179,
                    "end": 190
                  },
                  "start": 172,
                  "end": 191
                }
              ],
              "start": 170,
              "end": 193
            },
            "expression": false,
            "start": 158,
            "end": 193
          },
          {
            "type": "Literal",
            "value": 18,
            "raw": "18",
            "start": 194,
            "end": 196
          }
        ],
        "optional": false,
        "start": 154,
        "end": 197
      },
      "directive": null,
      "start": 154,
      "end": 198
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 201
}
```
