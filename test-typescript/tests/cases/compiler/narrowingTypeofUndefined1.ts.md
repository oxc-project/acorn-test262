__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 327,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 112,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 112,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 112,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 17,
                "end": 112,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 17,
                    "end": 63,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 19,
                        "end": 43,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 19,
                          "end": 24,
                          "name": "error",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 24,
                          "end": 42,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 26,
                            "end": 42,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 28,
                                "end": 40,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 28,
                                  "end": 32,
                                  "name": "prop",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 32,
                                  "end": 40,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 34,
                                    "end": 40
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 44,
                        "end": 61,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 44,
                          "end": 50,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 50,
                          "end": 61,
                          "typeAnnotation": {
                            "type": "TSUndefinedKeyword",
                            "start": 52,
                            "end": 61
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 66,
                    "end": 112,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 68,
                        "end": 85,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 73,
                          "name": "error",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 73,
                          "end": 84,
                          "typeAnnotation": {
                            "type": "TSUndefinedKeyword",
                            "start": 75,
                            "end": 84
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 86,
                        "end": 110,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 92,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 92,
                          "end": 110,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 94,
                            "end": 110,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 96,
                                "end": 108,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 96,
                                  "end": 100,
                                  "name": "prop",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 100,
                                  "end": 108,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 102,
                                    "end": 108
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 114,
      "end": 219,
      "test": {
        "type": "BinaryExpression",
        "start": 118,
        "end": 148,
        "left": {
          "type": "UnaryExpression",
          "start": 118,
          "end": 132,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "MemberExpression",
            "start": 125,
            "end": 132,
            "object": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 127,
              "end": 132,
              "name": "error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 137,
          "end": 148,
          "value": "undefined",
          "raw": "'undefined'"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 150,
        "end": 182,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 156,
            "end": 170,
            "expression": {
              "type": "MemberExpression",
              "start": 156,
              "end": 169,
              "object": {
                "type": "MemberExpression",
                "start": 156,
                "end": 164,
                "object": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 157,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 164,
                  "name": "result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 165,
                "end": 169,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 188,
        "end": 219,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 194,
            "end": 207,
            "expression": {
              "type": "MemberExpression",
              "start": 194,
              "end": 206,
              "object": {
                "type": "MemberExpression",
                "start": 194,
                "end": 201,
                "object": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 195,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 201,
                  "name": "error",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 202,
                "end": 206,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 221,
      "end": 326,
      "test": {
        "type": "BinaryExpression",
        "start": 225,
        "end": 255,
        "left": {
          "type": "UnaryExpression",
          "start": 225,
          "end": 239,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "MemberExpression",
            "start": 232,
            "end": 239,
            "object": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 234,
              "end": 239,
              "name": "error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 244,
          "end": 255,
          "value": "undefined",
          "raw": "'undefined'"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 257,
        "end": 288,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 263,
            "end": 276,
            "expression": {
              "type": "MemberExpression",
              "start": 263,
              "end": 275,
              "object": {
                "type": "MemberExpression",
                "start": 263,
                "end": 270,
                "object": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 264,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 270,
                  "name": "error",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 271,
                "end": 275,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 294,
        "end": 326,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 300,
            "end": 314,
            "expression": {
              "type": "MemberExpression",
              "start": 300,
              "end": 313,
              "object": {
                "type": "MemberExpression",
                "start": 300,
                "end": 308,
                "object": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 301,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 308,
                  "name": "result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 309,
                "end": 313,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
