__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 554,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 169,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 18,
            "end": 77,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 52,
                "decorators": [],
                "name": "stringParts",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 30,
                  "end": 52,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 32,
                    "end": 52,
                    "typeName": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 52,
                      "decorators": [],
                      "name": "TemplateStringsArray",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 54,
                "end": 72,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 61,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 61,
                  "end": 72,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 63,
                    "end": 72,
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 63,
                      "end": 70
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 75,
                "end": 76,
                "typeName": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 82,
            "end": 87,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 86,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 85,
                "end": 86,
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 92,
            "end": 97,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 95,
                "end": 96,
                "typeName": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 102,
            "end": 112,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 108,
              "decorators": [],
              "name": "member",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 110,
                "end": 111,
                "typeName": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 111,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 117,
            "end": 147,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 130,
              "decorators": [],
              "name": "thisIsNotATag",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 131,
                "end": 140,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 132,
                  "end": 140,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 134,
                    "end": 140
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 147,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 143,
                "end": 147
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 152,
            "end": 167,
            "parameters": [
              {
                "type": "Identifier",
                "start": 153,
                "end": 162,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 154,
                  "end": 162,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 156,
                    "end": 162
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 166,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 165,
                "end": 166,
                "typeName": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "decorators": [],
                  "name": "I",
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
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 180,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 179,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 179,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 179,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 179,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 189,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 182,
        "end": 189,
        "tag": {
          "type": "Identifier",
          "start": 182,
          "end": 183,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 184,
          "end": 189,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 184,
              "end": 189,
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": true
            }
          ],
          "expressions": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 191,
      "end": 213,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 191,
        "end": 212,
        "tag": {
          "type": "Identifier",
          "start": 191,
          "end": 192,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 193,
          "end": 212,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 193,
              "end": 199,
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 200,
              "end": 206,
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 207,
              "end": 212,
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 199,
              "end": 200,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 206,
              "end": 207,
              "value": 2,
              "raw": "2"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 215,
      "end": 229,
      "expression": {
        "type": "MemberExpression",
        "start": 215,
        "end": 229,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 215,
          "end": 222,
          "tag": {
            "type": "Identifier",
            "start": 215,
            "end": 216,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 217,
            "end": 222,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 217,
                "end": 222,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true
              }
            ],
            "expressions": []
          }
        },
        "property": {
          "type": "Identifier",
          "start": 223,
          "end": 229,
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 260,
      "expression": {
        "type": "MemberExpression",
        "start": 231,
        "end": 259,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 231,
          "end": 252,
          "tag": {
            "type": "Identifier",
            "start": 231,
            "end": 232,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 233,
            "end": 252,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 233,
                "end": 239,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 240,
                "end": 246,
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 247,
                "end": 252,
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "start": 239,
                "end": 240,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 246,
                "end": 247,
                "value": 2,
                "raw": "2"
              }
            ]
          }
        },
        "property": {
          "type": "Identifier",
          "start": 253,
          "end": 259,
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 262,
      "end": 280,
      "expression": {
        "type": "MemberExpression",
        "start": 262,
        "end": 279,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 262,
          "end": 269,
          "tag": {
            "type": "Identifier",
            "start": 262,
            "end": 263,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 264,
            "end": 269,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 264,
                "end": 269,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true
              }
            ],
            "expressions": []
          }
        },
        "property": {
          "type": "Literal",
          "start": 270,
          "end": 278,
          "value": "member",
          "raw": "\"member\""
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 282,
      "end": 314,
      "expression": {
        "type": "MemberExpression",
        "start": 282,
        "end": 313,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 282,
          "end": 303,
          "tag": {
            "type": "Identifier",
            "start": 282,
            "end": 283,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 284,
            "end": 303,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 284,
                "end": 290,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 291,
                "end": 297,
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 298,
                "end": 303,
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "start": 290,
                "end": 291,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 297,
                "end": 298,
                "value": 2,
                "raw": "2"
              }
            ]
          }
        },
        "property": {
          "type": "Literal",
          "start": 304,
          "end": 312,
          "value": "member",
          "raw": "\"member\""
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 316,
      "end": 354,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 316,
        "end": 353,
        "tag": {
          "type": "MemberExpression",
          "start": 316,
          "end": 333,
          "object": {
            "type": "MemberExpression",
            "start": 316,
            "end": 326,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 316,
              "end": 323,
              "tag": {
                "type": "Identifier",
                "start": 316,
                "end": 317,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 318,
                "end": 323,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 318,
                    "end": 323,
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              }
            },
            "property": {
              "type": "Literal",
              "start": 324,
              "end": 325,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 327,
            "end": 333,
            "decorators": [],
            "name": "member",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 334,
          "end": 353,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 334,
              "end": 340,
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 341,
              "end": 347,
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 348,
              "end": 353,
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 340,
              "end": 341,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 347,
              "end": 348,
              "value": 2,
              "raw": "2"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 356,
      "end": 415,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 356,
        "end": 414,
        "tag": {
          "type": "MemberExpression",
          "start": 356,
          "end": 394,
          "object": {
            "type": "MemberExpression",
            "start": 356,
            "end": 387,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 356,
              "end": 377,
              "tag": {
                "type": "Identifier",
                "start": 356,
                "end": 357,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 358,
                "end": 377,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 358,
                    "end": 364,
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 365,
                    "end": 371,
                    "value": {
                      "raw": "def",
                      "cooked": "def"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 372,
                    "end": 377,
                    "value": {
                      "raw": "ghi",
                      "cooked": "ghi"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 364,
                    "end": 365,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 371,
                    "end": 372,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            },
            "property": {
              "type": "Literal",
              "start": 378,
              "end": 386,
              "value": "member",
              "raw": "\"member\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 388,
            "end": 394,
            "decorators": [],
            "name": "member",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 395,
          "end": 414,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 395,
              "end": 401,
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 402,
              "end": 408,
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 409,
              "end": 414,
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 401,
              "end": 402,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 408,
              "end": 409,
              "value": 2,
              "raw": "2"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 417,
      "end": 490,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 417,
        "end": 489,
        "tag": {
          "type": "MemberExpression",
          "start": 417,
          "end": 465,
          "object": {
            "type": "MemberExpression",
            "start": 417,
            "end": 458,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 417,
              "end": 448,
              "tag": {
                "type": "Identifier",
                "start": 417,
                "end": 418,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 419,
                "end": 448,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 419,
                    "end": 425,
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 431,
                    "end": 437,
                    "value": {
                      "raw": "def",
                      "cooked": "def"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 443,
                    "end": 448,
                    "value": {
                      "raw": "ghi",
                      "cooked": "ghi"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 426,
                    "end": 430,
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Literal",
                    "start": 438,
                    "end": 442,
                    "value": true,
                    "raw": "true"
                  }
                ]
              }
            },
            "property": {
              "type": "Literal",
              "start": 449,
              "end": 457,
              "value": "member",
              "raw": "\"member\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 459,
            "end": 465,
            "decorators": [],
            "name": "member",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 466,
          "end": 489,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 466,
              "end": 472,
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 475,
              "end": 481,
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 484,
              "end": 489,
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 473,
              "end": 474,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 482,
              "end": 483,
              "value": 2,
              "raw": "2"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 492,
      "end": 515,
      "expression": {
        "type": "CallExpression",
        "start": 492,
        "end": 514,
        "callee": {
          "type": "MemberExpression",
          "start": 492,
          "end": 507,
          "object": {
            "type": "Identifier",
            "start": 492,
            "end": 493,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 494,
            "end": 507,
            "decorators": [],
            "name": "thisIsNotATag",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 508,
            "end": 513,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 508,
                "end": 513,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true
              }
            ],
            "expressions": []
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 517,
      "end": 554,
      "expression": {
        "type": "CallExpression",
        "start": 517,
        "end": 553,
        "callee": {
          "type": "MemberExpression",
          "start": 517,
          "end": 532,
          "object": {
            "type": "Identifier",
            "start": 517,
            "end": 518,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 519,
            "end": 532,
            "decorators": [],
            "name": "thisIsNotATag",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 533,
            "end": 552,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 533,
                "end": 539,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 540,
                "end": 546,
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 547,
                "end": 552,
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "start": 539,
                "end": 540,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 546,
                "end": 547,
                "value": 2,
                "raw": "2"
              }
            ]
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
