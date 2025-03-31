__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 371,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 11,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 11,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 8,
                "end": 11
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
      "start": 14,
      "end": 21,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 14,
        "end": 21,
        "tag": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 16,
          "end": 21,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 16,
              "end": 21,
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
      "start": 23,
      "end": 45,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 23,
        "end": 44,
        "tag": {
          "type": "Identifier",
          "start": 23,
          "end": 24,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 25,
          "end": 44,
          "expressions": [
            {
              "type": "Literal",
              "start": 31,
              "end": 32,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 38,
              "end": 39,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 25,
              "end": 31,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 32,
              "end": 38,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 39,
              "end": 44,
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
      "start": 47,
      "end": 58,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 47,
        "end": 58,
        "tag": {
          "type": "MemberExpression",
          "start": 47,
          "end": 52,
          "object": {
            "type": "MemberExpression",
            "start": 47,
            "end": 50,
            "object": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 53,
          "end": 58,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 53,
              "end": 58,
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
      "start": 60,
      "end": 86,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 60,
        "end": 85,
        "tag": {
          "type": "MemberExpression",
          "start": 60,
          "end": 65,
          "object": {
            "type": "MemberExpression",
            "start": 60,
            "end": 63,
            "object": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 66,
          "end": 85,
          "expressions": [
            {
              "type": "Literal",
              "start": 72,
              "end": 73,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 79,
              "end": 80,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 66,
              "end": 72,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 73,
              "end": 79,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 80,
              "end": 85,
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
      "start": 88,
      "end": 102,
      "expression": {
        "type": "MemberExpression",
        "start": 88,
        "end": 102,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 88,
          "end": 95,
          "tag": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 90,
            "end": 95,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 90,
                "end": 95,
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
          "start": 96,
          "end": 102,
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
      "start": 104,
      "end": 133,
      "expression": {
        "type": "MemberExpression",
        "start": 104,
        "end": 132,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 104,
          "end": 125,
          "tag": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 106,
            "end": 125,
            "expressions": [
              {
                "type": "Literal",
                "start": 112,
                "end": 113,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 119,
                "end": 120,
                "value": 2,
                "raw": "2"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 106,
                "end": 112,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 113,
                "end": 119,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 120,
                "end": 125,
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
          "start": 126,
          "end": 132,
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
      "start": 135,
      "end": 153,
      "expression": {
        "type": "MemberExpression",
        "start": 135,
        "end": 152,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 135,
          "end": 142,
          "tag": {
            "type": "Identifier",
            "start": 135,
            "end": 136,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 137,
            "end": 142,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 137,
                "end": 142,
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
          "start": 143,
          "end": 151,
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
      "start": 155,
      "end": 187,
      "expression": {
        "type": "MemberExpression",
        "start": 155,
        "end": 186,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 155,
          "end": 176,
          "tag": {
            "type": "Identifier",
            "start": 155,
            "end": 156,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 157,
            "end": 176,
            "expressions": [
              {
                "type": "Literal",
                "start": 163,
                "end": 164,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 170,
                "end": 171,
                "value": 2,
                "raw": "2"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 157,
                "end": 163,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 164,
                "end": 170,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 171,
                "end": 176,
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
          "start": 177,
          "end": 185,
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
      "start": 189,
      "end": 240,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 189,
        "end": 239,
        "tag": {
          "type": "MemberExpression",
          "start": 189,
          "end": 219,
          "object": {
            "type": "MemberExpression",
            "start": 189,
            "end": 206,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 189,
              "end": 196,
              "tag": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 191,
                "end": 196,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 191,
                    "end": 196,
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
              "start": 197,
              "end": 205,
              "value": "member",
              "raw": "\"member\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 207,
            "end": 219,
            "name": "someOtherTag",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 220,
          "end": 239,
          "expressions": [
            {
              "type": "Literal",
              "start": 226,
              "end": 227,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 233,
              "end": 234,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 220,
              "end": 226,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 227,
              "end": 233,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 234,
              "end": 239,
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
      "start": 242,
      "end": 307,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 242,
        "end": 306,
        "tag": {
          "type": "MemberExpression",
          "start": 242,
          "end": 286,
          "object": {
            "type": "MemberExpression",
            "start": 242,
            "end": 273,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 242,
              "end": 263,
              "tag": {
                "type": "Identifier",
                "start": 242,
                "end": 243,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 244,
                "end": 263,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 250,
                    "end": 251,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 257,
                    "end": 258,
                    "value": 2,
                    "raw": "2"
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 244,
                    "end": 250,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 251,
                    "end": 257,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 258,
                    "end": 263,
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
              "start": 264,
              "end": 272,
              "value": "member",
              "raw": "\"member\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 274,
            "end": 286,
            "name": "someOtherTag",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 287,
          "end": 306,
          "expressions": [
            {
              "type": "Literal",
              "start": 293,
              "end": 294,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 300,
              "end": 301,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 287,
              "end": 293,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 294,
              "end": 300,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 301,
              "end": 306,
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
      "start": 309,
      "end": 332,
      "expression": {
        "type": "CallExpression",
        "start": 309,
        "end": 331,
        "callee": {
          "type": "MemberExpression",
          "start": 309,
          "end": 324,
          "object": {
            "type": "Identifier",
            "start": 309,
            "end": 310,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 311,
            "end": 324,
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
            "start": 325,
            "end": 330,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 325,
                "end": 330,
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
      "start": 334,
      "end": 371,
      "expression": {
        "type": "CallExpression",
        "start": 334,
        "end": 370,
        "callee": {
          "type": "MemberExpression",
          "start": 334,
          "end": 349,
          "object": {
            "type": "Identifier",
            "start": 334,
            "end": 335,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 336,
            "end": 349,
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
