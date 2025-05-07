__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 6522,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 22,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 20,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 45,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 45,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 43,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 47,
      "end": 166,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 166,
        "body": [
          {
            "type": "IfStatement",
            "start": 92,
            "end": 164,
            "alternate": {
              "type": "BlockStatement",
              "start": 138,
              "end": 164,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 148,
                  "end": 158,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 148,
                    "end": 157,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 148,
                      "end": 151,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 151,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 154,
                      "end": 157,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 116,
                    "end": 125,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 116,
                      "end": 119,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 117,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 119,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 122,
                      "end": 125,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 96,
              "end": 104,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 96,
                "end": 99,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 75,
        "decorators": [],
        "name": "negativeClassesTest",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 76,
          "end": 84,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 83,
                  "end": 84,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 84,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 168,
      "end": 287,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 207,
        "end": 287,
        "body": [
          {
            "type": "IfStatement",
            "start": 213,
            "end": 285,
            "alternate": {
              "type": "BlockStatement",
              "start": 259,
              "end": 285,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 269,
                  "end": 279,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 269,
                    "end": 278,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 269,
                      "end": 272,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 269,
                        "end": 270,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 272,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 275,
                      "end": 278,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 237,
                    "end": 246,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 237,
                      "end": 240,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 238,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 239,
                        "end": 240,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 243,
                      "end": 246,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 217,
              "end": 225,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 217,
                "end": 220,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 177,
        "end": 196,
        "decorators": [],
        "name": "positiveClassesTest",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 197,
          "end": 205,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 204,
                  "end": 205,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 289,
      "end": 328,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 313,
        "end": 328,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 315,
            "end": 326,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 315,
              "end": 316,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 295,
        "end": 312,
        "decorators": [],
        "name": "AWithOptionalProp",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 329,
      "end": 368,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 353,
        "end": 368,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 355,
            "end": 366,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 355,
              "end": 356,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 352,
        "decorators": [],
        "name": "BWithOptionalProp",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 370,
      "end": 543,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 463,
        "end": 543,
        "body": [
          {
            "type": "IfStatement",
            "start": 469,
            "end": 541,
            "alternate": {
              "type": "BlockStatement",
              "start": 515,
              "end": 541,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 525,
                  "end": 535,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 525,
                    "end": 534,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 525,
                      "end": 528,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 525,
                        "end": 526,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 527,
                        "end": 528,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 531,
                      "end": 534,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 493,
                    "end": 502,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 493,
                      "end": 496,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 493,
                        "end": 494,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 495,
                        "end": 496,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 499,
                      "end": 502,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 473,
              "end": 481,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 473,
                "end": 476,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 480,
                "end": 481,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 379,
        "end": 420,
        "decorators": [],
        "name": "positiveTestClassesWithOptionalProperties",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 421,
          "end": 461,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 424,
                    "end": 441,
                    "decorators": [],
                    "name": "AWithOptionalProp",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 444,
                  "end": 461,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 461,
                    "decorators": [],
                    "name": "BWithOptionalProp",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 545,
      "end": 597,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 563,
        "end": 597,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 569,
            "end": 595,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 569,
              "end": 570,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 570,
              "end": 595,
              "async": false,
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
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 572,
                "end": 580,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 574,
                  "end": 580
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 551,
        "end": 562,
        "decorators": [],
        "name": "AWithMethod",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 599,
      "end": 651,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 617,
        "end": 651,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 623,
            "end": 649,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 623,
              "end": 624,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 624,
              "end": 649,
              "async": false,
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
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 626,
                "end": 634,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 628,
                  "end": 634
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 605,
        "end": 616,
        "decorators": [],
        "name": "BWithMethod",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 653,
      "end": 795,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 723,
        "end": 795,
        "body": [
          {
            "type": "IfStatement",
            "start": 729,
            "end": 793,
            "alternate": {
              "type": "BlockStatement",
              "start": 786,
              "end": 793,
              "body": []
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
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 753,
                    "end": 758,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 753,
                      "end": 756,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 753,
                        "end": 754,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 755,
                        "end": 756,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 768,
                  "end": 774,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 768,
                    "end": 773,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 768,
                      "end": 771,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 768,
                        "end": 769,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 770,
                        "end": 771,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 733,
              "end": 741,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 733,
                "end": 736,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 740,
                "end": 741,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 662,
        "end": 692,
        "decorators": [],
        "name": "negativeTestClassesWithMembers",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 693,
          "end": 721,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 696,
                    "end": 707,
                    "decorators": [],
                    "name": "AWithMethod",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 710,
                  "end": 721,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 710,
                    "end": 721,
                    "decorators": [],
                    "name": "BWithMethod",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 797,
      "end": 988,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 886,
        "end": 988,
        "body": [
          {
            "type": "IfStatement",
            "start": 892,
            "end": 986,
            "alternate": {
              "type": "BlockStatement",
              "start": 949,
              "end": 986,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 959,
                  "end": 965,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 959,
                    "end": 964,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 959,
                      "end": 962,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 959,
                        "end": 960,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 961,
                        "end": 962,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 974,
                  "end": 980,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 974,
                    "end": 979,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 974,
                      "end": 977,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 974,
                        "end": 975,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 976,
                        "end": 977,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 916,
                    "end": 921,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 916,
                      "end": 919,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 916,
                        "end": 917,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 918,
                        "end": 919,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 931,
                  "end": 937,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 931,
                    "end": 936,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 931,
                      "end": 934,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 931,
                        "end": 932,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 933,
                        "end": 934,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 896,
              "end": 904,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 896,
                "end": 899,
                "raw": "\"c\"",
                "value": "c",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 903,
                "end": 904,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 806,
        "end": 855,
        "decorators": [],
        "name": "negativeTestClassesWithMemberMissingInBothClasses",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 856,
          "end": 884,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 859,
                    "end": 870,
                    "decorators": [],
                    "name": "AWithMethod",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 873,
                  "end": 884,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 873,
                    "end": 884,
                    "decorators": [],
                    "name": "BWithMethod",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 990,
      "end": 1012,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 998,
        "end": 1012,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1000,
            "end": 1010,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1000,
              "end": 1001,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 996,
        "end": 997,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1013,
      "end": 1035,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1021,
        "end": 1035,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1023,
            "end": 1033,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1023,
              "end": 1024,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1019,
        "end": 1020,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1037,
      "end": 1172,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1092,
        "end": 1172,
        "body": [
          {
            "type": "IfStatement",
            "start": 1098,
            "end": 1170,
            "alternate": {
              "type": "BlockStatement",
              "start": 1144,
              "end": 1170,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1154,
                  "end": 1164,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1154,
                    "end": 1163,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 1154,
                      "end": 1157,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1154,
                        "end": 1155,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1156,
                        "end": 1157,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1160,
                      "end": 1163,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1122,
                    "end": 1131,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 1122,
                      "end": 1125,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1122,
                        "end": 1123,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1124,
                        "end": 1125,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1128,
                      "end": 1131,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1102,
              "end": 1110,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 1102,
                "end": 1105,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 1109,
                "end": 1110,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1046,
        "end": 1073,
        "decorators": [],
        "name": "negativeMultipleClassesTest",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1074,
          "end": 1090,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1077,
                    "end": 1078,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1081,
                  "end": 1082,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1081,
                    "end": 1082,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1085,
                  "end": 1086,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1085,
                    "end": 1086,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1089,
                  "end": 1090,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1089,
                    "end": 1090,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1174,
      "end": 1214,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1199,
        "end": 1214,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1201,
            "end": 1212,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1201,
              "end": 1205,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1207,
                      "end": 1208,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1211,
                    "end": 1212,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1211,
                      "end": 1212,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
        "start": 1180,
        "end": 1198,
        "decorators": [],
        "name": "ClassWithUnionProp",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1216,
      "end": 1380,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1265,
        "end": 1380,
        "body": [
          {
            "type": "IfStatement",
            "start": 1271,
            "end": 1378,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1351,
                        "end": 1360,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1352,
                          "end": 1360,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1354,
                            "end": 1360
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1363,
                        "end": 1371,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1363,
                          "end": 1369,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1363,
                            "end": 1364,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1365,
                            "end": 1369,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1370,
                          "end": 1371,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1304,
                        "end": 1313,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1305,
                          "end": 1313,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1307,
                            "end": 1313
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1316,
                        "end": 1324,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1316,
                          "end": 1322,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1316,
                            "end": 1317,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1318,
                            "end": 1322,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1323,
                          "end": 1324,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1275,
              "end": 1288,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 1275,
                "end": 1278,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 1282,
                "end": 1288,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1282,
                  "end": 1283,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1284,
                  "end": 1288,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1225,
        "end": 1241,
        "decorators": [],
        "name": "negativePropTest",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1242,
          "end": 1263,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1243,
            "end": 1263,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1245,
              "end": 1263,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1245,
                "end": 1263,
                "decorators": [],
                "name": "ClassWithUnionProp",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1382,
      "end": 1598,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1406,
        "end": 1598,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1412,
            "end": 1434,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1422,
              "end": 1426,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1428,
                      "end": 1429,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1432,
                    "end": 1433,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1432,
                      "end": 1433,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1439,
            "end": 1596,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1439,
              "end": 1445,
              "decorators": [],
              "name": "inThis",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1445,
              "end": 1596,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1448,
                "end": 1596,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1458,
                    "end": 1590,
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1556,
                                "end": 1565,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1557,
                                  "end": 1565,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1559,
                                    "end": 1565
                                  }
                                }
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 1568,
                                "end": 1579,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1568,
                                  "end": 1577,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1568,
                                    "end": 1572
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1573,
                                    "end": 1577,
                                    "decorators": [],
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1578,
                                  "end": 1579,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        }
                      ]
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1498,
                                "end": 1507,
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1499,
                                  "end": 1507,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1501,
                                    "end": 1507
                                  }
                                }
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 1510,
                                "end": 1521,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1510,
                                  "end": 1519,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1510,
                                    "end": 1514
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 1515,
                                    "end": 1519,
                                    "decorators": [],
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1520,
                                  "end": 1521,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1462,
                      "end": 1478,
                      "operator": "in",
                      "left": {
                        "type": "Literal",
                        "start": 1462,
                        "end": 1465,
                        "raw": "\"a\"",
                        "value": "a",
                        "regex": null,
                        "bigint": null
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 1469,
                        "end": 1478,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1469,
                          "end": 1473
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1474,
                          "end": 1478,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1388,
        "end": 1405,
        "decorators": [],
        "name": "NegativeClassTest",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1600,
      "end": 1752,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1631,
        "end": 1752,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1637,
            "end": 1647,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1637,
              "end": 1638,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 1652,
            "end": 1750,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1652,
              "end": 1658,
              "decorators": [],
              "name": "inThis",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1658,
              "end": 1750,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1661,
                "end": 1750,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1671,
                    "end": 1744,
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 1723,
                                "end": 1724,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 1727,
                                "end": 1733,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1727,
                                  "end": 1731
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1732,
                                  "end": 1733,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        }
                      ]
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1688,
                      "end": 1699,
                      "body": []
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1675,
                      "end": 1686,
                      "operator": "in",
                      "left": {
                        "type": "Literal",
                        "start": 1675,
                        "end": 1678,
                        "raw": "\"a\"",
                        "value": "a",
                        "regex": null,
                        "bigint": null
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 1682,
                        "end": 1686
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1606,
        "end": 1630,
        "decorators": [],
        "name": "UnreachableCodeDetection",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1754,
      "end": 1919,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1822,
        "end": 1919,
        "body": [
          {
            "type": "IfStatement",
            "start": 1828,
            "end": 1917,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1898,
                        "end": 1906,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1899,
                          "end": 1906,
                          "typeAnnotation": {
                            "type": "TSNeverKeyword",
                            "start": 1901,
                            "end": 1906
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1909,
                        "end": 1910,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1856,
                        "end": 1865,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1857,
                          "end": 1865,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1859,
                            "end": 1865
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1868,
                        "end": 1871,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1868,
                          "end": 1869,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1870,
                          "end": 1871,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1832,
              "end": 1840,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 1832,
                "end": 1835,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 1839,
                "end": 1840,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1763,
        "end": 1787,
        "decorators": [],
        "name": "positiveIntersectionTest",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1788,
          "end": 1820,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1793,
                        "end": 1794,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1794,
                        "end": 1802,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1796,
                          "end": 1802
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1809,
                        "end": 1810,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1810,
                        "end": 1818,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1812,
                          "end": 1818
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1956,
            "end": 1968,
            "decorators": [],
            "name": "error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1961,
              "end": 1968,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1963,
                "end": 1968,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1963,
                  "end": 1968,
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 1970,
      "end": 2048,
      "alternate": {
        "type": "BlockStatement",
        "start": 2026,
        "end": 2048,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2032,
            "end": 2037,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 2032,
              "end": 2037,
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
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
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 1998,
              "end": 2003,
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1974,
        "end": 1990,
        "operator": "in",
        "left": {
          "type": "Literal",
          "start": 1974,
          "end": 1981,
          "raw": "'extra'",
          "value": "extra",
          "regex": null,
          "bigint": null
        },
        "right": {
          "type": "Identifier",
          "start": 1985,
          "end": 1990,
          "decorators": [],
          "name": "error",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2050,
      "end": 2266,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2118,
                  "end": 2127,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2119,
                    "end": 2127,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2121,
                      "end": 2127
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 2133,
            "end": 2250,
            "alternate": {
              "type": "IfStatement",
              "start": 2181,
              "end": 2250,
              "alternate": {
                "type": "BlockStatement",
                "start": 2229,
                "end": 2250,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2239,
                    "end": 2244,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2239,
                      "end": 2244,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2239,
                        "end": 2240,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2243,
                        "end": 2244,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
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
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 2205,
                      "end": 2212,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 2205,
                        "end": 2206,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 2209,
                        "end": 2212,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2209,
                          "end": 2210,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2211,
                          "end": 2212,
                          "decorators": [],
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2185,
                "end": 2193,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 2185,
                  "end": 2188,
                  "raw": "\"r\"",
                  "value": "r",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 2192,
                  "end": 2193,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
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
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2157,
                    "end": 2164,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2157,
                      "end": 2158,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 2161,
                      "end": 2164,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 2161,
                        "end": 2162,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2163,
                        "end": 2164,
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2137,
              "end": 2145,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 2137,
                "end": 2140,
                "raw": "\"l\"",
                "value": "l",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 2144,
                "end": 2145,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2059,
        "end": 2073,
        "decorators": [],
        "name": "narrowsToNever",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2074,
          "end": 2106,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2079,
                        "end": 2080,
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2080,
                        "end": 2088,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2082,
                          "end": 2088
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2095,
                        "end": 2096,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2096,
                        "end": 2104,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2098,
                          "end": 2104
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2268,
      "end": 2318,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2273,
        "end": 2277,
        "decorators": [],
        "name": "AOrB",
        "optional": false,
        "typeAnnotation": null
      },
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2282,
                  "end": 2287,
                  "decorators": [],
                  "name": "aProp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2287,
                  "end": 2295,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2289,
                    "end": 2295
                  }
                }
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2302,
                  "end": 2307,
                  "decorators": [],
                  "name": "bProp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2307,
                  "end": 2315,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2309,
                    "end": 2315
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2319,
      "end": 2366,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2336,
        "end": 2342,
        "decorators": [],
        "name": "isAOrB",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2343,
          "end": 2353,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2344,
            "end": 2353,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 2346,
              "end": 2353
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2354,
        "end": 2365,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2356,
          "end": 2365,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 2356,
            "end": 2357,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2361,
            "end": 2365,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2361,
              "end": 2365,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2361,
                "end": 2365,
                "decorators": [],
                "name": "AOrB",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2380,
            "end": 2390,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2381,
              "end": 2390,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 2383,
                "end": 2390
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
      "type": "IfStatement",
      "start": 2392,
      "end": 2638,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 2407,
        "end": 2638,
        "body": [
          {
            "type": "IfStatement",
            "start": 2413,
            "end": 2636,
            "alternate": {
              "type": "IfStatement",
              "start": 2465,
              "end": 2636,
              "alternate": {
                "type": "IfStatement",
                "start": 2578,
                "end": 2636,
                "alternate": null,
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
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 2612,
                            "end": 2625,
                            "decorators": [],
                            "name": "_never",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2618,
                              "end": 2625,
                              "typeAnnotation": {
                                "type": "TSNeverKeyword",
                                "start": 2620,
                                "end": 2625
                              }
                            }
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 2628,
                            "end": 2629,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const"
                    }
                  ]
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 2582,
                  "end": 2594,
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "start": 2582,
                    "end": 2589,
                    "raw": "\"cProp\"",
                    "value": "cProp",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2593,
                    "end": 2594,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 2493,
                      "end": 2500,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 2493,
                        "end": 2494,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2495,
                        "end": 2500,
                        "decorators": [],
                        "name": "bProp",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2469,
                "end": 2481,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 2469,
                  "end": 2476,
                  "raw": "\"bProp\"",
                  "value": "bProp",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 2480,
                  "end": 2481,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
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
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2441,
                    "end": 2448,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2441,
                      "end": 2442,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2443,
                      "end": 2448,
                      "decorators": [],
                      "name": "aProp",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2417,
              "end": 2429,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 2417,
                "end": 2424,
                "raw": "\"aProp\"",
                "value": "aProp",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 2428,
                "end": 2429,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 2396,
        "end": 2405,
        "arguments": [
          {
            "type": "Identifier",
            "start": 2403,
            "end": 2404,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2396,
          "end": 2402,
          "decorators": [],
          "name": "isAOrB",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2640,
      "end": 2790,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2676,
        "end": 2790,
        "body": [
          {
            "type": "IfStatement",
            "start": 2682,
            "end": 2788,
            "alternate": {
              "type": "BlockStatement",
              "start": 2753,
              "end": 2788,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2763,
                  "end": 2782,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2763,
                    "end": 2782,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2763,
                      "end": 2769,
                      "decorators": [],
                      "name": "window",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2770,
                      "end": 2782,
                      "decorators": [],
                      "name": "ontouchstart",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2722,
                    "end": 2741,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2722,
                      "end": 2728,
                      "decorators": [],
                      "name": "window",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2729,
                      "end": 2741,
                      "decorators": [],
                      "name": "ontouchstart",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2686,
              "end": 2710,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 2686,
                "end": 2700,
                "raw": "\"ontouchstart\"",
                "value": "ontouchstart",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 2704,
                "end": 2710,
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2649,
        "end": 2673,
        "decorators": [],
        "name": "negativeIntersectionTest",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2792,
      "end": 3090,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2816,
        "end": 3090,
        "body": [
          {
            "type": "IfStatement",
            "start": 2822,
            "end": 2856,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2836,
              "end": 2856,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2846,
                  "end": 2850,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2846,
                    "end": 2849,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2846,
                      "end": 2847,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2848,
                      "end": 2849,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2826,
              "end": 2834,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 2826,
                "end": 2829,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 2833,
                "end": 2834,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2861,
            "end": 2900,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2880,
              "end": 2900,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2890,
                  "end": 2894,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2890,
                    "end": 2893,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2890,
                      "end": 2891,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2892,
                      "end": 2893,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 2865,
              "end": 2878,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 2865,
                "end": 2866,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 2870,
                "end": 2878,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 2870,
                  "end": 2873,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 2877,
                  "end": 2878,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2905,
            "end": 2969,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2949,
              "end": 2969,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2959,
                  "end": 2963,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2959,
                    "end": 2962,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2959,
                      "end": 2960,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2961,
                      "end": 2962,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 2909,
              "end": 2947,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 2909,
                "end": 2935,
                "operator": "&&",
                "left": {
                  "type": "Identifier",
                  "start": 2909,
                  "end": 2910,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 2914,
                  "end": 2935,
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 2914,
                    "end": 2922,
                    "argument": {
                      "type": "Identifier",
                      "start": 2921,
                      "end": 2922,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2927,
                    "end": 2935,
                    "raw": "\"object\"",
                    "value": "object",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 2939,
                "end": 2947,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 2939,
                  "end": 2942,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 2946,
                  "end": 2947,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2974,
            "end": 3088,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3042,
              "end": 3088,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3052,
                  "end": 3056,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3052,
                    "end": 3055,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3052,
                      "end": 3053,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3054,
                      "end": 3055,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3065,
                  "end": 3069,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3065,
                    "end": 3068,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3065,
                      "end": 3066,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3067,
                      "end": 3068,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3078,
                  "end": 3082,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3078,
                    "end": 3081,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3078,
                      "end": 3079,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3080,
                      "end": 3081,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 2978,
              "end": 3040,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 2978,
                "end": 3028,
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "start": 2978,
                  "end": 3016,
                  "operator": "&&",
                  "left": {
                    "type": "LogicalExpression",
                    "start": 2978,
                    "end": 3004,
                    "operator": "&&",
                    "left": {
                      "type": "Identifier",
                      "start": 2978,
                      "end": 2979,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 2983,
                      "end": 3004,
                      "operator": "===",
                      "left": {
                        "type": "UnaryExpression",
                        "start": 2983,
                        "end": 2991,
                        "argument": {
                          "type": "Identifier",
                          "start": 2990,
                          "end": 2991,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "typeof",
                        "prefix": true
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2996,
                        "end": 3004,
                        "raw": "\"object\"",
                        "value": "object",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 3008,
                    "end": 3016,
                    "operator": "in",
                    "left": {
                      "type": "Literal",
                      "start": 3008,
                      "end": 3011,
                      "raw": "\"a\"",
                      "value": "a",
                      "regex": null,
                      "bigint": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3015,
                      "end": 3016,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 3020,
                  "end": 3028,
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "start": 3020,
                    "end": 3023,
                    "raw": "\"b\"",
                    "value": "b",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3027,
                    "end": 3028,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 3032,
                "end": 3040,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 3032,
                  "end": 3035,
                  "raw": "\"c\"",
                  "value": "c",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 3039,
                  "end": 3040,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2801,
        "end": 2803,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2804,
          "end": 2814,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2805,
            "end": 2814,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 2807,
              "end": 2814
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3092,
      "end": 3246,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3115,
        "end": 3246,
        "body": [
          {
            "type": "IfStatement",
            "start": 3121,
            "end": 3155,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3135,
              "end": 3155,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3145,
                  "end": 3149,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3145,
                    "end": 3148,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3145,
                      "end": 3146,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3147,
                      "end": 3148,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3125,
              "end": 3133,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 3125,
                "end": 3128,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 3132,
                "end": 3133,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3160,
            "end": 3244,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3198,
              "end": 3244,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3208,
                  "end": 3212,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3208,
                    "end": 3211,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3208,
                      "end": 3209,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3210,
                      "end": 3211,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3221,
                  "end": 3225,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3221,
                    "end": 3224,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3221,
                      "end": 3222,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3223,
                      "end": 3224,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3234,
                  "end": 3238,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3234,
                    "end": 3237,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3234,
                      "end": 3235,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3236,
                      "end": 3237,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 3164,
              "end": 3196,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 3164,
                "end": 3184,
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "start": 3164,
                  "end": 3172,
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "start": 3164,
                    "end": 3167,
                    "raw": "\"a\"",
                    "value": "a",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3171,
                    "end": 3172,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 3176,
                  "end": 3184,
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "start": 3176,
                    "end": 3179,
                    "raw": "\"b\"",
                    "value": "b",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3183,
                    "end": 3184,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 3188,
                "end": 3196,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 3188,
                  "end": 3191,
                  "raw": "\"c\"",
                  "value": "c",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 3195,
                  "end": 3196,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3101,
        "end": 3103,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3104,
          "end": 3113,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3105,
            "end": 3113,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 3107,
              "end": 3113
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3248,
      "end": 3543,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3269,
        "end": 3543,
        "body": [
          {
            "type": "IfStatement",
            "start": 3275,
            "end": 3309,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3289,
              "end": 3309,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3299,
                  "end": 3303,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3299,
                    "end": 3302,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3299,
                      "end": 3300,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3301,
                      "end": 3302,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3279,
              "end": 3287,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 3279,
                "end": 3282,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 3286,
                "end": 3287,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3314,
            "end": 3353,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3333,
              "end": 3353,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3343,
                  "end": 3347,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3343,
                    "end": 3346,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3343,
                      "end": 3344,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3345,
                      "end": 3346,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 3318,
              "end": 3331,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 3318,
                "end": 3319,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 3323,
                "end": 3331,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 3323,
                  "end": 3326,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 3330,
                  "end": 3331,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3358,
            "end": 3422,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3402,
              "end": 3422,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3412,
                  "end": 3416,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3412,
                    "end": 3415,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3412,
                      "end": 3413,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3414,
                      "end": 3415,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 3362,
              "end": 3400,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 3362,
                "end": 3388,
                "operator": "&&",
                "left": {
                  "type": "Identifier",
                  "start": 3362,
                  "end": 3363,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 3367,
                  "end": 3388,
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 3367,
                    "end": 3375,
                    "argument": {
                      "type": "Identifier",
                      "start": 3374,
                      "end": 3375,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 3380,
                    "end": 3388,
                    "raw": "\"object\"",
                    "value": "object",
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 3392,
                "end": 3400,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 3392,
                  "end": 3395,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 3399,
                  "end": 3400,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3427,
            "end": 3541,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3495,
              "end": 3541,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3505,
                  "end": 3509,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3505,
                    "end": 3508,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3505,
                      "end": 3506,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3507,
                      "end": 3508,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3518,
                  "end": 3522,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3518,
                    "end": 3521,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3518,
                      "end": 3519,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3520,
                      "end": 3521,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3531,
                  "end": 3535,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3531,
                    "end": 3534,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3531,
                      "end": 3532,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3533,
                      "end": 3534,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 3431,
              "end": 3493,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 3431,
                "end": 3481,
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "start": 3431,
                  "end": 3469,
                  "operator": "&&",
                  "left": {
                    "type": "LogicalExpression",
                    "start": 3431,
                    "end": 3457,
                    "operator": "&&",
                    "left": {
                      "type": "Identifier",
                      "start": 3431,
                      "end": 3432,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 3436,
                      "end": 3457,
                      "operator": "===",
                      "left": {
                        "type": "UnaryExpression",
                        "start": 3436,
                        "end": 3444,
                        "argument": {
                          "type": "Identifier",
                          "start": 3443,
                          "end": 3444,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "typeof",
                        "prefix": true
                      },
                      "right": {
                        "type": "Literal",
                        "start": 3449,
                        "end": 3457,
                        "raw": "\"object\"",
                        "value": "object",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 3461,
                    "end": 3469,
                    "operator": "in",
                    "left": {
                      "type": "Literal",
                      "start": 3461,
                      "end": 3464,
                      "raw": "\"a\"",
                      "value": "a",
                      "regex": null,
                      "bigint": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3468,
                      "end": 3469,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 3473,
                  "end": 3481,
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "start": 3473,
                    "end": 3476,
                    "raw": "\"b\"",
                    "value": "b",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3480,
                    "end": 3481,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 3485,
                "end": 3493,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 3485,
                  "end": 3488,
                  "raw": "\"c\"",
                  "value": "c",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 3492,
                  "end": 3493,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3257,
        "end": 3259,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3263,
          "end": 3267,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3264,
            "end": 3267,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3266,
              "end": 3267,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 3266,
                "end": 3267,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3259,
        "end": 3262,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3260,
            "end": 3261,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3260,
              "end": 3261,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3545,
      "end": 3706,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3575,
        "end": 3706,
        "body": [
          {
            "type": "IfStatement",
            "start": 3581,
            "end": 3615,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3595,
              "end": 3615,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3605,
                  "end": 3609,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3605,
                    "end": 3608,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3605,
                      "end": 3606,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3607,
                      "end": 3608,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3585,
              "end": 3593,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 3585,
                "end": 3588,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 3592,
                "end": 3593,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3620,
            "end": 3704,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 3658,
              "end": 3704,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3668,
                  "end": 3672,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3668,
                    "end": 3671,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3668,
                      "end": 3669,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3670,
                      "end": 3671,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3681,
                  "end": 3685,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3681,
                    "end": 3684,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3681,
                      "end": 3682,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3683,
                      "end": 3684,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 3694,
                  "end": 3698,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3694,
                    "end": 3697,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3694,
                      "end": 3695,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3696,
                      "end": 3697,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 3624,
              "end": 3656,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 3624,
                "end": 3644,
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "start": 3624,
                  "end": 3632,
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "start": 3624,
                    "end": 3627,
                    "raw": "\"a\"",
                    "value": "a",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3631,
                    "end": 3632,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 3636,
                  "end": 3644,
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "start": 3636,
                    "end": 3639,
                    "raw": "\"b\"",
                    "value": "b",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3643,
                    "end": 3644,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 3648,
                "end": 3656,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 3648,
                  "end": 3651,
                  "raw": "\"c\"",
                  "value": "c",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 3655,
                  "end": 3656,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3554,
        "end": 3556,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3557,
          "end": 3573,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3562,
                    "end": 3563,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3563,
                    "end": 3571,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3565,
                      "end": 3571
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3708,
      "end": 3910,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3754,
        "end": 3910,
        "body": [
          {
            "type": "IfStatement",
            "start": 3760,
            "end": 3908,
            "alternate": {
              "type": "IfStatement",
              "start": 3820,
              "end": 3908,
              "alternate": {
                "type": "BlockStatement",
                "start": 3880,
                "end": 3908,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3890,
                    "end": 3892,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 3890,
                      "end": 3891,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 3844,
                      "end": 3845,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 3824,
                "end": 3832,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 3824,
                  "end": 3827,
                  "raw": "\"b\"",
                  "value": "b",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 3831,
                  "end": 3832,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 3784,
                    "end": 3785,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3764,
              "end": 3772,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 3764,
                "end": 3767,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 3771,
                "end": 3772,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3717,
        "end": 3719,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3720,
          "end": 3752,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3725,
                        "end": 3726,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3726,
                        "end": 3734,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3728,
                          "end": 3734
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3741,
                        "end": 3742,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3742,
                        "end": 3750,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3744,
                          "end": 3750
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3912,
      "end": 4145,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3958,
        "end": 4145,
        "body": [
          {
            "type": "IfStatement",
            "start": 3964,
            "end": 4143,
            "alternate": {
              "type": "IfStatement",
              "start": 4024,
              "end": 4143,
              "alternate": {
                "type": "BlockStatement",
                "start": 4107,
                "end": 4143,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4117,
                    "end": 4119,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 4117,
                      "end": 4118,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 4048,
                      "end": 4049,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 4028,
                "end": 4036,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 4028,
                  "end": 4031,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 4035,
                  "end": 4036,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 3988,
                    "end": 3989,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3968,
              "end": 3976,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 3968,
                "end": 3971,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 3975,
                "end": 3976,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3921,
        "end": 3923,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3924,
          "end": 3956,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3929,
                        "end": 3930,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3930,
                        "end": 3938,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3932,
                          "end": 3938
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3945,
                        "end": 3946,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3946,
                        "end": 3954,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3948,
                          "end": 3954
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4212,
      "end": 4440,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4287,
        "end": 4440,
        "body": [
          {
            "type": "IfStatement",
            "start": 4293,
            "end": 4363,
            "alternate": {
              "type": "BlockStatement",
              "start": 4335,
              "end": 4363,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4345,
                  "end": 4347,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 4345,
                    "end": 4346,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 4317,
                    "end": 4318,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4297,
              "end": 4305,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 4297,
                "end": 4300,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 4304,
                "end": 4305,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 4368,
            "end": 4438,
            "alternate": {
              "type": "BlockStatement",
              "start": 4410,
              "end": 4438,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4420,
                  "end": 4422,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 4420,
                    "end": 4421,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 4392,
                    "end": 4393,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4372,
              "end": 4380,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 4372,
                "end": 4375,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 4379,
                "end": 4380,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4221,
        "end": 4223,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4224,
          "end": 4251,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4229,
                    "end": 4230,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4230,
                    "end": 4238,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4232,
                      "end": 4238
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 4240,
                  "end": 4249,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4240,
                    "end": 4241,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4241,
                    "end": 4249,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4243,
                      "end": 4249
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4253,
          "end": 4285,
          "decorators": [],
          "name": "y",
          "optional": false,
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4258,
                        "end": 4259,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4259,
                        "end": 4267,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4261,
                          "end": 4267
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4274,
                        "end": 4275,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4275,
                        "end": 4283,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4277,
                          "end": 4283
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4448,
            "end": 4451,
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4454,
            "end": 4462,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 4454,
              "end": 4460,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 4465,
      "end": 4614,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4488,
        "end": 4614,
        "body": [
          {
            "type": "IfStatement",
            "start": 4494,
            "end": 4612,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4530,
              "end": 4612,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4540,
                  "end": 4544,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4540,
                    "end": 4543,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4540,
                      "end": 4541,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4542,
                      "end": 4543,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4553,
                  "end": 4560,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4553,
                    "end": 4559,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 4553,
                      "end": 4554,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 4555,
                      "end": 4558,
                      "raw": "\"a\"",
                      "value": "a",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4569,
                  "end": 4574,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4569,
                    "end": 4573,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 4569,
                      "end": 4570,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 4571,
                      "end": 4572,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4583,
                  "end": 4590,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4583,
                    "end": 4589,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 4583,
                      "end": 4584,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 4585,
                      "end": 4588,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4599,
                  "end": 4606,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4599,
                    "end": 4605,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 4599,
                      "end": 4600,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4601,
                      "end": 4604,
                      "decorators": [],
                      "name": "sym",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 4498,
              "end": 4528,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 4498,
                "end": 4516,
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "start": 4498,
                  "end": 4506,
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "start": 4498,
                    "end": 4501,
                    "raw": "\"a\"",
                    "value": "a",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4505,
                    "end": 4506,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 4510,
                  "end": 4516,
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "start": 4510,
                    "end": 4511,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4515,
                    "end": 4516,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 4520,
                "end": 4528,
                "operator": "in",
                "left": {
                  "type": "Identifier",
                  "start": 4520,
                  "end": 4523,
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 4527,
                  "end": 4528,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4474,
        "end": 4476,
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4477,
          "end": 4486,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4478,
            "end": 4486,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 4480,
              "end": 4486
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4616,
      "end": 4767,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4639,
        "end": 4767,
        "body": [
          {
            "type": "IfStatement",
            "start": 4645,
            "end": 4765,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4683,
              "end": 4765,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4693,
                  "end": 4697,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4693,
                    "end": 4696,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4693,
                      "end": 4694,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4695,
                      "end": 4696,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4706,
                  "end": 4713,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4706,
                    "end": 4712,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 4706,
                      "end": 4707,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 4708,
                      "end": 4711,
                      "raw": "\"a\"",
                      "value": "a",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4722,
                  "end": 4727,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4722,
                    "end": 4726,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 4722,
                      "end": 4723,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 4724,
                      "end": 4725,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4736,
                  "end": 4743,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4736,
                    "end": 4742,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 4736,
                      "end": 4737,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 4738,
                      "end": 4741,
                      "raw": "\"1\"",
                      "value": "1",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4752,
                  "end": 4759,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4752,
                    "end": 4758,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 4752,
                      "end": 4753,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4754,
                      "end": 4757,
                      "decorators": [],
                      "name": "sym",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 4649,
              "end": 4681,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 4649,
                "end": 4669,
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "start": 4649,
                  "end": 4657,
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "start": 4649,
                    "end": 4652,
                    "raw": "\"a\"",
                    "value": "a",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4656,
                    "end": 4657,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 4661,
                  "end": 4669,
                  "operator": "in",
                  "left": {
                    "type": "Literal",
                    "start": 4661,
                    "end": 4664,
                    "raw": "\"1\"",
                    "value": "1",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4668,
                    "end": 4669,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 4673,
                "end": 4681,
                "operator": "in",
                "left": {
                  "type": "Identifier",
                  "start": 4673,
                  "end": 4676,
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 4680,
                  "end": 4681,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4625,
        "end": 4627,
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4628,
          "end": 4637,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4629,
            "end": 4637,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 4631,
              "end": 4637
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4769,
      "end": 4869,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4801,
        "end": 4869,
        "body": [
          {
            "type": "IfStatement",
            "start": 4807,
            "end": 4867,
            "alternate": {
              "type": "BlockStatement",
              "start": 4849,
              "end": 4867,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4859,
                  "end": 4861,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 4859,
                    "end": 4860,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 4831,
                    "end": 4832,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4811,
              "end": 4819,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 4811,
                "end": 4814,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 4818,
                "end": 4819,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4778,
        "end": 4781,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4782,
          "end": 4799,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4787,
                    "end": 4788,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4788,
                    "end": 4797,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 4790,
                      "end": 4797
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4871,
      "end": 4967,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4899,
        "end": 4967,
        "body": [
          {
            "type": "IfStatement",
            "start": 4905,
            "end": 4965,
            "alternate": {
              "type": "BlockStatement",
              "start": 4947,
              "end": 4965,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4957,
                  "end": 4959,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 4957,
                    "end": 4958,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 4929,
                    "end": 4930,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4909,
              "end": 4917,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 4909,
                "end": 4912,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 4916,
                "end": 4917,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4880,
        "end": 4883,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4884,
          "end": 4897,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4889,
                    "end": 4890,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4890,
                    "end": 4895,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 4892,
                      "end": 4895
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4969,
      "end": 5068,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 5000,
        "end": 5068,
        "body": [
          {
            "type": "IfStatement",
            "start": 5006,
            "end": 5066,
            "alternate": {
              "type": "BlockStatement",
              "start": 5048,
              "end": 5066,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5058,
                  "end": 5060,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 5058,
                    "end": 5059,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 5030,
                    "end": 5031,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 5010,
              "end": 5018,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 5010,
                "end": 5013,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 5017,
                "end": 5018,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4978,
        "end": 4981,
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4982,
          "end": 4998,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4987,
                    "end": 4988,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4988,
                    "end": 4996,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4990,
                      "end": 4996
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5070,
      "end": 5170,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 5102,
        "end": 5170,
        "body": [
          {
            "type": "IfStatement",
            "start": 5108,
            "end": 5168,
            "alternate": {
              "type": "BlockStatement",
              "start": 5150,
              "end": 5168,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5160,
                  "end": 5162,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 5160,
                    "end": 5161,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 5132,
                    "end": 5133,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 5112,
              "end": 5120,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 5112,
                "end": 5115,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 5119,
                "end": 5120,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5079,
        "end": 5082,
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5083,
          "end": 5100,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5088,
                    "end": 5089,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5090,
                    "end": 5098,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5092,
                      "end": 5098
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5172,
      "end": 5283,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 5215,
        "end": 5283,
        "body": [
          {
            "type": "IfStatement",
            "start": 5221,
            "end": 5281,
            "alternate": {
              "type": "BlockStatement",
              "start": 5263,
              "end": 5281,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5273,
                  "end": 5275,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 5273,
                    "end": 5274,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 5245,
                    "end": 5246,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 5225,
              "end": 5233,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 5225,
                "end": 5228,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 5232,
                "end": 5233,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5181,
        "end": 5184,
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5185,
          "end": 5213,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5190,
                    "end": 5191,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5285,
      "end": 5397,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 5329,
        "end": 5397,
        "body": [
          {
            "type": "IfStatement",
            "start": 5335,
            "end": 5395,
            "alternate": {
              "type": "BlockStatement",
              "start": 5377,
              "end": 5395,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5387,
                  "end": 5389,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 5387,
                    "end": 5388,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 5359,
                    "end": 5360,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 5339,
              "end": 5347,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 5339,
                "end": 5342,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 5346,
                "end": 5347,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5294,
        "end": 5297,
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5298,
          "end": 5327,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5303,
                    "end": 5304,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
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
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5399,
      "end": 5479,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 5465,
        "end": 5479,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 5471,
            "end": 5477,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 5471,
              "end": 5476,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 5471,
                "end": 5472,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 5475,
                "end": 5476,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5408,
        "end": 5411,
        "decorators": [],
        "name": "f16",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5412,
          "end": 5432,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "globalThis",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 5434,
          "end": 5463,
          "decorators": [],
          "name": "y",
          "optional": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5437,
                    "end": 5443,
                    "decorators": [],
                    "name": "Window",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeQuery",
                  "start": 5446,
                  "end": 5463,
                  "exprName": {
                    "type": "Identifier",
                    "start": 5453,
                    "end": 5463,
                    "decorators": [],
                    "name": "globalThis",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5503,
      "end": 5668,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 5529,
        "end": 5668,
        "body": [
          {
            "type": "IfStatement",
            "start": 5535,
            "end": 5666,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 5603,
              "end": 5666,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 5613,
                  "end": 5619,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 5613,
                    "end": 5618,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 5539,
              "end": 5601,
              "operator": "&&",
              "left": {
                "type": "LogicalExpression",
                "start": 5539,
                "end": 5582,
                "operator": "&&",
                "left": {
                  "type": "BinaryExpression",
                  "start": 5539,
                  "end": 5564,
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 5539,
                    "end": 5551,
                    "argument": {
                      "type": "Identifier",
                      "start": 5546,
                      "end": 5551,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 5556,
                    "end": 5564,
                    "raw": "\"object\"",
                    "value": "object",
                    "regex": null,
                    "bigint": null
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "start": 5568,
                  "end": 5582,
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "start": 5568,
                    "end": 5573,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 5578,
                    "end": 5582,
                    "raw": "null",
                    "value": null,
                    "regex": null,
                    "bigint": null
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 5586,
                "end": 5601,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 5586,
                  "end": 5592,
                  "raw": "\"prop\"",
                  "value": "prop",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 5596,
                  "end": 5601,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5512,
        "end": 5515,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5519,
          "end": 5527,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5524,
            "end": 5527,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5526,
              "end": 5527,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 5526,
                "end": 5527,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5515,
        "end": 5518,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5516,
            "end": 5517,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5516,
              "end": 5517,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5698,
            "end": 5716,
            "decorators": [],
            "name": "checkIsTouchDevice",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 5719,
            "end": 5795,
            "async": false,
            "body": {
              "type": "LogicalExpression",
              "start": 5729,
              "end": 5795,
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "start": 5729,
                "end": 5753,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 5729,
                  "end": 5743,
                  "raw": "\"ontouchstart\"",
                  "value": "ontouchstart",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 5747,
                  "end": 5753,
                  "decorators": [],
                  "name": "window",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "BinaryExpression",
                "start": 5757,
                "end": 5795,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 5757,
                  "end": 5775,
                  "raw": "\"msMaxTouchPoints\"",
                  "value": "msMaxTouchPoints",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "MemberExpression",
                  "start": 5779,
                  "end": 5795,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 5779,
                    "end": 5785,
                    "decorators": [],
                    "name": "window",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 5786,
                    "end": 5795,
                    "decorators": [],
                    "name": "navigator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 5820,
      "end": 5927,
      "async": false,
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
              "operator": "&&",
              "left": {
                "type": "UnaryExpression",
                "start": 5898,
                "end": 5905,
                "argument": {
                  "type": "UnaryExpression",
                  "start": 5899,
                  "end": 5905,
                  "argument": {
                    "type": "Identifier",
                    "start": 5900,
                    "end": 5905,
                    "decorators": [],
                    "name": "table",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!",
                  "prefix": true
                },
                "operator": "!",
                "prefix": true
              },
              "right": {
                "type": "BinaryExpression",
                "start": 5909,
                "end": 5924,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 5909,
                  "end": 5915,
                  "raw": "'html'",
                  "value": "html",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 5919,
                  "end": 5924,
                  "decorators": [],
                  "name": "table",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5829,
        "end": 5840,
        "decorators": [],
        "name": "isHTMLTable",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5866,
          "end": 5874,
          "decorators": [],
          "name": "table",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5871,
            "end": 5874,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5873,
              "end": 5874,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 5873,
                "end": 5874,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 5875,
        "end": 5884,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 5877,
          "end": 5884
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5840,
        "end": 5865,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5841,
            "end": 5864,
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 5841,
              "end": 5842,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5957,
            "end": 5958,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 5961,
            "end": 6013,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 5994,
              "end": 6013,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6000,
                  "end": 6011,
                  "directive": null,
                  "expression": {
                    "type": "BinaryExpression",
                    "start": 6000,
                    "end": 6010,
                    "operator": "in",
                    "left": {
                      "type": "Literal",
                      "start": 6000,
                      "end": 6005,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 6009,
                      "end": 6010,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 5980,
                "end": 5989,
                "decorators": [],
                "name": "a",
                "optional": false,
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5983,
                          "end": 5984,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 5987,
                        "end": 5989,
                        "members": []
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 5961,
              "end": 5979,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 5962,
                  "end": 5978,
                  "const": false,
                  "constraint": {
                    "type": "TSObjectKeyword",
                    "start": 5972,
                    "end": 5978
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 5962,
                    "end": 5963,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 6038,
      "end": 6209,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 6100,
        "end": 6209,
        "body": [
          {
            "type": "IfStatement",
            "start": 6106,
            "end": 6207,
            "alternate": {
              "type": "BlockStatement",
              "start": 6183,
              "end": 6207,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6191,
                  "end": 6195,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 6191,
                    "end": 6194,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 6157,
                    "end": 6160,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 6110,
              "end": 6147,
              "operator": "||",
              "left": {
                "type": "CallExpression",
                "start": 6110,
                "end": 6128,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 6124,
                    "end": 6127,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 6110,
                  "end": 6123,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 6110,
                    "end": 6115,
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 6116,
                    "end": 6123,
                    "decorators": [],
                    "name": "isArray",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "right": {
                "type": "BinaryExpression",
                "start": 6132,
                "end": 6147,
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "start": 6132,
                  "end": 6140,
                  "raw": "'length'",
                  "value": "length",
                  "regex": null,
                  "bigint": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 6144,
                  "end": 6147,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 6047,
        "end": 6052,
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 6092,
          "end": 6098,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6095,
            "end": 6098,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 6097,
              "end": 6098,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 6097,
                "end": 6098,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6052,
        "end": 6091,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 6053,
            "end": 6090,
            "const": false,
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
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 6071,
                    "end": 6077,
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 6053,
              "end": 6054,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 6211,
      "end": 6371,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 6273,
        "end": 6371,
        "body": [
          {
            "type": "IfStatement",
            "start": 6279,
            "end": 6369,
            "alternate": {
              "type": "BlockStatement",
              "start": 6345,
              "end": 6369,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6353,
                  "end": 6357,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 6353,
                    "end": 6356,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 6311,
                    "end": 6314,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 6283,
              "end": 6301,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 6297,
                  "end": 6300,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 6283,
                "end": 6296,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 6283,
                  "end": 6288,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 6289,
                  "end": 6296,
                  "decorators": [],
                  "name": "isArray",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 6220,
        "end": 6225,
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 6265,
          "end": 6271,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6268,
            "end": 6271,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 6270,
              "end": 6271,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 6270,
                "end": 6271,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6225,
        "end": 6264,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 6226,
            "end": 6263,
            "const": false,
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
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 6244,
                    "end": 6250,
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 6226,
              "end": 6227,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 6373,
      "end": 6522,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 6435,
        "end": 6522,
        "body": [
          {
            "type": "IfStatement",
            "start": 6441,
            "end": 6520,
            "alternate": {
              "type": "BlockStatement",
              "start": 6496,
              "end": 6520,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 6504,
                  "end": 6508,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 6504,
                    "end": 6507,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 6470,
                    "end": 6473,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 6445,
              "end": 6460,
              "operator": "in",
              "left": {
                "type": "Literal",
                "start": 6445,
                "end": 6453,
                "raw": "'length'",
                "value": "length",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 6457,
                "end": 6460,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 6382,
        "end": 6387,
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 6427,
          "end": 6433,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6430,
            "end": 6433,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 6432,
              "end": 6433,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 6432,
                "end": 6433,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6387,
        "end": 6426,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 6388,
            "end": 6425,
            "const": false,
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
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 6406,
                    "end": 6412,
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 6388,
              "end": 6389,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
