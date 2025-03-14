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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 26,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 17,
              "decorators": [],
              "name": "p1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 57,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 57,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 44,
            "end": 55,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 46,
              "decorators": [],
              "name": "p2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 37,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 97,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 78,
        "end": 97,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 84,
            "end": 95,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 86,
              "decorators": [],
              "name": "p3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 66,
        "decorators": [],
        "name": "D1",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 75,
        "end": 77,
        "decorators": [],
        "name": "C1",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 113,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 113,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 130,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 130,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 124,
                "end": 130
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 161,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 164,
      "end": 215,
      "async": false,
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
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 177,
        "decorators": [],
        "name": "isC1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 178,
          "end": 184,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 179,
            "end": 184,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 181,
              "end": 184
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 185,
        "end": 194,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 187,
          "end": 194,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 187,
            "end": 188,
            "decorators": [],
            "name": "x",
            "optional": false
          },
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
                "decorators": [],
                "name": "C1",
                "optional": false
              }
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 217,
      "end": 268,
      "async": false,
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
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 226,
        "end": 230,
        "decorators": [],
        "name": "isC2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 231,
          "end": 237,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 232,
            "end": 237,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 234,
              "end": 237
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 238,
        "end": 247,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 240,
          "end": 247,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 240,
            "end": 241,
            "decorators": [],
            "name": "x",
            "optional": false
          },
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
                "decorators": [],
                "name": "C2",
                "optional": false
              }
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 270,
      "end": 321,
      "async": false,
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
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 279,
        "end": 283,
        "decorators": [],
        "name": "isD1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 284,
          "end": 290,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 285,
            "end": 290,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 287,
              "end": 290
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 291,
        "end": 300,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 293,
          "end": 300,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 293,
            "end": 294,
            "decorators": [],
            "name": "x",
            "optional": false
          },
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
                "decorators": [],
                "name": "D1",
                "optional": false
              }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 342,
            "decorators": [],
            "name": "c1Orc2",
            "optional": false,
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
                      "decorators": [],
                      "name": "C1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 340,
                    "end": 342,
                    "typeName": {
                      "type": "Identifier",
                      "start": 340,
                      "end": 342,
                      "decorators": [],
                      "name": "C2",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "decorators": [],
          "name": "str",
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 350,
          "end": 375,
          "operator": "&&",
          "left": {
            "type": "CallExpression",
            "start": 350,
            "end": 362,
            "arguments": [
              {
                "type": "Identifier",
                "start": 355,
                "end": 361,
                "decorators": [],
                "name": "c1Orc2",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 350,
              "end": 354,
              "decorators": [],
              "name": "isC1",
              "optional": false
            },
            "optional": false
          },
          "right": {
            "type": "MemberExpression",
            "start": 366,
            "end": 375,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 366,
              "end": 372,
              "decorators": [],
              "name": "c1Orc2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 373,
              "end": 375,
              "decorators": [],
              "name": "p1",
              "optional": false
            }
          }
        }
      }
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
          "decorators": [],
          "name": "num",
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 389,
          "end": 414,
          "operator": "&&",
          "left": {
            "type": "CallExpression",
            "start": 389,
            "end": 401,
            "arguments": [
              {
                "type": "Identifier",
                "start": 394,
                "end": 400,
                "decorators": [],
                "name": "c1Orc2",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 389,
              "end": 393,
              "decorators": [],
              "name": "isC2",
              "optional": false
            },
            "optional": false
          },
          "right": {
            "type": "MemberExpression",
            "start": 405,
            "end": 414,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 405,
              "end": 411,
              "decorators": [],
              "name": "c1Orc2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 412,
              "end": 414,
              "decorators": [],
              "name": "p2",
              "optional": false
            }
          }
        }
      }
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
          "decorators": [],
          "name": "str",
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 428,
          "end": 453,
          "operator": "&&",
          "left": {
            "type": "CallExpression",
            "start": 428,
            "end": 440,
            "arguments": [
              {
                "type": "Identifier",
                "start": 433,
                "end": 439,
                "decorators": [],
                "name": "c1Orc2",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 428,
              "end": 432,
              "decorators": [],
              "name": "isD1",
              "optional": false
            },
            "optional": false
          },
          "right": {
            "type": "MemberExpression",
            "start": 444,
            "end": 453,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 444,
              "end": 450,
              "decorators": [],
              "name": "c1Orc2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 451,
              "end": 453,
              "decorators": [],
              "name": "p1",
              "optional": false
            }
          }
        }
      }
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
          "decorators": [],
          "name": "num",
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 467,
          "end": 492,
          "operator": "&&",
          "left": {
            "type": "CallExpression",
            "start": 467,
            "end": 479,
            "arguments": [
              {
                "type": "Identifier",
                "start": 472,
                "end": 478,
                "decorators": [],
                "name": "c1Orc2",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 467,
              "end": 471,
              "decorators": [],
              "name": "isD1",
              "optional": false
            },
            "optional": false
          },
          "right": {
            "type": "MemberExpression",
            "start": 483,
            "end": 492,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 483,
              "end": 489,
              "decorators": [],
              "name": "c1Orc2",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 490,
              "end": 492,
              "decorators": [],
              "name": "p3",
              "optional": false
            }
          }
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 520,
            "decorators": [],
            "name": "c2Ord1",
            "optional": false,
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
                      "decorators": [],
                      "name": "C2",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 518,
                    "end": 520,
                    "typeName": {
                      "type": "Identifier",
                      "start": 518,
                      "end": 520,
                      "decorators": [],
                      "name": "D1",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "decorators": [],
          "name": "num",
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 528,
          "end": 553,
          "operator": "&&",
          "left": {
            "type": "CallExpression",
            "start": 528,
            "end": 540,
            "arguments": [
              {
                "type": "Identifier",
                "start": 533,
                "end": 539,
                "decorators": [],
                "name": "c2Ord1",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 528,
              "end": 532,
              "decorators": [],
              "name": "isC2",
              "optional": false
            },
            "optional": false
          },
          "right": {
            "type": "MemberExpression",
            "start": 544,
            "end": 553,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 544,
              "end": 550,
              "decorators": [],
              "name": "c2Ord1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 551,
              "end": 553,
              "decorators": [],
              "name": "p2",
              "optional": false
            }
          }
        }
      }
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
          "decorators": [],
          "name": "num",
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 567,
          "end": 592,
          "operator": "&&",
          "left": {
            "type": "CallExpression",
            "start": 567,
            "end": 579,
            "arguments": [
              {
                "type": "Identifier",
                "start": 572,
                "end": 578,
                "decorators": [],
                "name": "c2Ord1",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 567,
              "end": 571,
              "decorators": [],
              "name": "isD1",
              "optional": false
            },
            "optional": false
          },
          "right": {
            "type": "MemberExpression",
            "start": 583,
            "end": 592,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 583,
              "end": 589,
              "decorators": [],
              "name": "c2Ord1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 590,
              "end": 592,
              "decorators": [],
              "name": "p3",
              "optional": false
            }
          }
        }
      }
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
          "decorators": [],
          "name": "str",
          "optional": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 606,
          "end": 631,
          "operator": "&&",
          "left": {
            "type": "CallExpression",
            "start": 606,
            "end": 618,
            "arguments": [
              {
                "type": "Identifier",
                "start": 611,
                "end": 617,
                "decorators": [],
                "name": "c2Ord1",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 606,
              "end": 610,
              "decorators": [],
              "name": "isD1",
              "optional": false
            },
            "optional": false
          },
          "right": {
            "type": "MemberExpression",
            "start": 622,
            "end": 631,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 622,
              "end": 628,
              "decorators": [],
              "name": "c2Ord1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 629,
              "end": 631,
              "decorators": [],
              "name": "p1",
              "optional": false
            }
          }
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 643,
            "end": 654,
            "decorators": [],
            "name": "r2",
            "optional": false,
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
                      "decorators": [],
                      "name": "C2",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 652,
                    "end": 654,
                    "typeName": {
                      "type": "Identifier",
                      "start": 652,
                      "end": 654,
                      "decorators": [],
                      "name": "D1",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 657,
            "end": 679,
            "operator": "&&",
            "left": {
              "type": "CallExpression",
              "start": 657,
              "end": 669,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 662,
                  "end": 668,
                  "decorators": [],
                  "name": "c2Ord1",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 657,
                "end": 661,
                "decorators": [],
                "name": "isC1",
                "optional": false
              },
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 673,
              "end": 679,
              "decorators": [],
              "name": "c2Ord1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
