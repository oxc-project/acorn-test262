__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 85,
  "end": 430,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 94,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 105,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 107,
                    "end": 135,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "start": 108,
                        "end": 125,
                        "left": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 113,
                          "name": "param",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 116,
                          "end": 125,
                          "value": "default",
                          "raw": "\"default\""
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "body": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 135,
                      "name": "param",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
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
                      "name": "key",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 158,
                        "end": 166,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 160,
                          "end": 166
                        }
                      },
                      "decorators": [],
                      "optional": false
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
                          "argument": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 179,
                            "name": "params",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "decorators": [],
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 294,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 208,
            "name": "obj2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 219,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 221,
                    "end": 249,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "start": 222,
                        "end": 239,
                        "left": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 227,
                          "name": "param",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 230,
                          "end": 239,
                          "value": "default",
                          "raw": "\"default\""
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "body": {
                      "type": "Identifier",
                      "start": 244,
                      "end": 249,
                      "name": "param",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
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
                      "name": "key",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 272,
                        "end": 280,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 274,
                          "end": 280
                        }
                      },
                      "decorators": [],
                      "optional": false
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
                        "name": "Function",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
      "kind": "const",
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
        "name": "StringOrNumberFunc",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": "x",
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
            },
            "decorators": [],
            "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 413,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 361,
            "name": "fn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 364,
            "end": 413,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 365,
              "end": 383,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 366,
                  "end": 374,
                  "left": {
                    "type": "Identifier",
                    "start": 366,
                    "end": 367,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 370,
                    "end": 374,
                    "value": "ok",
                    "raw": "\"ok\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "Literal",
                "start": 379,
                "end": 383,
                "value": null,
                "raw": "null"
              },
              "typeParameters": null,
              "returnType": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 395,
              "end": 413,
              "typeName": {
                "type": "Identifier",
                "start": 395,
                "end": 413,
                "name": "StringOrNumberFunc",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
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
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
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
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 424,
            "end": 426,
            "value": 32,
            "raw": "32"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
