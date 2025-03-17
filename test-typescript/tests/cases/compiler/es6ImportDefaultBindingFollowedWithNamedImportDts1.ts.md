__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 12,
      "end": 29,
      "declaration": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "a",
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
  "end": 535,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 44,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 22,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 22,
            "name": "defaultBinding1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 33,
        "end": 43,
        "value": "./server",
        "raw": "\"./server\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 45,
      "end": 83,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 52,
        "end": 83,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 56,
            "end": 82,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 58,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 61,
              "end": 82,
              "callee": {
                "type": "Identifier",
                "start": 65,
                "end": 80,
                "name": "defaultBinding1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 84,
      "end": 130,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 91,
          "end": 106,
          "local": {
            "type": "Identifier",
            "start": 91,
            "end": 106,
            "name": "defaultBinding2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 110,
          "end": 111,
          "imported": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 119,
        "end": 129,
        "value": "./server",
        "raw": "\"./server\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 131,
      "end": 169,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 138,
        "end": 169,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 142,
            "end": 168,
            "id": {
              "type": "Identifier",
              "start": 142,
              "end": 144,
              "name": "x2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 147,
              "end": 168,
              "callee": {
                "type": "Identifier",
                "start": 151,
                "end": 166,
                "name": "defaultBinding2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 170,
      "end": 221,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 177,
          "end": 192,
          "local": {
            "type": "Identifier",
            "start": 177,
            "end": 192,
            "name": "defaultBinding3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 196,
          "end": 202,
          "imported": {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
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
        "start": 210,
        "end": 220,
        "value": "./server",
        "raw": "\"./server\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 222,
      "end": 260,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 229,
        "end": 260,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 233,
            "end": 259,
            "id": {
              "type": "Identifier",
              "start": 233,
              "end": 235,
              "name": "x3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 238,
              "end": 259,
              "callee": {
                "type": "Identifier",
                "start": 242,
                "end": 257,
                "name": "defaultBinding3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 261,
      "end": 315,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 268,
          "end": 283,
          "local": {
            "type": "Identifier",
            "start": 268,
            "end": 283,
            "name": "defaultBinding4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 287,
          "end": 288,
          "imported": {
            "type": "Identifier",
            "start": 287,
            "end": 288,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 287,
            "end": 288,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 290,
          "end": 296,
          "imported": {
            "type": "Identifier",
            "start": 290,
            "end": 291,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 295,
            "end": 296,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 304,
        "end": 314,
        "value": "./server",
        "raw": "\"./server\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 316,
      "end": 354,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 323,
        "end": 354,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 327,
            "end": 353,
            "id": {
              "type": "Identifier",
              "start": 327,
              "end": 329,
              "name": "x4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 332,
              "end": 353,
              "callee": {
                "type": "Identifier",
                "start": 336,
                "end": 351,
                "name": "defaultBinding4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 355,
      "end": 408,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 362,
          "end": 377,
          "local": {
            "type": "Identifier",
            "start": 362,
            "end": 377,
            "name": "defaultBinding5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 381,
          "end": 387,
          "imported": {
            "type": "Identifier",
            "start": 381,
            "end": 382,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 386,
            "end": 387,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 397,
        "end": 407,
        "value": "./server",
        "raw": "\"./server\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 409,
      "end": 447,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 416,
        "end": 447,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 420,
            "end": 446,
            "id": {
              "type": "Identifier",
              "start": 420,
              "end": 422,
              "name": "x5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 425,
              "end": 446,
              "callee": {
                "type": "Identifier",
                "start": 429,
                "end": 444,
                "name": "defaultBinding5",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 448,
      "end": 496,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 455,
          "end": 470,
          "local": {
            "type": "Identifier",
            "start": 455,
            "end": 470,
            "name": "defaultBinding6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 474,
          "end": 475,
          "imported": {
            "type": "Identifier",
            "start": 474,
            "end": 475,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 474,
            "end": 475,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 485,
        "end": 495,
        "value": "./server",
        "raw": "\"./server\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 497,
      "end": 535,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 504,
        "end": 535,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 508,
            "end": 534,
            "id": {
              "type": "Identifier",
              "start": 508,
              "end": 510,
              "name": "x6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 513,
              "end": 534,
              "callee": {
                "type": "Identifier",
                "start": 517,
                "end": 532,
                "name": "defaultBinding6",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
