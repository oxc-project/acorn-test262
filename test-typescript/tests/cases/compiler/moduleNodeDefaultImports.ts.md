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
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 25,
        "raw": "\"./mod.cjs\"",
        "value": "./mod.cjs"
      },
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
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 27,
      "end": 68,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 56,
        "end": 67,
        "raw": "\"./mod.cjs\"",
        "value": "./mod.cjs"
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 69,
      "end": 113,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 101,
        "end": 112,
        "raw": "\"./mod.cjs\"",
        "value": "./mod.cjs"
      },
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 114,
      "end": 146,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 136,
        "end": 145,
        "raw": "\"./b.mjs\"",
        "value": "./b.mjs"
      },
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
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 147,
      "end": 183,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 171,
        "end": 182,
        "raw": "\"./mod.cjs\"",
        "value": "./mod.cjs"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 156,
          "end": 163,
          "exported": {
            "type": "Identifier",
            "start": 156,
            "end": 163,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 156,
            "end": 163,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 184,
      "end": 227,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 215,
        "end": 226,
        "raw": "\"./mod.cjs\"",
        "value": "./mod.cjs"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 193,
          "end": 207,
          "exported": {
            "type": "Identifier",
            "start": 204,
            "end": 207,
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 193,
            "end": 200,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 229,
      "end": 237,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 229,
        "end": 236,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 229,
          "end": 230,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 235,
          "end": 236,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 246,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 238,
        "end": 245,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 238,
          "end": 239,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 244,
          "end": 245,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 247,
      "end": 255,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 247,
        "end": 254,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 247,
          "end": 248,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 253,
          "end": 254,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 256,
      "end": 275,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 256,
        "end": 274,
        "operator": "===",
        "left": {
          "type": "Identifier",
          "start": 256,
          "end": 257,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 262,
          "end": 274,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 262,
            "end": 266,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 267,
            "end": 274,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 276,
      "end": 302,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 276,
        "end": 301,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 276,
          "end": 288,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 276,
            "end": 280,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 281,
            "end": 288,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 293,
          "end": 301,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 293,
            "end": 297,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 298,
            "end": 301,
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 323,
      "end": 327,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 323,
        "end": 326,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 328,
      "end": 332,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 328,
        "end": 331,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 328,
          "end": 329,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 333,
      "end": 337,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 333,
        "end": 336,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 333,
          "end": 334,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 338,
      "end": 342,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 338,
        "end": 341,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 338,
          "end": 339,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 343,
      "end": 358,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 343,
        "end": 357,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 343,
          "end": 355,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 343,
            "end": 347,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 348,
            "end": 355,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 359,
      "end": 370,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 359,
        "end": 369,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 359,
          "end": 367,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 359,
            "end": 363,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 364,
            "end": 367,
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 391,
      "end": 403,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 391,
        "end": 402,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 391,
          "end": 400,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 391,
            "end": 392,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 393,
            "end": 400,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 404,
      "end": 416,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 404,
        "end": 415,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 404,
          "end": 413,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 404,
            "end": 405,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 406,
            "end": 413,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 417,
      "end": 429,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 417,
        "end": 428,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 417,
          "end": 426,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 417,
            "end": 418,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 419,
            "end": 426,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 430,
      "end": 442,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 430,
        "end": 441,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 430,
          "end": 439,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 430,
            "end": 431,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 432,
            "end": 439,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 443,
      "end": 466,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 443,
        "end": 465,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 443,
          "end": 463,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 443,
            "end": 455,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 443,
              "end": 447,
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 448,
              "end": 455,
              "decorators": [],
              "name": "default",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 456,
            "end": 463,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 467,
      "end": 486,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 467,
        "end": 485,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 467,
          "end": 483,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 467,
            "end": 475,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 467,
              "end": 471,
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 472,
              "end": 475,
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 476,
            "end": 483,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
