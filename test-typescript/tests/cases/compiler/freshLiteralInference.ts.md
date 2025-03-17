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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "f1",
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
          "start": 47,
          "end": 51,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 51,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 50,
              "end": 51,
              "typeName": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 45,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "value": "1",
                    "raw": "\"1\""
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
                    "value": "2",
                    "raw": "\"2\""
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
                    "value": "3",
                    "raw": "\"3\""
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 52,
        "end": 55,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 54,
          "end": 55,
          "typeName": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 69,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 72,
            "end": 79,
            "callee": {
              "type": "Identifier",
              "start": 72,
              "end": 74,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 75,
                "end": 78,
                "value": "1",
                "raw": "\"1\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 103,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 106,
            "end": 111,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 130,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 149,
        "name": "f2",
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
          "start": 177,
          "end": 192,
          "name": "x",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 187,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 187,
                    "end": 190,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 189,
                      "end": 190,
                      "typeName": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 190,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 149,
        "end": 176,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 150,
            "end": 175,
            "name": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "value": "1",
                    "raw": "\"1\""
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
                    "value": "2",
                    "raw": "\"2\""
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
                    "value": "3",
                    "raw": "\"3\""
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 197,
                "end": 202,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 202,
                "end": 205,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 204,
                  "end": 205,
                  "typeName": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "start": 210,
      "end": 242,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 241,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 220,
            "name": "obj2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 223,
            "end": 241,
            "callee": {
              "type": "Identifier",
              "start": 223,
              "end": 225,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 233,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 235,
                      "end": 238,
                      "value": "1",
                      "raw": "\"1\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 276,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 279,
            "end": 289,
            "object": {
              "type": "Identifier",
              "start": 279,
              "end": 283,
              "name": "obj2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 284,
              "end": 289,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 308,
      "end": 377,
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 327,
        "name": "f3",
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
          "start": 366,
          "end": 372,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 369,
            "end": 372,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 371,
              "end": 372,
              "typeName": {
                "type": "Identifier",
                "start": 371,
                "end": 372,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 327,
        "end": 365,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 328,
            "end": 364,
            "name": {
              "type": "Identifier",
              "start": 328,
              "end": 329,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 338,
              "end": 364,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 340,
                  "end": 362,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 340,
                    "end": 345,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                            "value": "1",
                            "raw": "\"1\""
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
                            "value": "2",
                            "raw": "\"2\""
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
                            "value": "3",
                            "raw": "\"3\""
                          }
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 373,
        "end": 376,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 375,
          "end": 376,
          "typeName": {
            "type": "Identifier",
            "start": 375,
            "end": 376,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 385,
            "end": 389,
            "name": "obj3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 392,
            "end": 410,
            "callee": {
              "type": "Identifier",
              "start": 392,
              "end": 394,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 402,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 404,
                      "end": 407,
                      "value": "1",
                      "raw": "\"1\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 449,
            "end": 451,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 454,
            "end": 464,
            "object": {
              "type": "Identifier",
              "start": 454,
              "end": 458,
              "name": "obj3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 459,
              "end": 464,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
