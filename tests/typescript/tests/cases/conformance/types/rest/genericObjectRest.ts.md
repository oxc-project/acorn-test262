__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 745,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 64,
          "end": 70,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 275,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 78,
            "end": 98,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 82,
                "end": 97,
                "id": {
                  "type": "ObjectPattern",
                  "start": 82,
                  "end": 91,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 84,
                      "end": 89,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 87,
                        "end": 89,
                        "decorators": [],
                        "name": "r0",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 97,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 103,
            "end": 130,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 107,
                "end": 129,
                "id": {
                  "type": "ObjectPattern",
                  "start": 107,
                  "end": 123,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 109,
                      "end": 114,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 114,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 116,
                      "end": 121,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 119,
                        "end": 121,
                        "decorators": [],
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 129,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 135,
            "end": 169,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 139,
                "end": 168,
                "id": {
                  "type": "ObjectPattern",
                  "start": 139,
                  "end": 162,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 141,
                      "end": 146,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 142,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 146,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 148,
                      "end": 153,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 153,
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 155,
                      "end": 160,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 160,
                        "decorators": [],
                        "name": "r2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 168,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 174,
            "end": 203,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 178,
                "end": 202,
                "id": {
                  "type": "ObjectPattern",
                  "start": 178,
                  "end": 196,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 180,
                      "end": 187,
                      "kind": "init",
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
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 189,
                      "end": 194,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 192,
                        "end": 194,
                        "decorators": [],
                        "name": "r3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 202,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 208,
            "end": 239,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 212,
                "end": 238,
                "id": {
                  "type": "ObjectPattern",
                  "start": 212,
                  "end": 232,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 214,
                      "end": 223,
                      "kind": "init",
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
                        "decorators": [],
                        "name": "a4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 225,
                      "end": 230,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 230,
                        "decorators": [],
                        "name": "r4",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 238,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 244,
            "end": 273,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 248,
                "end": 272,
                "id": {
                  "type": "ObjectPattern",
                  "start": 248,
                  "end": 266,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 250,
                      "end": 257,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 251,
                        "end": 252,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 257,
                        "decorators": [],
                        "name": "a5",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 259,
                      "end": 264,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 262,
                        "end": 264,
                        "decorators": [],
                        "name": "r5",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 272,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 277,
      "end": 297,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 296,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 285,
            "decorators": [],
            "name": "sa",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 288,
            "end": 296,
            "callee": {
              "type": "Identifier",
              "start": 288,
              "end": 294,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 298,
      "end": 318,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 306,
            "decorators": [],
            "name": "sb",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 309,
            "end": 317,
            "callee": {
              "type": "Identifier",
              "start": 309,
              "end": 315,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "sa",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "sb",
                    "optional": false,
                    "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 374,
          "end": 380,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 382,
        "end": 430,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 388,
            "end": 428,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 392,
                "end": 427,
                "id": {
                  "type": "ObjectPattern",
                  "start": 392,
                  "end": 421,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 394,
                      "end": 402,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 397,
                        "decorators": [],
                        "name": "sa",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 400,
                        "end": 402,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 404,
                      "end": 412,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 405,
                        "end": 407,
                        "decorators": [],
                        "name": "sb",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 410,
                        "end": 412,
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 414,
                      "end": 419,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 417,
                        "end": 419,
                        "decorators": [],
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 427,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 432,
      "end": 559,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 443,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
              "decorators": [],
              "name": "K2",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 487,
          "end": 493,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 495,
          "end": 501,
          "decorators": [],
          "name": "k1",
          "optional": false,
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
                "decorators": [],
                "name": "K1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 503,
          "end": 509,
          "decorators": [],
          "name": "k2",
          "optional": false,
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
                "decorators": [],
                "name": "K2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 511,
        "end": 559,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 517,
            "end": 557,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 521,
                "end": 556,
                "id": {
                  "type": "ObjectPattern",
                  "start": 521,
                  "end": 550,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 523,
                      "end": 531,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 524,
                        "end": 526,
                        "decorators": [],
                        "name": "k1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 529,
                        "end": 531,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 533,
                      "end": 541,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 534,
                        "end": 536,
                        "decorators": [],
                        "name": "k2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 539,
                        "end": 541,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 543,
                      "end": 548,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 546,
                        "end": 548,
                        "decorators": [],
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 553,
                  "end": 556,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 561,
      "end": 610,
      "id": {
        "type": "Identifier",
        "start": 566,
        "end": 570,
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null
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
              "decorators": [],
              "name": "K2",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 670,
          "end": 679,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 681,
          "end": 687,
          "decorators": [],
          "name": "k1",
          "optional": false,
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
                "decorators": [],
                "name": "K1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 689,
          "end": 695,
          "decorators": [],
          "name": "k2",
          "optional": false,
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
                "decorators": [],
                "name": "K2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 697,
        "end": 745,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 703,
            "end": 743,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 707,
                "end": 742,
                "id": {
                  "type": "ObjectPattern",
                  "start": 707,
                  "end": 736,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 709,
                      "end": 717,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 710,
                        "end": 712,
                        "decorators": [],
                        "name": "k1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 715,
                        "end": 717,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 719,
                      "end": 727,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 720,
                        "end": 722,
                        "decorators": [],
                        "name": "k2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 725,
                        "end": 727,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    },
                    {
                      "type": "RestElement",
                      "start": 729,
                      "end": 734,
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "start": 732,
                        "end": 734,
                        "decorators": [],
                        "name": "r1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 742,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
