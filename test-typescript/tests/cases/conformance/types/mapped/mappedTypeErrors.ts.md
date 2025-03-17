__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3682,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Shape",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 98,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 35,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 54,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 45,
              "name": "width",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 59,
            "end": 74,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 65,
              "name": "height",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 73,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 67,
                "end": 73
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 79,
            "end": 96,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 86,
              "name": "visible",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 95,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 88,
                "end": 95
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
      "start": 100,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 115,
        "name": "Named",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 116,
        "end": 137,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 122,
            "end": 135,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 126,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 134,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 128,
                "end": 134
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
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 154,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 155,
        "end": 188,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 161,
            "end": 171,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 176,
            "end": 186,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 179,
                "end": 185
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
      "type": "TSTypeAliasDeclaration",
      "start": 214,
      "end": 246,
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 222,
        "name": "T00",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 225,
        "end": 245,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 228,
          "end": 234,
          "name": {
            "type": "Identifier",
            "start": 228,
            "end": 229,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 233,
            "end": 234,
            "typeName": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 237,
          "end": 243
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 233,
          "end": 234,
          "typeName": {
            "type": "Identifier",
            "start": 233,
            "end": 234,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 228,
          "end": 229,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 257,
      "end": 294,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 265,
        "name": "T01",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 268,
        "end": 293,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 271,
          "end": 282,
          "name": {
            "type": "Identifier",
            "start": 271,
            "end": 272,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSNumberKeyword",
            "start": 276,
            "end": 282
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 285,
          "end": 291
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSNumberKeyword",
          "start": 276,
          "end": 282
        },
        "key": {
          "type": "Identifier",
          "start": 271,
          "end": 272,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 305,
      "end": 340,
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 313,
        "name": "T02",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 316,
        "end": 339,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 319,
          "end": 328,
          "name": {
            "type": "Identifier",
            "start": 319,
            "end": 320,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 324,
            "end": 328,
            "typeName": {
              "type": "Identifier",
              "start": 324,
              "end": 328,
              "name": "Date",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 331,
          "end": 337
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 324,
          "end": 328,
          "typeName": {
            "type": "Identifier",
            "start": 324,
            "end": 328,
            "name": "Date",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 319,
          "end": 320,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 351,
      "end": 383,
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 359,
        "name": "T03",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 362,
        "end": 382,
        "typeName": {
          "type": "Identifier",
          "start": 362,
          "end": 368,
          "name": "Record",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 368,
          "end": 382,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 369,
              "end": 373,
              "typeName": {
                "type": "Identifier",
                "start": 369,
                "end": 373,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSNumberKeyword",
              "start": 375,
              "end": 381
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 395,
      "end": 426,
      "id": {
        "type": "Identifier",
        "start": 400,
        "end": 403,
        "name": "T10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 406,
        "end": 425,
        "typeName": {
          "type": "Identifier",
          "start": 406,
          "end": 410,
          "name": "Pick",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 410,
          "end": 425,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 411,
              "end": 416,
              "typeName": {
                "type": "Identifier",
                "start": 411,
                "end": 416,
                "name": "Shape",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSLiteralType",
              "start": 418,
              "end": 424,
              "literal": {
                "type": "Literal",
                "start": 418,
                "end": 424,
                "value": "name",
                "raw": "\"name\""
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 427,
      "end": 457,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 435,
        "name": "T11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 438,
        "end": 456,
        "typeName": {
          "type": "Identifier",
          "start": 438,
          "end": 442,
          "name": "Pick",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 442,
          "end": 456,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 443,
              "end": 448,
              "typeName": {
                "type": "Identifier",
                "start": 443,
                "end": 448,
                "name": "Shape",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSLiteralType",
              "start": 450,
              "end": 455,
              "literal": {
                "type": "Literal",
                "start": 450,
                "end": 455,
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 468,
      "end": 507,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 476,
        "name": "T12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 479,
        "end": 506,
        "typeName": {
          "type": "Identifier",
          "start": 479,
          "end": 483,
          "name": "Pick",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 483,
          "end": 506,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 484,
              "end": 489,
              "typeName": {
                "type": "Identifier",
                "start": 484,
                "end": 489,
                "name": "Shape",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSUnionType",
              "start": 491,
              "end": 505,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 491,
                  "end": 497,
                  "literal": {
                    "type": "Literal",
                    "start": 491,
                    "end": 497,
                    "value": "name",
                    "raw": "\"name\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 500,
                  "end": 505,
                  "literal": {
                    "type": "Literal",
                    "start": 500,
                    "end": 505,
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 518,
      "end": 554,
      "id": {
        "type": "Identifier",
        "start": 523,
        "end": 526,
        "name": "T13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 529,
        "end": 553,
        "typeName": {
          "type": "Identifier",
          "start": 529,
          "end": 533,
          "name": "Pick",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 533,
          "end": 553,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 534,
              "end": 539,
              "typeName": {
                "type": "Identifier",
                "start": 534,
                "end": 539,
                "name": "Shape",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeOperator",
              "start": 541,
              "end": 552,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 547,
                "end": 552,
                "typeName": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 552,
                  "name": "Named",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 555,
      "end": 591,
      "id": {
        "type": "Identifier",
        "start": 560,
        "end": 563,
        "name": "T14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 566,
        "end": 590,
        "typeName": {
          "type": "Identifier",
          "start": 566,
          "end": 570,
          "name": "Pick",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 570,
          "end": 590,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 571,
              "end": 576,
              "typeName": {
                "type": "Identifier",
                "start": 571,
                "end": 576,
                "name": "Shape",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeOperator",
              "start": 578,
              "end": 589,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 584,
                "end": 589,
                "typeName": {
                  "type": "Identifier",
                  "start": 584,
                  "end": 589,
                  "name": "Point",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 602,
      "end": 632,
      "id": {
        "type": "Identifier",
        "start": 607,
        "end": 610,
        "name": "T15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 613,
        "end": 631,
        "typeName": {
          "type": "Identifier",
          "start": 613,
          "end": 617,
          "name": "Pick",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 617,
          "end": 631,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 618,
              "end": 623,
              "typeName": {
                "type": "Identifier",
                "start": 618,
                "end": 623,
                "name": "Shape",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSNeverKeyword",
              "start": 625,
              "end": 630
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 633,
      "end": 667,
      "id": {
        "type": "Identifier",
        "start": 638,
        "end": 641,
        "name": "T16",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 644,
        "end": 666,
        "typeName": {
          "type": "Identifier",
          "start": 644,
          "end": 648,
          "name": "Pick",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 648,
          "end": 666,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 649,
              "end": 654,
              "typeName": {
                "type": "Identifier",
                "start": 649,
                "end": 654,
                "name": "Shape",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 656,
              "end": 665
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 679,
      "end": 740,
      "id": {
        "type": "Identifier",
        "start": 688,
        "end": 690,
        "name": "f1",
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
          "start": 694,
          "end": 698,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 695,
            "end": 698,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 697,
              "end": 698,
              "typeName": {
                "type": "Identifier",
                "start": 697,
                "end": 698,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 700,
        "end": 740,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 706,
            "end": 728,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 710,
                "end": 727,
                "id": {
                  "type": "Identifier",
                  "start": 710,
                  "end": 727,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 711,
                    "end": 727,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 713,
                      "end": 727,
                      "typeName": {
                        "type": "Identifier",
                        "start": 713,
                        "end": 717,
                        "name": "Pick",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 717,
                        "end": 727,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 718,
                            "end": 723,
                            "typeName": {
                              "type": "Identifier",
                              "start": 718,
                              "end": 723,
                              "name": "Shape",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 725,
                            "end": 726,
                            "typeName": {
                              "type": "Identifier",
                              "start": 725,
                              "end": 726,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 690,
        "end": 693,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 691,
            "end": 692,
            "name": {
              "type": "Identifier",
              "start": 691,
              "end": 692,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 742,
      "end": 827,
      "id": {
        "type": "Identifier",
        "start": 751,
        "end": 753,
        "name": "f2",
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
          "start": 781,
          "end": 785,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 782,
            "end": 785,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 784,
              "end": 785,
              "typeName": {
                "type": "Identifier",
                "start": 784,
                "end": 785,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 787,
        "end": 827,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 793,
            "end": 815,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 797,
                "end": 814,
                "id": {
                  "type": "Identifier",
                  "start": 797,
                  "end": 814,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 798,
                    "end": 814,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 800,
                      "end": 814,
                      "typeName": {
                        "type": "Identifier",
                        "start": 800,
                        "end": 804,
                        "name": "Pick",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 804,
                        "end": 814,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 805,
                            "end": 810,
                            "typeName": {
                              "type": "Identifier",
                              "start": 805,
                              "end": 810,
                              "name": "Shape",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 812,
                            "end": 813,
                            "typeName": {
                              "type": "Identifier",
                              "start": 812,
                              "end": 813,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 753,
        "end": 780,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 754,
            "end": 779,
            "name": {
              "type": "Identifier",
              "start": 754,
              "end": 755,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 764,
              "end": 779,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 764,
                  "end": 770
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 773,
                  "end": 779
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 829,
      "end": 900,
      "id": {
        "type": "Identifier",
        "start": 838,
        "end": 840,
        "name": "f3",
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
          "start": 864,
          "end": 868,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 865,
            "end": 868,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 867,
              "end": 868,
              "typeName": {
                "type": "Identifier",
                "start": 867,
                "end": 868,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 870,
        "end": 900,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 876,
            "end": 898,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 880,
                "end": 897,
                "id": {
                  "type": "Identifier",
                  "start": 880,
                  "end": 897,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 881,
                    "end": 897,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 883,
                      "end": 897,
                      "typeName": {
                        "type": "Identifier",
                        "start": 883,
                        "end": 887,
                        "name": "Pick",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 887,
                        "end": 897,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 888,
                            "end": 893,
                            "typeName": {
                              "type": "Identifier",
                              "start": 888,
                              "end": 893,
                              "name": "Shape",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 895,
                            "end": 896,
                            "typeName": {
                              "type": "Identifier",
                              "start": 895,
                              "end": 896,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 840,
        "end": 863,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 841,
            "end": 862,
            "name": {
              "type": "Identifier",
              "start": 841,
              "end": 842,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 851,
              "end": 862,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 857,
                "end": 862,
                "typeName": {
                  "type": "Identifier",
                  "start": 857,
                  "end": 862,
                  "name": "Shape",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 902,
      "end": 973,
      "id": {
        "type": "Identifier",
        "start": 911,
        "end": 913,
        "name": "f4",
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
          "start": 937,
          "end": 941,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 938,
            "end": 941,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 940,
              "end": 941,
              "typeName": {
                "type": "Identifier",
                "start": 940,
                "end": 941,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 943,
        "end": 973,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 949,
            "end": 971,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 953,
                "end": 970,
                "id": {
                  "type": "Identifier",
                  "start": 953,
                  "end": 970,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 954,
                    "end": 970,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 956,
                      "end": 970,
                      "typeName": {
                        "type": "Identifier",
                        "start": 956,
                        "end": 960,
                        "name": "Pick",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 960,
                        "end": 970,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 961,
                            "end": 966,
                            "typeName": {
                              "type": "Identifier",
                              "start": 961,
                              "end": 966,
                              "name": "Shape",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 968,
                            "end": 969,
                            "typeName": {
                              "type": "Identifier",
                              "start": 968,
                              "end": 969,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 913,
        "end": 936,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 914,
            "end": 935,
            "name": {
              "type": "Identifier",
              "start": 914,
              "end": 915,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 924,
              "end": 935,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 930,
                "end": 935,
                "typeName": {
                  "type": "Identifier",
                  "start": 930,
                  "end": 935,
                  "name": "Named",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1002,
      "end": 1150,
      "id": {
        "type": "Identifier",
        "start": 1011,
        "end": 1014,
        "name": "f10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1020,
        "end": 1150,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1026,
            "end": 1043,
            "id": {
              "type": "Identifier",
              "start": 1031,
              "end": 1032,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 1035,
              "end": 1042,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1041,
                "end": 1042,
                "typeName": {
                  "type": "Identifier",
                  "start": 1041,
                  "end": 1042,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1048,
            "end": 1080,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1052,
                "end": 1079,
                "id": {
                  "type": "Identifier",
                  "start": 1052,
                  "end": 1079,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1053,
                    "end": 1079,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 1055,
                      "end": 1079,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 1058,
                        "end": 1070,
                        "name": {
                          "type": "Identifier",
                          "start": 1058,
                          "end": 1059,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 1063,
                          "end": 1070,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1069,
                            "end": 1070,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1069,
                              "end": 1070,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 1073,
                        "end": 1077,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1073,
                          "end": 1074,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1073,
                            "end": 1074,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 1075,
                          "end": 1076,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1075,
                            "end": 1076,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 1063,
                        "end": 1070,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1069,
                          "end": 1070,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1069,
                            "end": 1070,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 1058,
                        "end": 1059,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1085,
            "end": 1117,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1089,
                "end": 1116,
                "id": {
                  "type": "Identifier",
                  "start": 1089,
                  "end": 1116,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1090,
                    "end": 1116,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 1092,
                      "end": 1116,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 1095,
                        "end": 1107,
                        "name": {
                          "type": "Identifier",
                          "start": 1095,
                          "end": 1096,
                          "name": "Q",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 1100,
                          "end": 1107,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1106,
                            "end": 1107,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1106,
                              "end": 1107,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 1110,
                        "end": 1114,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1110,
                          "end": 1111,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1110,
                            "end": 1111,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 1112,
                          "end": 1113,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1112,
                            "end": 1113,
                            "name": "Q",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 1100,
                        "end": 1107,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1106,
                          "end": 1107,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1106,
                            "end": 1107,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 1095,
                        "end": 1096,
                        "name": "Q",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1122,
            "end": 1148,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1126,
                "end": 1147,
                "id": {
                  "type": "Identifier",
                  "start": 1126,
                  "end": 1147,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1127,
                    "end": 1147,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 1129,
                      "end": 1147,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 1132,
                        "end": 1138,
                        "name": {
                          "type": "Identifier",
                          "start": 1132,
                          "end": 1133,
                          "name": "R",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1137,
                          "end": 1138,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1137,
                            "end": 1138,
                            "name": "K",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 1141,
                        "end": 1145,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1141,
                          "end": 1142,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1141,
                            "end": 1142,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 1143,
                          "end": 1144,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1143,
                            "end": 1144,
                            "name": "R",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 1137,
                        "end": 1138,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1137,
                          "end": 1138,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 1132,
                        "end": 1133,
                        "name": "R",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1014,
        "end": 1017,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1015,
            "end": 1016,
            "name": {
              "type": "Identifier",
              "start": 1015,
              "end": 1016,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1152,
      "end": 1371,
      "id": {
        "type": "Identifier",
        "start": 1161,
        "end": 1164,
        "name": "f11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1170,
        "end": 1371,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1176,
            "end": 1208,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1180,
                "end": 1207,
                "id": {
                  "type": "Identifier",
                  "start": 1180,
                  "end": 1207,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1181,
                    "end": 1207,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 1183,
                      "end": 1207,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 1186,
                        "end": 1198,
                        "name": {
                          "type": "Identifier",
                          "start": 1186,
                          "end": 1187,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 1191,
                          "end": 1198,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1197,
                            "end": 1198,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1197,
                              "end": 1198,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 1201,
                        "end": 1205,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1201,
                          "end": 1202,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1201,
                            "end": 1202,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 1203,
                          "end": 1204,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1203,
                            "end": 1204,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 1191,
                        "end": 1198,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1197,
                          "end": 1198,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1197,
                            "end": 1198,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 1186,
                        "end": 1187,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1213,
            "end": 1246,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1217,
                "end": 1245,
                "id": {
                  "type": "Identifier",
                  "start": 1217,
                  "end": 1245,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1218,
                    "end": 1245,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 1220,
                      "end": 1245,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 1223,
                        "end": 1235,
                        "name": {
                          "type": "Identifier",
                          "start": 1223,
                          "end": 1224,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 1228,
                          "end": 1235,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1234,
                            "end": 1235,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1234,
                              "end": 1235,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 1239,
                        "end": 1243,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1239,
                          "end": 1240,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1239,
                            "end": 1240,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 1241,
                          "end": 1242,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1241,
                            "end": 1242,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": true,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 1228,
                        "end": 1235,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1234,
                          "end": 1235,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1234,
                            "end": 1235,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 1223,
                        "end": 1224,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1261,
            "end": 1302,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1265,
                "end": 1301,
                "id": {
                  "type": "Identifier",
                  "start": 1265,
                  "end": 1301,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1266,
                    "end": 1301,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 1268,
                      "end": 1301,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 1280,
                        "end": 1292,
                        "name": {
                          "type": "Identifier",
                          "start": 1280,
                          "end": 1281,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 1285,
                          "end": 1292,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1291,
                            "end": 1292,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1291,
                              "end": 1292,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 1295,
                        "end": 1299,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1295,
                          "end": 1296,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1295,
                            "end": 1296,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 1297,
                          "end": 1298,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1297,
                            "end": 1298,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": null,
                      "readonly": true,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 1285,
                        "end": 1292,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1291,
                          "end": 1292,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1291,
                            "end": 1292,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 1280,
                        "end": 1281,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1317,
            "end": 1359,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1321,
                "end": 1358,
                "id": {
                  "type": "Identifier",
                  "start": 1321,
                  "end": 1358,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1322,
                    "end": 1358,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 1324,
                      "end": 1358,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 1336,
                        "end": 1348,
                        "name": {
                          "type": "Identifier",
                          "start": 1336,
                          "end": 1337,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 1341,
                          "end": 1348,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1347,
                            "end": 1348,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1347,
                              "end": 1348,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 1352,
                        "end": 1356,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1352,
                          "end": 1353,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1352,
                            "end": 1353,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 1354,
                          "end": 1355,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1354,
                            "end": 1355,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": true,
                      "readonly": true,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 1341,
                        "end": 1348,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1347,
                          "end": 1348,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1347,
                            "end": 1348,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 1336,
                        "end": 1337,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1164,
        "end": 1167,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1165,
            "end": 1166,
            "name": {
              "type": "Identifier",
              "start": 1165,
              "end": 1166,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1373,
      "end": 1480,
      "id": {
        "type": "Identifier",
        "start": 1382,
        "end": 1385,
        "name": "f12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1391,
        "end": 1480,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1397,
            "end": 1429,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1401,
                "end": 1428,
                "id": {
                  "type": "Identifier",
                  "start": 1401,
                  "end": 1428,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1402,
                    "end": 1428,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 1404,
                      "end": 1428,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 1407,
                        "end": 1419,
                        "name": {
                          "type": "Identifier",
                          "start": 1407,
                          "end": 1408,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 1412,
                          "end": 1419,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1418,
                            "end": 1419,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1418,
                              "end": 1419,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 1422,
                        "end": 1426,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1422,
                          "end": 1423,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1422,
                            "end": 1423,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 1424,
                          "end": 1425,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1424,
                            "end": 1425,
                            "name": "P",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 1412,
                        "end": 1419,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1418,
                          "end": 1419,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1418,
                            "end": 1419,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 1407,
                        "end": 1408,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1434,
            "end": 1468,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1438,
                "end": 1467,
                "id": {
                  "type": "Identifier",
                  "start": 1438,
                  "end": 1467,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1439,
                    "end": 1467,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 1441,
                      "end": 1467,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 1444,
                        "end": 1456,
                        "name": {
                          "type": "Identifier",
                          "start": 1444,
                          "end": 1445,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 1449,
                          "end": 1456,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1455,
                            "end": 1456,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1455,
                              "end": 1456,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 1459,
                        "end": 1465,
                        "elementType": {
                          "type": "TSIndexedAccessType",
                          "start": 1459,
                          "end": 1463,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 1459,
                            "end": 1460,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1459,
                              "end": 1460,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 1461,
                            "end": 1462,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1461,
                              "end": 1462,
                              "name": "P",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 1449,
                        "end": 1456,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1455,
                          "end": 1456,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1455,
                            "end": 1456,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 1444,
                        "end": 1445,
                        "name": "P",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1385,
        "end": 1388,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1386,
            "end": 1387,
            "name": {
              "type": "Identifier",
              "start": 1386,
              "end": 1387,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1538,
      "end": 1612,
      "id": {
        "type": "Identifier",
        "start": 1555,
        "end": 1569,
        "name": "objAndReadonly",
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
          "start": 1573,
          "end": 1583,
          "name": "primary",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1580,
            "end": 1583,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1582,
              "end": 1583,
              "typeName": {
                "type": "Identifier",
                "start": 1582,
                "end": 1583,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1585,
          "end": 1607,
          "name": "secondary",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1594,
            "end": 1607,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1596,
              "end": 1607,
              "typeName": {
                "type": "Identifier",
                "start": 1596,
                "end": 1604,
                "name": "Readonly",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1604,
                "end": 1607,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1605,
                    "end": 1606,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1605,
                      "end": 1606,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1569,
        "end": 1572,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1570,
            "end": 1571,
            "name": {
              "type": "Identifier",
              "start": 1570,
              "end": 1571,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1608,
        "end": 1611,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1610,
          "end": 1611,
          "typeName": {
            "type": "Identifier",
            "start": 1610,
            "end": 1611,
            "name": "T",
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
      "start": 1613,
      "end": 1685,
      "id": {
        "type": "Identifier",
        "start": 1630,
        "end": 1643,
        "name": "objAndPartial",
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
          "start": 1647,
          "end": 1657,
          "name": "primary",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1654,
            "end": 1657,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1656,
              "end": 1657,
              "typeName": {
                "type": "Identifier",
                "start": 1656,
                "end": 1657,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1659,
          "end": 1680,
          "name": "secondary",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1668,
            "end": 1680,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1670,
              "end": 1680,
              "typeName": {
                "type": "Identifier",
                "start": 1670,
                "end": 1677,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1677,
                "end": 1680,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1678,
                    "end": 1679,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1678,
                      "end": 1679,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1643,
        "end": 1646,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1644,
            "end": 1645,
            "name": {
              "type": "Identifier",
              "start": 1644,
              "end": 1645,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1681,
        "end": 1684,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1683,
          "end": 1684,
          "typeName": {
            "type": "Identifier",
            "start": 1683,
            "end": 1684,
            "name": "T",
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
      "start": 1687,
      "end": 1908,
      "id": {
        "type": "Identifier",
        "start": 1696,
        "end": 1699,
        "name": "f20",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1702,
        "end": 1908,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1708,
            "end": 1758,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1712,
                "end": 1757,
                "id": {
                  "type": "Identifier",
                  "start": 1712,
                  "end": 1714,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1717,
                  "end": 1757,
                  "callee": {
                    "type": "Identifier",
                    "start": 1717,
                    "end": 1731,
                    "name": "objAndReadonly",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 1732,
                      "end": 1746,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1734,
                          "end": 1738,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1734,
                            "end": 1735,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1737,
                            "end": 1738,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1740,
                          "end": 1744,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1740,
                            "end": 1741,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1743,
                            "end": 1744,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 1748,
                      "end": 1756,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1750,
                          "end": 1754,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1750,
                            "end": 1751,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1753,
                            "end": 1754,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1773,
            "end": 1829,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1777,
                "end": 1828,
                "id": {
                  "type": "Identifier",
                  "start": 1777,
                  "end": 1779,
                  "name": "x2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1782,
                  "end": 1828,
                  "callee": {
                    "type": "Identifier",
                    "start": 1782,
                    "end": 1796,
                    "name": "objAndReadonly",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 1797,
                      "end": 1811,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1799,
                          "end": 1803,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1799,
                            "end": 1800,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1802,
                            "end": 1803,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1805,
                          "end": 1809,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1805,
                            "end": 1806,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1808,
                            "end": 1809,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 1813,
                      "end": 1827,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1815,
                          "end": 1819,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1815,
                            "end": 1816,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1818,
                            "end": 1819,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1821,
                          "end": 1825,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1821,
                            "end": 1822,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1824,
                            "end": 1825,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1834,
            "end": 1896,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1838,
                "end": 1895,
                "id": {
                  "type": "Identifier",
                  "start": 1838,
                  "end": 1840,
                  "name": "x3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1843,
                  "end": 1895,
                  "callee": {
                    "type": "Identifier",
                    "start": 1843,
                    "end": 1857,
                    "name": "objAndReadonly",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 1858,
                      "end": 1872,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1860,
                          "end": 1864,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1860,
                            "end": 1861,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1863,
                            "end": 1864,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1866,
                          "end": 1870,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1866,
                            "end": 1867,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1869,
                            "end": 1870,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 1874,
                      "end": 1894,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1876,
                          "end": 1880,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1876,
                            "end": 1877,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1879,
                            "end": 1880,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1882,
                          "end": 1886,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1882,
                            "end": 1883,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1885,
                            "end": 1886,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1888,
                          "end": 1892,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1888,
                            "end": 1889,
                            "name": "z",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1891,
                            "end": 1892,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1910,
      "end": 2118,
      "id": {
        "type": "Identifier",
        "start": 1919,
        "end": 1922,
        "name": "f21",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1925,
        "end": 2118,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1931,
            "end": 1980,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1935,
                "end": 1979,
                "id": {
                  "type": "Identifier",
                  "start": 1935,
                  "end": 1937,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1940,
                  "end": 1979,
                  "callee": {
                    "type": "Identifier",
                    "start": 1940,
                    "end": 1953,
                    "name": "objAndPartial",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 1954,
                      "end": 1968,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1956,
                          "end": 1960,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1956,
                            "end": 1957,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1959,
                            "end": 1960,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1962,
                          "end": 1966,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1962,
                            "end": 1963,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1965,
                            "end": 1966,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 1970,
                      "end": 1978,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1972,
                          "end": 1976,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1972,
                            "end": 1973,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 1975,
                            "end": 1976,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1985,
            "end": 2040,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1989,
                "end": 2039,
                "id": {
                  "type": "Identifier",
                  "start": 1989,
                  "end": 1991,
                  "name": "x2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1994,
                  "end": 2039,
                  "callee": {
                    "type": "Identifier",
                    "start": 1994,
                    "end": 2007,
                    "name": "objAndPartial",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 2008,
                      "end": 2022,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2010,
                          "end": 2014,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2010,
                            "end": 2011,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2013,
                            "end": 2014,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2016,
                          "end": 2020,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2016,
                            "end": 2017,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2019,
                            "end": 2020,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 2024,
                      "end": 2038,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2026,
                          "end": 2030,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2026,
                            "end": 2027,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2029,
                            "end": 2030,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2032,
                          "end": 2036,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2032,
                            "end": 2033,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2035,
                            "end": 2036,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2045,
            "end": 2106,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2049,
                "end": 2105,
                "id": {
                  "type": "Identifier",
                  "start": 2049,
                  "end": 2051,
                  "name": "x3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2054,
                  "end": 2105,
                  "callee": {
                    "type": "Identifier",
                    "start": 2054,
                    "end": 2067,
                    "name": "objAndPartial",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 2068,
                      "end": 2082,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2070,
                          "end": 2074,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2070,
                            "end": 2071,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2073,
                            "end": 2074,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2076,
                          "end": 2080,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2076,
                            "end": 2077,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2079,
                            "end": 2080,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 2084,
                      "end": 2104,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2086,
                          "end": 2090,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2086,
                            "end": 2087,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2089,
                            "end": 2090,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2092,
                          "end": 2096,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2092,
                            "end": 2093,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2095,
                            "end": 2096,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 2098,
                          "end": 2102,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2098,
                            "end": 2099,
                            "name": "z",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 2101,
                            "end": 2102,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2181,
      "end": 2229,
      "id": {
        "type": "Identifier",
        "start": 2191,
        "end": 2194,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2195,
        "end": 2229,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2201,
            "end": 2211,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2201,
              "end": 2202,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2202,
              "end": 2210,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2204,
                "end": 2210
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2216,
            "end": 2227,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2216,
              "end": 2217,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2218,
              "end": 2226,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2220,
                "end": 2226
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
      "type": "FunctionDeclaration",
      "start": 2231,
      "end": 2361,
      "id": {
        "type": "Identifier",
        "start": 2240,
        "end": 2248,
        "name": "setState",
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
          "start": 2271,
          "end": 2277,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2274,
            "end": 2277,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2276,
              "end": 2277,
              "typeName": {
                "type": "Identifier",
                "start": 2276,
                "end": 2277,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 2279,
          "end": 2296,
          "name": "props",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2284,
            "end": 2296,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2286,
              "end": 2296,
              "typeName": {
                "type": "Identifier",
                "start": 2286,
                "end": 2290,
                "name": "Pick",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2290,
                "end": 2296,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2291,
                    "end": 2292,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2291,
                      "end": 2292,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2294,
                    "end": 2295,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2294,
                      "end": 2295,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2298,
        "end": 2361,
        "body": [
          {
            "type": "ForInStatement",
            "start": 2304,
            "end": 2359,
            "left": {
              "type": "VariableDeclaration",
              "start": 2309,
              "end": 2314,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2313,
                  "end": 2314,
                  "id": {
                    "type": "Identifier",
                    "start": 2313,
                    "end": 2314,
                    "name": "k",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 2318,
              "end": 2323,
              "name": "props",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 2325,
              "end": 2359,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2335,
                  "end": 2353,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2335,
                    "end": 2352,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 2335,
                      "end": 2341,
                      "object": {
                        "type": "Identifier",
                        "start": 2335,
                        "end": 2338,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2339,
                        "end": 2340,
                        "name": "k",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": true,
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 2344,
                      "end": 2352,
                      "object": {
                        "type": "Identifier",
                        "start": 2344,
                        "end": 2349,
                        "name": "props",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2350,
                        "end": 2351,
                        "name": "k",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": true,
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2248,
        "end": 2270,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2249,
            "end": 2250,
            "name": {
              "type": "Identifier",
              "start": 2249,
              "end": 2250,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2252,
            "end": 2269,
            "name": {
              "type": "Identifier",
              "start": 2252,
              "end": 2253,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2262,
              "end": 2269,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2268,
                "end": 2269,
                "typeName": {
                  "type": "Identifier",
                  "start": 2268,
                  "end": 2269,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2363,
      "end": 2400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2367,
          "end": 2399,
          "id": {
            "type": "Identifier",
            "start": 2367,
            "end": 2375,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2370,
              "end": 2375,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2372,
                "end": 2375,
                "typeName": {
                  "type": "Identifier",
                  "start": 2372,
                  "end": 2375,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2378,
            "end": 2399,
            "properties": [
              {
                "type": "Property",
                "start": 2380,
                "end": 2390,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2380,
                  "end": 2381,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2383,
                  "end": 2390,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2392,
                "end": 2397,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2392,
                  "end": 2393,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2395,
                  "end": 2397,
                  "value": 42,
                  "raw": "42"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2401,
      "end": 2436,
      "expression": {
        "type": "CallExpression",
        "start": 2401,
        "end": 2436,
        "callee": {
          "type": "Identifier",
          "start": 2401,
          "end": 2409,
          "name": "setState",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 2410,
            "end": 2413,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "ObjectExpression",
            "start": 2415,
            "end": 2435,
            "properties": [
              {
                "type": "Property",
                "start": 2417,
                "end": 2426,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2417,
                  "end": 2418,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2420,
                  "end": 2426,
                  "value": "test",
                  "raw": "\"test\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2428,
                "end": 2433,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2428,
                  "end": 2429,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2431,
                  "end": 2433,
                  "value": 43,
                  "raw": "43"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2437,
      "end": 2464,
      "expression": {
        "type": "CallExpression",
        "start": 2437,
        "end": 2463,
        "callee": {
          "type": "Identifier",
          "start": 2437,
          "end": 2445,
          "name": "setState",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 2446,
            "end": 2449,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "ObjectExpression",
            "start": 2451,
            "end": 2462,
            "properties": [
              {
                "type": "Property",
                "start": 2453,
                "end": 2460,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2453,
                  "end": 2454,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2456,
                  "end": 2460,
                  "value": "hi",
                  "raw": "\"hi\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2465,
      "end": 2497,
      "expression": {
        "type": "CallExpression",
        "start": 2465,
        "end": 2496,
        "callee": {
          "type": "Identifier",
          "start": 2465,
          "end": 2473,
          "name": "setState",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 2474,
            "end": 2477,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "ObjectExpression",
            "start": 2479,
            "end": 2495,
            "properties": [
              {
                "type": "Property",
                "start": 2481,
                "end": 2493,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2481,
                  "end": 2482,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 2484,
                  "end": 2493,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2498,
      "end": 2517,
      "expression": {
        "type": "CallExpression",
        "start": 2498,
        "end": 2516,
        "callee": {
          "type": "Identifier",
          "start": 2498,
          "end": 2506,
          "name": "setState",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 2507,
            "end": 2510,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "ObjectExpression",
            "start": 2512,
            "end": 2515,
            "properties": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2518,
      "end": 2537,
      "expression": {
        "type": "CallExpression",
        "start": 2518,
        "end": 2536,
        "callee": {
          "type": "Identifier",
          "start": 2518,
          "end": 2526,
          "name": "setState",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 2527,
            "end": 2530,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 2532,
            "end": 2535,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2538,
      "end": 2570,
      "expression": {
        "type": "CallExpression",
        "start": 2538,
        "end": 2569,
        "callee": {
          "type": "Identifier",
          "start": 2538,
          "end": 2546,
          "name": "setState",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 2547,
            "end": 2550,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "ObjectExpression",
            "start": 2552,
            "end": 2568,
            "properties": [
              {
                "type": "Property",
                "start": 2554,
                "end": 2566,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2554,
                  "end": 2555,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 2557,
                  "end": 2566,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2581,
      "end": 2608,
      "expression": {
        "type": "CallExpression",
        "start": 2581,
        "end": 2607,
        "callee": {
          "type": "Identifier",
          "start": 2581,
          "end": 2589,
          "name": "setState",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 2590,
            "end": 2593,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "ObjectExpression",
            "start": 2595,
            "end": 2606,
            "properties": [
              {
                "type": "Property",
                "start": 2597,
                "end": 2604,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2597,
                  "end": 2598,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2600,
                  "end": 2604,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2620,
      "end": 2786,
      "id": {
        "type": "Identifier",
        "start": 2626,
        "end": 2627,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2631,
        "end": 2786,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2637,
            "end": 2646,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2637,
              "end": 2642,
              "name": "state",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2642,
              "end": 2645,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2644,
                "end": 2645,
                "typeName": {
                  "type": "Identifier",
                  "start": 2644,
                  "end": 2645,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2651,
            "end": 2784,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2651,
              "end": 2659,
              "name": "setState",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2659,
              "end": 2784,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2679,
                  "end": 2696,
                  "name": "props",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2684,
                    "end": 2696,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2686,
                      "end": 2696,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2686,
                        "end": 2690,
                        "name": "Pick",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 2690,
                        "end": 2696,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 2691,
                            "end": 2692,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2691,
                              "end": 2692,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 2694,
                            "end": 2695,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2694,
                              "end": 2695,
                              "name": "K",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2698,
                "end": 2784,
                "body": [
                  {
                    "type": "ForInStatement",
                    "start": 2708,
                    "end": 2778,
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 2713,
                      "end": 2718,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 2717,
                          "end": 2718,
                          "id": {
                            "type": "Identifier",
                            "start": 2717,
                            "end": 2718,
                            "name": "k",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "let",
                      "declare": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 2722,
                      "end": 2727,
                      "name": "props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 2729,
                      "end": 2778,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2743,
                          "end": 2768,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 2743,
                            "end": 2767,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 2743,
                              "end": 2756,
                              "object": {
                                "type": "MemberExpression",
                                "start": 2743,
                                "end": 2753,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2743,
                                  "end": 2747
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2748,
                                  "end": 2753,
                                  "name": "state",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2754,
                                "end": 2755,
                                "name": "k",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": true,
                              "optional": false
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 2759,
                              "end": 2767,
                              "object": {
                                "type": "Identifier",
                                "start": 2759,
                                "end": 2764,
                                "name": "props",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2765,
                                "end": 2766,
                                "name": "k",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": true,
                              "optional": false
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2659,
                "end": 2678,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2660,
                    "end": 2677,
                    "name": {
                      "type": "Identifier",
                      "start": 2660,
                      "end": 2661,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 2670,
                      "end": 2677,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2676,
                        "end": 2677,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2676,
                          "end": 2677,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2627,
        "end": 2630,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2628,
            "end": 2629,
            "name": {
              "type": "Identifier",
              "start": 2628,
              "end": 2629,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2788,
      "end": 2809,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2792,
          "end": 2808,
          "id": {
            "type": "Identifier",
            "start": 2792,
            "end": 2793,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 2796,
            "end": 2808,
            "callee": {
              "type": "Identifier",
              "start": 2800,
              "end": 2801,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2801,
              "end": 2806,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2802,
                  "end": 2805,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2802,
                    "end": 2805,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2810,
      "end": 2843,
      "expression": {
        "type": "CallExpression",
        "start": 2810,
        "end": 2842,
        "callee": {
          "type": "MemberExpression",
          "start": 2810,
          "end": 2820,
          "object": {
            "type": "Identifier",
            "start": 2810,
            "end": 2811,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2812,
            "end": 2820,
            "name": "setState",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2821,
            "end": 2841,
            "properties": [
              {
                "type": "Property",
                "start": 2823,
                "end": 2832,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2823,
                  "end": 2824,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2826,
                  "end": 2832,
                  "value": "test",
                  "raw": "\"test\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2834,
                "end": 2839,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2834,
                  "end": 2835,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2837,
                  "end": 2839,
                  "value": 43,
                  "raw": "43"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2844,
      "end": 2868,
      "expression": {
        "type": "CallExpression",
        "start": 2844,
        "end": 2867,
        "callee": {
          "type": "MemberExpression",
          "start": 2844,
          "end": 2854,
          "object": {
            "type": "Identifier",
            "start": 2844,
            "end": 2845,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2846,
            "end": 2854,
            "name": "setState",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2855,
            "end": 2866,
            "properties": [
              {
                "type": "Property",
                "start": 2857,
                "end": 2864,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2857,
                  "end": 2858,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2860,
                  "end": 2864,
                  "value": "hi",
                  "raw": "\"hi\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2869,
      "end": 2898,
      "expression": {
        "type": "CallExpression",
        "start": 2869,
        "end": 2897,
        "callee": {
          "type": "MemberExpression",
          "start": 2869,
          "end": 2879,
          "object": {
            "type": "Identifier",
            "start": 2869,
            "end": 2870,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2871,
            "end": 2879,
            "name": "setState",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2880,
            "end": 2896,
            "properties": [
              {
                "type": "Property",
                "start": 2882,
                "end": 2894,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2882,
                  "end": 2883,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 2885,
                  "end": 2894,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2899,
      "end": 2915,
      "expression": {
        "type": "CallExpression",
        "start": 2899,
        "end": 2914,
        "callee": {
          "type": "MemberExpression",
          "start": 2899,
          "end": 2909,
          "object": {
            "type": "Identifier",
            "start": 2899,
            "end": 2900,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2901,
            "end": 2909,
            "name": "setState",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2910,
            "end": 2913,
            "properties": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2916,
      "end": 2932,
      "expression": {
        "type": "CallExpression",
        "start": 2916,
        "end": 2931,
        "callee": {
          "type": "MemberExpression",
          "start": 2916,
          "end": 2926,
          "object": {
            "type": "Identifier",
            "start": 2916,
            "end": 2917,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2918,
            "end": 2926,
            "name": "setState",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 2927,
            "end": 2930,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2933,
      "end": 2962,
      "expression": {
        "type": "CallExpression",
        "start": 2933,
        "end": 2961,
        "callee": {
          "type": "MemberExpression",
          "start": 2933,
          "end": 2943,
          "object": {
            "type": "Identifier",
            "start": 2933,
            "end": 2934,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2935,
            "end": 2943,
            "name": "setState",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2944,
            "end": 2960,
            "properties": [
              {
                "type": "Property",
                "start": 2946,
                "end": 2958,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2946,
                  "end": 2947,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 2949,
                  "end": 2958,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2973,
      "end": 2997,
      "expression": {
        "type": "CallExpression",
        "start": 2973,
        "end": 2996,
        "callee": {
          "type": "MemberExpression",
          "start": 2973,
          "end": 2983,
          "object": {
            "type": "Identifier",
            "start": 2973,
            "end": 2974,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2975,
            "end": 2983,
            "name": "setState",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 2984,
            "end": 2995,
            "properties": [
              {
                "type": "Property",
                "start": 2986,
                "end": 2993,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2986,
                  "end": 2987,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 2989,
                  "end": 2993,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3009,
      "end": 3054,
      "id": {
        "type": "Identifier",
        "start": 3014,
        "end": 3016,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3019,
        "end": 3053,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3021,
            "end": 3032,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3021,
              "end": 3022,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3023,
              "end": 3031,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3025,
                "end": 3031
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 3033,
            "end": 3051,
            "parameters": [
              {
                "type": "Identifier",
                "start": 3034,
                "end": 3045,
                "name": "key",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3037,
                  "end": 3045,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3039,
                    "end": 3045
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3046,
              "end": 3051,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3048,
                "end": 3051
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3056,
      "end": 3081,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3060,
          "end": 3080,
          "id": {
            "type": "Identifier",
            "start": 3060,
            "end": 3066,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3062,
              "end": 3066,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3064,
                "end": 3066,
                "typeName": {
                  "type": "Identifier",
                  "start": 3064,
                  "end": 3066,
                  "name": "T2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 3069,
            "end": 3080,
            "properties": [
              {
                "type": "Property",
                "start": 3071,
                "end": 3078,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3071,
                  "end": 3072,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 3074,
                  "end": 3078,
                  "value": "no",
                  "raw": "'no'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3092,
      "end": 3126,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3096,
          "end": 3125,
          "id": {
            "type": "Identifier",
            "start": 3096,
            "end": 3111,
            "name": "x2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3098,
              "end": 3111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3100,
                "end": 3111,
                "typeName": {
                  "type": "Identifier",
                  "start": 3100,
                  "end": 3107,
                  "name": "Partial",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3107,
                  "end": 3111,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 3108,
                      "end": 3110,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3108,
                        "end": 3110,
                        "name": "T2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 3114,
            "end": 3125,
            "properties": [
              {
                "type": "Property",
                "start": 3116,
                "end": 3123,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3116,
                  "end": 3117,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 3119,
                  "end": 3123,
                  "value": "no",
                  "raw": "'no'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3136,
      "end": 3184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3140,
          "end": 3183,
          "id": {
            "type": "Identifier",
            "start": 3140,
            "end": 3169,
            "name": "x3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3142,
              "end": 3169,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 3144,
                "end": 3169,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 3147,
                  "end": 3160,
                  "name": {
                    "type": "Identifier",
                    "start": 3147,
                    "end": 3148,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 3152,
                    "end": 3160,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3158,
                      "end": 3160,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3158,
                        "end": 3160,
                        "name": "T2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 3163,
                  "end": 3168,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 3163,
                    "end": 3165,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3163,
                      "end": 3165,
                      "name": "T2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 3166,
                    "end": 3167,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3166,
                      "end": 3167,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 3152,
                  "end": 3160,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3158,
                    "end": 3160,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3158,
                      "end": 3160,
                      "name": "T2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 3147,
                  "end": 3148,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 3172,
            "end": 3183,
            "properties": [
              {
                "type": "Property",
                "start": 3174,
                "end": 3181,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3174,
                  "end": 3175,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 3177,
                  "end": 3181,
                  "value": "no",
                  "raw": "'no'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3218,
      "end": 3340,
      "id": {
        "type": "Identifier",
        "start": 3223,
        "end": 3227,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3227,
        "end": 3249,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3228,
            "end": 3229,
            "name": {
              "type": "Identifier",
              "start": 3228,
              "end": 3229,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3231,
            "end": 3248,
            "name": {
              "type": "Identifier",
              "start": 3231,
              "end": 3232,
              "name": "F",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3241,
              "end": 3248,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3247,
                "end": 3248,
                "typeName": {
                  "type": "Identifier",
                  "start": 3247,
                  "end": 3248,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3252,
        "end": 3339,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3258,
            "end": 3280,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3258,
              "end": 3260,
              "name": "pf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3260,
              "end": 3279,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 3262,
                "end": 3279,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 3264,
                  "end": 3270,
                  "name": {
                    "type": "Identifier",
                    "start": 3264,
                    "end": 3265,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3269,
                    "end": 3270,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3269,
                      "end": 3270,
                      "name": "F",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 3274,
                  "end": 3278,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 3274,
                    "end": 3275,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3274,
                      "end": 3275,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 3276,
                    "end": 3277,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3276,
                      "end": 3277,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "optional": true,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 3269,
                  "end": 3270,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3269,
                    "end": 3270,
                    "name": "F",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "key": {
                  "type": "Identifier",
                  "start": 3264,
                  "end": 3265,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 3285,
            "end": 3307,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3285,
              "end": 3287,
              "name": "pt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3287,
              "end": 3306,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 3289,
                "end": 3306,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 3291,
                  "end": 3297,
                  "name": {
                    "type": "Identifier",
                    "start": 3291,
                    "end": 3292,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3296,
                    "end": 3297,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3296,
                      "end": 3297,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 3301,
                  "end": 3305,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 3301,
                    "end": 3302,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3301,
                      "end": 3302,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 3303,
                    "end": 3304,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3303,
                      "end": 3304,
                      "name": "P",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "optional": true,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 3296,
                  "end": 3297,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3296,
                    "end": 3297,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "key": {
                  "type": "Identifier",
                  "start": 3291,
                  "end": 3292,
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
      "type": "TSTypeAliasDeclaration",
      "start": 3341,
      "end": 3374,
      "id": {
        "type": "Identifier",
        "start": 3346,
        "end": 3347,
        "name": "O",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3350,
        "end": 3373,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3351,
            "end": 3361,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3351,
              "end": 3352,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3352,
              "end": 3360,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3354,
                "end": 3360
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 3362,
            "end": 3372,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3362,
              "end": 3363,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3363,
              "end": 3372,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 3365,
                "end": 3372
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
      "type": "VariableDeclaration",
      "start": 3375,
      "end": 3403,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3379,
          "end": 3402,
          "id": {
            "type": "Identifier",
            "start": 3379,
            "end": 3383,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3380,
              "end": 3383,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3382,
                "end": 3383,
                "typeName": {
                  "type": "Identifier",
                  "start": 3382,
                  "end": 3383,
                  "name": "O",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 3386,
            "end": 3402,
            "properties": [
              {
                "type": "Property",
                "start": 3387,
                "end": 3391,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3387,
                  "end": 3388,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 3390,
                  "end": 3391,
                  "value": 5,
                  "raw": "5"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 3393,
                "end": 3401,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3393,
                  "end": 3394,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 3396,
                  "end": 3401,
                  "value": false,
                  "raw": "false"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3404,
      "end": 3472,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3408,
          "end": 3471,
          "id": {
            "type": "Identifier",
            "start": 3408,
            "end": 3423,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3409,
              "end": 3423,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3411,
                "end": 3423,
                "typeName": {
                  "type": "Identifier",
                  "start": 3411,
                  "end": 3415,
                  "name": "Foo2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3415,
                  "end": 3423,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 3416,
                      "end": 3417,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3416,
                        "end": 3417,
                        "name": "O",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 3419,
                      "end": 3422,
                      "literal": {
                        "type": "Literal",
                        "start": 3419,
                        "end": 3422,
                        "value": "x",
                        "raw": "'x'"
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 3426,
            "end": 3471,
            "properties": [
              {
                "type": "Property",
                "start": 3432,
                "end": 3442,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3432,
                  "end": 3434,
                  "name": "pf",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 3436,
                  "end": 3442,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3437,
                      "end": 3441,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3437,
                        "end": 3438,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 3440,
                        "end": 3441,
                        "value": 7,
                        "raw": "7"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 3448,
                "end": 3468,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3448,
                  "end": 3450,
                  "name": "pt",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 3452,
                  "end": 3468,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3453,
                      "end": 3457,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3453,
                        "end": 3454,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 3456,
                        "end": 3457,
                        "value": 7,
                        "raw": "7"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 3459,
                      "end": 3467,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3459,
                        "end": 3460,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 3462,
                        "end": 3467,
                        "value": false,
                        "raw": "false"
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3496,
      "end": 3584,
      "id": {
        "type": "Identifier",
        "start": 3505,
        "end": 3510,
        "name": "test1",
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
          "start": 3533,
          "end": 3548,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3536,
            "end": 3548,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3538,
              "end": 3548,
              "typeName": {
                "type": "Identifier",
                "start": 3538,
                "end": 3542,
                "name": "Pick",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3542,
                "end": 3548,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3543,
                    "end": 3544,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3543,
                      "end": 3544,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 3546,
                    "end": 3547,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3546,
                      "end": 3547,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3550,
        "end": 3584,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3556,
            "end": 3572,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3560,
                "end": 3571,
                "id": {
                  "type": "Identifier",
                  "start": 3560,
                  "end": 3561,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 3564,
                  "end": 3571,
                  "object": {
                    "type": "Identifier",
                    "start": 3564,
                    "end": 3567,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3568,
                    "end": 3571,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3510,
        "end": 3532,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3511,
            "end": 3512,
            "name": {
              "type": "Identifier",
              "start": 3511,
              "end": 3512,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3514,
            "end": 3531,
            "name": {
              "type": "Identifier",
              "start": 3514,
              "end": 3515,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3524,
              "end": 3531,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3530,
                "end": 3531,
                "typeName": {
                  "type": "Identifier",
                  "start": 3530,
                  "end": 3531,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3586,
      "end": 3681,
      "id": {
        "type": "Identifier",
        "start": 3595,
        "end": 3600,
        "name": "test2",
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
          "start": 3623,
          "end": 3645,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3626,
            "end": 3645,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3628,
              "end": 3645,
              "typeName": {
                "type": "Identifier",
                "start": 3628,
                "end": 3634,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3634,
                "end": 3645,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3635,
                    "end": 3636,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3635,
                      "end": 3636,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 3638,
                    "end": 3644
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3647,
        "end": 3681,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3653,
            "end": 3669,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3657,
                "end": 3668,
                "id": {
                  "type": "Identifier",
                  "start": 3657,
                  "end": 3658,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 3661,
                  "end": 3668,
                  "object": {
                    "type": "Identifier",
                    "start": 3661,
                    "end": 3664,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3665,
                    "end": 3668,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3600,
        "end": 3622,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3601,
            "end": 3602,
            "name": {
              "type": "Identifier",
              "start": 3601,
              "end": 3602,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3604,
            "end": 3621,
            "name": {
              "type": "Identifier",
              "start": 3604,
              "end": 3605,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3614,
              "end": 3621,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3620,
                "end": 3621,
                "typeName": {
                  "type": "Identifier",
                  "start": 3620,
                  "end": 3621,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
