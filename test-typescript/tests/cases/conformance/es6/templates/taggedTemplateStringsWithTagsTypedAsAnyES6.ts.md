__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 386,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 27,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 27,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 24,
                "end": 27
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
      "start": 29,
      "end": 36,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 29,
        "end": 36,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 31,
          "end": 36,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 31,
              "end": 36,
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
          "start": 29,
          "end": 30,
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
      "start": 38,
      "end": 60,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 38,
        "end": 59,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 40,
          "end": 59,
          "expressions": [
            {
              "type": "Literal",
              "start": 46,
              "end": 47,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 53,
              "end": 54,
              "raw": "2",
              "value": 2
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 40,
              "end": 46,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 47,
              "end": 53,
              "tail": false,
              "value": {
                "cooked": "def",
                "raw": "def"
              }
            },
            {
              "type": "TemplateElement",
              "start": 54,
              "end": 59,
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
          "start": 38,
          "end": 39,
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
      "start": 62,
      "end": 73,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 62,
        "end": 73,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 68,
          "end": 73,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 68,
              "end": 73,
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
          "start": 62,
          "end": 67,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 62,
            "end": 65,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
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
      "start": 75,
      "end": 101,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 75,
        "end": 100,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 81,
          "end": 100,
          "expressions": [
            {
              "type": "Literal",
              "start": 87,
              "end": 88,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 94,
              "end": 95,
              "raw": "2",
              "value": 2
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 81,
              "end": 87,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 88,
              "end": 94,
              "tail": false,
              "value": {
                "cooked": "def",
                "raw": "def"
              }
            },
            {
              "type": "TemplateElement",
              "start": 95,
              "end": 100,
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
          "start": 75,
          "end": 80,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 75,
            "end": 78,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
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
      "start": 103,
      "end": 117,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 103,
        "end": 117,
        "computed": false,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 103,
          "end": 110,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 105,
            "end": 110,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 105,
                "end": 110,
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
          "start": 111,
          "end": 117,
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 119,
      "end": 148,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 119,
        "end": 147,
        "computed": false,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 119,
          "end": 140,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 121,
            "end": 140,
            "expressions": [
              {
                "type": "Literal",
                "start": 127,
                "end": 128,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 134,
                "end": 135,
                "raw": "2",
                "value": 2
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 121,
                "end": 127,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 128,
                "end": 134,
                "tail": false,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                }
              },
              {
                "type": "TemplateElement",
                "start": 135,
                "end": 140,
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
            "start": 119,
            "end": 120,
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
          "start": 141,
          "end": 147,
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 150,
      "end": 168,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 150,
        "end": 167,
        "computed": true,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 150,
          "end": 157,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 152,
            "end": 157,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 152,
                "end": 157,
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
            "start": 150,
            "end": 151,
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
          "start": 158,
          "end": 166,
          "raw": "\"member\"",
          "value": "member"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 170,
      "end": 202,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 170,
        "end": 201,
        "computed": true,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 170,
          "end": 191,
          "quasi": {
            "type": "TemplateLiteral",
            "start": 172,
            "end": 191,
            "expressions": [
              {
                "type": "Literal",
                "start": 178,
                "end": 179,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 185,
                "end": 186,
                "raw": "2",
                "value": 2
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 172,
                "end": 178,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 179,
                "end": 185,
                "tail": false,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                }
              },
              {
                "type": "TemplateElement",
                "start": 186,
                "end": 191,
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
            "start": 170,
            "end": 171,
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
          "start": 192,
          "end": 200,
          "raw": "\"member\"",
          "value": "member"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 255,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 204,
        "end": 254,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 235,
          "end": 254,
          "expressions": [
            {
              "type": "Literal",
              "start": 241,
              "end": 242,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 248,
              "end": 249,
              "raw": "2",
              "value": 2
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 235,
              "end": 241,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 242,
              "end": 248,
              "tail": false,
              "value": {
                "cooked": "def",
                "raw": "def"
              }
            },
            {
              "type": "TemplateElement",
              "start": 249,
              "end": 254,
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
          "start": 204,
          "end": 234,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 204,
            "end": 221,
            "computed": true,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 204,
              "end": 211,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 206,
                "end": 211,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 206,
                    "end": 211,
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
                "start": 204,
                "end": 205,
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
              "start": 212,
              "end": 220,
              "raw": "\"member\"",
              "value": "member"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 222,
            "end": 234,
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
      "start": 257,
      "end": 322,
      "directive": null,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 257,
        "end": 321,
        "quasi": {
          "type": "TemplateLiteral",
          "start": 302,
          "end": 321,
          "expressions": [
            {
              "type": "Literal",
              "start": 308,
              "end": 309,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 315,
              "end": 316,
              "raw": "2",
              "value": 2
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 302,
              "end": 308,
              "tail": false,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              }
            },
            {
              "type": "TemplateElement",
              "start": 309,
              "end": 315,
              "tail": false,
              "value": {
                "cooked": "def",
                "raw": "def"
              }
            },
            {
              "type": "TemplateElement",
              "start": 316,
              "end": 321,
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
          "start": 257,
          "end": 301,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 257,
            "end": 288,
            "computed": true,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 257,
              "end": 278,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 259,
                "end": 278,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 265,
                    "end": 266,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "Literal",
                    "start": 272,
                    "end": 273,
                    "raw": "2",
                    "value": 2
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 259,
                    "end": 265,
                    "tail": false,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 266,
                    "end": 272,
                    "tail": false,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 273,
                    "end": 278,
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
                "start": 257,
                "end": 258,
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
              "start": 279,
              "end": 287,
              "raw": "\"member\"",
              "value": "member"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 289,
            "end": 301,
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
      "start": 324,
      "end": 347,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 324,
        "end": 346,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 340,
            "end": 345,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 340,
                "end": 345,
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
          "start": 324,
          "end": 339,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 324,
            "end": 325,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 326,
            "end": 339,
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
      "start": 349,
      "end": 386,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 349,
        "end": 385,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 365,
            "end": 384,
            "expressions": [
              {
                "type": "Literal",
                "start": 371,
                "end": 372,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 378,
                "end": 379,
                "raw": "2",
                "value": 2
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 365,
                "end": 371,
                "tail": false,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                }
              },
              {
                "type": "TemplateElement",
                "start": 372,
                "end": 378,
                "tail": false,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                }
              },
              {
                "type": "TemplateElement",
                "start": 379,
                "end": 384,
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
          "start": 349,
          "end": 364,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 349,
            "end": 350,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 351,
            "end": 364,
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
