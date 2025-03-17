__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 497,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 56,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 47,
          "end": 51,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 51,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 50,
              "end": 51,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 52,
        "end": 55,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 54,
          "end": 55,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 45,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 30,
              "end": 45,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 30,
                  "end": 33,
                  "literal": {
                    "type": "Literal",
                    "start": 30,
                    "end": 33,
                    "raw": "\"1\"",
                    "value": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 36,
                  "end": 39,
                  "literal": {
                    "type": "Literal",
                    "start": 36,
                    "end": 39,
                    "raw": "\"2\"",
                    "value": "2"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 42,
                  "end": 45,
                  "literal": {
                    "type": "Literal",
                    "start": 42,
                    "end": 45,
                    "raw": "\"3\"",
                    "value": "3"
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 69,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 72,
            "end": 79,
            "arguments": [
              {
                "type": "Literal",
                "start": 75,
                "end": 78,
                "raw": "\"1\"",
                "value": "1"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 72,
              "end": 74,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 111,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 103,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 106,
            "end": 111,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSDeclareFunction",
      "start": 130,
      "end": 208,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 149,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 177,
          "end": 192,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 178,
            "end": 192,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 180,
              "end": 192,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 182,
                  "end": 190,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 187,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 187,
                    "end": 190,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 189,
                      "end": 190,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 190,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 193,
        "end": 207,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 195,
          "end": 207,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 197,
              "end": 205,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 197,
                "end": 202,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 202,
                "end": 205,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 204,
                  "end": 205,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 149,
        "end": 176,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 150,
            "end": 175,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 160,
              "end": 175,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 160,
                  "end": 163,
                  "literal": {
                    "type": "Literal",
                    "start": 160,
                    "end": 163,
                    "raw": "\"1\"",
                    "value": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 166,
                  "end": 169,
                  "literal": {
                    "type": "Literal",
                    "start": 166,
                    "end": 169,
                    "raw": "\"2\"",
                    "value": "2"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 172,
                  "end": 175,
                  "literal": {
                    "type": "Literal",
                    "start": 172,
                    "end": 175,
                    "raw": "\"3\"",
                    "value": "3"
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 210,
      "end": 242,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 241,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 220,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 223,
            "end": 241,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 226,
                "end": 240,
                "properties": [
                  {
                    "type": "Property",
                    "start": 228,
                    "end": 238,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 233,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 235,
                      "end": 238,
                      "raw": "\"1\"",
                      "value": "1"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 223,
              "end": 225,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 290,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 289,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 276,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 279,
            "end": 289,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 279,
              "end": 283,
              "decorators": [],
              "name": "obj2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 284,
              "end": 289,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSDeclareFunction",
      "start": 308,
      "end": 377,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 327,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 366,
          "end": 372,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 369,
            "end": 372,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 371,
              "end": 372,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 371,
                "end": 372,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 373,
        "end": 376,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 375,
          "end": 376,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 375,
            "end": 376,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 327,
        "end": 365,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 328,
            "end": 364,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 338,
              "end": 364,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 340,
                  "end": 362,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 340,
                    "end": 345,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 345,
                    "end": 362,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 347,
                      "end": 362,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 347,
                          "end": 350,
                          "literal": {
                            "type": "Literal",
                            "start": 347,
                            "end": 350,
                            "raw": "\"1\"",
                            "value": "1"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 353,
                          "end": 356,
                          "literal": {
                            "type": "Literal",
                            "start": 353,
                            "end": 356,
                            "raw": "\"2\"",
                            "value": "2"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 359,
                          "end": 362,
                          "literal": {
                            "type": "Literal",
                            "start": 359,
                            "end": 362,
                            "raw": "\"3\"",
                            "value": "3"
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 379,
      "end": 411,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 385,
          "end": 410,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 385,
            "end": 389,
            "decorators": [],
            "name": "obj3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 392,
            "end": 410,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 395,
                "end": 409,
                "properties": [
                  {
                    "type": "Property",
                    "start": 397,
                    "end": 407,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 402,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 404,
                      "end": 407,
                      "raw": "\"1\"",
                      "value": "1"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 392,
              "end": 394,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 445,
      "end": 465,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 449,
          "end": 464,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 449,
            "end": 451,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 454,
            "end": 464,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 454,
              "end": 458,
              "decorators": [],
              "name": "obj3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 459,
              "end": 464,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
