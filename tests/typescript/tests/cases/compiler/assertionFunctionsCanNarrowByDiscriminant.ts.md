__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cat",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 24
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "cat",
                  "raw": "'cat'",
                  "start": 26,
                  "end": 31
                },
                "start": 26,
                "end": 31
              },
              "start": 24,
              "end": 31
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 32
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "canMeow",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 44
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 46,
                  "end": 50
                },
                "start": 46,
                "end": 50
              },
              "start": 44,
              "end": 50
            },
            "accessibility": null,
            "static": false,
            "start": 37,
            "end": 51
          }
        ],
        "start": 14,
        "end": 53
      },
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dog",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 68
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "dog",
                  "raw": "'dog'",
                  "start": 81,
                  "end": 86
                },
                "start": 81,
                "end": 86
              },
              "start": 79,
              "end": 86
            },
            "accessibility": null,
            "static": false,
            "start": 75,
            "end": 87
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "canBark",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 99
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 101,
                  "end": 105
                },
                "start": 101,
                "end": 105
              },
              "start": 99,
              "end": 105
            },
            "accessibility": null,
            "static": false,
            "start": 92,
            "end": 106
          }
        ],
        "start": 69,
        "end": 108
      },
      "declare": false,
      "start": 55,
      "end": 108
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 121
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cat",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 127
            },
            "typeArguments": null,
            "start": 124,
            "end": 127
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dog",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 133
            },
            "typeArguments": null,
            "start": 130,
            "end": 133
          }
        ],
        "start": 124,
        "end": 133
      },
      "declare": false,
      "start": 110,
      "end": 134
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertEqual",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 164
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 166
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 165,
            "end": 166
          }
        ],
        "start": 164,
        "end": 167
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 175,
              "end": 178
            },
            "start": 173,
            "end": 178
          },
          "start": 168,
          "end": 178
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 186,
                "end": 187
              },
              "typeArguments": null,
              "start": 186,
              "end": 187
            },
            "start": 184,
            "end": 187
          },
          "start": 180,
          "end": 187
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 203
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 208
              },
              "typeArguments": null,
              "start": 207,
              "end": 208
            },
            "start": 207,
            "end": 208
          },
          "start": 190,
          "end": 208
        },
        "start": 188,
        "end": 208
      },
      "body": null,
      "expression": false,
      "start": 136,
      "end": 209
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "animal",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 223
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 232
                  },
                  "value": {
                    "type": "Literal",
                    "value": "cat",
                    "raw": "'cat'",
                    "start": 234,
                    "end": 239
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 228,
                  "end": 239
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "canMeow",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 241,
                    "end": 248
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 250,
                    "end": 254
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 241,
                  "end": 254
                }
              ],
              "start": 226,
              "end": 256
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 266
              },
              "typeArguments": null,
              "start": 260,
              "end": 266
            },
            "start": 226,
            "end": 266
          },
          "definite": false,
          "start": 217,
          "end": 266
        }
      ],
      "declare": false,
      "start": 211,
      "end": 267
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "assertEqual",
          "optional": false,
          "typeAnnotation": null,
          "start": 268,
          "end": 279
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "animal",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 286
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 291
            },
            "optional": false,
            "computed": false,
            "start": 280,
            "end": 291
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "cat",
              "raw": "'cat'",
              "start": 293,
              "end": 298
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 307
              },
              "typeArguments": null,
              "start": 302,
              "end": 307
            },
            "start": 293,
            "end": 307
          }
        ],
        "optional": false,
        "start": 268,
        "end": 308
      },
      "directive": null,
      "start": 268,
      "end": 309
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "animal",
          "optional": false,
          "typeAnnotation": null,
          "start": 311,
          "end": 317
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "canMeow",
          "optional": false,
          "typeAnnotation": null,
          "start": 318,
          "end": 325
        },
        "optional": false,
        "computed": false,
        "start": 311,
        "end": 325
      },
      "directive": null,
      "start": 311,
      "end": 326
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "animalOrUndef",
            "optional": false,
            "typeAnnotation": null,
            "start": 374,
            "end": 387
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 392,
                    "end": 396
                  },
                  "value": {
                    "type": "Literal",
                    "value": "cat",
                    "raw": "'cat'",
                    "start": 398,
                    "end": 403
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 392,
                  "end": 403
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "canMeow",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 405,
                    "end": 412
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 414,
                    "end": 418
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 405,
                  "end": 418
                }
              ],
              "start": 390,
              "end": 420
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Animal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 424,
                    "end": 430
                  },
                  "typeArguments": null,
                  "start": 424,
                  "end": 430
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 433,
                  "end": 442
                }
              ],
              "start": 424,
              "end": 442
            },
            "start": 390,
            "end": 442
          },
          "definite": false,
          "start": 374,
          "end": 442
        }
      ],
      "declare": false,
      "start": 368,
      "end": 443
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "assertEqual",
          "optional": false,
          "typeAnnotation": null,
          "start": 444,
          "end": 455
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ChainExpression",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "animalOrUndef",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 469
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 471,
                "end": 475
              },
              "optional": true,
              "computed": false,
              "start": 456,
              "end": 475
            },
            "start": 456,
            "end": 475
          },
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "cat",
              "raw": "'cat'",
              "start": 477,
              "end": 482
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 486,
                "end": 491
              },
              "typeArguments": null,
              "start": 486,
              "end": 491
            },
            "start": 477,
            "end": 491
          }
        ],
        "optional": false,
        "start": 444,
        "end": 492
      },
      "directive": null,
      "start": 444,
      "end": 493
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "animalOrUndef",
          "optional": false,
          "typeAnnotation": null,
          "start": 495,
          "end": 508
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "canMeow",
          "optional": false,
          "typeAnnotation": null,
          "start": 509,
          "end": 516
        },
        "optional": false,
        "computed": false,
        "start": 495,
        "end": 516
      },
      "directive": null,
      "start": 495,
      "end": 517
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 557
}
```
