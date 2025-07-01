__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PositiveInfinity",
          "optional": false,
          "typeAnnotation": null,
          "start": 57,
          "end": 73
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1e+400,
            "raw": "1e999",
            "start": 76,
            "end": 81
          },
          "start": 76,
          "end": 81
        },
        "declare": false,
        "start": 52,
        "end": 82
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 45,
      "end": 82
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NegativeInfinity",
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 111
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": 1e+400,
              "raw": "1e999",
              "start": 115,
              "end": 120
            },
            "prefix": true,
            "start": 114,
            "end": 120
          },
          "start": 114,
          "end": 120
        },
        "declare": false,
        "start": 90,
        "end": 121
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 83,
      "end": 121
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeOfInfinity",
          "optional": false,
          "typeAnnotation": null,
          "start": 135,
          "end": 149
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Infinity",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 167
          },
          "typeArguments": null,
          "start": 152,
          "end": 167
        },
        "declare": false,
        "start": 130,
        "end": 168
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 123,
      "end": 168
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeOfNaN",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 190
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "NaN",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 203
          },
          "typeArguments": null,
          "start": 193,
          "end": 203
        },
        "declare": false,
        "start": 176,
        "end": 204
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 169,
      "end": 204
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 212
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": 1e+400,
          "raw": "1e999",
          "start": 215,
          "end": 220
        },
        "start": 215,
        "end": 220
      },
      "declare": false,
      "start": 206,
      "end": 221
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 227,
        "end": 228
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": 1e+400,
          "raw": "1e9999",
          "start": 231,
          "end": 237
        },
        "start": 231,
        "end": 237
      },
      "declare": false,
      "start": 222,
      "end": 238
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 255,
                  "end": 256
                },
                "typeArguments": null,
                "start": 255,
                "end": 256
              },
              "start": 253,
              "end": 256
            },
            "start": 252,
            "end": 256
          },
          "init": null,
          "definite": false,
          "start": 252,
          "end": 256
        }
      ],
      "declare": true,
      "start": 240,
      "end": 257
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 274
                },
                "typeArguments": null,
                "start": 273,
                "end": 274
              },
              "start": 271,
              "end": 274
            },
            "start": 270,
            "end": 274
          },
          "init": null,
          "definite": false,
          "start": 270,
          "end": 274
        }
      ],
      "declare": true,
      "start": 258,
      "end": 275
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 277,
          "end": 278
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 281,
          "end": 282
        },
        "start": 277,
        "end": 282
      },
      "directive": null,
      "start": 277,
      "end": 283
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 284,
          "end": 285
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 288,
          "end": 289
        },
        "start": 284,
        "end": 289
      },
      "directive": null,
      "start": 284,
      "end": 290
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 292,
          "end": 293
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Infinity",
          "optional": false,
          "typeAnnotation": null,
          "start": 296,
          "end": 304
        },
        "start": 292,
        "end": 304
      },
      "directive": null,
      "start": 292,
      "end": 305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 306,
          "end": 307
        },
        "right": {
          "type": "Literal",
          "value": 1e+400,
          "raw": "1e999",
          "start": 310,
          "end": 315
        },
        "start": 306,
        "end": 315
      },
      "directive": null,
      "start": 306,
      "end": 316
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 317,
          "end": 318
        },
        "right": {
          "type": "Literal",
          "value": 1e+400,
          "raw": "1e9999",
          "start": 321,
          "end": 327
        },
        "start": 317,
        "end": 327
      },
      "directive": null,
      "start": 317,
      "end": 328
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Oops",
          "optional": false,
          "typeAnnotation": null,
          "start": 342,
          "end": 346
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1.2345678912345678e+53,
            "raw": "123456789123456789123456789123456789123456789123456789",
            "start": 349,
            "end": 403
          },
          "start": 349,
          "end": 403
        },
        "declare": false,
        "start": 337,
        "end": 404
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 330,
      "end": 404
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oops",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 422
            },
            "init": {
              "type": "Literal",
              "value": 1.2345678912345678e+53,
              "raw": "123456789123456789123456789123456789123456789123456789",
              "start": 425,
              "end": 479
            },
            "definite": false,
            "start": 418,
            "end": 479
          }
        ],
        "declare": false,
        "start": 412,
        "end": 480
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 405,
      "end": 480
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 480
}
```
