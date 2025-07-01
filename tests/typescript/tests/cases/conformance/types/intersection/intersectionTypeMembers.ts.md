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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 192
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 196
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 198,
                "end": 204
              },
              "start": 196,
              "end": 204
            },
            "accessibility": null,
            "static": false,
            "start": 195,
            "end": 204
          }
        ],
        "start": 193,
        "end": 206
      },
      "declare": false,
      "start": 181,
      "end": 206
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 218
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 224,
                "end": 230
              },
              "start": 222,
              "end": 230
            },
            "accessibility": null,
            "static": false,
            "start": 221,
            "end": 230
          }
        ],
        "start": 219,
        "end": 232
      },
      "declare": false,
      "start": 207,
      "end": 232
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 244
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 248
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 250,
                "end": 256
              },
              "start": 248,
              "end": 256
            },
            "accessibility": null,
            "static": false,
            "start": 247,
            "end": 256
          }
        ],
        "start": 245,
        "end": 258
      },
      "declare": false,
      "start": 233,
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
            "name": "abc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 269,
                      "end": 270
                    },
                    "typeArguments": null,
                    "start": 269,
                    "end": 270
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 273,
                      "end": 274
                    },
                    "typeArguments": null,
                    "start": 273,
                    "end": 274
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 278
                    },
                    "typeArguments": null,
                    "start": 277,
                    "end": 278
                  }
                ],
                "start": 269,
                "end": 278
              },
              "start": 267,
              "end": 278
            },
            "start": 264,
            "end": 278
          },
          "init": null,
          "definite": false,
          "start": 264,
          "end": 278
        }
      ],
      "declare": false,
      "start": 260,
      "end": 279
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 283
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 285
          },
          "optional": false,
          "computed": false,
          "start": 280,
          "end": 285
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 288,
          "end": 295
        },
        "start": 280,
        "end": 295
      },
      "directive": null,
      "start": 280,
      "end": 296
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 300
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 302
          },
          "optional": false,
          "computed": false,
          "start": 297,
          "end": 302
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 305,
          "end": 312
        },
        "start": 297,
        "end": 312
      },
      "directive": null,
      "start": 297,
      "end": 313
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 317
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 319
          },
          "optional": false,
          "computed": false,
          "start": 314,
          "end": 319
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 322,
          "end": 329
        },
        "start": 314,
        "end": 329
      },
      "directive": null,
      "start": 314,
      "end": 330
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 343
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 347
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 350
                },
                "typeArguments": null,
                "start": 349,
                "end": 350
              },
              "start": 347,
              "end": 350
            },
            "accessibility": null,
            "static": false,
            "start": 346,
            "end": 350
          }
        ],
        "start": 344,
        "end": 352
      },
      "declare": false,
      "start": 332,
      "end": 352
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 364
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 368
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
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
            "accessibility": null,
            "static": false,
            "start": 367,
            "end": 371
          }
        ],
        "start": 365,
        "end": 373
      },
      "declare": false,
      "start": 353,
      "end": 373
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 384,
        "end": 385
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 389
            },
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
                  "start": 391,
                  "end": 392
                },
                "typeArguments": null,
                "start": 391,
                "end": 392
              },
              "start": 389,
              "end": 392
            },
            "accessibility": null,
            "static": false,
            "start": 388,
            "end": 392
          }
        ],
        "start": 386,
        "end": 394
      },
      "declare": false,
      "start": 374,
      "end": 394
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
            "name": "xyz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 405,
                      "end": 406
                    },
                    "typeArguments": null,
                    "start": 405,
                    "end": 406
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 409,
                      "end": 410
                    },
                    "typeArguments": null,
                    "start": 409,
                    "end": 410
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 413,
                      "end": 414
                    },
                    "typeArguments": null,
                    "start": 413,
                    "end": 414
                  }
                ],
                "start": 405,
                "end": 414
              },
              "start": 403,
              "end": 414
            },
            "start": 400,
            "end": 414
          },
          "init": null,
          "definite": false,
          "start": 400,
          "end": 414
        }
      ],
      "declare": false,
      "start": 396,
      "end": 415
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 419
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 421
            },
            "optional": false,
            "computed": false,
            "start": 416,
            "end": 421
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 423
          },
          "optional": false,
          "computed": false,
          "start": 416,
          "end": 423
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 426,
          "end": 433
        },
        "start": 416,
        "end": 433
      },
      "directive": null,
      "start": 416,
      "end": 434
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 438
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 440
            },
            "optional": false,
            "computed": false,
            "start": 435,
            "end": 440
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 442
          },
          "optional": false,
          "computed": false,
          "start": 435,
          "end": 442
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 445,
          "end": 452
        },
        "start": 435,
        "end": 452
      },
      "directive": null,
      "start": 435,
      "end": 453
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "xyz",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 457
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 459
            },
            "optional": false,
            "computed": false,
            "start": 454,
            "end": 459
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 460,
            "end": 461
          },
          "optional": false,
          "computed": false,
          "start": 454,
          "end": 461
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 464,
          "end": 471
        },
        "start": 454,
        "end": 471
      },
      "directive": null,
      "start": 454,
      "end": 472
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null,
        "start": 479,
        "end": 481
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                "type": "TSStringKeyword",
                "start": 488,
                "end": 494
              },
              "start": 486,
              "end": 494
            },
            "start": 485,
            "end": 494
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 499,
            "end": 505
          },
          "start": 496,
          "end": 505
        },
        "start": 484,
        "end": 505
      },
      "declare": false,
      "start": 474,
      "end": 506
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 512,
        "end": 514
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                "type": "TSNumberKeyword",
                "start": 521,
                "end": 527
              },
              "start": 519,
              "end": 527
            },
            "start": 518,
            "end": 527
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 532,
            "end": 538
          },
          "start": 529,
          "end": 538
        },
        "start": 517,
        "end": 538
      },
      "declare": false,
      "start": 507,
      "end": 539
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 548,
                      "end": 550
                    },
                    "typeArguments": null,
                    "start": 548,
                    "end": 550
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 553,
                      "end": 555
                    },
                    "typeArguments": null,
                    "start": 553,
                    "end": 555
                  }
                ],
                "start": 548,
                "end": 555
              },
              "start": 546,
              "end": 555
            },
            "start": 545,
            "end": 555
          },
          "init": null,
          "definite": false,
          "start": 545,
          "end": 555
        }
      ],
      "declare": false,
      "start": 541,
      "end": 556
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
            "typeAnnotation": null,
            "start": 561,
            "end": 562
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 566
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 567,
                "end": 574
              }
            ],
            "optional": false,
            "start": 565,
            "end": 575
          },
          "definite": false,
          "start": 561,
          "end": 575
        }
      ],
      "declare": false,
      "start": 557,
      "end": 576
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 582
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 585,
              "end": 586
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 587,
                "end": 589
              }
            ],
            "optional": false,
            "start": 585,
            "end": 590
          },
          "definite": false,
          "start": 581,
          "end": 590
        }
      ],
      "declare": false,
      "start": 577,
      "end": 591
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 603,
        "end": 604
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
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 611,
              "end": 617
            },
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
                      "name": "doublyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 621,
                      "end": 633
                    },
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
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 637,
                              "end": 638
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 640,
                                "end": 646
                              },
                              "start": 638,
                              "end": 646
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 637,
                            "end": 647
                          }
                        ],
                        "start": 635,
                        "end": 649
                      },
                      "start": 633,
                      "end": 649
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 621,
                    "end": 650
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "different",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 651,
                      "end": 660
                    },
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
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 664,
                              "end": 665
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 667,
                                "end": 673
                              },
                              "start": 665,
                              "end": 673
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 664,
                            "end": 673
                          }
                        ],
                        "start": 662,
                        "end": 675
                      },
                      "start": 660,
                      "end": 675
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 651,
                    "end": 675
                  }
                ],
                "start": 619,
                "end": 677
              },
              "start": 617,
              "end": 677
            },
            "accessibility": null,
            "static": false,
            "start": 611,
            "end": 678
          }
        ],
        "start": 605,
        "end": 680
      },
      "declare": false,
      "start": 593,
      "end": 680
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 691,
        "end": 692
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
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 705
            },
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
                      "name": "doublyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 709,
                      "end": 721
                    },
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
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 725,
                              "end": 726
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 728,
                                "end": 734
                              },
                              "start": 726,
                              "end": 734
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 725,
                            "end": 735
                          }
                        ],
                        "start": 723,
                        "end": 737
                      },
                      "start": 721,
                      "end": 737
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 709,
                    "end": 738
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 739,
                      "end": 744
                    },
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
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 747,
                              "end": 748
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 750,
                                "end": 756
                              },
                              "start": 748,
                              "end": 756
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 747,
                            "end": 756
                          }
                        ],
                        "start": 746,
                        "end": 758
                      },
                      "start": 744,
                      "end": 758
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 739,
                    "end": 758
                  }
                ],
                "start": 707,
                "end": 760
              },
              "start": 705,
              "end": 760
            },
            "accessibility": null,
            "static": false,
            "start": 699,
            "end": 761
          }
        ],
        "start": 693,
        "end": 763
      },
      "declare": false,
      "start": 681,
      "end": 763
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
            "name": "de",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 774,
                      "end": 775
                    },
                    "typeArguments": null,
                    "start": 774,
                    "end": 775
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 778,
                      "end": 779
                    },
                    "typeArguments": null,
                    "start": 778,
                    "end": 779
                  }
                ],
                "start": 774,
                "end": 779
              },
              "start": 772,
              "end": 779
            },
            "start": 770,
            "end": 779
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
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 788,
                  "end": 794
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "doublyNested",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 806,
                        "end": 818
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 834,
                              "end": 835
                            },
                            "value": {
                              "type": "Literal",
                              "value": "yes",
                              "raw": "'yes'",
                              "start": 837,
                              "end": 842
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 834,
                            "end": 842
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 856,
                              "end": 857
                            },
                            "value": {
                              "type": "Literal",
                              "value": "no",
                              "raw": "'no'",
                              "start": 859,
                              "end": 863
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 856,
                            "end": 863
                          }
                        ],
                        "start": 820,
                        "end": 873
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 806,
                      "end": 873
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "different",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 883,
                        "end": 892
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 896,
                              "end": 897
                            },
                            "value": {
                              "type": "Literal",
                              "value": 12,
                              "raw": "12",
                              "start": 899,
                              "end": 901
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 896,
                            "end": 901
                          }
                        ],
                        "start": 894,
                        "end": 903
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 883,
                      "end": 903
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 913,
                        "end": 918
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 922,
                              "end": 923
                            },
                            "value": {
                              "type": "Literal",
                              "value": 101,
                              "raw": "101",
                              "start": 925,
                              "end": 928
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 922,
                            "end": 928
                          }
                        ],
                        "start": 920,
                        "end": 930
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 913,
                      "end": 930
                    }
                  ],
                  "start": 796,
                  "end": 936
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 788,
                "end": 936
              }
            ],
            "start": 782,
            "end": 938
          },
          "definite": false,
          "start": 770,
          "end": 938
        }
      ],
      "declare": false,
      "start": 764,
      "end": 938
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 1048,
        "end": 1049
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
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 1056,
              "end": 1062
            },
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
                      "name": "doublyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1066,
                      "end": 1078
                    },
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
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1082,
                              "end": 1083
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1085,
                                "end": 1091
                              },
                              "start": 1083,
                              "end": 1091
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1082,
                            "end": 1092
                          }
                        ],
                        "start": 1080,
                        "end": 1094
                      },
                      "start": 1078,
                      "end": 1094
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1066,
                    "end": 1094
                  }
                ],
                "start": 1064,
                "end": 1096
              },
              "start": 1062,
              "end": 1096
            },
            "accessibility": null,
            "static": false,
            "start": 1056,
            "end": 1096
          }
        ],
        "start": 1050,
        "end": 1098
      },
      "declare": false,
      "start": 1038,
      "end": 1098
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 1110,
        "end": 1111
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
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 1118,
              "end": 1124
            },
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
                      "name": "doublyNested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1128,
                      "end": 1140
                    },
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
                              "name": "h",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1144,
                              "end": 1145
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1147,
                                "end": 1153
                              },
                              "start": 1145,
                              "end": 1153
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1144,
                            "end": 1154
                          }
                        ],
                        "start": 1142,
                        "end": 1156
                      },
                      "start": 1140,
                      "end": 1156
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1128,
                    "end": 1156
                  }
                ],
                "start": 1126,
                "end": 1158
              },
              "start": 1124,
              "end": 1158
            },
            "accessibility": null,
            "static": false,
            "start": 1118,
            "end": 1158
          }
        ],
        "start": 1112,
        "end": 1160
      },
      "declare": false,
      "start": 1100,
      "end": 1160
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
            "name": "defg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1174,
                      "end": 1175
                    },
                    "typeArguments": null,
                    "start": 1174,
                    "end": 1175
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1178,
                      "end": 1179
                    },
                    "typeArguments": null,
                    "start": 1178,
                    "end": 1179
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1182,
                      "end": 1183
                    },
                    "typeArguments": null,
                    "start": 1182,
                    "end": 1183
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "G",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1186,
                      "end": 1187
                    },
                    "typeArguments": null,
                    "start": 1186,
                    "end": 1187
                  }
                ],
                "start": 1174,
                "end": 1187
              },
              "start": 1172,
              "end": 1187
            },
            "start": 1168,
            "end": 1187
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
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1196,
                  "end": 1202
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "doublyNested",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1214,
                        "end": 1226
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "d",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1242,
                              "end": 1243
                            },
                            "value": {
                              "type": "Literal",
                              "value": "yes",
                              "raw": "'yes'",
                              "start": 1245,
                              "end": 1250
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1242,
                            "end": 1250
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1264,
                              "end": 1265
                            },
                            "value": {
                              "type": "Literal",
                              "value": "no",
                              "raw": "'no'",
                              "start": 1267,
                              "end": 1271
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1264,
                            "end": 1271
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1285,
                              "end": 1286
                            },
                            "value": {
                              "type": "Literal",
                              "value": "ok",
                              "raw": "'ok'",
                              "start": 1288,
                              "end": 1292
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1285,
                            "end": 1292
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "h",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1306,
                              "end": 1307
                            },
                            "value": {
                              "type": "Literal",
                              "value": "affirmative",
                              "raw": "'affirmative'",
                              "start": 1309,
                              "end": 1322
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1306,
                            "end": 1322
                          }
                        ],
                        "start": 1228,
                        "end": 1332
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1214,
                      "end": 1332
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "different",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1342,
                        "end": 1351
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1355,
                              "end": 1356
                            },
                            "value": {
                              "type": "Literal",
                              "value": 12,
                              "raw": "12",
                              "start": 1358,
                              "end": 1360
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1355,
                            "end": 1360
                          }
                        ],
                        "start": 1353,
                        "end": 1362
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1342,
                      "end": 1362
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1372,
                        "end": 1377
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1381,
                              "end": 1382
                            },
                            "value": {
                              "type": "Literal",
                              "value": 101,
                              "raw": "101",
                              "start": 1384,
                              "end": 1387
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1381,
                            "end": 1387
                          }
                        ],
                        "start": 1379,
                        "end": 1389
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1372,
                      "end": 1389
                    }
                  ],
                  "start": 1204,
                  "end": 1395
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1196,
                "end": 1395
              }
            ],
            "start": 1190,
            "end": 1397
          },
          "definite": false,
          "start": 1168,
          "end": 1397
        }
      ],
      "declare": false,
      "start": 1162,
      "end": 1397
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 181,
  "end": 1397
}
```
