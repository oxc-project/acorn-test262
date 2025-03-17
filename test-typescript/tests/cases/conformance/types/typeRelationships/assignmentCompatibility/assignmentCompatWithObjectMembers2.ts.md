__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 171,
  "end": 629,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 171,
      "end": 195,
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
        "start": 179,
        "end": 195,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 181,
            "end": 193,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 184,
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
              "start": 184,
              "end": 192,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 186,
                "end": 192
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
      "start": 196,
      "end": 220,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 203,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 204,
        "end": 220,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 206,
            "end": 218,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 206,
              "end": 209,
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
              "start": 209,
              "end": 217,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 211,
                "end": 217
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
      "start": 221,
      "end": 230,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 229,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 229,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 226,
              "end": 229,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 228,
                "end": 229,
                "typeName": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 229,
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
      "start": 231,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 239,
            "name": "t",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 236,
              "end": 239,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 238,
                "end": 239,
                "typeName": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 239,
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
      "start": 242,
      "end": 284,
      "id": {
        "type": "Identifier",
        "start": 252,
        "end": 254,
        "name": "S2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 255,
        "end": 284,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 257,
            "end": 269,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 260,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 268,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 262,
                "end": 268
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 270,
            "end": 282,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 270,
              "end": 273,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 282,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 276,
                "end": 282
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
      "start": 285,
      "end": 327,
      "id": {
        "type": "Identifier",
        "start": 295,
        "end": 297,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 298,
        "end": 327,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 300,
            "end": 312,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 300,
              "end": 303,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 303,
              "end": 311,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 305,
                "end": 311
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 313,
            "end": 325,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 313,
              "end": 316,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 317,
              "end": 325,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 319,
                "end": 325
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
      "start": 328,
      "end": 339,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 338,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 338,
            "name": "s2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 338,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 336,
                "end": 338,
                "typeName": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 338,
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
      "start": 340,
      "end": 351,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 344,
          "end": 350,
          "id": {
            "type": "Identifier",
            "start": 344,
            "end": 350,
            "name": "t2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 346,
              "end": 350,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 348,
                "end": 350,
                "typeName": {
                  "type": "Identifier",
                  "start": 348,
                  "end": 350,
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
      "start": 353,
      "end": 389,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 357,
          "end": 389,
          "id": {
            "type": "Identifier",
            "start": 357,
            "end": 389,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 358,
              "end": 389,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 360,
                "end": 389,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 362,
                    "end": 374,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 362,
                      "end": 365,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 365,
                      "end": 373,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 367,
                        "end": 373
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 375,
                    "end": 387,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 378,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 379,
                      "end": 387,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 381,
                        "end": 387
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
      "start": 390,
      "end": 426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 394,
          "end": 426,
          "id": {
            "type": "Identifier",
            "start": 394,
            "end": 426,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 395,
              "end": 426,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 397,
                "end": 426,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 399,
                    "end": 411,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 399,
                      "end": 402,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 402,
                      "end": 410,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 404,
                        "end": 410
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 412,
                    "end": 424,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 412,
                      "end": 415,
                      "name": "baz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 416,
                      "end": 424,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 418,
                        "end": 424
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
      "start": 428,
      "end": 449,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 432,
          "end": 448,
          "id": {
            "type": "Identifier",
            "start": 432,
            "end": 434,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 437,
            "end": 448,
            "properties": [
              {
                "type": "Property",
                "start": 439,
                "end": 446,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 442,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 444,
                  "end": 446,
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
      "start": 450,
      "end": 471,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 470,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 456,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 459,
            "end": 470,
            "properties": [
              {
                "type": "Property",
                "start": 461,
                "end": 468,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 461,
                  "end": 464,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 466,
                  "end": 468,
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
      "start": 473,
      "end": 479,
      "expression": {
        "type": "AssignmentExpression",
        "start": 473,
        "end": 478,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 473,
          "end": 474,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 477,
          "end": 478,
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
      "start": 480,
      "end": 486,
      "expression": {
        "type": "AssignmentExpression",
        "start": 480,
        "end": 485,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 480,
          "end": 481,
          "name": "t",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 484,
          "end": 485,
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
      "start": 487,
      "end": 494,
      "expression": {
        "type": "AssignmentExpression",
        "start": 487,
        "end": 493,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 487,
          "end": 488,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 491,
          "end": 493,
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
      "start": 495,
      "end": 502,
      "expression": {
        "type": "AssignmentExpression",
        "start": 495,
        "end": 501,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 495,
          "end": 496,
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 499,
          "end": 501,
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
      "start": 504,
      "end": 512,
      "expression": {
        "type": "AssignmentExpression",
        "start": 504,
        "end": 511,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 504,
          "end": 506,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 509,
          "end": 511,
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
      "start": 513,
      "end": 521,
      "expression": {
        "type": "AssignmentExpression",
        "start": 513,
        "end": 520,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 513,
          "end": 515,
          "name": "t2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 518,
          "end": 520,
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
      "start": 522,
      "end": 529,
      "expression": {
        "type": "AssignmentExpression",
        "start": 522,
        "end": 528,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 522,
          "end": 524,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 527,
          "end": 528,
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
      "start": 530,
      "end": 537,
      "expression": {
        "type": "AssignmentExpression",
        "start": 530,
        "end": 536,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 530,
          "end": 532,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 535,
          "end": 536,
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
      "start": 538,
      "end": 546,
      "expression": {
        "type": "AssignmentExpression",
        "start": 538,
        "end": 545,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 538,
          "end": 540,
          "name": "s2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 543,
          "end": 545,
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
      "start": 548,
      "end": 554,
      "expression": {
        "type": "AssignmentExpression",
        "start": 548,
        "end": 553,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 548,
          "end": 549,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 552,
          "end": 553,
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
      "start": 555,
      "end": 561,
      "expression": {
        "type": "AssignmentExpression",
        "start": 555,
        "end": 560,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 555,
          "end": 556,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 559,
          "end": 560,
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
      "start": 562,
      "end": 568,
      "expression": {
        "type": "AssignmentExpression",
        "start": 562,
        "end": 567,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 562,
          "end": 563,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 566,
          "end": 567,
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
      "start": 569,
      "end": 576,
      "expression": {
        "type": "AssignmentExpression",
        "start": 569,
        "end": 575,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 569,
          "end": 570,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 573,
          "end": 575,
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
      "start": 577,
      "end": 584,
      "expression": {
        "type": "AssignmentExpression",
        "start": 577,
        "end": 583,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 577,
          "end": 578,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 581,
          "end": 583,
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
      "start": 586,
      "end": 594,
      "expression": {
        "type": "AssignmentExpression",
        "start": 586,
        "end": 593,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 586,
          "end": 588,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 591,
          "end": 593,
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
      "start": 595,
      "end": 603,
      "expression": {
        "type": "AssignmentExpression",
        "start": 595,
        "end": 602,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 595,
          "end": 597,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 600,
          "end": 602,
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
      "start": 604,
      "end": 611,
      "expression": {
        "type": "AssignmentExpression",
        "start": 604,
        "end": 610,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 604,
          "end": 606,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 609,
          "end": 610,
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
      "start": 612,
      "end": 620,
      "expression": {
        "type": "AssignmentExpression",
        "start": 612,
        "end": 619,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 612,
          "end": 614,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 617,
          "end": 619,
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
      "start": 621,
      "end": 628,
      "expression": {
        "type": "AssignmentExpression",
        "start": 621,
        "end": 627,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 621,
          "end": 623,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 626,
          "end": 627,
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
