__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 369,
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
      "start": 12,
      "end": 19,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 12,
        "end": 19,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 14,
          "end": 19,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 14,
              "end": 19,
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
          "start": 12,
          "end": 13,
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
      "start": 21,
      "end": 43,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 21,
        "end": 42,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 23,
          "end": 42,
          "expressions": [
            {
              "type": "Literal",
              "start": 29,
              "end": 30,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 23,
              "end": 29,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 30,
              "end": 36,
              "tail": false,
              "value": {
                "cooked": "def",
                "raw": "def"
              }
            },
            {
              "type": "TemplateElement",
              "start": 37,
              "end": 42,
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
          "start": 21,
          "end": 22,
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
      "start": 45,
      "end": 56,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 45,
        "end": 56,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 51,
          "end": 56,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 51,
              "end": 56,
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
          "start": 45,
          "end": 50,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 45,
            "end": 48,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
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
      "start": 58,
      "end": 84,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 58,
        "end": 83,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 64,
          "end": 83,
          "expressions": [
            {
              "type": "Literal",
              "start": 70,
              "end": 71,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 77,
              "end": 78,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 64,
              "end": 70,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 71,
              "end": 77,
              "tail": false,
              "value": {
                "cooked": "def",
                "raw": "def"
              }
            },
            {
              "type": "TemplateElement",
              "start": 78,
              "end": 83,
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
          "start": 58,
          "end": 63,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 58,
            "end": 61,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
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
      "start": 86,
      "end": 100,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 86,
        "end": 100,
        "computed": false,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 86,
          "end": 93,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 88,
            "end": 93,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 88,
                "end": 93,
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
            "start": 86,
            "end": 87,
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
          "start": 94,
          "end": 100,
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 102,
      "end": 131,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 102,
        "end": 130,
        "computed": false,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 102,
          "end": 123,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 104,
            "end": 123,
            "expressions": [
              {
                "type": "Literal",
                "start": 110,
                "end": 111,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 117,
                "end": 118,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 104,
                "end": 110,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 111,
                "end": 117,
                "tail": false,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                }
              },
              {
                "type": "TemplateElement",
                "start": 118,
                "end": 123,
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
            "start": 102,
            "end": 103,
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
          "start": 124,
          "end": 130,
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 133,
      "end": 151,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 133,
        "end": 150,
        "computed": true,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 133,
          "end": 140,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 135,
            "end": 140,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 135,
                "end": 140,
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
            "start": 133,
            "end": 134,
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
          "start": 141,
          "end": 149,
          "raw": "\"member\"",
          "value": "member",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 185,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 153,
        "end": 184,
        "computed": true,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 153,
          "end": 174,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 155,
            "end": 174,
            "expressions": [
              {
                "type": "Literal",
                "start": 161,
                "end": 162,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 168,
                "end": 169,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 155,
                "end": 161,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 162,
                "end": 168,
                "tail": false,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                }
              },
              {
                "type": "TemplateElement",
                "start": 169,
                "end": 174,
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
            "start": 153,
            "end": 154,
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
          "start": 175,
          "end": 183,
          "raw": "\"member\"",
          "value": "member",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 187,
      "end": 238,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 187,
        "end": 237,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 218,
          "end": 237,
          "expressions": [
            {
              "type": "Literal",
              "start": 224,
              "end": 225,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 231,
              "end": 232,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 218,
              "end": 224,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 225,
              "end": 231,
              "tail": false,
              "value": {
                "cooked": "def",
                "raw": "def"
              }
            },
            {
              "type": "TemplateElement",
              "start": 232,
              "end": 237,
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
          "start": 187,
          "end": 217,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 187,
            "end": 204,
            "computed": true,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 187,
              "end": 194,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 189,
                "end": 194,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 189,
                    "end": 194,
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
                "start": 187,
                "end": 188,
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
              "start": 195,
              "end": 203,
              "raw": "\"member\"",
              "value": "member",
              "regex": null,
              "bigint": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 205,
            "end": 217,
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
      "start": 240,
      "end": 305,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 240,
        "end": 304,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 285,
          "end": 304,
          "expressions": [
            {
              "type": "Literal",
              "start": 291,
              "end": 292,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 298,
              "end": 299,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 285,
              "end": 291,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 292,
              "end": 298,
              "tail": false,
              "value": {
                "cooked": "def",
                "raw": "def"
              }
            },
            {
              "type": "TemplateElement",
              "start": 299,
              "end": 304,
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
          "start": 240,
          "end": 284,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 240,
            "end": 271,
            "computed": true,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 240,
              "end": 261,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 242,
                "end": 261,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 248,
                    "end": 249,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 255,
                    "end": 256,
                    "raw": "2",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 242,
                    "end": 248,
                    "tail": false,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 249,
                    "end": 255,
                    "tail": false,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 256,
                    "end": 261,
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
                "start": 240,
                "end": 241,
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
              "start": 262,
              "end": 270,
              "raw": "\"member\"",
              "value": "member",
              "regex": null,
              "bigint": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 272,
            "end": 284,
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
      "start": 307,
      "end": 330,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 307,
        "end": 329,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 323,
            "end": 328,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 323,
                "end": 328,
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
          "start": 307,
          "end": 322,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 307,
            "end": 308,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 309,
            "end": 322,
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
      "start": 332,
      "end": 369,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 332,
        "end": 368,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 348,
            "end": 367,
            "expressions": [
              {
                "type": "Literal",
                "start": 354,
                "end": 355,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 361,
                "end": 362,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 348,
                "end": 354,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 355,
                "end": 361,
                "tail": false,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                }
              },
              {
                "type": "TemplateElement",
                "start": 362,
                "end": 367,
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
          "start": 332,
          "end": 347,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 332,
            "end": 333,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 334,
            "end": 347,
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
