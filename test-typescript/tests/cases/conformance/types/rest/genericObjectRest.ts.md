__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 746,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 13,
            "value": "a",
            "raw": "'a'"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 16,
      "end": 275,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 27,
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
          "start": 64,
          "end": 70,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 67,
            "end": 70,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 69,
              "end": 70,
              "typeName": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
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
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 275,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 78,
            "end": 98,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 82,
                "end": 97,
                "id": {
                  "type": "ObjectPattern",
                  "start": 82,
                  "end": 91,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 84,
                      "end": 89,
                      "argument": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 89,
                        "name": "r0",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 97,
                  "name": "obj",
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
            "type": "VariableDeclaration",
            "start": 103,
            "end": 130,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 107,
                "end": 129,
                "id": {
                  "type": "ObjectPattern",
                  "start": 107,
                  "end": 123,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 109,
                      "end": 114,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 114,
                        "name": "a1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 116,
                      "end": 121,
                      "argument": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 121,
                        "name": "r1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 129,
                  "name": "obj",
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
            "type": "VariableDeclaration",
            "start": 135,
            "end": 169,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 139,
                "end": 168,
                "id": {
                  "type": "ObjectPattern",
                  "start": 139,
                  "end": 162,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 141,
                      "end": 146,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 142,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 146,
                        "name": "a2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 148,
                      "end": 153,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 153,
                        "name": "b2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 155,
                      "end": 160,
                      "argument": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 160,
                        "name": "r2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 168,
                  "name": "obj",
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
            "type": "VariableDeclaration",
            "start": 174,
            "end": 203,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 178,
                "end": 202,
                "id": {
                  "type": "ObjectPattern",
                  "start": 178,
                  "end": 196,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 180,
                      "end": 187,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "start": 180,
                        "end": 183,
                        "value": "a",
                        "raw": "'a'"
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 185,
                        "end": 187,
                        "name": "a3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 189,
                      "end": 194,
                      "argument": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 194,
                        "name": "r3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 202,
                  "name": "obj",
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
            "type": "VariableDeclaration",
            "start": 208,
            "end": 239,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 212,
                "end": 238,
                "id": {
                  "type": "ObjectPattern",
                  "start": 212,
                  "end": 232,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 214,
                      "end": 223,
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "Literal",
                        "start": 215,
                        "end": 218,
                        "value": "a",
                        "raw": "'a'"
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 223,
                        "name": "a4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 225,
                      "end": 230,
                      "argument": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 230,
                        "name": "r4",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 238,
                  "name": "obj",
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
            "type": "VariableDeclaration",
            "start": 244,
            "end": 273,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 248,
                "end": 272,
                "id": {
                  "type": "ObjectPattern",
                  "start": 248,
                  "end": 266,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 250,
                      "end": 257,
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 251,
                        "end": 252,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 257,
                        "name": "a5",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 259,
                      "end": 264,
                      "argument": {
                        "type": "Identifier",
                        "start": 262,
                        "end": 264,
                        "name": "r5",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 272,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 27,
        "end": 63,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 28,
            "end": 62,
            "name": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 38,
              "end": 62,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 40,
                  "end": 50,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 43,
                      "end": 49
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 51,
                  "end": 60,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 60,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 54,
                      "end": 60
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
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 277,
      "end": 297,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 296,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 285,
            "name": "sa",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 288,
            "end": 296,
            "callee": {
              "type": "Identifier",
              "start": 288,
              "end": 294,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
      "start": 298,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 306,
            "name": "sb",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 309,
            "end": 317,
            "callee": {
              "type": "Identifier",
              "start": 309,
              "end": 315,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
      "type": "FunctionDeclaration",
      "start": 320,
      "end": 430,
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 331,
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
          "start": 374,
          "end": 380,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 377,
            "end": 380,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 379,
              "end": 380,
              "typeName": {
                "type": "Identifier",
                "start": 379,
                "end": 380,
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
      "body": {
        "type": "BlockStatement",
        "start": 382,
        "end": 430,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 388,
            "end": 428,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 392,
                "end": 427,
                "id": {
                  "type": "ObjectPattern",
                  "start": 392,
                  "end": 421,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 394,
                      "end": 402,
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 397,
                        "name": "sa",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 400,
                        "end": 402,
                        "name": "a1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 404,
                      "end": 412,
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 405,
                        "end": 407,
                        "name": "sb",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 410,
                        "end": 412,
                        "name": "b1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 414,
                      "end": 419,
                      "argument": {
                        "type": "Identifier",
                        "start": 417,
                        "end": 419,
                        "name": "r1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 427,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 331,
        "end": 373,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 332,
            "end": 372,
            "name": {
              "type": "Identifier",
              "start": 332,
              "end": 333,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 342,
              "end": 372,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 344,
                  "end": 357,
                  "computed": true,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 347,
                    "name": "sa",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 348,
                    "end": 356,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 350,
                      "end": 356
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 358,
                  "end": 370,
                  "computed": true,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 359,
                    "end": 361,
                    "name": "sb",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 362,
                    "end": 370,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 364,
                      "end": 370
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 432,
      "end": 559,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 443,
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
          "start": 487,
          "end": 493,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 490,
            "end": 493,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 492,
              "end": 493,
              "typeName": {
                "type": "Identifier",
                "start": 492,
                "end": 493,
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
        },
        {
          "type": "Identifier",
          "start": 495,
          "end": 501,
          "name": "k1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 497,
            "end": 501,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 499,
              "end": 501,
              "typeName": {
                "type": "Identifier",
                "start": 499,
                "end": 501,
                "name": "K1",
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
          "start": 503,
          "end": 509,
          "name": "k2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 505,
            "end": 509,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 507,
              "end": 509,
              "typeName": {
                "type": "Identifier",
                "start": 507,
                "end": 509,
                "name": "K2",
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
      "body": {
        "type": "BlockStatement",
        "start": 511,
        "end": 559,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 517,
            "end": 557,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 521,
                "end": 556,
                "id": {
                  "type": "ObjectPattern",
                  "start": 521,
                  "end": 550,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 523,
                      "end": 531,
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 524,
                        "end": 526,
                        "name": "k1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 529,
                        "end": 531,
                        "name": "a1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 533,
                      "end": 541,
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 534,
                        "end": 536,
                        "name": "k2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 539,
                        "end": 541,
                        "name": "a2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 543,
                      "end": 548,
                      "argument": {
                        "type": "Identifier",
                        "start": 546,
                        "end": 548,
                        "name": "r1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 553,
                  "end": 556,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 443,
        "end": 486,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 444,
            "end": 445,
            "name": {
              "type": "Identifier",
              "start": 444,
              "end": 445,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 447,
            "end": 465,
            "name": {
              "type": "Identifier",
              "start": 447,
              "end": 449,
              "name": "K1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 458,
              "end": 465,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 464,
                "end": 465,
                "typeName": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 465,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 467,
            "end": 485,
            "name": {
              "type": "Identifier",
              "start": 467,
              "end": 469,
              "name": "K2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 478,
              "end": 485,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 484,
                "end": 485,
                "typeName": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 485,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 561,
      "end": 610,
      "id": {
        "type": "Identifier",
        "start": 566,
        "end": 570,
        "name": "Item",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 573,
        "end": 609,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 575,
            "end": 585,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 575,
              "end": 576,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 576,
              "end": 584,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 578,
                "end": 584
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 586,
            "end": 596,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 586,
              "end": 587,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 587,
              "end": 595,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 589,
                "end": 595
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 597,
            "end": 607,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 597,
              "end": 598,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 598,
              "end": 607,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 600,
                "end": 607
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 612,
      "end": 745,
      "id": {
        "type": "Identifier",
        "start": 621,
        "end": 623,
        "name": "f4",
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
          "start": 670,
          "end": 679,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 673,
            "end": 679,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 675,
              "end": 679,
              "typeName": {
                "type": "Identifier",
                "start": 675,
                "end": 679,
                "name": "Item",
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
          "start": 681,
          "end": 687,
          "name": "k1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 683,
            "end": 687,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 685,
              "end": 687,
              "typeName": {
                "type": "Identifier",
                "start": 685,
                "end": 687,
                "name": "K1",
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
          "start": 689,
          "end": 695,
          "name": "k2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 691,
            "end": 695,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 693,
              "end": 695,
              "typeName": {
                "type": "Identifier",
                "start": 693,
                "end": 695,
                "name": "K2",
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
      "body": {
        "type": "BlockStatement",
        "start": 697,
        "end": 745,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 703,
            "end": 743,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 707,
                "end": 742,
                "id": {
                  "type": "ObjectPattern",
                  "start": 707,
                  "end": 736,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 709,
                      "end": 717,
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 710,
                        "end": 712,
                        "name": "k1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 715,
                        "end": 717,
                        "name": "a1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 719,
                      "end": 727,
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 720,
                        "end": 722,
                        "name": "k2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 725,
                        "end": 727,
                        "name": "a2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 729,
                      "end": 734,
                      "argument": {
                        "type": "Identifier",
                        "start": 732,
                        "end": 734,
                        "name": "r1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 742,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 623,
        "end": 669,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 624,
            "end": 645,
            "name": {
              "type": "Identifier",
              "start": 624,
              "end": 626,
              "name": "K1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 635,
              "end": 645,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 641,
                "end": 645,
                "typeName": {
                  "type": "Identifier",
                  "start": 641,
                  "end": 645,
                  "name": "Item",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 647,
            "end": 668,
            "name": {
              "type": "Identifier",
              "start": 647,
              "end": 649,
              "name": "K2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 658,
              "end": 668,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 664,
                "end": 668,
                "typeName": {
                  "type": "Identifier",
                  "start": 664,
                  "end": 668,
                  "name": "Item",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
