__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 766,
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
      "type": "ClassDeclaration",
      "start": 85,
      "end": 765,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 97,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 106,
        "end": 110,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 765,
        "body": [
          {
            "type": "StaticBlock",
            "start": 117,
            "end": 763,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 134,
                "end": 142,
                "expression": {
                  "type": "MemberExpression",
                  "start": 134,
                  "end": 141,
                  "object": {
                    "type": "Super",
                    "start": 134,
                    "end": 139
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
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
                "start": 151,
                "end": 163,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 151,
                  "end": 162,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 151,
                    "end": 158,
                    "object": {
                      "type": "Super",
                      "start": 151,
                      "end": 156
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 157,
                      "end": 158,
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
                    "start": 161,
                    "end": 162,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 172,
                "end": 185,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 172,
                  "end": 184,
                  "operator": "+=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 172,
                    "end": 179,
                    "object": {
                      "type": "Super",
                      "start": 172,
                      "end": 177
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
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
                    "start": 183,
                    "end": 184,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 194,
                "end": 204,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 194,
                  "end": 203,
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 194,
                    "end": 201,
                    "object": {
                      "type": "Super",
                      "start": 194,
                      "end": 199
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 201,
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
                "start": 213,
                "end": 223,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 213,
                  "end": 222,
                  "operator": "--",
                  "prefix": false,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 213,
                    "end": 220,
                    "object": {
                      "type": "Super",
                      "start": 213,
                      "end": 218
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 220,
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
                "start": 232,
                "end": 242,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 232,
                  "end": 241,
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 234,
                    "end": 241,
                    "object": {
                      "type": "Super",
                      "start": 234,
                      "end": 239
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 240,
                      "end": 241,
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
                "start": 251,
                "end": 261,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 251,
                  "end": 260,
                  "operator": "--",
                  "prefix": true,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 253,
                    "end": 260,
                    "object": {
                      "type": "Super",
                      "start": 253,
                      "end": 258
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
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
                "start": 270,
                "end": 298,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 271,
                  "end": 296,
                  "operator": "=",
                  "left": {
                    "type": "ObjectPattern",
                    "start": 271,
                    "end": 285,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 273,
                        "end": 283,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 273,
                          "end": 274,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "MemberExpression",
                          "start": 276,
                          "end": 283,
                          "object": {
                            "type": "Super",
                            "start": 276,
                            "end": 281
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 282,
                            "end": 283,
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
                    "start": 288,
                    "end": 296,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 290,
                        "end": 294,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 291,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 293,
                          "end": 294,
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
                "start": 307,
                "end": 323,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 307,
                  "end": 322,
                  "operator": "=",
                  "left": {
                    "type": "ArrayPattern",
                    "start": 307,
                    "end": 316,
                    "elements": [
                      {
                        "type": "MemberExpression",
                        "start": 308,
                        "end": 315,
                        "object": {
                          "type": "Super",
                          "start": 308,
                          "end": 313
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 314,
                          "end": 315,
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
                    "start": 319,
                    "end": 322,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 320,
                        "end": 321,
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
                "start": 333,
                "end": 344,
                "expression": {
                  "type": "MemberExpression",
                  "start": 333,
                  "end": 343,
                  "object": {
                    "type": "Super",
                    "start": 333,
                    "end": 338
                  },
                  "property": {
                    "type": "Literal",
                    "start": 339,
                    "end": 342,
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
                "start": 353,
                "end": 368,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 353,
                  "end": 367,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 353,
                    "end": 363,
                    "object": {
                      "type": "Super",
                      "start": 353,
                      "end": 358
                    },
                    "property": {
                      "type": "Literal",
                      "start": 359,
                      "end": 362,
                      "value": "x",
                      "raw": "\"x\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 366,
                    "end": 367,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 377,
                "end": 393,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 377,
                  "end": 392,
                  "operator": "+=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 377,
                    "end": 387,
                    "object": {
                      "type": "Super",
                      "start": 377,
                      "end": 382
                    },
                    "property": {
                      "type": "Literal",
                      "start": 383,
                      "end": 386,
                      "value": "x",
                      "raw": "\"x\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 391,
                    "end": 392,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 402,
                "end": 415,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 402,
                  "end": 414,
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 402,
                    "end": 412,
                    "object": {
                      "type": "Super",
                      "start": 402,
                      "end": 407
                    },
                    "property": {
                      "type": "Literal",
                      "start": 408,
                      "end": 411,
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
                "start": 424,
                "end": 437,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 424,
                  "end": 436,
                  "operator": "--",
                  "prefix": false,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 424,
                    "end": 434,
                    "object": {
                      "type": "Super",
                      "start": 424,
                      "end": 429
                    },
                    "property": {
                      "type": "Literal",
                      "start": 430,
                      "end": 433,
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
                "start": 446,
                "end": 459,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 446,
                  "end": 458,
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 448,
                    "end": 458,
                    "object": {
                      "type": "Super",
                      "start": 448,
                      "end": 453
                    },
                    "property": {
                      "type": "Literal",
                      "start": 454,
                      "end": 457,
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
                "start": 468,
                "end": 481,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 468,
                  "end": 480,
                  "operator": "--",
                  "prefix": true,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 470,
                    "end": 480,
                    "object": {
                      "type": "Super",
                      "start": 470,
                      "end": 475
                    },
                    "property": {
                      "type": "Literal",
                      "start": 476,
                      "end": 479,
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
                "start": 490,
                "end": 521,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 491,
                  "end": 519,
                  "operator": "=",
                  "left": {
                    "type": "ObjectPattern",
                    "start": 491,
                    "end": 508,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 493,
                        "end": 506,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 493,
                          "end": 494,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "MemberExpression",
                          "start": 496,
                          "end": 506,
                          "object": {
                            "type": "Super",
                            "start": 496,
                            "end": 501
                          },
                          "property": {
                            "type": "Literal",
                            "start": 502,
                            "end": 505,
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
                    "start": 511,
                    "end": 519,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 513,
                        "end": 517,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 513,
                          "end": 514,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 516,
                          "end": 517,
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
                "start": 530,
                "end": 549,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 530,
                  "end": 548,
                  "operator": "=",
                  "left": {
                    "type": "ArrayPattern",
                    "start": 530,
                    "end": 542,
                    "elements": [
                      {
                        "type": "MemberExpression",
                        "start": 531,
                        "end": 541,
                        "object": {
                          "type": "Super",
                          "start": 531,
                          "end": 536
                        },
                        "property": {
                          "type": "Literal",
                          "start": 537,
                          "end": 540,
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
                    "start": 545,
                    "end": 548,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 546,
                        "end": 547,
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
                "start": 559,
                "end": 568,
                "expression": {
                  "type": "MemberExpression",
                  "start": 559,
                  "end": 567,
                  "object": {
                    "type": "Super",
                    "start": 559,
                    "end": 564
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 565,
                    "end": 566,
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
                "start": 577,
                "end": 590,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 577,
                  "end": 589,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 577,
                    "end": 585,
                    "object": {
                      "type": "Super",
                      "start": 577,
                      "end": 582
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 583,
                      "end": 584,
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
                    "start": 588,
                    "end": 589,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 599,
                "end": 613,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 599,
                  "end": 612,
                  "operator": "+=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 599,
                    "end": 607,
                    "object": {
                      "type": "Super",
                      "start": 599,
                      "end": 604
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 605,
                      "end": 606,
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
                    "start": 611,
                    "end": 612,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 622,
                "end": 633,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 622,
                  "end": 632,
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 622,
                    "end": 630,
                    "object": {
                      "type": "Super",
                      "start": 622,
                      "end": 627
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 628,
                      "end": 629,
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
                "start": 642,
                "end": 653,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 642,
                  "end": 652,
                  "operator": "--",
                  "prefix": false,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 642,
                    "end": 650,
                    "object": {
                      "type": "Super",
                      "start": 642,
                      "end": 647
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 648,
                      "end": 649,
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
                "start": 662,
                "end": 673,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 662,
                  "end": 672,
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 664,
                    "end": 672,
                    "object": {
                      "type": "Super",
                      "start": 664,
                      "end": 669
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 670,
                      "end": 671,
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
                "start": 682,
                "end": 693,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 682,
                  "end": 692,
                  "operator": "--",
                  "prefix": true,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 684,
                    "end": 692,
                    "object": {
                      "type": "Super",
                      "start": 684,
                      "end": 689
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 690,
                      "end": 691,
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
                "start": 702,
                "end": 731,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 703,
                  "end": 729,
                  "operator": "=",
                  "left": {
                    "type": "ObjectPattern",
                    "start": 703,
                    "end": 718,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 705,
                        "end": 716,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 705,
                          "end": 706,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "MemberExpression",
                          "start": 708,
                          "end": 716,
                          "object": {
                            "type": "Super",
                            "start": 708,
                            "end": 713
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 714,
                            "end": 715,
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
                    "start": 721,
                    "end": 729,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 723,
                        "end": 727,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 723,
                          "end": 724,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 726,
                          "end": 727,
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
                "start": 740,
                "end": 757,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 740,
                  "end": 756,
                  "operator": "=",
                  "left": {
                    "type": "ArrayPattern",
                    "start": 740,
                    "end": 750,
                    "elements": [
                      {
                        "type": "MemberExpression",
                        "start": 741,
                        "end": 749,
                        "object": {
                          "type": "Super",
                          "start": 741,
                          "end": 746
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 747,
                          "end": 748,
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
                    "start": 753,
                    "end": 756,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 754,
                        "end": 755,
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
          "start": 85,
          "end": 89,
          "expression": {
            "type": "Identifier",
            "start": 86,
            "end": 89,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
