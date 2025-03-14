taggedTemplateStringsWithOverloadResolution2.ts
```json
{
  "type": "Program",
  "start": 2,
  "end": 436,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 2,
      "end": 63,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 15,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 42,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 42,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 22,
              "end": 42,
              "typeName": {
                "type": "Identifier",
                "start": 22,
                "end": 42,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 44,
          "end": 53,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 45,
            "end": 53,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 47,
              "end": 53
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 54,
        "end": 62,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 56,
          "end": 62
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 64,
      "end": 113,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 77,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 78,
          "end": 92,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 82,
            "end": 92,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 84,
              "end": 92,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 94,
          "end": 103,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 95,
            "end": 103,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 97,
              "end": 103
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 104,
        "end": 112,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 106,
          "end": 112
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 114,
      "end": 175,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 150,
        "end": 175,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 156,
            "end": 173,
            "argument": {
              "type": "Identifier",
              "start": 163,
              "end": 172,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 127,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 128,
          "end": 143,
          "argument": {
            "type": "Identifier",
            "start": 131,
            "end": 136,
            "decorators": [],
            "name": "stuff",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 136,
            "end": 143,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 138,
              "end": 143,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 138,
                "end": 141
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 144,
        "end": 149,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 146,
          "end": 149
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 177,
      "end": 197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 196,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 182,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 185,
            "end": 196,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 190,
              "end": 196,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 193,
                  "end": 194,
                  "raw": "1",
                  "value": 1
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 190,
                  "end": 193,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 194,
                  "end": 196,
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
              "start": 185,
              "end": 189,
              "decorators": [],
              "name": "foo1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 217,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 203,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 206,
            "end": 217,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 211,
                "end": 213,
                "elements": []
              },
              {
                "type": "Literal",
                "start": 215,
                "end": 216,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 206,
              "end": 210,
              "decorators": [],
              "name": "foo1",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 220,
      "end": 269,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 233,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 234,
          "end": 248,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 238,
            "end": 248,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 240,
              "end": 248,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 240,
                "end": 246
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 250,
          "end": 259,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 251,
            "end": 259,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 253,
              "end": 259
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 260,
        "end": 268,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 262,
          "end": 268
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 270,
      "end": 331,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 279,
        "end": 283,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 284,
          "end": 310,
          "decorators": [],
          "name": "strs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 288,
            "end": 310,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 290,
              "end": 310,
              "typeName": {
                "type": "Identifier",
                "start": 290,
                "end": 310,
                "decorators": [],
                "name": "TemplateStringsArray",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 312,
          "end": 321,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 313,
            "end": 321,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 315,
              "end": 321
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 322,
        "end": 330,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 324,
          "end": 330
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 332,
      "end": 393,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 368,
        "end": 393,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 374,
            "end": 391,
            "argument": {
              "type": "Identifier",
              "start": 381,
              "end": 390,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 345,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 346,
          "end": 361,
          "argument": {
            "type": "Identifier",
            "start": 349,
            "end": 354,
            "decorators": [],
            "name": "stuff",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 354,
            "end": 361,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 356,
              "end": 361,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 356,
                "end": 359
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 362,
        "end": 367,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 364,
          "end": 367
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 395,
      "end": 415,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 399,
          "end": 414,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 399,
            "end": 400,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "TaggedTemplateExpression",
            "start": 403,
            "end": 414,
            "quasi": {
              "type": "TemplateLiteral",
              "start": 408,
              "end": 414,
              "expressions": [
                {
                  "type": "Literal",
                  "start": 411,
                  "end": 412,
                  "raw": "1",
                  "value": 1
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 408,
                  "end": 411,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 412,
                  "end": 414,
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
              "start": 403,
              "end": 407,
              "decorators": [],
              "name": "foo2",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 416,
      "end": 436,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 435,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 421,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 424,
            "end": 435,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 429,
                "end": 431,
                "elements": []
              },
              {
                "type": "Literal",
                "start": 433,
                "end": 434,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 424,
              "end": 428,
              "decorators": [],
              "name": "foo2",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
