intersectionsAndOptionalProperties.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 503,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 40,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 15,
                "end": 40,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 17,
                    "end": 28,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 17,
                      "end": 18,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 19,
                      "end": 27,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 21,
                        "end": 27
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 29,
                    "end": 38,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 30,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 30,
                      "end": 38,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 32,
                        "end": 38
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
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 79,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 79,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 57,
                "end": 79,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 59,
                    "end": 67,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 60,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 60,
                      "end": 66,
                      "typeAnnotation": {
                        "type": "TSNullKeyword",
                        "start": 62,
                        "end": 66
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 68,
                    "end": 77,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 69,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 69,
                      "end": 77,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 71,
                        "end": 77
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
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 81,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 123,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 123,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 96,
                "end": 123,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 96,
                    "end": 107,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 98,
                        "end": 105,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 99,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 99,
                          "end": 105,
                          "typeAnnotation": {
                            "type": "TSNullKeyword",
                            "start": 101,
                            "end": 105
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 110,
                    "end": 123,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 112,
                        "end": 121,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 112,
                          "end": 113,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 113,
                          "end": 121,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 115,
                            "end": 121
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 126,
      "end": 132,
      "expression": {
        "type": "AssignmentExpression",
        "start": 126,
        "end": 131,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 126,
          "end": 127,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 130,
          "end": 131,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 143,
      "end": 149,
      "expression": {
        "type": "AssignmentExpression",
        "start": 143,
        "end": 148,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 143,
          "end": 144,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 147,
          "end": 148,
          "decorators": [],
          "name": "z",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 183,
      "end": 245,
      "body": {
        "type": "TSInterfaceBody",
        "start": 196,
        "end": 245,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 202,
            "end": 217,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 202,
              "end": 207,
              "decorators": [],
              "name": "field",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 208,
              "end": 216,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 210,
                "end": 216
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 222,
            "end": 243,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 234,
              "decorators": [],
              "name": "anotherField",
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
                "type": "TSStringKeyword",
                "start": 236,
                "end": 242
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 195,
        "decorators": [],
        "name": "To",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 247,
      "end": 296,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 252,
        "end": 256,
        "decorators": [],
        "name": "From",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 260,
        "end": 295,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 260,
            "end": 275,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 262,
                "end": 273,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 267,
                  "decorators": [],
                  "name": "field",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 267,
                  "end": 273,
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 269,
                    "end": 273
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeReference",
            "start": 278,
            "end": 295,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 282,
              "end": 295,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 283,
                  "end": 285,
                  "typeName": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 285,
                    "decorators": [],
                    "name": "To",
                    "optional": false
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 287,
                  "end": 294,
                  "literal": {
                    "type": "Literal",
                    "start": 287,
                    "end": 294,
                    "raw": "'field'",
                    "value": "field"
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 278,
              "end": 282,
              "decorators": [],
              "name": "Omit",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 298,
      "end": 391,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 320,
        "end": 391,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 326,
            "end": 336,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 330,
                "end": 335,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 335,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 331,
                    "end": 335,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 333,
                      "end": 335,
                      "typeName": {
                        "type": "Identifier",
                        "start": 333,
                        "end": 335,
                        "decorators": [],
                        "name": "To",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 341,
            "end": 347,
            "expression": {
              "type": "AssignmentExpression",
              "start": 341,
              "end": 346,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 341,
                "end": 342,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 345,
                "end": 346,
                "decorators": [],
                "name": "v",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 362,
            "end": 380,
            "expression": {
              "type": "AssignmentExpression",
              "start": 362,
              "end": 379,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 362,
                "end": 369,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 363,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 369,
                  "decorators": [],
                  "name": "field",
                  "optional": false
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 372,
                "end": 379,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 373,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 379,
                  "decorators": [],
                  "name": "field",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 307,
        "end": 310,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 311,
          "end": 318,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 312,
            "end": 318,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 314,
              "end": 318,
              "typeName": {
                "type": "Identifier",
                "start": 314,
                "end": 318,
                "decorators": [],
                "name": "From",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 415,
      "end": 464,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 463,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 457,
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 423,
              "end": 457,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 425,
                "end": 457,
                "types": [
                  {
                    "type": "TSArrayType",
                    "start": 425,
                    "end": 433,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 425,
                      "end": 431
                    }
                  },
                  {
                    "type": "TSTupleType",
                    "start": 436,
                    "end": 457,
                    "elementTypes": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 437,
                        "end": 443
                      },
                      {
                        "type": "TSRestType",
                        "start": 445,
                        "end": 456,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 448,
                          "end": 456,
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 448,
                            "end": 454
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 460,
            "end": 463,
            "elements": [
              {
                "type": "Literal",
                "start": 461,
                "end": 462,
                "raw": "1",
                "value": 1
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 465,
      "end": 502,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 471,
          "end": 501,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 471,
            "end": 496,
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 473,
              "end": 496,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 475,
                "end": 496,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 476,
                    "end": 482
                  },
                  {
                    "type": "TSRestType",
                    "start": 484,
                    "end": 495,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 487,
                      "end": 495,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 487,
                        "end": 493
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 499,
            "end": 501,
            "decorators": [],
            "name": "yy",
            "optional": false
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
