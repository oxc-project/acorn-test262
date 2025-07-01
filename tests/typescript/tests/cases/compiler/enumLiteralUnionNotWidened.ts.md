__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 27
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 33
            },
            "initializer": {
              "type": "Literal",
              "value": "one",
              "raw": "\"one\"",
              "start": 36,
              "end": 41
            },
            "computed": false,
            "start": 30,
            "end": 41
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "two",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 46
            },
            "initializer": {
              "type": "Literal",
              "value": "two",
              "raw": "\"two\"",
              "start": 49,
              "end": 54
            },
            "computed": false,
            "start": 43,
            "end": 54
          }
        ],
        "start": 28,
        "end": 56
      },
      "const": false,
      "declare": false,
      "start": 21,
      "end": 56
    },
    {
      "type": "EmptyStatement",
      "start": 56,
      "end": 57
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 64
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 70
            },
            "initializer": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 73,
              "end": 78
            },
            "computed": false,
            "start": 67,
            "end": 78
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 83
            },
            "initializer": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 86,
              "end": 91
            },
            "computed": false,
            "start": 80,
            "end": 91
          }
        ],
        "start": 65,
        "end": 93
      },
      "const": false,
      "declare": false,
      "start": 58,
      "end": 93
    },
    {
      "type": "EmptyStatement",
      "start": 93,
      "end": 94
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 102
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 106
            },
            "typeArguments": null,
            "start": 105,
            "end": 106
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 110
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 114
              },
              "start": 109,
              "end": 114
            },
            "typeArguments": null,
            "start": 109,
            "end": 114
          }
        ],
        "start": 105,
        "end": 114
      },
      "declare": false,
      "start": 96,
      "end": 115
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 122
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            "typeArguments": null,
            "start": 125,
            "end": 126
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 129,
              "end": 134
            },
            "start": 129,
            "end": 134
          }
        ],
        "start": 125,
        "end": 134
      },
      "declare": false,
      "start": 116,
      "end": 135
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 147
      },
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
              "start": 148,
              "end": 149
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 148,
            "end": 149
          }
        ],
        "start": 147,
        "end": 150
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "items",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 176
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 178,
                    "end": 179
                  },
                  "typeArguments": null,
                  "start": 178,
                  "end": 179
                },
                "start": 178,
                "end": 181
              },
              "start": 176,
              "end": 181
            },
            "value": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 184,
              "end": 186
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "private",
            "start": 154,
            "end": 187
          }
        ],
        "start": 151,
        "end": 189
      },
      "abstract": false,
      "declare": false,
      "start": 137,
      "end": 189
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asList",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 206
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 207,
              "end": 208
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 207,
            "end": 208
          }
        ],
        "start": 206,
        "end": 209
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                "start": 215,
                "end": 216
              },
              "typeArguments": null,
              "start": 215,
              "end": 216
            },
            "start": 213,
            "end": 216
          },
          "start": 210,
          "end": 216
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "List",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 223
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 225
                },
                "typeArguments": null,
                "start": 224,
                "end": 225
              }
            ],
            "start": 223,
            "end": 226
          },
          "start": 219,
          "end": 226
        },
        "start": 217,
        "end": 226
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 244
              },
              "typeArguments": null,
              "arguments": [],
              "start": 236,
              "end": 246
            },
            "start": 229,
            "end": 247
          }
        ],
        "start": 227,
        "end": 249
      },
      "expression": false,
      "start": 191,
      "end": 249
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 388
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 393
              },
              "typeArguments": null,
              "start": 392,
              "end": 393
            },
            "start": 390,
            "end": 393
          },
          "start": 389,
          "end": 393
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "List",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 400
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 401,
                  "end": 402
                },
                "typeArguments": null,
                "start": 401,
                "end": 402
              }
            ],
            "start": 400,
            "end": 403
          },
          "start": 396,
          "end": 403
        },
        "start": 394,
        "end": 403
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "asList",
                "optional": false,
                "typeAnnotation": null,
                "start": 413,
                "end": 419
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 420,
                  "end": 421
                }
              ],
              "optional": false,
              "start": 413,
              "end": 422
            },
            "start": 406,
            "end": 423
          }
        ],
        "start": 404,
        "end": 425
      },
      "expression": false,
      "start": 376,
      "end": 425
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 514,
        "end": 517
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 521,
                "end": 522
              },
              "typeArguments": null,
              "start": 521,
              "end": 522
            },
            "start": 519,
            "end": 522
          },
          "start": 518,
          "end": 522
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "List",
            "optional": false,
            "typeAnnotation": null,
            "start": 525,
            "end": 529
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 530,
                  "end": 531
                },
                "typeArguments": null,
                "start": 530,
                "end": 531
              }
            ],
            "start": 529,
            "end": 532
          },
          "start": 525,
          "end": 532
        },
        "start": 523,
        "end": 532
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "asList",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 548
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 549,
                  "end": 550
                }
              ],
              "optional": false,
              "start": 542,
              "end": 551
            },
            "start": 535,
            "end": 552
          }
        ],
        "start": 533,
        "end": 554
      },
      "expression": false,
      "start": 505,
      "end": 554
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 554
}
```
