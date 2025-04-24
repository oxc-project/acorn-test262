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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 13,
      "end": 20,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 13,
        "end": 20,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 15,
          "end": 20,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 15,
              "end": 20,
              "tail": true,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 44,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 22,
        "end": 43,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 24,
          "end": 43,
          "expressions": [
            {
              "type": "Literal",
              "start": 30,
              "end": 31,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 37,
              "end": 38,
              "raw": "2",
              "value": 2
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 24,
              "end": 30,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 31,
              "end": 37,
              "tail": false,
              "value": {
                "cooked": "def",
                "raw": "def"
              }
            },
            {
              "type": "TemplateElement",
              "start": 38,
              "end": 43,
              "tail": true,
              "value": {
                "cooked": "ghi",
                "raw": "ghi"
              }
            }
          ]
        },
        "tag": {
          "type": "Identifier",
          "start": 22,
          "end": 23,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 57,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 46,
        "end": 57,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 52,
          "end": 57,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 52,
              "end": 57,
              "tail": true,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            }
          ]
        },
        "tag": {
          "type": "MemberExpression",
          "start": 46,
          "end": 51,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 46,
            "end": 49,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 59,
      "end": 85,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 59,
        "end": 84,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 65,
          "end": 84,
          "expressions": [
            {
              "type": "Literal",
              "start": 71,
              "end": 72,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 78,
              "end": 79,
              "raw": "2",
              "value": 2
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 65,
              "end": 71,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 72,
              "end": 78,
              "tail": false,
              "value": {
                "cooked": "def",
                "raw": "def"
              }
            },
            {
              "type": "TemplateElement",
              "start": 79,
              "end": 84,
              "tail": true,
              "value": {
                "cooked": "ghi",
                "raw": "ghi"
              }
            }
          ]
        },
        "tag": {
          "type": "MemberExpression",
          "start": 59,
          "end": 64,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 59,
            "end": 62,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 101,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 87,
        "end": 101,
        "computed": false,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 87,
          "end": 94,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 89,
            "end": 94,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 89,
                "end": 94,
                "tail": true,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              }
            ]
          },
          "tag": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 95,
          "end": 101,
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 132,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 103,
        "end": 131,
        "computed": false,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 103,
          "end": 124,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 105,
            "end": 124,
            "expressions": [
              {
                "type": "Literal",
                "start": 111,
                "end": 112,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 118,
                "end": 119,
                "raw": "2",
                "value": 2
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 105,
                "end": 111,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 112,
                "end": 118,
                "tail": false,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                }
              },
              {
                "type": "TemplateElement",
                "start": 119,
                "end": 124,
                "tail": true,
                "value": {
                  "cooked": "ghi",
                  "raw": "ghi"
                }
              }
            ]
          },
          "tag": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 125,
          "end": 131,
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 152,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 134,
        "end": 151,
        "computed": true,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 134,
          "end": 141,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 136,
            "end": 141,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 136,
                "end": 141,
                "tail": true,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              }
            ]
          },
          "tag": {
            "type": "Identifier",
            "start": 134,
            "end": 135,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 142,
          "end": 150,
          "raw": "\"member\"",
          "value": "member"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 186,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 154,
        "end": 185,
        "computed": true,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 154,
          "end": 175,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 156,
            "end": 175,
            "expressions": [
              {
                "type": "Literal",
                "start": 162,
                "end": 163,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 169,
                "end": 170,
                "raw": "2",
                "value": 2
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 156,
                "end": 162,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 163,
                "end": 169,
                "tail": false,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                }
              },
              {
                "type": "TemplateElement",
                "start": 170,
                "end": 175,
                "tail": true,
                "value": {
                  "cooked": "ghi",
                  "raw": "ghi"
                }
              }
            ]
          },
          "tag": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 176,
          "end": 184,
          "raw": "\"member\"",
          "value": "member"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 188,
      "end": 239,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 188,
        "end": 238,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 219,
          "end": 238,
          "expressions": [
            {
              "type": "Literal",
              "start": 225,
              "end": 226,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 232,
              "end": 233,
              "raw": "2",
              "value": 2
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 219,
              "end": 225,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 226,
              "end": 232,
              "tail": false,
              "value": {
                "cooked": "def",
                "raw": "def"
              }
            },
            {
              "type": "TemplateElement",
              "start": 233,
              "end": 238,
              "tail": true,
              "value": {
                "cooked": "ghi",
                "raw": "ghi"
              }
            }
          ]
        },
        "tag": {
          "type": "MemberExpression",
          "start": 188,
          "end": 218,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 188,
            "end": 205,
            "computed": true,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 188,
              "end": 195,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 190,
                "end": 195,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 190,
                    "end": 195,
                    "tail": true,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    }
                  }
                ]
              },
              "tag": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 196,
              "end": 204,
              "raw": "\"member\"",
              "value": "member"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 206,
            "end": 218,
            "decorators": [],
            "name": "someOtherTag",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 241,
      "end": 306,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 241,
        "end": 305,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 286,
          "end": 305,
          "expressions": [
            {
              "type": "Literal",
              "start": 292,
              "end": 293,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 299,
              "end": 300,
              "raw": "2",
              "value": 2
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 286,
              "end": 292,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 293,
              "end": 299,
              "tail": false,
              "value": {
                "cooked": "def",
                "raw": "def"
              }
            },
            {
              "type": "TemplateElement",
              "start": 300,
              "end": 305,
              "tail": true,
              "value": {
                "cooked": "ghi",
                "raw": "ghi"
              }
            }
          ]
        },
        "tag": {
          "type": "MemberExpression",
          "start": 241,
          "end": 285,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 241,
            "end": 272,
            "computed": true,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 241,
              "end": 262,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 243,
                "end": 262,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 249,
                    "end": 250,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 256,
                    "end": 257,
                    "raw": "2",
                    "value": 2
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 243,
                    "end": 249,
                    "tail": false,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 250,
                    "end": 256,
                    "tail": false,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 257,
                    "end": 262,
                    "tail": true,
                    "value": {
                      "cooked": "ghi",
                      "raw": "ghi"
                    }
                  }
                ]
              },
              "tag": {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 263,
              "end": 271,
              "raw": "\"member\"",
              "value": "member"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 273,
            "end": 285,
            "decorators": [],
            "name": "someOtherTag",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 308,
      "end": 331,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 308,
        "end": 330,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 324,
            "end": 329,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 324,
                "end": 329,
                "tail": true,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 308,
          "end": 323,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 310,
            "end": 323,
            "decorators": [],
            "name": "thisIsNotATag",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 333,
      "end": 370,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 333,
        "end": 369,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 349,
            "end": 368,
            "expressions": [
              {
                "type": "Literal",
                "start": 355,
                "end": 356,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 362,
                "end": 363,
                "raw": "2",
                "value": 2
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 349,
                "end": 355,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 356,
                "end": 362,
                "tail": false,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                }
              },
              {
                "type": "TemplateElement",
                "start": 363,
                "end": 368,
                "tail": true,
                "value": {
                  "cooked": "ghi",
                  "raw": "ghi"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 333,
          "end": 348,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 333,
            "end": 334,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 335,
            "end": 348,
            "decorators": [],
            "name": "thisIsNotATag",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
