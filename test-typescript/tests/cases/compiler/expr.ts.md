__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2017,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 15,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 15,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 17,
      "end": 48,
      "body": {
        "type": "TSEnumBody",
        "start": 24,
        "end": 48,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 30,
            "end": 33,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 33,
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 35,
            "end": 40,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 40,
              "decorators": [],
              "name": "Green",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 42,
            "end": 46,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 2017,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 63,
        "end": 2017,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 69,
            "end": 80,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 73,
                "end": 79,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 79,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 74,
                    "end": 79,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 76,
                      "end": 79
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 85,
            "end": 93,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 89,
                "end": 92,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 91,
                  "end": 92,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 98,
            "end": 107,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 102,
                "end": 106,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 103,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 104,
                  "end": 106,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 112,
            "end": 124,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 116,
                "end": 123,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 118,
                  "end": 123,
                  "raw": "false",
                  "value": false,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 129,
            "end": 137,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 133,
                "end": 136,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 136,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 134,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 135,
                      "end": 136,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 136,
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 142,
            "end": 150,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 146,
                "end": 149,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 149,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 147,
                    "end": 149,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 148,
                      "end": 149,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 156,
            "end": 161,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 156,
              "end": 160,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 159,
                "end": 160,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 166,
            "end": 171,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 166,
              "end": 170,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 176,
            "end": 181,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 176,
              "end": 180,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 186,
            "end": 191,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 186,
              "end": 190,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 196,
            "end": 201,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 196,
              "end": 200,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 199,
                "end": 200,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 206,
            "end": 211,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 206,
              "end": 210,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 206,
                "end": 207,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 209,
                "end": 210,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 217,
            "end": 222,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 217,
              "end": 221,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 217,
                "end": 218,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 220,
                "end": 221,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 227,
            "end": 232,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 227,
              "end": 231,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 227,
                "end": 228,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 230,
                "end": 231,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 237,
            "end": 242,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 237,
              "end": 241,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 237,
                "end": 238,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 240,
                "end": 241,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 247,
            "end": 252,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 247,
              "end": 251,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 247,
                "end": 248,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 257,
            "end": 262,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 257,
              "end": 261,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 260,
                "end": 261,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 267,
            "end": 272,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 267,
              "end": 271,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 267,
                "end": 268,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 270,
                "end": 271,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 278,
            "end": 283,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 278,
              "end": 282,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 278,
                "end": 279,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 281,
                "end": 282,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 288,
            "end": 293,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 288,
              "end": 292,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 288,
                "end": 289,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 291,
                "end": 292,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 298,
            "end": 303,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 298,
              "end": 302,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 301,
                "end": 302,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 308,
            "end": 313,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 308,
              "end": 312,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 311,
                "end": 312,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 318,
            "end": 323,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 318,
              "end": 322,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 321,
                "end": 322,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 328,
            "end": 333,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 328,
              "end": 332,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 328,
                "end": 329,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 331,
                "end": 332,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 339,
            "end": 344,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 339,
              "end": 343,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 339,
                "end": 340,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 342,
                "end": 343,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 349,
            "end": 354,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 349,
              "end": 353,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 349,
                "end": 350,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 352,
                "end": 353,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 359,
            "end": 364,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 359,
              "end": 363,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 359,
                "end": 360,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 362,
                "end": 363,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 369,
            "end": 374,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 369,
              "end": 373,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 369,
                "end": 370,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 372,
                "end": 373,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 379,
            "end": 384,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 379,
              "end": 383,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 379,
                "end": 380,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 382,
                "end": 383,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 389,
            "end": 394,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 389,
              "end": 393,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 389,
                "end": 390,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 392,
                "end": 393,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 400,
            "end": 405,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 400,
              "end": 404,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 400,
                "end": 401,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 403,
                "end": 404,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 410,
            "end": 415,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 410,
              "end": 414,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 410,
                "end": 411,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 413,
                "end": 414,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 420,
            "end": 425,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 420,
              "end": 424,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 420,
                "end": 421,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 423,
                "end": 424,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 430,
            "end": 435,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 430,
              "end": 434,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 430,
                "end": 431,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 433,
                "end": 434,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 440,
            "end": 445,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 440,
              "end": 444,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 440,
                "end": 441,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 443,
                "end": 444,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 450,
            "end": 455,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 450,
              "end": 454,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 450,
                "end": 451,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 453,
                "end": 454,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 461,
            "end": 466,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 461,
              "end": 465,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 461,
                "end": 462,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 471,
            "end": 476,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 471,
              "end": 475,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 471,
                "end": 472,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 474,
                "end": 475,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 481,
            "end": 486,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 481,
              "end": 485,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 481,
                "end": 482,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 484,
                "end": 485,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 491,
            "end": 496,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 491,
              "end": 495,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 491,
                "end": 492,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 494,
                "end": 495,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 501,
            "end": 506,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 501,
              "end": 505,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 501,
                "end": 502,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 504,
                "end": 505,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 511,
            "end": 516,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 511,
              "end": 515,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 511,
                "end": 512,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 514,
                "end": 515,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 522,
            "end": 527,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 522,
              "end": 526,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 522,
                "end": 523,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 525,
                "end": 526,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 532,
            "end": 537,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 532,
              "end": 536,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 532,
                "end": 533,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 535,
                "end": 536,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 542,
            "end": 547,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 542,
              "end": 546,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 542,
                "end": 543,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 552,
            "end": 557,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 552,
              "end": 556,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 552,
                "end": 553,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 555,
                "end": 556,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 562,
            "end": 567,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 562,
              "end": 566,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 562,
                "end": 563,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 565,
                "end": 566,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 572,
            "end": 577,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 572,
              "end": 576,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 572,
                "end": 573,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 575,
                "end": 576,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 583,
            "end": 588,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 583,
              "end": 587,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 583,
                "end": 584,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 586,
                "end": 587,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 593,
            "end": 598,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 593,
              "end": 597,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 593,
                "end": 594,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 596,
                "end": 597,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 603,
            "end": 608,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 603,
              "end": 607,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 603,
                "end": 604,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 606,
                "end": 607,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 613,
            "end": 618,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 613,
              "end": 617,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 613,
                "end": 614,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 616,
                "end": 617,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 623,
            "end": 628,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 623,
              "end": 627,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 623,
                "end": 624,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 626,
                "end": 627,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 633,
            "end": 638,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 633,
              "end": 637,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 633,
                "end": 634,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 636,
                "end": 637,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 644,
            "end": 649,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 644,
              "end": 648,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 644,
                "end": 645,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 647,
                "end": 648,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 654,
            "end": 659,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 654,
              "end": 658,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 654,
                "end": 655,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 657,
                "end": 658,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 664,
            "end": 669,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 664,
              "end": 668,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 664,
                "end": 665,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 667,
                "end": 668,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 674,
            "end": 679,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 674,
              "end": 678,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 674,
                "end": 675,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 677,
                "end": 678,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 684,
            "end": 689,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 684,
              "end": 688,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 684,
                "end": 685,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 687,
                "end": 688,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 694,
            "end": 699,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 694,
              "end": 698,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 694,
                "end": 695,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 697,
                "end": 698,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 705,
            "end": 710,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 705,
              "end": 709,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 705,
                "end": 706,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 708,
                "end": 709,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 715,
            "end": 720,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 715,
              "end": 719,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 715,
                "end": 716,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 718,
                "end": 719,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 725,
            "end": 730,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 725,
              "end": 729,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 725,
                "end": 726,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 728,
                "end": 729,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 735,
            "end": 740,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 735,
              "end": 739,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 735,
                "end": 736,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 738,
                "end": 739,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 745,
            "end": 750,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 745,
              "end": 749,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 745,
                "end": 746,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 748,
                "end": 749,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 755,
            "end": 760,
            "directive": null,
            "expression": {
              "type": "LogicalExpression",
              "start": 755,
              "end": 759,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 755,
                "end": 756,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 758,
                "end": 759,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 766,
            "end": 771,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 766,
              "end": 770,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 766,
                "end": 767,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 769,
                "end": 770,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 776,
            "end": 781,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 776,
              "end": 780,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 776,
                "end": 777,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 779,
                "end": 780,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 786,
            "end": 791,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 786,
              "end": 790,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 786,
                "end": 787,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 789,
                "end": 790,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 796,
            "end": 801,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 796,
              "end": 800,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 796,
                "end": 797,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 799,
                "end": 800,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 806,
            "end": 811,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 806,
              "end": 810,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 806,
                "end": 807,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 809,
                "end": 810,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 816,
            "end": 821,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 816,
              "end": 820,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 816,
                "end": 817,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 819,
                "end": 820,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 827,
            "end": 832,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 827,
              "end": 831,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 827,
                "end": 828,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 830,
                "end": 831,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 837,
            "end": 842,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 837,
              "end": 841,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 837,
                "end": 838,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 840,
                "end": 841,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 847,
            "end": 852,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 847,
              "end": 851,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 847,
                "end": 848,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 850,
                "end": 851,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 857,
            "end": 862,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 857,
              "end": 861,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 857,
                "end": 858,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 860,
                "end": 861,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 867,
            "end": 872,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 867,
              "end": 871,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 867,
                "end": 868,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 870,
                "end": 871,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 877,
            "end": 882,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 877,
              "end": 881,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 877,
                "end": 878,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 880,
                "end": 881,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 888,
            "end": 893,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 888,
              "end": 892,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 888,
                "end": 889,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 891,
                "end": 892,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 898,
            "end": 903,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 898,
              "end": 902,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 898,
                "end": 899,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 901,
                "end": 902,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 908,
            "end": 913,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 908,
              "end": 912,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 908,
                "end": 909,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 911,
                "end": 912,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 918,
            "end": 923,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 918,
              "end": 922,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 918,
                "end": 919,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 921,
                "end": 922,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 928,
            "end": 933,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 928,
              "end": 932,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 928,
                "end": 929,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 931,
                "end": 932,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 938,
            "end": 943,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 938,
              "end": 942,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 938,
                "end": 939,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 941,
                "end": 942,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 949,
            "end": 954,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 949,
              "end": 953,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 949,
                "end": 950,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 952,
                "end": 953,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 959,
            "end": 964,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 959,
              "end": 963,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 959,
                "end": 960,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 962,
                "end": 963,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 969,
            "end": 974,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 969,
              "end": 973,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 969,
                "end": 970,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 972,
                "end": 973,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 979,
            "end": 984,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 979,
              "end": 983,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 979,
                "end": 980,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 982,
                "end": 983,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 989,
            "end": 994,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 989,
              "end": 993,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 989,
                "end": 990,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 992,
                "end": 993,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 999,
            "end": 1004,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 999,
              "end": 1003,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 999,
                "end": 1000,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1002,
                "end": 1003,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1010,
            "end": 1015,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1010,
              "end": 1014,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1010,
                "end": 1011,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1013,
                "end": 1014,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1020,
            "end": 1025,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1020,
              "end": 1024,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1020,
                "end": 1021,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1023,
                "end": 1024,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1030,
            "end": 1035,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1030,
              "end": 1034,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1030,
                "end": 1031,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1033,
                "end": 1034,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1040,
            "end": 1045,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1040,
              "end": 1044,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1040,
                "end": 1041,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1043,
                "end": 1044,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1050,
            "end": 1055,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1050,
              "end": 1054,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1050,
                "end": 1051,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1053,
                "end": 1054,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1060,
            "end": 1065,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1060,
              "end": 1064,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1060,
                "end": 1061,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1063,
                "end": 1064,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1071,
            "end": 1074,
            "directive": null,
            "expression": {
              "type": "UnaryExpression",
              "start": 1071,
              "end": 1073,
              "argument": {
                "type": "Identifier",
                "start": 1072,
                "end": 1073,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1079,
            "end": 1082,
            "directive": null,
            "expression": {
              "type": "UnaryExpression",
              "start": 1079,
              "end": 1081,
              "argument": {
                "type": "Identifier",
                "start": 1080,
                "end": 1081,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1087,
            "end": 1090,
            "directive": null,
            "expression": {
              "type": "UnaryExpression",
              "start": 1087,
              "end": 1089,
              "argument": {
                "type": "Identifier",
                "start": 1088,
                "end": 1089,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1095,
            "end": 1098,
            "directive": null,
            "expression": {
              "type": "UnaryExpression",
              "start": 1095,
              "end": 1097,
              "argument": {
                "type": "Identifier",
                "start": 1096,
                "end": 1097,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1103,
            "end": 1106,
            "directive": null,
            "expression": {
              "type": "UnaryExpression",
              "start": 1103,
              "end": 1105,
              "argument": {
                "type": "Identifier",
                "start": 1104,
                "end": 1105,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1112,
            "end": 1115,
            "directive": null,
            "expression": {
              "type": "UnaryExpression",
              "start": 1112,
              "end": 1114,
              "argument": {
                "type": "Identifier",
                "start": 1113,
                "end": 1114,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "-",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1120,
            "end": 1123,
            "directive": null,
            "expression": {
              "type": "UnaryExpression",
              "start": 1120,
              "end": 1122,
              "argument": {
                "type": "Identifier",
                "start": 1121,
                "end": 1122,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "-",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1128,
            "end": 1131,
            "directive": null,
            "expression": {
              "type": "UnaryExpression",
              "start": 1128,
              "end": 1130,
              "argument": {
                "type": "Identifier",
                "start": 1129,
                "end": 1130,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "-",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1136,
            "end": 1139,
            "directive": null,
            "expression": {
              "type": "UnaryExpression",
              "start": 1136,
              "end": 1138,
              "argument": {
                "type": "Identifier",
                "start": 1137,
                "end": 1138,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "-",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1144,
            "end": 1147,
            "directive": null,
            "expression": {
              "type": "UnaryExpression",
              "start": 1144,
              "end": 1146,
              "argument": {
                "type": "Identifier",
                "start": 1145,
                "end": 1146,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "-",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1153,
            "end": 1156,
            "directive": null,
            "expression": {
              "type": "UnaryExpression",
              "start": 1153,
              "end": 1155,
              "argument": {
                "type": "Identifier",
                "start": 1154,
                "end": 1155,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1161,
            "end": 1164,
            "directive": null,
            "expression": {
              "type": "UnaryExpression",
              "start": 1161,
              "end": 1163,
              "argument": {
                "type": "Identifier",
                "start": 1162,
                "end": 1163,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1169,
            "end": 1172,
            "directive": null,
            "expression": {
              "type": "UnaryExpression",
              "start": 1169,
              "end": 1171,
              "argument": {
                "type": "Identifier",
                "start": 1170,
                "end": 1171,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1177,
            "end": 1180,
            "directive": null,
            "expression": {
              "type": "UnaryExpression",
              "start": 1177,
              "end": 1179,
              "argument": {
                "type": "Identifier",
                "start": 1178,
                "end": 1179,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1185,
            "end": 1188,
            "directive": null,
            "expression": {
              "type": "UnaryExpression",
              "start": 1185,
              "end": 1187,
              "argument": {
                "type": "Identifier",
                "start": 1186,
                "end": 1187,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1195,
            "end": 1199,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1195,
              "end": 1198,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1195,
                "end": 1196,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1197,
                "end": 1198,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1204,
            "end": 1208,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1204,
              "end": 1207,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1204,
                "end": 1205,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1206,
                "end": 1207,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1213,
            "end": 1217,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1213,
              "end": 1216,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1213,
                "end": 1214,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1215,
                "end": 1216,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1222,
            "end": 1226,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1222,
              "end": 1225,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1222,
                "end": 1223,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1224,
                "end": 1225,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1231,
            "end": 1235,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1231,
              "end": 1234,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1231,
                "end": 1232,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1233,
                "end": 1234,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1240,
            "end": 1244,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1240,
              "end": 1243,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1240,
                "end": 1241,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1242,
                "end": 1243,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1250,
            "end": 1254,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1250,
              "end": 1253,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1250,
                "end": 1251,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1252,
                "end": 1253,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1259,
            "end": 1263,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1259,
              "end": 1262,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1259,
                "end": 1260,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1261,
                "end": 1262,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1268,
            "end": 1272,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1268,
              "end": 1271,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1268,
                "end": 1269,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1270,
                "end": 1271,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1277,
            "end": 1281,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1277,
              "end": 1280,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1277,
                "end": 1278,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1279,
                "end": 1280,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1286,
            "end": 1290,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1286,
              "end": 1289,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1286,
                "end": 1287,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1288,
                "end": 1289,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1295,
            "end": 1299,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1295,
              "end": 1298,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1295,
                "end": 1296,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1297,
                "end": 1298,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1305,
            "end": 1309,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1305,
              "end": 1308,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1305,
                "end": 1306,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1307,
                "end": 1308,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1314,
            "end": 1318,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1314,
              "end": 1317,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1314,
                "end": 1315,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1316,
                "end": 1317,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1323,
            "end": 1327,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1323,
              "end": 1326,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1323,
                "end": 1324,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1325,
                "end": 1326,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1332,
            "end": 1336,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1332,
              "end": 1335,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1332,
                "end": 1333,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1334,
                "end": 1335,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1341,
            "end": 1345,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1341,
              "end": 1344,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1341,
                "end": 1342,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1343,
                "end": 1344,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1350,
            "end": 1354,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1350,
              "end": 1353,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1350,
                "end": 1351,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1352,
                "end": 1353,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1360,
            "end": 1364,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1360,
              "end": 1363,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1360,
                "end": 1361,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1362,
                "end": 1363,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1369,
            "end": 1373,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1369,
              "end": 1372,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1369,
                "end": 1370,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1371,
                "end": 1372,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1378,
            "end": 1382,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1378,
              "end": 1381,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1378,
                "end": 1379,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1380,
                "end": 1381,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1387,
            "end": 1391,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1387,
              "end": 1390,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1387,
                "end": 1388,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1389,
                "end": 1390,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1396,
            "end": 1400,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1396,
              "end": 1399,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1396,
                "end": 1397,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1398,
                "end": 1399,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1405,
            "end": 1409,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1405,
              "end": 1408,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1405,
                "end": 1406,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1407,
                "end": 1408,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1415,
            "end": 1419,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1415,
              "end": 1418,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1415,
                "end": 1416,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1417,
                "end": 1418,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1424,
            "end": 1428,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1424,
              "end": 1427,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1424,
                "end": 1425,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1426,
                "end": 1427,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1433,
            "end": 1437,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1433,
              "end": 1436,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1433,
                "end": 1434,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1435,
                "end": 1436,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1442,
            "end": 1446,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1442,
              "end": 1445,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1442,
                "end": 1443,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1444,
                "end": 1445,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1451,
            "end": 1455,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1451,
              "end": 1454,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1451,
                "end": 1452,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1453,
                "end": 1454,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1460,
            "end": 1464,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1460,
              "end": 1463,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 1460,
                "end": 1461,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1462,
                "end": 1463,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1470,
            "end": 1474,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1470,
              "end": 1473,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1470,
                "end": 1471,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1472,
                "end": 1473,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1479,
            "end": 1483,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1479,
              "end": 1482,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1479,
                "end": 1480,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1481,
                "end": 1482,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1488,
            "end": 1492,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1488,
              "end": 1491,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1488,
                "end": 1489,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1490,
                "end": 1491,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1497,
            "end": 1501,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1497,
              "end": 1500,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1497,
                "end": 1498,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1499,
                "end": 1500,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1506,
            "end": 1510,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1506,
              "end": 1509,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1506,
                "end": 1507,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1508,
                "end": 1509,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1515,
            "end": 1519,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1515,
              "end": 1518,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1515,
                "end": 1516,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1517,
                "end": 1518,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1525,
            "end": 1529,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1525,
              "end": 1528,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1525,
                "end": 1526,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1527,
                "end": 1528,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1534,
            "end": 1538,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1534,
              "end": 1537,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1534,
                "end": 1535,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1536,
                "end": 1537,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1543,
            "end": 1547,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1543,
              "end": 1546,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1543,
                "end": 1544,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1545,
                "end": 1546,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1552,
            "end": 1556,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1552,
              "end": 1555,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1552,
                "end": 1553,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1554,
                "end": 1555,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1561,
            "end": 1565,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1561,
              "end": 1564,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1561,
                "end": 1562,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1563,
                "end": 1564,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1570,
            "end": 1574,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1570,
              "end": 1573,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1570,
                "end": 1571,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1572,
                "end": 1573,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1580,
            "end": 1584,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1580,
              "end": 1583,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1580,
                "end": 1581,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1582,
                "end": 1583,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1589,
            "end": 1593,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1589,
              "end": 1592,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1589,
                "end": 1590,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1591,
                "end": 1592,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1598,
            "end": 1602,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1598,
              "end": 1601,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1598,
                "end": 1599,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1600,
                "end": 1601,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1607,
            "end": 1611,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1607,
              "end": 1610,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1607,
                "end": 1608,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1609,
                "end": 1610,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1616,
            "end": 1620,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1616,
              "end": 1619,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1616,
                "end": 1617,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1618,
                "end": 1619,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1625,
            "end": 1629,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1625,
              "end": 1628,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1625,
                "end": 1626,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1627,
                "end": 1628,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1635,
            "end": 1639,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1635,
              "end": 1638,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1635,
                "end": 1636,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1637,
                "end": 1638,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1644,
            "end": 1648,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1644,
              "end": 1647,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1644,
                "end": 1645,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1646,
                "end": 1647,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1653,
            "end": 1657,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1653,
              "end": 1656,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1653,
                "end": 1654,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1655,
                "end": 1656,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1662,
            "end": 1666,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1662,
              "end": 1665,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1662,
                "end": 1663,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1664,
                "end": 1665,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1671,
            "end": 1675,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1671,
              "end": 1674,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1671,
                "end": 1672,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1673,
                "end": 1674,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1680,
            "end": 1684,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1680,
              "end": 1683,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1680,
                "end": 1681,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1682,
                "end": 1683,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1690,
            "end": 1694,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1690,
              "end": 1693,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1690,
                "end": 1691,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1692,
                "end": 1693,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1699,
            "end": 1703,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1699,
              "end": 1702,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1699,
                "end": 1700,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1701,
                "end": 1702,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1708,
            "end": 1712,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1708,
              "end": 1711,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1708,
                "end": 1709,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1710,
                "end": 1711,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1717,
            "end": 1721,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1717,
              "end": 1720,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1717,
                "end": 1718,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1719,
                "end": 1720,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1726,
            "end": 1730,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1726,
              "end": 1729,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1726,
                "end": 1727,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1728,
                "end": 1729,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1735,
            "end": 1739,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1735,
              "end": 1738,
              "operator": "^",
              "left": {
                "type": "Identifier",
                "start": 1735,
                "end": 1736,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1737,
                "end": 1738,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1745,
            "end": 1749,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1745,
              "end": 1748,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1745,
                "end": 1746,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1747,
                "end": 1748,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1754,
            "end": 1758,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1754,
              "end": 1757,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1754,
                "end": 1755,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1756,
                "end": 1757,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1763,
            "end": 1767,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1763,
              "end": 1766,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1763,
                "end": 1764,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1765,
                "end": 1766,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1772,
            "end": 1776,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1772,
              "end": 1775,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1772,
                "end": 1773,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1774,
                "end": 1775,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1781,
            "end": 1785,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1781,
              "end": 1784,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1781,
                "end": 1782,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1783,
                "end": 1784,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1790,
            "end": 1794,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1790,
              "end": 1793,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1790,
                "end": 1791,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1792,
                "end": 1793,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1800,
            "end": 1804,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1800,
              "end": 1803,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1800,
                "end": 1801,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1802,
                "end": 1803,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1809,
            "end": 1813,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1809,
              "end": 1812,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1809,
                "end": 1810,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1811,
                "end": 1812,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1818,
            "end": 1822,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1818,
              "end": 1821,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1818,
                "end": 1819,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1820,
                "end": 1821,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1827,
            "end": 1831,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1827,
              "end": 1830,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1827,
                "end": 1828,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1829,
                "end": 1830,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1836,
            "end": 1840,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1836,
              "end": 1839,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1836,
                "end": 1837,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1838,
                "end": 1839,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1845,
            "end": 1849,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1845,
              "end": 1848,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1845,
                "end": 1846,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1847,
                "end": 1848,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1855,
            "end": 1859,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1855,
              "end": 1858,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1855,
                "end": 1856,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1857,
                "end": 1858,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1864,
            "end": 1868,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1864,
              "end": 1867,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1864,
                "end": 1865,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1866,
                "end": 1867,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1873,
            "end": 1877,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1873,
              "end": 1876,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1873,
                "end": 1874,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1875,
                "end": 1876,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1882,
            "end": 1886,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1882,
              "end": 1885,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1882,
                "end": 1883,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1884,
                "end": 1885,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1891,
            "end": 1895,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1891,
              "end": 1894,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1891,
                "end": 1892,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1893,
                "end": 1894,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1900,
            "end": 1904,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1900,
              "end": 1903,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1900,
                "end": 1901,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1902,
                "end": 1903,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1910,
            "end": 1914,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1910,
              "end": 1913,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1910,
                "end": 1911,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1912,
                "end": 1913,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1919,
            "end": 1923,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1919,
              "end": 1922,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1919,
                "end": 1920,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1921,
                "end": 1922,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1928,
            "end": 1932,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1928,
              "end": 1931,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1928,
                "end": 1929,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1930,
                "end": 1931,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1937,
            "end": 1941,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1937,
              "end": 1940,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1937,
                "end": 1938,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1939,
                "end": 1940,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1946,
            "end": 1950,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1946,
              "end": 1949,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1946,
                "end": 1947,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1948,
                "end": 1949,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1955,
            "end": 1959,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1955,
              "end": 1958,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1955,
                "end": 1956,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1957,
                "end": 1958,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1965,
            "end": 1969,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1965,
              "end": 1968,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1965,
                "end": 1966,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1967,
                "end": 1968,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1974,
            "end": 1978,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1974,
              "end": 1977,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1974,
                "end": 1975,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1976,
                "end": 1977,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1983,
            "end": 1987,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1983,
              "end": 1986,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1983,
                "end": 1984,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1985,
                "end": 1986,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1992,
            "end": 1996,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 1992,
              "end": 1995,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 1992,
                "end": 1993,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1994,
                "end": 1995,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2001,
            "end": 2005,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 2001,
              "end": 2004,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 2001,
                "end": 2002,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2003,
                "end": 2004,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2010,
            "end": 2014,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 2010,
              "end": 2013,
              "operator": "-",
              "left": {
                "type": "Identifier",
                "start": 2010,
                "end": 2011,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2012,
                "end": 2013,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
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
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
