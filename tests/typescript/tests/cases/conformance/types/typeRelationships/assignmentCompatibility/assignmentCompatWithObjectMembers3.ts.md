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
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 178
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
            "name": "S2",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 192
          },
          "typeArguments": null,
          "start": 190,
          "end": 192
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 198
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              },
              "start": 198,
              "end": 206
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
            "start": 195,
            "end": 207
          }
        ],
        "start": 193,
        "end": 209
      },
      "abstract": false,
      "declare": false,
      "start": 171,
      "end": 209
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 216,
        "end": 217
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
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 229,
            "end": 231
          },
          "typeArguments": null,
          "start": 229,
          "end": 231
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 237
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 239,
                "end": 245
              },
              "start": 237,
              "end": 245
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
            "start": 234,
            "end": 246
          }
        ],
        "start": 232,
        "end": 248
      },
      "abstract": false,
      "declare": false,
      "start": 210,
      "end": 248
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 257
                },
                "typeArguments": null,
                "start": 256,
                "end": 257
              },
              "start": 254,
              "end": 257
            },
            "start": 253,
            "end": 257
          },
          "init": null,
          "definite": false,
          "start": 253,
          "end": 257
        }
      ],
      "declare": false,
      "start": 249,
      "end": 258
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
            "name": "t",
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
                  "start": 266,
                  "end": 267
                },
                "typeArguments": null,
                "start": 266,
                "end": 267
              },
              "start": 264,
              "end": 267
            },
            "start": 263,
            "end": 267
          },
          "init": null,
          "definite": false,
          "start": 263,
          "end": 267
        }
      ],
      "declare": false,
      "start": 259,
      "end": 268
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S2",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 282
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
              "start": 285,
              "end": 288
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 290,
                "end": 296
              },
              "start": 288,
              "end": 296
            },
            "accessibility": null,
            "static": false,
            "start": 285,
            "end": 297
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 301
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 304,
                "end": 310
              },
              "start": 302,
              "end": 310
            },
            "accessibility": null,
            "static": false,
            "start": 298,
            "end": 310
          }
        ],
        "start": 283,
        "end": 312
      },
      "declare": false,
      "start": 270,
      "end": 312
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 325
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
              "start": 328,
              "end": 331
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 333,
                "end": 339
              },
              "start": 331,
              "end": 339
            },
            "accessibility": null,
            "static": false,
            "start": 328,
            "end": 340
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 344
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 347,
                "end": 353
              },
              "start": 345,
              "end": 353
            },
            "accessibility": null,
            "static": false,
            "start": 341,
            "end": 353
          }
        ],
        "start": 326,
        "end": 355
      },
      "declare": false,
      "start": 313,
      "end": 355
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
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 366
                },
                "typeArguments": null,
                "start": 364,
                "end": 366
              },
              "start": 362,
              "end": 366
            },
            "start": 360,
            "end": 366
          },
          "init": null,
          "definite": false,
          "start": 360,
          "end": 366
        }
      ],
      "declare": false,
      "start": 356,
      "end": 367
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 378
                },
                "typeArguments": null,
                "start": 376,
                "end": 378
              },
              "start": 374,
              "end": 378
            },
            "start": 372,
            "end": 378
          },
          "init": null,
          "definite": false,
          "start": 372,
          "end": 378
        }
      ],
      "declare": false,
      "start": 368,
      "end": 379
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 390,
                      "end": 393
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 395,
                        "end": 401
                      },
                      "start": 393,
                      "end": 401
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 390,
                    "end": 402
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 403,
                      "end": 406
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 409,
                        "end": 415
                      },
                      "start": 407,
                      "end": 415
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 403,
                    "end": 415
                  }
                ],
                "start": 388,
                "end": 417
              },
              "start": 386,
              "end": 417
            },
            "start": 385,
            "end": 417
          },
          "init": null,
          "definite": false,
          "start": 385,
          "end": 417
        }
      ],
      "declare": false,
      "start": 381,
      "end": 417
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 427,
                      "end": 430
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 432,
                        "end": 438
                      },
                      "start": 430,
                      "end": 438
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 427,
                    "end": 439
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 440,
                      "end": 443
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 446,
                        "end": 452
                      },
                      "start": 444,
                      "end": 452
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 440,
                    "end": 452
                  }
                ],
                "start": 425,
                "end": 454
              },
              "start": 423,
              "end": 454
            },
            "start": 422,
            "end": 454
          },
          "init": null,
          "definite": false,
          "start": 422,
          "end": 454
        }
      ],
      "declare": false,
      "start": 418,
      "end": 454
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 464,
                  "end": 466
                },
                "typeArguments": null,
                "start": 464,
                "end": 466
              },
              "start": 462,
              "end": 466
            },
            "start": 460,
            "end": 466
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 471,
                  "end": 474
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 476,
                  "end": 478
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 471,
                "end": 478
              }
            ],
            "start": 469,
            "end": 480
          },
          "definite": false,
          "start": 460,
          "end": 480
        }
      ],
      "declare": false,
      "start": 456,
      "end": 481
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 490,
                  "end": 492
                },
                "typeArguments": null,
                "start": 490,
                "end": 492
              },
              "start": 488,
              "end": 492
            },
            "start": 486,
            "end": 492
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 497,
                  "end": 500
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 502,
                  "end": 504
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 497,
                "end": 504
              }
            ],
            "start": 495,
            "end": 506
          },
          "definite": false,
          "start": 486,
          "end": 506
        }
      ],
      "declare": false,
      "start": 482,
      "end": 507
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 509,
          "end": 510
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 513,
          "end": 514
        },
        "start": 509,
        "end": 514
      },
      "directive": null,
      "start": 509,
      "end": 515
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 516,
          "end": 517
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 520,
          "end": 521
        },
        "start": 516,
        "end": 521
      },
      "directive": null,
      "start": 516,
      "end": 522
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 523,
          "end": 524
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 527,
          "end": 529
        },
        "start": 523,
        "end": 529
      },
      "directive": null,
      "start": 523,
      "end": 530
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 531,
          "end": 532
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 535,
          "end": 537
        },
        "start": 531,
        "end": 537
      },
      "directive": null,
      "start": 531,
      "end": 538
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 540,
          "end": 542
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null,
          "start": 545,
          "end": 547
        },
        "start": 540,
        "end": 547
      },
      "directive": null,
      "start": 540,
      "end": 548
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null,
          "start": 549,
          "end": 551
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 554,
          "end": 556
        },
        "start": 549,
        "end": 556
      },
      "directive": null,
      "start": 549,
      "end": 557
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 558,
          "end": 560
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 563,
          "end": 564
        },
        "start": 558,
        "end": 564
      },
      "directive": null,
      "start": 558,
      "end": 565
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 566,
          "end": 568
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 571,
          "end": 572
        },
        "start": 566,
        "end": 572
      },
      "directive": null,
      "start": 566,
      "end": 573
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 574,
          "end": 576
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 579,
          "end": 581
        },
        "start": 574,
        "end": 581
      },
      "directive": null,
      "start": 574,
      "end": 582
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 584,
          "end": 585
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 588,
          "end": 589
        },
        "start": 584,
        "end": 589
      },
      "directive": null,
      "start": 584,
      "end": 590
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 591,
          "end": 592
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 595,
          "end": 596
        },
        "start": 591,
        "end": 596
      },
      "directive": null,
      "start": 591,
      "end": 597
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 598,
          "end": 599
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 602,
          "end": 603
        },
        "start": 598,
        "end": 603
      },
      "directive": null,
      "start": 598,
      "end": 604
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 605,
          "end": 606
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 609,
          "end": 611
        },
        "start": 605,
        "end": 611
      },
      "directive": null,
      "start": 605,
      "end": 612
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 613,
          "end": 614
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 617,
          "end": 619
        },
        "start": 613,
        "end": 619
      },
      "directive": null,
      "start": 613,
      "end": 620
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 622,
          "end": 624
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 627,
          "end": 629
        },
        "start": 622,
        "end": 629
      },
      "directive": null,
      "start": 622,
      "end": 630
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 631,
          "end": 633
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 636,
          "end": 638
        },
        "start": 631,
        "end": 638
      },
      "directive": null,
      "start": 631,
      "end": 639
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 640,
          "end": 642
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 645,
          "end": 646
        },
        "start": 640,
        "end": 646
      },
      "directive": null,
      "start": 640,
      "end": 647
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 648,
          "end": 650
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null,
          "start": 653,
          "end": 655
        },
        "start": 648,
        "end": 655
      },
      "directive": null,
      "start": 648,
      "end": 656
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 657,
          "end": 659
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 662,
          "end": 663
        },
        "start": 657,
        "end": 663
      },
      "directive": null,
      "start": 657,
      "end": 664
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 171,
  "end": 664
}
```
