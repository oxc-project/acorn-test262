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
        "start": 7,
        "end": 8
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
                "start": 28,
                "end": 29
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
                      "start": 40,
                      "end": 41
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
                                          "start": 50,
                                          "end": 56
                                        },
                                        "start": 49,
                                        "end": 56
                                      },
                                      "start": 48,
                                      "end": 56
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 58,
                                      "end": 64
                                    },
                                    "start": 57,
                                    "end": 64
                                  },
                                  "start": 47,
                                  "end": 65
                                }
                              ],
                              "start": 45,
                              "end": 67
                            },
                            "start": 44,
                            "end": 67
                          },
                          "start": 42,
                          "end": 67
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
                              "start": 71,
                              "end": 77
                            },
                            "start": 70,
                            "end": 77
                          },
                          "start": 68,
                          "end": 77
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 79,
                          "end": 85
                        },
                        "start": 78,
                        "end": 85
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
                                "start": 107,
                                "end": 109
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "n2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 110,
                                  "end": 112
                                }
                              ],
                              "optional": false,
                              "start": 107,
                              "end": 113
                            },
                            "start": 100,
                            "end": 114
                          }
                        ],
                        "start": 86,
                        "end": 124
                      },
                      "expression": false,
                      "start": 41,
                      "end": 124
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 40,
                    "end": 124
                  }
                ],
                "start": 30,
                "end": 130
              },
              "abstract": false,
              "declare": false,
              "start": 22,
              "end": 130
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 130
          }
        ],
        "start": 9,
        "end": 132
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 132
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
            "start": 138,
            "end": 139
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
                "start": 144,
                "end": 145
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 147
              },
              "optional": false,
              "computed": false,
              "start": 144,
              "end": 147
            },
            "typeArguments": null,
            "arguments": [],
            "start": 140,
            "end": 149
          },
          "definite": false,
          "start": 138,
          "end": 149
        }
      ],
      "declare": false,
      "start": 134,
      "end": 150
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
            "start": 151,
            "end": 152
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 154
          },
          "optional": false,
          "computed": false,
          "start": 151,
          "end": 154
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
                "start": 164,
                "end": 165
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
                      "start": 176,
                      "end": 185
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 187
                    },
                    "start": 176,
                    "end": 187
                  },
                  "start": 169,
                  "end": 188
                }
              ],
              "start": 167,
              "end": 190
            },
            "expression": false,
            "start": 155,
            "end": 190
          },
          {
            "type": "Literal",
            "value": 18,
            "raw": "18",
            "start": 191,
            "end": 193
          }
        ],
        "optional": false,
        "start": 151,
        "end": 194
      },
      "directive": null,
      "start": 151,
      "end": 195
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 198
}
```
