__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 480,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 169,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 19,
            "end": 77,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 20,
                "end": 53,
                "name": "stringParts",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 31,
                  "end": 53,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 33,
                    "end": 53,
                    "typeName": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 53,
                      "name": "TemplateStringsArray",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 55,
                "end": 72,
                "argument": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 62,
                  "name": "rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 62,
                  "end": 72,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 64,
                    "end": 72,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 64,
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "member",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "thisIsNotATag",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 132,
                  "end": 140,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 134,
                    "end": 140
                  }
                },
                "decorators": [],
                "optional": false
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
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 154,
                  "end": 162,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 156,
                    "end": 162
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "I",
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
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 179,
            "name": "f",
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 184,
          "end": 189,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 184,
              "end": 189,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
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
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 193,
          "end": 212,
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
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 193,
              "end": 199,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 200,
              "end": 206,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 207,
              "end": 212,
              "value": {
                "cooked": "ghi",
                "raw": "ghi"
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
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
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 217,
            "end": 222,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 217,
                "end": 222,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": true
              }
            ]
          },
          "typeArguments": null
        },
        "property": {
          "type": "Identifier",
          "start": 223,
          "end": 229,
          "name": "member",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 233,
            "end": 252,
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
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 233,
                "end": 239,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 240,
                "end": 246,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 247,
                "end": 252,
                "value": {
                  "cooked": "ghi",
                  "raw": "ghi"
                },
                "tail": true
              }
            ]
          },
          "typeArguments": null
        },
        "property": {
          "type": "Identifier",
          "start": 253,
          "end": 259,
          "name": "member",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 264,
            "end": 269,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 264,
                "end": 269,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": true
              }
            ]
          },
          "typeArguments": null
        },
        "property": {
          "type": "Literal",
          "start": 270,
          "end": 278,
          "value": "member",
          "raw": "\"member\""
        },
        "computed": true,
        "optional": false
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
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 284,
            "end": 303,
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
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 284,
                "end": 290,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 291,
                "end": 297,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 298,
                "end": 303,
                "value": {
                  "cooked": "ghi",
                  "raw": "ghi"
                },
                "tail": true
              }
            ]
          },
          "typeArguments": null
        },
        "property": {
          "type": "Literal",
          "start": 304,
          "end": 312,
          "value": "member",
          "raw": "\"member\""
        },
        "computed": true,
        "optional": false
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
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 318,
                "end": 323,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 318,
                    "end": 323,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": true
                  }
                ]
              },
              "typeArguments": null
            },
            "property": {
              "type": "Literal",
              "start": 324,
              "end": 325,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 327,
            "end": 333,
            "name": "member",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 334,
          "end": 353,
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
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 334,
              "end": 340,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 341,
              "end": 347,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 348,
              "end": 353,
              "value": {
                "cooked": "ghi",
                "raw": "ghi"
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
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
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 358,
                "end": 377,
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
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 358,
                    "end": 364,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 365,
                    "end": 371,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 372,
                    "end": 377,
                    "value": {
                      "cooked": "ghi",
                      "raw": "ghi"
                    },
                    "tail": true
                  }
                ]
              },
              "typeArguments": null
            },
            "property": {
              "type": "Literal",
              "start": 378,
              "end": 386,
              "value": "member",
              "raw": "\"member\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 388,
            "end": 394,
            "name": "member",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 395,
          "end": 414,
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
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 395,
              "end": 401,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 402,
              "end": 408,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 409,
              "end": 414,
              "value": {
                "cooked": "ghi",
                "raw": "ghi"
              },
              "tail": true
            }
          ]
        },
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 417,
      "end": 440,
      "expression": {
        "type": "CallExpression",
        "start": 417,
        "end": 439,
        "callee": {
          "type": "MemberExpression",
          "start": 417,
          "end": 432,
          "object": {
            "type": "Identifier",
            "start": 417,
            "end": 418,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 419,
            "end": 432,
            "name": "thisIsNotATag",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 433,
            "end": 438,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 433,
                "end": 438,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": true
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 442,
      "end": 479,
      "expression": {
        "type": "CallExpression",
        "start": 442,
        "end": 478,
        "callee": {
          "type": "MemberExpression",
          "start": 442,
          "end": 457,
          "object": {
            "type": "Identifier",
            "start": 442,
            "end": 443,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 444,
            "end": 457,
            "name": "thisIsNotATag",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 458,
            "end": 477,
            "expressions": [
              {
                "type": "Literal",
                "start": 464,
                "end": 465,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 471,
                "end": 472,
                "value": 2,
                "raw": "2"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 458,
                "end": 464,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 465,
                "end": 471,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 472,
                "end": 477,
                "value": {
                  "cooked": "ghi",
                  "raw": "ghi"
                },
                "tail": true
              }
            ]
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
