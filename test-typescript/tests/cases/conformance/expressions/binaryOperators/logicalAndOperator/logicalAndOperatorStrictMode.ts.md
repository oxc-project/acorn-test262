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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 72,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 72,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 68,
                "end": 72
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 75,
            "end": 84,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "name": "u",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 96,
            "end": 105,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 121,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "start": 138,
                "end": 139,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 147,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 155,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 158,
            "end": 164,
            "left": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 183,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 174,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 177,
            "end": 183,
            "left": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 202,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 193,
            "name": "a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 196,
            "end": 202,
            "left": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 221,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 212,
            "name": "a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 215,
            "end": 221,
            "left": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 223,
      "end": 241,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 240,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 231,
            "name": "a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 234,
            "end": 240,
            "left": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 239,
              "end": 240,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 242,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 259,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 250,
            "name": "a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 253,
            "end": 259,
            "left": {
              "type": "Identifier",
              "start": 253,
              "end": 254,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 258,
              "end": 259,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 261,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 278,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 269,
            "name": "a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 272,
            "end": 278,
            "left": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 280,
      "end": 298,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 286,
          "end": 297,
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 288,
            "name": "a8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 291,
            "end": 297,
            "left": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 296,
              "end": 297,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 308,
            "name": "s1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 311,
            "end": 317,
            "left": {
              "type": "Identifier",
              "start": 311,
              "end": 312,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 319,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "name": "s2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 330,
            "end": 336,
            "left": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 338,
      "end": 356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 344,
          "end": 355,
          "id": {
            "type": "Identifier",
            "start": 344,
            "end": 346,
            "name": "s3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 349,
            "end": 355,
            "left": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 354,
              "end": 355,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 375,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 374,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 365,
            "name": "s4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 368,
            "end": 374,
            "left": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 373,
              "end": 374,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 376,
      "end": 394,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 393,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 384,
            "name": "s5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 387,
            "end": 393,
            "left": {
              "type": "Identifier",
              "start": 387,
              "end": 388,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 392,
              "end": 393,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 395,
      "end": 413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 412,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 403,
            "name": "s6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 406,
            "end": 412,
            "left": {
              "type": "Identifier",
              "start": 406,
              "end": 407,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 411,
              "end": 412,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 414,
      "end": 432,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 431,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 422,
            "name": "s7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 425,
            "end": 431,
            "left": {
              "type": "Identifier",
              "start": 425,
              "end": 426,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 430,
              "end": 431,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 433,
      "end": 451,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 439,
          "end": 450,
          "id": {
            "type": "Identifier",
            "start": 439,
            "end": 441,
            "name": "s8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 444,
            "end": 450,
            "left": {
              "type": "Identifier",
              "start": 444,
              "end": 445,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 449,
              "end": 450,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 453,
      "end": 471,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 459,
          "end": 470,
          "id": {
            "type": "Identifier",
            "start": 459,
            "end": 461,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 464,
            "end": 470,
            "left": {
              "type": "Identifier",
              "start": 464,
              "end": 465,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 469,
              "end": 470,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 472,
      "end": 490,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 478,
          "end": 489,
          "id": {
            "type": "Identifier",
            "start": 478,
            "end": 480,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 483,
            "end": 489,
            "left": {
              "type": "Identifier",
              "start": 483,
              "end": 484,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 488,
              "end": 489,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 491,
      "end": 509,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 497,
          "end": 508,
          "id": {
            "type": "Identifier",
            "start": 497,
            "end": 499,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 502,
            "end": 508,
            "left": {
              "type": "Identifier",
              "start": 502,
              "end": 503,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 507,
              "end": 508,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 510,
      "end": 528,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 516,
          "end": 527,
          "id": {
            "type": "Identifier",
            "start": 516,
            "end": 518,
            "name": "x4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 521,
            "end": 527,
            "left": {
              "type": "Identifier",
              "start": 521,
              "end": 522,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 526,
              "end": 527,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 529,
      "end": 547,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 535,
          "end": 546,
          "id": {
            "type": "Identifier",
            "start": 535,
            "end": 537,
            "name": "x5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 540,
            "end": 546,
            "left": {
              "type": "Identifier",
              "start": 540,
              "end": 541,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 545,
              "end": 546,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 548,
      "end": 566,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 554,
          "end": 565,
          "id": {
            "type": "Identifier",
            "start": 554,
            "end": 556,
            "name": "x6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 559,
            "end": 565,
            "left": {
              "type": "Identifier",
              "start": 559,
              "end": 560,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 564,
              "end": 565,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 567,
      "end": 585,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 573,
          "end": 584,
          "id": {
            "type": "Identifier",
            "start": 573,
            "end": 575,
            "name": "x7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 578,
            "end": 584,
            "left": {
              "type": "Identifier",
              "start": 578,
              "end": 579,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 583,
              "end": 584,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 586,
      "end": 604,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 592,
          "end": 603,
          "id": {
            "type": "Identifier",
            "start": 592,
            "end": 594,
            "name": "x8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 597,
            "end": 603,
            "left": {
              "type": "Identifier",
              "start": 597,
              "end": 598,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 602,
              "end": 603,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 606,
      "end": 624,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 612,
          "end": 623,
          "id": {
            "type": "Identifier",
            "start": 612,
            "end": 614,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 617,
            "end": 623,
            "left": {
              "type": "Identifier",
              "start": 617,
              "end": 618,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 622,
              "end": 623,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 625,
      "end": 643,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 631,
          "end": 642,
          "id": {
            "type": "Identifier",
            "start": 631,
            "end": 633,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 636,
            "end": 642,
            "left": {
              "type": "Identifier",
              "start": 636,
              "end": 637,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 641,
              "end": 642,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 644,
      "end": 662,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 650,
          "end": 661,
          "id": {
            "type": "Identifier",
            "start": 650,
            "end": 652,
            "name": "b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 655,
            "end": 661,
            "left": {
              "type": "Identifier",
              "start": 655,
              "end": 656,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 660,
              "end": 661,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 663,
      "end": 681,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 669,
          "end": 680,
          "id": {
            "type": "Identifier",
            "start": 669,
            "end": 671,
            "name": "b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 674,
            "end": 680,
            "left": {
              "type": "Identifier",
              "start": 674,
              "end": 675,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 679,
              "end": 680,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 682,
      "end": 700,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 688,
          "end": 699,
          "id": {
            "type": "Identifier",
            "start": 688,
            "end": 690,
            "name": "b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 693,
            "end": 699,
            "left": {
              "type": "Identifier",
              "start": 693,
              "end": 694,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 698,
              "end": 699,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 701,
      "end": 719,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 707,
          "end": 718,
          "id": {
            "type": "Identifier",
            "start": 707,
            "end": 709,
            "name": "b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 712,
            "end": 718,
            "left": {
              "type": "Identifier",
              "start": 712,
              "end": 713,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 717,
              "end": 718,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 720,
      "end": 738,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 726,
          "end": 737,
          "id": {
            "type": "Identifier",
            "start": 726,
            "end": 728,
            "name": "b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 731,
            "end": 737,
            "left": {
              "type": "Identifier",
              "start": 731,
              "end": 732,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 736,
              "end": 737,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 739,
      "end": 757,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 745,
          "end": 756,
          "id": {
            "type": "Identifier",
            "start": 745,
            "end": 747,
            "name": "b8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 750,
            "end": 756,
            "left": {
              "type": "Identifier",
              "start": 750,
              "end": 751,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 755,
              "end": 756,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 759,
      "end": 777,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 765,
          "end": 776,
          "id": {
            "type": "Identifier",
            "start": 765,
            "end": 767,
            "name": "v1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 770,
            "end": 776,
            "left": {
              "type": "Identifier",
              "start": 770,
              "end": 771,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 775,
              "end": 776,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 778,
      "end": 796,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 784,
          "end": 795,
          "id": {
            "type": "Identifier",
            "start": 784,
            "end": 786,
            "name": "v2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 789,
            "end": 795,
            "left": {
              "type": "Identifier",
              "start": 789,
              "end": 790,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 794,
              "end": 795,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 797,
      "end": 815,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 803,
          "end": 814,
          "id": {
            "type": "Identifier",
            "start": 803,
            "end": 805,
            "name": "v3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 808,
            "end": 814,
            "left": {
              "type": "Identifier",
              "start": 808,
              "end": 809,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 813,
              "end": 814,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 816,
      "end": 834,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 822,
          "end": 833,
          "id": {
            "type": "Identifier",
            "start": 822,
            "end": 824,
            "name": "v4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 827,
            "end": 833,
            "left": {
              "type": "Identifier",
              "start": 827,
              "end": 828,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 832,
              "end": 833,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 835,
      "end": 853,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 841,
          "end": 852,
          "id": {
            "type": "Identifier",
            "start": 841,
            "end": 843,
            "name": "v5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 846,
            "end": 852,
            "left": {
              "type": "Identifier",
              "start": 846,
              "end": 847,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 851,
              "end": 852,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 854,
      "end": 872,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 860,
          "end": 871,
          "id": {
            "type": "Identifier",
            "start": 860,
            "end": 862,
            "name": "v6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 865,
            "end": 871,
            "left": {
              "type": "Identifier",
              "start": 865,
              "end": 866,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 870,
              "end": 871,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 873,
      "end": 891,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 879,
          "end": 890,
          "id": {
            "type": "Identifier",
            "start": 879,
            "end": 881,
            "name": "v7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 884,
            "end": 890,
            "left": {
              "type": "Identifier",
              "start": 884,
              "end": 885,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 889,
              "end": 890,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 892,
      "end": 910,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 898,
          "end": 909,
          "id": {
            "type": "Identifier",
            "start": 898,
            "end": 900,
            "name": "v8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 903,
            "end": 909,
            "left": {
              "type": "Identifier",
              "start": 903,
              "end": 904,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 908,
              "end": 909,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 912,
      "end": 930,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 918,
          "end": 929,
          "id": {
            "type": "Identifier",
            "start": 918,
            "end": 920,
            "name": "u1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 923,
            "end": 929,
            "left": {
              "type": "Identifier",
              "start": 923,
              "end": 924,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 928,
              "end": 929,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 931,
      "end": 949,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 937,
          "end": 948,
          "id": {
            "type": "Identifier",
            "start": 937,
            "end": 939,
            "name": "u2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 942,
            "end": 948,
            "left": {
              "type": "Identifier",
              "start": 942,
              "end": 943,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 947,
              "end": 948,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 950,
      "end": 968,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 956,
          "end": 967,
          "id": {
            "type": "Identifier",
            "start": 956,
            "end": 958,
            "name": "u3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 961,
            "end": 967,
            "left": {
              "type": "Identifier",
              "start": 961,
              "end": 962,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 966,
              "end": 967,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 969,
      "end": 987,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 975,
          "end": 986,
          "id": {
            "type": "Identifier",
            "start": 975,
            "end": 977,
            "name": "u4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 980,
            "end": 986,
            "left": {
              "type": "Identifier",
              "start": 980,
              "end": 981,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 985,
              "end": 986,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 988,
      "end": 1006,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 994,
          "end": 1005,
          "id": {
            "type": "Identifier",
            "start": 994,
            "end": 996,
            "name": "u5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 999,
            "end": 1005,
            "left": {
              "type": "Identifier",
              "start": 999,
              "end": 1000,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1004,
              "end": 1005,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1007,
      "end": 1025,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1013,
          "end": 1024,
          "id": {
            "type": "Identifier",
            "start": 1013,
            "end": 1015,
            "name": "u6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1018,
            "end": 1024,
            "left": {
              "type": "Identifier",
              "start": 1018,
              "end": 1019,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1023,
              "end": 1024,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1026,
      "end": 1044,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1032,
          "end": 1043,
          "id": {
            "type": "Identifier",
            "start": 1032,
            "end": 1034,
            "name": "u7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1037,
            "end": 1043,
            "left": {
              "type": "Identifier",
              "start": 1037,
              "end": 1038,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1042,
              "end": 1043,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1045,
      "end": 1063,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1051,
          "end": 1062,
          "id": {
            "type": "Identifier",
            "start": 1051,
            "end": 1053,
            "name": "u8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1056,
            "end": 1062,
            "left": {
              "type": "Identifier",
              "start": 1056,
              "end": 1057,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1061,
              "end": 1062,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1065,
      "end": 1083,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1071,
          "end": 1082,
          "id": {
            "type": "Identifier",
            "start": 1071,
            "end": 1073,
            "name": "n1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1076,
            "end": 1082,
            "left": {
              "type": "Identifier",
              "start": 1076,
              "end": 1077,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1081,
              "end": 1082,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1084,
      "end": 1102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1090,
          "end": 1101,
          "id": {
            "type": "Identifier",
            "start": 1090,
            "end": 1092,
            "name": "n2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1095,
            "end": 1101,
            "left": {
              "type": "Identifier",
              "start": 1095,
              "end": 1096,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1100,
              "end": 1101,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1103,
      "end": 1121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1109,
          "end": 1120,
          "id": {
            "type": "Identifier",
            "start": 1109,
            "end": 1111,
            "name": "n3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1114,
            "end": 1120,
            "left": {
              "type": "Identifier",
              "start": 1114,
              "end": 1115,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1119,
              "end": 1120,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1122,
      "end": 1140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1128,
          "end": 1139,
          "id": {
            "type": "Identifier",
            "start": 1128,
            "end": 1130,
            "name": "n4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1133,
            "end": 1139,
            "left": {
              "type": "Identifier",
              "start": 1133,
              "end": 1134,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1138,
              "end": 1139,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1141,
      "end": 1159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1147,
          "end": 1158,
          "id": {
            "type": "Identifier",
            "start": 1147,
            "end": 1149,
            "name": "n5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1152,
            "end": 1158,
            "left": {
              "type": "Identifier",
              "start": 1152,
              "end": 1153,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1157,
              "end": 1158,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1160,
      "end": 1178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1166,
          "end": 1177,
          "id": {
            "type": "Identifier",
            "start": 1166,
            "end": 1168,
            "name": "n6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1171,
            "end": 1177,
            "left": {
              "type": "Identifier",
              "start": 1171,
              "end": 1172,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1176,
              "end": 1177,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1179,
      "end": 1197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1185,
          "end": 1196,
          "id": {
            "type": "Identifier",
            "start": 1185,
            "end": 1187,
            "name": "n7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1190,
            "end": 1196,
            "left": {
              "type": "Identifier",
              "start": 1190,
              "end": 1191,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1195,
              "end": 1196,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1198,
      "end": 1216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1204,
          "end": 1215,
          "id": {
            "type": "Identifier",
            "start": 1204,
            "end": 1206,
            "name": "n8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1209,
            "end": 1215,
            "left": {
              "type": "Identifier",
              "start": 1209,
              "end": 1210,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1214,
              "end": 1215,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1218,
      "end": 1236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1224,
          "end": 1235,
          "id": {
            "type": "Identifier",
            "start": 1224,
            "end": 1226,
            "name": "z1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1229,
            "end": 1235,
            "left": {
              "type": "Identifier",
              "start": 1229,
              "end": 1230,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1234,
              "end": 1235,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1237,
      "end": 1255,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1243,
          "end": 1254,
          "id": {
            "type": "Identifier",
            "start": 1243,
            "end": 1245,
            "name": "z2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1248,
            "end": 1254,
            "left": {
              "type": "Identifier",
              "start": 1248,
              "end": 1249,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1253,
              "end": 1254,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1256,
      "end": 1274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1262,
          "end": 1273,
          "id": {
            "type": "Identifier",
            "start": 1262,
            "end": 1264,
            "name": "z3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1267,
            "end": 1273,
            "left": {
              "type": "Identifier",
              "start": 1267,
              "end": 1268,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1272,
              "end": 1273,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1275,
      "end": 1293,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1281,
          "end": 1292,
          "id": {
            "type": "Identifier",
            "start": 1281,
            "end": 1283,
            "name": "z4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1286,
            "end": 1292,
            "left": {
              "type": "Identifier",
              "start": 1286,
              "end": 1287,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1291,
              "end": 1292,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1294,
      "end": 1312,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1300,
          "end": 1311,
          "id": {
            "type": "Identifier",
            "start": 1300,
            "end": 1302,
            "name": "z5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1305,
            "end": 1311,
            "left": {
              "type": "Identifier",
              "start": 1305,
              "end": 1306,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1310,
              "end": 1311,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1313,
      "end": 1331,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1319,
          "end": 1330,
          "id": {
            "type": "Identifier",
            "start": 1319,
            "end": 1321,
            "name": "z6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1324,
            "end": 1330,
            "left": {
              "type": "Identifier",
              "start": 1324,
              "end": 1325,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1329,
              "end": 1330,
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1332,
      "end": 1350,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1338,
          "end": 1349,
          "id": {
            "type": "Identifier",
            "start": 1338,
            "end": 1340,
            "name": "z7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1343,
            "end": 1349,
            "left": {
              "type": "Identifier",
              "start": 1343,
              "end": 1344,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1348,
              "end": 1349,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1351,
      "end": 1369,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1357,
          "end": 1368,
          "id": {
            "type": "Identifier",
            "start": 1357,
            "end": 1359,
            "name": "z8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "LogicalExpression",
            "start": 1362,
            "end": 1368,
            "left": {
              "type": "Identifier",
              "start": 1362,
              "end": 1363,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 1367,
              "end": 1368,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
