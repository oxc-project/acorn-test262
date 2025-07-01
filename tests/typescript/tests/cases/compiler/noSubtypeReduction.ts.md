__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IA",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 41
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 51
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 55,
                          "end": 56
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 58,
                            "end": 64
                          },
                          "start": 56,
                          "end": 64
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 55,
                        "end": 65
                      }
                    ],
                    "start": 53,
                    "end": 67
                  },
                  "start": 53,
                  "end": 69
                },
                "start": 51,
                "end": 69
              },
              "accessibility": null,
              "static": false,
              "start": 48,
              "end": 70
            }
          ],
          "start": 42,
          "end": 72
        },
        "declare": false,
        "start": 29,
        "end": 72
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 22,
      "end": 72
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IAB",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 94
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 104
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 108,
                          "end": 109
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 111,
                            "end": 117
                          },
                          "start": 109,
                          "end": 117
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 108,
                        "end": 118
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 119,
                          "end": 120
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 122,
                            "end": 128
                          },
                          "start": 120,
                          "end": 128
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 119,
                        "end": 129
                      }
                    ],
                    "start": 106,
                    "end": 131
                  },
                  "start": 106,
                  "end": 133
                },
                "start": 104,
                "end": 133
              },
              "accessibility": null,
              "static": false,
              "start": 101,
              "end": 134
            }
          ],
          "start": 95,
          "end": 136
        },
        "declare": false,
        "start": 81,
        "end": 136
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 74,
      "end": 136
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 154,
          "end": 155
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 161
                    },
                    "typeArguments": null,
                    "start": 159,
                    "end": 161
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IAB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 164,
                      "end": 167
                    },
                    "typeArguments": null,
                    "start": 164,
                    "end": 167
                  }
                ],
                "start": 159,
                "end": 167
              },
              "start": 157,
              "end": 167
            },
            "start": 156,
            "end": 167
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "useB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 181,
                    "end": 185
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 192,
                            "end": 198
                          },
                          "start": 190,
                          "end": 198
                        },
                        "start": 189,
                        "end": 198
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 203,
                      "end": 206
                    },
                    "id": null,
                    "generator": false,
                    "start": 188,
                    "end": 206
                  },
                  "definite": false,
                  "start": 181,
                  "end": 206
                }
              ],
              "declare": false,
              "start": 175,
              "end": 207
            },
            {
              "type": "ForOfStatement",
              "await": false,
              "left": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "el",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 225
                    },
                    "init": null,
                    "definite": false,
                    "start": 223,
                    "end": 225
                  }
                ],
                "declare": false,
                "start": 217,
                "end": 225
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 230
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 234
                },
                "optional": false,
                "computed": false,
                "start": 229,
                "end": 234
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "A",
                        "raw": "'A'",
                        "start": 250,
                        "end": 253
                      },
                      "operator": "in",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "el",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 257,
                        "end": 259
                      },
                      "start": 250,
                      "end": 259
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 261,
                      "end": 264
                    },
                    "alternate": null,
                    "start": 246,
                    "end": 264
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "B",
                        "raw": "'B'",
                        "start": 277,
                        "end": 280
                      },
                      "operator": "in",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "el",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 284,
                        "end": 286
                      },
                      "start": 277,
                      "end": 286
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "useB",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 302,
                              "end": 306
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "el",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 307,
                                  "end": 309
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 310,
                                  "end": 311
                                },
                                "optional": false,
                                "computed": false,
                                "start": 307,
                                "end": 311
                              }
                            ],
                            "optional": false,
                            "start": 302,
                            "end": 312
                          },
                          "directive": null,
                          "start": 302,
                          "end": 313
                        }
                      ],
                      "start": 288,
                      "end": 323
                    },
                    "alternate": null,
                    "start": 273,
                    "end": 323
                  }
                ],
                "start": 236,
                "end": 329
              },
              "start": 212,
              "end": 329
            }
          ],
          "start": 169,
          "end": 331
        },
        "expression": false,
        "start": 145,
        "end": 331
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 138,
      "end": 331
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 331
}
```
