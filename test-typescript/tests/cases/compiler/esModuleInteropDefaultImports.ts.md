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
        "name": "fun",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 28,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 24,
          "end": 28
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 30,
      "end": 49,
      "declaration": {
        "type": "Identifier",
        "start": 45,
        "end": 48,
        "name": "fun",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
  "end": 44,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "mod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 29,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 28,
          "value": "./mod",
          "raw": "\"./mod\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSExportAssignment",
      "start": 31,
      "end": 44,
      "expression": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
        "name": "mod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
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
  "end": 452,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 20,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 21,
      "end": 56,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 30,
          "end": 42,
          "imported": {
            "type": "Identifier",
            "start": 30,
            "end": 37,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 50,
        "end": 55,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 57,
      "end": 95,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 64,
          "end": 65,
          "local": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 69,
          "end": 81,
          "imported": {
            "type": "Identifier",
            "start": 69,
            "end": 76,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 80,
            "end": 81,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 89,
        "end": 94,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 96,
      "end": 124,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 103,
          "end": 112,
          "local": {
            "type": "Identifier",
            "start": 108,
            "end": 112,
            "name": "self",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 118,
        "end": 123,
        "value": "./b",
        "raw": "\"./b\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 125,
      "end": 155,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 134,
          "end": 141,
          "local": {
            "type": "Identifier",
            "start": 134,
            "end": 141,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 134,
            "end": 141,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 149,
        "end": 154,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 156,
      "end": 193,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 165,
          "end": 179,
          "local": {
            "type": "Identifier",
            "start": 165,
            "end": 172,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 176,
            "end": 179,
            "name": "def",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 187,
        "end": 192,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 195,
      "end": 203,
      "expression": {
        "type": "BinaryExpression",
        "start": 195,
        "end": 202,
        "left": {
          "type": "Identifier",
          "start": 195,
          "end": 196,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 201,
          "end": 202,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 212,
      "expression": {
        "type": "BinaryExpression",
        "start": 204,
        "end": 211,
        "left": {
          "type": "Identifier",
          "start": 204,
          "end": 205,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 210,
          "end": 211,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 213,
      "end": 221,
      "expression": {
        "type": "BinaryExpression",
        "start": 213,
        "end": 220,
        "left": {
          "type": "Identifier",
          "start": 213,
          "end": 214,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 219,
          "end": 220,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 222,
      "end": 241,
      "expression": {
        "type": "BinaryExpression",
        "start": 222,
        "end": 240,
        "left": {
          "type": "Identifier",
          "start": 222,
          "end": 223,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "start": 228,
          "end": 240,
          "object": {
            "type": "Identifier",
            "start": 228,
            "end": 232,
            "name": "self",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 233,
            "end": 240,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 268,
      "expression": {
        "type": "BinaryExpression",
        "start": 242,
        "end": 267,
        "left": {
          "type": "MemberExpression",
          "start": 242,
          "end": 254,
          "object": {
            "type": "Identifier",
            "start": 242,
            "end": 246,
            "name": "self",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 247,
            "end": 254,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "MemberExpression",
          "start": 259,
          "end": 267,
          "object": {
            "type": "Identifier",
            "start": 259,
            "end": 263,
            "name": "self",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 264,
            "end": 267,
            "name": "def",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 289,
      "end": 293,
      "expression": {
        "type": "CallExpression",
        "start": 289,
        "end": 292,
        "callee": {
          "type": "Identifier",
          "start": 289,
          "end": 290,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 294,
      "end": 298,
      "expression": {
        "type": "CallExpression",
        "start": 294,
        "end": 297,
        "callee": {
          "type": "Identifier",
          "start": 294,
          "end": 295,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 299,
      "end": 303,
      "expression": {
        "type": "CallExpression",
        "start": 299,
        "end": 302,
        "callee": {
          "type": "Identifier",
          "start": 299,
          "end": 300,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 304,
      "end": 308,
      "expression": {
        "type": "CallExpression",
        "start": 304,
        "end": 307,
        "callee": {
          "type": "Identifier",
          "start": 304,
          "end": 305,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 309,
      "end": 324,
      "expression": {
        "type": "CallExpression",
        "start": 309,
        "end": 323,
        "callee": {
          "type": "MemberExpression",
          "start": 309,
          "end": 321,
          "object": {
            "type": "Identifier",
            "start": 309,
            "end": 313,
            "name": "self",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 314,
            "end": 321,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 325,
      "end": 336,
      "expression": {
        "type": "CallExpression",
        "start": 325,
        "end": 335,
        "callee": {
          "type": "MemberExpression",
          "start": 325,
          "end": 333,
          "object": {
            "type": "Identifier",
            "start": 325,
            "end": 329,
            "name": "self",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 330,
            "end": 333,
            "name": "def",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 357,
      "end": 369,
      "expression": {
        "type": "CallExpression",
        "start": 357,
        "end": 368,
        "callee": {
          "type": "MemberExpression",
          "start": 357,
          "end": 366,
          "object": {
            "type": "Identifier",
            "start": 357,
            "end": 358,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 359,
            "end": 366,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 370,
      "end": 382,
      "expression": {
        "type": "CallExpression",
        "start": 370,
        "end": 381,
        "callee": {
          "type": "MemberExpression",
          "start": 370,
          "end": 379,
          "object": {
            "type": "Identifier",
            "start": 370,
            "end": 371,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 372,
            "end": 379,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 383,
      "end": 395,
      "expression": {
        "type": "CallExpression",
        "start": 383,
        "end": 394,
        "callee": {
          "type": "MemberExpression",
          "start": 383,
          "end": 392,
          "object": {
            "type": "Identifier",
            "start": 383,
            "end": 384,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 385,
            "end": 392,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 396,
      "end": 408,
      "expression": {
        "type": "CallExpression",
        "start": 396,
        "end": 407,
        "callee": {
          "type": "MemberExpression",
          "start": 396,
          "end": 405,
          "object": {
            "type": "Identifier",
            "start": 396,
            "end": 397,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 398,
            "end": 405,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 409,
      "end": 432,
      "expression": {
        "type": "CallExpression",
        "start": 409,
        "end": 431,
        "callee": {
          "type": "MemberExpression",
          "start": 409,
          "end": 429,
          "object": {
            "type": "MemberExpression",
            "start": 409,
            "end": 421,
            "object": {
              "type": "Identifier",
              "start": 409,
              "end": 413,
              "name": "self",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 414,
              "end": 421,
              "name": "default",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 422,
            "end": 429,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 452,
      "expression": {
        "type": "CallExpression",
        "start": 433,
        "end": 451,
        "callee": {
          "type": "MemberExpression",
          "start": 433,
          "end": 449,
          "object": {
            "type": "MemberExpression",
            "start": 433,
            "end": 441,
            "object": {
              "type": "Identifier",
              "start": 433,
              "end": 437,
              "name": "self",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 438,
              "end": 441,
              "name": "def",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 442,
            "end": 449,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
