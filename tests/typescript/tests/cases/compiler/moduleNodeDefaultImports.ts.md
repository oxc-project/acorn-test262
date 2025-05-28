__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 28,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 24,
          "end": 28
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 30,
      "end": 49,
      "declaration": {
        "type": "Identifier",
        "start": 45,
        "end": 48,
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 486,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 25,
        "value": "./mod.cjs",
        "raw": "\"./mod.cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 27,
      "end": 68,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 36,
          "end": 48,
          "imported": {
            "type": "Identifier",
            "start": 36,
            "end": 43,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 56,
        "end": 67,
        "value": "./mod.cjs",
        "raw": "\"./mod.cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 69,
      "end": 113,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 76,
          "end": 77,
          "local": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 81,
          "end": 93,
          "imported": {
            "type": "Identifier",
            "start": 81,
            "end": 88,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 101,
        "end": 112,
        "value": "./mod.cjs",
        "raw": "\"./mod.cjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 114,
      "end": 146,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 121,
          "end": 130,
          "local": {
            "type": "Identifier",
            "start": 126,
            "end": 130,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 136,
        "end": 145,
        "value": "./b.mjs",
        "raw": "\"./b.mjs\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 147,
      "end": 183,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 156,
          "end": 163,
          "local": {
            "type": "Identifier",
            "start": 156,
            "end": 163,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 156,
            "end": 163,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 171,
        "end": 182,
        "value": "./mod.cjs",
        "raw": "\"./mod.cjs\""
      },
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 184,
      "end": 227,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 193,
          "end": 207,
          "local": {
            "type": "Identifier",
            "start": 193,
            "end": 200,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 204,
            "end": 207,
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 215,
        "end": 226,
        "value": "./mod.cjs",
        "raw": "\"./mod.cjs\""
      },
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 229,
      "end": 237,
      "expression": {
        "type": "BinaryExpression",
        "start": 229,
        "end": 236,
        "left": {
          "type": "Identifier",
          "start": 229,
          "end": 230,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 235,
          "end": 236,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 246,
      "expression": {
        "type": "BinaryExpression",
        "start": 238,
        "end": 245,
        "left": {
          "type": "Identifier",
          "start": 238,
          "end": 239,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 244,
          "end": 245,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 247,
      "end": 255,
      "expression": {
        "type": "BinaryExpression",
        "start": 247,
        "end": 254,
        "left": {
          "type": "Identifier",
          "start": 247,
          "end": 248,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 253,
          "end": 254,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 256,
      "end": 275,
      "expression": {
        "type": "BinaryExpression",
        "start": 256,
        "end": 274,
        "left": {
          "type": "Identifier",
          "start": 256,
          "end": 257,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "start": 262,
          "end": 274,
          "object": {
            "type": "Identifier",
            "start": 262,
            "end": 266,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 267,
            "end": 274,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 276,
      "end": 302,
      "expression": {
        "type": "BinaryExpression",
        "start": 276,
        "end": 301,
        "left": {
          "type": "MemberExpression",
          "start": 276,
          "end": 288,
          "object": {
            "type": "Identifier",
            "start": 276,
            "end": 280,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 281,
            "end": 288,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "start": 293,
          "end": 301,
          "object": {
            "type": "Identifier",
            "start": 293,
            "end": 297,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 298,
            "end": 301,
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 323,
      "end": 327,
      "expression": {
        "type": "CallExpression",
        "start": 323,
        "end": 326,
        "callee": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 328,
      "end": 332,
      "expression": {
        "type": "CallExpression",
        "start": 328,
        "end": 331,
        "callee": {
          "type": "Identifier",
          "start": 328,
          "end": 329,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 333,
      "end": 337,
      "expression": {
        "type": "CallExpression",
        "start": 333,
        "end": 336,
        "callee": {
          "type": "Identifier",
          "start": 333,
          "end": 334,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 338,
      "end": 342,
      "expression": {
        "type": "CallExpression",
        "start": 338,
        "end": 341,
        "callee": {
          "type": "Identifier",
          "start": 338,
          "end": 339,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 343,
      "end": 358,
      "expression": {
        "type": "CallExpression",
        "start": 343,
        "end": 357,
        "callee": {
          "type": "MemberExpression",
          "start": 343,
          "end": 355,
          "object": {
            "type": "Identifier",
            "start": 343,
            "end": 347,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 348,
            "end": 355,
            "decorators": [],
            "name": "default",
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
      "start": 359,
      "end": 370,
      "expression": {
        "type": "CallExpression",
        "start": 359,
        "end": 369,
        "callee": {
          "type": "MemberExpression",
          "start": 359,
          "end": 367,
          "object": {
            "type": "Identifier",
            "start": 359,
            "end": 363,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 364,
            "end": 367,
            "decorators": [],
            "name": "def",
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
      "start": 391,
      "end": 403,
      "expression": {
        "type": "CallExpression",
        "start": 391,
        "end": 402,
        "callee": {
          "type": "MemberExpression",
          "start": 391,
          "end": 400,
          "object": {
            "type": "Identifier",
            "start": 391,
            "end": 392,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 393,
            "end": 400,
            "decorators": [],
            "name": "default",
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
      "start": 404,
      "end": 416,
      "expression": {
        "type": "CallExpression",
        "start": 404,
        "end": 415,
        "callee": {
          "type": "MemberExpression",
          "start": 404,
          "end": 413,
          "object": {
            "type": "Identifier",
            "start": 404,
            "end": 405,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 406,
            "end": 413,
            "decorators": [],
            "name": "default",
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
      "start": 417,
      "end": 429,
      "expression": {
        "type": "CallExpression",
        "start": 417,
        "end": 428,
        "callee": {
          "type": "MemberExpression",
          "start": 417,
          "end": 426,
          "object": {
            "type": "Identifier",
            "start": 417,
            "end": 418,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 419,
            "end": 426,
            "decorators": [],
            "name": "default",
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
      "start": 430,
      "end": 442,
      "expression": {
        "type": "CallExpression",
        "start": 430,
        "end": 441,
        "callee": {
          "type": "MemberExpression",
          "start": 430,
          "end": 439,
          "object": {
            "type": "Identifier",
            "start": 430,
            "end": 431,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 432,
            "end": 439,
            "decorators": [],
            "name": "default",
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
      "start": 443,
      "end": 466,
      "expression": {
        "type": "CallExpression",
        "start": 443,
        "end": 465,
        "callee": {
          "type": "MemberExpression",
          "start": 443,
          "end": 463,
          "object": {
            "type": "MemberExpression",
            "start": 443,
            "end": 455,
            "object": {
              "type": "Identifier",
              "start": 443,
              "end": 447,
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 448,
              "end": 455,
              "decorators": [],
              "name": "default",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 456,
            "end": 463,
            "decorators": [],
            "name": "default",
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
      "start": 467,
      "end": 486,
      "expression": {
        "type": "CallExpression",
        "start": 467,
        "end": 485,
        "callee": {
          "type": "MemberExpression",
          "start": 467,
          "end": 483,
          "object": {
            "type": "MemberExpression",
            "start": 467,
            "end": 475,
            "object": {
              "type": "Identifier",
              "start": 467,
              "end": 471,
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 472,
              "end": 475,
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 476,
            "end": 483,
            "decorators": [],
            "name": "default",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
