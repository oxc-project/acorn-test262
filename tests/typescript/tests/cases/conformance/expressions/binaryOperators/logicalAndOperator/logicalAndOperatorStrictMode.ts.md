__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1369,
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
            "type": "ArrayExpression",
            "start": 10,
            "end": 13,
            "elements": [
              {
                "type": "Literal",
                "start": 11,
                "end": 12,
                "value": 0,
                "raw": "0"
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
      "start": 15,
      "end": 28,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 25,
            "end": 27,
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 41,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 39,
            "end": 40,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 58,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 52,
            "end": 57,
            "value": false,
            "raw": "false"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 85,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 72,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 72,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 68,
                "end": 72
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 75,
            "end": 84,
            "decorators": [],
            "name": "undefined",
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
      "start": 86,
      "end": 106,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 96,
            "end": 105,
            "decorators": [],
            "name": "undefined",
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
      "start": 107,
      "end": 122,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 121,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 117,
            "end": 121,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 145,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 133,
            "end": 144,
            "left": {
              "type": "LogicalExpression",
              "start": 133,
              "end": 139,
              "left": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "start": 138,
                "end": 139,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 165,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 155,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 158,
            "end": 164,
            "left": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 184,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 183,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 174,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 177,
            "end": 183,
            "left": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 203,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 202,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 193,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 196,
            "end": 202,
            "left": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 222,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 221,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 212,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 215,
            "end": 221,
            "left": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 223,
      "end": 241,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 240,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 231,
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 234,
            "end": 240,
            "left": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 239,
              "end": 240,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 242,
      "end": 260,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 259,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 250,
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 253,
            "end": 259,
            "left": {
              "type": "Identifier",
              "start": 253,
              "end": 254,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 258,
              "end": 259,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 261,
      "end": 279,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 278,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 269,
            "decorators": [],
            "name": "a7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 272,
            "end": 278,
            "left": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 280,
      "end": 298,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 286,
          "end": 297,
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 288,
            "decorators": [],
            "name": "a8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 291,
            "end": 297,
            "left": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 296,
              "end": 297,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 318,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 308,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 311,
            "end": 317,
            "left": {
              "type": "Identifier",
              "start": 311,
              "end": 312,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 319,
      "end": 337,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 330,
            "end": 336,
            "left": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 338,
      "end": 356,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 344,
          "end": 355,
          "id": {
            "type": "Identifier",
            "start": 344,
            "end": 346,
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 349,
            "end": 355,
            "left": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 354,
              "end": 355,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 375,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 374,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 365,
            "decorators": [],
            "name": "s4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 368,
            "end": 374,
            "left": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 373,
              "end": 374,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 376,
      "end": 394,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 393,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 384,
            "decorators": [],
            "name": "s5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 387,
            "end": 393,
            "left": {
              "type": "Identifier",
              "start": 387,
              "end": 388,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 392,
              "end": 393,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 395,
      "end": 413,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 412,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 403,
            "decorators": [],
            "name": "s6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 406,
            "end": 412,
            "left": {
              "type": "Identifier",
              "start": 406,
              "end": 407,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 411,
              "end": 412,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 414,
      "end": 432,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 431,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 422,
            "decorators": [],
            "name": "s7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 425,
            "end": 431,
            "left": {
              "type": "Identifier",
              "start": 425,
              "end": 426,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 430,
              "end": 431,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 433,
      "end": 451,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 439,
          "end": 450,
          "id": {
            "type": "Identifier",
            "start": 439,
            "end": 441,
            "decorators": [],
            "name": "s8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 444,
            "end": 450,
            "left": {
              "type": "Identifier",
              "start": 444,
              "end": 445,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 449,
              "end": 450,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 453,
      "end": 471,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 459,
          "end": 470,
          "id": {
            "type": "Identifier",
            "start": 459,
            "end": 461,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 464,
            "end": 470,
            "left": {
              "type": "Identifier",
              "start": 464,
              "end": 465,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 469,
              "end": 470,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 472,
      "end": 490,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 478,
          "end": 489,
          "id": {
            "type": "Identifier",
            "start": 478,
            "end": 480,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 483,
            "end": 489,
            "left": {
              "type": "Identifier",
              "start": 483,
              "end": 484,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 488,
              "end": 489,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 491,
      "end": 509,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 497,
          "end": 508,
          "id": {
            "type": "Identifier",
            "start": 497,
            "end": 499,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 502,
            "end": 508,
            "left": {
              "type": "Identifier",
              "start": 502,
              "end": 503,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 507,
              "end": 508,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 510,
      "end": 528,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 516,
          "end": 527,
          "id": {
            "type": "Identifier",
            "start": 516,
            "end": 518,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 521,
            "end": 527,
            "left": {
              "type": "Identifier",
              "start": 521,
              "end": 522,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 526,
              "end": 527,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 529,
      "end": 547,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 535,
          "end": 546,
          "id": {
            "type": "Identifier",
            "start": 535,
            "end": 537,
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 540,
            "end": 546,
            "left": {
              "type": "Identifier",
              "start": 540,
              "end": 541,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 545,
              "end": 546,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 548,
      "end": 566,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 554,
          "end": 565,
          "id": {
            "type": "Identifier",
            "start": 554,
            "end": 556,
            "decorators": [],
            "name": "x6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 559,
            "end": 565,
            "left": {
              "type": "Identifier",
              "start": 559,
              "end": 560,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 564,
              "end": 565,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 567,
      "end": 585,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 573,
          "end": 584,
          "id": {
            "type": "Identifier",
            "start": 573,
            "end": 575,
            "decorators": [],
            "name": "x7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 578,
            "end": 584,
            "left": {
              "type": "Identifier",
              "start": 578,
              "end": 579,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 583,
              "end": 584,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 586,
      "end": 604,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 592,
          "end": 603,
          "id": {
            "type": "Identifier",
            "start": 592,
            "end": 594,
            "decorators": [],
            "name": "x8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 597,
            "end": 603,
            "left": {
              "type": "Identifier",
              "start": 597,
              "end": 598,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 602,
              "end": 603,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 606,
      "end": 624,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 612,
          "end": 623,
          "id": {
            "type": "Identifier",
            "start": 612,
            "end": 614,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 617,
            "end": 623,
            "left": {
              "type": "Identifier",
              "start": 617,
              "end": 618,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 622,
              "end": 623,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 625,
      "end": 643,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 631,
          "end": 642,
          "id": {
            "type": "Identifier",
            "start": 631,
            "end": 633,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 636,
            "end": 642,
            "left": {
              "type": "Identifier",
              "start": 636,
              "end": 637,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 641,
              "end": 642,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 644,
      "end": 662,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 650,
          "end": 661,
          "id": {
            "type": "Identifier",
            "start": 650,
            "end": 652,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 655,
            "end": 661,
            "left": {
              "type": "Identifier",
              "start": 655,
              "end": 656,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 660,
              "end": 661,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 663,
      "end": 681,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 669,
          "end": 680,
          "id": {
            "type": "Identifier",
            "start": 669,
            "end": 671,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 674,
            "end": 680,
            "left": {
              "type": "Identifier",
              "start": 674,
              "end": 675,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 679,
              "end": 680,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 682,
      "end": 700,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 688,
          "end": 699,
          "id": {
            "type": "Identifier",
            "start": 688,
            "end": 690,
            "decorators": [],
            "name": "b5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 693,
            "end": 699,
            "left": {
              "type": "Identifier",
              "start": 693,
              "end": 694,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 698,
              "end": 699,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 701,
      "end": 719,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 707,
          "end": 718,
          "id": {
            "type": "Identifier",
            "start": 707,
            "end": 709,
            "decorators": [],
            "name": "b6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 712,
            "end": 718,
            "left": {
              "type": "Identifier",
              "start": 712,
              "end": 713,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 717,
              "end": 718,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 720,
      "end": 738,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 726,
          "end": 737,
          "id": {
            "type": "Identifier",
            "start": 726,
            "end": 728,
            "decorators": [],
            "name": "b7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 731,
            "end": 737,
            "left": {
              "type": "Identifier",
              "start": 731,
              "end": 732,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 736,
              "end": 737,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 739,
      "end": 757,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 745,
          "end": 756,
          "id": {
            "type": "Identifier",
            "start": 745,
            "end": 747,
            "decorators": [],
            "name": "b8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 750,
            "end": 756,
            "left": {
              "type": "Identifier",
              "start": 750,
              "end": 751,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 755,
              "end": 756,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 759,
      "end": 777,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 765,
          "end": 776,
          "id": {
            "type": "Identifier",
            "start": 765,
            "end": 767,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 770,
            "end": 776,
            "left": {
              "type": "Identifier",
              "start": 770,
              "end": 771,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 775,
              "end": 776,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 778,
      "end": 796,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 784,
          "end": 795,
          "id": {
            "type": "Identifier",
            "start": 784,
            "end": 786,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 789,
            "end": 795,
            "left": {
              "type": "Identifier",
              "start": 789,
              "end": 790,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 794,
              "end": 795,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 797,
      "end": 815,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 803,
          "end": 814,
          "id": {
            "type": "Identifier",
            "start": 803,
            "end": 805,
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 808,
            "end": 814,
            "left": {
              "type": "Identifier",
              "start": 808,
              "end": 809,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 813,
              "end": 814,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 816,
      "end": 834,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 822,
          "end": 833,
          "id": {
            "type": "Identifier",
            "start": 822,
            "end": 824,
            "decorators": [],
            "name": "v4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 827,
            "end": 833,
            "left": {
              "type": "Identifier",
              "start": 827,
              "end": 828,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 832,
              "end": 833,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 835,
      "end": 853,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 841,
          "end": 852,
          "id": {
            "type": "Identifier",
            "start": 841,
            "end": 843,
            "decorators": [],
            "name": "v5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 846,
            "end": 852,
            "left": {
              "type": "Identifier",
              "start": 846,
              "end": 847,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 851,
              "end": 852,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 854,
      "end": 872,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 860,
          "end": 871,
          "id": {
            "type": "Identifier",
            "start": 860,
            "end": 862,
            "decorators": [],
            "name": "v6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 865,
            "end": 871,
            "left": {
              "type": "Identifier",
              "start": 865,
              "end": 866,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 870,
              "end": 871,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 873,
      "end": 891,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 879,
          "end": 890,
          "id": {
            "type": "Identifier",
            "start": 879,
            "end": 881,
            "decorators": [],
            "name": "v7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 884,
            "end": 890,
            "left": {
              "type": "Identifier",
              "start": 884,
              "end": 885,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 889,
              "end": 890,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 892,
      "end": 910,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 898,
          "end": 909,
          "id": {
            "type": "Identifier",
            "start": 898,
            "end": 900,
            "decorators": [],
            "name": "v8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 903,
            "end": 909,
            "left": {
              "type": "Identifier",
              "start": 903,
              "end": 904,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 908,
              "end": 909,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 912,
      "end": 930,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 918,
          "end": 929,
          "id": {
            "type": "Identifier",
            "start": 918,
            "end": 920,
            "decorators": [],
            "name": "u1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 923,
            "end": 929,
            "left": {
              "type": "Identifier",
              "start": 923,
              "end": 924,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 928,
              "end": 929,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 931,
      "end": 949,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 937,
          "end": 948,
          "id": {
            "type": "Identifier",
            "start": 937,
            "end": 939,
            "decorators": [],
            "name": "u2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 942,
            "end": 948,
            "left": {
              "type": "Identifier",
              "start": 942,
              "end": 943,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 947,
              "end": 948,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 950,
      "end": 968,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 956,
          "end": 967,
          "id": {
            "type": "Identifier",
            "start": 956,
            "end": 958,
            "decorators": [],
            "name": "u3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 961,
            "end": 967,
            "left": {
              "type": "Identifier",
              "start": 961,
              "end": 962,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 966,
              "end": 967,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 969,
      "end": 987,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 975,
          "end": 986,
          "id": {
            "type": "Identifier",
            "start": 975,
            "end": 977,
            "decorators": [],
            "name": "u4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 980,
            "end": 986,
            "left": {
              "type": "Identifier",
              "start": 980,
              "end": 981,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 985,
              "end": 986,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 988,
      "end": 1006,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 994,
          "end": 1005,
          "id": {
            "type": "Identifier",
            "start": 994,
            "end": 996,
            "decorators": [],
            "name": "u5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 999,
            "end": 1005,
            "left": {
              "type": "Identifier",
              "start": 999,
              "end": 1000,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1004,
              "end": 1005,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1007,
      "end": 1025,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1013,
          "end": 1024,
          "id": {
            "type": "Identifier",
            "start": 1013,
            "end": 1015,
            "decorators": [],
            "name": "u6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1018,
            "end": 1024,
            "left": {
              "type": "Identifier",
              "start": 1018,
              "end": 1019,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1023,
              "end": 1024,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1026,
      "end": 1044,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1032,
          "end": 1043,
          "id": {
            "type": "Identifier",
            "start": 1032,
            "end": 1034,
            "decorators": [],
            "name": "u7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1037,
            "end": 1043,
            "left": {
              "type": "Identifier",
              "start": 1037,
              "end": 1038,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1042,
              "end": 1043,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1045,
      "end": 1063,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1051,
          "end": 1062,
          "id": {
            "type": "Identifier",
            "start": 1051,
            "end": 1053,
            "decorators": [],
            "name": "u8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1056,
            "end": 1062,
            "left": {
              "type": "Identifier",
              "start": 1056,
              "end": 1057,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1061,
              "end": 1062,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1065,
      "end": 1083,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1071,
          "end": 1082,
          "id": {
            "type": "Identifier",
            "start": 1071,
            "end": 1073,
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1076,
            "end": 1082,
            "left": {
              "type": "Identifier",
              "start": 1076,
              "end": 1077,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1081,
              "end": 1082,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1084,
      "end": 1102,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1090,
          "end": 1101,
          "id": {
            "type": "Identifier",
            "start": 1090,
            "end": 1092,
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1095,
            "end": 1101,
            "left": {
              "type": "Identifier",
              "start": 1095,
              "end": 1096,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1100,
              "end": 1101,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1103,
      "end": 1121,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1109,
          "end": 1120,
          "id": {
            "type": "Identifier",
            "start": 1109,
            "end": 1111,
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1114,
            "end": 1120,
            "left": {
              "type": "Identifier",
              "start": 1114,
              "end": 1115,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1119,
              "end": 1120,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1122,
      "end": 1140,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1128,
          "end": 1139,
          "id": {
            "type": "Identifier",
            "start": 1128,
            "end": 1130,
            "decorators": [],
            "name": "n4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1133,
            "end": 1139,
            "left": {
              "type": "Identifier",
              "start": 1133,
              "end": 1134,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1138,
              "end": 1139,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1141,
      "end": 1159,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1147,
          "end": 1158,
          "id": {
            "type": "Identifier",
            "start": 1147,
            "end": 1149,
            "decorators": [],
            "name": "n5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1152,
            "end": 1158,
            "left": {
              "type": "Identifier",
              "start": 1152,
              "end": 1153,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1157,
              "end": 1158,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1160,
      "end": 1178,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1166,
          "end": 1177,
          "id": {
            "type": "Identifier",
            "start": 1166,
            "end": 1168,
            "decorators": [],
            "name": "n6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1171,
            "end": 1177,
            "left": {
              "type": "Identifier",
              "start": 1171,
              "end": 1172,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1176,
              "end": 1177,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1179,
      "end": 1197,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1185,
          "end": 1196,
          "id": {
            "type": "Identifier",
            "start": 1185,
            "end": 1187,
            "decorators": [],
            "name": "n7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1190,
            "end": 1196,
            "left": {
              "type": "Identifier",
              "start": 1190,
              "end": 1191,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1195,
              "end": 1196,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1198,
      "end": 1216,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1204,
          "end": 1215,
          "id": {
            "type": "Identifier",
            "start": 1204,
            "end": 1206,
            "decorators": [],
            "name": "n8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1209,
            "end": 1215,
            "left": {
              "type": "Identifier",
              "start": 1209,
              "end": 1210,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1214,
              "end": 1215,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1218,
      "end": 1236,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1224,
          "end": 1235,
          "id": {
            "type": "Identifier",
            "start": 1224,
            "end": 1226,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1229,
            "end": 1235,
            "left": {
              "type": "Identifier",
              "start": 1229,
              "end": 1230,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1234,
              "end": 1235,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1237,
      "end": 1255,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1243,
          "end": 1254,
          "id": {
            "type": "Identifier",
            "start": 1243,
            "end": 1245,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1248,
            "end": 1254,
            "left": {
              "type": "Identifier",
              "start": 1248,
              "end": 1249,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1253,
              "end": 1254,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1256,
      "end": 1274,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1262,
          "end": 1273,
          "id": {
            "type": "Identifier",
            "start": 1262,
            "end": 1264,
            "decorators": [],
            "name": "z3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1267,
            "end": 1273,
            "left": {
              "type": "Identifier",
              "start": 1267,
              "end": 1268,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1272,
              "end": 1273,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1275,
      "end": 1293,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1281,
          "end": 1292,
          "id": {
            "type": "Identifier",
            "start": 1281,
            "end": 1283,
            "decorators": [],
            "name": "z4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1286,
            "end": 1292,
            "left": {
              "type": "Identifier",
              "start": 1286,
              "end": 1287,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1291,
              "end": 1292,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1294,
      "end": 1312,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1300,
          "end": 1311,
          "id": {
            "type": "Identifier",
            "start": 1300,
            "end": 1302,
            "decorators": [],
            "name": "z5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1305,
            "end": 1311,
            "left": {
              "type": "Identifier",
              "start": 1305,
              "end": 1306,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1310,
              "end": 1311,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1313,
      "end": 1331,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1319,
          "end": 1330,
          "id": {
            "type": "Identifier",
            "start": 1319,
            "end": 1321,
            "decorators": [],
            "name": "z6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1324,
            "end": 1330,
            "left": {
              "type": "Identifier",
              "start": 1324,
              "end": 1325,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1329,
              "end": 1330,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1332,
      "end": 1350,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1338,
          "end": 1349,
          "id": {
            "type": "Identifier",
            "start": 1338,
            "end": 1340,
            "decorators": [],
            "name": "z7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1343,
            "end": 1349,
            "left": {
              "type": "Identifier",
              "start": 1343,
              "end": 1344,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1348,
              "end": 1349,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1351,
      "end": 1369,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1357,
          "end": 1368,
          "id": {
            "type": "Identifier",
            "start": 1357,
            "end": 1359,
            "decorators": [],
            "name": "z8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1362,
            "end": 1368,
            "left": {
              "type": "Identifier",
              "start": 1362,
              "end": 1363,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1367,
              "end": 1368,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
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
