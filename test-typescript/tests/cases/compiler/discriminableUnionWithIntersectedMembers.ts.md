discriminableUnionWithIntersectedMembers.ts
```json
{
  "type": "Program",
  "start": 76,
  "end": 388,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 76,
      "end": 181,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 82,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 87,
        "end": 181,
        "types": [
          {
            "type": "TSIntersectionType",
            "start": 89,
            "end": 126,
            "types": [
              {
                "type": "TSTypeLiteral",
                "start": 89,
                "end": 110,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 91,
                    "end": 98,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 92,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 92,
                      "end": 97,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 94,
                        "end": 97,
                        "literal": {
                          "type": "Literal",
                          "start": 94,
                          "end": 97,
                          "raw": "'x'",
                          "value": "x"
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 99,
                    "end": 108,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 108,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 102,
                        "end": 108
                      }
                    }
                  }
                ]
              },
              {
                "type": "TSTypeLiteral",
                "start": 113,
                "end": 126,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 115,
                    "end": 124,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 116,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 116,
                      "end": 124,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 118,
                        "end": 124
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 131,
            "end": 181,
            "types": [
              {
                "type": "TSTypeLiteral",
                "start": 131,
                "end": 165,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 133,
                    "end": 140,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 134,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 134,
                      "end": 139,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 136,
                        "end": 139,
                        "literal": {
                          "type": "Literal",
                          "start": 136,
                          "end": 139,
                          "raw": "'y'",
                          "value": "y"
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 141,
                    "end": 151,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 142,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 142,
                      "end": 150,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 144,
                        "end": 150
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 152,
                    "end": 163,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 153,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 154,
                      "end": 163,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 156,
                        "end": 163
                      }
                    }
                  }
                ]
              },
              {
                "type": "TSTypeLiteral",
                "start": 168,
                "end": 181,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 170,
                    "end": 179,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 171,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 171,
                      "end": 179,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 173,
                        "end": 179
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 244,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 202,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 202,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 202,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 205,
            "end": 244,
            "expression": {
              "type": "TSAsExpression",
              "start": 205,
              "end": 213,
              "expression": {
                "type": "Literal",
                "start": 205,
                "end": 206,
                "raw": "4",
                "value": 4
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 210,
                "end": 213
              }
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 217,
              "end": 244,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 219,
                  "end": 232,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 220,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 220,
                    "end": 231,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 222,
                      "end": 231,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 222,
                          "end": 225,
                          "literal": {
                            "type": "Literal",
                            "start": 222,
                            "end": 225,
                            "raw": "'x'",
                            "value": "x"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 228,
                          "end": 231,
                          "literal": {
                            "type": "Literal",
                            "start": 228,
                            "end": 231,
                            "raw": "'y'",
                            "value": "y"
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 233,
                  "end": 242,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 234,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 234,
                    "end": 242,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 236,
                      "end": 242
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 247,
      "end": 320,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 252,
        "end": 253,
        "decorators": [],
        "name": "Y",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 258,
        "end": 320,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 260,
            "end": 281,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 262,
                "end": 269,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 263,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 263,
                  "end": 268,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 265,
                    "end": 268,
                    "literal": {
                      "type": "Literal",
                      "start": 265,
                      "end": 268,
                      "raw": "'x'",
                      "value": "x"
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 270,
                "end": 279,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 271,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 271,
                  "end": 279,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 273,
                    "end": 279
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 286,
            "end": 320,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 288,
                "end": 295,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 289,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 289,
                  "end": 294,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 291,
                    "end": 294,
                    "literal": {
                      "type": "Literal",
                      "start": 291,
                      "end": 294,
                      "raw": "'y'",
                      "value": "y"
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 296,
                "end": 306,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 297,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 297,
                  "end": 305,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 299,
                    "end": 305
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 307,
                "end": 318,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 308,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 309,
                  "end": 318,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 311,
                    "end": 318
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 335,
      "end": 388,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 341,
          "end": 387,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 341,
            "end": 345,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 342,
              "end": 345,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 344,
                "end": 345,
                "typeName": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 345,
                  "decorators": [],
                  "name": "Y",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 348,
            "end": 387,
            "expression": {
              "type": "TSAsExpression",
              "start": 348,
              "end": 356,
              "expression": {
                "type": "Literal",
                "start": 348,
                "end": 349,
                "raw": "4",
                "value": 4
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 353,
                "end": 356
              }
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 360,
              "end": 387,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 362,
                  "end": 375,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 362,
                    "end": 363,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 363,
                    "end": 374,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 365,
                      "end": 374,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 365,
                          "end": 368,
                          "literal": {
                            "type": "Literal",
                            "start": 365,
                            "end": 368,
                            "raw": "'x'",
                            "value": "x"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 371,
                          "end": 374,
                          "literal": {
                            "type": "Literal",
                            "start": 371,
                            "end": 374,
                            "raw": "'y'",
                            "value": "y"
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 376,
                  "end": 385,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 376,
                    "end": 377,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 377,
                    "end": 385,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 379,
                      "end": 385
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
