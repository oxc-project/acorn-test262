__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 367,
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
      "type": "ClassDeclaration",
      "start": 67,
      "end": 108,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 97,
            "end": 106,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 106,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 106,
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
        "start": 73,
        "end": 81,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 90,
        "end": 94,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 109,
      "end": 150,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 150,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 148,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "decorators": [],
              "name": "biz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 148,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 145,
                "end": 148,
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
        "start": 115,
        "end": 123,
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 132,
        "end": 136,
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
      "start": 152,
      "end": 194,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 164,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 165,
          "end": 182,
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 172,
            "end": 182,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 174,
              "end": 182,
              "literal": {
                "type": "Literal",
                "start": 174,
                "end": 182,
                "raw": "'canvas'",
                "value": "canvas",
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 183,
        "end": 193,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 185,
          "end": 193,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 185,
            "end": 193,
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
      "start": 195,
      "end": 235,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 207,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 208,
          "end": 223,
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 223,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 218,
              "end": 223,
              "literal": {
                "type": "Literal",
                "start": 218,
                "end": 223,
                "raw": "'div'",
                "value": "div",
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 224,
        "end": 234,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 226,
          "end": 234,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 226,
            "end": 234,
            "decorators": [],
            "name": "Derived2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 236,
      "end": 276,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 248,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 249,
          "end": 264,
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 256,
            "end": 264,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 258,
              "end": 264,
              "literal": {
                "type": "Literal",
                "start": 258,
                "end": 264,
                "raw": "'span'",
                "value": "span",
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 265,
        "end": 275,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 267,
          "end": 275,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 267,
            "end": 275,
            "decorators": [],
            "name": "Derived3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 277,
      "end": 313,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 286,
        "end": 289,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 290,
          "end": 305,
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 297,
            "end": 305,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 299,
              "end": 305
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 306,
        "end": 312,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 308,
          "end": 312,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 308,
            "end": 312,
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
      "start": 314,
      "end": 367,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 347,
        "end": 367,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 353,
            "end": 365,
            "argument": {
              "type": "Literal",
              "start": 360,
              "end": 364,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 323,
        "end": 326,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 327,
          "end": 339,
          "decorators": [],
          "name": "tagName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 334,
            "end": 339,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 336,
              "end": 339
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 340,
        "end": 346,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 342,
          "end": 346,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 342,
            "end": 346,
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
