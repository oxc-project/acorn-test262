__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 434,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 61,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 40,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 40,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 20,
              "end": 40,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 20,
                "end": 40,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 42,
          "end": 51,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 51,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 45,
              "end": 51
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 52,
        "end": 60,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 54,
          "end": 60
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 62,
      "end": 111,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 75,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 76,
          "end": 90,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 80,
            "end": 90,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 82,
              "end": 90,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 92,
          "end": 101,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 93,
            "end": 101,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 95,
              "end": 101
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 102,
        "end": 110,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 104,
          "end": 110
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 112,
      "end": 173,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 148,
        "end": 173,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 154,
            "end": 171,
            "argument": {
              "type": "Identifier",
              "start": 161,
              "end": 170,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 125,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 126,
          "end": 141,
          "argument": {
            "type": "Identifier",
            "start": 129,
            "end": 134,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 134,
            "end": 141,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 136,
              "end": 141,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 136,
                "end": 139
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 142,
        "end": 147,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 144,
          "end": 147
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 194,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 180,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 183,
            "end": 194,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 188,
              "end": 194,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 191,
                  "end": 192,
                  "raw": "1",
                  "value": 1
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 188,
                  "end": 191,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 192,
                  "end": 194,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "tag": {
              "type": "Identifier",
              "start": 183,
              "end": 187,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 196,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 200,
          "end": 215,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 201,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 204,
            "end": 215,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 209,
                "end": 211,
                "elements": []
              },
              {
                "type": "Literal",
                "start": 213,
                "end": 214,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 204,
              "end": 208,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 218,
      "end": 267,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 231,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 232,
          "end": 246,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 236,
            "end": 246,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 238,
              "end": 246,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 238,
                "end": 244
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 248,
          "end": 257,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 249,
            "end": 257,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 251,
              "end": 257
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 258,
        "end": 266,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 260,
          "end": 266
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 268,
      "end": 329,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 281,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 282,
          "end": 308,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 286,
            "end": 308,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 288,
              "end": 308,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 288,
                "end": 308,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 310,
          "end": 319,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 311,
            "end": 319,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 313,
              "end": 319
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 320,
        "end": 328,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 322,
          "end": 328
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 330,
      "end": 391,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 366,
        "end": 391,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 372,
            "end": 389,
            "argument": {
              "type": "Identifier",
              "start": 379,
              "end": 388,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 343,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 344,
          "end": 359,
          "argument": {
            "type": "Identifier",
            "start": 347,
            "end": 352,
            "decorators": [],
            "name": "stuff",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 352,
            "end": 359,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 354,
              "end": 359,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 354,
                "end": 357
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 360,
        "end": 365,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 362,
          "end": 365
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 393,
      "end": 413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 397,
          "end": 412,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 397,
            "end": 398,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 401,
            "end": 412,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 406,
              "end": 412,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 409,
                  "end": 410,
                  "raw": "1",
                  "value": 1
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 406,
                  "end": 409,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 410,
                  "end": 412,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ]
            },
            "tag": {
              "type": "Identifier",
              "start": 401,
              "end": 405,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 414,
      "end": 434,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 418,
          "end": 433,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 418,
            "end": 419,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 422,
            "end": 433,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 427,
                "end": 429,
                "elements": []
              },
              {
                "type": "Literal",
                "start": 431,
                "end": 432,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 422,
              "end": 426,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
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
