__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 339,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 14,
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 14,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 8,
                "end": 14
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 17,
            "end": 22,
            "raw": "10000",
            "value": 10000
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 40,
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 43,
            "end": 52,
            "raw": "\"my name\"",
            "value": "my name"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 92,
            "decorators": [],
            "name": "person",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 67,
                "end": 92,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 69,
                    "end": 79,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 70,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 72,
                        "end": 78
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 80,
                    "end": 90,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 82,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 82,
                      "end": 90,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 84,
                        "end": 90
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 95,
            "end": 107,
            "properties": [
              {
                "type": "Property",
                "start": 97,
                "end": 101,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 101,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 101,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 103,
                "end": 105,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 105,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 105,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 119,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 144,
            "decorators": [],
            "name": "person1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 144,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 132,
                "end": 144,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 134,
                    "end": 139,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 138,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 140,
                    "end": 142,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 142,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null
                  }
                ]
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
      "type": "FunctionDeclaration",
      "start": 153,
      "end": 246,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 222,
        "end": 246,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 224,
            "end": 244,
            "argument": {
              "type": "ObjectExpression",
              "start": 231,
              "end": 243,
              "properties": [
                {
                  "type": "Property",
                  "start": 233,
                  "end": 237,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 237,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 237,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 239,
                  "end": 241,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 241,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 241,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 165,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 166,
          "end": 178,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 170,
            "end": 178,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 172,
              "end": 178
            }
          }
        },
        {
          "type": "Identifier",
          "start": 180,
          "end": 190,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 182,
            "end": 190,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 184,
              "end": 190
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 191,
        "end": 221,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 193,
          "end": 221,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 195,
              "end": 206,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 195,
                "end": 197,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 197,
                "end": 205,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 199,
                  "end": 205
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 207,
              "end": 219,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 207,
                "end": 211,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 211,
                "end": 219,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 213,
                  "end": 219
                }
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 257,
      "end": 309,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 306,
        "end": 309,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 266,
        "end": 269,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 270,
          "end": 304,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 273,
            "end": 304,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 275,
              "end": 304,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 277,
                  "end": 290,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 281,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 281,
                    "end": 289,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 283,
                      "end": 289
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 291,
                  "end": 302,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 293,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 293,
                    "end": 302,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 295,
                      "end": 302
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 310,
      "end": 328,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 310,
        "end": 327,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 314,
            "end": 326,
            "properties": [
              {
                "type": "Property",
                "start": 316,
                "end": 320,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 320,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 320,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 322,
                "end": 324,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 324,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 324,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 310,
          "end": 313,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
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
