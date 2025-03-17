__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 946,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 945,
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
        "end": 945,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 25,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 20,
              "name": "field"
            },
            "value": {
              "type": "Literal",
              "start": 23,
              "end": 24,
              "value": 0,
              "raw": "0"
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
            "type": "MethodDefinition",
            "start": 30,
            "end": 886,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 41,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 41,
              "end": 886,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 44,
                "end": 886,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 54,
                    "end": 70,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 54,
                      "end": 69,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 54,
                        "end": 65,
                        "object": {
                          "type": "ThisExpression",
                          "start": 54,
                          "end": 58
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 59,
                          "end": 65,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 68,
                        "end": 69,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 79,
                    "end": 96,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 79,
                      "end": 95,
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 79,
                        "end": 90,
                        "object": {
                          "type": "ThisExpression",
                          "start": 79,
                          "end": 83
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 84,
                          "end": 90,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 94,
                        "end": 95,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 105,
                    "end": 122,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 105,
                      "end": 121,
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 105,
                        "end": 116,
                        "object": {
                          "type": "ThisExpression",
                          "start": 105,
                          "end": 109
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 110,
                          "end": 116,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 120,
                        "end": 121,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 131,
                    "end": 148,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 131,
                      "end": 147,
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 131,
                        "end": 142,
                        "object": {
                          "type": "ThisExpression",
                          "start": 131,
                          "end": 135
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 136,
                          "end": 142,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 146,
                        "end": 147,
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 157,
                    "end": 174,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 157,
                      "end": 173,
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 157,
                        "end": 168,
                        "object": {
                          "type": "ThisExpression",
                          "start": 157,
                          "end": 161
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 162,
                          "end": 168,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 172,
                        "end": 173,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 183,
                    "end": 201,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 183,
                      "end": 200,
                      "operator": "**=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 183,
                        "end": 194,
                        "object": {
                          "type": "ThisExpression",
                          "start": 183,
                          "end": 187
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 188,
                          "end": 194,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 199,
                        "end": 200,
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 210,
                    "end": 227,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 210,
                      "end": 226,
                      "operator": "%=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 210,
                        "end": 221,
                        "object": {
                          "type": "ThisExpression",
                          "start": 210,
                          "end": 214
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 215,
                          "end": 221,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 225,
                        "end": 226,
                        "value": 7,
                        "raw": "7"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 236,
                    "end": 254,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 236,
                      "end": 253,
                      "operator": "<<=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 236,
                        "end": 247,
                        "object": {
                          "type": "ThisExpression",
                          "start": 236,
                          "end": 240
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 241,
                          "end": 247,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 252,
                        "end": 253,
                        "value": 8,
                        "raw": "8"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 263,
                    "end": 281,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 263,
                      "end": 280,
                      "operator": ">>=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 263,
                        "end": 274,
                        "object": {
                          "type": "ThisExpression",
                          "start": 263,
                          "end": 267
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 268,
                          "end": 274,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 279,
                        "end": 280,
                        "value": 9,
                        "raw": "9"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 290,
                    "end": 310,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 290,
                      "end": 309,
                      "operator": ">>>=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 290,
                        "end": 301,
                        "object": {
                          "type": "ThisExpression",
                          "start": 290,
                          "end": 294
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 295,
                          "end": 301,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 307,
                        "end": 309,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 319,
                    "end": 337,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 319,
                      "end": 336,
                      "operator": "&=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 319,
                        "end": 330,
                        "object": {
                          "type": "ThisExpression",
                          "start": 319,
                          "end": 323
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 324,
                          "end": 330,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 334,
                        "end": 336,
                        "value": 11,
                        "raw": "11"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 346,
                    "end": 364,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 346,
                      "end": 363,
                      "operator": "|=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 346,
                        "end": 357,
                        "object": {
                          "type": "ThisExpression",
                          "start": 346,
                          "end": 350
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 351,
                          "end": 357,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 361,
                        "end": 363,
                        "value": 12,
                        "raw": "12"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 373,
                    "end": 391,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 373,
                      "end": 390,
                      "operator": "^=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 373,
                        "end": 384,
                        "object": {
                          "type": "ThisExpression",
                          "start": 373,
                          "end": 377
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 378,
                          "end": 384,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 388,
                        "end": 390,
                        "value": 13,
                        "raw": "13"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 400,
                    "end": 427,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 400,
                      "end": 426,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 400,
                        "end": 422,
                        "object": {
                          "type": "CallExpression",
                          "start": 400,
                          "end": 415,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 400,
                            "end": 413,
                            "object": {
                              "type": "Identifier",
                              "start": 400,
                              "end": 401,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 402,
                              "end": 413,
                              "name": "getInstance",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 416,
                          "end": 422,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 425,
                        "end": 426,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 436,
                    "end": 464,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 436,
                      "end": 463,
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 436,
                        "end": 458,
                        "object": {
                          "type": "CallExpression",
                          "start": 436,
                          "end": 451,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 436,
                            "end": 449,
                            "object": {
                              "type": "Identifier",
                              "start": 436,
                              "end": 437,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 438,
                              "end": 449,
                              "name": "getInstance",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 452,
                          "end": 458,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 462,
                        "end": 463,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 473,
                    "end": 501,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 473,
                      "end": 500,
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 473,
                        "end": 495,
                        "object": {
                          "type": "CallExpression",
                          "start": 473,
                          "end": 488,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 473,
                            "end": 486,
                            "object": {
                              "type": "Identifier",
                              "start": 473,
                              "end": 474,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 475,
                              "end": 486,
                              "name": "getInstance",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 489,
                          "end": 495,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 499,
                        "end": 500,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 510,
                    "end": 538,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 510,
                      "end": 537,
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 510,
                        "end": 532,
                        "object": {
                          "type": "CallExpression",
                          "start": 510,
                          "end": 525,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 510,
                            "end": 523,
                            "object": {
                              "type": "Identifier",
                              "start": 510,
                              "end": 511,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 512,
                              "end": 523,
                              "name": "getInstance",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 526,
                          "end": 532,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 536,
                        "end": 537,
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 547,
                    "end": 575,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 547,
                      "end": 574,
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 547,
                        "end": 569,
                        "object": {
                          "type": "CallExpression",
                          "start": 547,
                          "end": 562,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 547,
                            "end": 560,
                            "object": {
                              "type": "Identifier",
                              "start": 547,
                              "end": 548,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 549,
                              "end": 560,
                              "name": "getInstance",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 563,
                          "end": 569,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 573,
                        "end": 574,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 584,
                    "end": 613,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 584,
                      "end": 612,
                      "operator": "**=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 584,
                        "end": 606,
                        "object": {
                          "type": "CallExpression",
                          "start": 584,
                          "end": 599,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 584,
                            "end": 597,
                            "object": {
                              "type": "Identifier",
                              "start": 584,
                              "end": 585,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 586,
                              "end": 597,
                              "name": "getInstance",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 600,
                          "end": 606,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 611,
                        "end": 612,
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 622,
                    "end": 650,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 622,
                      "end": 649,
                      "operator": "%=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 622,
                        "end": 644,
                        "object": {
                          "type": "CallExpression",
                          "start": 622,
                          "end": 637,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 622,
                            "end": 635,
                            "object": {
                              "type": "Identifier",
                              "start": 622,
                              "end": 623,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 624,
                              "end": 635,
                              "name": "getInstance",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 638,
                          "end": 644,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 648,
                        "end": 649,
                        "value": 7,
                        "raw": "7"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 659,
                    "end": 688,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 659,
                      "end": 687,
                      "operator": "<<=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 659,
                        "end": 681,
                        "object": {
                          "type": "CallExpression",
                          "start": 659,
                          "end": 674,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 659,
                            "end": 672,
                            "object": {
                              "type": "Identifier",
                              "start": 659,
                              "end": 660,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 661,
                              "end": 672,
                              "name": "getInstance",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 675,
                          "end": 681,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 686,
                        "end": 687,
                        "value": 8,
                        "raw": "8"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 697,
                    "end": 726,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 697,
                      "end": 725,
                      "operator": ">>=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 697,
                        "end": 719,
                        "object": {
                          "type": "CallExpression",
                          "start": 697,
                          "end": 712,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 697,
                            "end": 710,
                            "object": {
                              "type": "Identifier",
                              "start": 697,
                              "end": 698,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 699,
                              "end": 710,
                              "name": "getInstance",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 713,
                          "end": 719,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 724,
                        "end": 725,
                        "value": 9,
                        "raw": "9"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 735,
                    "end": 766,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 735,
                      "end": 765,
                      "operator": ">>>=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 735,
                        "end": 757,
                        "object": {
                          "type": "CallExpression",
                          "start": 735,
                          "end": 750,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 735,
                            "end": 748,
                            "object": {
                              "type": "Identifier",
                              "start": 735,
                              "end": 736,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 737,
                              "end": 748,
                              "name": "getInstance",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 751,
                          "end": 757,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 763,
                        "end": 765,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 775,
                    "end": 804,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 775,
                      "end": 803,
                      "operator": "&=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 775,
                        "end": 797,
                        "object": {
                          "type": "CallExpression",
                          "start": 775,
                          "end": 790,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 775,
                            "end": 788,
                            "object": {
                              "type": "Identifier",
                              "start": 775,
                              "end": 776,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 777,
                              "end": 788,
                              "name": "getInstance",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 791,
                          "end": 797,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 801,
                        "end": 803,
                        "value": 11,
                        "raw": "11"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 813,
                    "end": 842,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 813,
                      "end": 841,
                      "operator": "|=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 813,
                        "end": 835,
                        "object": {
                          "type": "CallExpression",
                          "start": 813,
                          "end": 828,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 813,
                            "end": 826,
                            "object": {
                              "type": "Identifier",
                              "start": 813,
                              "end": 814,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 815,
                              "end": 826,
                              "name": "getInstance",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 829,
                          "end": 835,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 839,
                        "end": 841,
                        "value": 12,
                        "raw": "12"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 851,
                    "end": 880,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 851,
                      "end": 879,
                      "operator": "^=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 851,
                        "end": 873,
                        "object": {
                          "type": "CallExpression",
                          "start": 851,
                          "end": 866,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 851,
                            "end": 864,
                            "object": {
                              "type": "Identifier",
                              "start": 851,
                              "end": 852,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 853,
                              "end": 864,
                              "name": "getInstance",
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
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 867,
                          "end": 873,
                          "name": "field"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 877,
                        "end": 879,
                        "value": 13,
                        "raw": "13"
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 891,
            "end": 943,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 898,
              "end": 909,
              "name": "getInstance",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 909,
              "end": 943,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 912,
                "end": 943,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 922,
                    "end": 937,
                    "argument": {
                      "type": "NewExpression",
                      "start": 929,
                      "end": 936,
                      "callee": {
                        "type": "Identifier",
                        "start": 933,
                        "end": 934,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
