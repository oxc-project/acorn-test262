__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 65
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
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
              "start": 74,
              "end": 77
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 79,
                  "end": 80
                },
                "start": 79,
                "end": 80
              },
              "start": 77,
              "end": 80
            },
            "accessibility": null,
            "static": false,
            "start": 74,
            "end": 81
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 89
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 91,
                  "end": 92
                },
                "start": 91,
                "end": 92
              },
              "start": 89,
              "end": 92
            },
            "accessibility": null,
            "static": false,
            "start": 86,
            "end": 93
          }
        ],
        "start": 68,
        "end": 95
      },
      "declare": false,
      "start": 57,
      "end": 96
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "keyContaining1",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 117
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 126
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 135,
              "end": 141
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 123,
            "end": 141
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "keys",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 151
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 169
                },
                "typeArguments": null,
                "start": 166,
                "end": 169
              },
              "start": 160,
              "end": 169
            },
            "default": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 181
                },
                "typeArguments": null,
                "start": 178,
                "end": 181
              },
              "start": 172,
              "end": 181
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 147,
            "end": 181
          }
        ],
        "start": 117,
        "end": 184
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 191
          },
          "typeArguments": null,
          "start": 187,
          "end": 191
        },
        "extendsType": {
          "type": "TSInferType",
          "typeParameter": {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 209
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 227
                },
                "typeArguments": null,
                "start": 224,
                "end": 227
              },
              "start": 218,
              "end": 227
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 206,
            "end": 227
          },
          "start": 200,
          "end": 227
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 237
            },
            "typeArguments": null,
            "start": 234,
            "end": 237
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 246,
                "end": 249
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 255,
                "end": 258
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 261,
                "end": 264
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 270,
                "end": 272
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 249,
                "end": 255
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 261
                },
                "typeArguments": null,
                "start": 258,
                "end": 261
              },
              {
                "type": "TSStringKeyword",
                "start": 264,
                "end": 270
              }
            ],
            "start": 246,
            "end": 272
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 282
              },
              "typeArguments": null,
              "start": 279,
              "end": 282
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 286
              },
              "typeArguments": null,
              "start": 283,
              "end": 286
            },
            "start": 279,
            "end": 287
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 294,
            "end": 299
          },
          "start": 234,
          "end": 299
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 306,
          "end": 311
        },
        "start": 187,
        "end": 311
      },
      "declare": false,
      "start": 98,
      "end": 312
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_1",
        "optional": false,
        "typeAnnotation": null,
        "start": 319,
        "end": 321
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "keyContaining1",
          "optional": false,
          "typeAnnotation": null,
          "start": 324,
          "end": 338
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 339,
                "end": 344
              },
              "start": 339,
              "end": 344
            }
          ],
          "start": 338,
          "end": 345
        },
        "start": 324,
        "end": 345
      },
      "declare": false,
      "start": 314,
      "end": 346
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "keyContaining2",
        "optional": false,
        "typeAnnotation": null,
        "start": 359,
        "end": 373
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 382
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 391,
              "end": 397
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 379,
            "end": 397
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "keys",
              "optional": false,
              "typeAnnotation": null,
              "start": 403,
              "end": 407
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 425
                },
                "typeArguments": null,
                "start": 422,
                "end": 425
              },
              "start": 416,
              "end": 425
            },
            "default": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 434,
                  "end": 437
                },
                "typeArguments": null,
                "start": 434,
                "end": 437
              },
              "start": 428,
              "end": 437
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 403,
            "end": 437
          }
        ],
        "start": 373,
        "end": 440
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null,
            "start": 443,
            "end": 447
          },
          "typeArguments": null,
          "start": 443,
          "end": 447
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null,
            "start": 456,
            "end": 460
          },
          "typeArguments": null,
          "start": 456,
          "end": 460
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "keys",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 471
            },
            "typeArguments": null,
            "start": 467,
            "end": 471
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 480,
                "end": 483
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 489,
                "end": 492
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 495,
                "end": 498
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 504,
                "end": 506
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 483,
                "end": 489
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 492,
                  "end": 495
                },
                "typeArguments": null,
                "start": 492,
                "end": 495
              },
              {
                "type": "TSStringKeyword",
                "start": 498,
                "end": 504
              }
            ],
            "start": 480,
            "end": 506
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 516
              },
              "typeArguments": null,
              "start": 513,
              "end": 516
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 521
              },
              "typeArguments": null,
              "start": 517,
              "end": 521
            },
            "start": 513,
            "end": 522
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 529,
            "end": 534
          },
          "start": 467,
          "end": 534
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 541,
          "end": 546
        },
        "start": 443,
        "end": 546
      },
      "declare": false,
      "start": 354,
      "end": 547
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_2",
        "optional": false,
        "typeAnnotation": null,
        "start": 554,
        "end": 556
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "keyContaining2",
          "optional": false,
          "typeAnnotation": null,
          "start": 559,
          "end": 573
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 574,
                "end": 579
              },
              "start": 574,
              "end": 579
            }
          ],
          "start": 573,
          "end": 580
        },
        "start": 559,
        "end": 580
      },
      "declare": false,
      "start": 549,
      "end": 581
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 587
}
```
