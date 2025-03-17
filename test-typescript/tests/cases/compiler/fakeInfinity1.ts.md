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
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 52,
        "end": 82,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 57,
          "end": 73,
          "decorators": [],
          "name": "PositiveInfinity",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 76,
          "end": 81,
          "literal": {
            "type": "Literal",
            "start": 76,
            "end": 81,
            "raw": "1e999",
            "value": 1e+400
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 83,
      "end": 121,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 90,
        "end": 121,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 95,
          "end": 111,
          "decorators": [],
          "name": "NegativeInfinity",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 114,
          "end": 120,
          "literal": {
            "type": "UnaryExpression",
            "start": 114,
            "end": 120,
            "argument": {
              "type": "Literal",
              "start": 115,
              "end": 120,
              "raw": "1e999",
              "value": 1e+400
            },
            "operator": "-",
            "prefix": true
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 123,
      "end": 168,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 130,
        "end": 168,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 135,
          "end": 149,
          "decorators": [],
          "name": "TypeOfInfinity",
          "optional": false,
          "typeAnnotation": null
        },
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
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 169,
      "end": 204,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 176,
        "end": 204,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 181,
          "end": 190,
          "decorators": [],
          "name": "TypeOfNaN",
          "optional": false,
          "typeAnnotation": null
        },
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
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 206,
      "end": 221,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 212,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 215,
        "end": 220,
        "literal": {
          "type": "Literal",
          "start": 215,
          "end": 220,
          "raw": "1e999",
          "value": 1e+400
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 222,
      "end": 238,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 228,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSLiteralType",
        "start": 231,
        "end": 237,
        "literal": {
          "type": "Literal",
          "start": 231,
          "end": 237,
          "raw": "1e9999",
          "value": 1e+400
        }
      },
      "typeParameters": null
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
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 255,
                  "end": 256,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
          "definite": false,
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 277,
      "end": 283,
      "directive": null,
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 284,
      "end": 290,
      "directive": null,
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 292,
      "end": 305,
      "directive": null,
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 316,
      "directive": null,
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
          "raw": "1e999",
          "value": 1e+400
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 317,
      "end": 328,
      "directive": null,
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
          "raw": "1e9999",
          "value": 1e+400
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 330,
      "end": 404,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 337,
        "end": 404,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 342,
          "end": 346,
          "decorators": [],
          "name": "Oops",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 349,
          "end": 403,
          "literal": {
            "type": "Literal",
            "start": 349,
            "end": 403,
            "raw": "123456789123456789123456789123456789123456789123456789",
            "value": 1.2345678912345678e+53
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 405,
      "end": 480,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 412,
        "end": 480,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 418,
            "end": 479,
            "definite": false,
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
              "raw": "123456789123456789123456789123456789123456789123456789",
              "value": 1.2345678912345678e+53
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
