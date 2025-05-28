__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 603,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 61,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 61,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 21,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 18,
              "end": 20,
              "value": 12,
              "raw": "12"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 26,
            "end": 33,
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
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 33,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 30,
                "end": 33,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 59,
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
            "value": {
              "type": "FunctionExpression",
              "start": 43,
              "end": 59,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 62,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 74,
        "end": 131,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 80,
            "end": 90,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 89,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 83,
                "end": 89
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 95,
            "end": 105,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 110,
            "end": 129,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 128,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 122,
                "end": 128
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
      "type": "VariableDeclaration",
      "start": 133,
      "end": 148,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 148,
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
            "callee": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 167,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 166,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 193,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 192,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 199,
      "expression": {
        "type": "MemberExpression",
        "start": 194,
        "end": 198,
        "object": {
          "type": "Identifier",
          "start": 194,
          "end": 196,
          "decorators": [],
          "name": "sk",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 197,
          "end": 198,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 200,
      "end": 207,
      "expression": {
        "type": "CallExpression",
        "start": 200,
        "end": 206,
        "callee": {
          "type": "MemberExpression",
          "start": 200,
          "end": 204,
          "object": {
            "type": "Identifier",
            "start": 200,
            "end": 202,
            "decorators": [],
            "name": "sk",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 203,
            "end": 204,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 222,
      "expression": {
        "type": "MemberExpression",
        "start": 217,
        "end": 221,
        "object": {
          "type": "Identifier",
          "start": 217,
          "end": 219,
          "decorators": [],
          "name": "sk",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 220,
          "end": 221,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 232,
      "end": 238,
      "expression": {
        "type": "MemberExpression",
        "start": 232,
        "end": 237,
        "object": {
          "type": "Identifier",
          "start": 232,
          "end": 235,
          "decorators": [],
          "name": "ssk",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 236,
          "end": 237,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 239,
      "end": 247,
      "expression": {
        "type": "CallExpression",
        "start": 239,
        "end": 246,
        "callee": {
          "type": "MemberExpression",
          "start": 239,
          "end": 244,
          "object": {
            "type": "Identifier",
            "start": 239,
            "end": 242,
            "decorators": [],
            "name": "ssk",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 257,
      "end": 263,
      "expression": {
        "type": "MemberExpression",
        "start": 257,
        "end": 262,
        "object": {
          "type": "Identifier",
          "start": 257,
          "end": 260,
          "decorators": [],
          "name": "ssk",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 261,
          "end": 262,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 274,
      "end": 327,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 326,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 288,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 290,
                  "end": 292,
                  "value": 12,
                  "raw": "12"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 294,
                "end": 301,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 295,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 295,
                  "end": 301,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 298,
                    "end": 301,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 303,
                "end": 324,
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 308,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 308,
                  "end": 324,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 328,
      "end": 346,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 345,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 347,
      "end": 372,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 371,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 373,
      "end": 378,
      "expression": {
        "type": "MemberExpression",
        "start": 373,
        "end": 377,
        "object": {
          "type": "Identifier",
          "start": 373,
          "end": 375,
          "decorators": [],
          "name": "si",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 376,
          "end": 377,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 379,
      "end": 386,
      "expression": {
        "type": "CallExpression",
        "start": 379,
        "end": 385,
        "callee": {
          "type": "MemberExpression",
          "start": 379,
          "end": 383,
          "object": {
            "type": "Identifier",
            "start": 379,
            "end": 381,
            "decorators": [],
            "name": "si",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 382,
            "end": 383,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 393,
      "end": 398,
      "expression": {
        "type": "MemberExpression",
        "start": 393,
        "end": 397,
        "object": {
          "type": "Identifier",
          "start": 393,
          "end": 395,
          "decorators": [],
          "name": "si",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 396,
          "end": 397,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 405,
      "end": 411,
      "expression": {
        "type": "MemberExpression",
        "start": 405,
        "end": 410,
        "object": {
          "type": "Identifier",
          "start": 405,
          "end": 408,
          "decorators": [],
          "name": "ssi",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 409,
          "end": 410,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 412,
      "end": 420,
      "expression": {
        "type": "CallExpression",
        "start": 412,
        "end": 419,
        "callee": {
          "type": "MemberExpression",
          "start": 412,
          "end": 417,
          "object": {
            "type": "Identifier",
            "start": 412,
            "end": 415,
            "decorators": [],
            "name": "ssi",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 416,
            "end": 417,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 427,
      "end": 433,
      "expression": {
        "type": "MemberExpression",
        "start": 427,
        "end": 432,
        "object": {
          "type": "Identifier",
          "start": 427,
          "end": 430,
          "decorators": [],
          "name": "ssi",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 431,
          "end": 432,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 441,
      "end": 491,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 445,
          "end": 490,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 451,
                  "end": 452,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 454,
                  "end": 456,
                  "value": 12,
                  "raw": "12"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 458,
                "end": 465,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 458,
                  "end": 459,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 459,
                  "end": 465,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 462,
                    "end": 465,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 467,
                "end": 488,
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 472,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 472,
                  "end": 488,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 492,
      "end": 510,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 509,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 511,
      "end": 536,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 515,
          "end": 535,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 537,
      "end": 542,
      "expression": {
        "type": "MemberExpression",
        "start": 537,
        "end": 541,
        "object": {
          "type": "Identifier",
          "start": 537,
          "end": 539,
          "decorators": [],
          "name": "so",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 540,
          "end": 541,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 543,
      "end": 550,
      "expression": {
        "type": "CallExpression",
        "start": 543,
        "end": 549,
        "callee": {
          "type": "MemberExpression",
          "start": 543,
          "end": 547,
          "object": {
            "type": "Identifier",
            "start": 543,
            "end": 545,
            "decorators": [],
            "name": "so",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 546,
            "end": 547,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 557,
      "end": 562,
      "expression": {
        "type": "MemberExpression",
        "start": 557,
        "end": 561,
        "object": {
          "type": "Identifier",
          "start": 557,
          "end": 559,
          "decorators": [],
          "name": "so",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 560,
          "end": 561,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 569,
      "end": 575,
      "expression": {
        "type": "MemberExpression",
        "start": 569,
        "end": 574,
        "object": {
          "type": "Identifier",
          "start": 569,
          "end": 572,
          "decorators": [],
          "name": "sso",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 573,
          "end": 574,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 576,
      "end": 584,
      "expression": {
        "type": "CallExpression",
        "start": 576,
        "end": 583,
        "callee": {
          "type": "MemberExpression",
          "start": 576,
          "end": 581,
          "object": {
            "type": "Identifier",
            "start": 576,
            "end": 579,
            "decorators": [],
            "name": "sso",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 580,
            "end": 581,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 591,
      "end": 597,
      "expression": {
        "type": "MemberExpression",
        "start": 591,
        "end": 596,
        "object": {
          "type": "Identifier",
          "start": 591,
          "end": 594,
          "decorators": [],
          "name": "sso",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 595,
          "end": 596,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
