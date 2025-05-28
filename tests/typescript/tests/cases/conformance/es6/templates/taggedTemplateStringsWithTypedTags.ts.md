__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 478,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 168,
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
        "end": 168,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 18,
            "end": 76,
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
                "end": 71,
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
                  "end": 71,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 63,
                    "end": 71,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 63,
                      "end": 69
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 75,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 74,
                "end": 75,
                "typeName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
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
            "start": 81,
            "end": 86,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 85,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 84,
                "end": 85,
                "typeName": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 85,
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
            "start": 91,
            "end": 96,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 94,
                "end": 95,
                "typeName": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 95,
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
            "start": 101,
            "end": 111,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 107,
              "decorators": [],
              "name": "member",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 110,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
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
            "start": 116,
            "end": 146,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 129,
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
                "start": 130,
                "end": 139,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 131,
                  "end": 139,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 133,
                    "end": 139
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 146,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 142,
                "end": 146
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 151,
            "end": 166,
            "parameters": [
              {
                "type": "Identifier",
                "start": 152,
                "end": 161,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 153,
                  "end": 161,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 155,
                    "end": 161
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 165,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 164,
                "end": 165,
                "typeName": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 165,
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
      "start": 170,
      "end": 179,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 178,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 178,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 178,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 177,
                "end": 178,
                "typeName": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 178,
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
      "start": 181,
      "end": 188,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 181,
        "end": 188,
        "tag": {
          "type": "Identifier",
          "start": 181,
          "end": 182,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 183,
          "end": 188,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 183,
              "end": 188,
              "value": {
                "cooked": "abc",
                "raw": "abc"
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
      "start": 190,
      "end": 212,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 190,
        "end": 211,
        "tag": {
          "type": "Identifier",
          "start": 190,
          "end": 191,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 192,
          "end": 211,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 192,
              "end": 198,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 199,
              "end": 205,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 206,
              "end": 211,
              "value": {
                "cooked": "ghi",
                "raw": "ghi"
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 198,
              "end": 199,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 205,
              "end": 206,
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
      "start": 214,
      "end": 228,
      "expression": {
        "type": "MemberExpression",
        "start": 214,
        "end": 228,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 214,
          "end": 221,
          "tag": {
            "type": "Identifier",
            "start": 214,
            "end": 215,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 216,
            "end": 221,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 216,
                "end": 221,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": true
              }
            ],
            "expressions": []
          }
        },
        "property": {
          "type": "Identifier",
          "start": 222,
          "end": 228,
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
      "start": 230,
      "end": 259,
      "expression": {
        "type": "MemberExpression",
        "start": 230,
        "end": 258,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 230,
          "end": 251,
          "tag": {
            "type": "Identifier",
            "start": 230,
            "end": 231,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 232,
            "end": 251,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 232,
                "end": 238,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 239,
                "end": 245,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 246,
                "end": 251,
                "value": {
                  "cooked": "ghi",
                  "raw": "ghi"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "start": 238,
                "end": 239,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 245,
                "end": 246,
                "value": 2,
                "raw": "2"
              }
            ]
          }
        },
        "property": {
          "type": "Identifier",
          "start": 252,
          "end": 258,
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
      "start": 261,
      "end": 279,
      "expression": {
        "type": "MemberExpression",
        "start": 261,
        "end": 278,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 261,
          "end": 268,
          "tag": {
            "type": "Identifier",
            "start": 261,
            "end": 262,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 263,
            "end": 268,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 263,
                "end": 268,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": true
              }
            ],
            "expressions": []
          }
        },
        "property": {
          "type": "Literal",
          "start": 269,
          "end": 277,
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
      "start": 281,
      "end": 313,
      "expression": {
        "type": "MemberExpression",
        "start": 281,
        "end": 312,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 281,
          "end": 302,
          "tag": {
            "type": "Identifier",
            "start": 281,
            "end": 282,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 283,
            "end": 302,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 283,
                "end": 289,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 290,
                "end": 296,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 297,
                "end": 302,
                "value": {
                  "cooked": "ghi",
                  "raw": "ghi"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "start": 289,
                "end": 290,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 296,
                "end": 297,
                "value": 2,
                "raw": "2"
              }
            ]
          }
        },
        "property": {
          "type": "Literal",
          "start": 303,
          "end": 311,
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
      "start": 315,
      "end": 353,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 315,
        "end": 352,
        "tag": {
          "type": "MemberExpression",
          "start": 315,
          "end": 332,
          "object": {
            "type": "MemberExpression",
            "start": 315,
            "end": 325,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 315,
              "end": 322,
              "tag": {
                "type": "Identifier",
                "start": 315,
                "end": 316,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 317,
                "end": 322,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 317,
                    "end": 322,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              }
            },
            "property": {
              "type": "Literal",
              "start": 323,
              "end": 324,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 326,
            "end": 332,
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
          "start": 333,
          "end": 352,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 333,
              "end": 339,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 340,
              "end": 346,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 347,
              "end": 352,
              "value": {
                "cooked": "ghi",
                "raw": "ghi"
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 339,
              "end": 340,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 346,
              "end": 347,
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
      "start": 355,
      "end": 414,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 355,
        "end": 413,
        "tag": {
          "type": "MemberExpression",
          "start": 355,
          "end": 393,
          "object": {
            "type": "MemberExpression",
            "start": 355,
            "end": 386,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 355,
              "end": 376,
              "tag": {
                "type": "Identifier",
                "start": 355,
                "end": 356,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 357,
                "end": 376,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 357,
                    "end": 363,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 364,
                    "end": 370,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 371,
                    "end": 376,
                    "value": {
                      "cooked": "ghi",
                      "raw": "ghi"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 363,
                    "end": 364,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 370,
                    "end": 371,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            },
            "property": {
              "type": "Literal",
              "start": 377,
              "end": 385,
              "value": "member",
              "raw": "\"member\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 387,
            "end": 393,
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
          "start": 394,
          "end": 413,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 394,
              "end": 400,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 401,
              "end": 407,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 408,
              "end": 413,
              "value": {
                "cooked": "ghi",
                "raw": "ghi"
              },
              "tail": true
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "start": 400,
              "end": 401,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 407,
              "end": 408,
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
      "start": 416,
      "end": 439,
      "expression": {
        "type": "CallExpression",
        "start": 416,
        "end": 438,
        "callee": {
          "type": "MemberExpression",
          "start": 416,
          "end": 431,
          "object": {
            "type": "Identifier",
            "start": 416,
            "end": 417,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 418,
            "end": 431,
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
            "start": 432,
            "end": 437,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 432,
                "end": 437,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
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
      "start": 441,
      "end": 478,
      "expression": {
        "type": "CallExpression",
        "start": 441,
        "end": 477,
        "callee": {
          "type": "MemberExpression",
          "start": 441,
          "end": 456,
          "object": {
            "type": "Identifier",
            "start": 441,
            "end": 442,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 443,
            "end": 456,
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
            "start": 457,
            "end": 476,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 457,
                "end": 463,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 464,
                "end": 470,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 471,
                "end": 476,
                "value": {
                  "cooked": "ghi",
                  "raw": "ghi"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "start": 463,
                "end": 464,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 470,
                "end": 471,
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
