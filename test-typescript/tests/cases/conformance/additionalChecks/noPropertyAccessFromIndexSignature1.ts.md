__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 487,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 29,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 72,
      "body": {
        "type": "TSInterfaceBody",
        "start": 45,
        "end": 72,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 51,
            "end": 70,
            "parameters": [
              {
                "type": "Identifier",
                "start": 52,
                "end": 61,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 55,
                    "end": 61
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 64,
                "end": 70
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 74,
      "end": 129,
      "body": {
        "type": "TSInterfaceBody",
        "start": 86,
        "end": 129,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 92,
            "end": 103,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 95,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 108,
            "end": 127,
            "parameters": [
              {
                "type": "Identifier",
                "start": 109,
                "end": 118,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 110,
                  "end": 118,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 112,
                    "end": 118
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 127,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 121,
                "end": 127
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 149,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 149,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 149,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 149,
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
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
      "start": 151,
      "end": 170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 169,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 169,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 166,
              "end": 169,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 168,
                "end": 169,
                "typeName": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
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
      "start": 171,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 189,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 189,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 189,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 188,
                "end": 189,
                "typeName": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 189,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
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
      "start": 191,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 221,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 221,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 221,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 208,
                "end": 221,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 208,
                    "end": 209,
                    "typeName": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 209,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 212,
                    "end": 221
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
      "type": "ExpressionStatement",
      "start": 243,
      "end": 249,
      "expression": {
        "type": "MemberExpression",
        "start": 243,
        "end": 248,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 243,
          "end": 244,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 245,
          "end": 248,
          "decorators": [],
          "name": "foo",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 250,
      "end": 258,
      "expression": {
        "type": "MemberExpression",
        "start": 250,
        "end": 258,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 250,
          "end": 251,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 252,
          "end": 257,
          "raw": "\"foo\"",
          "value": "foo"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 286,
      "end": 292,
      "expression": {
        "type": "MemberExpression",
        "start": 286,
        "end": 291,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 286,
          "end": 287,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 288,
          "end": 291,
          "decorators": [],
          "name": "foo",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 293,
      "end": 302,
      "expression": {
        "type": "MemberExpression",
        "start": 293,
        "end": 301,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 293,
          "end": 294,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 295,
          "end": 300,
          "raw": "\"foo\"",
          "value": "foo"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 323,
      "end": 329,
      "expression": {
        "type": "MemberExpression",
        "start": 323,
        "end": 328,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 325,
          "end": 328,
          "decorators": [],
          "name": "foo",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 330,
      "end": 338,
      "expression": {
        "type": "MemberExpression",
        "start": 330,
        "end": 338,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 330,
          "end": 331,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 332,
          "end": 337,
          "raw": "\"foo\"",
          "value": "foo"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 366,
      "end": 372,
      "expression": {
        "type": "MemberExpression",
        "start": 366,
        "end": 371,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 366,
          "end": 367,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 368,
          "end": 371,
          "decorators": [],
          "name": "bar",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 373,
      "end": 382,
      "expression": {
        "type": "MemberExpression",
        "start": 373,
        "end": 381,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 373,
          "end": 374,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 375,
          "end": 380,
          "raw": "\"bar\"",
          "value": "bar"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 412,
      "end": 419,
      "expression": {
        "type": "ChainExpression",
        "start": 412,
        "end": 418,
        "expression": {
          "type": "MemberExpression",
          "start": 412,
          "end": 418,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 412,
            "end": 413,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 415,
            "end": 418,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 420,
      "end": 430,
      "expression": {
        "type": "ChainExpression",
        "start": 420,
        "end": 430,
        "expression": {
          "type": "MemberExpression",
          "start": 420,
          "end": 430,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 420,
            "end": 421,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "optional": true,
          "property": {
            "type": "Literal",
            "start": 424,
            "end": 429,
            "raw": "\"foo\"",
            "value": "foo"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 467,
      "end": 474,
      "expression": {
        "type": "ChainExpression",
        "start": 467,
        "end": 473,
        "expression": {
          "type": "MemberExpression",
          "start": 467,
          "end": 473,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 467,
            "end": 468,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "start": 470,
            "end": 473,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 475,
      "end": 486,
      "expression": {
        "type": "ChainExpression",
        "start": 475,
        "end": 485,
        "expression": {
          "type": "MemberExpression",
          "start": 475,
          "end": 485,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 475,
            "end": 476,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "optional": true,
          "property": {
            "type": "Literal",
            "start": 479,
            "end": 484,
            "raw": "\"bar\"",
            "value": "bar"
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
