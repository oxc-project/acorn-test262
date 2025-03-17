__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 691,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 26,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 17,
              "name": "p1",
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
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
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
      "start": 29,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 37,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 57,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 44,
            "end": 55,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 46,
              "name": "p2",
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
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 48,
                "end": 54
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
      "start": 58,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 66,
        "name": "D1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 75,
        "end": 77,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 78,
        "end": 97,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 84,
            "end": 95,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 86,
              "name": "p3",
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
              "start": 86,
              "end": 94,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 88,
                "end": 94
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
      "start": 98,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 113,
            "name": "str",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 113,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
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
      "start": 115,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 130,
            "name": "num",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 130,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 124,
                "end": 130
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
      "start": 132,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 161,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 161,
            "name": "strOrNum",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 161,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 146,
                "end": 161,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 146,
                    "end": 152
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 155,
                    "end": 161
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
      "type": "FunctionDeclaration",
      "start": 164,
      "end": 215,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 177,
        "name": "isC1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 178,
          "end": 184,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 179,
            "end": 184,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 181,
              "end": 184
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 195,
        "end": 215,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 201,
            "end": 213,
            "argument": {
              "type": "Literal",
              "start": 208,
              "end": 212,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 185,
        "end": 194,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 187,
          "end": 194,
          "parameterName": {
            "type": "Identifier",
            "start": 187,
            "end": 188,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 192,
            "end": 194,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 192,
              "end": 194,
              "typeName": {
                "type": "Identifier",
                "start": 192,
                "end": 194,
                "name": "C1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 217,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 226,
        "end": 230,
        "name": "isC2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 231,
          "end": 237,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 232,
            "end": 237,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 234,
              "end": 237
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 248,
        "end": 268,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 254,
            "end": 266,
            "argument": {
              "type": "Literal",
              "start": 261,
              "end": 265,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 238,
        "end": 247,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 240,
          "end": 247,
          "parameterName": {
            "type": "Identifier",
            "start": 240,
            "end": 241,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 245,
            "end": 247,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 245,
              "end": 247,
              "typeName": {
                "type": "Identifier",
                "start": 245,
                "end": 247,
                "name": "C2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 270,
      "end": 321,
      "id": {
        "type": "Identifier",
        "start": 279,
        "end": 283,
        "name": "isD1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 284,
          "end": 290,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 285,
            "end": 290,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 287,
              "end": 290
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 301,
        "end": 321,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 307,
            "end": 319,
            "argument": {
              "type": "Literal",
              "start": 314,
              "end": 318,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 291,
        "end": 300,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 293,
          "end": 300,
          "parameterName": {
            "type": "Identifier",
            "start": 293,
            "end": 294,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 298,
            "end": 300,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 298,
              "end": 300,
              "typeName": {
                "type": "Identifier",
                "start": 298,
                "end": 300,
                "name": "D1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 323,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 342,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 342,
            "name": "c1Orc2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 333,
              "end": 342,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 335,
                "end": 342,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 335,
                    "end": 337,
                    "typeName": {
                      "type": "Identifier",
                      "start": 335,
                      "end": 337,
                      "name": "C1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 340,
                    "end": 342,
                    "typeName": {
                      "type": "Identifier",
                      "start": 340,
                      "end": 342,
                      "name": "C2",
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
      "start": 344,
      "end": 376,
      "expression": {
        "type": "AssignmentExpression",
        "start": 344,
        "end": 375,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 344,
          "end": 347,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 350,
          "end": 375,
          "left": {
            "type": "CallExpression",
            "start": 350,
            "end": 362,
            "callee": {
              "type": "Identifier",
              "start": 350,
              "end": 354,
              "name": "isC1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 355,
                "end": 361,
                "name": "c1Orc2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 366,
            "end": 375,
            "object": {
              "type": "Identifier",
              "start": 366,
              "end": 372,
              "name": "c1Orc2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 373,
              "end": 375,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 383,
      "end": 415,
      "expression": {
        "type": "AssignmentExpression",
        "start": 383,
        "end": 414,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 383,
          "end": 386,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 389,
          "end": 414,
          "left": {
            "type": "CallExpression",
            "start": 389,
            "end": 401,
            "callee": {
              "type": "Identifier",
              "start": 389,
              "end": 393,
              "name": "isC2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 394,
                "end": 400,
                "name": "c1Orc2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 405,
            "end": 414,
            "object": {
              "type": "Identifier",
              "start": 405,
              "end": 411,
              "name": "c1Orc2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 412,
              "end": 414,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 422,
      "end": 454,
      "expression": {
        "type": "AssignmentExpression",
        "start": 422,
        "end": 453,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 422,
          "end": 425,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 428,
          "end": 453,
          "left": {
            "type": "CallExpression",
            "start": 428,
            "end": 440,
            "callee": {
              "type": "Identifier",
              "start": 428,
              "end": 432,
              "name": "isD1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 433,
                "end": 439,
                "name": "c1Orc2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 444,
            "end": 453,
            "object": {
              "type": "Identifier",
              "start": 444,
              "end": 450,
              "name": "c1Orc2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 451,
              "end": 453,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 461,
      "end": 493,
      "expression": {
        "type": "AssignmentExpression",
        "start": 461,
        "end": 492,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 461,
          "end": 464,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 467,
          "end": 492,
          "left": {
            "type": "CallExpression",
            "start": 467,
            "end": 479,
            "callee": {
              "type": "Identifier",
              "start": 467,
              "end": 471,
              "name": "isD1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 472,
                "end": 478,
                "name": "c1Orc2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 483,
            "end": 492,
            "object": {
              "type": "Identifier",
              "start": 483,
              "end": 489,
              "name": "c1Orc2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 490,
              "end": 492,
              "name": "p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 501,
      "end": 521,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 520,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 520,
            "name": "c2Ord1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 511,
              "end": 520,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 513,
                "end": 520,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 513,
                    "end": 515,
                    "typeName": {
                      "type": "Identifier",
                      "start": 513,
                      "end": 515,
                      "name": "C2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 518,
                    "end": 520,
                    "typeName": {
                      "type": "Identifier",
                      "start": 518,
                      "end": 520,
                      "name": "D1",
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
      "start": 522,
      "end": 554,
      "expression": {
        "type": "AssignmentExpression",
        "start": 522,
        "end": 553,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 522,
          "end": 525,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 528,
          "end": 553,
          "left": {
            "type": "CallExpression",
            "start": 528,
            "end": 540,
            "callee": {
              "type": "Identifier",
              "start": 528,
              "end": 532,
              "name": "isC2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 533,
                "end": 539,
                "name": "c2Ord1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 544,
            "end": 553,
            "object": {
              "type": "Identifier",
              "start": 544,
              "end": 550,
              "name": "c2Ord1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 551,
              "end": 553,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 561,
      "end": 593,
      "expression": {
        "type": "AssignmentExpression",
        "start": 561,
        "end": 592,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 561,
          "end": 564,
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 567,
          "end": 592,
          "left": {
            "type": "CallExpression",
            "start": 567,
            "end": 579,
            "callee": {
              "type": "Identifier",
              "start": 567,
              "end": 571,
              "name": "isD1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 572,
                "end": 578,
                "name": "c2Ord1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 583,
            "end": 592,
            "object": {
              "type": "Identifier",
              "start": 583,
              "end": 589,
              "name": "c2Ord1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 590,
              "end": 592,
              "name": "p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 600,
      "end": 632,
      "expression": {
        "type": "AssignmentExpression",
        "start": 600,
        "end": 631,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 600,
          "end": 603,
          "name": "str",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 606,
          "end": 631,
          "left": {
            "type": "CallExpression",
            "start": 606,
            "end": 618,
            "callee": {
              "type": "Identifier",
              "start": 606,
              "end": 610,
              "name": "isD1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 611,
                "end": 617,
                "name": "c2Ord1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "start": 622,
            "end": 631,
            "object": {
              "type": "Identifier",
              "start": 622,
              "end": 628,
              "name": "c2Ord1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 629,
              "end": 631,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 639,
      "end": 680,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 643,
          "end": 679,
          "id": {
            "type": "Identifier",
            "start": 643,
            "end": 654,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 645,
              "end": 654,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 647,
                "end": 654,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 647,
                    "end": 649,
                    "typeName": {
                      "type": "Identifier",
                      "start": 647,
                      "end": 649,
                      "name": "C2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 652,
                    "end": 654,
                    "typeName": {
                      "type": "Identifier",
                      "start": 652,
                      "end": 654,
                      "name": "D1",
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
            "type": "LogicalExpression",
            "start": 657,
            "end": 679,
            "left": {
              "type": "CallExpression",
              "start": 657,
              "end": 669,
              "callee": {
                "type": "Identifier",
                "start": 657,
                "end": 661,
                "name": "isC1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 662,
                  "end": 668,
                  "name": "c2Ord1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 673,
              "end": 679,
              "name": "c2Ord1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
