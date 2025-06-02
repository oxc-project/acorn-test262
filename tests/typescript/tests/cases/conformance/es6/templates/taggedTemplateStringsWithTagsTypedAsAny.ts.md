__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 370,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
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
      "start": 13,
      "end": 20,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 13,
        "end": 20,
        "tag": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 15,
          "end": 20,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 15,
              "end": 20,
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
      "start": 22,
      "end": 44,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 22,
        "end": 43,
        "tag": {
          "type": "Identifier",
          "start": 22,
          "end": 23,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 24,
          "end": 43,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 24,
              "end": 30,
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 31,
              "end": 37,
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 38,
              "end": 43,
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
              "start": 30,
              "end": 31,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 37,
              "end": 38,
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
      "start": 46,
      "end": 57,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 46,
        "end": 57,
        "tag": {
          "type": "MemberExpression",
          "start": 46,
          "end": 51,
          "object": {
            "type": "MemberExpression",
            "start": 46,
            "end": 49,
            "object": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 52,
          "end": 57,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 52,
              "end": 57,
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
      "start": 59,
      "end": 85,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 59,
        "end": 84,
        "tag": {
          "type": "MemberExpression",
          "start": 59,
          "end": 64,
          "object": {
            "type": "MemberExpression",
            "start": 59,
            "end": 62,
            "object": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 65,
          "end": 84,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 65,
              "end": 71,
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 72,
              "end": 78,
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 79,
              "end": 84,
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
              "start": 71,
              "end": 72,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 78,
              "end": 79,
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
      "start": 87,
      "end": 101,
      "expression": {
        "type": "MemberExpression",
        "start": 87,
        "end": 101,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 87,
          "end": 94,
          "tag": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 89,
            "end": 94,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 89,
                "end": 94,
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
          "start": 95,
          "end": 101,
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
      "start": 103,
      "end": 132,
      "expression": {
        "type": "MemberExpression",
        "start": 103,
        "end": 131,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 103,
          "end": 124,
          "tag": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 105,
            "end": 124,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 105,
                "end": 111,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 112,
                "end": 118,
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 119,
                "end": 124,
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
                "start": 111,
                "end": 112,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 118,
                "end": 119,
                "value": 2,
                "raw": "2"
              }
            ]
          }
        },
        "property": {
          "type": "Identifier",
          "start": 125,
          "end": 131,
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
      "start": 134,
      "end": 152,
      "expression": {
        "type": "MemberExpression",
        "start": 134,
        "end": 151,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 134,
          "end": 141,
          "tag": {
            "type": "Identifier",
            "start": 134,
            "end": 135,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 136,
            "end": 141,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 136,
                "end": 141,
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
          "start": 142,
          "end": 150,
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
      "start": 154,
      "end": 186,
      "expression": {
        "type": "MemberExpression",
        "start": 154,
        "end": 185,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 154,
          "end": 175,
          "tag": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 156,
            "end": 175,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 156,
                "end": 162,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 163,
                "end": 169,
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 170,
                "end": 175,
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
                "start": 162,
                "end": 163,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 169,
                "end": 170,
                "value": 2,
                "raw": "2"
              }
            ]
          }
        },
        "property": {
          "type": "Literal",
          "start": 176,
          "end": 184,
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
      "start": 188,
      "end": 239,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 188,
        "end": 238,
        "tag": {
          "type": "MemberExpression",
          "start": 188,
          "end": 218,
          "object": {
            "type": "MemberExpression",
            "start": 188,
            "end": 205,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 188,
              "end": 195,
              "tag": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 190,
                "end": 195,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 190,
                    "end": 195,
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
              "start": 196,
              "end": 204,
              "value": "member",
              "raw": "\"member\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 206,
            "end": 218,
            "decorators": [],
            "name": "someOtherTag",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 219,
          "end": 238,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 219,
              "end": 225,
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 226,
              "end": 232,
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 233,
              "end": 238,
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
              "start": 225,
              "end": 226,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 232,
              "end": 233,
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
      "start": 241,
      "end": 306,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 241,
        "end": 305,
        "tag": {
          "type": "MemberExpression",
          "start": 241,
          "end": 285,
          "object": {
            "type": "MemberExpression",
            "start": 241,
            "end": 272,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 241,
              "end": 262,
              "tag": {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 243,
                "end": 262,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 243,
                    "end": 249,
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 250,
                    "end": 256,
                    "value": {
                      "raw": "def",
                      "cooked": "def"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 257,
                    "end": 262,
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
                    "start": 249,
                    "end": 250,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 256,
                    "end": 257,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            },
            "property": {
              "type": "Literal",
              "start": 263,
              "end": 271,
              "value": "member",
              "raw": "\"member\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 273,
            "end": 285,
            "decorators": [],
            "name": "someOtherTag",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 286,
          "end": 305,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 286,
              "end": 292,
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 293,
              "end": 299,
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 300,
              "end": 305,
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
              "start": 292,
              "end": 293,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 299,
              "end": 300,
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
      "start": 308,
      "end": 331,
      "expression": {
        "type": "CallExpression",
        "start": 308,
        "end": 330,
        "callee": {
          "type": "MemberExpression",
          "start": 308,
          "end": 323,
          "object": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 310,
            "end": 323,
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
            "start": 324,
            "end": 329,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 324,
                "end": 329,
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
      "start": 333,
      "end": 370,
      "expression": {
        "type": "CallExpression",
        "start": 333,
        "end": 369,
        "callee": {
          "type": "MemberExpression",
          "start": 333,
          "end": 348,
          "object": {
            "type": "Identifier",
            "start": 333,
            "end": 334,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 335,
            "end": 348,
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
            "start": 349,
            "end": 368,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 349,
                "end": 355,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 356,
                "end": 362,
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 363,
                "end": 368,
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
                "start": 355,
                "end": 356,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 362,
                "end": 363,
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
