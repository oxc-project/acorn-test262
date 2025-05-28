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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 12,
      "end": 29,
      "declaration": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "a",
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
            "decorators": [],
            "name": "defaultBinding1",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 56,
            "end": 82,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 58,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 61,
              "end": 82,
              "callee": {
                "type": "Identifier",
                "start": 65,
                "end": 80,
                "decorators": [],
                "name": "defaultBinding1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 142,
            "end": 168,
            "id": {
              "type": "Identifier",
              "start": 142,
              "end": 144,
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 147,
              "end": 168,
              "callee": {
                "type": "Identifier",
                "start": 151,
                "end": 166,
                "decorators": [],
                "name": "defaultBinding2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
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
        "start": 210,
        "end": 220,
        "value": "./server",
        "raw": "\"./server\""
      },
      "phase": null,
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 233,
            "end": 259,
            "id": {
              "type": "Identifier",
              "start": 233,
              "end": 235,
              "decorators": [],
              "name": "x3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 238,
              "end": 259,
              "callee": {
                "type": "Identifier",
                "start": 242,
                "end": 257,
                "decorators": [],
                "name": "defaultBinding3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 287,
            "end": 288,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 295,
            "end": 296,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 327,
            "end": 353,
            "id": {
              "type": "Identifier",
              "start": 327,
              "end": 329,
              "decorators": [],
              "name": "x4",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 332,
              "end": 353,
              "callee": {
                "type": "Identifier",
                "start": 336,
                "end": 351,
                "decorators": [],
                "name": "defaultBinding4",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 386,
            "end": 387,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 420,
            "end": 446,
            "id": {
              "type": "Identifier",
              "start": 420,
              "end": 422,
              "decorators": [],
              "name": "x5",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 425,
              "end": 446,
              "callee": {
                "type": "Identifier",
                "start": 429,
                "end": 444,
                "decorators": [],
                "name": "defaultBinding5",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 474,
            "end": 475,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 508,
            "end": 534,
            "id": {
              "type": "Identifier",
              "start": 508,
              "end": 510,
              "decorators": [],
              "name": "x6",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 513,
              "end": 534,
              "callee": {
                "type": "Identifier",
                "start": 517,
                "end": 532,
                "decorators": [],
                "name": "defaultBinding6",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
