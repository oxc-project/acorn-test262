__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 360,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 24,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 40,
        "name": "Animal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 41,
        "end": 55,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 43,
            "end": 53,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 49,
              "name": "animal",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 53,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 51,
                "end": 53,
                "members": []
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 55,
      "end": 56
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 70,
        "name": "Dog",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 79,
          "end": 85,
          "expression": {
            "type": "Identifier",
            "start": 79,
            "end": 85,
            "name": "Animal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 86,
        "end": 97,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 88,
            "end": 95,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 91,
              "name": "dog",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 93,
                "end": 95,
                "members": []
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 98,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 111,
        "name": "Cat",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 120,
          "end": 126,
          "expression": {
            "type": "Identifier",
            "start": 120,
            "end": 126,
            "name": "Animal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 127,
        "end": 138,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 129,
            "end": 136,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "name": "cat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 134,
                "end": 136,
                "members": []
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 139,
      "end": 183,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 154,
        "name": "Moose",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 163,
          "end": 169,
          "expression": {
            "type": "Identifier",
            "start": 163,
            "end": 169,
            "name": "Animal",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 170,
        "end": 183,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 172,
            "end": 181,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 177,
              "name": "moose",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 179,
                "end": 181,
                "members": []
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 185,
      "end": 217,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 201,
        "name": "doThing",
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
          "start": 202,
          "end": 210,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 203,
            "end": 210,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 205,
              "end": 210,
              "literal": {
                "type": "Literal",
                "start": 205,
                "end": 210,
                "value": "dog",
                "raw": "\"dog\""
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
        "start": 211,
        "end": 216,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 213,
          "end": 216,
          "typeName": {
            "type": "Identifier",
            "start": 213,
            "end": 216,
            "name": "Dog",
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
      "start": 218,
      "end": 250,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 234,
        "name": "doThing",
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
          "start": 235,
          "end": 243,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 236,
            "end": 243,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 238,
              "end": 243,
              "literal": {
                "type": "Literal",
                "start": 238,
                "end": 243,
                "value": "cat",
                "raw": "\"cat\""
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
        "start": 244,
        "end": 249,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 246,
          "end": 249,
          "typeName": {
            "type": "Identifier",
            "start": 246,
            "end": 249,
            "name": "Cat",
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
      "start": 251,
      "end": 287,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 267,
        "name": "doThing",
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
          "start": 268,
          "end": 277,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 269,
            "end": 277,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 271,
              "end": 277
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
        "start": 278,
        "end": 286,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 280,
          "end": 286,
          "typeName": {
            "type": "Identifier",
            "start": 280,
            "end": 286,
            "name": "Animal",
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
      "start": 288,
      "end": 360,
      "id": {
        "type": "Identifier",
        "start": 297,
        "end": 304,
        "name": "doThing",
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
          "start": 305,
          "end": 314,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 306,
            "end": 314,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 308,
              "end": 314
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 316,
          "end": 326,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 318,
            "end": 326,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 320,
              "end": 326
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 335,
        "end": 360,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 341,
            "end": 358,
            "argument": {
              "type": "Identifier",
              "start": 348,
              "end": 357,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 327,
        "end": 334,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 329,
          "end": 334,
          "typeName": {
            "type": "Identifier",
            "start": 329,
            "end": 334,
            "name": "Moose",
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
