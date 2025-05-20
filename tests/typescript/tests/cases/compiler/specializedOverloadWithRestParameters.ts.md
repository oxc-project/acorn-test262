__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 369,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 24,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 22,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 16,
              "end": 22,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 19,
                "end": 22,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 25,
      "end": 66,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 53,
        "end": 66,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 64,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 64,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 64,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 39,
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 48,
        "end": 52,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 67,
      "end": 114,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 77,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 78,
          "end": 93,
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 85,
            "end": 93,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 87,
              "end": 93,
              "literal": {
                "type": "Literal",
                "start": 87,
                "end": 93,
                "raw": "'span'",
                "value": "span"
              }
            }
          }
        },
        {
          "type": "RestElement",
          "start": 95,
          "end": 102,
          "argument": {
            "type": "Identifier",
            "start": 98,
            "end": 102,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 103,
        "end": 113,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 105,
          "end": 113,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 105,
            "end": 113,
            "decorators": [],
            "name": "Derived1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 126,
      "end": 169,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 137,
          "end": 152,
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 144,
            "end": 152,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 146,
              "end": 152
            }
          }
        },
        {
          "type": "RestElement",
          "start": 154,
          "end": 161,
          "argument": {
            "type": "Identifier",
            "start": 157,
            "end": 161,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 162,
        "end": 168,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 164,
          "end": 168,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 164,
            "end": 168,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 170,
      "end": 221,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 201,
        "end": 221,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 207,
            "end": 219,
            "argument": {
              "type": "Literal",
              "start": 214,
              "end": 218,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 180,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 181,
          "end": 193,
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 188,
            "end": 193,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 190,
              "end": 193
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 194,
        "end": 200,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 196,
          "end": 200,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 196,
            "end": 200,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 222,
      "end": 265,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 232,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 233,
          "end": 248,
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 240,
            "end": 248,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 242,
              "end": 248,
              "literal": {
                "type": "Literal",
                "start": 242,
                "end": 248,
                "raw": "'span'",
                "value": "span"
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 250,
          "end": 253,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 254,
        "end": 264,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 256,
          "end": 264,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 256,
            "end": 264,
            "decorators": [],
            "name": "Derived1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 278,
      "end": 317,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 288,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 289,
          "end": 304,
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 296,
            "end": 304,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 298,
              "end": 304
            }
          }
        },
        {
          "type": "Identifier",
          "start": 306,
          "end": 309,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 310,
        "end": 316,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 312,
          "end": 316,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 312,
            "end": 316,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 318,
      "end": 369,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 349,
        "end": 369,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 355,
            "end": 367,
            "argument": {
              "type": "Literal",
              "start": 362,
              "end": 366,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 327,
        "end": 328,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 329,
          "end": 341,
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 336,
            "end": 341,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 338,
              "end": 341
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 342,
        "end": 348,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 344,
          "end": 348,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 344,
            "end": 348,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
