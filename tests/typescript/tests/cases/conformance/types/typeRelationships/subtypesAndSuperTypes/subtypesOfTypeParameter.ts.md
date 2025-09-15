__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 73
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
              "start": 74,
              "end": 75
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 74,
            "end": 75
          }
        ],
        "start": 73,
        "end": 76
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 86
            },
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
                  "start": 88,
                  "end": 89
                },
                "typeArguments": null,
                "start": 88,
                "end": 89
              },
              "start": 86,
              "end": 89
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 83,
            "end": 90
          }
        ],
        "start": 77,
        "end": 92
      },
      "abstract": false,
      "declare": false,
      "start": 65,
      "end": 92
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D1",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 102
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
              "start": 103,
              "end": 104
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 103,
            "end": 104
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 106,
            "end": 107
          }
        ],
        "start": 102,
        "end": 108
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 119
      },
      "superTypeArguments": {
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
              "start": 120,
              "end": 121
            },
            "typeArguments": null,
            "start": 120,
            "end": 121
          }
        ],
        "start": 119,
        "end": 122
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 132
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 135
                },
                "typeArguments": null,
                "start": 134,
                "end": 135
              },
              "start": 132,
              "end": 135
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 129,
            "end": 136
          }
        ],
        "start": 123,
        "end": 147
      },
      "abstract": false,
      "declare": false,
      "start": 94,
      "end": 147
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 160
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
              "start": 161,
              "end": 162
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 161,
            "end": 162
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 165
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 164,
            "end": 165
          }
        ],
        "start": 160,
        "end": 166
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 171
              },
              "typeArguments": null,
              "start": 170,
              "end": 171
            },
            "start": 168,
            "end": 171
          },
          "start": 167,
          "end": 171
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 177
              },
              "typeArguments": null,
              "start": 176,
              "end": 177
            },
            "start": 174,
            "end": 177
          },
          "start": 173,
          "end": 177
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 190
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 193,
                    "end": 197
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 201
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 205
                  },
                  "start": 193,
                  "end": 205
                },
                "definite": false,
                "start": 189,
                "end": 205
              }
            ],
            "declare": false,
            "start": 185,
            "end": 206
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 225
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 228,
                    "end": 232
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 236
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 240
                  },
                  "start": 228,
                  "end": 240
                },
                "definite": false,
                "start": 224,
                "end": 240
              }
            ],
            "declare": false,
            "start": 220,
            "end": 241
          }
        ],
        "start": 179,
        "end": 252
      },
      "expression": false,
      "start": 149,
      "end": 252
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 266
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 272
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 274,
                "end": 280
              },
              "start": 272,
              "end": 280
            },
            "accessibility": null,
            "static": false,
            "start": 269,
            "end": 281
          }
        ],
        "start": 267,
        "end": 283
      },
      "declare": false,
      "start": 254,
      "end": 283
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 290,
        "end": 292
      },
      "typeParameters": null,
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 298
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 300,
                "end": 306
              },
              "start": 298,
              "end": 306
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 295,
            "end": 307
          }
        ],
        "start": 293,
        "end": 309
      },
      "abstract": false,
      "declare": false,
      "start": 284,
      "end": 309
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 316,
        "end": 318
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
              "start": 319,
              "end": 320
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 319,
            "end": 320
          }
        ],
        "start": 318,
        "end": 321
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 327
            },
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
                  "start": 329,
                  "end": 330
                },
                "typeArguments": null,
                "start": 329,
                "end": 330
              },
              "start": 327,
              "end": 330
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 324,
            "end": 331
          }
        ],
        "start": 322,
        "end": 333
      },
      "abstract": false,
      "declare": false,
      "start": 310,
      "end": 333
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 339,
        "end": 340
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 344
            },
            "initializer": null,
            "computed": false,
            "start": 343,
            "end": 344
          }
        ],
        "start": 341,
        "end": 346
      },
      "const": false,
      "declare": false,
      "start": 334,
      "end": 346
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 357
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 360,
        "end": 363
      },
      "expression": false,
      "start": 347,
      "end": 363
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 374,
        "end": 375
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 396
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 399,
                    "end": 400
                  },
                  "definite": false,
                  "start": 393,
                  "end": 400
                }
              ],
              "declare": false,
              "start": 389,
              "end": 401
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 382,
            "end": 401
          }
        ],
        "start": 376,
        "end": 403
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 364,
      "end": 403
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 410,
        "end": 411
      },
      "typeParameters": null,
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 417
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 419,
                "end": 425
              },
              "start": 417,
              "end": 425
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 414,
            "end": 425
          }
        ],
        "start": 412,
        "end": 427
      },
      "abstract": false,
      "declare": false,
      "start": 404,
      "end": 427
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 438,
        "end": 439
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 457,
                    "end": 460
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 463,
                    "end": 464
                  },
                  "definite": false,
                  "start": 457,
                  "end": 464
                }
              ],
              "declare": false,
              "start": 453,
              "end": 465
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 446,
            "end": 465
          }
        ],
        "start": 440,
        "end": 467
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 428,
      "end": 467
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 499,
        "end": 501
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
              "start": 502,
              "end": 503
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 502,
            "end": 503
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 506
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 505,
            "end": 506
          }
        ],
        "start": 501,
        "end": 507
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 512
              },
              "typeArguments": null,
              "start": 511,
              "end": 512
            },
            "start": 509,
            "end": 512
          },
          "start": 508,
          "end": 512
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 518
              },
              "typeArguments": null,
              "start": 517,
              "end": 518
            },
            "start": 515,
            "end": 518
          },
          "start": 514,
          "end": 518
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 530,
                  "end": 532
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 535,
                    "end": 539
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 542,
                    "end": 543
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 546,
                    "end": 550
                  },
                  "start": 535,
                  "end": 550
                },
                "definite": false,
                "start": 530,
                "end": 550
              }
            ],
            "declare": false,
            "start": 526,
            "end": 551
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 560,
                  "end": 562
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 565,
                    "end": 569
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 572,
                    "end": 576
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 579,
                    "end": 580
                  },
                  "start": 565,
                  "end": 580
                },
                "definite": false,
                "start": 560,
                "end": 580
              }
            ],
            "declare": false,
            "start": 556,
            "end": 581
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 601,
                        "end": 610
                      },
                      "typeArguments": null,
                      "start": 594,
                      "end": 610
                    },
                    "start": 592,
                    "end": 610
                  },
                  "start": 591,
                  "end": 610
                },
                "init": null,
                "definite": false,
                "start": 591,
                "end": 610
              }
            ],
            "declare": false,
            "start": 587,
            "end": 611
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r0b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 620,
                  "end": 623
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 626,
                    "end": 630
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 634
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 637,
                    "end": 638
                  },
                  "start": 626,
                  "end": 638
                },
                "definite": false,
                "start": 620,
                "end": 638
              }
            ],
            "declare": false,
            "start": 616,
            "end": 639
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r0b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 648,
                  "end": 651
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 654,
                    "end": 658
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 661,
                    "end": 662
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 665,
                    "end": 666
                  },
                  "start": 654,
                  "end": 666
                },
                "definite": false,
                "start": 648,
                "end": 666
              }
            ],
            "declare": false,
            "start": 644,
            "end": 667
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 677,
                  "end": 679
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 682,
                    "end": 686
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 689,
                    "end": 690
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 693,
                    "end": 694
                  },
                  "start": 682,
                  "end": 694
                },
                "definite": false,
                "start": 677,
                "end": 694
              }
            ],
            "declare": false,
            "start": 673,
            "end": 695
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 707
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 710,
                    "end": 714
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 717,
                    "end": 718
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 721,
                    "end": 722
                  },
                  "start": 710,
                  "end": 722
                },
                "definite": false,
                "start": 705,
                "end": 722
              }
            ],
            "declare": false,
            "start": 701,
            "end": 723
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 733,
                  "end": 735
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 738,
                    "end": 742
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 745,
                    "end": 747
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 750,
                    "end": 751
                  },
                  "start": 738,
                  "end": 751
                },
                "definite": false,
                "start": 733,
                "end": 751
              }
            ],
            "declare": false,
            "start": 729,
            "end": 752
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 761,
                  "end": 763
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 766,
                    "end": 770
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 773,
                    "end": 774
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 777,
                    "end": 779
                  },
                  "start": 766,
                  "end": 779
                },
                "definite": false,
                "start": 761,
                "end": 779
              }
            ],
            "declare": false,
            "start": 757,
            "end": 780
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 790,
                  "end": 792
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 795,
                    "end": 799
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 802,
                    "end": 806
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 809,
                    "end": 810
                  },
                  "start": 795,
                  "end": 810
                },
                "definite": false,
                "start": 790,
                "end": 810
              }
            ],
            "declare": false,
            "start": 786,
            "end": 811
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 820,
                  "end": 822
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 825,
                    "end": 829
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 832,
                    "end": 833
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 836,
                    "end": 840
                  },
                  "start": 825,
                  "end": 840
                },
                "definite": false,
                "start": 820,
                "end": 840
              }
            ],
            "declare": false,
            "start": 816,
            "end": 841
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 851,
                  "end": 853
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 856,
                    "end": 860
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 867,
                      "end": 871
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 863,
                    "end": 873
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 876,
                    "end": 877
                  },
                  "start": 856,
                  "end": 877
                },
                "definite": false,
                "start": 851,
                "end": 877
              }
            ],
            "declare": false,
            "start": 847,
            "end": 878
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 887,
                  "end": 889
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 892,
                    "end": 896
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 899,
                    "end": 900
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 907,
                      "end": 911
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 903,
                    "end": 913
                  },
                  "start": 892,
                  "end": 913
                },
                "definite": false,
                "start": 887,
                "end": 913
              }
            ],
            "declare": false,
            "start": 883,
            "end": 914
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 924,
                  "end": 926
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 929,
                    "end": 933
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": null,
                    "raw": "/1/",
                    "regex": {
                      "pattern": "1",
                      "flags": ""
                    },
                    "start": 936,
                    "end": 939
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 942,
                    "end": 943
                  },
                  "start": 929,
                  "end": 943
                },
                "definite": false,
                "start": 924,
                "end": 943
              }
            ],
            "declare": false,
            "start": 920,
            "end": 944
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 953,
                  "end": 955
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 958,
                    "end": 962
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 965,
                    "end": 966
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": null,
                    "raw": "/1/",
                    "regex": {
                      "pattern": "1",
                      "flags": ""
                    },
                    "start": 969,
                    "end": 972
                  },
                  "start": 958,
                  "end": 972
                },
                "definite": false,
                "start": 953,
                "end": 972
              }
            ],
            "declare": false,
            "start": 949,
            "end": 973
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 983,
                  "end": 985
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 988,
                    "end": 992
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 997,
                          "end": 1000
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1002,
                          "end": 1003
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 997,
                        "end": 1003
                      }
                    ],
                    "start": 995,
                    "end": 1005
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1008,
                    "end": 1009
                  },
                  "start": 988,
                  "end": 1009
                },
                "definite": false,
                "start": 983,
                "end": 1009
              }
            ],
            "declare": false,
            "start": 979,
            "end": 1010
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1019,
                  "end": 1021
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1024,
                    "end": 1028
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1031,
                    "end": 1032
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1037,
                          "end": 1040
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1042,
                          "end": 1043
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1037,
                        "end": 1043
                      }
                    ],
                    "start": 1035,
                    "end": 1045
                  },
                  "start": 1024,
                  "end": 1045
                },
                "definite": false,
                "start": 1019,
                "end": 1045
              }
            ],
            "declare": false,
            "start": 1015,
            "end": 1046
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1056,
                  "end": 1058
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1061,
                    "end": 1065
                  },
                  "consequent": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1074,
                      "end": 1077
                    },
                    "id": null,
                    "generator": false,
                    "start": 1068,
                    "end": 1077
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1080,
                    "end": 1081
                  },
                  "start": 1061,
                  "end": 1081
                },
                "definite": false,
                "start": 1056,
                "end": 1081
              }
            ],
            "declare": false,
            "start": 1052,
            "end": 1082
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1091,
                  "end": 1093
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1096,
                    "end": 1100
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1103,
                    "end": 1104
                  },
                  "alternate": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1113,
                      "end": 1116
                    },
                    "id": null,
                    "generator": false,
                    "start": 1107,
                    "end": 1116
                  },
                  "start": 1096,
                  "end": 1116
                },
                "definite": false,
                "start": 1091,
                "end": 1116
              }
            ],
            "declare": false,
            "start": 1087,
            "end": 1117
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1127,
                  "end": 1129
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1132,
                    "end": 1136
                  },
                  "consequent": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
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
                            "start": 1140,
                            "end": 1141
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1140,
                          "end": 1141
                        }
                      ],
                      "start": 1139,
                      "end": 1142
                    },
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1146,
                              "end": 1147
                            },
                            "typeArguments": null,
                            "start": 1146,
                            "end": 1147
                          },
                          "start": 1144,
                          "end": 1147
                        },
                        "start": 1143,
                        "end": 1147
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1161,
                            "end": 1162
                          },
                          "start": 1154,
                          "end": 1162
                        }
                      ],
                      "start": 1152,
                      "end": 1164
                    },
                    "id": null,
                    "generator": false,
                    "start": 1139,
                    "end": 1164
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1167,
                    "end": 1168
                  },
                  "start": 1132,
                  "end": 1168
                },
                "definite": false,
                "start": 1127,
                "end": 1168
              }
            ],
            "declare": false,
            "start": 1123,
            "end": 1169
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r8b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1178,
                  "end": 1181
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1184,
                    "end": 1188
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1191,
                    "end": 1192
                  },
                  "alternate": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
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
                            "start": 1196,
                            "end": 1197
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1196,
                          "end": 1197
                        }
                      ],
                      "start": 1195,
                      "end": 1198
                    },
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1202,
                              "end": 1203
                            },
                            "typeArguments": null,
                            "start": 1202,
                            "end": 1203
                          },
                          "start": 1200,
                          "end": 1203
                        },
                        "start": 1199,
                        "end": 1203
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1217,
                            "end": 1218
                          },
                          "start": 1210,
                          "end": 1218
                        }
                      ],
                      "start": 1208,
                      "end": 1220
                    },
                    "id": null,
                    "generator": false,
                    "start": 1195,
                    "end": 1220
                  },
                  "start": 1184,
                  "end": 1220
                },
                "definite": false,
                "start": 1178,
                "end": 1220
              }
            ],
            "declare": false,
            "start": 1174,
            "end": 1221
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1288,
                        "end": 1290
                      },
                      "typeArguments": null,
                      "start": 1288,
                      "end": 1290
                    },
                    "start": 1286,
                    "end": 1290
                  },
                  "start": 1284,
                  "end": 1290
                },
                "init": null,
                "definite": false,
                "start": 1284,
                "end": 1290
              }
            ],
            "declare": false,
            "start": 1280,
            "end": 1291
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1300,
                  "end": 1302
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1305,
                    "end": 1309
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1312,
                    "end": 1314
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1317,
                    "end": 1318
                  },
                  "start": 1305,
                  "end": 1318
                },
                "definite": false,
                "start": 1300,
                "end": 1318
              }
            ],
            "declare": false,
            "start": 1296,
            "end": 1319
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1328,
                  "end": 1330
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1333,
                    "end": 1337
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1340,
                    "end": 1341
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1344,
                    "end": 1346
                  },
                  "start": 1333,
                  "end": 1346
                },
                "definite": false,
                "start": 1328,
                "end": 1346
              }
            ],
            "declare": false,
            "start": 1324,
            "end": 1347
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1361,
                        "end": 1363
                      },
                      "typeArguments": null,
                      "start": 1361,
                      "end": 1363
                    },
                    "start": 1359,
                    "end": 1363
                  },
                  "start": 1357,
                  "end": 1363
                },
                "init": null,
                "definite": false,
                "start": 1357,
                "end": 1363
              }
            ],
            "declare": false,
            "start": 1353,
            "end": 1364
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1373,
                  "end": 1376
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1379,
                    "end": 1383
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1386,
                    "end": 1388
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1391,
                    "end": 1392
                  },
                  "start": 1379,
                  "end": 1392
                },
                "definite": false,
                "start": 1373,
                "end": 1392
              }
            ],
            "declare": false,
            "start": 1369,
            "end": 1393
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1402,
                  "end": 1405
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1408,
                    "end": 1412
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1415,
                    "end": 1416
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1419,
                    "end": 1421
                  },
                  "start": 1408,
                  "end": 1421
                },
                "definite": false,
                "start": 1402,
                "end": 1421
              }
            ],
            "declare": false,
            "start": 1398,
            "end": 1422
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1437,
                        "end": 1439
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1440,
                            "end": 1446
                          }
                        ],
                        "start": 1439,
                        "end": 1447
                      },
                      "start": 1437,
                      "end": 1447
                    },
                    "start": 1435,
                    "end": 1447
                  },
                  "start": 1433,
                  "end": 1447
                },
                "init": null,
                "definite": false,
                "start": 1433,
                "end": 1447
              }
            ],
            "declare": false,
            "start": 1429,
            "end": 1448
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1457,
                  "end": 1460
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1463,
                    "end": 1467
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1470,
                    "end": 1472
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1475,
                    "end": 1476
                  },
                  "start": 1463,
                  "end": 1476
                },
                "definite": false,
                "start": 1457,
                "end": 1476
              }
            ],
            "declare": false,
            "start": 1453,
            "end": 1477
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1486,
                  "end": 1489
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1492,
                    "end": 1496
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1499,
                    "end": 1500
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1503,
                    "end": 1505
                  },
                  "start": 1492,
                  "end": 1505
                },
                "definite": false,
                "start": 1486,
                "end": 1505
              }
            ],
            "declare": false,
            "start": 1482,
            "end": 1506
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r13",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1517,
                  "end": 1520
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1523,
                    "end": 1527
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1530,
                    "end": 1531
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1534,
                    "end": 1535
                  },
                  "start": 1523,
                  "end": 1535
                },
                "definite": false,
                "start": 1517,
                "end": 1535
              }
            ],
            "declare": false,
            "start": 1513,
            "end": 1536
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r13",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1545,
                  "end": 1548
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1551,
                    "end": 1555
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1558,
                    "end": 1559
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1562,
                    "end": 1563
                  },
                  "start": 1551,
                  "end": 1563
                },
                "definite": false,
                "start": 1545,
                "end": 1563
              }
            ],
            "declare": false,
            "start": 1541,
            "end": 1564
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r14",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1574,
                  "end": 1577
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1580,
                    "end": 1584
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1587,
                      "end": 1588
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1589,
                      "end": 1590
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1587,
                    "end": 1590
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1593,
                    "end": 1594
                  },
                  "start": 1580,
                  "end": 1594
                },
                "definite": false,
                "start": 1574,
                "end": 1594
              }
            ],
            "declare": false,
            "start": 1570,
            "end": 1595
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r14",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1604,
                  "end": 1607
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1610,
                    "end": 1614
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1617,
                    "end": 1618
                  },
                  "alternate": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1621,
                      "end": 1622
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1623,
                      "end": 1624
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1621,
                    "end": 1624
                  },
                  "start": 1610,
                  "end": 1624
                },
                "definite": false,
                "start": 1604,
                "end": 1624
              }
            ],
            "declare": false,
            "start": 1600,
            "end": 1625
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "af",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1646,
                        "end": 1647
                      },
                      "typeArguments": null,
                      "start": 1639,
                      "end": 1647
                    },
                    "start": 1637,
                    "end": 1647
                  },
                  "start": 1635,
                  "end": 1647
                },
                "init": null,
                "definite": false,
                "start": 1635,
                "end": 1647
              }
            ],
            "declare": false,
            "start": 1631,
            "end": 1648
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r15",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1657,
                  "end": 1660
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1663,
                    "end": 1667
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "af",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1670,
                    "end": 1672
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1675,
                    "end": 1676
                  },
                  "start": 1663,
                  "end": 1676
                },
                "definite": false,
                "start": 1657,
                "end": 1676
              }
            ],
            "declare": false,
            "start": 1653,
            "end": 1677
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r15",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1686,
                  "end": 1689
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1692,
                    "end": 1696
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1699,
                    "end": 1700
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "af",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1703,
                    "end": 1705
                  },
                  "start": 1692,
                  "end": 1705
                },
                "definite": false,
                "start": 1686,
                "end": 1705
              }
            ],
            "declare": false,
            "start": 1682,
            "end": 1706
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ac",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1727,
                        "end": 1728
                      },
                      "typeArguments": null,
                      "start": 1720,
                      "end": 1728
                    },
                    "start": 1718,
                    "end": 1728
                  },
                  "start": 1716,
                  "end": 1728
                },
                "init": null,
                "definite": false,
                "start": 1716,
                "end": 1728
              }
            ],
            "declare": false,
            "start": 1712,
            "end": 1729
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r16",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1738,
                  "end": 1741
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1744,
                    "end": 1748
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ac",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1751,
                    "end": 1753
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1756,
                    "end": 1757
                  },
                  "start": 1744,
                  "end": 1757
                },
                "definite": false,
                "start": 1738,
                "end": 1757
              }
            ],
            "declare": false,
            "start": 1734,
            "end": 1758
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r16",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1767,
                  "end": 1770
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1773,
                    "end": 1777
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1780,
                    "end": 1781
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ac",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1784,
                    "end": 1786
                  },
                  "start": 1773,
                  "end": 1786
                },
                "definite": false,
                "start": 1767,
                "end": 1786
              }
            ],
            "declare": false,
            "start": 1763,
            "end": 1787
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f17",
              "optional": false,
              "typeAnnotation": null,
              "start": 1802,
              "end": 1805
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
                    "start": 1806,
                    "end": 1807
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1806,
                  "end": 1807
                }
              ],
              "start": 1805,
              "end": 1808
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                      "start": 1812,
                      "end": 1813
                    },
                    "typeArguments": null,
                    "start": 1812,
                    "end": 1813
                  },
                  "start": 1810,
                  "end": 1813
                },
                "start": 1809,
                "end": 1813
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r17",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1829,
                        "end": 1832
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 1835,
                          "end": 1839
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1842,
                          "end": 1843
                        },
                        "alternate": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1846,
                          "end": 1847
                        },
                        "start": 1835,
                        "end": 1847
                      },
                      "definite": false,
                      "start": 1829,
                      "end": 1847
                    }
                  ],
                  "declare": false,
                  "start": 1825,
                  "end": 1848
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r17",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1861,
                        "end": 1864
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 1867,
                          "end": 1871
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1874,
                          "end": 1875
                        },
                        "alternate": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1878,
                          "end": 1879
                        },
                        "start": 1867,
                        "end": 1879
                      },
                      "definite": false,
                      "start": 1861,
                      "end": 1879
                    }
                  ],
                  "declare": false,
                  "start": 1857,
                  "end": 1880
                }
              ],
              "start": 1815,
              "end": 1886
            },
            "expression": false,
            "start": 1793,
            "end": 1886
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f18",
              "optional": false,
              "typeAnnotation": null,
              "start": 1901,
              "end": 1904
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
                    "start": 1905,
                    "end": 1906
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1905,
                  "end": 1906
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1908,
                    "end": 1909
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1918,
                      "end": 1919
                    },
                    "typeArguments": null,
                    "start": 1918,
                    "end": 1919
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1908,
                  "end": 1919
                }
              ],
              "start": 1904,
              "end": 1920
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1924,
                      "end": 1925
                    },
                    "typeArguments": null,
                    "start": 1924,
                    "end": 1925
                  },
                  "start": 1922,
                  "end": 1925
                },
                "start": 1921,
                "end": 1925
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r18",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1941,
                        "end": 1944
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 1947,
                          "end": 1951
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1954,
                          "end": 1955
                        },
                        "alternate": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1958,
                          "end": 1959
                        },
                        "start": 1947,
                        "end": 1959
                      },
                      "definite": false,
                      "start": 1941,
                      "end": 1959
                    }
                  ],
                  "declare": false,
                  "start": 1937,
                  "end": 1960
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r18",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1973,
                        "end": 1976
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 1979,
                          "end": 1983
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1986,
                          "end": 1987
                        },
                        "alternate": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1990,
                          "end": 1991
                        },
                        "start": 1979,
                        "end": 1991
                      },
                      "definite": false,
                      "start": 1973,
                      "end": 1991
                    }
                  ],
                  "declare": false,
                  "start": 1969,
                  "end": 1992
                }
              ],
              "start": 1927,
              "end": 1998
            },
            "expression": false,
            "start": 1892,
            "end": 1998
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r19",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2008,
                  "end": 2011
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2014,
                    "end": 2018
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2025,
                      "end": 2031
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2021,
                    "end": 2033
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2036,
                    "end": 2037
                  },
                  "start": 2014,
                  "end": 2037
                },
                "definite": false,
                "start": 2008,
                "end": 2037
              }
            ],
            "declare": false,
            "start": 2004,
            "end": 2038
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r19",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2064,
                  "end": 2067
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2070,
                    "end": 2074
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2077,
                    "end": 2078
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2085,
                      "end": 2091
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2081,
                    "end": 2093
                  },
                  "start": 2070,
                  "end": 2093
                },
                "definite": false,
                "start": 2064,
                "end": 2093
              }
            ],
            "declare": false,
            "start": 2060,
            "end": 2094
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r20",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2121,
                  "end": 2124
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2127,
                    "end": 2131
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 2134,
                    "end": 2136
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2139,
                    "end": 2140
                  },
                  "start": 2127,
                  "end": 2140
                },
                "definite": false,
                "start": 2121,
                "end": 2140
              }
            ],
            "declare": false,
            "start": 2117,
            "end": 2141
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r20",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2156,
                  "end": 2159
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2162,
                    "end": 2166
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2169,
                    "end": 2170
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 2173,
                    "end": 2175
                  },
                  "start": 2162,
                  "end": 2175
                },
                "definite": false,
                "start": 2156,
                "end": 2175
              }
            ],
            "declare": false,
            "start": 2152,
            "end": 2176
          }
        ],
        "start": 520,
        "end": 2184
      },
      "expression": false,
      "start": 490,
      "end": 2184
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 65,
  "end": 2184
}
```
