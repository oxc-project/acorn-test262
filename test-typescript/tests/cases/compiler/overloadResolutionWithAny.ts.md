overloadResolutionWithAny.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 379,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 60,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 60,
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 10,
                "end": 60,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 16,
                    "end": 36,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 17,
                        "end": 26,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 18,
                          "end": 26,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 20,
                            "end": 26
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 27,
                      "end": 35,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 29,
                        "end": 35
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 41,
                    "end": 58,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 42,
                        "end": 48,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 43,
                          "end": 48,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 45,
                            "end": 48
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 51,
                        "end": 57
                      }
                    }
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
      "type": "ExpressionStatement",
      "start": 63,
      "end": 72,
      "expression": {
        "type": "CallExpression",
        "start": 63,
        "end": 71,
        "arguments": [
          {
            "type": "Literal",
            "start": 68,
            "end": 70,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 63,
          "end": 67,
          "decorators": [],
          "name": "func",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 83,
      "end": 91,
      "expression": {
        "type": "CallExpression",
        "start": 83,
        "end": 90,
        "arguments": [
          {
            "type": "Literal",
            "start": 88,
            "end": 89,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 83,
          "end": 87,
          "decorators": [],
          "name": "func",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 112,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 112,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 109,
                "end": 112
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
      "start": 114,
      "end": 122,
      "expression": {
        "type": "CallExpression",
        "start": 114,
        "end": 121,
        "arguments": [
          {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 114,
          "end": 118,
          "decorators": [],
          "name": "func",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 281,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 281,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 281,
            "decorators": [],
            "name": "func2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 145,
                "end": 281,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 151,
                    "end": 182,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 152,
                        "end": 161,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 153,
                          "end": 161,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 155,
                            "end": 161
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 163,
                        "end": 172,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 164,
                          "end": 172,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 166,
                            "end": 172
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 173,
                      "end": 181,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 175,
                        "end": 181
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 187,
                    "end": 216,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 188,
                        "end": 194,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 189,
                          "end": 194,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 191,
                            "end": 194
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 196,
                        "end": 205,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
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
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 206,
                      "end": 215,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 208,
                        "end": 215
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 221,
                    "end": 249,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 222,
                        "end": 231,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 223,
                          "end": 231,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 225,
                            "end": 231
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 233,
                        "end": 239,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 234,
                          "end": 239,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 236,
                            "end": 239
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 240,
                      "end": 248,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 242,
                        "end": 248,
                        "typeName": {
                          "type": "Identifier",
                          "start": 242,
                          "end": 248,
                          "decorators": [],
                          "name": "RegExp",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 254,
                    "end": 279,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 255,
                        "end": 261,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 256,
                          "end": 261,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 258,
                            "end": 261
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 263,
                        "end": 269,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 264,
                          "end": 269,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 266,
                            "end": 269
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 270,
                      "end": 278,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 272,
                        "end": 278
                      }
                    }
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
      "type": "ExpressionStatement",
      "start": 283,
      "end": 295,
      "expression": {
        "type": "CallExpression",
        "start": 283,
        "end": 294,
        "arguments": [
          {
            "type": "Identifier",
            "start": 289,
            "end": 290,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 292,
            "end": 293,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 283,
          "end": 288,
          "decorators": [],
          "name": "func2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 320,
      "expression": {
        "type": "CallExpression",
        "start": 306,
        "end": 319,
        "arguments": [
          {
            "type": "Literal",
            "start": 312,
            "end": 314,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Literal",
            "start": 316,
            "end": 318,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 306,
          "end": 311,
          "decorators": [],
          "name": "func2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 331,
      "end": 344,
      "expression": {
        "type": "CallExpression",
        "start": 331,
        "end": 343,
        "arguments": [
          {
            "type": "Identifier",
            "start": 337,
            "end": 338,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          {
            "type": "Literal",
            "start": 340,
            "end": 342,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 331,
          "end": 336,
          "decorators": [],
          "name": "func2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 356,
      "end": 369,
      "expression": {
        "type": "CallExpression",
        "start": 356,
        "end": 368,
        "arguments": [
          {
            "type": "Literal",
            "start": 362,
            "end": 364,
            "raw": "\"\"",
            "value": ""
          },
          {
            "type": "Identifier",
            "start": 366,
            "end": 367,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 356,
          "end": 361,
          "decorators": [],
          "name": "func2",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
