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
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "tag",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 21,
          "end": 32,
          "argument": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
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
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 73,
          "definite": false,
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
            "expressions": [
              {
                "type": "TSAsExpression",
                "start": 52,
                "end": 71,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 52,
                  "end": 61,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 52,
                    "end": 55,
                    "raw": "123",
                    "value": 123
                  },
                  "right": {
                    "type": "Literal",
                    "start": 58,
                    "end": 61,
                    "raw": "456",
                    "value": 456
                  }
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 65,
                  "end": 71
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 49,
                "end": 52,
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              },
              {
                "type": "TemplateElement",
                "start": 71,
                "end": 73,
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 115,
          "definite": false,
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
            "expressions": [
              {
                "type": "TSAsExpression",
                "start": 94,
                "end": 113,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 94,
                  "end": 103,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 94,
                    "end": 97,
                    "raw": "123",
                    "value": 123
                  },
                  "right": {
                    "type": "Literal",
                    "start": 100,
                    "end": 103,
                    "raw": "456",
                    "value": 456
                  }
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 107,
                  "end": 113
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 83,
                "end": 94,
                "tail": false,
                "value": {
                  "cooked": "leading ",
                  "raw": "leading "
                }
              },
              {
                "type": "TemplateElement",
                "start": 113,
                "end": 115,
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 117,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 158,
          "definite": false,
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
            "expressions": [
              {
                "type": "TSAsExpression",
                "start": 128,
                "end": 147,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 128,
                  "end": 137,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 128,
                    "end": 131,
                    "raw": "123",
                    "value": 123
                  },
                  "right": {
                    "type": "Literal",
                    "start": 134,
                    "end": 137,
                    "raw": "456",
                    "value": 456
                  }
                },
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 141,
                  "end": 147
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 125,
                "end": 128,
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              },
              {
                "type": "TemplateElement",
                "start": 147,
                "end": 158,
                "tail": true,
                "value": {
                  "cooked": " trailing",
                  "raw": " trailing"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 198,
          "definite": false,
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
              "expressions": [
                {
                  "type": "Literal",
                  "start": 177,
                  "end": 180,
                  "raw": "123",
                  "value": 123
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 168,
                  "end": 177,
                  "tail": false,
                  "value": {
                    "cooked": "Hello ",
                    "raw": "Hello "
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 180,
                  "end": 188,
                  "tail": true,
                  "value": {
                    "cooked": " World",
                    "raw": " World"
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 192,
              "end": 198
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 200,
      "end": 226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 225,
          "definite": false,
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
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 208,
                  "end": 215,
                  "tail": true,
                  "value": {
                    "cooked": "Hello",
                    "raw": "Hello"
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 219,
              "end": 225
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 227,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 269,
          "definite": false,
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
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 235,
                "end": 236,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "TemplateLiteral",
                "start": 239,
                "end": 259,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 242,
                    "end": 243,
                    "raw": "1",
                    "value": 1
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 239,
                    "end": 242,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 243,
                    "end": 259,
                    "tail": true,
                    "value": {
                      "cooked": " end of string",
                      "raw": " end of string"
                    }
                  }
                ]
              }
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 263,
              "end": 269
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 271,
      "end": 314,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 313,
          "definite": false,
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
              "quasi": {
                "type": "TemplateLiteral",
                "start": 283,
                "end": 303,
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 292,
                    "end": 295,
                    "raw": "123",
                    "value": 123
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 283,
                    "end": 292,
                    "tail": false,
                    "value": {
                      "cooked": "Hello ",
                      "raw": "Hello "
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 295,
                    "end": 303,
                    "tail": true,
                    "value": {
                      "cooked": " World",
                      "raw": " World"
                    }
                  }
                ]
              },
              "tag": {
                "type": "Identifier",
                "start": 279,
                "end": 282,
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 307,
              "end": 313
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 315,
      "end": 345,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 344,
          "definite": false,
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
              "quasi": {
                "type": "TemplateLiteral",
                "start": 327,
                "end": 334,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 327,
                    "end": 334,
                    "tail": true,
                    "value": {
                      "cooked": "Hello",
                      "raw": "Hello"
                    }
                  }
                ]
              },
              "tag": {
                "type": "Identifier",
                "start": 323,
                "end": 326,
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 338,
              "end": 344
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
