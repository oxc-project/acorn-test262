__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 611,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "𝑚",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 11,
            "end": 12,
            "raw": "4",
            "value": 4
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 22,
            "decorators": [],
            "name": "𝑀",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 25,
            "end": 26,
            "raw": "5",
            "value": 5
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 49,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 28,
        "end": 48,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 40,
            "end": 47,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 40,
              "end": 42,
              "decorators": [],
              "name": "𝑀",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 45,
              "end": 47,
              "decorators": [],
              "name": "𝑚",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 28,
          "end": 39,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 28,
            "end": 35,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 93,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 93,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 78,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 70,
              "end": 73,
              "name": "𝑚"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 76,
              "end": 77,
              "raw": "4",
              "value": 4
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 83,
            "end": 91,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 83,
              "end": 86,
              "name": "𝑀"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 89,
              "end": 90,
              "raw": "5",
              "value": 5
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
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
      "type": "VariableDeclaration",
      "start": 125,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "decorators": [],
            "name": "ၡ",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 135,
            "end": 136,
            "raw": "6",
            "value": 6
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 158,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 138,
        "end": 157,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 150,
            "end": 156,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "ၡ",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "ၡ",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 138,
          "end": 149,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 138,
            "end": 145,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 146,
            "end": 149,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 209,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 220,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 216,
            "decorators": [],
            "name": "ဒ",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 219,
            "end": 220,
            "raw": "7",
            "value": 7
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 222,
      "end": 242,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 222,
        "end": 241,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 234,
            "end": 240,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "decorators": [],
              "name": "ဒ",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 239,
              "end": 240,
              "decorators": [],
              "name": "ဒ",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 222,
          "end": 233,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 222,
            "end": 229,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 230,
            "end": 233,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 271,
      "end": 286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 285,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 281,
            "decorators": [],
            "name": "ဒၡ𝑀",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 284,
            "end": 285,
            "raw": "7",
            "value": 7
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 287,
      "end": 313,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 287,
        "end": 312,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 299,
            "end": 311,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 299,
              "end": 303,
              "decorators": [],
              "name": "ဒၡ𝑀",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 307,
              "end": 311,
              "decorators": [],
              "name": "ဒၡ𝑀",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 287,
          "end": 298,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 287,
            "end": 294,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 295,
            "end": 298,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 315,
      "end": 330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 321,
          "end": 329,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 325,
            "decorators": [],
            "name": "ၡ𝑀ဒ",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 328,
            "end": 329,
            "raw": "7",
            "value": 7
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 331,
      "end": 357,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 331,
        "end": 356,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 343,
            "end": 355,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 343,
              "end": 347,
              "decorators": [],
              "name": "ၡ𝑀ဒ",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 351,
              "end": 355,
              "decorators": [],
              "name": "ၡ𝑀ဒ",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 331,
          "end": 342,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 331,
            "end": 338,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 339,
            "end": 342,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 359,
      "end": 374,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 373,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 369,
            "decorators": [],
            "name": "𝑀ဒၡ",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 372,
            "end": 373,
            "raw": "7",
            "value": 7
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 375,
      "end": 401,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 375,
        "end": 400,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 387,
            "end": 399,
            "operator": "**",
            "left": {
              "type": "Identifier",
              "start": 387,
              "end": 391,
              "decorators": [],
              "name": "𝑀ဒၡ",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 395,
              "end": 399,
              "decorators": [],
              "name": "𝑀ဒၡ",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 375,
          "end": 386,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 375,
            "end": 382,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 383,
            "end": 386,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 403,
      "end": 435,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 409,
          "end": 434,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 409,
            "end": 419,
            "decorators": [],
            "name": "𝓱𝓮𝓵𝓵𝓸",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 422,
            "end": 434,
            "raw": "\"𝔀𝓸𝓻𝓵𝓭\"",
            "value": "𝔀𝓸𝓻𝓵𝓭"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 437,
      "end": 453,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 443,
          "end": 452,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 443,
            "end": 445,
            "decorators": [],
            "name": "Ɐⱱ",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 448,
            "end": 452,
            "raw": "\"ok\"",
            "value": "ok"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 462,
      "end": 482,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 481,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 474,
            "decorators": [],
            "name": "𓀸𓀹𓀺",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 477,
            "end": 481,
            "raw": "\"ok\"",
            "value": "ok"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 491,
      "end": 511,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 497,
          "end": 510,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 497,
            "end": 503,
            "decorators": [],
            "name": "𡚭𡚮𡚯",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 506,
            "end": 510,
            "raw": "\"ok\"",
            "value": "ok"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 520,
      "end": 541,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 526,
          "end": 540,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 526,
            "end": 533,
            "decorators": [],
            "name": "𡚭𓀺ⱱ𝓮",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 536,
            "end": 540,
            "raw": "\"ok\"",
            "value": "ok"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 543,
      "end": 564,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 549,
          "end": 563,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 549,
            "end": 556,
            "decorators": [],
            "name": "𓀺ⱱ𝓮𡚭",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 559,
            "end": 563,
            "raw": "\"ok\"",
            "value": "ok"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 566,
      "end": 587,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 572,
          "end": 586,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 579,
            "decorators": [],
            "name": "ⱱ𝓮𡚭𓀺",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 582,
            "end": 586,
            "raw": "\"ok\"",
            "value": "ok"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 589,
      "end": 610,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 595,
          "end": 609,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 595,
            "end": 602,
            "decorators": [],
            "name": "𝓮𡚭𓀺ⱱ",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 605,
            "end": 609,
            "raw": "\"ok\"",
            "value": "ok"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
