__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 833,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 31,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Guid",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 12,
        "end": 30,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 12,
            "end": 18
          },
          {
            "type": "TSTypeLiteral",
            "start": 21,
            "end": 30,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 23,
                "end": 28,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 28,
                  "decorators": [],
                  "name": "$Guid",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": null
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 63,
      "end": 102,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 76,
        "decorators": [],
        "name": "SerialNo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 79,
        "end": 101,
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 79,
            "end": 85
          },
          {
            "type": "TSTypeLiteral",
            "start": 88,
            "end": 101,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 90,
                "end": 99,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 99,
                  "decorators": [],
                  "name": "$SerialNo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": null
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 127,
      "end": 211,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 149,
        "end": 211,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 155,
            "end": 209,
            "argument": {
              "type": "TSAsExpression",
              "start": 162,
              "end": 208,
              "expression": {
                "type": "Literal",
                "start": 162,
                "end": 200,
                "raw": "\"21EC2020-3AEA-4069-A2DD-08002B30309D\"",
                "value": "21EC2020-3AEA-4069-A2DD-08002B30309D",
                "regex": null,
                "bigint": null
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 204,
                "end": 208,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 208,
                  "decorators": [],
                  "name": "Guid",
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
        "start": 136,
        "end": 146,
        "decorators": [],
        "name": "createGuid",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 213,
      "end": 272,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 239,
        "end": 272,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 245,
            "end": 270,
            "argument": {
              "type": "TSAsExpression",
              "start": 252,
              "end": 269,
              "expression": {
                "type": "Literal",
                "start": 252,
                "end": 257,
                "raw": "12345",
                "value": 12345,
                "regex": null,
                "bigint": null
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 261,
                "end": 269,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 269,
                  "decorators": [],
                  "name": "SerialNo",
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
        "start": 222,
        "end": 236,
        "decorators": [],
        "name": "createSerialNo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 274,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 312,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 307,
            "decorators": [],
            "name": "map1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 307,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 284,
                "end": 307,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 286,
                    "end": 305,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 287,
                        "end": 296,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 288,
                          "end": 296,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 290,
                            "end": 296
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 297,
                      "end": 305,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 299,
                        "end": 305
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 310,
            "end": 312,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 314,
      "end": 338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 337,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 322,
            "decorators": [],
            "name": "guid",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 325,
            "end": 337,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 325,
              "end": 335,
              "decorators": [],
              "name": "createGuid",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 339,
      "end": 356,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 339,
        "end": 355,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 339,
          "end": 349,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 339,
            "end": 343,
            "decorators": [],
            "name": "map1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 344,
            "end": 348,
            "decorators": [],
            "name": "guid",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 352,
          "end": 355,
          "raw": "123",
          "value": 123,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 385,
      "end": 424,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 389,
          "end": 423,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 389,
            "end": 418,
            "decorators": [],
            "name": "map2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 393,
              "end": 418,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 395,
                "end": 418,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 397,
                    "end": 416,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 398,
                        "end": 407,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 399,
                          "end": 407,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 401,
                            "end": 407
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 408,
                      "end": 416,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 410,
                        "end": 416
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 421,
            "end": 423,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 425,
      "end": 457,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 429,
          "end": 456,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 429,
            "end": 437,
            "decorators": [],
            "name": "serialNo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 440,
            "end": 456,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 440,
              "end": 454,
              "decorators": [],
              "name": "createSerialNo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 458,
      "end": 483,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 458,
        "end": 482,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 458,
          "end": 472,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 458,
            "end": 462,
            "decorators": [],
            "name": "map2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 463,
            "end": 471,
            "decorators": [],
            "name": "serialNo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 475,
          "end": 482,
          "raw": "\"hello\"",
          "value": "hello",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 518,
      "end": 546,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 524,
          "end": 545,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 524,
            "end": 526,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 529,
            "end": 545,
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "start": 529,
              "end": 539,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 529,
                "end": 532,
                "raw": "\"{\"",
                "value": "{",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Identifier",
                "start": 535,
                "end": 539,
                "decorators": [],
                "name": "guid",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Literal",
              "start": 542,
              "end": 545,
              "raw": "\"}\"",
              "value": "}",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 547,
      "end": 577,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 553,
          "end": 576,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 553,
            "end": 555,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 558,
            "end": 576,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 558,
              "end": 574,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 558,
                "end": 562,
                "decorators": [],
                "name": "guid",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 563,
                "end": 574,
                "decorators": [],
                "name": "toLowerCase",
                "optional": false,
                "typeAnnotation": null
              }
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
      "type": "VariableDeclaration",
      "start": 578,
      "end": 601,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 584,
          "end": 600,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 584,
            "end": 586,
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 589,
            "end": 600,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 589,
              "end": 593,
              "decorators": [],
              "name": "guid",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 596,
              "end": 600,
              "decorators": [],
              "name": "guid",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 602,
      "end": 629,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 628,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 610,
            "decorators": [],
            "name": "s4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 613,
            "end": 628,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 613,
              "end": 617,
              "decorators": [],
              "name": "guid",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 620,
              "end": 628,
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 630,
      "end": 665,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 636,
          "end": 664,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 636,
            "end": 638,
            "decorators": [],
            "name": "s5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 641,
            "end": 664,
            "arguments": [
              {
                "type": "Literal",
                "start": 662,
                "end": 663,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 641,
              "end": 661,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 641,
                "end": 649,
                "decorators": [],
                "name": "serialNo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 650,
                "end": 661,
                "decorators": [],
                "name": "toPrecision",
                "optional": false,
                "typeAnnotation": null
              }
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
      "type": "VariableDeclaration",
      "start": 666,
      "end": 690,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 672,
          "end": 689,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 672,
            "end": 674,
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 677,
            "end": 689,
            "operator": "*",
            "left": {
              "type": "Identifier",
              "start": 677,
              "end": 685,
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 688,
              "end": 689,
              "raw": "3",
              "value": 3,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 691,
      "end": 722,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 697,
          "end": 721,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 697,
            "end": 699,
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 702,
            "end": 721,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 702,
              "end": 710,
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 713,
              "end": 721,
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 723,
      "end": 746,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 729,
          "end": 745,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 729,
            "end": 731,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 734,
            "end": 745,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 734,
              "end": 738,
              "decorators": [],
              "name": "guid",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 743,
              "end": 745,
              "raw": "\"\"",
              "value": "",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 747,
      "end": 772,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 753,
          "end": 771,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 753,
            "end": 755,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 758,
            "end": 771,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 758,
              "end": 762,
              "decorators": [],
              "name": "guid",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 767,
              "end": 771,
              "decorators": [],
              "name": "guid",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 773,
      "end": 799,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 779,
          "end": 798,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 779,
            "end": 781,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 784,
            "end": 798,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 784,
              "end": 792,
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 797,
              "end": 798,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 800,
      "end": 833,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 806,
          "end": 832,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 806,
            "end": 808,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 811,
            "end": 832,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 811,
              "end": 819,
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 824,
              "end": 832,
              "decorators": [],
              "name": "serialNo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
