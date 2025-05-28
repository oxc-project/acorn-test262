__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 496,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "typeName": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
          "typeName": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 80,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 79,
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
            "callee": {
              "type": "Identifier",
              "start": 72,
              "end": 74,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 75,
                "end": 78,
                "value": "1",
                "raw": "\"1\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 112,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 111,
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
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 187,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 197,
                "end": 202,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 210,
      "end": 242,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 241,
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
            "callee": {
              "type": "Identifier",
              "start": 223,
              "end": 225,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 233,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 235,
                      "end": 238,
                      "value": "1",
                      "raw": "\"1\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 290,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 289,
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
            "object": {
              "type": "Identifier",
              "start": 279,
              "end": 283,
              "decorators": [],
              "name": "obj2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 284,
              "end": 289,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
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
              "typeName": {
                "type": "Identifier",
                "start": 371,
                "end": 372,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
          "typeName": {
            "type": "Identifier",
            "start": 375,
            "end": 376,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 379,
      "end": 411,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 385,
          "end": 410,
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
            "callee": {
              "type": "Identifier",
              "start": 392,
              "end": 394,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 402,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 404,
                      "end": 407,
                      "value": "1",
                      "raw": "\"1\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 445,
      "end": 465,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 449,
          "end": 464,
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
            "object": {
              "type": "Identifier",
              "start": 454,
              "end": 458,
              "decorators": [],
              "name": "obj3",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 459,
              "end": 464,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
