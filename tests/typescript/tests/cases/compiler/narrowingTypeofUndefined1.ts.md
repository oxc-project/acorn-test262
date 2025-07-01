__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
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
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 19,
                          "end": 24
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
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
                                  "name": "prop",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 28,
                                  "end": 32
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 34,
                                    "end": 40
                                  },
                                  "start": 32,
                                  "end": 40
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 28,
                                "end": 40
                              }
                            ],
                            "start": 26,
                            "end": 42
                          },
                          "start": 24,
                          "end": 42
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 19,
                        "end": 43
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 44,
                          "end": 50
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUndefinedKeyword",
                            "start": 52,
                            "end": 61
                          },
                          "start": 50,
                          "end": 61
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 44,
                        "end": 61
                      }
                    ],
                    "start": 17,
                    "end": 63
                  },
                  {
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
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 68,
                          "end": 73
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUndefinedKeyword",
                            "start": 75,
                            "end": 84
                          },
                          "start": 73,
                          "end": 84
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 68,
                        "end": 85
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 86,
                          "end": 92
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
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
                                  "name": "prop",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 96,
                                  "end": 100
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 102,
                                    "end": 108
                                  },
                                  "start": 100,
                                  "end": 108
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 96,
                                "end": 108
                              }
                            ],
                            "start": 94,
                            "end": 110
                          },
                          "start": 92,
                          "end": 110
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 86,
                        "end": 110
                      }
                    ],
                    "start": 66,
                    "end": 112
                  }
                ],
                "start": 17,
                "end": 112
              },
              "start": 15,
              "end": 112
            },
            "start": 14,
            "end": 112
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 112
        }
      ],
      "declare": true,
      "start": 0,
      "end": 112
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 132
            },
            "optional": false,
            "computed": false,
            "start": 125,
            "end": 132
          },
          "prefix": true,
          "start": 118,
          "end": 132
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "undefined",
          "raw": "'undefined'",
          "start": 137,
          "end": 148
        },
        "start": 118,
        "end": 148
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 157
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 164
                },
                "optional": false,
                "computed": false,
                "start": 156,
                "end": 164
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 169
              },
              "optional": false,
              "computed": false,
              "start": 156,
              "end": 169
            },
            "directive": null,
            "start": 156,
            "end": 170
          }
        ],
        "start": 150,
        "end": 182
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 195
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 201
                },
                "optional": false,
                "computed": false,
                "start": 194,
                "end": 201
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 206
              },
              "optional": false,
              "computed": false,
              "start": 194,
              "end": 206
            },
            "directive": null,
            "start": 194,
            "end": 207
          }
        ],
        "start": 188,
        "end": 219
      },
      "start": 114,
      "end": 219
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 233
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 239
            },
            "optional": false,
            "computed": false,
            "start": 232,
            "end": 239
          },
          "prefix": true,
          "start": 225,
          "end": 239
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "undefined",
          "raw": "'undefined'",
          "start": 244,
          "end": 255
        },
        "start": 225,
        "end": 255
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 264
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 270
                },
                "optional": false,
                "computed": false,
                "start": 263,
                "end": 270
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 271,
                "end": 275
              },
              "optional": false,
              "computed": false,
              "start": 263,
              "end": 275
            },
            "directive": null,
            "start": 263,
            "end": 276
          }
        ],
        "start": 257,
        "end": 288
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 300,
                  "end": 301
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 308
                },
                "optional": false,
                "computed": false,
                "start": 300,
                "end": 308
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 313
              },
              "optional": false,
              "computed": false,
              "start": 300,
              "end": 313
            },
            "directive": null,
            "start": 300,
            "end": 314
          }
        ],
        "start": 294,
        "end": 326
      },
      "start": 221,
      "end": 326
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 326
}
```
