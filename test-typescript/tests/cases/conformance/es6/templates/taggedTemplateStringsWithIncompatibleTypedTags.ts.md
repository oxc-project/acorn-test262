__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 556,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 170,
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
        "end": 170,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 19,
            "end": 78,
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
                "end": 73,
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
                  "end": 73,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 64,
                    "end": 73,
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 64,
                      "end": 71
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 76,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
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
            "start": 83,
            "end": 88,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 87,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 86,
                "end": 87,
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
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
            "start": 93,
            "end": 98,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 96,
                "end": 97,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
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
            "start": 103,
            "end": 113,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 109,
              "name": "member",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 112,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 111,
                "end": 112,
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
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
            "start": 118,
            "end": 148,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 131,
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
                "start": 132,
                "end": 141,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 133,
                  "end": 141,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 135,
                    "end": 141
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 148,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 144,
                "end": 148
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 153,
            "end": 168,
            "parameters": [
              {
                "type": "Identifier",
                "start": 154,
                "end": 163,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 155,
                  "end": 163,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 157,
                    "end": 163
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 167,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 166,
                "end": 167,
                "typeName": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 167,
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
      "start": 172,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 180,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 180,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 180,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 179,
                "end": 180,
                "typeName": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 180,
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
      "start": 183,
      "end": 190,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 183,
        "end": 190,
        "tag": {
          "type": "Identifier",
          "start": 183,
          "end": 184,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 185,
          "end": 190,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 185,
              "end": 190,
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
      "start": 192,
      "end": 214,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 192,
        "end": 213,
        "tag": {
          "type": "Identifier",
          "start": 192,
          "end": 193,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 194,
          "end": 213,
          "expressions": [
            {
              "type": "Literal",
              "start": 200,
              "end": 201,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 207,
              "end": 208,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 194,
              "end": 200,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 201,
              "end": 207,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 208,
              "end": 213,
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
      "start": 216,
      "end": 230,
      "expression": {
        "type": "MemberExpression",
        "start": 216,
        "end": 230,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 216,
          "end": 223,
          "tag": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 218,
            "end": 223,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 218,
                "end": 223,
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
          "start": 224,
          "end": 230,
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
      "start": 232,
      "end": 261,
      "expression": {
        "type": "MemberExpression",
        "start": 232,
        "end": 260,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 232,
          "end": 253,
          "tag": {
            "type": "Identifier",
            "start": 232,
            "end": 233,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 234,
            "end": 253,
            "expressions": [
              {
                "type": "Literal",
                "start": 240,
                "end": 241,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 247,
                "end": 248,
                "value": 2,
                "raw": "2"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 234,
                "end": 240,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 241,
                "end": 247,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 248,
                "end": 253,
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
          "start": 254,
          "end": 260,
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
      "start": 263,
      "end": 281,
      "expression": {
        "type": "MemberExpression",
        "start": 263,
        "end": 280,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 263,
          "end": 270,
          "tag": {
            "type": "Identifier",
            "start": 263,
            "end": 264,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 265,
            "end": 270,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 265,
                "end": 270,
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
          "start": 271,
          "end": 279,
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
      "start": 283,
      "end": 315,
      "expression": {
        "type": "MemberExpression",
        "start": 283,
        "end": 314,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 283,
          "end": 304,
          "tag": {
            "type": "Identifier",
            "start": 283,
            "end": 284,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 285,
            "end": 304,
            "expressions": [
              {
                "type": "Literal",
                "start": 291,
                "end": 292,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 298,
                "end": 299,
                "value": 2,
                "raw": "2"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 285,
                "end": 291,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 292,
                "end": 298,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 299,
                "end": 304,
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
          "start": 305,
          "end": 313,
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
      "start": 317,
      "end": 355,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 317,
        "end": 354,
        "tag": {
          "type": "MemberExpression",
          "start": 317,
          "end": 334,
          "object": {
            "type": "MemberExpression",
            "start": 317,
            "end": 327,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 317,
              "end": 324,
              "tag": {
                "type": "Identifier",
                "start": 317,
                "end": 318,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 319,
                "end": 324,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 319,
                    "end": 324,
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
              "start": 325,
              "end": 326,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 328,
            "end": 334,
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
          "start": 335,
          "end": 354,
          "expressions": [
            {
              "type": "Literal",
              "start": 341,
              "end": 342,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 348,
              "end": 349,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 335,
              "end": 341,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 342,
              "end": 348,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 349,
              "end": 354,
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
      "start": 357,
      "end": 416,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 357,
        "end": 415,
        "tag": {
          "type": "MemberExpression",
          "start": 357,
          "end": 395,
          "object": {
            "type": "MemberExpression",
            "start": 357,
            "end": 388,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 357,
              "end": 378,
              "tag": {
                "type": "Identifier",
                "start": 357,
                "end": 358,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 359,
                "end": 378,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 365,
                    "end": 366,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 372,
                    "end": 373,
                    "value": 2,
                    "raw": "2"
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 359,
                    "end": 365,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 366,
                    "end": 372,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 373,
                    "end": 378,
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
              "start": 379,
              "end": 387,
              "value": "member",
              "raw": "\"member\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 389,
            "end": 395,
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
          "start": 396,
          "end": 415,
          "expressions": [
            {
              "type": "Literal",
              "start": 402,
              "end": 403,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 409,
              "end": 410,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 396,
              "end": 402,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 403,
              "end": 409,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 410,
              "end": 415,
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
      "start": 418,
      "end": 491,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 418,
        "end": 490,
        "tag": {
          "type": "MemberExpression",
          "start": 418,
          "end": 466,
          "object": {
            "type": "MemberExpression",
            "start": 418,
            "end": 459,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 418,
              "end": 449,
              "tag": {
                "type": "Identifier",
                "start": 418,
                "end": 419,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 420,
                "end": 449,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 427,
                    "end": 431,
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Literal",
                    "start": 439,
                    "end": 443,
                    "value": true,
                    "raw": "true"
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 420,
                    "end": 426,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 432,
                    "end": 438,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 444,
                    "end": 449,
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
              "start": 450,
              "end": 458,
              "value": "member",
              "raw": "\"member\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 460,
            "end": 466,
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
          "start": 467,
          "end": 490,
          "expressions": [
            {
              "type": "Literal",
              "start": 474,
              "end": 475,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 483,
              "end": 484,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 467,
              "end": 473,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 476,
              "end": 482,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 485,
              "end": 490,
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
      "start": 493,
      "end": 516,
      "expression": {
        "type": "CallExpression",
        "start": 493,
        "end": 515,
        "callee": {
          "type": "MemberExpression",
          "start": 493,
          "end": 508,
          "object": {
            "type": "Identifier",
            "start": 493,
            "end": 494,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 495,
            "end": 508,
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
            "start": 509,
            "end": 514,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 509,
                "end": 514,
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
      "start": 518,
      "end": 555,
      "expression": {
        "type": "CallExpression",
        "start": 518,
        "end": 554,
        "callee": {
          "type": "MemberExpression",
          "start": 518,
          "end": 533,
          "object": {
            "type": "Identifier",
            "start": 518,
            "end": 519,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 520,
            "end": 533,
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
            "start": 534,
            "end": 553,
            "expressions": [
              {
                "type": "Literal",
                "start": 540,
                "end": 541,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 547,
                "end": 548,
                "value": 2,
                "raw": "2"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 534,
                "end": 540,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 541,
                "end": 547,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 548,
                "end": 553,
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
