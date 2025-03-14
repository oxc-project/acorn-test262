__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 40,
  "end": 895,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 40,
      "end": 55,
      "body": {
        "type": "TSInterfaceBody",
        "start": 52,
        "end": 55,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "decorators": [],
        "name": "F",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 106,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 81,
        "end": 106,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 87,
            "end": 104,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 98,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 98,
              "end": 104,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 104,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 67,
        "decorators": [],
        "name": "Class",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 79,
          "end": 80,
          "expression": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "F",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 108,
      "end": 189,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 189,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 156,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 146,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 155,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 148,
                "end": 155
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 161,
            "end": 187,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 172,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 172,
              "end": 187,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 175,
                "end": 187,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 177,
                    "end": 185,
                    "expression": {
                      "type": "CallExpression",
                      "start": 177,
                      "end": 184,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 177,
                        "end": 182
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 122,
        "decorators": [],
        "name": "SubClass",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 131,
        "end": 136,
        "decorators": [],
        "name": "Class",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 191,
      "end": 254,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 212,
        "end": 254,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 218,
            "end": 230,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 221,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 230,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 223,
                "end": 230
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 235,
            "end": 252,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 235,
              "end": 246,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 246,
              "end": 252,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 249,
                "end": 252,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 198,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 210,
          "end": 211,
          "expression": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "decorators": [],
            "name": "F",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 256,
      "end": 339,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 277,
        "end": 339,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 283,
            "end": 294,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 286,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 286,
              "end": 294,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 288,
                "end": 294
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 299,
            "end": 337,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 299,
              "end": 310,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 310,
              "end": 337,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 313,
                "end": 337,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 323,
                    "end": 331,
                    "expression": {
                      "type": "CallExpression",
                      "start": 323,
                      "end": 330,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 323,
                        "end": 328
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 266,
        "decorators": [],
        "name": "SubD",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 275,
        "end": 276,
        "decorators": [],
        "name": "D",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 342,
      "end": 400,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 397,
        "end": 400,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 351,
        "end": 353,
        "decorators": [],
        "name": "d0",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 371,
          "end": 395,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 371,
            "end": 374,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 372,
                "end": 373,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 373,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 373,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ]
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 377,
            "end": 395,
            "properties": [
              {
                "type": "Property",
                "start": 379,
                "end": 393,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 380,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 382,
                  "end": 393,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 391,
                    "decorators": [],
                    "name": "Class",
                    "optional": false
                  }
                }
              }
            ]
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 353,
        "end": 370,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 354,
            "end": 369,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 364,
              "end": 369,
              "typeName": {
                "type": "Identifier",
                "start": 364,
                "end": 369,
                "decorators": [],
                "name": "Class",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 354,
              "end": 355,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 401,
      "end": 444,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 441,
        "end": 444,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 410,
        "end": 412,
        "decorators": [],
        "name": "d1",
        "optional": false
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 426,
          "end": 439,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 427,
              "end": 428,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 427,
                "end": 428,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 427,
                "end": 428,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 429,
            "end": 439,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 431,
              "end": 439,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 433,
                  "end": 437,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 434,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 434,
                    "end": 437,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 436,
                      "end": 437,
                      "typeName": {
                        "type": "Identifier",
                        "start": 436,
                        "end": 437,
                        "decorators": [],
                        "name": "F",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 412,
        "end": 425,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 413,
            "end": 424,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 423,
              "end": 424,
              "typeName": {
                "type": "Identifier",
                "start": 423,
                "end": 424,
                "decorators": [],
                "name": "F",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 413,
              "end": 414,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 445,
      "end": 496,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 493,
        "end": 496,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 454,
        "end": 456,
        "decorators": [],
        "name": "d2",
        "optional": false
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 474,
          "end": 491,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 475,
              "end": 476,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 477,
            "end": 491,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 479,
              "end": 491,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 481,
                  "end": 489,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 481,
                    "end": 482,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 482,
                    "end": 489,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 484,
                      "end": 489,
                      "typeName": {
                        "type": "Identifier",
                        "start": 484,
                        "end": 489,
                        "decorators": [],
                        "name": "Class",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 456,
        "end": 473,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 457,
            "end": 472,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 467,
              "end": 472,
              "typeName": {
                "type": "Identifier",
                "start": 467,
                "end": 472,
                "decorators": [],
                "name": "Class",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 457,
              "end": 458,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 497,
      "end": 540,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 537,
        "end": 540,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 506,
        "end": 508,
        "decorators": [],
        "name": "d3",
        "optional": false
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 522,
          "end": 535,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 523,
              "end": 524,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 523,
                "end": 524,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 523,
                "end": 524,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 525,
            "end": 535,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 527,
              "end": 535,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 529,
                  "end": 533,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 529,
                    "end": 530,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 530,
                    "end": 533,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 532,
                      "end": 533,
                      "typeName": {
                        "type": "Identifier",
                        "start": 532,
                        "end": 533,
                        "decorators": [],
                        "name": "D",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 508,
        "end": 521,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 509,
            "end": 520,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 519,
              "end": 520,
              "typeName": {
                "type": "Identifier",
                "start": 519,
                "end": 520,
                "decorators": [],
                "name": "D",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 509,
              "end": 510,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 541,
      "end": 591,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 588,
        "end": 591,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 550,
        "end": 552,
        "decorators": [],
        "name": "d4",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 566,
          "end": 586,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 566,
            "end": 569,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 567,
                "end": 568,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 567,
                  "end": 568,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 567,
                  "end": 568,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              }
            ]
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 572,
            "end": 586,
            "properties": [
              {
                "type": "Property",
                "start": 574,
                "end": 584,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 574,
                  "end": 575,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 577,
                  "end": 584,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 582,
                    "decorators": [],
                    "name": "D",
                    "optional": false
                  }
                }
              }
            ]
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 552,
        "end": 565,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 553,
            "end": 564,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 563,
              "end": 564,
              "typeName": {
                "type": "Identifier",
                "start": 563,
                "end": 564,
                "decorators": [],
                "name": "D",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 553,
              "end": 554,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 593,
      "end": 615,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 597,
          "end": 614,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 597,
            "end": 600,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 603,
            "end": 614,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 607,
              "end": 612,
              "decorators": [],
              "name": "Class",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 616,
      "end": 629,
      "expression": {
        "type": "CallExpression",
        "start": 616,
        "end": 628,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 619,
            "end": 627,
            "properties": [
              {
                "type": "Property",
                "start": 621,
                "end": 625,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 621,
                  "end": 622,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 624,
                  "end": 625,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 616,
          "end": 618,
          "decorators": [],
          "name": "d0",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 630,
      "end": 644,
      "expression": {
        "type": "CallExpression",
        "start": 630,
        "end": 643,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 633,
            "end": 642,
            "properties": [
              {
                "type": "Property",
                "start": 635,
                "end": 640,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 636,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 638,
                  "end": 640,
                  "properties": []
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 630,
          "end": 632,
          "decorators": [],
          "name": "d0",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 645,
      "end": 665,
      "expression": {
        "type": "CallExpression",
        "start": 645,
        "end": 664,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 648,
            "end": 663,
            "properties": [
              {
                "type": "Property",
                "start": 650,
                "end": 661,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 651,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 653,
                  "end": 661,
                  "raw": "\"string\"",
                  "value": "string"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 645,
          "end": 647,
          "decorators": [],
          "name": "d0",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 667,
      "end": 690,
      "expression": {
        "type": "CallExpression",
        "start": 667,
        "end": 689,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 670,
            "end": 688,
            "properties": [
              {
                "type": "Property",
                "start": 672,
                "end": 686,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 672,
                  "end": 673,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 675,
                  "end": 686,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 679,
                    "end": 684,
                    "decorators": [],
                    "name": "Class",
                    "optional": false
                  }
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 667,
          "end": 669,
          "decorators": [],
          "name": "d1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 691,
      "end": 705,
      "expression": {
        "type": "CallExpression",
        "start": 691,
        "end": 704,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 694,
            "end": 703,
            "properties": [
              {
                "type": "Property",
                "start": 696,
                "end": 701,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 696,
                  "end": 697,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 699,
                  "end": 701,
                  "properties": []
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 691,
          "end": 693,
          "decorators": [],
          "name": "d1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 706,
      "end": 726,
      "expression": {
        "type": "CallExpression",
        "start": 706,
        "end": 725,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 709,
            "end": 724,
            "properties": [
              {
                "type": "Property",
                "start": 711,
                "end": 722,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 711,
                  "end": 712,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 714,
                  "end": 722,
                  "raw": "\"string\"",
                  "value": "string"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 706,
          "end": 708,
          "decorators": [],
          "name": "d1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 728,
      "end": 754,
      "expression": {
        "type": "CallExpression",
        "start": 728,
        "end": 753,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 731,
            "end": 752,
            "properties": [
              {
                "type": "Property",
                "start": 733,
                "end": 750,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 733,
                  "end": 734,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 736,
                  "end": 750,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 740,
                    "end": 748,
                    "decorators": [],
                    "name": "SubClass",
                    "optional": false
                  }
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 728,
          "end": 730,
          "decorators": [],
          "name": "d2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 755,
      "end": 769,
      "expression": {
        "type": "CallExpression",
        "start": 755,
        "end": 768,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 758,
            "end": 767,
            "properties": [
              {
                "type": "Property",
                "start": 760,
                "end": 765,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 760,
                  "end": 761,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 763,
                  "end": 765,
                  "properties": []
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 755,
          "end": 757,
          "decorators": [],
          "name": "d2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 771,
      "end": 793,
      "expression": {
        "type": "CallExpression",
        "start": 771,
        "end": 792,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 774,
            "end": 791,
            "properties": [
              {
                "type": "Property",
                "start": 776,
                "end": 789,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 776,
                  "end": 777,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 779,
                  "end": 789,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 783,
                    "end": 787,
                    "decorators": [],
                    "name": "SubD",
                    "optional": false
                  }
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 771,
          "end": 773,
          "decorators": [],
          "name": "d3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 794,
      "end": 820,
      "expression": {
        "type": "CallExpression",
        "start": 794,
        "end": 819,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 797,
            "end": 818,
            "properties": [
              {
                "type": "Property",
                "start": 799,
                "end": 816,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 799,
                  "end": 800,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 802,
                  "end": 816,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 806,
                    "end": 814,
                    "decorators": [],
                    "name": "SubClass",
                    "optional": false
                  }
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 794,
          "end": 796,
          "decorators": [],
          "name": "d3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 830,
      "end": 853,
      "expression": {
        "type": "CallExpression",
        "start": 830,
        "end": 852,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 833,
            "end": 851,
            "properties": [
              {
                "type": "Property",
                "start": 835,
                "end": 849,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 836,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 838,
                  "end": 849,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 842,
                    "end": 847,
                    "decorators": [],
                    "name": "Class",
                    "optional": false
                  }
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 830,
          "end": 832,
          "decorators": [],
          "name": "d3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 854,
      "end": 861,
      "expression": {
        "type": "CallExpression",
        "start": 854,
        "end": 860,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 857,
            "end": 859,
            "properties": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 854,
          "end": 856,
          "decorators": [],
          "name": "d3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 862,
      "end": 875,
      "expression": {
        "type": "CallExpression",
        "start": 862,
        "end": 874,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 865,
            "end": 873,
            "properties": [
              {
                "type": "Property",
                "start": 867,
                "end": 871,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 867,
                  "end": 868,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 870,
                  "end": 871,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 862,
          "end": 864,
          "decorators": [],
          "name": "d3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 876,
      "end": 895,
      "expression": {
        "type": "CallExpression",
        "start": 876,
        "end": 894,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 879,
            "end": 893,
            "properties": [
              {
                "type": "Property",
                "start": 881,
                "end": 891,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 881,
                  "end": 882,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 884,
                  "end": 891,
                  "raw": "\"world\"",
                  "value": "world"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 876,
          "end": 878,
          "decorators": [],
          "name": "d3",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
