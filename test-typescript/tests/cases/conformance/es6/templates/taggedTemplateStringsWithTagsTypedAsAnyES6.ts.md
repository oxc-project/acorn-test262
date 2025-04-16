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
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 27,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 27,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 24,
                "end": 27
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
      "start": 29,
      "end": 36,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 29,
        "end": 36,
        "tag": {
          "type": "Identifier",
          "start": 29,
          "end": 30,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
      "start": 38,
      "end": 60,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 38,
        "end": 59,
        "tag": {
          "type": "Identifier",
          "start": 38,
          "end": 39,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "start": 40,
          "end": 59,
          "expressions": [
            {
              "type": "Literal",
              "start": 46,
              "end": 47,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 53,
              "end": 54,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 40,
              "end": 46,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 47,
              "end": 53,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 54,
              "end": 59,
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
      "start": 62,
      "end": 73,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 62,
        "end": 73,
        "tag": {
          "type": "MemberExpression",
          "start": 62,
          "end": 67,
          "object": {
            "type": "MemberExpression",
            "start": 62,
            "end": 65,
            "object": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
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
            "start": 66,
            "end": 67,
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
          "start": 68,
          "end": 73,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 68,
              "end": 73,
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
      "start": 75,
      "end": 101,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 75,
        "end": 100,
        "tag": {
          "type": "MemberExpression",
          "start": 75,
          "end": 80,
          "object": {
            "type": "MemberExpression",
            "start": 75,
            "end": 78,
            "object": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
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
            "start": 79,
            "end": 80,
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
          "start": 81,
          "end": 100,
          "expressions": [
            {
              "type": "Literal",
              "start": 87,
              "end": 88,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 94,
              "end": 95,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 81,
              "end": 87,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 88,
              "end": 94,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 95,
              "end": 100,
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
      "start": 103,
      "end": 117,
      "expression": {
        "type": "MemberExpression",
        "start": 103,
        "end": 117,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 103,
          "end": 110,
          "tag": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          "start": 111,
          "end": 117,
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
      "start": 119,
      "end": 148,
      "expression": {
        "type": "MemberExpression",
        "start": 119,
        "end": 147,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 119,
          "end": 140,
          "tag": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 121,
            "end": 140,
            "expressions": [
              {
                "type": "Literal",
                "start": 127,
                "end": 128,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 134,
                "end": 135,
                "value": 2,
                "raw": "2"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 121,
                "end": 127,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 128,
                "end": 134,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 135,
                "end": 140,
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
          "start": 141,
          "end": 147,
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
      "start": 150,
      "end": 168,
      "expression": {
        "type": "MemberExpression",
        "start": 150,
        "end": 167,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 150,
          "end": 157,
          "tag": {
            "type": "Identifier",
            "start": 150,
            "end": 151,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          "start": 158,
          "end": 166,
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
      "start": 170,
      "end": 202,
      "expression": {
        "type": "MemberExpression",
        "start": 170,
        "end": 201,
        "object": {
          "type": "TaggedTemplateExpression",
          "start": 170,
          "end": 191,
          "tag": {
            "type": "Identifier",
            "start": 170,
            "end": 171,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "quasi": {
            "type": "TemplateLiteral",
            "start": 172,
            "end": 191,
            "expressions": [
              {
                "type": "Literal",
                "start": 178,
                "end": 179,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 185,
                "end": 186,
                "value": 2,
                "raw": "2"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 172,
                "end": 178,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 179,
                "end": 185,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 186,
                "end": 191,
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
          "start": 192,
          "end": 200,
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
      "start": 204,
      "end": 255,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 204,
        "end": 254,
        "tag": {
          "type": "MemberExpression",
          "start": 204,
          "end": 234,
          "object": {
            "type": "MemberExpression",
            "start": 204,
            "end": 221,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 204,
              "end": 211,
              "tag": {
                "type": "Identifier",
                "start": 204,
                "end": 205,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              "start": 212,
              "end": 220,
              "value": "member",
              "raw": "\"member\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 222,
            "end": 234,
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
          "start": 235,
          "end": 254,
          "expressions": [
            {
              "type": "Literal",
              "start": 241,
              "end": 242,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 248,
              "end": 249,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 235,
              "end": 241,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 242,
              "end": 248,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 249,
              "end": 254,
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
      "start": 257,
      "end": 322,
      "expression": {
        "type": "TaggedTemplateExpression",
        "start": 257,
        "end": 321,
        "tag": {
          "type": "MemberExpression",
          "start": 257,
          "end": 301,
          "object": {
            "type": "MemberExpression",
            "start": 257,
            "end": 288,
            "object": {
              "type": "TaggedTemplateExpression",
              "start": 257,
              "end": 278,
              "tag": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "quasi": {
                "type": "TemplateLiteral",
                "start": 259,
                "end": 278,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 265,
                    "end": 266,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "Literal",
                    "start": 272,
                    "end": 273,
                    "value": 2,
                    "raw": "2"
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 259,
                    "end": 265,
                    "value": {
                      "cooked": "abc",
                      "raw": "abc"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 266,
                    "end": 272,
                    "value": {
                      "cooked": "def",
                      "raw": "def"
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 273,
                    "end": 278,
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
              "start": 279,
              "end": 287,
              "value": "member",
              "raw": "\"member\""
            },
            "computed": true,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 289,
            "end": 301,
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
          "start": 302,
          "end": 321,
          "expressions": [
            {
              "type": "Literal",
              "start": 308,
              "end": 309,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 315,
              "end": 316,
              "value": 2,
              "raw": "2"
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 302,
              "end": 308,
              "value": {
                "cooked": "abc",
                "raw": "abc"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 309,
              "end": 315,
              "value": {
                "cooked": "def",
                "raw": "def"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 316,
              "end": 321,
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
      "start": 324,
      "end": 347,
      "expression": {
        "type": "CallExpression",
        "start": 324,
        "end": 346,
        "callee": {
          "type": "MemberExpression",
          "start": 324,
          "end": 339,
          "object": {
            "type": "Identifier",
            "start": 324,
            "end": 325,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 326,
            "end": 339,
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
            "start": 340,
            "end": 345,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 340,
                "end": 345,
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
      "start": 349,
      "end": 386,
      "expression": {
        "type": "CallExpression",
        "start": 349,
        "end": 385,
        "callee": {
          "type": "MemberExpression",
          "start": 349,
          "end": 364,
          "object": {
            "type": "Identifier",
            "start": 349,
            "end": 350,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 351,
            "end": 364,
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
            "start": 365,
            "end": 384,
            "expressions": [
              {
                "type": "Literal",
                "start": 371,
                "end": 372,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 378,
                "end": 379,
                "value": 2,
                "raw": "2"
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 365,
                "end": 371,
                "value": {
                  "cooked": "abc",
                  "raw": "abc"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 372,
                "end": 378,
                "value": {
                  "cooked": "def",
                  "raw": "def"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 379,
                "end": 384,
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
