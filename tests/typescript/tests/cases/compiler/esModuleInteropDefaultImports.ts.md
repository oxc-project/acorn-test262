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
        "decorators": [],
        "name": "mod",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "mod",
        "optional": false,
        "typeAnnotation": null
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
        "end": 19,
        "value": "./a",
        "raw": "\"./a\""
      },
      "phase": null,
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
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
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
        "start": 50,
        "end": 55,
        "value": "./a",
        "raw": "\"./a\""
      },
      "phase": null,
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
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 80,
            "end": 81,
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
        "start": 89,
        "end": 94,
        "value": "./a",
        "raw": "\"./a\""
      },
      "phase": null,
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
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 134,
            "end": 141,
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
        "start": 149,
        "end": 154,
        "value": "./a",
        "raw": "\"./a\""
      },
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 176,
            "end": 179,
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
        "start": 187,
        "end": 192,
        "value": "./a",
        "raw": "\"./a\""
      },
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 201,
          "end": 202,
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
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 210,
          "end": 211,
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
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 219,
          "end": 220,
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
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
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
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 233,
            "end": 240,
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
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 247,
            "end": 254,
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
          "start": 259,
          "end": 267,
          "object": {
            "type": "Identifier",
            "start": 259,
            "end": 263,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 264,
            "end": 267,
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
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 314,
            "end": 321,
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
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 330,
            "end": 333,
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 359,
            "end": 366,
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
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 372,
            "end": 379,
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
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 385,
            "end": 392,
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
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 398,
            "end": 405,
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
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 414,
              "end": 421,
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
            "start": 422,
            "end": 429,
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
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 438,
              "end": 441,
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
            "start": 442,
            "end": 449,
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
