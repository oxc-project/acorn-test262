__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 345,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "tag",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 21,
          "end": 32,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 32,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 27,
              "end": 32,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 33,
        "end": 38,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 35,
          "end": 38
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 74,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 73,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 49,
            "end": 73,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 49,
                "end": 52,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 71,
                "end": 73,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "TSAsExpression",
                "start": 52,
                "end": 71,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 52,
                  "end": 61,
                  "left": {
                    "type": "Literal",
                    "start": 52,
                    "end": 55,
                    "value": 123,
                    "raw": "123"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 58,
                    "end": 61,
                    "value": 456,
                    "raw": "456"
                  }
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 65,
                  "end": 71
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 116,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 115,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 83,
            "end": 115,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 83,
                "end": 94,
                "value": {
                  "cooked": "leading ",
                  "raw": "leading "
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 113,
                "end": 115,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "TSAsExpression",
                "start": 94,
                "end": 113,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 94,
                  "end": 103,
                  "left": {
                    "type": "Literal",
                    "start": 94,
                    "end": 97,
                    "value": 123,
                    "raw": "123"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 100,
                    "end": 103,
                    "value": 456,
                    "raw": "456"
                  }
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 107,
                  "end": 113
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 117,
      "end": 159,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 158,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TemplateLiteral",
            "start": 125,
            "end": 158,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 125,
                "end": 128,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 147,
                "end": 158,
                "value": {
                  "cooked": " trailing",
                  "raw": " trailing"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "TSAsExpression",
                "start": 128,
                "end": 147,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 128,
                  "end": 137,
                  "left": {
                    "type": "Literal",
                    "start": 128,
                    "end": 131,
                    "value": 123,
                    "raw": "123"
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 134,
                    "end": 137,
                    "value": 456,
                    "raw": "456"
                  }
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 141,
                  "end": 147
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 199,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 198,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 168,
            "end": 198,
            "expression": {
              "type": "TemplateLiteral",
              "start": 168,
              "end": 188,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 168,
                  "end": 177,
                  "value": {
                    "cooked": "Hello ",
                    "raw": "Hello "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 180,
                  "end": 188,
                  "value": {
                    "cooked": " World",
                    "raw": " World"
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Literal",
                  "start": 177,
                  "end": 180,
                  "value": 123,
                  "raw": "123"
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 192,
              "end": 198
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 200,
      "end": 226,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 225,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 205,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 208,
            "end": 225,
            "expression": {
              "type": "TemplateLiteral",
              "start": 208,
              "end": 215,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 208,
                  "end": 215,
                  "value": {
                    "cooked": "Hello",
                    "raw": "Hello"
                  },
                  "tail": true
                }
              ],
              "expressions": []
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 219,
              "end": 225
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 227,
      "end": 270,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 269,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 232,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 235,
            "end": 269,
            "expression": {
              "type": "BinaryExpression",
              "start": 235,
              "end": 259,
              "left": {
                "type": "Literal",
                "start": 235,
                "end": 236,
                "value": 1,
                "raw": "1"
              },
              "operator": "+",
              "right": {
                "type": "TemplateLiteral",
                "start": 239,
                "end": 259,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 239,
                    "end": 242,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 243,
                    "end": 259,
                    "value": {
                      "cooked": " end of string",
                      "raw": " end of string"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 242,
                    "end": 243,
                    "value": 1,
                    "raw": "1"
                  }
                ]
              }
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 263,
              "end": 269
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 271,
      "end": 314,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 313,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 276,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 279,
            "end": 313,
            "expression": {
              "type": "TaggedTemplateExpression",
              "start": 279,
              "end": 303,
              "tag": {
                "type": "Identifier",
                "start": 279,
                "end": 282,
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 283,
                "end": 303,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 283,
                    "end": 292,
                    "value": {
                      "cooked": "Hello ",
                      "raw": "Hello "
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 295,
                    "end": 303,
                    "value": {
                      "cooked": " World",
                      "raw": " World"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 292,
                    "end": 295,
                    "value": 123,
                    "raw": "123"
                  }
                ]
              }
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 307,
              "end": 313
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 315,
      "end": 345,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 344,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 320,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 323,
            "end": 344,
            "expression": {
              "type": "TaggedTemplateExpression",
              "start": 323,
              "end": 334,
              "tag": {
                "type": "Identifier",
                "start": 323,
                "end": 326,
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 327,
                "end": 334,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 327,
                    "end": 334,
                    "value": {
                      "cooked": "Hello",
                      "raw": "Hello"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              }
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 338,
              "end": 344
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
