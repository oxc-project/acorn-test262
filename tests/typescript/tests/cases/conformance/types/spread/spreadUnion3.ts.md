__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 483,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 109,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 109,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 62,
            "end": 85,
            "argument": {
              "type": "ObjectExpression",
              "start": 69,
              "end": 85,
              "properties": [
                {
                  "type": "Property",
                  "start": 71,
                  "end": 77,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 71,
                    "end": 72,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 74,
                    "end": 77,
                    "raw": "123",
                    "value": 123
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 79,
                  "end": 83,
                  "argument": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 39,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 39,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 14,
              "end": 39,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 14,
                  "end": 27,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 16,
                      "end": 25,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 16,
                        "end": 17,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 17,
                        "end": 25,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 19,
                          "end": 25
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 30,
                  "end": 39
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 40,
        "end": 55,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 42,
          "end": 55,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 44,
              "end": 53,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 44,
                "end": 45,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 45,
                "end": 53,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 47,
                  "end": 53
                }
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 122,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 122,
        "arguments": [
          {
            "type": "Identifier",
            "start": 112,
            "end": 121,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 110,
          "end": 111,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 125,
      "end": 241,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 168,
        "end": 241,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 174,
            "end": 191,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 178,
                "end": 190,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 179,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 182,
                  "end": 190,
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "start": 184,
                      "end": 188,
                      "argument": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 188,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 196,
            "end": 216,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 200,
                "end": 215,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 209,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 201,
                    "end": 209,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 203,
                      "end": 209
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 212,
                  "end": 215,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 213,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 215,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 135,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 136,
          "end": 160,
          "decorators": [],
          "name": "t",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 138,
            "end": 160,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 140,
              "end": 160,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 140,
                  "end": 153,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 142,
                      "end": 151,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 143,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 143,
                        "end": 151,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 145,
                          "end": 151
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSNullKeyword",
                  "start": 156,
                  "end": 160
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 161,
        "end": 167,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 163,
          "end": 167
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 245,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 242,
        "end": 245,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 242,
          "end": 243,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 246,
      "end": 258,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 246,
        "end": 258,
        "arguments": [
          {
            "type": "Identifier",
            "start": 248,
            "end": 257,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 246,
          "end": 247,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 259,
      "end": 266,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 259,
        "end": 266,
        "arguments": [
          {
            "type": "Literal",
            "start": 261,
            "end": 265,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 259,
          "end": 260,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 327,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 341,
          "end": 380,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 341,
            "end": 380,
            "decorators": [],
            "name": "nullAndUndefinedUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 362,
              "end": 380,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 364,
                "end": 380,
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 364,
                    "end": 368
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 371,
                    "end": 380
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 382,
      "end": 445,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 386,
          "end": 444,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 386,
            "end": 387,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 390,
            "end": 444,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 392,
                "end": 416,
                "argument": {
                  "type": "Identifier",
                  "start": 395,
                  "end": 416,
                  "decorators": [],
                  "name": "nullAndUndefinedUnion",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 418,
                "end": 442,
                "argument": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 442,
                  "decorators": [],
                  "name": "nullAndUndefinedUnion",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 446,
      "end": 483,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 450,
          "end": 482,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 450,
            "end": 451,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 454,
            "end": 482,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 456,
                "end": 480,
                "argument": {
                  "type": "Identifier",
                  "start": 459,
                  "end": 480,
                  "decorators": [],
                  "name": "nullAndUndefinedUnion",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
