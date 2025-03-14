genericRestArgs.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 437,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 60,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 43,
        "end": 60,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 45,
            "end": 58,
            "argument": {
              "type": "Identifier",
              "start": 52,
              "end": 57,
              "decorators": [],
              "name": "items",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 19,
        "decorators": [],
        "name": "makeArrayG",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 23,
          "end": 36,
          "argument": {
            "type": "Identifier",
            "start": 26,
            "end": 31,
            "decorators": [],
            "name": "items",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 36,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 33,
              "end": 36,
              "elementType": {
                "type": "TSTypeReference",
                "start": 33,
                "end": 34,
                "typeName": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 34,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 37,
        "end": 42,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 39,
          "end": 42,
          "elementType": {
            "type": "TSTypeReference",
            "start": 39,
            "end": 40,
            "typeName": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 89,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 69,
            "decorators": [],
            "name": "a1Ga",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 72,
            "end": 89,
            "arguments": [
              {
                "type": "Literal",
                "start": 83,
                "end": 84,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 86,
                "end": 88,
                "raw": "\"\"",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 72,
              "end": 82,
              "decorators": [],
              "name": "makeArrayG",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 111,
            "decorators": [],
            "name": "a1Gb",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 114,
            "end": 136,
            "arguments": [
              {
                "type": "Literal",
                "start": 130,
                "end": 131,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 133,
                "end": 135,
                "raw": "\"\"",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 114,
              "end": 124,
              "decorators": [],
              "name": "makeArrayG",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 124,
              "end": 129,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 125,
                  "end": 128
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 176,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 175,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 147,
            "decorators": [],
            "name": "a1Gc",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 150,
            "end": 175,
            "arguments": [
              {
                "type": "Literal",
                "start": 169,
                "end": 170,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 172,
                "end": 174,
                "raw": "\"\"",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 150,
              "end": 160,
              "decorators": [],
              "name": "makeArrayG",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 160,
              "end": 168,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 161,
                  "end": 167,
                  "typeName": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 167,
                    "decorators": [],
                    "name": "Object",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 178,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 214,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 186,
            "decorators": [],
            "name": "a1Gd",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 189,
            "end": 214,
            "arguments": [
              {
                "type": "Literal",
                "start": 208,
                "end": 209,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 211,
                "end": 213,
                "raw": "\"\"",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 189,
              "end": 199,
              "decorators": [],
              "name": "makeArrayG",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 199,
              "end": 207,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 200,
                  "end": 206
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 226,
      "end": 322,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 285,
        "end": 322,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 291,
            "end": 320,
            "argument": {
              "type": "ArrayExpression",
              "start": 298,
              "end": 319,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 299,
                  "end": 304,
                  "decorators": [],
                  "name": "item1",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 306,
                  "end": 311,
                  "decorators": [],
                  "name": "item2",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 313,
                  "end": 318,
                  "decorators": [],
                  "name": "item3",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 248,
        "decorators": [],
        "name": "makeArrayGOpt",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 252,
          "end": 261,
          "decorators": [],
          "name": "item1",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 258,
            "end": 261,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 260,
              "end": 261,
              "typeName": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 263,
          "end": 272,
          "decorators": [],
          "name": "item2",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 269,
            "end": 272,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 271,
              "end": 272,
              "typeName": {
                "type": "Identifier",
                "start": 271,
                "end": 272,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 274,
          "end": 283,
          "decorators": [],
          "name": "item3",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 280,
            "end": 283,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 282,
              "end": 283,
              "typeName": {
                "type": "Identifier",
                "start": 282,
                "end": 283,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 248,
        "end": 251,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 249,
            "end": 250,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 249,
              "end": 250,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 323,
      "end": 355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 354,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 331,
            "decorators": [],
            "name": "a2Ga",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 334,
            "end": 354,
            "arguments": [
              {
                "type": "Literal",
                "start": 348,
                "end": 349,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 351,
                "end": 353,
                "raw": "\"\"",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 334,
              "end": 347,
              "decorators": [],
              "name": "makeArrayGOpt",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 390,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 365,
            "decorators": [],
            "name": "a2Gb",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 368,
            "end": 390,
            "arguments": [
              {
                "type": "Literal",
                "start": 384,
                "end": 385,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 387,
                "end": 389,
                "raw": "\"\"",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 368,
              "end": 378,
              "decorators": [],
              "name": "makeArrayG",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 378,
              "end": 383,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 379,
                  "end": 382
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 392,
      "end": 428,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 427,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 400,
            "decorators": [],
            "name": "a2Gc",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 403,
            "end": 427,
            "arguments": [
              {
                "type": "Literal",
                "start": 421,
                "end": 422,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 424,
                "end": 426,
                "raw": "\"\"",
                "value": ""
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 403,
              "end": 413,
              "decorators": [],
              "name": "makeArrayG",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 413,
              "end": 420,
              "params": [
                {
                  "type": "TSArrayType",
                  "start": 414,
                  "end": 419,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 414,
                    "end": 417
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
