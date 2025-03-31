__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 571,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 17,
      "end": 186,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 29,
        "end": 186,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 35,
            "end": 94,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 36,
                "end": 69,
                "name": "stringParts",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 47,
                  "end": 69,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 49,
                    "end": 69,
                    "typeName": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 69,
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
                "start": 71,
                "end": 89,
                "argument": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 78,
                  "name": "rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 78,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 80,
                    "end": 89,
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 80,
                      "end": 87
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 93,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
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
            "start": 99,
            "end": 104,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 103,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 102,
                "end": 103,
                "typeName": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 103,
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
            "start": 109,
            "end": 114,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 113,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 112,
                "end": 113,
                "typeName": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
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
            "start": 119,
            "end": 129,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 125,
              "name": "member",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 128,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 127,
                "end": 128,
                "typeName": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 128,
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
            "start": 134,
            "end": 164,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 147,
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
                "start": 148,
                "end": 157,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 149,
                  "end": 157,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 151,
                    "end": 157
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 164,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 160,
                "end": 164
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 169,
            "end": 184,
            "parameters": [
              {
                "type": "Identifier",
                "start": 170,
                "end": 179,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 171,
                  "end": 179,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 173,
                    "end": 179
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 180,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 182,
                "end": 183,
                "typeName": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 183,
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
      "start": 188,
      "end": 197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 196,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 196,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 196,
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
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
      "start": 199,
      "end": 206,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 199,
        "end": 206,
        "tag": {
          "type": "Identifier",
          "start": 199,
          "end": 200,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 201,
          "end": 206,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 201,
              "end": 206,
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
      "start": 208,
      "end": 230,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 208,
        "end": 229,
        "tag": {
          "type": "Identifier",
          "start": 208,
          "end": 209,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 210,
          "end": 229,
          "expressions": [
            {
              "type": "Literal",
              "start": 216,
              "end": 217,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 223,
              "end": 224,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 210,
              "end": 216,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 217,
              "end": 223,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 224,
              "end": 229,
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
      "start": 232,
      "end": 246,
      "expression": {
        "type": "MemberExpression",
        "start": 232,
        "end": 246,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 232,
          "end": 239,
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
            "end": 239,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 234,
                "end": 239,
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
          "start": 240,
          "end": 246,
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
      "start": 248,
      "end": 277,
      "expression": {
        "type": "MemberExpression",
        "start": 248,
        "end": 276,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 248,
          "end": 269,
          "tag": {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 250,
            "end": 269,
            "expressions": [
              {
                "type": "Literal",
                "start": 256,
                "end": 257,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 263,
                "end": 264,
                "value": 2,
                "raw": "2"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 250,
                "end": 256,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 257,
                "end": 263,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 264,
                "end": 269,
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
          "start": 270,
          "end": 276,
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
      "start": 279,
      "end": 297,
      "expression": {
        "type": "MemberExpression",
        "start": 279,
        "end": 296,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 279,
          "end": 286,
          "tag": {
            "type": "Identifier",
            "start": 279,
            "end": 280,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 281,
            "end": 286,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 281,
                "end": 286,
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
          "start": 287,
          "end": 295,
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
      "start": 299,
      "end": 331,
      "expression": {
        "type": "MemberExpression",
        "start": 299,
        "end": 330,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 299,
          "end": 320,
          "tag": {
            "type": "Identifier",
            "start": 299,
            "end": 300,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 301,
            "end": 320,
            "expressions": [
              {
                "type": "Literal",
                "start": 307,
                "end": 308,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 314,
                "end": 315,
                "value": 2,
                "raw": "2"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 301,
                "end": 307,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 308,
                "end": 314,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 315,
                "end": 320,
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
          "start": 321,
          "end": 329,
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
      "start": 333,
      "end": 371,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 333,
        "end": 370,
        "tag": {
          "type": "MemberExpression",
          "start": 333,
          "end": 350,
          "object": {
            "type": "MemberExpression",
            "start": 333,
            "end": 343,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 333,
              "end": 340,
              "tag": {
                "type": "Identifier",
                "start": 333,
                "end": 334,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 335,
                "end": 340,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 335,
                    "end": 340,
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
              "start": 341,
              "end": 342,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 344,
            "end": 350,
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
          "start": 351,
          "end": 370,
          "expressions": [
            {
              "type": "Literal",
              "start": 357,
              "end": 358,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 364,
              "end": 365,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 351,
              "end": 357,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 358,
              "end": 364,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 365,
              "end": 370,
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
      "start": 373,
      "end": 432,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 373,
        "end": 431,
        "tag": {
          "type": "MemberExpression",
          "start": 373,
          "end": 411,
          "object": {
            "type": "MemberExpression",
            "start": 373,
            "end": 404,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 373,
              "end": 394,
              "tag": {
                "type": "Identifier",
                "start": 373,
                "end": 374,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 375,
                "end": 394,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 381,
                    "end": 382,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 388,
                    "end": 389,
                    "value": 2,
                    "raw": "2"
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 375,
                    "end": 381,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 382,
                    "end": 388,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 389,
                    "end": 394,
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
              "start": 395,
              "end": 403,
              "value": "member",
              "raw": "\"member\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 405,
            "end": 411,
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
          "start": 412,
          "end": 431,
          "expressions": [
            {
              "type": "Literal",
              "start": 418,
              "end": 419,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 425,
              "end": 426,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 412,
              "end": 418,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 419,
              "end": 425,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 426,
              "end": 431,
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
      "start": 434,
      "end": 507,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 434,
        "end": 506,
        "tag": {
          "type": "MemberExpression",
          "start": 434,
          "end": 482,
          "object": {
            "type": "MemberExpression",
            "start": 434,
            "end": 475,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 434,
              "end": 465,
              "tag": {
                "type": "Identifier",
                "start": 434,
                "end": 435,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 436,
                "end": 465,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 443,
                    "end": 447,
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Literal",
                    "start": 455,
                    "end": 459,
                    "value": true,
                    "raw": "true"
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 436,
                    "end": 442,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 448,
                    "end": 454,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 460,
                    "end": 465,
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
              "start": 466,
              "end": 474,
              "value": "member",
              "raw": "\"member\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 476,
            "end": 482,
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
          "start": 483,
          "end": 506,
          "expressions": [
            {
              "type": "Literal",
              "start": 490,
              "end": 491,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 499,
              "end": 500,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 483,
              "end": 489,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 492,
              "end": 498,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 501,
              "end": 506,
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
      "start": 509,
      "end": 532,
      "expression": {
        "type": "CallExpression",
        "start": 509,
        "end": 531,
        "callee": {
          "type": "MemberExpression",
          "start": 509,
          "end": 524,
          "object": {
            "type": "Identifier",
            "start": 509,
            "end": 510,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 511,
            "end": 524,
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
            "start": 525,
            "end": 530,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 525,
                "end": 530,
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
      "start": 534,
      "end": 571,
      "expression": {
        "type": "CallExpression",
        "start": 534,
        "end": 570,
        "callee": {
          "type": "MemberExpression",
          "start": 534,
          "end": 549,
          "object": {
            "type": "Identifier",
            "start": 534,
            "end": 535,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 536,
            "end": 549,
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
            "start": 550,
            "end": 569,
            "expressions": [
              {
                "type": "Literal",
                "start": 556,
                "end": 557,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 563,
                "end": 564,
                "value": 2,
                "raw": "2"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 550,
                "end": 556,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 557,
                "end": 563,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 564,
                "end": 569,
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
