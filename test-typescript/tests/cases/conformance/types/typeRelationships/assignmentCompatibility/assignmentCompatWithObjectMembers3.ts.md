__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 171,
  "end": 665,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 171,
      "end": 209,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 178,
        "name": "S",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 193,
        "end": 209,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 195,
            "end": 207,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 195,
              "end": 198,
              "name": "foo",
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
              "start": 198,
              "end": 206,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 190,
          "end": 192,
          "expression": {
            "type": "Identifier",
            "start": 190,
            "end": 192,
            "name": "S2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 210,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 217,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 232,
        "end": 248,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 234,
            "end": 246,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 237,
              "name": "foo",
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
              "start": 237,
              "end": 245,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 239,
                "end": 245
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 229,
          "end": 231,
          "expression": {
            "type": "Identifier",
            "start": 229,
            "end": 231,
            "name": "T2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 257,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 257,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 256,
                "end": 257,
                "typeName": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
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
      "start": 259,
      "end": 268,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 263,
          "end": 267,
          "id": {
            "type": "Identifier",
            "start": 263,
            "end": 267,
            "name": "t",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 264,
              "end": 267,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 266,
                "end": 267,
                "typeName": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 267,
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
      "start": 270,
      "end": 312,
      "id": {
        "type": "Identifier",
        "start": 280,
        "end": 282,
        "name": "S2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 283,
        "end": 312,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 285,
            "end": 297,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 285,
              "end": 288,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 288,
              "end": 296,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 290,
                "end": 296
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 298,
            "end": 310,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 298,
              "end": 301,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 310,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 304,
                "end": 310
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
      "start": 313,
      "end": 355,
      "id": {
        "type": "Identifier",
        "start": 323,
        "end": 325,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 326,
        "end": 355,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 328,
            "end": 340,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 328,
              "end": 331,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 331,
              "end": 339,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 333,
                "end": 339
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 341,
            "end": 353,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 341,
              "end": 344,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 345,
              "end": 353,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 347,
                "end": 353
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
      "start": 356,
      "end": 367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 366,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 366,
            "name": "s2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 362,
              "end": 366,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 364,
                "end": 366,
                "typeName": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 366,
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
      "start": 368,
      "end": 379,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 378,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 378,
            "name": "t2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 374,
              "end": 378,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 376,
                "end": 378,
                "typeName": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 378,
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
      "start": 381,
      "end": 417,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 385,
          "end": 417,
          "id": {
            "type": "Identifier",
            "start": 385,
            "end": 417,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 386,
              "end": 417,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 388,
                "end": 417,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 390,
                    "end": 402,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 390,
                      "end": 393,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 393,
                      "end": 401,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 395,
                        "end": 401
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 403,
                    "end": 415,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 403,
                      "end": 406,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 407,
                      "end": 415,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 409,
                        "end": 415
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
      "start": 418,
      "end": 454,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 454,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 454,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 423,
              "end": 454,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 425,
                "end": 454,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 427,
                    "end": 439,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 430,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 430,
                      "end": 438,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 432,
                        "end": 438
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 440,
                    "end": 452,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 440,
                      "end": 443,
                      "name": "baz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 444,
                      "end": 452,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 446,
                        "end": 452
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
      "start": 456,
      "end": 481,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 480,
          "id": {
            "type": "Identifier",
            "start": 460,
            "end": 466,
            "name": "a2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 466,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 464,
                "end": 466,
                "typeName": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 466,
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
          "init": {
            "type": "ObjectExpression",
            "start": 469,
            "end": 480,
            "properties": [
              {
                "type": "Property",
                "start": 471,
                "end": 478,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 474,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 476,
                  "end": 478,
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
      "start": 482,
      "end": 507,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 486,
          "end": 506,
          "id": {
            "type": "Identifier",
            "start": 486,
            "end": 492,
            "name": "b2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 488,
              "end": 492,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 490,
                "end": 492,
                "typeName": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 492,
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
            "start": 495,
            "end": 506,
            "properties": [
              {
                "type": "Property",
                "start": 497,
                "end": 504,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 497,
                  "end": 500,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 502,
                  "end": 504,
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
      "start": 509,
      "end": 515,
      "expression": {
        "type": "AssignmentExpression",
        "start": 509,
        "end": 514,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 509,
          "end": 510,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 513,
          "end": 514,
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
      "start": 516,
      "end": 522,
      "expression": {
        "type": "AssignmentExpression",
        "start": 516,
        "end": 521,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 516,
          "end": 517,
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 520,
          "end": 521,
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
          "end": 524,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 527,
          "end": 529,
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
          "end": 532,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 535,
          "end": 537,
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
      "start": 540,
      "end": 548,
      "expression": {
        "type": "AssignmentExpression",
        "start": 540,
        "end": 547,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 540,
          "end": 542,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 545,
          "end": 547,
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
      "start": 549,
      "end": 557,
      "expression": {
        "type": "AssignmentExpression",
        "start": 549,
        "end": 556,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 549,
          "end": 551,
          "name": "t2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 554,
          "end": 556,
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
      "start": 558,
      "end": 565,
      "expression": {
        "type": "AssignmentExpression",
        "start": 558,
        "end": 564,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 558,
          "end": 560,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 563,
          "end": 564,
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
      "start": 566,
      "end": 573,
      "expression": {
        "type": "AssignmentExpression",
        "start": 566,
        "end": 572,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 566,
          "end": 568,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 571,
          "end": 572,
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
      "start": 574,
      "end": 582,
      "expression": {
        "type": "AssignmentExpression",
        "start": 574,
        "end": 581,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 574,
          "end": 576,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 579,
          "end": 581,
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
      "start": 584,
      "end": 590,
      "expression": {
        "type": "AssignmentExpression",
        "start": 584,
        "end": 589,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 584,
          "end": 585,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 588,
          "end": 589,
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
      "start": 591,
      "end": 597,
      "expression": {
        "type": "AssignmentExpression",
        "start": 591,
        "end": 596,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 591,
          "end": 592,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 595,
          "end": 596,
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
      "start": 598,
      "end": 604,
      "expression": {
        "type": "AssignmentExpression",
        "start": 598,
        "end": 603,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 598,
          "end": 599,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 602,
          "end": 603,
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
          "end": 606,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 609,
          "end": 611,
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
      "start": 613,
      "end": 620,
      "expression": {
        "type": "AssignmentExpression",
        "start": 613,
        "end": 619,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 613,
          "end": 614,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 617,
          "end": 619,
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
      "start": 622,
      "end": 630,
      "expression": {
        "type": "AssignmentExpression",
        "start": 622,
        "end": 629,
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
          "end": 629,
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
      "start": 631,
      "end": 639,
      "expression": {
        "type": "AssignmentExpression",
        "start": 631,
        "end": 638,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 631,
          "end": 633,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 636,
          "end": 638,
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
      "start": 640,
      "end": 647,
      "expression": {
        "type": "AssignmentExpression",
        "start": 640,
        "end": 646,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 640,
          "end": 642,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 645,
          "end": 646,
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
      "start": 648,
      "end": 656,
      "expression": {
        "type": "AssignmentExpression",
        "start": 648,
        "end": 655,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 648,
          "end": 650,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 653,
          "end": 655,
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
      "start": 657,
      "end": 664,
      "expression": {
        "type": "AssignmentExpression",
        "start": 657,
        "end": 663,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 657,
          "end": 659,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 662,
          "end": 663,
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
