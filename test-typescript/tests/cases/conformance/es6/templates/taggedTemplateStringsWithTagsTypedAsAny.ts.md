taggedTemplateStringsWithTagsTypedAsAny.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 11,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 11,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 8,
                "end": 11
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
      "start": 14,
      "end": 21,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 14,
        "end": 21,
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
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 23,
      "end": 45,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 23,
        "end": 44,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 25,
          "end": 44,
          "expressions": [
            {
              "type": "Literal",
              "start": 31,
              "end": 32,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 38,
              "end": 39,
              "raw": "2",
              "value": 2
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 25,
              "end": 31,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 32,
              "end": 38,
              "tail": false,
              "value": {
                "cooked": "def",
                "raw": "def"
              }
            },
            {
              "type": "TemplateElement",
              "start": 39,
              "end": 44,
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
          "start": 23,
          "end": 24,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 58,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 47,
        "end": 58,
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
          "start": 47,
          "end": 52,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 47,
            "end": 50,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "g",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "h",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 60,
      "end": 86,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 60,
        "end": 85,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 66,
          "end": 85,
          "expressions": [
            {
              "type": "Literal",
              "start": 72,
              "end": 73,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 79,
              "end": 80,
              "raw": "2",
              "value": 2
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 66,
              "end": 72,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 73,
              "end": 79,
              "tail": false,
              "value": {
                "cooked": "def",
                "raw": "def"
              }
            },
            {
              "type": "TemplateElement",
              "start": 80,
              "end": 85,
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
          "start": 60,
          "end": 65,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 60,
            "end": 63,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "g",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "h",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 88,
      "end": 102,
      "expression": {
        "type": "MemberExpression",
        "start": 88,
        "end": 102,
        "computed": false,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 88,
          "end": 95,
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
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 96,
          "end": 102,
          "decorators": [],
          "name": "member",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 133,
      "expression": {
        "type": "MemberExpression",
        "start": 104,
        "end": 132,
        "computed": false,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 104,
          "end": 125,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 106,
            "end": 125,
            "expressions": [
              {
                "type": "Literal",
                "start": 112,
                "end": 113,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 119,
                "end": 120,
                "raw": "2",
                "value": 2
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 106,
                "end": 112,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 113,
                "end": 119,
                "tail": false,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                }
              },
              {
                "type": "TemplateElement",
                "start": 120,
                "end": 125,
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
            "start": 104,
            "end": 105,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 126,
          "end": 132,
          "decorators": [],
          "name": "member",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 135,
      "end": 153,
      "expression": {
        "type": "MemberExpression",
        "start": 135,
        "end": 152,
        "computed": true,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 135,
          "end": 142,
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
            "start": 135,
            "end": 136,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 143,
          "end": 151,
          "raw": "\"member\"",
          "value": "member"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 155,
      "end": 187,
      "expression": {
        "type": "MemberExpression",
        "start": 155,
        "end": 186,
        "computed": true,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 155,
          "end": 176,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 157,
            "end": 176,
            "expressions": [
              {
                "type": "Literal",
                "start": 163,
                "end": 164,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 170,
                "end": 171,
                "raw": "2",
                "value": 2
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 157,
                "end": 163,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 164,
                "end": 170,
                "tail": false,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                }
              },
              {
                "type": "TemplateElement",
                "start": 171,
                "end": 176,
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
            "start": 155,
            "end": 156,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 177,
          "end": 185,
          "raw": "\"member\"",
          "value": "member"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 240,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 189,
        "end": 239,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 220,
          "end": 239,
          "expressions": [
            {
              "type": "Literal",
              "start": 226,
              "end": 227,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 233,
              "end": 234,
              "raw": "2",
              "value": 2
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 220,
              "end": 226,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 227,
              "end": 233,
              "tail": false,
              "value": {
                "cooked": "def",
                "raw": "def"
              }
            },
            {
              "type": "TemplateElement",
              "start": 234,
              "end": 239,
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
          "start": 189,
          "end": 219,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 189,
            "end": 206,
            "computed": true,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 189,
              "end": 196,
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
                "start": 189,
                "end": 190,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 197,
              "end": 205,
              "raw": "\"member\"",
              "value": "member"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 207,
            "end": 219,
            "decorators": [],
            "name": "someOtherTag",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 307,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 242,
        "end": 306,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 287,
          "end": 306,
          "expressions": [
            {
              "type": "Literal",
              "start": 293,
              "end": 294,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 300,
              "end": 301,
              "raw": "2",
              "value": 2
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 287,
              "end": 293,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 294,
              "end": 300,
              "tail": false,
              "value": {
                "cooked": "def",
                "raw": "def"
              }
            },
            {
              "type": "TemplateElement",
              "start": 301,
              "end": 306,
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
          "start": 242,
          "end": 286,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 242,
            "end": 273,
            "computed": true,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 242,
              "end": 263,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 244,
                "end": 263,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 250,
                    "end": 251,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 257,
                    "end": 258,
                    "raw": "2",
                    "value": 2
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 244,
                    "end": 250,
                    "tail": false,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 251,
                    "end": 257,
                    "tail": false,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 258,
                    "end": 263,
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
                "start": 242,
                "end": 243,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 264,
              "end": 272,
              "raw": "\"member\"",
              "value": "member"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 274,
            "end": 286,
            "decorators": [],
            "name": "someOtherTag",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 309,
      "end": 332,
      "expression": {
        "type": "CallExpression",
        "start": 309,
        "end": 331,
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
          "start": 309,
          "end": 324,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 309,
            "end": 310,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 311,
            "end": 324,
            "decorators": [],
            "name": "thisIsNotATag",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 334,
      "end": 371,
      "expression": {
        "type": "CallExpression",
        "start": 334,
        "end": 370,
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 363,
                "end": 364,
                "raw": "2",
                "value": 2
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 350,
                "end": 356,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 357,
                "end": 363,
                "tail": false,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                }
              },
              {
                "type": "TemplateElement",
                "start": 364,
                "end": 369,
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
          "start": 334,
          "end": 349,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 334,
            "end": 335,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 336,
            "end": 349,
            "decorators": [],
            "name": "thisIsNotATag",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
