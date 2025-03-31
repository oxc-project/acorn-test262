__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 450,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 16,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 29,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 30,
          "end": 56,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 56,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 36,
              "end": 56,
              "typeName": {
                "type": "Identifier",
                "start": 36,
                "end": 56,
                "name": "TemplateStringsArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 58,
          "end": 67,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 59,
            "end": 67,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 61,
              "end": 67
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 68,
        "end": 76,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 70,
          "end": 76
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 78,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 91,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 92,
          "end": 106,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 96,
            "end": 106,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 98,
              "end": 106,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 98,
                "end": 104
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 108,
          "end": 117,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 109,
            "end": 117,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 111,
              "end": 117
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 118,
        "end": 126,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 120,
          "end": 126
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 128,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 141,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 142,
          "end": 157,
          "argument": {
            "type": "Identifier",
            "start": 145,
            "end": 150,
            "name": "stuff",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 150,
            "end": 157,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 152,
              "end": 157,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 152,
                "end": 155
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 164,
        "end": 189,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 170,
            "end": 187,
            "argument": {
              "type": "Identifier",
              "start": 177,
              "end": 186,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 158,
        "end": 163,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 160,
          "end": 163
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 191,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 210,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 196,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 199,
            "end": 210,
            "tag": {
              "type": "Identifier",
              "start": 199,
              "end": 203,
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 204,
              "end": 210,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 207,
                  "end": 208,
                  "value": 1,
                  "raw": "1"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 204,
                  "end": 207,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 208,
                  "end": 210,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 212,
      "end": 232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 231,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 220,
            "end": 231,
            "callee": {
              "type": "Identifier",
              "start": 220,
              "end": 224,
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 225,
                "end": 227,
                "elements": []
              },
              {
                "type": "Literal",
                "start": 229,
                "end": 230,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 234,
      "end": 283,
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 247,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 248,
          "end": 262,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 252,
            "end": 262,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 254,
              "end": 262,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 254,
                "end": 260
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 264,
          "end": 273,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 265,
            "end": 273,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 267,
              "end": 273
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 274,
        "end": 282,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 276,
          "end": 282
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 284,
      "end": 345,
      "id": {
        "type": "Identifier",
        "start": 293,
        "end": 297,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 298,
          "end": 324,
          "name": "strs",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 302,
            "end": 324,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 304,
              "end": 324,
              "typeName": {
                "type": "Identifier",
                "start": 304,
                "end": 324,
                "name": "TemplateStringsArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 326,
          "end": 335,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 327,
            "end": 335,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 329,
              "end": 335
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 336,
        "end": 344,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 338,
          "end": 344
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 346,
      "end": 407,
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 359,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 360,
          "end": 375,
          "argument": {
            "type": "Identifier",
            "start": 363,
            "end": 368,
            "name": "stuff",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 368,
            "end": 375,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 370,
              "end": 375,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 370,
                "end": 373
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 382,
        "end": 407,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 388,
            "end": 405,
            "argument": {
              "type": "Identifier",
              "start": 395,
              "end": 404,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 376,
        "end": 381,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 378,
          "end": 381
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 409,
      "end": 429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 413,
          "end": 428,
          "id": {
            "type": "Identifier",
            "start": 413,
            "end": 414,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 417,
            "end": 428,
            "tag": {
              "type": "Identifier",
              "start": 417,
              "end": 421,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "quasi": {
              "type": "TemplateLiteral",
              "start": 422,
              "end": 428,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 425,
                  "end": 426,
                  "value": 1,
                  "raw": "1"
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 422,
                  "end": 425,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 426,
                  "end": 428,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ]
            },
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 430,
      "end": 450,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 449,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 435,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 438,
            "end": 449,
            "callee": {
              "type": "Identifier",
              "start": 438,
              "end": 442,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 443,
                "end": 445,
                "elements": []
              },
              {
                "type": "Literal",
                "start": 447,
                "end": 448,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
