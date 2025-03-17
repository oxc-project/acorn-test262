__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 496,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 17,
      "end": 185,
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
        "end": 185,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 35,
            "end": 93,
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
                "end": 88,
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
                  "end": 88,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 80,
                    "end": 88,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 80,
                      "end": 86
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 91,
                "end": 92,
                "typeName": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
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
            "start": 98,
            "end": 103,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 102,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 101,
                "end": 102,
                "typeName": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
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
            "start": 108,
            "end": 113,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "name": "h",
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
            "type": "TSPropertySignature",
            "start": 118,
            "end": 128,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 124,
              "name": "member",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 127,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
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
            "start": 133,
            "end": 163,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 146,
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
                "start": 147,
                "end": 156,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 148,
                  "end": 156,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 150,
                    "end": 156
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 163,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 159,
                "end": 163
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 168,
            "end": 183,
            "parameters": [
              {
                "type": "Identifier",
                "start": 169,
                "end": 178,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 170,
                  "end": 178,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 172,
                    "end": 178
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 182,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 181,
                "end": 182,
                "typeName": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
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
      "start": 187,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 195,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 195,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 194,
                "end": 195,
                "typeName": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 195,
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
      "start": 198,
      "end": 205,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 198,
        "end": 205,
        "tag": {
          "type": "Identifier",
          "start": 198,
          "end": 199,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 200,
          "end": 205,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 200,
              "end": 205,
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
      "start": 207,
      "end": 229,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 207,
        "end": 228,
        "tag": {
          "type": "Identifier",
          "start": 207,
          "end": 208,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 209,
          "end": 228,
          "expressions": [
            {
              "type": "Literal",
              "start": 215,
              "end": 216,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 222,
              "end": 223,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 209,
              "end": 215,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 216,
              "end": 222,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 223,
              "end": 228,
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
      "start": 231,
      "end": 245,
      "expression": {
        "type": "MemberExpression",
        "start": 231,
        "end": 245,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 231,
          "end": 238,
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
            "end": 238,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 233,
                "end": 238,
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
          "start": 239,
          "end": 245,
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
      "start": 247,
      "end": 276,
      "expression": {
        "type": "MemberExpression",
        "start": 247,
        "end": 275,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 247,
          "end": 268,
          "tag": {
            "type": "Identifier",
            "start": 247,
            "end": 248,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 249,
            "end": 268,
            "expressions": [
              {
                "type": "Literal",
                "start": 255,
                "end": 256,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 262,
                "end": 263,
                "value": 2,
                "raw": "2"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 249,
                "end": 255,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 256,
                "end": 262,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 263,
                "end": 268,
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
          "start": 269,
          "end": 275,
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
      "start": 278,
      "end": 296,
      "expression": {
        "type": "MemberExpression",
        "start": 278,
        "end": 295,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 278,
          "end": 285,
          "tag": {
            "type": "Identifier",
            "start": 278,
            "end": 279,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 280,
            "end": 285,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 280,
                "end": 285,
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
          "start": 286,
          "end": 294,
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
      "start": 298,
      "end": 330,
      "expression": {
        "type": "MemberExpression",
        "start": 298,
        "end": 329,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 298,
          "end": 319,
          "tag": {
            "type": "Identifier",
            "start": 298,
            "end": 299,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 300,
            "end": 319,
            "expressions": [
              {
                "type": "Literal",
                "start": 306,
                "end": 307,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 313,
                "end": 314,
                "value": 2,
                "raw": "2"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 300,
                "end": 306,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 307,
                "end": 313,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 314,
                "end": 319,
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
          "start": 320,
          "end": 328,
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
      "start": 332,
      "end": 370,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 332,
        "end": 369,
        "tag": {
          "type": "MemberExpression",
          "start": 332,
          "end": 349,
          "object": {
            "type": "MemberExpression",
            "start": 332,
            "end": 342,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 332,
              "end": 339,
              "tag": {
                "type": "Identifier",
                "start": 332,
                "end": 333,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 334,
                "end": 339,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 334,
                    "end": 339,
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
              "start": 340,
              "end": 341,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 343,
            "end": 349,
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
          "start": 350,
          "end": 369,
          "expressions": [
            {
              "type": "Literal",
              "start": 356,
              "end": 357,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 363,
              "end": 364,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 350,
              "end": 356,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 357,
              "end": 363,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 364,
              "end": 369,
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
      "start": 372,
      "end": 431,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 372,
        "end": 430,
        "tag": {
          "type": "MemberExpression",
          "start": 372,
          "end": 410,
          "object": {
            "type": "MemberExpression",
            "start": 372,
            "end": 403,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 372,
              "end": 393,
              "tag": {
                "type": "Identifier",
                "start": 372,
                "end": 373,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 374,
                "end": 393,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 380,
                    "end": 381,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 387,
                    "end": 388,
                    "value": 2,
                    "raw": "2"
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 374,
                    "end": 380,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 381,
                    "end": 387,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 388,
                    "end": 393,
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
              "start": 394,
              "end": 402,
              "value": "member",
              "raw": "\"member\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 404,
            "end": 410,
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
          "start": 411,
          "end": 430,
          "expressions": [
            {
              "type": "Literal",
              "start": 417,
              "end": 418,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 424,
              "end": 425,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 411,
              "end": 417,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 418,
              "end": 424,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 425,
              "end": 430,
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
      "start": 433,
      "end": 456,
      "expression": {
        "type": "CallExpression",
        "start": 433,
        "end": 455,
        "callee": {
          "type": "MemberExpression",
          "start": 433,
          "end": 448,
          "object": {
            "type": "Identifier",
            "start": 433,
            "end": 434,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 435,
            "end": 448,
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
            "start": 449,
            "end": 454,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 449,
                "end": 454,
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
      "start": 458,
      "end": 495,
      "expression": {
        "type": "CallExpression",
        "start": 458,
        "end": 494,
        "callee": {
          "type": "MemberExpression",
          "start": 458,
          "end": 473,
          "object": {
            "type": "Identifier",
            "start": 458,
            "end": 459,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 460,
            "end": 473,
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
            "start": 474,
            "end": 493,
            "expressions": [
              {
                "type": "Literal",
                "start": 480,
                "end": 481,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 487,
                "end": 488,
                "value": 2,
                "raw": "2"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 474,
                "end": 480,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 481,
                "end": 487,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 488,
                "end": 493,
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
