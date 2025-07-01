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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 36
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
              "start": 37,
              "end": 38
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 37,
            "end": 38
          }
        ],
        "start": 36,
        "end": 39
      },
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 51
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
                  "start": 53,
                  "end": 54
                },
                "typeArguments": null,
                "start": 53,
                "end": 54
              },
              "start": 51,
              "end": 54
            },
            "accessibility": null,
            "static": false,
            "start": 46,
            "end": 55
          }
        ],
        "start": 40,
        "end": 57
      },
      "declare": false,
      "start": 22,
      "end": 57
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Int",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 72
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 85
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 86,
                "end": 92
              }
            ],
            "start": 85,
            "end": 93
          },
          "start": 81,
          "end": 93
        }
      ],
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
              "start": 100,
              "end": 104
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "integer",
                  "raw": "\"integer\"",
                  "start": 106,
                  "end": 115
                },
                "start": 106,
                "end": 115
              },
              "start": 104,
              "end": 115
            },
            "accessibility": null,
            "static": false,
            "start": 100,
            "end": 116
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "multipleOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 131
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 134,
                "end": 140
              },
              "start": 132,
              "end": 140
            },
            "accessibility": null,
            "static": false,
            "start": 121,
            "end": 141
          }
        ],
        "start": 94,
        "end": 143
      },
      "declare": false,
      "start": 59,
      "end": 143
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Float",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 160
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 173
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 174,
                "end": 180
              }
            ],
            "start": 173,
            "end": 181
          },
          "start": 169,
          "end": 181
        }
      ],
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
              "start": 188,
              "end": 192
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 194,
                  "end": 202
                },
                "start": 194,
                "end": 202
              },
              "start": 192,
              "end": 202
            },
            "accessibility": null,
            "static": false,
            "start": 188,
            "end": 203
          }
        ],
        "start": 182,
        "end": 205
      },
      "declare": false,
      "start": 145,
      "end": 205
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Str",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 220
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 233
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 234,
                "end": 240
              }
            ],
            "start": 233,
            "end": 241
          },
          "start": 229,
          "end": 241
        }
      ],
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
              "start": 248,
              "end": 252
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 254,
                  "end": 262
                },
                "start": 254,
                "end": 262
              },
              "start": 252,
              "end": 262
            },
            "accessibility": null,
            "static": false,
            "start": 248,
            "end": 263
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "format",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 274
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 277,
                "end": 283
              },
              "start": 275,
              "end": 283
            },
            "accessibility": null,
            "static": false,
            "start": 268,
            "end": 284
          }
        ],
        "start": 242,
        "end": 286
      },
      "declare": false,
      "start": 207,
      "end": 286
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bool",
        "optional": false,
        "typeAnnotation": null,
        "start": 298,
        "end": 302
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 311,
            "end": 315
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSBooleanKeyword",
                "start": 316,
                "end": 323
              }
            ],
            "start": 315,
            "end": 324
          },
          "start": 311,
          "end": 324
        }
      ],
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
              "start": 331,
              "end": 335
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "\"boolean\"",
                  "start": 337,
                  "end": 346
                },
                "start": 337,
                "end": 346
              },
              "start": 335,
              "end": 346
            },
            "accessibility": null,
            "static": false,
            "start": 331,
            "end": 347
          }
        ],
        "start": 325,
        "end": 349
      },
      "declare": false,
      "start": 288,
      "end": 349
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Primitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 365
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
              "name": "Int",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 371
            },
            "typeArguments": null,
            "start": 368,
            "end": 371
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 379
            },
            "typeArguments": null,
            "start": 374,
            "end": 379
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Str",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 385
            },
            "typeArguments": null,
            "start": 382,
            "end": 385
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bool",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 392
            },
            "typeArguments": null,
            "start": 388,
            "end": 392
          }
        ],
        "start": 368,
        "end": 392
      },
      "declare": false,
      "start": 351,
      "end": 393
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Primitive",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 415
                },
                "typeArguments": null,
                "start": 406,
                "end": 415
              },
              "start": 404,
              "end": 415
            },
            "start": 401,
            "end": 415
          },
          "init": {
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
                  "start": 424,
                  "end": 428
                },
                "value": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 430,
                  "end": 438
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 424,
                "end": 438
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 444,
                  "end": 449
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 451,
                  "end": 453
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 444,
                "end": 453
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multipleOf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 459,
                  "end": 469
                },
                "value": {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 471,
                  "end": 472
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 459,
                "end": 472
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "format",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 497,
                  "end": 503
                },
                "value": {
                  "type": "Literal",
                  "value": "what?",
                  "raw": "\"what?\"",
                  "start": 505,
                  "end": 512
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 497,
                "end": 512
              }
            ],
            "start": 418,
            "end": 514
          },
          "definite": false,
          "start": 401,
          "end": 514
        }
      ],
      "declare": false,
      "start": 395,
      "end": 514
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DisjointDiscriminants",
        "optional": false,
        "typeAnnotation": null,
        "start": 522,
        "end": 543
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 548,
                  "end": 550
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "left",
                      "raw": "'left'",
                      "start": 552,
                      "end": 558
                    },
                    "start": 552,
                    "end": 558
                  },
                  "start": 550,
                  "end": 558
                },
                "accessibility": null,
                "static": false,
                "start": 548,
                "end": 559
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 560,
                  "end": 562
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 564,
                      "end": 568
                    },
                    "start": 564,
                    "end": 568
                  },
                  "start": 562,
                  "end": 568
                },
                "accessibility": null,
                "static": false,
                "start": 560,
                "end": 569
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 572
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 574,
                    "end": 580
                  },
                  "start": 572,
                  "end": 580
                },
                "accessibility": null,
                "static": false,
                "start": 570,
                "end": 580
              }
            ],
            "start": 546,
            "end": 582
          },
          {
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
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 587,
                  "end": 589
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "right",
                      "raw": "'right'",
                      "start": 591,
                      "end": 598
                    },
                    "start": 591,
                    "end": 598
                  },
                  "start": 589,
                  "end": 598
                },
                "accessibility": null,
                "static": false,
                "start": 587,
                "end": 599
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 600,
                  "end": 602
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 604,
                      "end": 609
                    },
                    "start": 604,
                    "end": 609
                  },
                  "start": 602,
                  "end": 609
                },
                "accessibility": null,
                "static": false,
                "start": 600,
                "end": 610
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 611,
                  "end": 613
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 615,
                    "end": 621
                  },
                  "start": 613,
                  "end": 621
                },
                "accessibility": null,
                "static": false,
                "start": 611,
                "end": 621
              }
            ],
            "start": 585,
            "end": 623
          },
          {
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
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 628,
                  "end": 630
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "left",
                      "raw": "'left'",
                      "start": 632,
                      "end": 638
                    },
                    "start": 632,
                    "end": 638
                  },
                  "start": 630,
                  "end": 638
                },
                "accessibility": null,
                "static": false,
                "start": 628,
                "end": 639
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 640,
                  "end": 642
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 644,
                    "end": 651
                  },
                  "start": 642,
                  "end": 651
                },
                "accessibility": null,
                "static": false,
                "start": 640,
                "end": 651
              }
            ],
            "start": 626,
            "end": 653
          }
        ],
        "start": 546,
        "end": 653
      },
      "declare": false,
      "start": 517,
      "end": 654
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DisjointDiscriminants",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 741,
                  "end": 762
                },
                "typeArguments": null,
                "start": 741,
                "end": 762
              },
              "start": 739,
              "end": 762
            },
            "start": 738,
            "end": 762
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 773
                },
                "value": {
                  "type": "Literal",
                  "value": "left",
                  "raw": "'left'",
                  "start": 775,
                  "end": 781
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 771,
                "end": 781
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 787,
                  "end": 789
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 791,
                  "end": 796
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 787,
                "end": 796
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 802,
                  "end": 804
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 806,
                  "end": 808
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 802,
                "end": 808
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 814,
                  "end": 816
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 818,
                  "end": 825
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 814,
                "end": 825
              }
            ],
            "start": 765,
            "end": 827
          },
          "definite": false,
          "start": 738,
          "end": 827
        }
      ],
      "declare": false,
      "start": 732,
      "end": 828
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DisjointDiscriminants",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 903,
                  "end": 924
                },
                "typeArguments": null,
                "start": 903,
                "end": 924
              },
              "start": 901,
              "end": 924
            },
            "start": 900,
            "end": 924
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 933,
                  "end": 935
                },
                "value": {
                  "type": "Literal",
                  "value": "left",
                  "raw": "'left'",
                  "start": 937,
                  "end": 943
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 933,
                "end": 943
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 949,
                  "end": 951
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 953,
                  "end": 957
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 949,
                "end": 957
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 963,
                  "end": 965
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 967,
                  "end": 969
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 963,
                "end": 969
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 975,
                  "end": 977
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 979,
                  "end": 986
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 975,
                "end": 986
              }
            ],
            "start": 927,
            "end": 988
          },
          "definite": false,
          "start": 900,
          "end": 988
        }
      ],
      "declare": false,
      "start": 894,
      "end": 989
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DisjointDiscriminants",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1073,
                  "end": 1094
                },
                "typeArguments": null,
                "start": 1073,
                "end": 1094
              },
              "start": 1071,
              "end": 1094
            },
            "start": 1070,
            "end": 1094
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1103,
                  "end": 1105
                },
                "value": {
                  "type": "Literal",
                  "value": "right",
                  "raw": "'right'",
                  "start": 1107,
                  "end": 1114
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1103,
                "end": 1114
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1120,
                  "end": 1122
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 1124,
                  "end": 1129
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1120,
                "end": 1129
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1135,
                  "end": 1137
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 1139,
                  "end": 1141
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1135,
                "end": 1141
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1147,
                  "end": 1149
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1151,
                  "end": 1158
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1147,
                "end": 1158
              }
            ],
            "start": 1097,
            "end": 1160
          },
          "definite": false,
          "start": 1070,
          "end": 1160
        }
      ],
      "declare": false,
      "start": 1064,
      "end": 1161
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Common",
        "optional": false,
        "typeAnnotation": null,
        "start": 1195,
        "end": 1201
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
              "start": 1208,
              "end": 1212
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 1214,
                      "end": 1217
                    },
                    "start": 1214,
                    "end": 1217
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"B\"",
                      "start": 1220,
                      "end": 1223
                    },
                    "start": 1220,
                    "end": 1223
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "C",
                      "raw": "\"C\"",
                      "start": 1226,
                      "end": 1229
                    },
                    "start": 1226,
                    "end": 1229
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "D",
                      "raw": "\"D\"",
                      "start": 1232,
                      "end": 1235
                    },
                    "start": 1232,
                    "end": 1235
                  }
                ],
                "start": 1214,
                "end": 1235
              },
              "start": 1212,
              "end": 1235
            },
            "accessibility": null,
            "static": false,
            "start": 1208,
            "end": 1236
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1241,
              "end": 1242
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1244,
                "end": 1250
              },
              "start": 1242,
              "end": 1250
            },
            "accessibility": null,
            "static": false,
            "start": 1241,
            "end": 1251
          }
        ],
        "start": 1202,
        "end": 1253
      },
      "declare": false,
      "start": 1185,
      "end": 1253
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 1264,
        "end": 1265
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
              "start": 1272,
              "end": 1276
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 1278,
                  "end": 1281
                },
                "start": 1278,
                "end": 1281
              },
              "start": 1276,
              "end": 1281
            },
            "accessibility": null,
            "static": false,
            "start": 1272,
            "end": 1282
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1287,
              "end": 1288
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1291,
                "end": 1297
              },
              "start": 1289,
              "end": 1297
            },
            "accessibility": null,
            "static": false,
            "start": 1287,
            "end": 1298
          }
        ],
        "start": 1266,
        "end": 1300
      },
      "declare": false,
      "start": 1254,
      "end": 1300
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 1311,
        "end": 1312
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
              "start": 1319,
              "end": 1323
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 1325,
                  "end": 1328
                },
                "start": 1325,
                "end": 1328
              },
              "start": 1323,
              "end": 1328
            },
            "accessibility": null,
            "static": false,
            "start": 1319,
            "end": 1329
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1334,
              "end": 1335
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1338,
                "end": 1344
              },
              "start": 1336,
              "end": 1344
            },
            "accessibility": null,
            "static": false,
            "start": 1334,
            "end": 1345
          }
        ],
        "start": 1313,
        "end": 1347
      },
      "declare": false,
      "start": 1301,
      "end": 1347
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CommonWithOverlappingOptionals",
        "optional": false,
        "typeAnnotation": null,
        "start": 1354,
        "end": 1384
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
              "name": "Common",
              "optional": false,
              "typeAnnotation": null,
              "start": 1387,
              "end": 1393
            },
            "typeArguments": null,
            "start": 1387,
            "end": 1393
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Common",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1397,
                  "end": 1403
                },
                "typeArguments": null,
                "start": 1397,
                "end": 1403
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1406,
                  "end": 1407
                },
                "typeArguments": null,
                "start": 1406,
                "end": 1407
              }
            ],
            "start": 1397,
            "end": 1407
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Common",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1412,
                  "end": 1418
                },
                "typeArguments": null,
                "start": 1412,
                "end": 1418
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1421,
                  "end": 1422
                },
                "typeArguments": null,
                "start": 1421,
                "end": 1422
              }
            ],
            "start": 1412,
            "end": 1422
          }
        ],
        "start": 1387,
        "end": 1423
      },
      "declare": false,
      "start": 1349,
      "end": 1424
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CommonWithOverlappingOptionals",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1500,
                  "end": 1530
                },
                "typeArguments": null,
                "start": 1500,
                "end": 1530
              },
              "start": 1498,
              "end": 1530
            },
            "start": 1496,
            "end": 1530
          },
          "init": {
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
                  "start": 1539,
                  "end": 1543
                },
                "value": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 1545,
                  "end": 1548
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1539,
                "end": 1548
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1554,
                  "end": 1555
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1557,
                  "end": 1558
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1554,
                "end": 1558
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1564,
                  "end": 1565
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1567,
                  "end": 1568
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1564,
                "end": 1568
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1574,
                  "end": 1575
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1577,
                  "end": 1578
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1574,
                "end": 1578
              }
            ],
            "start": 1533,
            "end": 1600
          },
          "definite": false,
          "start": 1496,
          "end": 1600
        }
      ],
      "declare": false,
      "start": 1490,
      "end": 1600
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CommonWithDisjointOverlappingOptionals",
        "optional": false,
        "typeAnnotation": null,
        "start": 1607,
        "end": 1645
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
              "name": "Common",
              "optional": false,
              "typeAnnotation": null,
              "start": 1648,
              "end": 1654
            },
            "typeArguments": null,
            "start": 1648,
            "end": 1654
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1657,
              "end": 1658
            },
            "typeArguments": null,
            "start": 1657,
            "end": 1658
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1661,
              "end": 1662
            },
            "typeArguments": null,
            "start": 1661,
            "end": 1662
          }
        ],
        "start": 1648,
        "end": 1662
      },
      "declare": false,
      "start": 1602,
      "end": 1663
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CommonWithDisjointOverlappingOptionals",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1770,
                  "end": 1808
                },
                "typeArguments": null,
                "start": 1770,
                "end": 1808
              },
              "start": 1768,
              "end": 1808
            },
            "start": 1766,
            "end": 1808
          },
          "init": {
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
                  "start": 1817,
                  "end": 1821
                },
                "value": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 1823,
                  "end": 1826
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1817,
                "end": 1826
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1832,
                  "end": 1833
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1835,
                  "end": 1836
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1832,
                "end": 1836
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1842,
                  "end": 1843
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1845,
                  "end": 1846
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1842,
                "end": 1846
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1852,
                  "end": 1853
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1855,
                  "end": 1856
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1852,
                "end": 1856
              }
            ],
            "start": 1811,
            "end": 1878
          },
          "definite": false,
          "start": 1766,
          "end": 1878
        }
      ],
      "declare": false,
      "start": 1760,
      "end": 1878
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BaseAttribute",
          "optional": false,
          "typeAnnotation": null,
          "start": 1982,
          "end": 1995
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
                "start": 1996,
                "end": 1997
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1996,
              "end": 1997
            }
          ],
          "start": 1995,
          "end": 1998
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 2007,
                "end": 2011
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2014,
                      "end": 2020
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 2023,
                      "end": 2032
                    }
                  ],
                  "start": 2014,
                  "end": 2032
                },
                "start": 2012,
                "end": 2032
              },
              "accessibility": null,
              "static": false,
              "start": 2007,
              "end": 2033
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "required",
                "optional": false,
                "typeAnnotation": null,
                "start": 2038,
                "end": 2046
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 2049,
                      "end": 2056
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 2059,
                      "end": 2068
                    }
                  ],
                  "start": 2049,
                  "end": 2068
                },
                "start": 2047,
                "end": 2068
              },
              "accessibility": null,
              "static": false,
              "start": 2038,
              "end": 2069
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "defaultsTo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2074,
                "end": 2084
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2087,
                        "end": 2088
                      },
                      "typeArguments": null,
                      "start": 2087,
                      "end": 2088
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 2091,
                      "end": 2100
                    }
                  ],
                  "start": 2087,
                  "end": 2100
                },
                "start": 2085,
                "end": 2100
              },
              "accessibility": null,
              "static": false,
              "start": 2074,
              "end": 2101
            }
          ],
          "start": 2001,
          "end": 2103
        },
        "declare": false,
        "start": 1977,
        "end": 2104
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1970,
      "end": 2104
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Attribute",
          "optional": false,
          "typeAnnotation": null,
          "start": 2118,
          "end": 2127
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 2136,
              "end": 2142
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringAttribute",
                "optional": false,
                "typeAnnotation": null,
                "start": 2149,
                "end": 2164
              },
              "typeArguments": null,
              "start": 2149,
              "end": 2164
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberAttribute",
                "optional": false,
                "typeAnnotation": null,
                "start": 2171,
                "end": 2186
              },
              "typeArguments": null,
              "start": 2171,
              "end": 2186
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OneToOneAttribute",
                "optional": false,
                "typeAnnotation": null,
                "start": 2193,
                "end": 2210
              },
              "typeArguments": null,
              "start": 2193,
              "end": 2210
            }
          ],
          "start": 2134,
          "end": 2210
        },
        "declare": false,
        "start": 2113,
        "end": 2210
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2106,
      "end": 2210
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Attribute2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2224,
          "end": 2234
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 2243,
              "end": 2249
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringAttribute",
                "optional": false,
                "typeAnnotation": null,
                "start": 2256,
                "end": 2271
              },
              "typeArguments": null,
              "start": 2256,
              "end": 2271
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberAttribute",
                "optional": false,
                "typeAnnotation": null,
                "start": 2278,
                "end": 2293
              },
              "typeArguments": null,
              "start": 2278,
              "end": 2293
            }
          ],
          "start": 2241,
          "end": 2293
        },
        "declare": false,
        "start": 2219,
        "end": 2293
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2212,
      "end": 2293
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StringAttribute",
          "optional": false,
          "typeAnnotation": null,
          "start": 2307,
          "end": 2322
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseAttribute",
                "optional": false,
                "typeAnnotation": null,
                "start": 2325,
                "end": 2338
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2339,
                    "end": 2345
                  }
                ],
                "start": 2338,
                "end": 2346
              },
              "start": 2325,
              "end": 2346
            },
            {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2355,
                    "end": 2359
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "'string'",
                        "start": 2361,
                        "end": 2369
                      },
                      "start": 2361,
                      "end": 2369
                    },
                    "start": 2359,
                    "end": 2369
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2355,
                  "end": 2370
                }
              ],
              "start": 2349,
              "end": 2372
            }
          ],
          "start": 2325,
          "end": 2372
        },
        "declare": false,
        "start": 2302,
        "end": 2373
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2295,
      "end": 2373
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NumberAttribute",
          "optional": false,
          "typeAnnotation": null,
          "start": 2387,
          "end": 2402
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseAttribute",
                "optional": false,
                "typeAnnotation": null,
                "start": 2405,
                "end": 2418
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2419,
                    "end": 2425
                  }
                ],
                "start": 2418,
                "end": 2426
              },
              "start": 2405,
              "end": 2426
            },
            {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2435,
                    "end": 2439
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "number",
                        "raw": "'number'",
                        "start": 2441,
                        "end": 2449
                      },
                      "start": 2441,
                      "end": 2449
                    },
                    "start": 2439,
                    "end": 2449
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2435,
                  "end": 2450
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "autoIncrement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2455,
                    "end": 2468
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSBooleanKeyword",
                          "start": 2471,
                          "end": 2478
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2481,
                          "end": 2490
                        }
                      ],
                      "start": 2471,
                      "end": 2490
                    },
                    "start": 2469,
                    "end": 2490
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2455,
                  "end": 2491
                }
              ],
              "start": 2429,
              "end": 2493
            }
          ],
          "start": 2405,
          "end": 2493
        },
        "declare": false,
        "start": 2382,
        "end": 2494
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2375,
      "end": 2494
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OneToOneAttribute",
          "optional": false,
          "typeAnnotation": null,
          "start": 2508,
          "end": 2525
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseAttribute",
                "optional": false,
                "typeAnnotation": null,
                "start": 2528,
                "end": 2541
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 2542,
                    "end": 2545
                  }
                ],
                "start": 2541,
                "end": 2546
              },
              "start": 2528,
              "end": 2546
            },
            {
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
                    "name": "model",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2555,
                    "end": 2560
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2562,
                      "end": 2568
                    },
                    "start": 2560,
                    "end": 2568
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2555,
                  "end": 2569
                }
              ],
              "start": 2549,
              "end": 2571
            }
          ],
          "start": 2528,
          "end": 2571
        },
        "declare": false,
        "start": 2503,
        "end": 2572
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2496,
      "end": 2572
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
            "name": "attributes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Attribute",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2638,
                  "end": 2647
                },
                "typeArguments": null,
                "start": 2638,
                "end": 2647
              },
              "start": 2636,
              "end": 2647
            },
            "start": 2626,
            "end": 2647
          },
          "init": {
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
                  "start": 2656,
                  "end": 2660
                },
                "value": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 2662,
                  "end": 2670
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2656,
                "end": 2670
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "autoIncrement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2676,
                  "end": 2689
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2691,
                  "end": 2695
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2676,
                "end": 2695
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2701,
                  "end": 2709
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2711,
                  "end": 2715
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2701,
                "end": 2715
              }
            ],
            "start": 2650,
            "end": 2718
          },
          "definite": false,
          "start": 2626,
          "end": 2718
        }
      ],
      "declare": false,
      "start": 2620,
      "end": 2719
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
            "name": "attributes2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Attribute2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2740,
                  "end": 2750
                },
                "typeArguments": null,
                "start": 2740,
                "end": 2750
              },
              "start": 2738,
              "end": 2750
            },
            "start": 2727,
            "end": 2750
          },
          "init": {
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
                  "start": 2759,
                  "end": 2763
                },
                "value": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 2765,
                  "end": 2773
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2759,
                "end": 2773
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "autoIncrement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2779,
                  "end": 2792
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2794,
                  "end": 2798
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2779,
                "end": 2798
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2804,
                  "end": 2812
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2814,
                  "end": 2818
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2804,
                "end": 2818
              }
            ],
            "start": 2753,
            "end": 2821
          },
          "definite": false,
          "start": 2727,
          "end": 2821
        }
      ],
      "declare": false,
      "start": 2721,
      "end": 2822
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 2822
}
```
