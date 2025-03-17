__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 769,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
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
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 41,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 67,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 65,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "name": "x",
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
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 79,
            "end": 82,
            "value": "x",
            "raw": "\"x\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 768,
      "expression": {
        "type": "ClassExpression",
        "start": 86,
        "end": 766,
        "id": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 107,
          "end": 111,
          "name": "Base",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 112,
          "end": 766,
          "body": [
            {
              "type": "StaticBlock",
              "start": 118,
              "end": 764,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 135,
                  "end": 143,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 135,
                    "end": 142,
                    "object": {
                      "type": "Super",
                      "start": 135,
                      "end": 140
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 142,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 152,
                  "end": 164,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 152,
                    "end": 163,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 152,
                      "end": 159,
                      "object": {
                        "type": "Super",
                        "start": 152,
                        "end": 157
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 159,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 162,
                      "end": 163,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 173,
                  "end": 186,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 173,
                    "end": 185,
                    "operator": "+=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 173,
                      "end": 180,
                      "object": {
                        "type": "Super",
                        "start": 173,
                        "end": 178
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 180,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 184,
                      "end": 185,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 195,
                  "end": 205,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 195,
                    "end": 204,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 195,
                      "end": 202,
                      "object": {
                        "type": "Super",
                        "start": 195,
                        "end": 200
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 202,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 214,
                  "end": 224,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 214,
                    "end": 223,
                    "operator": "--",
                    "prefix": false,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 214,
                      "end": 221,
                      "object": {
                        "type": "Super",
                        "start": 214,
                        "end": 219
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 220,
                        "end": 221,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 233,
                  "end": 243,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 233,
                    "end": 242,
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 235,
                      "end": 242,
                      "object": {
                        "type": "Super",
                        "start": 235,
                        "end": 240
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 241,
                        "end": 242,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 252,
                  "end": 262,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 252,
                    "end": 261,
                    "operator": "--",
                    "prefix": true,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 254,
                      "end": 261,
                      "object": {
                        "type": "Super",
                        "start": 254,
                        "end": 259
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 260,
                        "end": 261,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 271,
                  "end": 299,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 272,
                    "end": 297,
                    "operator": "=",
                    "left": {
                      "type": "ObjectPattern",
                      "start": 272,
                      "end": 286,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 274,
                          "end": 284,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 274,
                            "end": 275,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "MemberExpression",
                            "start": 277,
                            "end": 284,
                            "object": {
                              "type": "Super",
                              "start": 277,
                              "end": 282
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 283,
                              "end": 284,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 289,
                      "end": 297,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 291,
                          "end": 295,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 291,
                            "end": 292,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 294,
                            "end": 295,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 308,
                  "end": 324,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 308,
                    "end": 323,
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "start": 308,
                      "end": 317,
                      "elements": [
                        {
                          "type": "MemberExpression",
                          "start": 309,
                          "end": 316,
                          "object": {
                            "type": "Super",
                            "start": 309,
                            "end": 314
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 315,
                            "end": 316,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 320,
                      "end": 323,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 321,
                          "end": 322,
                          "value": 1,
                          "raw": "1"
                        }
                      ]
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 334,
                  "end": 345,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 334,
                    "end": 344,
                    "object": {
                      "type": "Super",
                      "start": 334,
                      "end": 339
                    },
                    "property": {
                      "type": "Literal",
                      "start": 340,
                      "end": 343,
                      "value": "x",
                      "raw": "\"x\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 354,
                  "end": 369,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 354,
                    "end": 368,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 354,
                      "end": 364,
                      "object": {
                        "type": "Super",
                        "start": 354,
                        "end": 359
                      },
                      "property": {
                        "type": "Literal",
                        "start": 360,
                        "end": 363,
                        "value": "x",
                        "raw": "\"x\""
                      },
                      "computed": true,
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 367,
                      "end": 368,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 378,
                  "end": 394,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 378,
                    "end": 393,
                    "operator": "+=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 378,
                      "end": 388,
                      "object": {
                        "type": "Super",
                        "start": 378,
                        "end": 383
                      },
                      "property": {
                        "type": "Literal",
                        "start": 384,
                        "end": 387,
                        "value": "x",
                        "raw": "\"x\""
                      },
                      "computed": true,
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 392,
                      "end": 393,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 403,
                  "end": 416,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 403,
                    "end": 415,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 403,
                      "end": 413,
                      "object": {
                        "type": "Super",
                        "start": 403,
                        "end": 408
                      },
                      "property": {
                        "type": "Literal",
                        "start": 409,
                        "end": 412,
                        "value": "x",
                        "raw": "\"x\""
                      },
                      "computed": true,
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 425,
                  "end": 438,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 425,
                    "end": 437,
                    "operator": "--",
                    "prefix": false,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 425,
                      "end": 435,
                      "object": {
                        "type": "Super",
                        "start": 425,
                        "end": 430
                      },
                      "property": {
                        "type": "Literal",
                        "start": 431,
                        "end": 434,
                        "value": "x",
                        "raw": "\"x\""
                      },
                      "computed": true,
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 447,
                  "end": 460,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 447,
                    "end": 459,
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 449,
                      "end": 459,
                      "object": {
                        "type": "Super",
                        "start": 449,
                        "end": 454
                      },
                      "property": {
                        "type": "Literal",
                        "start": 455,
                        "end": 458,
                        "value": "x",
                        "raw": "\"x\""
                      },
                      "computed": true,
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 469,
                  "end": 482,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 469,
                    "end": 481,
                    "operator": "--",
                    "prefix": true,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 471,
                      "end": 481,
                      "object": {
                        "type": "Super",
                        "start": 471,
                        "end": 476
                      },
                      "property": {
                        "type": "Literal",
                        "start": 477,
                        "end": 480,
                        "value": "x",
                        "raw": "\"x\""
                      },
                      "computed": true,
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 491,
                  "end": 522,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 492,
                    "end": 520,
                    "operator": "=",
                    "left": {
                      "type": "ObjectPattern",
                      "start": 492,
                      "end": 509,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 494,
                          "end": 507,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 494,
                            "end": 495,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "MemberExpression",
                            "start": 497,
                            "end": 507,
                            "object": {
                              "type": "Super",
                              "start": 497,
                              "end": 502
                            },
                            "property": {
                              "type": "Literal",
                              "start": 503,
                              "end": 506,
                              "value": "x",
                              "raw": "\"x\""
                            },
                            "computed": true,
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 512,
                      "end": 520,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 514,
                          "end": 518,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 514,
                            "end": 515,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 517,
                            "end": 518,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 531,
                  "end": 550,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 531,
                    "end": 549,
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "start": 531,
                      "end": 543,
                      "elements": [
                        {
                          "type": "MemberExpression",
                          "start": 532,
                          "end": 542,
                          "object": {
                            "type": "Super",
                            "start": 532,
                            "end": 537
                          },
                          "property": {
                            "type": "Literal",
                            "start": 538,
                            "end": 541,
                            "value": "x",
                            "raw": "\"x\""
                          },
                          "computed": true,
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 546,
                      "end": 549,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 547,
                          "end": 548,
                          "value": 1,
                          "raw": "1"
                        }
                      ]
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 560,
                  "end": 569,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 560,
                    "end": 568,
                    "object": {
                      "type": "Super",
                      "start": 560,
                      "end": 565
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 566,
                      "end": 567,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 578,
                  "end": 591,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 578,
                    "end": 590,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 578,
                      "end": 586,
                      "object": {
                        "type": "Super",
                        "start": 578,
                        "end": 583
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 584,
                        "end": 585,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": true,
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 589,
                      "end": 590,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 600,
                  "end": 614,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 600,
                    "end": 613,
                    "operator": "+=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 600,
                      "end": 608,
                      "object": {
                        "type": "Super",
                        "start": 600,
                        "end": 605
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 606,
                        "end": 607,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": true,
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 612,
                      "end": 613,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 623,
                  "end": 634,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 623,
                    "end": 633,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 623,
                      "end": 631,
                      "object": {
                        "type": "Super",
                        "start": 623,
                        "end": 628
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 629,
                        "end": 630,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": true,
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 643,
                  "end": 654,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 643,
                    "end": 653,
                    "operator": "--",
                    "prefix": false,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 643,
                      "end": 651,
                      "object": {
                        "type": "Super",
                        "start": 643,
                        "end": 648
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 649,
                        "end": 650,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": true,
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 663,
                  "end": 674,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 663,
                    "end": 673,
                    "operator": "++",
                    "prefix": true,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 665,
                      "end": 673,
                      "object": {
                        "type": "Super",
                        "start": 665,
                        "end": 670
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 671,
                        "end": 672,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": true,
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 683,
                  "end": 694,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 683,
                    "end": 693,
                    "operator": "--",
                    "prefix": true,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 685,
                      "end": 693,
                      "object": {
                        "type": "Super",
                        "start": 685,
                        "end": 690
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 691,
                        "end": 692,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": true,
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 703,
                  "end": 732,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 704,
                    "end": 730,
                    "operator": "=",
                    "left": {
                      "type": "ObjectPattern",
                      "start": 704,
                      "end": 719,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 706,
                          "end": 717,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 706,
                            "end": 707,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "MemberExpression",
                            "start": 709,
                            "end": 717,
                            "object": {
                              "type": "Super",
                              "start": 709,
                              "end": 714
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 715,
                              "end": 716,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": true,
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 722,
                      "end": 730,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 724,
                          "end": 728,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 724,
                            "end": 725,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 727,
                            "end": 728,
                            "value": 1,
                            "raw": "1"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 741,
                  "end": 758,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 741,
                    "end": 757,
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "start": 741,
                      "end": 751,
                      "elements": [
                        {
                          "type": "MemberExpression",
                          "start": 742,
                          "end": 750,
                          "object": {
                            "type": "Super",
                            "start": 742,
                            "end": 747
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 748,
                            "end": 749,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": true,
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 754,
                      "end": 757,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 755,
                          "end": 756,
                          "value": 1,
                          "raw": "1"
                        }
                      ]
                    }
                  },
                  "directive": null
                }
              ]
            }
          ]
        },
        "decorators": [
          {
            "type": "Decorator",
            "start": 86,
            "end": 90,
            "expression": {
              "type": "Identifier",
              "start": 87,
              "end": 90,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
