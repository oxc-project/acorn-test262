__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 382,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 64,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 104,
            "decorators": [],
            "name": "ab",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 80,
                "end": 104,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 82,
                    "end": 92,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
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
                      "start": 83,
                      "end": 91,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 85,
                        "end": 91
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 93,
                    "end": 102,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 94,
                      "end": 102,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 96,
                        "end": 102
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 148,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 148,
            "decorators": [],
            "name": "abq",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 123,
                "end": 148,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 125,
                    "end": 135,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 126,
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
                      "start": 126,
                      "end": 134,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 128,
                        "end": 134
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 136,
                    "end": 146,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 138,
                      "end": 146,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 140,
                        "end": 146
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 179,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 161,
            "decorators": [],
            "name": "unused1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 164,
            "end": 179,
            "properties": [
              {
                "type": "Property",
                "start": 166,
                "end": 170,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 169,
                  "end": 170,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 172,
                "end": 177,
                "argument": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 177,
                  "decorators": [],
                  "name": "ab",
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
      "start": 180,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 210,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 191,
            "decorators": [],
            "name": "unused2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 194,
            "end": 210,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 196,
                "end": 201,
                "argument": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 201,
                  "decorators": [],
                  "name": "ab",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 203,
                "end": 208,
                "argument": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 208,
                  "decorators": [],
                  "name": "ab",
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
      "start": 211,
      "end": 241,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 241,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 222,
            "decorators": [],
            "name": "unused3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 225,
            "end": 241,
            "properties": [
              {
                "type": "Property",
                "start": 227,
                "end": 231,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 228,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 230,
                  "end": 231,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 233,
                "end": 239,
                "argument": {
                  "type": "Identifier",
                  "start": 236,
                  "end": 239,
                  "decorators": [],
                  "name": "abq",
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
      "type": "FunctionDeclaration",
      "start": 243,
      "end": 318,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 286,
        "end": 318,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 292,
            "end": 316,
            "argument": {
              "type": "ObjectExpression",
              "start": 299,
              "end": 315,
              "properties": [
                {
                  "type": "Property",
                  "start": 301,
                  "end": 305,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 301,
                    "end": 302,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 304,
                    "end": 305,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 307,
                  "end": 313,
                  "argument": {
                    "type": "Identifier",
                    "start": 310,
                    "end": 313,
                    "decorators": [],
                    "name": "obj",
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
        "start": 252,
        "end": 253,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 254,
          "end": 284,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 257,
            "end": 284,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 259,
              "end": 284,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 261,
                  "end": 282,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 262,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 262,
                    "end": 282,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 264,
                      "end": 282,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 264,
                          "end": 270
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 273,
                          "end": 282
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 319,
      "end": 382,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 350,
        "end": 382,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 356,
            "end": 380,
            "argument": {
              "type": "ObjectExpression",
              "start": 363,
              "end": 379,
              "properties": [
                {
                  "type": "Property",
                  "start": 365,
                  "end": 369,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 366,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 368,
                    "end": 369,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 371,
                  "end": 377,
                  "argument": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 377,
                    "decorators": [],
                    "name": "obj",
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
        "start": 328,
        "end": 329,
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 330,
          "end": 348,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 333,
            "end": 348,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 335,
              "end": 348,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 337,
                  "end": 346,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 338,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 338,
                    "end": 346,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 340,
                      "end": 346
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
