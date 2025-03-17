__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 999,
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
      "end": 376,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 98,
        "name": "C1",
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
        "end": 376,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 118,
            "end": 137,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 129,
              "end": 136,
              "object": {
                "type": "Super",
                "start": 129,
                "end": 134
              },
              "property": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 142,
            "end": 165,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 153,
              "end": 164,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 153,
                "end": 160,
                "object": {
                  "type": "Super",
                  "start": 153,
                  "end": 158
                },
                "property": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
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
                "start": 163,
                "end": 164,
                "value": 1,
                "raw": "1"
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 170,
            "end": 194,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 181,
              "end": 193,
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "start": 181,
                "end": 188,
                "object": {
                  "type": "Super",
                  "start": 181,
                  "end": 186
                },
                "property": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 188,
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
                "start": 192,
                "end": 193,
                "value": 1,
                "raw": "1"
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 199,
            "end": 220,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UpdateExpression",
              "start": 210,
              "end": 219,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "MemberExpression",
                "start": 210,
                "end": 217,
                "object": {
                  "type": "Super",
                  "start": 210,
                  "end": 215
                },
                "property": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 217,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 225,
            "end": 246,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UpdateExpression",
              "start": 236,
              "end": 245,
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "MemberExpression",
                "start": 236,
                "end": 243,
                "object": {
                  "type": "Super",
                  "start": 236,
                  "end": 241
                },
                "property": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 243,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 251,
            "end": 272,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 258,
              "end": 259,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UpdateExpression",
              "start": 262,
              "end": 271,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "start": 264,
                "end": 271,
                "object": {
                  "type": "Super",
                  "start": 264,
                  "end": 269
                },
                "property": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 271,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 277,
            "end": 298,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 284,
              "end": 285,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UpdateExpression",
              "start": 288,
              "end": 297,
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "start": 290,
                "end": 297,
                "object": {
                  "type": "Super",
                  "start": 290,
                  "end": 295
                },
                "property": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 297,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 303,
            "end": 342,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 315,
              "end": 340,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 315,
                "end": 329,
                "properties": [
                  {
                    "type": "Property",
                    "start": 317,
                    "end": 327,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 317,
                      "end": 318,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "MemberExpression",
                      "start": 320,
                      "end": 327,
                      "object": {
                        "type": "Super",
                        "start": 320,
                        "end": 325
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 327,
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
                "start": 332,
                "end": 340,
                "properties": [
                  {
                    "type": "Property",
                    "start": 334,
                    "end": 338,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 335,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 337,
                      "end": 338,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 347,
            "end": 374,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 354,
              "end": 355,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 358,
              "end": 373,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 358,
                "end": 367,
                "elements": [
                  {
                    "type": "MemberExpression",
                    "start": 359,
                    "end": 366,
                    "object": {
                      "type": "Super",
                      "start": 359,
                      "end": 364
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 365,
                      "end": 366,
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
                "start": 370,
                "end": 373,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 371,
                    "end": 372,
                    "value": 1,
                    "raw": "1"
                  }
                ]
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
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
    },
    {
      "type": "ClassDeclaration",
      "start": 378,
      "end": 696,
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 391,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 400,
        "end": 404,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 405,
        "end": 696,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 411,
            "end": 433,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 418,
              "end": 419,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 422,
              "end": 432,
              "object": {
                "type": "Super",
                "start": 422,
                "end": 427
              },
              "property": {
                "type": "Literal",
                "start": 428,
                "end": 431,
                "value": "x",
                "raw": "\"x\""
              },
              "computed": true,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 438,
            "end": 464,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 445,
              "end": 446,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 449,
              "end": 463,
              "operator": "=",
              "left": {
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
              },
              "right": {
                "type": "Literal",
                "start": 462,
                "end": 463,
                "value": 1,
                "raw": "1"
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 469,
            "end": 496,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 476,
              "end": 477,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 480,
              "end": 495,
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "start": 480,
                "end": 490,
                "object": {
                  "type": "Super",
                  "start": 480,
                  "end": 485
                },
                "property": {
                  "type": "Literal",
                  "start": 486,
                  "end": 489,
                  "value": "x",
                  "raw": "\"x\""
                },
                "computed": true,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 494,
                "end": 495,
                "value": 1,
                "raw": "1"
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 501,
            "end": 525,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 508,
              "end": 509,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UpdateExpression",
              "start": 512,
              "end": 524,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "MemberExpression",
                "start": 512,
                "end": 522,
                "object": {
                  "type": "Super",
                  "start": 512,
                  "end": 517
                },
                "property": {
                  "type": "Literal",
                  "start": 518,
                  "end": 521,
                  "value": "x",
                  "raw": "\"x\""
                },
                "computed": true,
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 530,
            "end": 554,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 537,
              "end": 538,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UpdateExpression",
              "start": 541,
              "end": 553,
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "MemberExpression",
                "start": 541,
                "end": 551,
                "object": {
                  "type": "Super",
                  "start": 541,
                  "end": 546
                },
                "property": {
                  "type": "Literal",
                  "start": 547,
                  "end": 550,
                  "value": "x",
                  "raw": "\"x\""
                },
                "computed": true,
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 559,
            "end": 583,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 566,
              "end": 567,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UpdateExpression",
              "start": 570,
              "end": 582,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "start": 572,
                "end": 582,
                "object": {
                  "type": "Super",
                  "start": 572,
                  "end": 577
                },
                "property": {
                  "type": "Literal",
                  "start": 578,
                  "end": 581,
                  "value": "x",
                  "raw": "\"x\""
                },
                "computed": true,
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 588,
            "end": 612,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 595,
              "end": 596,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UpdateExpression",
              "start": 599,
              "end": 611,
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "start": 601,
                "end": 611,
                "object": {
                  "type": "Super",
                  "start": 601,
                  "end": 606
                },
                "property": {
                  "type": "Literal",
                  "start": 607,
                  "end": 610,
                  "value": "x",
                  "raw": "\"x\""
                },
                "computed": true,
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 617,
            "end": 659,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 624,
              "end": 625,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 629,
              "end": 657,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 629,
                "end": 646,
                "properties": [
                  {
                    "type": "Property",
                    "start": 631,
                    "end": 644,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 631,
                      "end": 632,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "MemberExpression",
                      "start": 634,
                      "end": 644,
                      "object": {
                        "type": "Super",
                        "start": 634,
                        "end": 639
                      },
                      "property": {
                        "type": "Literal",
                        "start": 640,
                        "end": 643,
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
                "start": 649,
                "end": 657,
                "properties": [
                  {
                    "type": "Property",
                    "start": 651,
                    "end": 655,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 651,
                      "end": 652,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 654,
                      "end": 655,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 664,
            "end": 694,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 671,
              "end": 672,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 675,
              "end": 693,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 675,
                "end": 687,
                "elements": [
                  {
                    "type": "MemberExpression",
                    "start": 676,
                    "end": 686,
                    "object": {
                      "type": "Super",
                      "start": 676,
                      "end": 681
                    },
                    "property": {
                      "type": "Literal",
                      "start": 682,
                      "end": 685,
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
                "start": 690,
                "end": 693,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 691,
                    "end": 692,
                    "value": 1,
                    "raw": "1"
                  }
                ]
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 378,
          "end": 382,
          "expression": {
            "type": "Identifier",
            "start": 379,
            "end": 382,
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
    {
      "type": "ClassDeclaration",
      "start": 698,
      "end": 998,
      "id": {
        "type": "Identifier",
        "start": 709,
        "end": 711,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 720,
        "end": 724,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 725,
        "end": 998,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 731,
            "end": 751,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 738,
              "end": 739,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
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
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 756,
            "end": 780,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 763,
              "end": 764,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 767,
              "end": 779,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 767,
                "end": 775,
                "object": {
                  "type": "Super",
                  "start": 767,
                  "end": 772
                },
                "property": {
                  "type": "Identifier",
                  "start": 773,
                  "end": 774,
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
                "start": 778,
                "end": 779,
                "value": 1,
                "raw": "1"
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 785,
            "end": 810,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 792,
              "end": 793,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 796,
              "end": 809,
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "start": 796,
                "end": 804,
                "object": {
                  "type": "Super",
                  "start": 796,
                  "end": 801
                },
                "property": {
                  "type": "Identifier",
                  "start": 802,
                  "end": 803,
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
                "start": 808,
                "end": 809,
                "value": 1,
                "raw": "1"
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 815,
            "end": 837,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 822,
              "end": 823,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UpdateExpression",
              "start": 826,
              "end": 836,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "MemberExpression",
                "start": 826,
                "end": 834,
                "object": {
                  "type": "Super",
                  "start": 826,
                  "end": 831
                },
                "property": {
                  "type": "Identifier",
                  "start": 832,
                  "end": 833,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 842,
            "end": 864,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 849,
              "end": 850,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UpdateExpression",
              "start": 853,
              "end": 863,
              "operator": "--",
              "prefix": false,
              "argument": {
                "type": "MemberExpression",
                "start": 853,
                "end": 861,
                "object": {
                  "type": "Super",
                  "start": 853,
                  "end": 858
                },
                "property": {
                  "type": "Identifier",
                  "start": 859,
                  "end": 860,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 869,
            "end": 891,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 876,
              "end": 877,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UpdateExpression",
              "start": 880,
              "end": 890,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "start": 882,
                "end": 890,
                "object": {
                  "type": "Super",
                  "start": 882,
                  "end": 887
                },
                "property": {
                  "type": "Identifier",
                  "start": 888,
                  "end": 889,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 896,
            "end": 918,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 903,
              "end": 904,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UpdateExpression",
              "start": 907,
              "end": 917,
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "start": 909,
                "end": 917,
                "object": {
                  "type": "Super",
                  "start": 909,
                  "end": 914
                },
                "property": {
                  "type": "Identifier",
                  "start": 915,
                  "end": 916,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": true,
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 923,
            "end": 963,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 930,
              "end": 931,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 935,
              "end": 961,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 935,
                "end": 950,
                "properties": [
                  {
                    "type": "Property",
                    "start": 937,
                    "end": 948,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 937,
                      "end": 938,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "MemberExpression",
                      "start": 940,
                      "end": 948,
                      "object": {
                        "type": "Super",
                        "start": 940,
                        "end": 945
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 946,
                        "end": 947,
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
                "start": 953,
                "end": 961,
                "properties": [
                  {
                    "type": "Property",
                    "start": 955,
                    "end": 959,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 955,
                      "end": 956,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 958,
                      "end": 959,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 968,
            "end": 996,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 975,
              "end": 976,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 979,
              "end": 995,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 979,
                "end": 989,
                "elements": [
                  {
                    "type": "MemberExpression",
                    "start": 980,
                    "end": 988,
                    "object": {
                      "type": "Super",
                      "start": 980,
                      "end": 985
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 986,
                      "end": 987,
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
                "start": 992,
                "end": 995,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 993,
                    "end": 994,
                    "value": 1,
                    "raw": "1"
                  }
                ]
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 698,
          "end": 702,
          "expression": {
            "type": "Identifier",
            "start": 699,
            "end": 702,
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
