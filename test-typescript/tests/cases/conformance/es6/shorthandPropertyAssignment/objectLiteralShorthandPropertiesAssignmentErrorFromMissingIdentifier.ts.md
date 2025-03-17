__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 435,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 28,
            "name": "id",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 31,
            "end": 36,
            "value": 10000,
            "raw": "10000"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 54,
            "name": "name",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 57,
            "end": 66,
            "value": "my name",
            "raw": "\"my name\""
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 121,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 106,
            "name": "person",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 81,
                "end": 106,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 83,
                    "end": 93,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 84,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 84,
                      "end": 92,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 86,
                        "end": 92
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 94,
                    "end": 104,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 96,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 96,
                      "end": 104,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 98,
                        "end": 104
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 109,
            "end": 121,
            "properties": [
              {
                "type": "Property",
                "start": 111,
                "end": 115,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 115,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 115,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 117,
                "end": 119,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 119,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 119,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 133,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 145,
        "name": "bar",
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
          "start": 146,
          "end": 158,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 150,
            "end": 158,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 152,
              "end": 158
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 160,
          "end": 170,
          "name": "id",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 170,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 164,
              "end": 170
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 202,
        "end": 226,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 204,
            "end": 224,
            "argument": {
              "type": "ObjectExpression",
              "start": 211,
              "end": 223,
              "properties": [
                {
                  "type": "Property",
                  "start": 213,
                  "end": 217,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 217,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 217,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 219,
                  "end": 221,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 221,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 221,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 171,
        "end": 201,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 173,
          "end": 201,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 175,
              "end": 188,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 175,
                "end": 179,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 179,
                "end": 187,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 181,
                  "end": 187
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 189,
              "end": 199,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 189,
                "end": 191,
                "name": "id",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 191,
                "end": 199,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 193,
                  "end": 199
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 237,
      "end": 330,
      "id": {
        "type": "Identifier",
        "start": 246,
        "end": 249,
        "name": "foo",
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
          "start": 250,
          "end": 262,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 254,
            "end": 262,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 256,
              "end": 262
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 264,
          "end": 274,
          "name": "id",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 266,
            "end": 274,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 268,
              "end": 274
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 306,
        "end": 330,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 308,
            "end": 328,
            "argument": {
              "type": "ObjectExpression",
              "start": 315,
              "end": 327,
              "properties": [
                {
                  "type": "Property",
                  "start": 317,
                  "end": 321,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 321,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 321,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 323,
                  "end": 325,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 323,
                    "end": 325,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 323,
                    "end": 325,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 275,
        "end": 305,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 277,
          "end": 305,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 279,
              "end": 292,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 279,
                "end": 283,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 283,
                "end": 291,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 285,
                  "end": 291
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 293,
              "end": 303,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 293,
                "end": 295,
                "name": "id",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 295,
                "end": 303,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 297,
                  "end": 303
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 341,
      "end": 367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 345,
          "end": 366,
          "id": {
            "type": "Identifier",
            "start": 345,
            "end": 366,
            "name": "person1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 352,
              "end": 366,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 354,
                "end": 366,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 356,
                    "end": 361,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 356,
                      "end": 360,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 362,
                    "end": 364,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 362,
                      "end": 364,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 374,
      "end": 434,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 378,
          "end": 433,
          "id": {
            "type": "Identifier",
            "start": 378,
            "end": 415,
            "name": "person2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 385,
              "end": 415,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 387,
                "end": 415,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 389,
                    "end": 402,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 389,
                      "end": 393,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 393,
                      "end": 401,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 395,
                        "end": 401
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 403,
                    "end": 413,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 403,
                      "end": 405,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 405,
                      "end": 413,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 407,
                        "end": 413
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 418,
            "end": 433,
            "callee": {
              "type": "Identifier",
              "start": 418,
              "end": 421,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 422,
                "end": 429,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 431,
                "end": 432,
                "value": 5,
                "raw": "5"
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
