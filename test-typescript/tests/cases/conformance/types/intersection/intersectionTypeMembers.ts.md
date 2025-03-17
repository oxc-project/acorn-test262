__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 182,
  "end": 1399,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 182,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 193,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 194,
        "end": 207,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 196,
            "end": 205,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 205,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 199,
                "end": 205
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
      "start": 208,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 218,
        "end": 219,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 220,
        "end": 233,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 222,
            "end": 231,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 223,
              "end": 231,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 225,
                "end": 231
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
      "start": 234,
      "end": 259,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 245,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 246,
        "end": 259,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 248,
            "end": 257,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 249,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 249,
              "end": 257,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 251,
                "end": 257
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
      "start": 261,
      "end": 280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 265,
          "end": 279,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 279,
            "name": "abc",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 268,
              "end": 279,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 270,
                "end": 279,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 270,
                    "end": 271,
                    "typeName": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 271,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 274,
                    "end": 275,
                    "typeName": {
                      "type": "Identifier",
                      "start": 274,
                      "end": 275,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 278,
                    "end": 279,
                    "typeName": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 279,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
      "type": "ExpressionStatement",
      "start": 281,
      "end": 297,
      "expression": {
        "type": "AssignmentExpression",
        "start": 281,
        "end": 296,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 281,
          "end": 286,
          "object": {
            "type": "Identifier",
            "start": 281,
            "end": 284,
            "name": "abc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 285,
            "end": 286,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 289,
          "end": 296,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 298,
      "end": 314,
      "expression": {
        "type": "AssignmentExpression",
        "start": 298,
        "end": 313,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 298,
          "end": 303,
          "object": {
            "type": "Identifier",
            "start": 298,
            "end": 301,
            "name": "abc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 302,
            "end": 303,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 306,
          "end": 313,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 315,
      "end": 331,
      "expression": {
        "type": "AssignmentExpression",
        "start": 315,
        "end": 330,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 315,
          "end": 320,
          "object": {
            "type": "Identifier",
            "start": 315,
            "end": 318,
            "name": "abc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 319,
            "end": 320,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 323,
          "end": 330,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 333,
      "end": 353,
      "id": {
        "type": "Identifier",
        "start": 343,
        "end": 344,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 345,
        "end": 353,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 347,
            "end": 351,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 348,
              "end": 351,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 350,
                "end": 351,
                "typeName": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 351,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 354,
      "end": 374,
      "id": {
        "type": "Identifier",
        "start": 364,
        "end": 365,
        "name": "Y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 366,
        "end": 374,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 368,
            "end": 372,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 369,
              "end": 372,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 371,
                "end": 372,
                "typeName": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 372,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 375,
      "end": 395,
      "id": {
        "type": "Identifier",
        "start": 385,
        "end": 386,
        "name": "Z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 387,
        "end": 395,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 389,
            "end": 393,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 389,
              "end": 390,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 390,
              "end": 393,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 392,
                "end": 393,
                "typeName": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 393,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 397,
      "end": 416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 415,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 415,
            "name": "xyz",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 404,
              "end": 415,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 406,
                "end": 415,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 406,
                    "end": 407,
                    "typeName": {
                      "type": "Identifier",
                      "start": 406,
                      "end": 407,
                      "name": "X",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 410,
                    "end": 411,
                    "typeName": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 411,
                      "name": "Y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 414,
                    "end": 415,
                    "typeName": {
                      "type": "Identifier",
                      "start": 414,
                      "end": 415,
                      "name": "Z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
      "type": "ExpressionStatement",
      "start": 417,
      "end": 435,
      "expression": {
        "type": "AssignmentExpression",
        "start": 417,
        "end": 434,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 417,
          "end": 424,
          "object": {
            "type": "MemberExpression",
            "start": 417,
            "end": 422,
            "object": {
              "type": "Identifier",
              "start": 417,
              "end": 420,
              "name": "xyz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 421,
              "end": 422,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 423,
            "end": 424,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 427,
          "end": 434,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 436,
      "end": 454,
      "expression": {
        "type": "AssignmentExpression",
        "start": 436,
        "end": 453,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 436,
          "end": 443,
          "object": {
            "type": "MemberExpression",
            "start": 436,
            "end": 441,
            "object": {
              "type": "Identifier",
              "start": 436,
              "end": 439,
              "name": "xyz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 440,
              "end": 441,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 442,
            "end": 443,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 446,
          "end": 453,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 455,
      "end": 473,
      "expression": {
        "type": "AssignmentExpression",
        "start": 455,
        "end": 472,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 455,
          "end": 462,
          "object": {
            "type": "MemberExpression",
            "start": 455,
            "end": 460,
            "object": {
              "type": "Identifier",
              "start": 455,
              "end": 458,
              "name": "xyz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 459,
              "end": 460,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 461,
            "end": 462,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 465,
          "end": 472,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 475,
      "end": 507,
      "id": {
        "type": "Identifier",
        "start": 480,
        "end": 482,
        "name": "F1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 485,
        "end": 506,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 486,
            "end": 495,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 487,
              "end": 495,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 489,
                "end": 495
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 497,
          "end": 506,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 500,
            "end": 506
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 508,
      "end": 540,
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 515,
        "name": "F2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 518,
        "end": 539,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 519,
            "end": 528,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 520,
              "end": 528,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 522,
                "end": 528
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 530,
          "end": 539,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 533,
            "end": 539
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 542,
      "end": 557,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 546,
          "end": 556,
          "id": {
            "type": "Identifier",
            "start": 546,
            "end": 556,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 547,
              "end": 556,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 549,
                "end": 556,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 549,
                    "end": 551,
                    "typeName": {
                      "type": "Identifier",
                      "start": 549,
                      "end": 551,
                      "name": "F1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 554,
                    "end": 556,
                    "typeName": {
                      "type": "Identifier",
                      "start": 554,
                      "end": 556,
                      "name": "F2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
      "start": 558,
      "end": 577,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 562,
          "end": 576,
          "id": {
            "type": "Identifier",
            "start": 562,
            "end": 563,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 566,
            "end": 576,
            "callee": {
              "type": "Identifier",
              "start": 566,
              "end": 567,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 568,
                "end": 575,
                "value": "hello",
                "raw": "\"hello\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 578,
      "end": 592,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 582,
          "end": 591,
          "id": {
            "type": "Identifier",
            "start": 582,
            "end": 583,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 586,
            "end": 591,
            "callee": {
              "type": "Identifier",
              "start": 586,
              "end": 587,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 588,
                "end": 590,
                "value": 42,
                "raw": "42"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 594,
      "end": 681,
      "id": {
        "type": "Identifier",
        "start": 604,
        "end": 605,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 606,
        "end": 681,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 612,
            "end": 679,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 612,
              "end": 618,
              "name": "nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 618,
              "end": 678,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 620,
                "end": 678,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 622,
                    "end": 651,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 622,
                      "end": 634,
                      "name": "doublyNested",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 634,
                      "end": 650,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 636,
                        "end": 650,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 638,
                            "end": 648,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 638,
                              "end": 639,
                              "name": "d",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 639,
                              "end": 647,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 641,
                                "end": 647
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 652,
                    "end": 676,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 652,
                      "end": 661,
                      "name": "different",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 661,
                      "end": 676,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 663,
                        "end": 676,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 665,
                            "end": 674,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 665,
                              "end": 666,
                              "name": "e",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 666,
                              "end": 674,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 668,
                                "end": 674
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 682,
      "end": 764,
      "id": {
        "type": "Identifier",
        "start": 692,
        "end": 693,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 694,
        "end": 764,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 700,
            "end": 762,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 700,
              "end": 706,
              "name": "nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 706,
              "end": 761,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 708,
                "end": 761,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 710,
                    "end": 739,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 710,
                      "end": 722,
                      "name": "doublyNested",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 722,
                      "end": 738,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 724,
                        "end": 738,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 726,
                            "end": 736,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 726,
                              "end": 727,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 727,
                              "end": 735,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 729,
                                "end": 735
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 740,
                    "end": 759,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 745,
                      "name": "other",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 745,
                      "end": 759,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 747,
                        "end": 759,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 748,
                            "end": 757,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 748,
                              "end": 749,
                              "name": "g",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 749,
                              "end": 757,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 751,
                                "end": 757
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 765,
      "end": 939,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 771,
          "end": 939,
          "id": {
            "type": "Identifier",
            "start": 771,
            "end": 780,
            "name": "de",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 773,
              "end": 780,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 775,
                "end": 780,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 775,
                    "end": 776,
                    "typeName": {
                      "type": "Identifier",
                      "start": 775,
                      "end": 776,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 779,
                    "end": 780,
                    "typeName": {
                      "type": "Identifier",
                      "start": 779,
                      "end": 780,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 783,
            "end": 939,
            "properties": [
              {
                "type": "Property",
                "start": 789,
                "end": 937,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 789,
                  "end": 795,
                  "name": "nested",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 797,
                  "end": 937,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 807,
                      "end": 874,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 807,
                        "end": 819,
                        "name": "doublyNested",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 821,
                        "end": 874,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 835,
                            "end": 843,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 835,
                              "end": 836,
                              "name": "d",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 838,
                              "end": 843,
                              "value": "yes",
                              "raw": "'yes'"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 857,
                            "end": 864,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 857,
                              "end": 858,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 860,
                              "end": 864,
                              "value": "no",
                              "raw": "'no'"
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
                      "start": 884,
                      "end": 904,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 884,
                        "end": 893,
                        "name": "different",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 895,
                        "end": 904,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 897,
                            "end": 902,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 897,
                              "end": 898,
                              "name": "e",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 900,
                              "end": 902,
                              "value": 12,
                              "raw": "12"
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
                      "start": 914,
                      "end": 931,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 914,
                        "end": 919,
                        "name": "other",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 921,
                        "end": 931,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 923,
                            "end": 929,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 923,
                              "end": 924,
                              "name": "g",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 926,
                              "end": 929,
                              "value": 101,
                              "raw": "101"
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
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1039,
      "end": 1099,
      "id": {
        "type": "Identifier",
        "start": 1049,
        "end": 1050,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1051,
        "end": 1099,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1057,
            "end": 1097,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1057,
              "end": 1063,
              "name": "nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1063,
              "end": 1097,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1065,
                "end": 1097,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1067,
                    "end": 1095,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1067,
                      "end": 1079,
                      "name": "doublyNested",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1079,
                      "end": 1095,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1081,
                        "end": 1095,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1083,
                            "end": 1093,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1083,
                              "end": 1084,
                              "name": "g",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1084,
                              "end": 1092,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1086,
                                "end": 1092
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 1101,
      "end": 1161,
      "id": {
        "type": "Identifier",
        "start": 1111,
        "end": 1112,
        "name": "G",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1113,
        "end": 1161,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1119,
            "end": 1159,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1119,
              "end": 1125,
              "name": "nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1125,
              "end": 1159,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1127,
                "end": 1159,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1129,
                    "end": 1157,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1129,
                      "end": 1141,
                      "name": "doublyNested",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1141,
                      "end": 1157,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 1143,
                        "end": 1157,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 1145,
                            "end": 1155,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1145,
                              "end": 1146,
                              "name": "h",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1146,
                              "end": 1154,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1148,
                                "end": 1154
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 1163,
      "end": 1398,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1169,
          "end": 1398,
          "id": {
            "type": "Identifier",
            "start": 1169,
            "end": 1188,
            "name": "defg",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1173,
              "end": 1188,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 1175,
                "end": 1188,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1175,
                    "end": 1176,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1175,
                      "end": 1176,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1179,
                    "end": 1180,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1179,
                      "end": 1180,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1183,
                    "end": 1184,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1183,
                      "end": 1184,
                      "name": "F",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1187,
                    "end": 1188,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1187,
                      "end": 1188,
                      "name": "G",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1191,
            "end": 1398,
            "properties": [
              {
                "type": "Property",
                "start": 1197,
                "end": 1396,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1197,
                  "end": 1203,
                  "name": "nested",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 1205,
                  "end": 1396,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1215,
                      "end": 1333,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1215,
                        "end": 1227,
                        "name": "doublyNested",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1229,
                        "end": 1333,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1243,
                            "end": 1251,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1243,
                              "end": 1244,
                              "name": "d",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1246,
                              "end": 1251,
                              "value": "yes",
                              "raw": "'yes'"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 1265,
                            "end": 1272,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1265,
                              "end": 1266,
                              "name": "f",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1268,
                              "end": 1272,
                              "value": "no",
                              "raw": "'no'"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 1286,
                            "end": 1293,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1286,
                              "end": 1287,
                              "name": "g",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1289,
                              "end": 1293,
                              "value": "ok",
                              "raw": "'ok'"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 1307,
                            "end": 1323,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1307,
                              "end": 1308,
                              "name": "h",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1310,
                              "end": 1323,
                              "value": "affirmative",
                              "raw": "'affirmative'"
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
                      "start": 1343,
                      "end": 1363,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1343,
                        "end": 1352,
                        "name": "different",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1354,
                        "end": 1363,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1356,
                            "end": 1361,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1356,
                              "end": 1357,
                              "name": "e",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1359,
                              "end": 1361,
                              "value": 12,
                              "raw": "12"
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
                      "start": 1373,
                      "end": 1390,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1373,
                        "end": 1378,
                        "name": "other",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "start": 1380,
                        "end": 1390,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1382,
                            "end": 1388,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1382,
                              "end": 1383,
                              "name": "g",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 1385,
                              "end": 1388,
                              "value": 101,
                              "raw": "101"
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
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
