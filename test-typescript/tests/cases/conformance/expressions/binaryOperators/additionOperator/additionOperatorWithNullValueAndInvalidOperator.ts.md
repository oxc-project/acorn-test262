__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 106,
  "end": 485,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 106,
      "end": 147,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 147,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 129,
            "end": 145,
            "argument": {
              "type": "Identifier",
              "start": 136,
              "end": 145,
              "decorators": [],
              "name": "undefined",
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
        "start": 115,
        "end": 118,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 120,
        "end": 126,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 122,
          "end": 126
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 163,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 163,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 163,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 156,
                "end": 163
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
      "start": 165,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 178,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 178,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 178,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 172,
                "end": 178,
                "typeName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 178,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
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
      "start": 180,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 191,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 191,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 191,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 187,
                "end": 191
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
      "start": 193,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 206,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 206,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 206,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 200,
                "end": 206,
                "typeName": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 206,
                  "decorators": [],
                  "name": "Number",
                  "optional": false
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
      "start": 234,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 251,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 240,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 243,
            "end": 251,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 243,
              "end": 247,
              "raw": "null",
              "value": null
            },
            "right": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 253,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 270,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 259,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 262,
            "end": 270,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 262,
              "end": 266,
              "raw": "null",
              "value": null
            },
            "right": {
              "type": "Identifier",
              "start": 269,
              "end": 270,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 290,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 289,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 278,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 281,
            "end": 289,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 281,
              "end": 285,
              "raw": "null",
              "value": null
            },
            "right": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 291,
      "end": 309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 295,
          "end": 308,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 295,
            "end": 297,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 300,
            "end": 308,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 300,
              "end": 301,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 304,
              "end": 308,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 310,
      "end": 328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 327,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 316,
            "decorators": [],
            "name": "r5",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 319,
            "end": 327,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 323,
              "end": 327,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 329,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 346,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 335,
            "decorators": [],
            "name": "r6",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 338,
            "end": 346,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 338,
              "end": 342,
              "raw": "null",
              "value": null
            },
            "right": {
              "type": "Identifier",
              "start": 345,
              "end": 346,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 364,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 368,
          "end": 381,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 368,
            "end": 370,
            "decorators": [],
            "name": "r7",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 373,
            "end": 381,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 373,
              "end": 377,
              "raw": "null",
              "value": null
            },
            "right": {
              "type": "Identifier",
              "start": 380,
              "end": 381,
              "decorators": [],
              "name": "d",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 383,
      "end": 404,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 403,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 389,
            "decorators": [],
            "name": "r8",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 392,
            "end": 403,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 392,
              "end": 396,
              "raw": "null",
              "value": null
            },
            "right": {
              "type": "Literal",
              "start": 399,
              "end": 403,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 405,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 409,
          "end": 430,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 409,
            "end": 411,
            "decorators": [],
            "name": "r9",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 414,
            "end": 430,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 414,
              "end": 418,
              "raw": "null",
              "value": null
            },
            "right": {
              "type": "ObjectExpression",
              "start": 421,
              "end": 430,
              "properties": [
                {
                  "type": "Property",
                  "start": 423,
                  "end": 428,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 424,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 426,
                    "end": 428,
                    "raw": "''",
                    "value": ""
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
      "start": 432,
      "end": 455,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 454,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 439,
            "decorators": [],
            "name": "r10",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 442,
            "end": 454,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 442,
              "end": 446,
              "raw": "null",
              "value": null
            },
            "right": {
              "type": "CallExpression",
              "start": 449,
              "end": 454,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 449,
                "end": 452,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 456,
      "end": 485,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 484,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 460,
            "end": 463,
            "decorators": [],
            "name": "r11",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 466,
            "end": 484,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 466,
              "end": 470,
              "raw": "null",
              "value": null
            },
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 474,
              "end": 483,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 480,
                "end": 483,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
