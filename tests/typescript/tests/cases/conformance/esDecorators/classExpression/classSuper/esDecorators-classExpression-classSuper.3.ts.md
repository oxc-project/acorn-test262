__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 768,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 67,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 67,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 65,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
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
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 41,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 79,
            "end": 82,
            "raw": "\"x\"",
            "value": "x"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 768,
      "directive": null,
      "expression": {
        "type": "ClassExpression",
        "start": 86,
        "end": 766,
        "abstract": false,
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
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 135,
                    "end": 142,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 135,
                      "end": 140
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 141,
                      "end": 142,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 152,
                  "end": 164,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 152,
                    "end": 163,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 152,
                      "end": 159,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 152,
                        "end": 157
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 159,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 162,
                      "end": 163,
                      "raw": "1",
                      "value": 1
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 173,
                  "end": 186,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 173,
                    "end": 185,
                    "operator": "+=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 173,
                      "end": 180,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 173,
                        "end": 178
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 180,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 184,
                      "end": 185,
                      "raw": "1",
                      "value": 1
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 195,
                  "end": 205,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 195,
                    "end": 204,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 195,
                      "end": 202,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 195,
                        "end": 200
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 202,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "++",
                    "prefix": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 214,
                  "end": 224,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 214,
                    "end": 223,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 214,
                      "end": 221,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 214,
                        "end": 219
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 220,
                        "end": 221,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "--",
                    "prefix": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 233,
                  "end": 243,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 233,
                    "end": 242,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 235,
                      "end": 242,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 235,
                        "end": 240
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 241,
                        "end": 242,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "++",
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 252,
                  "end": 262,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 252,
                    "end": 261,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 254,
                      "end": 261,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 254,
                        "end": 259
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 260,
                        "end": 261,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "--",
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 271,
                  "end": 299,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 272,
                    "end": 297,
                    "operator": "=",
                    "left": {
                      "type": "ObjectPattern",
                      "start": 272,
                      "end": 286,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 274,
                          "end": 284,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 274,
                            "end": 275,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "MemberExpression",
                            "start": 277,
                            "end": 284,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 277,
                              "end": 282
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 283,
                              "end": 284,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ],
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
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 291,
                            "end": 292,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 294,
                            "end": 295,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 308,
                  "end": 324,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 308,
                    "end": 323,
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "start": 308,
                      "end": 317,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "MemberExpression",
                          "start": 309,
                          "end": 316,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 309,
                            "end": 314
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 315,
                            "end": 316,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
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
                          "raw": "1",
                          "value": 1
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 334,
                  "end": 345,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 334,
                    "end": 344,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 334,
                      "end": 339
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 340,
                      "end": 343,
                      "raw": "\"x\"",
                      "value": "x"
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 354,
                  "end": 369,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 354,
                    "end": 368,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 354,
                      "end": 364,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 354,
                        "end": 359
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 360,
                        "end": 363,
                        "raw": "\"x\"",
                        "value": "x"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 367,
                      "end": 368,
                      "raw": "1",
                      "value": 1
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 378,
                  "end": 394,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 378,
                    "end": 393,
                    "operator": "+=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 378,
                      "end": 388,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 378,
                        "end": 383
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 384,
                        "end": 387,
                        "raw": "\"x\"",
                        "value": "x"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 392,
                      "end": 393,
                      "raw": "1",
                      "value": 1
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 403,
                  "end": 416,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 403,
                    "end": 415,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 403,
                      "end": 413,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 403,
                        "end": 408
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 409,
                        "end": 412,
                        "raw": "\"x\"",
                        "value": "x"
                      }
                    },
                    "operator": "++",
                    "prefix": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 425,
                  "end": 438,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 425,
                    "end": 437,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 425,
                      "end": 435,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 425,
                        "end": 430
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 431,
                        "end": 434,
                        "raw": "\"x\"",
                        "value": "x"
                      }
                    },
                    "operator": "--",
                    "prefix": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 447,
                  "end": 460,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 447,
                    "end": 459,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 449,
                      "end": 459,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 449,
                        "end": 454
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 455,
                        "end": 458,
                        "raw": "\"x\"",
                        "value": "x"
                      }
                    },
                    "operator": "++",
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 469,
                  "end": 482,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 469,
                    "end": 481,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 471,
                      "end": 481,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 471,
                        "end": 476
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 477,
                        "end": 480,
                        "raw": "\"x\"",
                        "value": "x"
                      }
                    },
                    "operator": "--",
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 491,
                  "end": 522,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 492,
                    "end": 520,
                    "operator": "=",
                    "left": {
                      "type": "ObjectPattern",
                      "start": 492,
                      "end": 509,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 494,
                          "end": 507,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 494,
                            "end": 495,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "MemberExpression",
                            "start": 497,
                            "end": 507,
                            "computed": true,
                            "object": {
                              "type": "Super",
                              "start": 497,
                              "end": 502
                            },
                            "optional": false,
                            "property": {
                              "type": "Literal",
                              "start": 503,
                              "end": 506,
                              "raw": "\"x\"",
                              "value": "x"
                            }
                          }
                        }
                      ],
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
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 514,
                            "end": 515,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 517,
                            "end": 518,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 531,
                  "end": 550,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 531,
                    "end": 549,
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "start": 531,
                      "end": 543,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "MemberExpression",
                          "start": 532,
                          "end": 542,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 532,
                            "end": 537
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 538,
                            "end": 541,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        }
                      ],
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
                          "raw": "1",
                          "value": 1
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 560,
                  "end": 569,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 560,
                    "end": 568,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 560,
                      "end": 565
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 566,
                      "end": 567,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 578,
                  "end": 591,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 578,
                    "end": 590,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 578,
                      "end": 586,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 578,
                        "end": 583
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 584,
                        "end": 585,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 589,
                      "end": 590,
                      "raw": "1",
                      "value": 1
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 600,
                  "end": 614,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 600,
                    "end": 613,
                    "operator": "+=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 600,
                      "end": 608,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 600,
                        "end": 605
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 606,
                        "end": 607,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 612,
                      "end": 613,
                      "raw": "1",
                      "value": 1
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 623,
                  "end": 634,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 623,
                    "end": 633,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 623,
                      "end": 631,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 623,
                        "end": 628
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 629,
                        "end": 630,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "++",
                    "prefix": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 643,
                  "end": 654,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 643,
                    "end": 653,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 643,
                      "end": 651,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 643,
                        "end": 648
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 649,
                        "end": 650,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "--",
                    "prefix": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 663,
                  "end": 674,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 663,
                    "end": 673,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 665,
                      "end": 673,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 665,
                        "end": 670
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 671,
                        "end": 672,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "++",
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 683,
                  "end": 694,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 683,
                    "end": 693,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 685,
                      "end": 693,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 685,
                        "end": 690
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 691,
                        "end": 692,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "--",
                    "prefix": true
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 703,
                  "end": 732,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 704,
                    "end": 730,
                    "operator": "=",
                    "left": {
                      "type": "ObjectPattern",
                      "start": 704,
                      "end": 719,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 706,
                          "end": 717,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 706,
                            "end": 707,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "MemberExpression",
                            "start": 709,
                            "end": 717,
                            "computed": true,
                            "object": {
                              "type": "Super",
                              "start": 709,
                              "end": 714
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 715,
                              "end": 716,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ],
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
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 724,
                            "end": 725,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 727,
                            "end": 728,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 741,
                  "end": 758,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 741,
                    "end": 757,
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "start": 741,
                      "end": 751,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "MemberExpression",
                          "start": 742,
                          "end": 750,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 742,
                            "end": 747
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 748,
                            "end": 749,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
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
                          "raw": "1",
                          "value": 1
                        }
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 86,
            "end": 90,
            "expression": {
              "type": "Identifier",
              "start": 87,
              "end": 90,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 107,
          "end": 111,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "typeParameters": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
