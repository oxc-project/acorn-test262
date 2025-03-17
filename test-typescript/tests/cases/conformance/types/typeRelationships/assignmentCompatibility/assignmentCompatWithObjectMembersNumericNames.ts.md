__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 180,
  "end": 630,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 180,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 187,
        "name": "S",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 188,
        "end": 202,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 190,
            "end": 200,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 190,
              "end": 191,
              "value": 1,
              "raw": "1"
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
              "start": 191,
              "end": 199,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 193,
                "end": 199
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 203,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 210,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 211,
        "end": 226,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 213,
            "end": 224,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 213,
              "end": 215,
              "value": 1,
              "raw": "1."
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
              "start": 215,
              "end": 223,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 217,
                "end": 223
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 227,
      "end": 236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 235,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 235,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 232,
              "end": 235,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 234,
                "end": 235,
                "typeName": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 235,
                  "name": "S",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 245,
            "name": "t",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 242,
              "end": 245,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 244,
                "end": 245,
                "typeName": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 245,
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 248,
      "end": 288,
      "id": {
        "type": "Identifier",
        "start": 258,
        "end": 260,
        "name": "S2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 261,
        "end": 288,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 263,
            "end": 273,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 263,
              "end": 264,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 264,
              "end": 272,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 266,
                "end": 272
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 274,
            "end": 286,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 274,
              "end": 277,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 286,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 280,
                "end": 286
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
      "start": 289,
      "end": 331,
      "id": {
        "type": "Identifier",
        "start": 299,
        "end": 301,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 302,
        "end": 331,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 304,
            "end": 316,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 304,
              "end": 307,
              "value": 1,
              "raw": "1.0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 315,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 309,
                "end": 315
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 317,
            "end": 329,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 320,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 321,
              "end": 329,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 323,
                "end": 329
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
      "start": 332,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 342,
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 342,
            "name": "s2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 338,
              "end": 342,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 340,
                "end": 342,
                "typeName": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 342,
                  "name": "S2",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 344,
      "end": 355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 348,
          "end": 354,
          "id": {
            "type": "Identifier",
            "start": 348,
            "end": 354,
            "name": "t2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 354,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 352,
                "end": 354,
                "typeName": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 354,
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 357,
      "end": 392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 361,
          "end": 392,
          "id": {
            "type": "Identifier",
            "start": 361,
            "end": 392,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 362,
              "end": 392,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 364,
                "end": 392,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 366,
                    "end": 377,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 366,
                      "end": 368,
                      "value": 1,
                      "raw": "1."
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 368,
                      "end": 376,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 370,
                        "end": 376
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 378,
                    "end": 390,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 378,
                      "end": 381,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 382,
                      "end": 390,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 384,
                        "end": 390
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "start": 393,
      "end": 429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 397,
          "end": 429,
          "id": {
            "type": "Identifier",
            "start": 397,
            "end": 429,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 398,
              "end": 429,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 400,
                "end": 429,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 402,
                    "end": 414,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 402,
                      "end": 405,
                      "value": 1,
                      "raw": "1.0"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 405,
                      "end": 413,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 407,
                        "end": 413
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 415,
                    "end": 427,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 415,
                      "end": 418,
                      "name": "baz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 419,
                      "end": 427,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 421,
                        "end": 427
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "start": 431,
      "end": 452,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 435,
          "end": 451,
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 437,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 440,
            "end": 451,
            "properties": [
              {
                "type": "Property",
                "start": 442,
                "end": 449,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 442,
                  "end": 445,
                  "value": 1,
                  "raw": "1.0"
                },
                "value": {
                  "type": "Literal",
                  "start": 447,
                  "end": 449,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 453,
      "end": 472,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 457,
          "end": 471,
          "id": {
            "type": "Identifier",
            "start": 457,
            "end": 459,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 462,
            "end": 471,
            "properties": [
              {
                "type": "Property",
                "start": 464,
                "end": 469,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 464,
                  "end": 465,
                  "value": 1,
                  "raw": "1"
                },
                "value": {
                  "type": "Literal",
                  "start": 467,
                  "end": 469,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 474,
      "end": 480,
      "expression": {
        "type": "AssignmentExpression",
        "start": 474,
        "end": 479,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 474,
          "end": 475,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 478,
          "end": 479,
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 481,
      "end": 487,
      "expression": {
        "type": "AssignmentExpression",
        "start": 481,
        "end": 486,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 481,
          "end": 482,
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 485,
          "end": 486,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 488,
      "end": 495,
      "expression": {
        "type": "AssignmentExpression",
        "start": 488,
        "end": 494,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 488,
          "end": 489,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 492,
          "end": 494,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 496,
      "end": 503,
      "expression": {
        "type": "AssignmentExpression",
        "start": 496,
        "end": 502,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 496,
          "end": 497,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 500,
          "end": 502,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 505,
      "end": 513,
      "expression": {
        "type": "AssignmentExpression",
        "start": 505,
        "end": 512,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 505,
          "end": 507,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 510,
          "end": 512,
          "name": "t2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 514,
      "end": 522,
      "expression": {
        "type": "AssignmentExpression",
        "start": 514,
        "end": 521,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 514,
          "end": 516,
          "name": "t2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 519,
          "end": 521,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 523,
      "end": 530,
      "expression": {
        "type": "AssignmentExpression",
        "start": 523,
        "end": 529,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 523,
          "end": 525,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 528,
          "end": 529,
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 531,
      "end": 538,
      "expression": {
        "type": "AssignmentExpression",
        "start": 531,
        "end": 537,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 531,
          "end": 533,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 536,
          "end": 537,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 539,
      "end": 547,
      "expression": {
        "type": "AssignmentExpression",
        "start": 539,
        "end": 546,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 539,
          "end": 541,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 544,
          "end": 546,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 549,
      "end": 555,
      "expression": {
        "type": "AssignmentExpression",
        "start": 549,
        "end": 554,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 549,
          "end": 550,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 553,
          "end": 554,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 556,
      "end": 562,
      "expression": {
        "type": "AssignmentExpression",
        "start": 556,
        "end": 561,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 556,
          "end": 557,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 560,
          "end": 561,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 563,
      "end": 569,
      "expression": {
        "type": "AssignmentExpression",
        "start": 563,
        "end": 568,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 563,
          "end": 564,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 567,
          "end": 568,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 570,
      "end": 577,
      "expression": {
        "type": "AssignmentExpression",
        "start": 570,
        "end": 576,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 570,
          "end": 571,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 574,
          "end": 576,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 578,
      "end": 585,
      "expression": {
        "type": "AssignmentExpression",
        "start": 578,
        "end": 584,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 578,
          "end": 579,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 582,
          "end": 584,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 587,
      "end": 595,
      "expression": {
        "type": "AssignmentExpression",
        "start": 587,
        "end": 594,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 587,
          "end": 589,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 592,
          "end": 594,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 596,
      "end": 604,
      "expression": {
        "type": "AssignmentExpression",
        "start": 596,
        "end": 603,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 596,
          "end": 598,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 601,
          "end": 603,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 605,
      "end": 612,
      "expression": {
        "type": "AssignmentExpression",
        "start": 605,
        "end": 611,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 605,
          "end": 607,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 610,
          "end": 611,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 613,
      "end": 621,
      "expression": {
        "type": "AssignmentExpression",
        "start": 613,
        "end": 620,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 613,
          "end": 615,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 618,
          "end": 620,
          "name": "t2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 622,
      "end": 629,
      "expression": {
        "type": "AssignmentExpression",
        "start": 622,
        "end": 628,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 622,
          "end": 624,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 627,
          "end": 628,
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
