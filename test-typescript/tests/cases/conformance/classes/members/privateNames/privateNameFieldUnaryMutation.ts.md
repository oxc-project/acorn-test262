__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1921,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 1920,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 1920,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 33,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 19,
              "name": "test"
            },
            "value": {
              "type": "Literal",
              "start": 30,
              "end": 32,
              "value": 24,
              "raw": "24"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 764,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 49,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 764,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 764,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 62,
                    "end": 75,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 62,
                      "end": 74,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 62,
                        "end": 72,
                        "object": {
                          "type": "ThisExpression",
                          "start": 62,
                          "end": 66
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 67,
                          "end": 72,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 84,
                    "end": 97,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 84,
                      "end": 96,
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 84,
                        "end": 94,
                        "object": {
                          "type": "ThisExpression",
                          "start": 84,
                          "end": 88
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 89,
                          "end": 94,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 106,
                    "end": 119,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 106,
                      "end": 118,
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 108,
                        "end": 118,
                        "object": {
                          "type": "ThisExpression",
                          "start": 108,
                          "end": 112
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 113,
                          "end": 118,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 141,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 128,
                      "end": 140,
                      "operator": "--",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 130,
                        "end": 140,
                        "object": {
                          "type": "ThisExpression",
                          "start": 130,
                          "end": 134
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 135,
                          "end": 140,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 150,
                    "end": 173,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 156,
                        "end": 172,
                        "id": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 157,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 160,
                          "end": 172,
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 160,
                            "end": 170,
                            "object": {
                              "type": "ThisExpression",
                              "start": 160,
                              "end": 164
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 165,
                              "end": 170,
                              "name": "test"
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 182,
                    "end": 205,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 188,
                        "end": 204,
                        "id": {
                          "type": "Identifier",
                          "start": 188,
                          "end": 189,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 192,
                          "end": 204,
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 192,
                            "end": 202,
                            "object": {
                              "type": "ThisExpression",
                              "start": 192,
                              "end": 196
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 197,
                              "end": 202,
                              "name": "test"
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 214,
                    "end": 237,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 220,
                        "end": 236,
                        "id": {
                          "type": "Identifier",
                          "start": 220,
                          "end": 221,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 224,
                          "end": 236,
                          "operator": "++",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 226,
                            "end": 236,
                            "object": {
                              "type": "ThisExpression",
                              "start": 226,
                              "end": 230
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 231,
                              "end": 236,
                              "name": "test"
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 246,
                    "end": 269,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 252,
                        "end": 268,
                        "id": {
                          "type": "Identifier",
                          "start": 252,
                          "end": 253,
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 256,
                          "end": 268,
                          "operator": "--",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 258,
                            "end": 268,
                            "object": {
                              "type": "ThisExpression",
                              "start": 258,
                              "end": 262
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 263,
                              "end": 268,
                              "name": "test"
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ForStatement",
                    "start": 278,
                    "end": 332,
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 283,
                      "end": 297,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 283,
                        "end": 293,
                        "object": {
                          "type": "ThisExpression",
                          "start": 283,
                          "end": 287
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 288,
                          "end": 293,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 296,
                        "end": 297,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 299,
                      "end": 314,
                      "left": {
                        "type": "MemberExpression",
                        "start": 299,
                        "end": 309,
                        "object": {
                          "type": "ThisExpression",
                          "start": 299,
                          "end": 303
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 304,
                          "end": 309,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "start": 312,
                        "end": 314,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 316,
                      "end": 328,
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 318,
                        "end": 328,
                        "object": {
                          "type": "ThisExpression",
                          "start": 318,
                          "end": 322
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 323,
                          "end": 328,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 330,
                      "end": 332,
                      "body": []
                    }
                  },
                  {
                    "type": "ForStatement",
                    "start": 341,
                    "end": 395,
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 346,
                      "end": 360,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 346,
                        "end": 356,
                        "object": {
                          "type": "ThisExpression",
                          "start": 346,
                          "end": 350
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 351,
                          "end": 356,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 359,
                        "end": 360,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 362,
                      "end": 377,
                      "left": {
                        "type": "MemberExpression",
                        "start": 362,
                        "end": 372,
                        "object": {
                          "type": "ThisExpression",
                          "start": 362,
                          "end": 366
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 367,
                          "end": 372,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "start": 375,
                        "end": 377,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 379,
                      "end": 391,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 379,
                        "end": 389,
                        "object": {
                          "type": "ThisExpression",
                          "start": 379,
                          "end": 383
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 384,
                          "end": 389,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 393,
                      "end": 395,
                      "body": []
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 405,
                    "end": 420,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 405,
                      "end": 419,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 406,
                        "end": 416,
                        "object": {
                          "type": "ThisExpression",
                          "start": 406,
                          "end": 410
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 411,
                          "end": 416,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 429,
                    "end": 444,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 429,
                      "end": 443,
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 430,
                        "end": 440,
                        "object": {
                          "type": "ThisExpression",
                          "start": 430,
                          "end": 434
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 435,
                          "end": 440,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 453,
                    "end": 468,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 453,
                      "end": 467,
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 456,
                        "end": 466,
                        "object": {
                          "type": "ThisExpression",
                          "start": 456,
                          "end": 460
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 461,
                          "end": 466,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 477,
                    "end": 492,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 477,
                      "end": 491,
                      "operator": "--",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 480,
                        "end": 490,
                        "object": {
                          "type": "ThisExpression",
                          "start": 480,
                          "end": 484
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 485,
                          "end": 490,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 501,
                    "end": 526,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 507,
                        "end": 525,
                        "id": {
                          "type": "Identifier",
                          "start": 507,
                          "end": 508,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 511,
                          "end": 525,
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 512,
                            "end": 522,
                            "object": {
                              "type": "ThisExpression",
                              "start": 512,
                              "end": 516
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 517,
                              "end": 522,
                              "name": "test"
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 535,
                    "end": 560,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 541,
                        "end": 559,
                        "id": {
                          "type": "Identifier",
                          "start": 541,
                          "end": 542,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 545,
                          "end": 559,
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 546,
                            "end": 556,
                            "object": {
                              "type": "ThisExpression",
                              "start": 546,
                              "end": 550
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 551,
                              "end": 556,
                              "name": "test"
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 569,
                    "end": 594,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 575,
                        "end": 593,
                        "id": {
                          "type": "Identifier",
                          "start": 575,
                          "end": 576,
                          "name": "g",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 579,
                          "end": 593,
                          "operator": "++",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 582,
                            "end": 592,
                            "object": {
                              "type": "ThisExpression",
                              "start": 582,
                              "end": 586
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 587,
                              "end": 592,
                              "name": "test"
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 603,
                    "end": 628,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 609,
                        "end": 627,
                        "id": {
                          "type": "Identifier",
                          "start": 609,
                          "end": 610,
                          "name": "h",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 613,
                          "end": 627,
                          "operator": "--",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 616,
                            "end": 626,
                            "object": {
                              "type": "ThisExpression",
                              "start": 616,
                              "end": 620
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 621,
                              "end": 626,
                              "name": "test"
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ForStatement",
                    "start": 637,
                    "end": 693,
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 642,
                      "end": 656,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 642,
                        "end": 652,
                        "object": {
                          "type": "ThisExpression",
                          "start": 642,
                          "end": 646
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 647,
                          "end": 652,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 655,
                        "end": 656,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 658,
                      "end": 673,
                      "left": {
                        "type": "MemberExpression",
                        "start": 658,
                        "end": 668,
                        "object": {
                          "type": "ThisExpression",
                          "start": 658,
                          "end": 662
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 663,
                          "end": 668,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "start": 671,
                        "end": 673,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 675,
                      "end": 689,
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 678,
                        "end": 688,
                        "object": {
                          "type": "ThisExpression",
                          "start": 678,
                          "end": 682
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 683,
                          "end": 688,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 691,
                      "end": 693,
                      "body": []
                    }
                  },
                  {
                    "type": "ForStatement",
                    "start": 702,
                    "end": 758,
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 707,
                      "end": 721,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 707,
                        "end": 717,
                        "object": {
                          "type": "ThisExpression",
                          "start": 707,
                          "end": 711
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 712,
                          "end": 717,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 720,
                        "end": 721,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 723,
                      "end": 738,
                      "left": {
                        "type": "MemberExpression",
                        "start": 723,
                        "end": 733,
                        "object": {
                          "type": "ThisExpression",
                          "start": 723,
                          "end": 727
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 728,
                          "end": 733,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "start": 736,
                        "end": 738,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 740,
                      "end": 754,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 741,
                        "end": 751,
                        "object": {
                          "type": "ThisExpression",
                          "start": 741,
                          "end": 745
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 746,
                          "end": 751,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 756,
                      "end": 758,
                      "body": []
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
          },
          {
            "type": "MethodDefinition",
            "start": 769,
            "end": 1880,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 769,
              "end": 773,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 773,
              "end": 1880,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 776,
                "end": 1880,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 786,
                    "end": 813,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 786,
                      "end": 812,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 786,
                        "end": 810,
                        "object": {
                          "type": "CallExpression",
                          "start": 786,
                          "end": 804,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 786,
                            "end": 802,
                            "object": {
                              "type": "ThisExpression",
                              "start": 786,
                              "end": 790
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 791,
                              "end": 802,
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
                          "start": 805,
                          "end": 810,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 822,
                    "end": 849,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 822,
                      "end": 848,
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 822,
                        "end": 846,
                        "object": {
                          "type": "CallExpression",
                          "start": 822,
                          "end": 840,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 822,
                            "end": 838,
                            "object": {
                              "type": "ThisExpression",
                              "start": 822,
                              "end": 826
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 827,
                              "end": 838,
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
                          "start": 841,
                          "end": 846,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 858,
                    "end": 885,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 858,
                      "end": 884,
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 860,
                        "end": 884,
                        "object": {
                          "type": "CallExpression",
                          "start": 860,
                          "end": 878,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 860,
                            "end": 876,
                            "object": {
                              "type": "ThisExpression",
                              "start": 860,
                              "end": 864
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 865,
                              "end": 876,
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
                          "start": 879,
                          "end": 884,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 894,
                    "end": 921,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 894,
                      "end": 920,
                      "operator": "--",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 896,
                        "end": 920,
                        "object": {
                          "type": "CallExpression",
                          "start": 896,
                          "end": 914,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 896,
                            "end": 912,
                            "object": {
                              "type": "ThisExpression",
                              "start": 896,
                              "end": 900
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 901,
                              "end": 912,
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
                          "start": 915,
                          "end": 920,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 930,
                    "end": 967,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 936,
                        "end": 966,
                        "id": {
                          "type": "Identifier",
                          "start": 936,
                          "end": 937,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 940,
                          "end": 966,
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 940,
                            "end": 964,
                            "object": {
                              "type": "CallExpression",
                              "start": 940,
                              "end": 958,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 940,
                                "end": 956,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 940,
                                  "end": 944
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 945,
                                  "end": 956,
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
                              "start": 959,
                              "end": 964,
                              "name": "test"
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 976,
                    "end": 1013,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 982,
                        "end": 1012,
                        "id": {
                          "type": "Identifier",
                          "start": 982,
                          "end": 983,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 986,
                          "end": 1012,
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 986,
                            "end": 1010,
                            "object": {
                              "type": "CallExpression",
                              "start": 986,
                              "end": 1004,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 986,
                                "end": 1002,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 986,
                                  "end": 990
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 991,
                                  "end": 1002,
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
                              "start": 1005,
                              "end": 1010,
                              "name": "test"
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1022,
                    "end": 1059,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1028,
                        "end": 1058,
                        "id": {
                          "type": "Identifier",
                          "start": 1028,
                          "end": 1029,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 1032,
                          "end": 1058,
                          "operator": "++",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 1034,
                            "end": 1058,
                            "object": {
                              "type": "CallExpression",
                              "start": 1034,
                              "end": 1052,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1034,
                                "end": 1050,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1034,
                                  "end": 1038
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1039,
                                  "end": 1050,
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
                              "start": 1053,
                              "end": 1058,
                              "name": "test"
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1068,
                    "end": 1105,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1074,
                        "end": 1104,
                        "id": {
                          "type": "Identifier",
                          "start": 1074,
                          "end": 1075,
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 1078,
                          "end": 1104,
                          "operator": "--",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 1080,
                            "end": 1104,
                            "object": {
                              "type": "CallExpression",
                              "start": 1080,
                              "end": 1098,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1080,
                                "end": 1096,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1080,
                                  "end": 1084
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1085,
                                  "end": 1096,
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
                              "start": 1099,
                              "end": 1104,
                              "name": "test"
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ForStatement",
                    "start": 1114,
                    "end": 1210,
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 1119,
                      "end": 1147,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1119,
                        "end": 1143,
                        "object": {
                          "type": "CallExpression",
                          "start": 1119,
                          "end": 1137,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1119,
                            "end": 1135,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1119,
                              "end": 1123
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1124,
                              "end": 1135,
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
                          "start": 1138,
                          "end": 1143,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1146,
                        "end": 1147,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1149,
                      "end": 1178,
                      "left": {
                        "type": "MemberExpression",
                        "start": 1149,
                        "end": 1173,
                        "object": {
                          "type": "CallExpression",
                          "start": 1149,
                          "end": 1167,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1149,
                            "end": 1165,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1149,
                              "end": 1153
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1154,
                              "end": 1165,
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
                          "start": 1168,
                          "end": 1173,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "start": 1176,
                        "end": 1178,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 1180,
                      "end": 1206,
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1182,
                        "end": 1206,
                        "object": {
                          "type": "CallExpression",
                          "start": 1182,
                          "end": 1200,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1182,
                            "end": 1198,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1182,
                              "end": 1186
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1187,
                              "end": 1198,
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
                          "start": 1201,
                          "end": 1206,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 1208,
                      "end": 1210,
                      "body": []
                    }
                  },
                  {
                    "type": "ForStatement",
                    "start": 1219,
                    "end": 1315,
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 1224,
                      "end": 1252,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1224,
                        "end": 1248,
                        "object": {
                          "type": "CallExpression",
                          "start": 1224,
                          "end": 1242,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1224,
                            "end": 1240,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1224,
                              "end": 1228
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1229,
                              "end": 1240,
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
                          "start": 1243,
                          "end": 1248,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1251,
                        "end": 1252,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1254,
                      "end": 1283,
                      "left": {
                        "type": "MemberExpression",
                        "start": 1254,
                        "end": 1278,
                        "object": {
                          "type": "CallExpression",
                          "start": 1254,
                          "end": 1272,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1254,
                            "end": 1270,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1254,
                              "end": 1258
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1259,
                              "end": 1270,
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
                          "start": 1273,
                          "end": 1278,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "start": 1281,
                        "end": 1283,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 1285,
                      "end": 1311,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1285,
                        "end": 1309,
                        "object": {
                          "type": "CallExpression",
                          "start": 1285,
                          "end": 1303,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1285,
                            "end": 1301,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1285,
                              "end": 1289
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1290,
                              "end": 1301,
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
                          "start": 1304,
                          "end": 1309,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 1313,
                      "end": 1315,
                      "body": []
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1325,
                    "end": 1354,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 1325,
                      "end": 1353,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1326,
                        "end": 1350,
                        "object": {
                          "type": "CallExpression",
                          "start": 1326,
                          "end": 1344,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1326,
                            "end": 1342,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1326,
                              "end": 1330
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1331,
                              "end": 1342,
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
                          "start": 1345,
                          "end": 1350,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1363,
                    "end": 1392,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 1363,
                      "end": 1391,
                      "operator": "--",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1364,
                        "end": 1388,
                        "object": {
                          "type": "CallExpression",
                          "start": 1364,
                          "end": 1382,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1364,
                            "end": 1380,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1364,
                              "end": 1368
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1369,
                              "end": 1380,
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
                          "start": 1383,
                          "end": 1388,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1401,
                    "end": 1430,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 1401,
                      "end": 1429,
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1404,
                        "end": 1428,
                        "object": {
                          "type": "CallExpression",
                          "start": 1404,
                          "end": 1422,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1404,
                            "end": 1420,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1404,
                              "end": 1408
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1409,
                              "end": 1420,
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
                          "start": 1423,
                          "end": 1428,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1439,
                    "end": 1468,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 1439,
                      "end": 1467,
                      "operator": "--",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1442,
                        "end": 1466,
                        "object": {
                          "type": "CallExpression",
                          "start": 1442,
                          "end": 1460,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1442,
                            "end": 1458,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1442,
                              "end": 1446
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1447,
                              "end": 1458,
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
                          "start": 1461,
                          "end": 1466,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1477,
                    "end": 1516,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1483,
                        "end": 1515,
                        "id": {
                          "type": "Identifier",
                          "start": 1483,
                          "end": 1484,
                          "name": "e",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 1487,
                          "end": 1515,
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 1488,
                            "end": 1512,
                            "object": {
                              "type": "CallExpression",
                              "start": 1488,
                              "end": 1506,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1488,
                                "end": 1504,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1488,
                                  "end": 1492
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1493,
                                  "end": 1504,
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
                              "start": 1507,
                              "end": 1512,
                              "name": "test"
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1525,
                    "end": 1564,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1531,
                        "end": 1563,
                        "id": {
                          "type": "Identifier",
                          "start": 1531,
                          "end": 1532,
                          "name": "f",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 1535,
                          "end": 1563,
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 1536,
                            "end": 1560,
                            "object": {
                              "type": "CallExpression",
                              "start": 1536,
                              "end": 1554,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1536,
                                "end": 1552,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1536,
                                  "end": 1540
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1541,
                                  "end": 1552,
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
                              "start": 1555,
                              "end": 1560,
                              "name": "test"
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1573,
                    "end": 1612,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1579,
                        "end": 1611,
                        "id": {
                          "type": "Identifier",
                          "start": 1579,
                          "end": 1580,
                          "name": "g",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 1583,
                          "end": 1611,
                          "operator": "++",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 1586,
                            "end": 1610,
                            "object": {
                              "type": "CallExpression",
                              "start": 1586,
                              "end": 1604,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1586,
                                "end": 1602,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1586,
                                  "end": 1590
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1591,
                                  "end": 1602,
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
                              "start": 1605,
                              "end": 1610,
                              "name": "test"
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1621,
                    "end": 1660,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1627,
                        "end": 1659,
                        "id": {
                          "type": "Identifier",
                          "start": 1627,
                          "end": 1628,
                          "name": "h",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 1631,
                          "end": 1659,
                          "operator": "--",
                          "prefix": true,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 1634,
                            "end": 1658,
                            "object": {
                              "type": "CallExpression",
                              "start": 1634,
                              "end": 1652,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1634,
                                "end": 1650,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1634,
                                  "end": 1638
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1639,
                                  "end": 1650,
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
                              "start": 1653,
                              "end": 1658,
                              "name": "test"
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ForStatement",
                    "start": 1669,
                    "end": 1767,
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 1674,
                      "end": 1702,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1674,
                        "end": 1698,
                        "object": {
                          "type": "CallExpression",
                          "start": 1674,
                          "end": 1692,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1674,
                            "end": 1690,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1674,
                              "end": 1678
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1679,
                              "end": 1690,
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
                          "start": 1693,
                          "end": 1698,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1701,
                        "end": 1702,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1704,
                      "end": 1733,
                      "left": {
                        "type": "MemberExpression",
                        "start": 1704,
                        "end": 1728,
                        "object": {
                          "type": "CallExpression",
                          "start": 1704,
                          "end": 1722,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1704,
                            "end": 1720,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1704,
                              "end": 1708
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1709,
                              "end": 1720,
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
                          "start": 1723,
                          "end": 1728,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "start": 1731,
                        "end": 1733,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 1735,
                      "end": 1763,
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1738,
                        "end": 1762,
                        "object": {
                          "type": "CallExpression",
                          "start": 1738,
                          "end": 1756,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1738,
                            "end": 1754,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1738,
                              "end": 1742
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1743,
                              "end": 1754,
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
                          "start": 1757,
                          "end": 1762,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 1765,
                      "end": 1767,
                      "body": []
                    }
                  },
                  {
                    "type": "ForStatement",
                    "start": 1776,
                    "end": 1874,
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 1781,
                      "end": 1809,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1781,
                        "end": 1805,
                        "object": {
                          "type": "CallExpression",
                          "start": 1781,
                          "end": 1799,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1781,
                            "end": 1797,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1781,
                              "end": 1785
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1786,
                              "end": 1797,
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
                          "start": 1800,
                          "end": 1805,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1808,
                        "end": 1809,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1811,
                      "end": 1840,
                      "left": {
                        "type": "MemberExpression",
                        "start": 1811,
                        "end": 1835,
                        "object": {
                          "type": "CallExpression",
                          "start": 1811,
                          "end": 1829,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1811,
                            "end": 1827,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1811,
                              "end": 1815
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1816,
                              "end": 1827,
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
                          "start": 1830,
                          "end": 1835,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "start": 1838,
                        "end": 1840,
                        "value": 10,
                        "raw": "10"
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 1842,
                      "end": 1870,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1843,
                        "end": 1867,
                        "object": {
                          "type": "CallExpression",
                          "start": 1843,
                          "end": 1861,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1843,
                            "end": 1859,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1843,
                              "end": 1847
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1848,
                              "end": 1859,
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
                          "start": 1862,
                          "end": 1867,
                          "name": "test"
                        },
                        "computed": false,
                        "optional": false
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 1872,
                      "end": 1874,
                      "body": []
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
          },
          {
            "type": "MethodDefinition",
            "start": 1885,
            "end": 1918,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1885,
              "end": 1896,
              "name": "getInstance",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1896,
              "end": 1918,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1899,
                "end": 1918,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1901,
                    "end": 1916,
                    "argument": {
                      "type": "NewExpression",
                      "start": 1908,
                      "end": 1915,
                      "callee": {
                        "type": "Identifier",
                        "start": 1912,
                        "end": 1913,
                        "name": "C",
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
