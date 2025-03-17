__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 6523,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 22,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 20,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "name": "a",
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
              "start": 11,
              "end": 19,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 13,
                "end": 19
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
      "start": 23,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 45,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 43,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "b",
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
              "start": 34,
              "end": 42,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 36,
                "end": 42
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
      "type": "FunctionDeclaration",
      "start": 47,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 75,
        "name": "negativeClassesTest",
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
          "start": 76,
          "end": 84,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 84,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 79,
              "end": 84,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 79,
                  "end": 80,
                  "typeName": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 83,
                  "end": 84,
                  "typeName": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 84,
                    "name": "B",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 166,
        "body": [
          {
            "type": "IfStatement",
            "start": 92,
            "end": 164,
            "test": {
              "type": "BinaryExpression",
              "start": 96,
              "end": 104,
              "left": {
                "type": "Literal",
                "start": 96,
                "end": 99,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 106,
              "end": 132,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 116,
                  "end": 126,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 116,
                    "end": 125,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 116,
                      "end": 119,
                      "object": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 117,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 119,
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
                      "start": 122,
                      "end": 125,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 138,
              "end": 164,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 148,
                  "end": 158,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 148,
                    "end": 157,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 148,
                      "end": 151,
                      "object": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 151,
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
                      "start": 154,
                      "end": 157,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 168,
      "end": 287,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 196,
        "name": "positiveClassesTest",
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
          "start": 197,
          "end": 205,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 205,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 200,
              "end": 205,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 200,
                  "end": 201,
                  "typeName": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 204,
                  "end": 205,
                  "typeName": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "name": "B",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 207,
        "end": 287,
        "body": [
          {
            "type": "IfStatement",
            "start": 213,
            "end": 285,
            "test": {
              "type": "BinaryExpression",
              "start": 217,
              "end": 225,
              "left": {
                "type": "Literal",
                "start": 217,
                "end": 220,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 227,
              "end": 253,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 237,
                  "end": 247,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 237,
                    "end": 246,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 237,
                      "end": 240,
                      "object": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 238,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 239,
                        "end": 240,
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
                      "start": 243,
                      "end": 246,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 259,
              "end": 285,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 269,
                  "end": 279,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 269,
                    "end": 278,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 269,
                      "end": 272,
                      "object": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 270,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 272,
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
                      "start": 275,
                      "end": 278,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 289,
      "end": 328,
      "id": {
        "type": "Identifier",
        "start": 295,
        "end": 312,
        "name": "AWithOptionalProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 313,
        "end": 328,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 315,
            "end": 326,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 315,
              "end": 316,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
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
      "start": 329,
      "end": 368,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 352,
        "name": "BWithOptionalProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 353,
        "end": 368,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 355,
            "end": 366,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 355,
              "end": 356,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 357,
              "end": 365,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 359,
                "end": 365
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
      "type": "FunctionDeclaration",
      "start": 370,
      "end": 543,
      "id": {
        "type": "Identifier",
        "start": 379,
        "end": 420,
        "name": "positiveTestClassesWithOptionalProperties",
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
          "start": 421,
          "end": 461,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 422,
            "end": 461,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 424,
              "end": 461,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 424,
                  "end": 441,
                  "typeName": {
                    "type": "Identifier",
                    "start": 424,
                    "end": 441,
                    "name": "AWithOptionalProp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 444,
                  "end": 461,
                  "typeName": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 461,
                    "name": "BWithOptionalProp",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 463,
        "end": 543,
        "body": [
          {
            "type": "IfStatement",
            "start": 469,
            "end": 541,
            "test": {
              "type": "BinaryExpression",
              "start": 473,
              "end": 481,
              "left": {
                "type": "Literal",
                "start": 473,
                "end": 476,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 480,
                "end": 481,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 483,
              "end": 509,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 493,
                  "end": 503,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 493,
                    "end": 502,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 493,
                      "end": 496,
                      "object": {
                        "type": "Identifier",
                        "start": 493,
                        "end": 494,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 495,
                        "end": 496,
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
                      "start": 499,
                      "end": 502,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 515,
              "end": 541,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 525,
                  "end": 535,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 525,
                    "end": 534,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 525,
                      "end": 528,
                      "object": {
                        "type": "Identifier",
                        "start": 525,
                        "end": 526,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 527,
                        "end": 528,
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
                      "start": 531,
                      "end": 534,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 545,
      "end": 597,
      "id": {
        "type": "Identifier",
        "start": 551,
        "end": 562,
        "name": "AWithMethod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 563,
        "end": 597,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 569,
            "end": 595,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 569,
              "end": 570,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 570,
              "end": 595,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 581,
                "end": 595,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 583,
                    "end": 593,
                    "argument": {
                      "type": "Literal",
                      "start": 590,
                      "end": 592,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 572,
                "end": 580,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 574,
                  "end": 580
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 599,
      "end": 651,
      "id": {
        "type": "Identifier",
        "start": 605,
        "end": 616,
        "name": "BWithMethod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 617,
        "end": 651,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 623,
            "end": 649,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 623,
              "end": 624,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 624,
              "end": 649,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 635,
                "end": 649,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 637,
                    "end": 647,
                    "argument": {
                      "type": "Literal",
                      "start": 644,
                      "end": 646,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 626,
                "end": 634,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 628,
                  "end": 634
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "type": "FunctionDeclaration",
      "start": 653,
      "end": 795,
      "id": {
        "type": "Identifier",
        "start": 662,
        "end": 692,
        "name": "negativeTestClassesWithMembers",
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
          "start": 693,
          "end": 721,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 694,
            "end": 721,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 696,
              "end": 721,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 696,
                  "end": 707,
                  "typeName": {
                    "type": "Identifier",
                    "start": 696,
                    "end": 707,
                    "name": "AWithMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 710,
                  "end": 721,
                  "typeName": {
                    "type": "Identifier",
                    "start": 710,
                    "end": 721,
                    "name": "BWithMethod",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 723,
        "end": 795,
        "body": [
          {
            "type": "IfStatement",
            "start": 729,
            "end": 793,
            "test": {
              "type": "BinaryExpression",
              "start": 733,
              "end": 741,
              "left": {
                "type": "Literal",
                "start": 733,
                "end": 736,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 740,
                "end": 741,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 743,
              "end": 780,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 753,
                  "end": 759,
                  "expression": {
                    "type": "CallExpression",
                    "start": 753,
                    "end": 758,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 753,
                      "end": 756,
                      "object": {
                        "type": "Identifier",
                        "start": 753,
                        "end": 754,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 755,
                        "end": 756,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 768,
                  "end": 774,
                  "expression": {
                    "type": "CallExpression",
                    "start": 768,
                    "end": 773,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 768,
                      "end": 771,
                      "object": {
                        "type": "Identifier",
                        "start": 768,
                        "end": 769,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 770,
                        "end": 771,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 786,
              "end": 793,
              "body": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 797,
      "end": 988,
      "id": {
        "type": "Identifier",
        "start": 806,
        "end": 855,
        "name": "negativeTestClassesWithMemberMissingInBothClasses",
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
          "start": 856,
          "end": 884,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 857,
            "end": 884,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 859,
              "end": 884,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 859,
                  "end": 870,
                  "typeName": {
                    "type": "Identifier",
                    "start": 859,
                    "end": 870,
                    "name": "AWithMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 873,
                  "end": 884,
                  "typeName": {
                    "type": "Identifier",
                    "start": 873,
                    "end": 884,
                    "name": "BWithMethod",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 886,
        "end": 988,
        "body": [
          {
            "type": "IfStatement",
            "start": 892,
            "end": 986,
            "test": {
              "type": "BinaryExpression",
              "start": 896,
              "end": 904,
              "left": {
                "type": "Literal",
                "start": 896,
                "end": 899,
                "value": "c",
                "raw": "\"c\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 903,
                "end": 904,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 906,
              "end": 943,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 916,
                  "end": 922,
                  "expression": {
                    "type": "CallExpression",
                    "start": 916,
                    "end": 921,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 916,
                      "end": 919,
                      "object": {
                        "type": "Identifier",
                        "start": 916,
                        "end": 917,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 918,
                        "end": 919,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 931,
                  "end": 937,
                  "expression": {
                    "type": "CallExpression",
                    "start": 931,
                    "end": 936,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 931,
                      "end": 934,
                      "object": {
                        "type": "Identifier",
                        "start": 931,
                        "end": 932,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 933,
                        "end": 934,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 949,
              "end": 986,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 959,
                  "end": 965,
                  "expression": {
                    "type": "CallExpression",
                    "start": 959,
                    "end": 964,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 959,
                      "end": 962,
                      "object": {
                        "type": "Identifier",
                        "start": 959,
                        "end": 960,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 961,
                        "end": 962,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 974,
                  "end": 980,
                  "expression": {
                    "type": "CallExpression",
                    "start": 974,
                    "end": 979,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 974,
                      "end": 977,
                      "object": {
                        "type": "Identifier",
                        "start": 974,
                        "end": 975,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 976,
                        "end": 977,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 990,
      "end": 1012,
      "id": {
        "type": "Identifier",
        "start": 996,
        "end": 997,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 998,
        "end": 1012,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1000,
            "end": 1010,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1000,
              "end": 1001,
              "name": "a",
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
              "start": 1001,
              "end": 1009,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1003,
                "end": 1009
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
      "start": 1013,
      "end": 1035,
      "id": {
        "type": "Identifier",
        "start": 1019,
        "end": 1020,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1021,
        "end": 1035,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1023,
            "end": 1033,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1023,
              "end": 1024,
              "name": "a",
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
              "start": 1024,
              "end": 1032,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1026,
                "end": 1032
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
      "type": "FunctionDeclaration",
      "start": 1037,
      "end": 1172,
      "id": {
        "type": "Identifier",
        "start": 1046,
        "end": 1073,
        "name": "negativeMultipleClassesTest",
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
          "start": 1074,
          "end": 1090,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1075,
            "end": 1090,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1077,
              "end": 1090,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1077,
                  "end": 1078,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1077,
                    "end": 1078,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1081,
                  "end": 1082,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1081,
                    "end": 1082,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1085,
                  "end": 1086,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1085,
                    "end": 1086,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1089,
                  "end": 1090,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1089,
                    "end": 1090,
                    "name": "D",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1092,
        "end": 1172,
        "body": [
          {
            "type": "IfStatement",
            "start": 1098,
            "end": 1170,
            "test": {
              "type": "BinaryExpression",
              "start": 1102,
              "end": 1110,
              "left": {
                "type": "Literal",
                "start": 1102,
                "end": 1105,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 1109,
                "end": 1110,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1112,
              "end": 1138,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1122,
                  "end": 1132,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1122,
                    "end": 1131,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 1122,
                      "end": 1125,
                      "object": {
                        "type": "Identifier",
                        "start": 1122,
                        "end": 1123,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1124,
                        "end": 1125,
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
                      "start": 1128,
                      "end": 1131,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1144,
              "end": 1170,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1154,
                  "end": 1164,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1154,
                    "end": 1163,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 1154,
                      "end": 1157,
                      "object": {
                        "type": "Identifier",
                        "start": 1154,
                        "end": 1155,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1156,
                        "end": 1157,
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
                      "start": 1160,
                      "end": 1163,
                      "value": "1",
                      "raw": "\"1\""
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1174,
      "end": 1214,
      "id": {
        "type": "Identifier",
        "start": 1180,
        "end": 1198,
        "name": "ClassWithUnionProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1199,
        "end": 1214,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1201,
            "end": 1212,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1201,
              "end": 1205,
              "name": "prop",
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
              "start": 1205,
              "end": 1212,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1207,
                "end": 1212,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1207,
                    "end": 1208,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1207,
                      "end": 1208,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1211,
                    "end": 1212,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1211,
                      "end": 1212,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
      "type": "FunctionDeclaration",
      "start": 1216,
      "end": 1380,
      "id": {
        "type": "Identifier",
        "start": 1225,
        "end": 1241,
        "name": "negativePropTest",
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
          "start": 1242,
          "end": 1263,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1243,
            "end": 1263,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1245,
              "end": 1263,
              "typeName": {
                "type": "Identifier",
                "start": 1245,
                "end": 1263,
                "name": "ClassWithUnionProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1265,
        "end": 1380,
        "body": [
          {
            "type": "IfStatement",
            "start": 1271,
            "end": 1378,
            "test": {
              "type": "BinaryExpression",
              "start": 1275,
              "end": 1288,
              "left": {
                "type": "Literal",
                "start": 1275,
                "end": 1278,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "MemberExpression",
                "start": 1282,
                "end": 1288,
                "object": {
                  "type": "Identifier",
                  "start": 1282,
                  "end": 1283,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1284,
                  "end": 1288,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1290,
              "end": 1331,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1300,
                  "end": 1325,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1304,
                      "end": 1324,
                      "id": {
                        "type": "Identifier",
                        "start": 1304,
                        "end": 1313,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1305,
                          "end": 1313,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1307,
                            "end": 1313
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1316,
                        "end": 1324,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1316,
                          "end": 1322,
                          "object": {
                            "type": "Identifier",
                            "start": 1316,
                            "end": 1317,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1318,
                            "end": 1322,
                            "name": "prop",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1323,
                          "end": 1324,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1337,
              "end": 1378,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1347,
                  "end": 1372,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1351,
                      "end": 1371,
                      "id": {
                        "type": "Identifier",
                        "start": 1351,
                        "end": 1360,
                        "name": "z",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1352,
                          "end": 1360,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1354,
                            "end": 1360
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1363,
                        "end": 1371,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1363,
                          "end": 1369,
                          "object": {
                            "type": "Identifier",
                            "start": 1363,
                            "end": 1364,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1365,
                            "end": 1369,
                            "name": "prop",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1370,
                          "end": 1371,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1382,
      "end": 1598,
      "id": {
        "type": "Identifier",
        "start": 1388,
        "end": 1405,
        "name": "NegativeClassTest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1406,
        "end": 1598,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1412,
            "end": 1434,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1422,
              "end": 1426,
              "name": "prop",
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
              "start": 1426,
              "end": 1433,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1428,
                "end": 1433,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1428,
                    "end": 1429,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1428,
                      "end": 1429,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1432,
                    "end": 1433,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1432,
                      "end": 1433,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 1439,
            "end": 1596,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1439,
              "end": 1445,
              "name": "inThis",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1445,
              "end": 1596,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1448,
                "end": 1596,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1458,
                    "end": 1590,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1462,
                      "end": 1478,
                      "left": {
                        "type": "Literal",
                        "start": 1462,
                        "end": 1465,
                        "value": "a",
                        "raw": "\"a\""
                      },
                      "operator": "in",
                      "right": {
                        "type": "MemberExpression",
                        "start": 1469,
                        "end": 1478,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1469,
                          "end": 1473
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1474,
                          "end": 1478,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1480,
                      "end": 1532,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 1494,
                          "end": 1522,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1498,
                              "end": 1521,
                              "id": {
                                "type": "Identifier",
                                "start": 1498,
                                "end": 1507,
                                "name": "z",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1499,
                                  "end": 1507,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1501,
                                    "end": 1507
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 1510,
                                "end": 1521,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1510,
                                  "end": 1519,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1510,
                                    "end": 1514
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1515,
                                    "end": 1519,
                                    "name": "prop",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1520,
                                  "end": 1521,
                                  "name": "b",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 1538,
                      "end": 1590,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 1552,
                          "end": 1580,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1556,
                              "end": 1579,
                              "id": {
                                "type": "Identifier",
                                "start": 1556,
                                "end": 1565,
                                "name": "y",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1557,
                                  "end": 1565,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1559,
                                    "end": 1565
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 1568,
                                "end": 1579,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1568,
                                  "end": 1577,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1568,
                                    "end": 1572
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1573,
                                    "end": 1577,
                                    "name": "prop",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1578,
                                  "end": 1579,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 1600,
      "end": 1752,
      "id": {
        "type": "Identifier",
        "start": 1606,
        "end": 1630,
        "name": "UnreachableCodeDetection",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1631,
        "end": 1752,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1637,
            "end": 1647,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1637,
              "end": 1638,
              "name": "a",
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
              "start": 1638,
              "end": 1646,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1640,
                "end": 1646
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1652,
            "end": 1750,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1652,
              "end": 1658,
              "name": "inThis",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1658,
              "end": 1750,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1661,
                "end": 1750,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1671,
                    "end": 1744,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1675,
                      "end": 1686,
                      "left": {
                        "type": "Literal",
                        "start": 1675,
                        "end": 1678,
                        "value": "a",
                        "raw": "\"a\""
                      },
                      "operator": "in",
                      "right": {
                        "type": "ThisExpression",
                        "start": 1682,
                        "end": 1686
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1688,
                      "end": 1699,
                      "body": []
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 1705,
                      "end": 1744,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 1719,
                          "end": 1734,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1723,
                              "end": 1733,
                              "id": {
                                "type": "Identifier",
                                "start": 1723,
                                "end": 1724,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 1727,
                                "end": 1733,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1727,
                                  "end": 1731
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1732,
                                  "end": 1733,
                                  "name": "a",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "type": "FunctionDeclaration",
      "start": 1754,
      "end": 1919,
      "id": {
        "type": "Identifier",
        "start": 1763,
        "end": 1787,
        "name": "positiveIntersectionTest",
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
          "start": 1788,
          "end": 1820,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1789,
            "end": 1820,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 1791,
              "end": 1820,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 1791,
                  "end": 1804,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1793,
                      "end": 1802,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1793,
                        "end": 1794,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1794,
                        "end": 1802,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1796,
                          "end": 1802
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 1807,
                  "end": 1820,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1809,
                      "end": 1818,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1809,
                        "end": 1810,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1810,
                        "end": 1818,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1812,
                          "end": 1818
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1822,
        "end": 1919,
        "body": [
          {
            "type": "IfStatement",
            "start": 1828,
            "end": 1917,
            "test": {
              "type": "BinaryExpression",
              "start": 1832,
              "end": 1840,
              "left": {
                "type": "Literal",
                "start": 1832,
                "end": 1835,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 1839,
                "end": 1840,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1842,
              "end": 1878,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1852,
                  "end": 1872,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1856,
                      "end": 1871,
                      "id": {
                        "type": "Identifier",
                        "start": 1856,
                        "end": 1865,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1857,
                          "end": 1865,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1859,
                            "end": 1865
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1868,
                        "end": 1871,
                        "object": {
                          "type": "Identifier",
                          "start": 1868,
                          "end": 1869,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1870,
                          "end": 1871,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1884,
              "end": 1917,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1894,
                  "end": 1911,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1898,
                      "end": 1910,
                      "id": {
                        "type": "Identifier",
                        "start": 1898,
                        "end": 1906,
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1899,
                          "end": 1906,
                          "typeAnnotation": {
                            "type": "TSNeverKeyword",
                            "start": 1901,
                            "end": 1906
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1909,
                        "end": 1910,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1942,
      "end": 1969,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1956,
          "end": 1968,
          "id": {
            "type": "Identifier",
            "start": 1956,
            "end": 1968,
            "name": "error",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1961,
              "end": 1968,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1963,
                "end": 1968,
                "typeName": {
                  "type": "Identifier",
                  "start": 1963,
                  "end": 1968,
                  "name": "Error",
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 1970,
      "end": 2048,
      "test": {
        "type": "BinaryExpression",
        "start": 1974,
        "end": 1990,
        "left": {
          "type": "Literal",
          "start": 1974,
          "end": 1981,
          "value": "extra",
          "raw": "'extra'"
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "start": 1985,
          "end": 1990,
          "name": "error",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 1992,
        "end": 2020,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1998,
            "end": 2003,
            "expression": {
              "type": "Identifier",
              "start": 1998,
              "end": 2003,
              "name": "error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 2026,
        "end": 2048,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2032,
            "end": 2037,
            "expression": {
              "type": "Identifier",
              "start": 2032,
              "end": 2037,
              "name": "error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2050,
      "end": 2266,
      "id": {
        "type": "Identifier",
        "start": 2059,
        "end": 2073,
        "name": "narrowsToNever",
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
          "start": 2074,
          "end": 2106,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2075,
            "end": 2106,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2077,
              "end": 2106,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 2077,
                  "end": 2090,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 2079,
                      "end": 2088,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2079,
                        "end": 2080,
                        "name": "l",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2080,
                        "end": 2088,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2082,
                          "end": 2088
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 2093,
                  "end": 2106,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 2095,
                      "end": 2104,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2095,
                        "end": 2096,
                        "name": "r",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2096,
                        "end": 2104,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2098,
                          "end": 2104
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2108,
        "end": 2266,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2114,
            "end": 2128,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2118,
                "end": 2127,
                "id": {
                  "type": "Identifier",
                  "start": 2118,
                  "end": 2127,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2119,
                    "end": 2127,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2121,
                      "end": 2127
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 2133,
            "end": 2250,
            "test": {
              "type": "BinaryExpression",
              "start": 2137,
              "end": 2145,
              "left": {
                "type": "Literal",
                "start": 2137,
                "end": 2140,
                "value": "l",
                "raw": "\"l\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 2144,
                "end": 2145,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2147,
              "end": 2171,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2157,
                  "end": 2165,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2157,
                    "end": 2164,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2157,
                      "end": 2158,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 2161,
                      "end": 2164,
                      "object": {
                        "type": "Identifier",
                        "start": 2161,
                        "end": 2162,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2163,
                        "end": 2164,
                        "name": "l",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 2181,
              "end": 2250,
              "test": {
                "type": "BinaryExpression",
                "start": 2185,
                "end": 2193,
                "left": {
                  "type": "Literal",
                  "start": 2185,
                  "end": 2188,
                  "value": "r",
                  "raw": "\"r\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 2192,
                  "end": 2193,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 2195,
                "end": 2219,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2205,
                    "end": 2213,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2205,
                      "end": 2212,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2205,
                        "end": 2206,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 2209,
                        "end": 2212,
                        "object": {
                          "type": "Identifier",
                          "start": 2209,
                          "end": 2210,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2211,
                          "end": 2212,
                          "name": "r",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 2229,
                "end": 2250,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2239,
                    "end": 2244,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2239,
                      "end": 2244,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2239,
                        "end": 2240,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2243,
                        "end": 2244,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 2255,
            "end": 2264,
            "argument": {
              "type": "Identifier",
              "start": 2262,
              "end": 2263,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2268,
      "end": 2318,
      "id": {
        "type": "Identifier",
        "start": 2273,
        "end": 2277,
        "name": "AOrB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2280,
        "end": 2317,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 2280,
            "end": 2297,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2282,
                "end": 2295,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2282,
                  "end": 2287,
                  "name": "aProp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2287,
                  "end": 2295,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2289,
                    "end": 2295
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 2300,
            "end": 2317,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2302,
                "end": 2315,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2302,
                  "end": 2307,
                  "name": "bProp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2307,
                  "end": 2315,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2309,
                    "end": 2315
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2319,
      "end": 2366,
      "id": {
        "type": "Identifier",
        "start": 2336,
        "end": 2342,
        "name": "isAOrB",
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
          "start": 2343,
          "end": 2353,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2344,
            "end": 2353,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 2346,
              "end": 2353
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2354,
        "end": 2365,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2356,
          "end": 2365,
          "parameterName": {
            "type": "Identifier",
            "start": 2356,
            "end": 2357,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2361,
            "end": 2365,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2361,
              "end": 2365,
              "typeName": {
                "type": "Identifier",
                "start": 2361,
                "end": 2365,
                "name": "AOrB",
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
      "start": 2368,
      "end": 2391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2380,
          "end": 2390,
          "id": {
            "type": "Identifier",
            "start": 2380,
            "end": 2390,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2381,
              "end": 2390,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 2383,
                "end": 2390
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
      "type": "IfStatement",
      "start": 2392,
      "end": 2638,
      "test": {
        "type": "CallExpression",
        "start": 2396,
        "end": 2405,
        "callee": {
          "type": "Identifier",
          "start": 2396,
          "end": 2402,
          "name": "isAOrB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 2403,
            "end": 2404,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 2407,
        "end": 2638,
        "body": [
          {
            "type": "IfStatement",
            "start": 2413,
            "end": 2636,
            "test": {
              "type": "BinaryExpression",
              "start": 2417,
              "end": 2429,
              "left": {
                "type": "Literal",
                "start": 2417,
                "end": 2424,
                "value": "aProp",
                "raw": "\"aProp\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 2428,
                "end": 2429,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2431,
              "end": 2455,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2441,
                  "end": 2449,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2441,
                    "end": 2448,
                    "object": {
                      "type": "Identifier",
                      "start": 2441,
                      "end": 2442,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2443,
                      "end": 2448,
                      "name": "aProp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 2465,
              "end": 2636,
              "test": {
                "type": "BinaryExpression",
                "start": 2469,
                "end": 2481,
                "left": {
                  "type": "Literal",
                  "start": 2469,
                  "end": 2476,
                  "value": "bProp",
                  "raw": "\"bProp\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 2480,
                  "end": 2481,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 2483,
                "end": 2507,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2493,
                    "end": 2501,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 2493,
                      "end": 2500,
                      "object": {
                        "type": "Identifier",
                        "start": 2493,
                        "end": 2494,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2495,
                        "end": 2500,
                        "name": "bProp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": {
                "type": "IfStatement",
                "start": 2578,
                "end": 2636,
                "test": {
                  "type": "BinaryExpression",
                  "start": 2582,
                  "end": 2594,
                  "left": {
                    "type": "Literal",
                    "start": 2582,
                    "end": 2589,
                    "value": "cProp",
                    "raw": "\"cProp\""
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 2593,
                    "end": 2594,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "consequent": {
                  "type": "BlockStatement",
                  "start": 2596,
                  "end": 2636,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 2606,
                      "end": 2630,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 2612,
                          "end": 2629,
                          "id": {
                            "type": "Identifier",
                            "start": 2612,
                            "end": 2625,
                            "name": "_never",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2618,
                              "end": 2625,
                              "typeAnnotation": {
                                "type": "TSNeverKeyword",
                                "start": 2620,
                                "end": 2625
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 2628,
                            "end": 2629,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "definite": false
                        }
                      ],
                      "kind": "const",
                      "declare": false
                    }
                  ]
                },
                "alternate": null
              }
            }
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2640,
      "end": 2790,
      "id": {
        "type": "Identifier",
        "start": 2649,
        "end": 2673,
        "name": "negativeIntersectionTest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2676,
        "end": 2790,
        "body": [
          {
            "type": "IfStatement",
            "start": 2682,
            "end": 2788,
            "test": {
              "type": "BinaryExpression",
              "start": 2686,
              "end": 2710,
              "left": {
                "type": "Literal",
                "start": 2686,
                "end": 2700,
                "value": "ontouchstart",
                "raw": "\"ontouchstart\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 2704,
                "end": 2710,
                "name": "window",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2712,
              "end": 2747,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2722,
                  "end": 2741,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2722,
                    "end": 2741,
                    "object": {
                      "type": "Identifier",
                      "start": 2722,
                      "end": 2728,
                      "name": "window",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2729,
                      "end": 2741,
                      "name": "ontouchstart",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 2753,
              "end": 2788,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2763,
                  "end": 2782,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2763,
                    "end": 2782,
                    "object": {
                      "type": "Identifier",
                      "start": 2763,
                      "end": 2769,
                      "name": "window",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2770,
                      "end": 2782,
                      "name": "ontouchstart",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2792,
      "end": 3090,
      "id": {
        "type": "Identifier",
        "start": 2801,
        "end": 2803,
        "name": "f1",
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
          "start": 2804,
          "end": 2814,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2805,
            "end": 2814,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 2807,
              "end": 2814
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2816,
        "end": 3090,
        "body": [
          {
            "type": "IfStatement",
            "start": 2822,
            "end": 2856,
            "test": {
              "type": "BinaryExpression",
              "start": 2826,
              "end": 2834,
              "left": {
                "type": "Literal",
                "start": 2826,
                "end": 2829,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 2833,
                "end": 2834,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2836,
              "end": 2856,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2846,
                  "end": 2850,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2846,
                    "end": 2849,
                    "object": {
                      "type": "Identifier",
                      "start": 2846,
                      "end": 2847,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2848,
                      "end": 2849,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2861,
            "end": 2900,
            "test": {
              "type": "LogicalExpression",
              "start": 2865,
              "end": 2878,
              "left": {
                "type": "Identifier",
                "start": 2865,
                "end": 2866,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 2870,
                "end": 2878,
                "left": {
                  "type": "Literal",
                  "start": 2870,
                  "end": 2873,
                  "value": "a",
                  "raw": "\"a\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 2877,
                  "end": 2878,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2880,
              "end": 2900,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2890,
                  "end": 2894,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2890,
                    "end": 2893,
                    "object": {
                      "type": "Identifier",
                      "start": 2890,
                      "end": 2891,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2892,
                      "end": 2893,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2905,
            "end": 2969,
            "test": {
              "type": "LogicalExpression",
              "start": 2909,
              "end": 2947,
              "left": {
                "type": "LogicalExpression",
                "start": 2909,
                "end": 2935,
                "left": {
                  "type": "Identifier",
                  "start": 2909,
                  "end": 2910,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 2914,
                  "end": 2935,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 2914,
                    "end": 2922,
                    "operator": "typeof",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 2921,
                      "end": 2922,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 2927,
                    "end": 2935,
                    "value": "object",
                    "raw": "\"object\""
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 2939,
                "end": 2947,
                "left": {
                  "type": "Literal",
                  "start": 2939,
                  "end": 2942,
                  "value": "a",
                  "raw": "\"a\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 2946,
                  "end": 2947,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2949,
              "end": 2969,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2959,
                  "end": 2963,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2959,
                    "end": 2962,
                    "object": {
                      "type": "Identifier",
                      "start": 2959,
                      "end": 2960,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2961,
                      "end": 2962,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2974,
            "end": 3088,
            "test": {
              "type": "LogicalExpression",
              "start": 2978,
              "end": 3040,
              "left": {
                "type": "LogicalExpression",
                "start": 2978,
                "end": 3028,
                "left": {
                  "type": "LogicalExpression",
                  "start": 2978,
                  "end": 3016,
                  "left": {
                    "type": "LogicalExpression",
                    "start": 2978,
                    "end": 3004,
                    "left": {
                      "type": "Identifier",
                      "start": 2978,
                      "end": 2979,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "BinaryExpression",
                      "start": 2983,
                      "end": 3004,
                      "left": {
                        "type": "UnaryExpression",
                        "start": 2983,
                        "end": 2991,
                        "operator": "typeof",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "start": 2990,
                          "end": 2991,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 2996,
                        "end": 3004,
                        "value": "object",
                        "raw": "\"object\""
                      }
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "start": 3008,
                    "end": 3016,
                    "left": {
                      "type": "Literal",
                      "start": 3008,
                      "end": 3011,
                      "value": "a",
                      "raw": "\"a\""
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "start": 3015,
                      "end": 3016,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 3020,
                  "end": 3028,
                  "left": {
                    "type": "Literal",
                    "start": 3020,
                    "end": 3023,
                    "value": "b",
                    "raw": "\"b\""
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 3027,
                    "end": 3028,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 3032,
                "end": 3040,
                "left": {
                  "type": "Literal",
                  "start": 3032,
                  "end": 3035,
                  "value": "c",
                  "raw": "\"c\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 3039,
                  "end": 3040,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3042,
              "end": 3088,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3052,
                  "end": 3056,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3052,
                    "end": 3055,
                    "object": {
                      "type": "Identifier",
                      "start": 3052,
                      "end": 3053,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3054,
                      "end": 3055,
                      "name": "a",
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
                  "start": 3065,
                  "end": 3069,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3065,
                    "end": 3068,
                    "object": {
                      "type": "Identifier",
                      "start": 3065,
                      "end": 3066,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3067,
                      "end": 3068,
                      "name": "b",
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
                  "start": 3078,
                  "end": 3082,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3078,
                    "end": 3081,
                    "object": {
                      "type": "Identifier",
                      "start": 3078,
                      "end": 3079,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3080,
                      "end": 3081,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3092,
      "end": 3246,
      "id": {
        "type": "Identifier",
        "start": 3101,
        "end": 3103,
        "name": "f2",
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
          "start": 3104,
          "end": 3113,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3105,
            "end": 3113,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 3107,
              "end": 3113
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3115,
        "end": 3246,
        "body": [
          {
            "type": "IfStatement",
            "start": 3121,
            "end": 3155,
            "test": {
              "type": "BinaryExpression",
              "start": 3125,
              "end": 3133,
              "left": {
                "type": "Literal",
                "start": 3125,
                "end": 3128,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 3132,
                "end": 3133,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3135,
              "end": 3155,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3145,
                  "end": 3149,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3145,
                    "end": 3148,
                    "object": {
                      "type": "Identifier",
                      "start": 3145,
                      "end": 3146,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3147,
                      "end": 3148,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3160,
            "end": 3244,
            "test": {
              "type": "LogicalExpression",
              "start": 3164,
              "end": 3196,
              "left": {
                "type": "LogicalExpression",
                "start": 3164,
                "end": 3184,
                "left": {
                  "type": "BinaryExpression",
                  "start": 3164,
                  "end": 3172,
                  "left": {
                    "type": "Literal",
                    "start": 3164,
                    "end": 3167,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 3171,
                    "end": 3172,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 3176,
                  "end": 3184,
                  "left": {
                    "type": "Literal",
                    "start": 3176,
                    "end": 3179,
                    "value": "b",
                    "raw": "\"b\""
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 3183,
                    "end": 3184,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 3188,
                "end": 3196,
                "left": {
                  "type": "Literal",
                  "start": 3188,
                  "end": 3191,
                  "value": "c",
                  "raw": "\"c\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 3195,
                  "end": 3196,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3198,
              "end": 3244,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3208,
                  "end": 3212,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3208,
                    "end": 3211,
                    "object": {
                      "type": "Identifier",
                      "start": 3208,
                      "end": 3209,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3210,
                      "end": 3211,
                      "name": "a",
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
                  "start": 3221,
                  "end": 3225,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3221,
                    "end": 3224,
                    "object": {
                      "type": "Identifier",
                      "start": 3221,
                      "end": 3222,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3223,
                      "end": 3224,
                      "name": "b",
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
                  "start": 3234,
                  "end": 3238,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3234,
                    "end": 3237,
                    "object": {
                      "type": "Identifier",
                      "start": 3234,
                      "end": 3235,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3236,
                      "end": 3237,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3248,
      "end": 3543,
      "id": {
        "type": "Identifier",
        "start": 3257,
        "end": 3259,
        "name": "f3",
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
          "start": 3263,
          "end": 3267,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3264,
            "end": 3267,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3266,
              "end": 3267,
              "typeName": {
                "type": "Identifier",
                "start": 3266,
                "end": 3267,
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3269,
        "end": 3543,
        "body": [
          {
            "type": "IfStatement",
            "start": 3275,
            "end": 3309,
            "test": {
              "type": "BinaryExpression",
              "start": 3279,
              "end": 3287,
              "left": {
                "type": "Literal",
                "start": 3279,
                "end": 3282,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 3286,
                "end": 3287,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3289,
              "end": 3309,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3299,
                  "end": 3303,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3299,
                    "end": 3302,
                    "object": {
                      "type": "Identifier",
                      "start": 3299,
                      "end": 3300,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3301,
                      "end": 3302,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3314,
            "end": 3353,
            "test": {
              "type": "LogicalExpression",
              "start": 3318,
              "end": 3331,
              "left": {
                "type": "Identifier",
                "start": 3318,
                "end": 3319,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 3323,
                "end": 3331,
                "left": {
                  "type": "Literal",
                  "start": 3323,
                  "end": 3326,
                  "value": "a",
                  "raw": "\"a\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 3330,
                  "end": 3331,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3333,
              "end": 3353,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3343,
                  "end": 3347,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3343,
                    "end": 3346,
                    "object": {
                      "type": "Identifier",
                      "start": 3343,
                      "end": 3344,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3345,
                      "end": 3346,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3358,
            "end": 3422,
            "test": {
              "type": "LogicalExpression",
              "start": 3362,
              "end": 3400,
              "left": {
                "type": "LogicalExpression",
                "start": 3362,
                "end": 3388,
                "left": {
                  "type": "Identifier",
                  "start": 3362,
                  "end": 3363,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 3367,
                  "end": 3388,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 3367,
                    "end": 3375,
                    "operator": "typeof",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 3374,
                      "end": 3375,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 3380,
                    "end": 3388,
                    "value": "object",
                    "raw": "\"object\""
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 3392,
                "end": 3400,
                "left": {
                  "type": "Literal",
                  "start": 3392,
                  "end": 3395,
                  "value": "a",
                  "raw": "\"a\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 3399,
                  "end": 3400,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3402,
              "end": 3422,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3412,
                  "end": 3416,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3412,
                    "end": 3415,
                    "object": {
                      "type": "Identifier",
                      "start": 3412,
                      "end": 3413,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3414,
                      "end": 3415,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3427,
            "end": 3541,
            "test": {
              "type": "LogicalExpression",
              "start": 3431,
              "end": 3493,
              "left": {
                "type": "LogicalExpression",
                "start": 3431,
                "end": 3481,
                "left": {
                  "type": "LogicalExpression",
                  "start": 3431,
                  "end": 3469,
                  "left": {
                    "type": "LogicalExpression",
                    "start": 3431,
                    "end": 3457,
                    "left": {
                      "type": "Identifier",
                      "start": 3431,
                      "end": 3432,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "BinaryExpression",
                      "start": 3436,
                      "end": 3457,
                      "left": {
                        "type": "UnaryExpression",
                        "start": 3436,
                        "end": 3444,
                        "operator": "typeof",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "start": 3443,
                          "end": 3444,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 3449,
                        "end": 3457,
                        "value": "object",
                        "raw": "\"object\""
                      }
                    }
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "start": 3461,
                    "end": 3469,
                    "left": {
                      "type": "Literal",
                      "start": 3461,
                      "end": 3464,
                      "value": "a",
                      "raw": "\"a\""
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "start": 3468,
                      "end": 3469,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 3473,
                  "end": 3481,
                  "left": {
                    "type": "Literal",
                    "start": 3473,
                    "end": 3476,
                    "value": "b",
                    "raw": "\"b\""
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 3480,
                    "end": 3481,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 3485,
                "end": 3493,
                "left": {
                  "type": "Literal",
                  "start": 3485,
                  "end": 3488,
                  "value": "c",
                  "raw": "\"c\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 3492,
                  "end": 3493,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3495,
              "end": 3541,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3505,
                  "end": 3509,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3505,
                    "end": 3508,
                    "object": {
                      "type": "Identifier",
                      "start": 3505,
                      "end": 3506,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3507,
                      "end": 3508,
                      "name": "a",
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
                  "start": 3518,
                  "end": 3522,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3518,
                    "end": 3521,
                    "object": {
                      "type": "Identifier",
                      "start": 3518,
                      "end": 3519,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3520,
                      "end": 3521,
                      "name": "b",
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
                  "start": 3531,
                  "end": 3535,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3531,
                    "end": 3534,
                    "object": {
                      "type": "Identifier",
                      "start": 3531,
                      "end": 3532,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3533,
                      "end": 3534,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3259,
        "end": 3262,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3260,
            "end": 3261,
            "name": {
              "type": "Identifier",
              "start": 3260,
              "end": 3261,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3545,
      "end": 3706,
      "id": {
        "type": "Identifier",
        "start": 3554,
        "end": 3556,
        "name": "f4",
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
          "start": 3557,
          "end": 3573,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3558,
            "end": 3573,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3560,
              "end": 3573,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3562,
                  "end": 3571,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3562,
                    "end": 3563,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3563,
                    "end": 3571,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3565,
                      "end": 3571
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3575,
        "end": 3706,
        "body": [
          {
            "type": "IfStatement",
            "start": 3581,
            "end": 3615,
            "test": {
              "type": "BinaryExpression",
              "start": 3585,
              "end": 3593,
              "left": {
                "type": "Literal",
                "start": 3585,
                "end": 3588,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 3592,
                "end": 3593,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3595,
              "end": 3615,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3605,
                  "end": 3609,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3605,
                    "end": 3608,
                    "object": {
                      "type": "Identifier",
                      "start": 3605,
                      "end": 3606,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3607,
                      "end": 3608,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3620,
            "end": 3704,
            "test": {
              "type": "LogicalExpression",
              "start": 3624,
              "end": 3656,
              "left": {
                "type": "LogicalExpression",
                "start": 3624,
                "end": 3644,
                "left": {
                  "type": "BinaryExpression",
                  "start": 3624,
                  "end": 3632,
                  "left": {
                    "type": "Literal",
                    "start": 3624,
                    "end": 3627,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 3631,
                    "end": 3632,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 3636,
                  "end": 3644,
                  "left": {
                    "type": "Literal",
                    "start": 3636,
                    "end": 3639,
                    "value": "b",
                    "raw": "\"b\""
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 3643,
                    "end": 3644,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 3648,
                "end": 3656,
                "left": {
                  "type": "Literal",
                  "start": 3648,
                  "end": 3651,
                  "value": "c",
                  "raw": "\"c\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 3655,
                  "end": 3656,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3658,
              "end": 3704,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3668,
                  "end": 3672,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3668,
                    "end": 3671,
                    "object": {
                      "type": "Identifier",
                      "start": 3668,
                      "end": 3669,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3670,
                      "end": 3671,
                      "name": "a",
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
                  "start": 3681,
                  "end": 3685,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3681,
                    "end": 3684,
                    "object": {
                      "type": "Identifier",
                      "start": 3681,
                      "end": 3682,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3683,
                      "end": 3684,
                      "name": "b",
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
                  "start": 3694,
                  "end": 3698,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3694,
                    "end": 3697,
                    "object": {
                      "type": "Identifier",
                      "start": 3694,
                      "end": 3695,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3696,
                      "end": 3697,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3708,
      "end": 3910,
      "id": {
        "type": "Identifier",
        "start": 3717,
        "end": 3719,
        "name": "f5",
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
          "start": 3720,
          "end": 3752,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3721,
            "end": 3752,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3723,
              "end": 3752,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 3723,
                  "end": 3736,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3725,
                      "end": 3734,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3725,
                        "end": 3726,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3726,
                        "end": 3734,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3728,
                          "end": 3734
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 3739,
                  "end": 3752,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3741,
                      "end": 3750,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3741,
                        "end": 3742,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3742,
                        "end": 3750,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3744,
                          "end": 3750
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3754,
        "end": 3910,
        "body": [
          {
            "type": "IfStatement",
            "start": 3760,
            "end": 3908,
            "test": {
              "type": "BinaryExpression",
              "start": 3764,
              "end": 3772,
              "left": {
                "type": "Literal",
                "start": 3764,
                "end": 3767,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 3771,
                "end": 3772,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3774,
              "end": 3810,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3784,
                  "end": 3786,
                  "expression": {
                    "type": "Identifier",
                    "start": 3784,
                    "end": 3785,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 3820,
              "end": 3908,
              "test": {
                "type": "BinaryExpression",
                "start": 3824,
                "end": 3832,
                "left": {
                  "type": "Literal",
                  "start": 3824,
                  "end": 3827,
                  "value": "b",
                  "raw": "\"b\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 3831,
                  "end": 3832,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 3834,
                "end": 3870,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3844,
                    "end": 3846,
                    "expression": {
                      "type": "Identifier",
                      "start": 3844,
                      "end": 3845,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 3880,
                "end": 3908,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3890,
                    "end": 3892,
                    "expression": {
                      "type": "Identifier",
                      "start": 3890,
                      "end": 3891,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3912,
      "end": 4145,
      "id": {
        "type": "Identifier",
        "start": 3921,
        "end": 3923,
        "name": "f6",
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
          "start": 3924,
          "end": 3956,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3925,
            "end": 3956,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3927,
              "end": 3956,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 3927,
                  "end": 3940,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3929,
                      "end": 3938,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3929,
                        "end": 3930,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3930,
                        "end": 3938,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3932,
                          "end": 3938
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 3943,
                  "end": 3956,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3945,
                      "end": 3954,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3945,
                        "end": 3946,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3946,
                        "end": 3954,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3948,
                          "end": 3954
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 3958,
        "end": 4145,
        "body": [
          {
            "type": "IfStatement",
            "start": 3964,
            "end": 4143,
            "test": {
              "type": "BinaryExpression",
              "start": 3968,
              "end": 3976,
              "left": {
                "type": "Literal",
                "start": 3968,
                "end": 3971,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 3975,
                "end": 3976,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3978,
              "end": 4014,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3988,
                  "end": 3990,
                  "expression": {
                    "type": "Identifier",
                    "start": 3988,
                    "end": 3989,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 4024,
              "end": 4143,
              "test": {
                "type": "BinaryExpression",
                "start": 4028,
                "end": 4036,
                "left": {
                  "type": "Literal",
                  "start": 4028,
                  "end": 4031,
                  "value": "a",
                  "raw": "\"a\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 4035,
                  "end": 4036,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 4038,
                "end": 4097,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4048,
                    "end": 4050,
                    "expression": {
                      "type": "Identifier",
                      "start": 4048,
                      "end": 4049,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 4107,
                "end": 4143,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4117,
                    "end": 4119,
                    "expression": {
                      "type": "Identifier",
                      "start": 4117,
                      "end": 4118,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4212,
      "end": 4440,
      "id": {
        "type": "Identifier",
        "start": 4221,
        "end": 4223,
        "name": "f7",
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
          "start": 4224,
          "end": 4251,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4225,
            "end": 4251,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 4227,
              "end": 4251,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 4229,
                  "end": 4239,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4229,
                    "end": 4230,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4230,
                    "end": 4238,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4232,
                      "end": 4238
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 4240,
                  "end": 4249,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4240,
                    "end": 4241,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4241,
                    "end": 4249,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4243,
                      "end": 4249
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
        {
          "type": "Identifier",
          "start": 4253,
          "end": 4285,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4254,
            "end": 4285,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 4256,
              "end": 4285,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 4256,
                  "end": 4269,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 4258,
                      "end": 4267,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4258,
                        "end": 4259,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4259,
                        "end": 4267,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4261,
                          "end": 4267
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 4272,
                  "end": 4285,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 4274,
                      "end": 4283,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4274,
                        "end": 4275,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4275,
                        "end": 4283,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4277,
                          "end": 4283
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 4287,
        "end": 4440,
        "body": [
          {
            "type": "IfStatement",
            "start": 4293,
            "end": 4363,
            "test": {
              "type": "BinaryExpression",
              "start": 4297,
              "end": 4305,
              "left": {
                "type": "Literal",
                "start": 4297,
                "end": 4300,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 4304,
                "end": 4305,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4307,
              "end": 4325,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4317,
                  "end": 4319,
                  "expression": {
                    "type": "Identifier",
                    "start": 4317,
                    "end": 4318,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 4335,
              "end": 4363,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4345,
                  "end": 4347,
                  "expression": {
                    "type": "Identifier",
                    "start": 4345,
                    "end": 4346,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 4368,
            "end": 4438,
            "test": {
              "type": "BinaryExpression",
              "start": 4372,
              "end": 4380,
              "left": {
                "type": "Literal",
                "start": 4372,
                "end": 4375,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 4379,
                "end": 4380,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4382,
              "end": 4400,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4392,
                  "end": 4394,
                  "expression": {
                    "type": "Identifier",
                    "start": 4392,
                    "end": 4393,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 4410,
              "end": 4438,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4420,
                  "end": 4422,
                  "expression": {
                    "type": "Identifier",
                    "start": 4420,
                    "end": 4421,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 4442,
      "end": 4463,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4448,
          "end": 4462,
          "id": {
            "type": "Identifier",
            "start": 4448,
            "end": 4451,
            "name": "sym",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4454,
            "end": 4462,
            "callee": {
              "type": "Identifier",
              "start": 4454,
              "end": 4460,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4465,
      "end": 4614,
      "id": {
        "type": "Identifier",
        "start": 4474,
        "end": 4476,
        "name": "f8",
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
          "start": 4477,
          "end": 4486,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4478,
            "end": 4486,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 4480,
              "end": 4486
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 4488,
        "end": 4614,
        "body": [
          {
            "type": "IfStatement",
            "start": 4494,
            "end": 4612,
            "test": {
              "type": "LogicalExpression",
              "start": 4498,
              "end": 4528,
              "left": {
                "type": "LogicalExpression",
                "start": 4498,
                "end": 4516,
                "left": {
                  "type": "BinaryExpression",
                  "start": 4498,
                  "end": 4506,
                  "left": {
                    "type": "Literal",
                    "start": 4498,
                    "end": 4501,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 4505,
                    "end": 4506,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 4510,
                  "end": 4516,
                  "left": {
                    "type": "Literal",
                    "start": 4510,
                    "end": 4511,
                    "value": 1,
                    "raw": "1"
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 4515,
                    "end": 4516,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 4520,
                "end": 4528,
                "left": {
                  "type": "Identifier",
                  "start": 4520,
                  "end": 4523,
                  "name": "sym",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 4527,
                  "end": 4528,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4530,
              "end": 4612,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4540,
                  "end": 4544,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4540,
                    "end": 4543,
                    "object": {
                      "type": "Identifier",
                      "start": 4540,
                      "end": 4541,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4542,
                      "end": 4543,
                      "name": "a",
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
                  "start": 4553,
                  "end": 4560,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4553,
                    "end": 4559,
                    "object": {
                      "type": "Identifier",
                      "start": 4553,
                      "end": 4554,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 4555,
                      "end": 4558,
                      "value": "a",
                      "raw": "\"a\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4569,
                  "end": 4574,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4569,
                    "end": 4573,
                    "object": {
                      "type": "Identifier",
                      "start": 4569,
                      "end": 4570,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 4571,
                      "end": 4572,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4583,
                  "end": 4590,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4583,
                    "end": 4589,
                    "object": {
                      "type": "Identifier",
                      "start": 4583,
                      "end": 4584,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 4585,
                      "end": 4588,
                      "value": "1",
                      "raw": "\"1\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4599,
                  "end": 4606,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4599,
                    "end": 4605,
                    "object": {
                      "type": "Identifier",
                      "start": 4599,
                      "end": 4600,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4601,
                      "end": 4604,
                      "name": "sym",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4616,
      "end": 4767,
      "id": {
        "type": "Identifier",
        "start": 4625,
        "end": 4627,
        "name": "f9",
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
          "start": 4628,
          "end": 4637,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4629,
            "end": 4637,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 4631,
              "end": 4637
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 4639,
        "end": 4767,
        "body": [
          {
            "type": "IfStatement",
            "start": 4645,
            "end": 4765,
            "test": {
              "type": "LogicalExpression",
              "start": 4649,
              "end": 4681,
              "left": {
                "type": "LogicalExpression",
                "start": 4649,
                "end": 4669,
                "left": {
                  "type": "BinaryExpression",
                  "start": 4649,
                  "end": 4657,
                  "left": {
                    "type": "Literal",
                    "start": 4649,
                    "end": 4652,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 4656,
                    "end": 4657,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 4661,
                  "end": 4669,
                  "left": {
                    "type": "Literal",
                    "start": 4661,
                    "end": 4664,
                    "value": "1",
                    "raw": "\"1\""
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 4668,
                    "end": 4669,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 4673,
                "end": 4681,
                "left": {
                  "type": "Identifier",
                  "start": 4673,
                  "end": 4676,
                  "name": "sym",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 4680,
                  "end": 4681,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4683,
              "end": 4765,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4693,
                  "end": 4697,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4693,
                    "end": 4696,
                    "object": {
                      "type": "Identifier",
                      "start": 4693,
                      "end": 4694,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4695,
                      "end": 4696,
                      "name": "a",
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
                  "start": 4706,
                  "end": 4713,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4706,
                    "end": 4712,
                    "object": {
                      "type": "Identifier",
                      "start": 4706,
                      "end": 4707,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 4708,
                      "end": 4711,
                      "value": "a",
                      "raw": "\"a\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4722,
                  "end": 4727,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4722,
                    "end": 4726,
                    "object": {
                      "type": "Identifier",
                      "start": 4722,
                      "end": 4723,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 4724,
                      "end": 4725,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4736,
                  "end": 4743,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4736,
                    "end": 4742,
                    "object": {
                      "type": "Identifier",
                      "start": 4736,
                      "end": 4737,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 4738,
                      "end": 4741,
                      "value": "1",
                      "raw": "\"1\""
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4752,
                  "end": 4759,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4752,
                    "end": 4758,
                    "object": {
                      "type": "Identifier",
                      "start": 4752,
                      "end": 4753,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4754,
                      "end": 4757,
                      "name": "sym",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": true,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4769,
      "end": 4869,
      "id": {
        "type": "Identifier",
        "start": 4778,
        "end": 4781,
        "name": "f10",
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
          "start": 4782,
          "end": 4799,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4783,
            "end": 4799,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 4785,
              "end": 4799,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 4787,
                  "end": 4797,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4787,
                    "end": 4788,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4788,
                    "end": 4797,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 4790,
                      "end": 4797
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 4801,
        "end": 4869,
        "body": [
          {
            "type": "IfStatement",
            "start": 4807,
            "end": 4867,
            "test": {
              "type": "BinaryExpression",
              "start": 4811,
              "end": 4819,
              "left": {
                "type": "Literal",
                "start": 4811,
                "end": 4814,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 4818,
                "end": 4819,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4821,
              "end": 4839,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4831,
                  "end": 4833,
                  "expression": {
                    "type": "Identifier",
                    "start": 4831,
                    "end": 4832,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 4849,
              "end": 4867,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4859,
                  "end": 4861,
                  "expression": {
                    "type": "Identifier",
                    "start": 4859,
                    "end": 4860,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4871,
      "end": 4967,
      "id": {
        "type": "Identifier",
        "start": 4880,
        "end": 4883,
        "name": "f11",
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
          "start": 4884,
          "end": 4897,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4885,
            "end": 4897,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 4887,
              "end": 4897,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 4889,
                  "end": 4895,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4889,
                    "end": 4890,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4890,
                    "end": 4895,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 4892,
                      "end": 4895
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 4899,
        "end": 4967,
        "body": [
          {
            "type": "IfStatement",
            "start": 4905,
            "end": 4965,
            "test": {
              "type": "BinaryExpression",
              "start": 4909,
              "end": 4917,
              "left": {
                "type": "Literal",
                "start": 4909,
                "end": 4912,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 4916,
                "end": 4917,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4919,
              "end": 4937,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4929,
                  "end": 4931,
                  "expression": {
                    "type": "Identifier",
                    "start": 4929,
                    "end": 4930,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 4947,
              "end": 4965,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4957,
                  "end": 4959,
                  "expression": {
                    "type": "Identifier",
                    "start": 4957,
                    "end": 4958,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4969,
      "end": 5068,
      "id": {
        "type": "Identifier",
        "start": 4978,
        "end": 4981,
        "name": "f12",
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
          "start": 4982,
          "end": 4998,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4983,
            "end": 4998,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 4985,
              "end": 4998,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 4987,
                  "end": 4996,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4987,
                    "end": 4988,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4988,
                    "end": 4996,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4990,
                      "end": 4996
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 5000,
        "end": 5068,
        "body": [
          {
            "type": "IfStatement",
            "start": 5006,
            "end": 5066,
            "test": {
              "type": "BinaryExpression",
              "start": 5010,
              "end": 5018,
              "left": {
                "type": "Literal",
                "start": 5010,
                "end": 5013,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 5017,
                "end": 5018,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5020,
              "end": 5038,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5030,
                  "end": 5032,
                  "expression": {
                    "type": "Identifier",
                    "start": 5030,
                    "end": 5031,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 5048,
              "end": 5066,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5058,
                  "end": 5060,
                  "expression": {
                    "type": "Identifier",
                    "start": 5058,
                    "end": 5059,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5070,
      "end": 5170,
      "id": {
        "type": "Identifier",
        "start": 5079,
        "end": 5082,
        "name": "f13",
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
          "start": 5083,
          "end": 5100,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5084,
            "end": 5100,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 5086,
              "end": 5100,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 5088,
                  "end": 5098,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5088,
                    "end": 5089,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5090,
                    "end": 5098,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5092,
                      "end": 5098
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 5102,
        "end": 5170,
        "body": [
          {
            "type": "IfStatement",
            "start": 5108,
            "end": 5168,
            "test": {
              "type": "BinaryExpression",
              "start": 5112,
              "end": 5120,
              "left": {
                "type": "Literal",
                "start": 5112,
                "end": 5115,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 5119,
                "end": 5120,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5122,
              "end": 5140,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5132,
                  "end": 5134,
                  "expression": {
                    "type": "Identifier",
                    "start": 5132,
                    "end": 5133,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 5150,
              "end": 5168,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5160,
                  "end": 5162,
                  "expression": {
                    "type": "Identifier",
                    "start": 5160,
                    "end": 5161,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5172,
      "end": 5283,
      "id": {
        "type": "Identifier",
        "start": 5181,
        "end": 5184,
        "name": "f14",
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
          "start": 5185,
          "end": 5213,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5186,
            "end": 5213,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 5188,
              "end": 5213,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 5190,
                  "end": 5211,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5190,
                    "end": 5191,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5191,
                    "end": 5211,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 5193,
                      "end": 5211,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5193,
                          "end": 5199
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 5202,
                          "end": 5211
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 5215,
        "end": 5283,
        "body": [
          {
            "type": "IfStatement",
            "start": 5221,
            "end": 5281,
            "test": {
              "type": "BinaryExpression",
              "start": 5225,
              "end": 5233,
              "left": {
                "type": "Literal",
                "start": 5225,
                "end": 5228,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 5232,
                "end": 5233,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5235,
              "end": 5253,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5245,
                  "end": 5247,
                  "expression": {
                    "type": "Identifier",
                    "start": 5245,
                    "end": 5246,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 5263,
              "end": 5281,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5273,
                  "end": 5275,
                  "expression": {
                    "type": "Identifier",
                    "start": 5273,
                    "end": 5274,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5285,
      "end": 5397,
      "id": {
        "type": "Identifier",
        "start": 5294,
        "end": 5297,
        "name": "f15",
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
          "start": 5298,
          "end": 5327,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5299,
            "end": 5327,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 5301,
              "end": 5327,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 5303,
                  "end": 5325,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5303,
                    "end": 5304,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5305,
                    "end": 5325,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 5307,
                      "end": 5325,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5307,
                          "end": 5313
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 5316,
                          "end": 5325
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 5329,
        "end": 5397,
        "body": [
          {
            "type": "IfStatement",
            "start": 5335,
            "end": 5395,
            "test": {
              "type": "BinaryExpression",
              "start": 5339,
              "end": 5347,
              "left": {
                "type": "Literal",
                "start": 5339,
                "end": 5342,
                "value": "a",
                "raw": "\"a\""
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 5346,
                "end": 5347,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5349,
              "end": 5367,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5359,
                  "end": 5361,
                  "expression": {
                    "type": "Identifier",
                    "start": 5359,
                    "end": 5360,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 5377,
              "end": 5395,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5387,
                  "end": 5389,
                  "expression": {
                    "type": "Identifier",
                    "start": 5387,
                    "end": 5388,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5399,
      "end": 5479,
      "id": {
        "type": "Identifier",
        "start": 5408,
        "end": 5411,
        "name": "f16",
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
          "start": 5412,
          "end": 5432,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5413,
            "end": 5432,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 5415,
              "end": 5432,
              "exprName": {
                "type": "Identifier",
                "start": 5422,
                "end": 5432,
                "name": "globalThis",
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
        {
          "type": "Identifier",
          "start": 5434,
          "end": 5463,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5435,
            "end": 5463,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 5437,
              "end": 5463,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 5437,
                  "end": 5443,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5437,
                    "end": 5443,
                    "name": "Window",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeQuery",
                  "start": 5446,
                  "end": 5463,
                  "exprName": {
                    "type": "Identifier",
                    "start": 5453,
                    "end": 5463,
                    "name": "globalThis",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 5465,
        "end": 5479,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 5471,
            "end": 5477,
            "expression": {
              "type": "AssignmentExpression",
              "start": 5471,
              "end": 5476,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 5471,
                "end": 5472,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 5475,
                "end": 5476,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5503,
      "end": 5668,
      "id": {
        "type": "Identifier",
        "start": 5512,
        "end": 5515,
        "name": "foo",
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
          "start": 5519,
          "end": 5527,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5524,
            "end": 5527,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5526,
              "end": 5527,
              "typeName": {
                "type": "Identifier",
                "start": 5526,
                "end": 5527,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 5529,
        "end": 5668,
        "body": [
          {
            "type": "IfStatement",
            "start": 5535,
            "end": 5666,
            "test": {
              "type": "LogicalExpression",
              "start": 5539,
              "end": 5601,
              "left": {
                "type": "LogicalExpression",
                "start": 5539,
                "end": 5582,
                "left": {
                  "type": "BinaryExpression",
                  "start": 5539,
                  "end": 5564,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 5539,
                    "end": 5551,
                    "operator": "typeof",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "start": 5546,
                      "end": 5551,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 5556,
                    "end": 5564,
                    "value": "object",
                    "raw": "\"object\""
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "start": 5568,
                  "end": 5582,
                  "left": {
                    "type": "Identifier",
                    "start": 5568,
                    "end": 5573,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "start": 5578,
                    "end": 5582,
                    "value": null,
                    "raw": "null"
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 5586,
                "end": 5601,
                "left": {
                  "type": "Literal",
                  "start": 5586,
                  "end": 5592,
                  "value": "prop",
                  "raw": "\"prop\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 5596,
                  "end": 5601,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5603,
              "end": 5666,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5613,
                  "end": 5619,
                  "expression": {
                    "type": "Identifier",
                    "start": 5613,
                    "end": 5618,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5515,
        "end": 5518,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5516,
            "end": 5517,
            "name": {
              "type": "Identifier",
              "start": 5516,
              "end": 5517,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 5692,
      "end": 5796,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5698,
          "end": 5795,
          "id": {
            "type": "Identifier",
            "start": 5698,
            "end": 5716,
            "name": "checkIsTouchDevice",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 5719,
            "end": 5795,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "LogicalExpression",
              "start": 5729,
              "end": 5795,
              "left": {
                "type": "BinaryExpression",
                "start": 5729,
                "end": 5753,
                "left": {
                  "type": "Literal",
                  "start": 5729,
                  "end": 5743,
                  "value": "ontouchstart",
                  "raw": "\"ontouchstart\""
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 5747,
                  "end": 5753,
                  "name": "window",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 5757,
                "end": 5795,
                "left": {
                  "type": "Literal",
                  "start": 5757,
                  "end": 5775,
                  "value": "msMaxTouchPoints",
                  "raw": "\"msMaxTouchPoints\""
                },
                "operator": "in",
                "right": {
                  "type": "MemberExpression",
                  "start": 5779,
                  "end": 5795,
                  "object": {
                    "type": "Identifier",
                    "start": 5779,
                    "end": 5785,
                    "name": "window",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 5786,
                    "end": 5795,
                    "name": "navigator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 5820,
      "end": 5927,
      "id": {
        "type": "Identifier",
        "start": 5829,
        "end": 5840,
        "name": "isHTMLTable",
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
          "start": 5866,
          "end": 5874,
          "name": "table",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5871,
            "end": 5874,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5873,
              "end": 5874,
              "typeName": {
                "type": "Identifier",
                "start": 5873,
                "end": 5874,
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 5885,
        "end": 5927,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 5891,
            "end": 5925,
            "argument": {
              "type": "LogicalExpression",
              "start": 5898,
              "end": 5924,
              "left": {
                "type": "UnaryExpression",
                "start": 5898,
                "end": 5905,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "UnaryExpression",
                  "start": 5899,
                  "end": 5905,
                  "operator": "!",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "start": 5900,
                    "end": 5905,
                    "name": "table",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 5909,
                "end": 5924,
                "left": {
                  "type": "Literal",
                  "start": 5909,
                  "end": 5915,
                  "value": "html",
                  "raw": "'html'"
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 5919,
                  "end": 5924,
                  "name": "table",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5840,
        "end": 5865,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5841,
            "end": 5864,
            "name": {
              "type": "Identifier",
              "start": 5841,
              "end": 5842,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 5851,
              "end": 5864,
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 5851,
                  "end": 5857
                },
                {
                  "type": "TSNullKeyword",
                  "start": 5860,
                  "end": 5864
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5875,
        "end": 5884,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 5877,
          "end": 5884
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 5951,
      "end": 6014,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5957,
          "end": 6013,
          "id": {
            "type": "Identifier",
            "start": 5957,
            "end": 5958,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 5961,
            "end": 6013,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 5980,
                "end": 5989,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5981,
                  "end": 5989,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 5983,
                    "end": 5989,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 5983,
                        "end": 5984,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5983,
                          "end": 5984,
                          "name": "P",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 5987,
                        "end": 5989,
                        "members": []
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 5994,
              "end": 6013,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6000,
                  "end": 6011,
                  "expression": {
                    "type": "BinaryExpression",
                    "start": 6000,
                    "end": 6010,
                    "left": {
                      "type": "Literal",
                      "start": 6000,
                      "end": 6005,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "start": 6009,
                      "end": 6010,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 5961,
              "end": 5979,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 5962,
                  "end": 5978,
                  "name": {
                    "type": "Identifier",
                    "start": 5962,
                    "end": 5963,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSObjectKeyword",
                    "start": 5972,
                    "end": 5978
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 6038,
      "end": 6209,
      "id": {
        "type": "Identifier",
        "start": 6047,
        "end": 6052,
        "name": "test1",
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
          "start": 6092,
          "end": 6098,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6095,
            "end": 6098,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 6097,
              "end": 6098,
              "typeName": {
                "type": "Identifier",
                "start": 6097,
                "end": 6098,
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 6100,
        "end": 6209,
        "body": [
          {
            "type": "IfStatement",
            "start": 6106,
            "end": 6207,
            "test": {
              "type": "LogicalExpression",
              "start": 6110,
              "end": 6147,
              "left": {
                "type": "CallExpression",
                "start": 6110,
                "end": 6128,
                "callee": {
                  "type": "MemberExpression",
                  "start": 6110,
                  "end": 6123,
                  "object": {
                    "type": "Identifier",
                    "start": 6110,
                    "end": 6115,
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 6116,
                    "end": 6123,
                    "name": "isArray",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 6124,
                    "end": 6127,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 6132,
                "end": 6147,
                "left": {
                  "type": "Literal",
                  "start": 6132,
                  "end": 6140,
                  "value": "length",
                  "raw": "'length'"
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "start": 6144,
                  "end": 6147,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6149,
              "end": 6173,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6157,
                  "end": 6161,
                  "expression": {
                    "type": "Identifier",
                    "start": 6157,
                    "end": 6160,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 6183,
              "end": 6207,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6191,
                  "end": 6195,
                  "expression": {
                    "type": "Identifier",
                    "start": 6191,
                    "end": 6194,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6052,
        "end": 6091,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 6053,
            "end": 6090,
            "name": {
              "type": "Identifier",
              "start": 6053,
              "end": 6054,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 6063,
              "end": 6090,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 6063,
                  "end": 6068,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 6063,
                    "end": 6066
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 6071,
                  "end": 6090,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6071,
                    "end": 6077,
                    "name": "Record",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6077,
                    "end": 6090,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 6078,
                        "end": 6084
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 6086,
                        "end": 6089
                      }
                    ]
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 6211,
      "end": 6371,
      "id": {
        "type": "Identifier",
        "start": 6220,
        "end": 6225,
        "name": "test2",
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
          "start": 6265,
          "end": 6271,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6268,
            "end": 6271,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 6270,
              "end": 6271,
              "typeName": {
                "type": "Identifier",
                "start": 6270,
                "end": 6271,
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 6273,
        "end": 6371,
        "body": [
          {
            "type": "IfStatement",
            "start": 6279,
            "end": 6369,
            "test": {
              "type": "CallExpression",
              "start": 6283,
              "end": 6301,
              "callee": {
                "type": "MemberExpression",
                "start": 6283,
                "end": 6296,
                "object": {
                  "type": "Identifier",
                  "start": 6283,
                  "end": 6288,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 6289,
                  "end": 6296,
                  "name": "isArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 6297,
                  "end": 6300,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6303,
              "end": 6335,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6311,
                  "end": 6315,
                  "expression": {
                    "type": "Identifier",
                    "start": 6311,
                    "end": 6314,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 6345,
              "end": 6369,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6353,
                  "end": 6357,
                  "expression": {
                    "type": "Identifier",
                    "start": 6353,
                    "end": 6356,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6225,
        "end": 6264,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 6226,
            "end": 6263,
            "name": {
              "type": "Identifier",
              "start": 6226,
              "end": 6227,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 6236,
              "end": 6263,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 6236,
                  "end": 6241,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 6236,
                    "end": 6239
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 6244,
                  "end": 6263,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6244,
                    "end": 6250,
                    "name": "Record",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6250,
                    "end": 6263,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 6251,
                        "end": 6257
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 6259,
                        "end": 6262
                      }
                    ]
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 6373,
      "end": 6522,
      "id": {
        "type": "Identifier",
        "start": 6382,
        "end": 6387,
        "name": "test3",
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
          "start": 6427,
          "end": 6433,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6430,
            "end": 6433,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 6432,
              "end": 6433,
              "typeName": {
                "type": "Identifier",
                "start": 6432,
                "end": 6433,
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 6435,
        "end": 6522,
        "body": [
          {
            "type": "IfStatement",
            "start": 6441,
            "end": 6520,
            "test": {
              "type": "BinaryExpression",
              "start": 6445,
              "end": 6460,
              "left": {
                "type": "Literal",
                "start": 6445,
                "end": 6453,
                "value": "length",
                "raw": "'length'"
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "start": 6457,
                "end": 6460,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6462,
              "end": 6486,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6470,
                  "end": 6474,
                  "expression": {
                    "type": "Identifier",
                    "start": 6470,
                    "end": 6473,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 6496,
              "end": 6520,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6504,
                  "end": 6508,
                  "expression": {
                    "type": "Identifier",
                    "start": 6504,
                    "end": 6507,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6387,
        "end": 6426,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 6388,
            "end": 6425,
            "name": {
              "type": "Identifier",
              "start": 6388,
              "end": 6389,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 6398,
              "end": 6425,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 6398,
                  "end": 6403,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 6398,
                    "end": 6401
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 6406,
                  "end": 6425,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6406,
                    "end": 6412,
                    "name": "Record",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 6412,
                    "end": 6425,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 6413,
                        "end": 6419
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 6421,
                        "end": 6424
                      }
                    ]
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
