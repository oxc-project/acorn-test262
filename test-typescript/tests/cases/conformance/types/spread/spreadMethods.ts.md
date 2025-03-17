__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 604,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 61,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 61,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 21,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 18,
              "end": 20,
              "raw": "12",
              "value": 12
            }
          },
          {
            "type": "MethodDefinition",
            "start": 26,
            "end": 33,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 33,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 30,
                "end": 33,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 59,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 43,
              "end": 59,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 59,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 48,
                    "end": 57,
                    "argument": {
                      "type": "Literal",
                      "start": 55,
                      "end": 56,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 62,
      "end": 131,
      "body": {
        "type": "TSInterfaceBody",
        "start": 74,
        "end": 131,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 80,
            "end": 90,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 89,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 83,
                "end": 89
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 95,
            "end": 105,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 104,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 100,
                "end": 104
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 110,
            "end": 129,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 128,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 122,
                "end": 128
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 148,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 138,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 141,
            "end": 148,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 155,
            "decorators": [],
            "name": "sk",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 158,
            "end": 166,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 160,
                "end": 164,
                "argument": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 192,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 175,
            "decorators": [],
            "name": "ssk",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 178,
            "end": 192,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 180,
                "end": 184,
                "argument": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 184,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 186,
                "end": 190,
                "argument": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 199,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 194,
        "end": 198,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 194,
          "end": 196,
          "decorators": [],
          "name": "sk",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 197,
          "end": 198,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 200,
      "end": 207,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 200,
        "end": 206,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 200,
          "end": 204,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 200,
            "end": 202,
            "decorators": [],
            "name": "sk",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 203,
            "end": 204,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 222,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 217,
        "end": 221,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 217,
          "end": 219,
          "decorators": [],
          "name": "sk",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 220,
          "end": 221,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 232,
      "end": 238,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 232,
        "end": 237,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 232,
          "end": 235,
          "decorators": [],
          "name": "ssk",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 236,
          "end": 237,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 239,
      "end": 247,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 239,
        "end": 246,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 239,
          "end": 244,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 239,
            "end": 242,
            "decorators": [],
            "name": "ssk",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 257,
      "end": 263,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 257,
        "end": 262,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 257,
          "end": 260,
          "decorators": [],
          "name": "ssk",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 261,
          "end": 262,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 274,
      "end": 327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 326,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 282,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 279,
              "end": 282,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 281,
                "end": 282,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 285,
            "end": 326,
            "properties": [
              {
                "type": "Property",
                "start": 287,
                "end": 292,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 288,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 290,
                  "end": 292,
                  "raw": "12",
                  "value": 12
                }
              },
              {
                "type": "Property",
                "start": 294,
                "end": 301,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 295,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 295,
                  "end": 301,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 298,
                    "end": 301,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 303,
                "end": 324,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 308,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 308,
                  "end": 324,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 311,
                    "end": 324,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 313,
                        "end": 322,
                        "argument": {
                          "type": "Literal",
                          "start": 320,
                          "end": 321,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 328,
      "end": 346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 345,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 334,
            "decorators": [],
            "name": "si",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 337,
            "end": 345,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 339,
                "end": 343,
                "argument": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 343,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 347,
      "end": 372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 371,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 354,
            "decorators": [],
            "name": "ssi",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 357,
            "end": 371,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 359,
                "end": 363,
                "argument": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 363,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 365,
                "end": 369,
                "argument": {
                  "type": "Identifier",
                  "start": 368,
                  "end": 369,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 373,
      "end": 378,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 373,
        "end": 377,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 373,
          "end": 375,
          "decorators": [],
          "name": "si",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 376,
          "end": 377,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 379,
      "end": 386,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 379,
        "end": 385,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 379,
          "end": 383,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 379,
            "end": 381,
            "decorators": [],
            "name": "si",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 382,
            "end": 383,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 393,
      "end": 398,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 393,
        "end": 397,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 393,
          "end": 395,
          "decorators": [],
          "name": "si",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 396,
          "end": 397,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 405,
      "end": 411,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 405,
        "end": 410,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 405,
          "end": 408,
          "decorators": [],
          "name": "ssi",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 409,
          "end": 410,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 412,
      "end": 420,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 412,
        "end": 419,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 412,
          "end": 417,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 412,
            "end": 415,
            "decorators": [],
            "name": "ssi",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 416,
            "end": 417,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 427,
      "end": 433,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 427,
        "end": 432,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 427,
          "end": 430,
          "decorators": [],
          "name": "ssi",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 431,
          "end": 432,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 441,
      "end": 491,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 445,
          "end": 490,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 446,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 449,
            "end": 490,
            "properties": [
              {
                "type": "Property",
                "start": 451,
                "end": 456,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 451,
                  "end": 452,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 454,
                  "end": 456,
                  "raw": "12",
                  "value": 12
                }
              },
              {
                "type": "Property",
                "start": 458,
                "end": 465,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 458,
                  "end": 459,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 459,
                  "end": 465,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 462,
                    "end": 465,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 467,
                "end": 488,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 472,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 472,
                  "end": 488,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 475,
                    "end": 488,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 477,
                        "end": 486,
                        "argument": {
                          "type": "Literal",
                          "start": 484,
                          "end": 485,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 492,
      "end": 510,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 509,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 498,
            "decorators": [],
            "name": "so",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 501,
            "end": 509,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 503,
                "end": 507,
                "argument": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 507,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 511,
      "end": 536,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 515,
          "end": 535,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 515,
            "end": 518,
            "decorators": [],
            "name": "sso",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 521,
            "end": 535,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 523,
                "end": 527,
                "argument": {
                  "type": "Identifier",
                  "start": 526,
                  "end": 527,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "SpreadElement",
                "start": 529,
                "end": 533,
                "argument": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 533,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 537,
      "end": 542,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 537,
        "end": 541,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 537,
          "end": 539,
          "decorators": [],
          "name": "so",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 540,
          "end": 541,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 543,
      "end": 550,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 543,
        "end": 549,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 543,
          "end": 547,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 543,
            "end": 545,
            "decorators": [],
            "name": "so",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 546,
            "end": 547,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 557,
      "end": 562,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 557,
        "end": 561,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 557,
          "end": 559,
          "decorators": [],
          "name": "so",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 560,
          "end": 561,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 569,
      "end": 575,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 569,
        "end": 574,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 569,
          "end": 572,
          "decorators": [],
          "name": "sso",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 573,
          "end": 574,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 576,
      "end": 584,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 576,
        "end": 583,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 576,
          "end": 581,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 576,
            "end": 579,
            "decorators": [],
            "name": "sso",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 580,
            "end": 581,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 591,
      "end": 597,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 591,
        "end": 596,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 591,
          "end": 594,
          "decorators": [],
          "name": "sso",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 595,
          "end": 596,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
