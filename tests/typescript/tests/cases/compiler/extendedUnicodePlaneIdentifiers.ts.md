__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "𝑚",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "init": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 11,
            "end": 12
          },
          "definite": false,
          "start": 6,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "𝑀",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 22
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 25,
            "end": 26
          },
          "definite": false,
          "start": 20,
          "end": 26
        }
      ],
      "declare": false,
      "start": 14,
      "end": 27
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 35
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 39
          },
          "optional": false,
          "computed": false,
          "start": 28,
          "end": 39
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "𝑀",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 42
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "𝑚",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 47
            },
            "start": 40,
            "end": 47
          }
        ],
        "optional": false,
        "start": 28,
        "end": 48
      },
      "directive": null,
      "start": 28,
      "end": 49
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "𝑚",
              "start": 70,
              "end": 73
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 76,
              "end": 77
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 70,
            "end": 78
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "𝑀",
              "start": 83,
              "end": 86
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 89,
              "end": 90
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 83,
            "end": 91
          }
        ],
        "start": 64,
        "end": 93
      },
      "abstract": false,
      "declare": false,
      "start": 56,
      "end": 93
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ၡ",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 132
          },
          "init": {
            "type": "Literal",
            "value": 6,
            "raw": "6",
            "start": 135,
            "end": 136
          },
          "definite": false,
          "start": 131,
          "end": 136
        }
      ],
      "declare": false,
      "start": 125,
      "end": 137
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 149
          },
          "optional": false,
          "computed": false,
          "start": 138,
          "end": 149
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ၡ",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ၡ",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 156
            },
            "start": 150,
            "end": 156
          }
        ],
        "optional": false,
        "start": 138,
        "end": 157
      },
      "directive": null,
      "start": 138,
      "end": 158
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ဒ",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 216
          },
          "init": {
            "type": "Literal",
            "value": 7,
            "raw": "7",
            "start": 219,
            "end": 220
          },
          "definite": false,
          "start": 215,
          "end": 220
        }
      ],
      "declare": false,
      "start": 209,
      "end": 221
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 229
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 233
          },
          "optional": false,
          "computed": false,
          "start": 222,
          "end": 233
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ဒ",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 235
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ဒ",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 240
            },
            "start": 234,
            "end": 240
          }
        ],
        "optional": false,
        "start": 222,
        "end": 241
      },
      "directive": null,
      "start": 222,
      "end": 242
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ဒၡ𝑀",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 281
          },
          "init": {
            "type": "Literal",
            "value": 7,
            "raw": "7",
            "start": 284,
            "end": 285
          },
          "definite": false,
          "start": 277,
          "end": 285
        }
      ],
      "declare": false,
      "start": 271,
      "end": 286
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 294
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 298
          },
          "optional": false,
          "computed": false,
          "start": 287,
          "end": 298
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ဒၡ𝑀",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 303
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ဒၡ𝑀",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 311
            },
            "start": 299,
            "end": 311
          }
        ],
        "optional": false,
        "start": 287,
        "end": 312
      },
      "directive": null,
      "start": 287,
      "end": 313
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ၡ𝑀ဒ",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 325
          },
          "init": {
            "type": "Literal",
            "value": 7,
            "raw": "7",
            "start": 328,
            "end": 329
          },
          "definite": false,
          "start": 321,
          "end": 329
        }
      ],
      "declare": false,
      "start": 315,
      "end": 330
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 338
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 339,
            "end": 342
          },
          "optional": false,
          "computed": false,
          "start": 331,
          "end": 342
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ၡ𝑀ဒ",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 347
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ၡ𝑀ဒ",
              "optional": false,
              "typeAnnotation": null,
              "start": 351,
              "end": 355
            },
            "start": 343,
            "end": 355
          }
        ],
        "optional": false,
        "start": 331,
        "end": 356
      },
      "directive": null,
      "start": 331,
      "end": 357
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "𝑀ဒၡ",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 369
          },
          "init": {
            "type": "Literal",
            "value": 7,
            "raw": "7",
            "start": 372,
            "end": 373
          },
          "definite": false,
          "start": 365,
          "end": 373
        }
      ],
      "declare": false,
      "start": 359,
      "end": 374
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 375,
            "end": 382
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 383,
            "end": 386
          },
          "optional": false,
          "computed": false,
          "start": 375,
          "end": 386
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "𝑀ဒၡ",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 391
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "𝑀ဒၡ",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 399
            },
            "start": 387,
            "end": 399
          }
        ],
        "optional": false,
        "start": 375,
        "end": 400
      },
      "directive": null,
      "start": 375,
      "end": 401
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "𝓱𝓮𝓵𝓵𝓸",
            "optional": false,
            "typeAnnotation": null,
            "start": 409,
            "end": 419
          },
          "init": {
            "type": "Literal",
            "value": "𝔀𝓸𝓻𝓵𝓭",
            "raw": "\"𝔀𝓸𝓻𝓵𝓭\"",
            "start": 422,
            "end": 434
          },
          "definite": false,
          "start": 409,
          "end": 434
        }
      ],
      "declare": false,
      "start": 403,
      "end": 435
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Ɐⱱ",
            "optional": false,
            "typeAnnotation": null,
            "start": 443,
            "end": 445
          },
          "init": {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 448,
            "end": 452
          },
          "definite": false,
          "start": 443,
          "end": 452
        }
      ],
      "declare": false,
      "start": 437,
      "end": 453
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "𓀸𓀹𓀺",
            "optional": false,
            "typeAnnotation": null,
            "start": 468,
            "end": 474
          },
          "init": {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 477,
            "end": 481
          },
          "definite": false,
          "start": 468,
          "end": 481
        }
      ],
      "declare": false,
      "start": 462,
      "end": 482
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "𡚭𡚮𡚯",
            "optional": false,
            "typeAnnotation": null,
            "start": 497,
            "end": 503
          },
          "init": {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 506,
            "end": 510
          },
          "definite": false,
          "start": 497,
          "end": 510
        }
      ],
      "declare": false,
      "start": 491,
      "end": 511
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "𡚭𓀺ⱱ𝓮",
            "optional": false,
            "typeAnnotation": null,
            "start": 526,
            "end": 533
          },
          "init": {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 536,
            "end": 540
          },
          "definite": false,
          "start": 526,
          "end": 540
        }
      ],
      "declare": false,
      "start": 520,
      "end": 541
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "𓀺ⱱ𝓮𡚭",
            "optional": false,
            "typeAnnotation": null,
            "start": 549,
            "end": 556
          },
          "init": {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 559,
            "end": 563
          },
          "definite": false,
          "start": 549,
          "end": 563
        }
      ],
      "declare": false,
      "start": 543,
      "end": 564
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ⱱ𝓮𡚭𓀺",
            "optional": false,
            "typeAnnotation": null,
            "start": 572,
            "end": 579
          },
          "init": {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 582,
            "end": 586
          },
          "definite": false,
          "start": 572,
          "end": 586
        }
      ],
      "declare": false,
      "start": 566,
      "end": 587
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "𝓮𡚭𓀺ⱱ",
            "optional": false,
            "typeAnnotation": null,
            "start": 595,
            "end": 602
          },
          "init": {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 605,
            "end": 609
          },
          "definite": false,
          "start": 595,
          "end": 609
        }
      ],
      "declare": false,
      "start": 589,
      "end": 610
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 610
}
```
