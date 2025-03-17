__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 481,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 45,
      "end": 82,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 52,
        "end": 82,
        "id": {
          "type": "Identifier",
          "start": 57,
          "end": 73,
          "name": "PositiveInfinity",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 76,
          "end": 81,
          "literal": {
            "type": "Literal",
            "start": 76,
            "end": 81,
            "value": 1e+400,
            "raw": "1e999"
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 83,
      "end": 121,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 90,
        "end": 121,
        "id": {
          "type": "Identifier",
          "start": 95,
          "end": 111,
          "name": "NegativeInfinity",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 114,
          "end": 120,
          "literal": {
            "type": "UnaryExpression",
            "start": 114,
            "end": 120,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 115,
              "end": 120,
              "value": 1e+400,
              "raw": "1e999"
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 123,
      "end": 168,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 130,
        "end": 168,
        "id": {
          "type": "Identifier",
          "start": 135,
          "end": 149,
          "name": "TypeOfInfinity",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 152,
          "end": 167,
          "exprName": {
            "type": "Identifier",
            "start": 159,
            "end": 167,
            "name": "Infinity",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 169,
      "end": 204,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 176,
        "end": 204,
        "id": {
          "type": "Identifier",
          "start": 181,
          "end": 190,
          "name": "TypeOfNaN",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 193,
          "end": 203,
          "exprName": {
            "type": "Identifier",
            "start": 200,
            "end": 203,
            "name": "NaN",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 206,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 212,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 215,
        "end": 220,
        "literal": {
          "type": "Literal",
          "start": 215,
          "end": 220,
          "value": 1e+400,
          "raw": "1e999"
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 222,
      "end": 238,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 228,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 231,
        "end": 237,
        "literal": {
          "type": "Literal",
          "start": 231,
          "end": 237,
          "value": 1e+400,
          "raw": "1e9999"
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 240,
      "end": 257,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 256,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 256,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 253,
              "end": 256,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 255,
                "end": 256,
                "typeName": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 256,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 258,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 274,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 274,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 273,
                "end": 274,
                "typeName": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 277,
      "end": 283,
      "expression": {
        "type": "AssignmentExpression",
        "start": 277,
        "end": 282,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 277,
          "end": 278,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 281,
          "end": 282,
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
      "start": 284,
      "end": 290,
      "expression": {
        "type": "AssignmentExpression",
        "start": 284,
        "end": 289,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 284,
          "end": 285,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 288,
          "end": 289,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 292,
      "end": 305,
      "expression": {
        "type": "AssignmentExpression",
        "start": 292,
        "end": 304,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 292,
          "end": 293,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 296,
          "end": 304,
          "name": "Infinity",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 316,
      "expression": {
        "type": "AssignmentExpression",
        "start": 306,
        "end": 315,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 306,
          "end": 307,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 310,
          "end": 315,
          "value": 1e+400,
          "raw": "1e999"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 317,
      "end": 328,
      "expression": {
        "type": "AssignmentExpression",
        "start": 317,
        "end": 327,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 317,
          "end": 318,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 321,
          "end": 327,
          "value": 1e+400,
          "raw": "1e9999"
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 330,
      "end": 404,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 337,
        "end": 404,
        "id": {
          "type": "Identifier",
          "start": 342,
          "end": 346,
          "name": "Oops",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 349,
          "end": 403,
          "literal": {
            "type": "Literal",
            "start": 349,
            "end": 403,
            "value": 1.2345678912345678e+53,
            "raw": "123456789123456789123456789123456789123456789123456789"
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 405,
      "end": 480,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 412,
        "end": 480,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 418,
            "end": 479,
            "id": {
              "type": "Identifier",
              "start": 418,
              "end": 422,
              "name": "oops",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 425,
              "end": 479,
              "value": 1.2345678912345678e+53,
              "raw": "123456789123456789123456789123456789123456789123456789"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
