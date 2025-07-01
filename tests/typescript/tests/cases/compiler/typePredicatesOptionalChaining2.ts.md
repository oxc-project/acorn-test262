__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 16,
            "end": 29
          }
        ],
        "start": 14,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "getName1",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 47
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
                "name": "person",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 66
                    },
                    "typeArguments": null,
                    "start": 60,
                    "end": 66
                  },
                  "start": 58,
                  "end": 66
                },
                "start": 51,
                "end": 66
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
              },
              "start": 67,
              "end": 75
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "typeof",
                        "argument": {
                          "type": "ChainExpression",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "person",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 97,
                              "end": 103
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 105,
                              "end": 109
                            },
                            "optional": true,
                            "computed": false,
                            "start": 97,
                            "end": 109
                          },
                          "start": 97,
                          "end": 109
                        },
                        "prefix": true,
                        "start": 90,
                        "end": 109
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "'string'",
                        "start": 114,
                        "end": 122
                      },
                      "start": 90,
                      "end": 122
                    },
                    "consequent": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "person",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 131
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 133,
                          "end": 137
                        },
                        "optional": true,
                        "computed": false,
                        "start": 125,
                        "end": 137
                      },
                      "start": 125,
                      "end": 137
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 140,
                      "end": 142
                    },
                    "start": 90,
                    "end": 142
                  },
                  "start": 83,
                  "end": 143
                }
              ],
              "start": 79,
              "end": 145
            },
            "id": null,
            "generator": false,
            "start": 50,
            "end": 145
          },
          "definite": false,
          "start": 39,
          "end": 145
        }
      ],
      "declare": false,
      "start": 33,
      "end": 146
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "isString",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 162
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
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 173,
                    "end": 176
                  },
                  "start": 171,
                  "end": 176
                },
                "start": 166,
                "end": 176
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 184
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 188,
                    "end": 194
                  },
                  "start": 188,
                  "end": 194
                },
                "start": 179,
                "end": 194
              },
              "start": 177,
              "end": 194
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 216,
                        "end": 221
                      },
                      "prefix": true,
                      "start": 209,
                      "end": 221
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'",
                      "start": 226,
                      "end": 234
                    },
                    "start": 209,
                    "end": 234
                  },
                  "start": 202,
                  "end": 235
                }
              ],
              "start": 198,
              "end": 237
            },
            "id": null,
            "generator": false,
            "start": 165,
            "end": 237
          },
          "definite": false,
          "start": 154,
          "end": 237
        }
      ],
      "declare": false,
      "start": 148,
      "end": 238
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "getName2",
            "optional": false,
            "typeAnnotation": null,
            "start": 246,
            "end": 254
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
                "name": "person",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 267,
                      "end": 273
                    },
                    "typeArguments": null,
                    "start": 267,
                    "end": 273
                  },
                  "start": 265,
                  "end": 273
                },
                "start": 258,
                "end": 273
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 276,
                "end": 282
              },
              "start": 274,
              "end": 282
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 297,
                        "end": 305
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ChainExpression",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "person",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 306,
                              "end": 312
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 314,
                              "end": 318
                            },
                            "optional": true,
                            "computed": false,
                            "start": 306,
                            "end": 318
                          },
                          "start": 306,
                          "end": 318
                        }
                      ],
                      "optional": false,
                      "start": 297,
                      "end": 319
                    },
                    "consequent": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "person",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 322,
                          "end": 328
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 330,
                          "end": 334
                        },
                        "optional": true,
                        "computed": false,
                        "start": 322,
                        "end": 334
                      },
                      "start": 322,
                      "end": 334
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 337,
                      "end": 339
                    },
                    "start": 297,
                    "end": 339
                  },
                  "start": 290,
                  "end": 340
                }
              ],
              "start": 286,
              "end": 342
            },
            "id": null,
            "generator": false,
            "start": 257,
            "end": 342
          },
          "definite": false,
          "start": 246,
          "end": 342
        }
      ],
      "declare": false,
      "start": 240,
      "end": 343
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 343
}
```
