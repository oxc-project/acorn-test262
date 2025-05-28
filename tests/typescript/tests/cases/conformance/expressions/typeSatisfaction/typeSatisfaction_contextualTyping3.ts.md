__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 85,
  "end": 429,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 196,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 94,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 97,
            "end": 195,
            "expression": {
              "type": "ObjectExpression",
              "start": 97,
              "end": 138,
              "properties": [
                {
                  "type": "Property",
                  "start": 102,
                  "end": 135,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 105,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 107,
                    "end": 135,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "start": 108,
                        "end": 125,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 113,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 116,
                          "end": 125,
                          "value": "default",
                          "raw": "\"default\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 135,
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 149,
              "end": 195,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 154,
                  "end": 193,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 155,
                      "end": 166,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 158,
                        "end": 166,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 160,
                          "end": 166
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 167,
                    "end": 192,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 169,
                      "end": 192,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 170,
                          "end": 184,
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 179,
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 179,
                            "end": 184,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 181,
                              "end": 184
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 186,
                        "end": 192,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 189,
                          "end": 192
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 295,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 294,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 208,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 211,
            "end": 294,
            "expression": {
              "type": "ObjectExpression",
              "start": 211,
              "end": 252,
              "properties": [
                {
                  "type": "Property",
                  "start": 216,
                  "end": 249,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 219,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 221,
                    "end": 249,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "start": 222,
                        "end": 239,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 227,
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 230,
                          "end": 239,
                          "value": "default",
                          "raw": "\"default\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "start": 244,
                      "end": 249,
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 263,
              "end": 294,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 268,
                  "end": 292,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 269,
                      "end": 280,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 272,
                        "end": 280,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 274,
                          "end": 280
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 281,
                    "end": 291,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 283,
                      "end": 291,
                      "typeName": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 291,
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 297,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 302,
        "end": 320,
        "decorators": [],
        "name": "StringOrNumberFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 323,
        "end": 350,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 324,
            "end": 342,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 342,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 327,
                "end": 342,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 327,
                    "end": 333
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 336,
                    "end": 342
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 344,
          "end": 350,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 347,
            "end": 350
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 353,
      "end": 414,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 413,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 361,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 364,
            "end": 413,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 365,
              "end": 383,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 366,
                  "end": 374,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 366,
                    "end": 367,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 370,
                    "end": 374,
                    "value": "ok",
                    "raw": "\"ok\""
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "start": 379,
                "end": 383,
                "value": null,
                "raw": "null"
              },
              "id": null,
              "generator": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 395,
              "end": 413,
              "typeName": {
                "type": "Identifier",
                "start": 395,
                "end": 413,
                "decorators": [],
                "name": "StringOrNumberFunc",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 415,
      "end": 420,
      "expression": {
        "type": "CallExpression",
        "start": 415,
        "end": 419,
        "callee": {
          "type": "Identifier",
          "start": 415,
          "end": 417,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 421,
      "end": 428,
      "expression": {
        "type": "CallExpression",
        "start": 421,
        "end": 427,
        "callee": {
          "type": "Identifier",
          "start": 421,
          "end": 423,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 424,
            "end": 426,
            "value": 32,
            "raw": "32"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
