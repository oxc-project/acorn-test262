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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "type": "Literal",
              "value": "   ",
              "raw": "\"   \"",
              "start": 14,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
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
            "start": 14,
            "end": 28
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "a   b",
              "raw": "\"a   b\"",
              "start": 33,
              "end": 40
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 42,
                "end": 48
              },
              "start": 40,
              "end": 48
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
            "start": 33,
            "end": 49
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\"",
              "start": 54,
              "end": 82
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 84,
                "end": 90
              },
              "start": 82,
              "end": 90
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
            "start": 54,
            "end": 91
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "aa",
              "raw": "\"a\\a\"",
              "start": 96,
              "end": 101
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 103,
                "end": 109
              },
              "start": 101,
              "end": 109
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
            "start": 96,
            "end": 110
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "a ",
              "raw": "\"a \"",
              "start": 122,
              "end": 126
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 128,
                "end": 134
              },
              "start": 126,
              "end": 134
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 115,
            "end": 134
          }
        ],
        "start": 8,
        "end": 136
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 136
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
            "name": "c",
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
                  "start": 145,
                  "end": 146
                },
                "typeArguments": null,
                "start": 145,
                "end": 146
              },
              "start": 143,
              "end": 146
            },
            "start": 142,
            "end": 146
          },
          "init": null,
          "definite": false,
          "start": 142,
          "end": 146
        }
      ],
      "declare": false,
      "start": 138,
      "end": 147
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
            "start": 152,
            "end": 153
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "property": {
              "type": "Literal",
              "value": "   ",
              "raw": "\"   \"",
              "start": 158,
              "end": 163
            },
            "optional": false,
            "computed": true,
            "start": 156,
            "end": 164
          },
          "definite": false,
          "start": 152,
          "end": 164
        }
      ],
      "declare": false,
      "start": 148,
      "end": 165
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
            "start": 170,
            "end": 172
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "property": {
              "type": "Literal",
              "value": "    ",
              "raw": "\"    \"",
              "start": 177,
              "end": 183
            },
            "optional": false,
            "computed": true,
            "start": 175,
            "end": 184
          },
          "definite": false,
          "start": 170,
          "end": 184
        }
      ],
      "declare": false,
      "start": 166,
      "end": 185
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
            "start": 190,
            "end": 192
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 196
            },
            "property": {
              "type": "Literal",
              "value": "a   b",
              "raw": "\"a   b\"",
              "start": 197,
              "end": 204
            },
            "optional": false,
            "computed": true,
            "start": 195,
            "end": 205
          },
          "definite": false,
          "start": 190,
          "end": 205
        }
      ],
      "declare": false,
      "start": 186,
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 227
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 231
            },
            "property": {
              "type": "Literal",
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\"",
              "start": 232,
              "end": 260
            },
            "optional": false,
            "computed": true,
            "start": 230,
            "end": 261
          },
          "definite": false,
          "start": 225,
          "end": 261
        }
      ],
      "declare": false,
      "start": 221,
      "end": 262
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 274,
        "end": 275
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
              "type": "Literal",
              "value": "   ",
              "raw": "\"   \"",
              "start": 282,
              "end": 287
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 289,
                "end": 295
              },
              "start": 287,
              "end": 295
            },
            "accessibility": null,
            "static": false,
            "start": 282,
            "end": 296
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "a   b",
              "raw": "\"a   b\"",
              "start": 301,
              "end": 308
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 310,
                "end": 316
              },
              "start": 308,
              "end": 316
            },
            "accessibility": null,
            "static": false,
            "start": 301,
            "end": 317
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\"",
              "start": 322,
              "end": 350
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 352,
                "end": 358
              },
              "start": 350,
              "end": 358
            },
            "accessibility": null,
            "static": false,
            "start": 322,
            "end": 359
          }
        ],
        "start": 276,
        "end": 361
      },
      "declare": false,
      "start": 264,
      "end": 361
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 371
                },
                "typeArguments": null,
                "start": 370,
                "end": 371
              },
              "start": 368,
              "end": 371
            },
            "start": 367,
            "end": 371
          },
          "init": null,
          "definite": false,
          "start": 367,
          "end": 371
        }
      ],
      "declare": false,
      "start": 363,
      "end": 372
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
            "start": 377,
            "end": 378
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 382
            },
            "property": {
              "type": "Literal",
              "value": "   ",
              "raw": "\"   \"",
              "start": 383,
              "end": 388
            },
            "optional": false,
            "computed": true,
            "start": 381,
            "end": 389
          },
          "definite": false,
          "start": 377,
          "end": 389
        }
      ],
      "declare": false,
      "start": 373,
      "end": 390
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
            "start": 395,
            "end": 397
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 401
            },
            "property": {
              "type": "Literal",
              "value": "    ",
              "raw": "\"    \"",
              "start": 402,
              "end": 408
            },
            "optional": false,
            "computed": true,
            "start": 400,
            "end": 409
          },
          "definite": false,
          "start": 395,
          "end": 409
        }
      ],
      "declare": false,
      "start": 391,
      "end": 410
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
            "start": 415,
            "end": 417
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 421
            },
            "property": {
              "type": "Literal",
              "value": "a   b",
              "raw": "\"a   b\"",
              "start": 422,
              "end": 429
            },
            "optional": false,
            "computed": true,
            "start": 420,
            "end": 430
          },
          "definite": false,
          "start": 415,
          "end": 430
        }
      ],
      "declare": false,
      "start": 411,
      "end": 431
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
            "start": 450,
            "end": 452
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 455,
              "end": 456
            },
            "property": {
              "type": "Literal",
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\"",
              "start": 457,
              "end": 485
            },
            "optional": false,
            "computed": true,
            "start": 455,
            "end": 486
          },
          "definite": false,
          "start": 450,
          "end": 486
        }
      ],
      "declare": false,
      "start": 446,
      "end": 487
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "   ",
                      "raw": "\"   \"",
                      "start": 503,
                      "end": 508
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 510,
                        "end": 516
                      },
                      "start": 508,
                      "end": 516
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 503,
                    "end": 517
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "a   b",
                      "raw": "\"a   b\"",
                      "start": 522,
                      "end": 529
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 531,
                        "end": 537
                      },
                      "start": 529,
                      "end": 537
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 522,
                    "end": 538
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
                      "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\"",
                      "start": 543,
                      "end": 571
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 573,
                        "end": 579
                      },
                      "start": 571,
                      "end": 579
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 543,
                    "end": 580
                  }
                ],
                "start": 497,
                "end": 582
              },
              "start": 495,
              "end": 582
            },
            "start": 494,
            "end": 582
          },
          "init": null,
          "definite": false,
          "start": 494,
          "end": 582
        }
      ],
      "declare": false,
      "start": 490,
      "end": 582
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
            "start": 588,
            "end": 589
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 593
            },
            "property": {
              "type": "Literal",
              "value": "   ",
              "raw": "\"   \"",
              "start": 594,
              "end": 599
            },
            "optional": false,
            "computed": true,
            "start": 592,
            "end": 600
          },
          "definite": false,
          "start": 588,
          "end": 600
        }
      ],
      "declare": false,
      "start": 584,
      "end": 601
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
            "start": 606,
            "end": 608
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 611,
              "end": 612
            },
            "property": {
              "type": "Literal",
              "value": "    ",
              "raw": "\"    \"",
              "start": 613,
              "end": 619
            },
            "optional": false,
            "computed": true,
            "start": 611,
            "end": 620
          },
          "definite": false,
          "start": 606,
          "end": 620
        }
      ],
      "declare": false,
      "start": 602,
      "end": 621
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
            "start": 626,
            "end": 628
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 631,
              "end": 632
            },
            "property": {
              "type": "Literal",
              "value": "a   b",
              "raw": "\"a   b\"",
              "start": 633,
              "end": 640
            },
            "optional": false,
            "computed": true,
            "start": 631,
            "end": 641
          },
          "definite": false,
          "start": 626,
          "end": 641
        }
      ],
      "declare": false,
      "start": 622,
      "end": 642
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
            "start": 661,
            "end": 663
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 666,
              "end": 667
            },
            "property": {
              "type": "Literal",
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\"",
              "start": 668,
              "end": 696
            },
            "optional": false,
            "computed": true,
            "start": 666,
            "end": 697
          },
          "definite": false,
          "start": 661,
          "end": 697
        }
      ],
      "declare": false,
      "start": 657,
      "end": 698
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 704,
            "end": 705
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "   ",
                  "raw": "\"   \"",
                  "start": 714,
                  "end": 719
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 721,
                  "end": 722
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 714,
                "end": 722
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "a   b",
                  "raw": "\"a   b\"",
                  "start": 728,
                  "end": 735
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 737,
                  "end": 739
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 728,
                "end": 739
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
                  "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\"",
                  "start": 745,
                  "end": 773
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 775,
                  "end": 776
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 745,
                "end": 776
              }
            ],
            "start": 708,
            "end": 779
          },
          "definite": false,
          "start": 704,
          "end": 779
        }
      ],
      "declare": false,
      "start": 700,
      "end": 779
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
            "start": 785,
            "end": 786
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 790
            },
            "property": {
              "type": "Literal",
              "value": "   ",
              "raw": "\"   \"",
              "start": 791,
              "end": 796
            },
            "optional": false,
            "computed": true,
            "start": 789,
            "end": 797
          },
          "definite": false,
          "start": 785,
          "end": 797
        }
      ],
      "declare": false,
      "start": 781,
      "end": 798
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
            "start": 803,
            "end": 805
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 808,
              "end": 809
            },
            "property": {
              "type": "Literal",
              "value": "    ",
              "raw": "\"    \"",
              "start": 810,
              "end": 816
            },
            "optional": false,
            "computed": true,
            "start": 808,
            "end": 817
          },
          "definite": false,
          "start": 803,
          "end": 817
        }
      ],
      "declare": false,
      "start": 799,
      "end": 818
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
            "start": 823,
            "end": 825
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 828,
              "end": 829
            },
            "property": {
              "type": "Literal",
              "value": "a   b",
              "raw": "\"a   b\"",
              "start": 830,
              "end": 837
            },
            "optional": false,
            "computed": true,
            "start": 828,
            "end": 838
          },
          "definite": false,
          "start": 823,
          "end": 838
        }
      ],
      "declare": false,
      "start": 819,
      "end": 839
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
            "start": 858,
            "end": 860
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 863,
              "end": 864
            },
            "property": {
              "type": "Literal",
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\"",
              "start": 865,
              "end": 893
            },
            "optional": false,
            "computed": true,
            "start": 863,
            "end": 894
          },
          "definite": false,
          "start": 858,
          "end": 894
        }
      ],
      "declare": false,
      "start": 854,
      "end": 895
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 895
}
```
