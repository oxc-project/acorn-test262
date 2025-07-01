__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 49
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 53,
          "end": 59
        },
        "start": 51,
        "end": 59
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 69,
              "end": 70
            },
            "start": 62,
            "end": 71
          }
        ],
        "start": 60,
        "end": 73
      },
      "expression": false,
      "start": 37,
      "end": 73
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 86
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 90,
          "end": 96
        },
        "start": 88,
        "end": 96
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 106,
              "end": 108
            },
            "start": 99,
            "end": 109
          }
        ],
        "start": 97,
        "end": 111
      },
      "expression": false,
      "start": 74,
      "end": 111
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 124
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 128,
          "end": 132
        },
        "start": 126,
        "end": 132
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 151
            },
            "start": 135,
            "end": 152
          }
        ],
        "start": 133,
        "end": 154
      },
      "expression": false,
      "start": 112,
      "end": 154
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 167
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 171,
          "end": 175
        },
        "start": 169,
        "end": 175
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 178,
            "end": 185
          }
        ],
        "start": 176,
        "end": 187
      },
      "expression": false,
      "start": 155,
      "end": 187
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 200
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 204,
          "end": 211
        },
        "start": 202,
        "end": 211
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 221,
              "end": 225
            },
            "start": 214,
            "end": 226
          }
        ],
        "start": 212,
        "end": 228
      },
      "expression": false,
      "start": 188,
      "end": 228
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn6",
        "optional": false,
        "typeAnnotation": null,
        "start": 238,
        "end": 241
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 249
          },
          "typeArguments": null,
          "start": 245,
          "end": 249
        },
        "start": 243,
        "end": 249
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
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 267
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 268,
                  "end": 270
                }
              ],
              "start": 259,
              "end": 271
            },
            "start": 252,
            "end": 272
          }
        ],
        "start": 250,
        "end": 274
      },
      "expression": false,
      "start": 229,
      "end": 274
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn7",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 287
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 291,
          "end": 294
        },
        "start": 289,
        "end": 294
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 304,
              "end": 308
            },
            "start": 297,
            "end": 309
          }
        ],
        "start": 295,
        "end": 311
      },
      "expression": false,
      "start": 275,
      "end": 311
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn8",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 324
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 328,
          "end": 331
        },
        "start": 326,
        "end": 331
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 334,
            "end": 341
          }
        ],
        "start": 332,
        "end": 343
      },
      "expression": false,
      "start": 312,
      "end": 343
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 389
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 394
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 396,
                "end": 402
              },
              "start": 394,
              "end": 402
            },
            "accessibility": null,
            "static": false,
            "start": 392,
            "end": 402
          }
        ],
        "start": 390,
        "end": 404
      },
      "declare": false,
      "start": 378,
      "end": 404
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 411,
        "end": 412
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 425
          },
          "typeArguments": null,
          "start": 424,
          "end": 425
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 434
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 436,
                "end": 442
              },
              "start": 434,
              "end": 442
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
            "start": 432,
            "end": 443
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dispose",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 455
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 458,
                "end": 460
              },
              "expression": false,
              "start": 455,
              "end": 460
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 448,
            "end": 460
          }
        ],
        "start": 426,
        "end": 462
      },
      "abstract": false,
      "declare": false,
      "start": 405,
      "end": 462
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 469,
        "end": 470
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 479,
        "end": 480
      },
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 487,
              "end": 491
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 493,
                "end": 499
              },
              "start": 491,
              "end": 499
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
            "start": 487,
            "end": 500
          }
        ],
        "start": 481,
        "end": 502
      },
      "abstract": false,
      "declare": false,
      "start": 463,
      "end": 502
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn10",
        "optional": false,
        "typeAnnotation": null,
        "start": 512,
        "end": 516
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 520,
            "end": 521
          },
          "typeArguments": null,
          "start": 520,
          "end": 521
        },
        "start": 518,
        "end": 521
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 533,
                    "end": 535
                  },
                  "value": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 537,
                    "end": 539
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 533,
                  "end": 539
                }
              ],
              "start": 531,
              "end": 541
            },
            "start": 524,
            "end": 542
          }
        ],
        "start": 522,
        "end": 544
      },
      "expression": false,
      "start": 503,
      "end": 544
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn11",
        "optional": false,
        "typeAnnotation": null,
        "start": 556,
        "end": 560
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 564,
            "end": 565
          },
          "typeArguments": null,
          "start": 564,
          "end": 565
        },
        "start": 562,
        "end": 565
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 580
              },
              "typeArguments": null,
              "arguments": [],
              "start": 575,
              "end": 582
            },
            "start": 568,
            "end": 583
          }
        ],
        "start": 566,
        "end": 585
      },
      "expression": false,
      "start": 547,
      "end": 585
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn12",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 599
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 603,
            "end": 604
          },
          "typeArguments": null,
          "start": 603,
          "end": 604
        },
        "start": 601,
        "end": 604
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
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 618,
                "end": 619
              },
              "typeArguments": null,
              "arguments": [],
              "start": 614,
              "end": 621
            },
            "start": 607,
            "end": 622
          }
        ],
        "start": 605,
        "end": 624
      },
      "expression": false,
      "start": 586,
      "end": 624
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn13",
        "optional": false,
        "typeAnnotation": null,
        "start": 634,
        "end": 638
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 642,
            "end": 643
          },
          "typeArguments": null,
          "start": 642,
          "end": 643
        },
        "start": 640,
        "end": 643
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 653,
              "end": 657
            },
            "start": 646,
            "end": 658
          }
        ],
        "start": 644,
        "end": 660
      },
      "expression": false,
      "start": 625,
      "end": 660
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 37,
  "end": 660
}
```
