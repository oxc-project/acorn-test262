__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 19,
        "name": "makeArrayG",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 23,
          "end": 36,
          "argument": {
            "type": "Identifier",
            "start": 26,
            "end": 31,
            "name": "items",
            "typeAnnotation": null,
            "decorators": [],
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "value": null
        }
      ],
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
              "name": "items",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
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
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 69,
            "name": "a1Ga",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 72,
            "end": 89,
            "callee": {
              "type": "Identifier",
              "start": 72,
              "end": 82,
              "name": "makeArrayG",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 83,
                "end": 84,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 86,
                "end": 88,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 111,
            "name": "a1Gb",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 114,
            "end": 136,
            "callee": {
              "type": "Identifier",
              "start": 114,
              "end": 124,
              "name": "makeArrayG",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 130,
                "end": 131,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 133,
                "end": 135,
                "value": "",
                "raw": "\"\""
              }
            ],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 147,
            "name": "a1Gc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 150,
            "end": 175,
            "callee": {
              "type": "Identifier",
              "start": 150,
              "end": 160,
              "name": "makeArrayG",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 169,
                "end": 170,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 172,
                "end": 174,
                "value": "",
                "raw": "\"\""
              }
            ],
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
                    "name": "Object",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 186,
            "name": "a1Gd",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 189,
            "end": 214,
            "callee": {
              "type": "Identifier",
              "start": 189,
              "end": 199,
              "name": "makeArrayG",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 208,
                "end": 209,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 211,
                "end": 213,
                "value": "",
                "raw": "\"\""
              }
            ],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 226,
      "end": 322,
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 248,
        "name": "makeArrayGOpt",
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
          "start": 252,
          "end": 261,
          "name": "item1",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "Identifier",
          "start": 263,
          "end": 272,
          "name": "item2",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "Identifier",
          "start": 274,
          "end": 283,
          "name": "item3",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
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
                  "name": "item1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 306,
                  "end": 311,
                  "name": "item2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 313,
                  "end": 318,
                  "name": "item3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 248,
        "end": 251,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 249,
            "end": 250,
            "name": {
              "type": "Identifier",
              "start": 249,
              "end": 250,
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
          }
        ]
      },
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 331,
            "name": "a2Ga",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 334,
            "end": 354,
            "callee": {
              "type": "Identifier",
              "start": 334,
              "end": 347,
              "name": "makeArrayGOpt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 348,
                "end": 349,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 351,
                "end": 353,
                "value": "",
                "raw": "\"\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 365,
            "name": "a2Gb",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 368,
            "end": 390,
            "callee": {
              "type": "Identifier",
              "start": 368,
              "end": 378,
              "name": "makeArrayG",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 384,
                "end": 385,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 387,
                "end": 389,
                "value": "",
                "raw": "\"\""
              }
            ],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 400,
            "name": "a2Gc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 403,
            "end": 427,
            "callee": {
              "type": "Identifier",
              "start": 403,
              "end": 413,
              "name": "makeArrayG",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 421,
                "end": 422,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 424,
                "end": 426,
                "value": "",
                "raw": "\"\""
              }
            ],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
