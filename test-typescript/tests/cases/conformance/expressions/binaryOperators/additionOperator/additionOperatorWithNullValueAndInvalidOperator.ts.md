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
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 118,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 163,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 163,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 156,
                "end": 163
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 178,
            "name": "b",
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
                  "name": "Object",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 191,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 191,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 187,
                "end": 191
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 206,
            "name": "d",
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
                  "name": "Number",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 240,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 243,
            "end": 251,
            "left": {
              "type": "Literal",
              "start": 243,
              "end": 247,
              "value": null,
              "raw": "null"
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 253,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 259,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 262,
            "end": 270,
            "left": {
              "type": "Literal",
              "start": 262,
              "end": 266,
              "value": null,
              "raw": "null"
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 269,
              "end": 270,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 272,
      "end": 290,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 289,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 278,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 281,
            "end": 289,
            "left": {
              "type": "Literal",
              "start": 281,
              "end": 285,
              "value": null,
              "raw": "null"
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 291,
      "end": 309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 295,
          "end": 308,
          "id": {
            "type": "Identifier",
            "start": 295,
            "end": 297,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 300,
            "end": 308,
            "left": {
              "type": "Identifier",
              "start": 300,
              "end": 301,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 304,
              "end": 308,
              "value": null,
              "raw": "null"
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
      "start": 310,
      "end": 328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 314,
          "end": 327,
          "id": {
            "type": "Identifier",
            "start": 314,
            "end": 316,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 319,
            "end": 327,
            "left": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 323,
              "end": 327,
              "value": null,
              "raw": "null"
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
      "start": 329,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 333,
          "end": 346,
          "id": {
            "type": "Identifier",
            "start": 333,
            "end": 335,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 338,
            "end": 346,
            "left": {
              "type": "Literal",
              "start": 338,
              "end": 342,
              "value": null,
              "raw": "null"
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 345,
              "end": 346,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 364,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 368,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 368,
            "end": 370,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 373,
            "end": 381,
            "left": {
              "type": "Literal",
              "start": 373,
              "end": 377,
              "value": null,
              "raw": "null"
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 380,
              "end": 381,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 383,
      "end": 404,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 403,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 389,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 392,
            "end": 403,
            "left": {
              "type": "Literal",
              "start": 392,
              "end": 396,
              "value": null,
              "raw": "null"
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 399,
              "end": 403,
              "value": true,
              "raw": "true"
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
      "start": 405,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 409,
          "end": 430,
          "id": {
            "type": "Identifier",
            "start": 409,
            "end": 411,
            "name": "r9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 414,
            "end": 430,
            "left": {
              "type": "Literal",
              "start": 414,
              "end": 418,
              "value": null,
              "raw": "null"
            },
            "operator": "+",
            "right": {
              "type": "ObjectExpression",
              "start": 421,
              "end": 430,
              "properties": [
                {
                  "type": "Property",
                  "start": 423,
                  "end": 428,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 424,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 426,
                    "end": 428,
                    "value": "",
                    "raw": "''"
                  },
                  "kind": "init",
                  "optional": false
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
      "start": 432,
      "end": 455,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 454,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 439,
            "name": "r10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 442,
            "end": 454,
            "left": {
              "type": "Literal",
              "start": 442,
              "end": 446,
              "value": null,
              "raw": "null"
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "start": 449,
              "end": 454,
              "callee": {
                "type": "Identifier",
                "start": 449,
                "end": 452,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
      "start": 456,
      "end": 485,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 484,
          "id": {
            "type": "Identifier",
            "start": 460,
            "end": 463,
            "name": "r11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 466,
            "end": 484,
            "left": {
              "type": "Literal",
              "start": 466,
              "end": 470,
              "value": null,
              "raw": "null"
            },
            "operator": "+",
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 474,
              "end": 483,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 480,
                "end": 483,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
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
