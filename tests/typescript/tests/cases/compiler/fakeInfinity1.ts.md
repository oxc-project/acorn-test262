__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 480,
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
          "decorators": [],
          "name": "PositiveInfinity",
          "optional": false,
          "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "NegativeInfinity",
          "optional": false,
          "typeAnnotation": null
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
            "argument": {
              "type": "Literal",
              "start": 115,
              "end": 120,
              "value": 1e+400,
              "raw": "1e999"
            },
            "prefix": true
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "TypeOfInfinity",
          "optional": false,
          "typeAnnotation": null
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
            "decorators": [],
            "name": "Infinity",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "TypeOfNaN",
          "optional": false,
          "typeAnnotation": null
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
            "decorators": [],
            "name": "NaN",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 206,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 212,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 256,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 256,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 258,
      "end": 275,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 274,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 281,
          "end": 282,
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
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 288,
          "end": 289,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 296,
          "end": 304,
          "decorators": [],
          "name": "Infinity",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "Oops",
          "optional": false,
          "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 405,
      "end": 480,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 412,
        "end": 480,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 418,
            "end": 479,
            "id": {
              "type": "Identifier",
              "start": 418,
              "end": 422,
              "decorators": [],
              "name": "oops",
              "optional": false,
              "typeAnnotation": null
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
