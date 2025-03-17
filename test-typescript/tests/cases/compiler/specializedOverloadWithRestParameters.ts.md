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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 24,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 22,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 16,
              "end": 22,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 19,
                "end": 22,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 25,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 39,
        "name": "Derived1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 48,
        "end": 52,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 53,
        "end": 66,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 55,
            "end": 64,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 58,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 64,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 64,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 67,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 77,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 78,
          "end": 93,
          "name": "tagName",
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
                "value": "span",
                "raw": "'span'"
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 95,
          "end": 102,
          "argument": {
            "type": "Identifier",
            "start": 98,
            "end": 102,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 103,
        "end": 113,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 105,
          "end": 113,
          "typeName": {
            "type": "Identifier",
            "start": 105,
            "end": 113,
            "name": "Derived1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 126,
      "end": 169,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 137,
          "end": 152,
          "name": "tagName",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 144,
            "end": 152,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 146,
              "end": 152
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 154,
          "end": 161,
          "argument": {
            "type": "Identifier",
            "start": 157,
            "end": 161,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 162,
        "end": 168,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 164,
          "end": 168,
          "typeName": {
            "type": "Identifier",
            "start": 164,
            "end": 168,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 170,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 180,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 181,
          "end": 193,
          "name": "tagName",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 188,
            "end": 193,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 190,
              "end": 193
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 194,
        "end": 200,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 196,
          "end": 200,
          "typeName": {
            "type": "Identifier",
            "start": 196,
            "end": 200,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 222,
      "end": 265,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 232,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 233,
          "end": 248,
          "name": "tagName",
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
                "value": "span",
                "raw": "'span'"
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 250,
          "end": 253,
          "name": "arg",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 254,
        "end": 264,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 256,
          "end": 264,
          "typeName": {
            "type": "Identifier",
            "start": 256,
            "end": 264,
            "name": "Derived1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 278,
      "end": 317,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 288,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 289,
          "end": 304,
          "name": "tagName",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 296,
            "end": 304,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 298,
              "end": 304
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 306,
          "end": 309,
          "name": "arg",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 310,
        "end": 316,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 312,
          "end": 316,
          "typeName": {
            "type": "Identifier",
            "start": 312,
            "end": 316,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 318,
      "end": 369,
      "id": {
        "type": "Identifier",
        "start": 327,
        "end": 328,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 329,
          "end": 341,
          "name": "tagName",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 336,
            "end": 341,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 338,
              "end": 341
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 342,
        "end": 348,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 344,
          "end": 348,
          "typeName": {
            "type": "Identifier",
            "start": 344,
            "end": 348,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
