__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 368,
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
      "type": "ClassDeclaration",
      "start": 67,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 81,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 90,
        "end": 94,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 95,
        "end": 108,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 97,
            "end": 106,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 100,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 100,
              "end": 106,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 103,
                "end": 106,
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
      "start": 109,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 123,
        "name": "Derived3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 132,
        "end": 136,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 150,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 148,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 142,
              "name": "biz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 148,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 145,
                "end": 148,
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
      "start": 152,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 164,
        "name": "foo",
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
          "start": 165,
          "end": 182,
          "name": "tagName",
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
                "value": "canvas",
                "raw": "'canvas'"
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 183,
        "end": 193,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 185,
          "end": 193,
          "typeName": {
            "type": "Identifier",
            "start": 185,
            "end": 193,
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
      "start": 195,
      "end": 235,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 207,
        "name": "foo",
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
          "start": 208,
          "end": 223,
          "name": "tagName",
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
                "value": "div",
                "raw": "'div'"
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 224,
        "end": 234,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 226,
          "end": 234,
          "typeName": {
            "type": "Identifier",
            "start": 226,
            "end": 234,
            "name": "Derived2",
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
      "start": 236,
      "end": 276,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 248,
        "name": "foo",
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
          "start": 249,
          "end": 264,
          "name": "tagName",
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
                "value": "span",
                "raw": "'span'"
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 265,
        "end": 275,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 267,
          "end": 275,
          "typeName": {
            "type": "Identifier",
            "start": 267,
            "end": 275,
            "name": "Derived3",
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
      "start": 277,
      "end": 313,
      "id": {
        "type": "Identifier",
        "start": 286,
        "end": 289,
        "name": "foo",
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
          "start": 290,
          "end": 305,
          "name": "tagName",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 297,
            "end": 305,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 299,
              "end": 305
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 306,
        "end": 312,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 308,
          "end": 312,
          "typeName": {
            "type": "Identifier",
            "start": 308,
            "end": 312,
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
      "start": 314,
      "end": 367,
      "id": {
        "type": "Identifier",
        "start": 323,
        "end": 326,
        "name": "foo",
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
          "start": 327,
          "end": 339,
          "name": "tagName",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 334,
            "end": 339,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 336,
              "end": 339
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
        "start": 340,
        "end": 346,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 342,
          "end": 346,
          "typeName": {
            "type": "Identifier",
            "start": 342,
            "end": 346,
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
