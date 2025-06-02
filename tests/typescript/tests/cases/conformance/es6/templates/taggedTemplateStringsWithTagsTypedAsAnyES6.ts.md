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
      "start": 12,
      "end": 19,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 12,
        "end": 19,
        "tag": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 14,
          "end": 19,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 14,
              "end": 19,
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
      "start": 21,
      "end": 43,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 21,
        "end": 42,
        "tag": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 23,
          "end": 42,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 23,
              "end": 29,
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 30,
              "end": 36,
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 37,
              "end": 42,
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
              "start": 29,
              "end": 30,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 36,
              "end": 37,
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
      "start": 45,
      "end": 56,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 45,
        "end": 56,
        "tag": {
          "type": "MemberExpression",
          "start": 45,
          "end": 50,
          "object": {
            "type": "MemberExpression",
            "start": 45,
            "end": 48,
            "object": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
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
            "start": 49,
            "end": 50,
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
          "start": 51,
          "end": 56,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 51,
              "end": 56,
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
      "start": 58,
      "end": 84,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 58,
        "end": 83,
        "tag": {
          "type": "MemberExpression",
          "start": 58,
          "end": 63,
          "object": {
            "type": "MemberExpression",
            "start": 58,
            "end": 61,
            "object": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
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
            "start": 62,
            "end": 63,
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
          "start": 64,
          "end": 83,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 64,
              "end": 70,
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 71,
              "end": 77,
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 78,
              "end": 83,
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
              "start": 70,
              "end": 71,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 77,
              "end": 78,
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
      "start": 86,
      "end": 100,
      "expression": {
        "type": "MemberExpression",
        "start": 86,
        "end": 100,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 86,
          "end": 93,
          "tag": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 88,
            "end": 93,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 88,
                "end": 93,
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
          "start": 94,
          "end": 100,
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
      "start": 102,
      "end": 131,
      "expression": {
        "type": "MemberExpression",
        "start": 102,
        "end": 130,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 102,
          "end": 123,
          "tag": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 104,
            "end": 123,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 104,
                "end": 110,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 111,
                "end": 117,
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 118,
                "end": 123,
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
                "start": 110,
                "end": 111,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 117,
                "end": 118,
                "value": 2,
                "raw": "2"
              }
            ]
          }
        },
        "property": {
          "type": "Identifier",
          "start": 124,
          "end": 130,
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
      "start": 133,
      "end": 151,
      "expression": {
        "type": "MemberExpression",
        "start": 133,
        "end": 150,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 133,
          "end": 140,
          "tag": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 135,
            "end": 140,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 135,
                "end": 140,
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
          "start": 141,
          "end": 149,
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
      "start": 153,
      "end": 185,
      "expression": {
        "type": "MemberExpression",
        "start": 153,
        "end": 184,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 153,
          "end": 174,
          "tag": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 155,
            "end": 174,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 155,
                "end": 161,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 162,
                "end": 168,
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 169,
                "end": 174,
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
                "start": 161,
                "end": 162,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 168,
                "end": 169,
                "value": 2,
                "raw": "2"
              }
            ]
          }
        },
        "property": {
          "type": "Literal",
          "start": 175,
          "end": 183,
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
      "start": 187,
      "end": 238,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 187,
        "end": 237,
        "tag": {
          "type": "MemberExpression",
          "start": 187,
          "end": 217,
          "object": {
            "type": "MemberExpression",
            "start": 187,
            "end": 204,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 187,
              "end": 194,
              "tag": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 189,
                "end": 194,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 189,
                    "end": 194,
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
              "start": 195,
              "end": 203,
              "value": "member",
              "raw": "\"member\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 205,
            "end": 217,
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
          "start": 218,
          "end": 237,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 218,
              "end": 224,
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 225,
              "end": 231,
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 232,
              "end": 237,
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
              "start": 224,
              "end": 225,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 231,
              "end": 232,
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
      "start": 240,
      "end": 305,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 240,
        "end": 304,
        "tag": {
          "type": "MemberExpression",
          "start": 240,
          "end": 284,
          "object": {
            "type": "MemberExpression",
            "start": 240,
            "end": 271,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 240,
              "end": 261,
              "tag": {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 242,
                "end": 261,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 242,
                    "end": 248,
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 249,
                    "end": 255,
                    "value": {
                      "raw": "def",
                      "cooked": "def"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 256,
                    "end": 261,
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
                    "start": 248,
                    "end": 249,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 255,
                    "end": 256,
                    "value": 2,
                    "raw": "2"
                  }
                ]
              }
            },
            "property": {
              "type": "Literal",
              "start": 262,
              "end": 270,
              "value": "member",
              "raw": "\"member\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 272,
            "end": 284,
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
          "start": 285,
          "end": 304,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 285,
              "end": 291,
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 292,
              "end": 298,
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 299,
              "end": 304,
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
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 307,
      "end": 330,
      "expression": {
        "type": "CallExpression",
        "start": 307,
        "end": 329,
        "callee": {
          "type": "MemberExpression",
          "start": 307,
          "end": 322,
          "object": {
            "type": "Identifier",
            "start": 307,
            "end": 308,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 309,
            "end": 322,
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
            "start": 323,
            "end": 328,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 323,
                "end": 328,
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
      "start": 332,
      "end": 369,
      "expression": {
        "type": "CallExpression",
        "start": 332,
        "end": 368,
        "callee": {
          "type": "MemberExpression",
          "start": 332,
          "end": 347,
          "object": {
            "type": "Identifier",
            "start": 332,
            "end": 333,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 334,
            "end": 347,
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
            "start": 348,
            "end": 367,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 348,
                "end": 354,
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 355,
                "end": 361,
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 362,
                "end": 367,
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
                "start": 354,
                "end": 355,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 361,
                "end": 362,
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
