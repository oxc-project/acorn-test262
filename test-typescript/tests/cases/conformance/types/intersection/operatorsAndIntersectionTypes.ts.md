__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 834,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Guid",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 28,
                  "name": "$Guid",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": null,
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
      "type": "TSTypeAliasDeclaration",
      "start": 63,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 76,
        "name": "SerialNo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 99,
                  "name": "$SerialNo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": null,
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
      "type": "FunctionDeclaration",
      "start": 127,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 146,
        "name": "createGuid",
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
                "value": "21EC2020-3AEA-4069-A2DD-08002B30309D",
                "raw": "\"21EC2020-3AEA-4069-A2DD-08002B30309D\""
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 204,
                "end": 208,
                "typeName": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 208,
                  "name": "Guid",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 213,
      "end": 272,
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 236,
        "name": "createSerialNo",
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
                "value": 12345,
                "raw": "12345"
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 261,
                "end": 269,
                "typeName": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 269,
                  "name": "SerialNo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 274,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 312,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 307,
            "name": "map1",
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
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 287,
                        "end": 296,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 288,
                          "end": 296,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 290,
                            "end": 296
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 297,
                      "end": 305,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 299,
                        "end": 305
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 310,
            "end": 312,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 322,
            "name": "guid",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 325,
            "end": 337,
            "callee": {
              "type": "Identifier",
              "start": 325,
              "end": 335,
              "name": "createGuid",
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 339,
      "end": 356,
      "expression": {
        "type": "AssignmentExpression",
        "start": 339,
        "end": 355,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 339,
          "end": 349,
          "object": {
            "type": "Identifier",
            "start": 339,
            "end": 343,
            "name": "map1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 344,
            "end": 348,
            "name": "guid",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 352,
          "end": 355,
          "value": 123,
          "raw": "123"
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 389,
            "end": 418,
            "name": "map2",
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
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 398,
                        "end": 407,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 399,
                          "end": 407,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 401,
                            "end": 407
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 408,
                      "end": 416,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 410,
                        "end": 416
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 421,
            "end": 423,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 429,
            "end": 437,
            "name": "serialNo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 440,
            "end": 456,
            "callee": {
              "type": "Identifier",
              "start": 440,
              "end": 454,
              "name": "createSerialNo",
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 458,
      "end": 483,
      "expression": {
        "type": "AssignmentExpression",
        "start": 458,
        "end": 482,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 458,
          "end": 472,
          "object": {
            "type": "Identifier",
            "start": 458,
            "end": 462,
            "name": "map2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 463,
            "end": 471,
            "name": "serialNo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 475,
          "end": 482,
          "value": "hello",
          "raw": "\"hello\""
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 524,
            "end": 526,
            "name": "s1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 529,
            "end": 545,
            "left": {
              "type": "BinaryExpression",
              "start": 529,
              "end": 539,
              "left": {
                "type": "Literal",
                "start": 529,
                "end": 532,
                "value": "{",
                "raw": "\"{\""
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 535,
                "end": 539,
                "name": "guid",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 542,
              "end": 545,
              "value": "}",
              "raw": "\"}\""
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
      "start": 547,
      "end": 577,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 553,
          "end": 576,
          "id": {
            "type": "Identifier",
            "start": 553,
            "end": 555,
            "name": "s2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 558,
            "end": 576,
            "callee": {
              "type": "MemberExpression",
              "start": 558,
              "end": 574,
              "object": {
                "type": "Identifier",
                "start": 558,
                "end": 562,
                "name": "guid",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 563,
                "end": 574,
                "name": "toLowerCase",
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 584,
            "end": 586,
            "name": "s3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 589,
            "end": 600,
            "left": {
              "type": "Identifier",
              "start": 589,
              "end": 593,
              "name": "guid",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 596,
              "end": 600,
              "name": "guid",
              "typeAnnotation": null,
              "decorators": [],
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
      "start": 602,
      "end": 629,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 628,
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 610,
            "name": "s4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 613,
            "end": 628,
            "left": {
              "type": "Identifier",
              "start": 613,
              "end": 617,
              "name": "guid",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 620,
              "end": 628,
              "name": "serialNo",
              "typeAnnotation": null,
              "decorators": [],
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
      "start": 630,
      "end": 665,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 636,
          "end": 664,
          "id": {
            "type": "Identifier",
            "start": 636,
            "end": 638,
            "name": "s5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 641,
            "end": 664,
            "callee": {
              "type": "MemberExpression",
              "start": 641,
              "end": 661,
              "object": {
                "type": "Identifier",
                "start": 641,
                "end": 649,
                "name": "serialNo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 650,
                "end": 661,
                "name": "toPrecision",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 662,
                "end": 663,
                "value": 0,
                "raw": "0"
              }
            ],
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
      "type": "VariableDeclaration",
      "start": 666,
      "end": 690,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 672,
          "end": 689,
          "id": {
            "type": "Identifier",
            "start": 672,
            "end": 674,
            "name": "n1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 677,
            "end": 689,
            "left": {
              "type": "Identifier",
              "start": 677,
              "end": 685,
              "name": "serialNo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "*",
            "right": {
              "type": "Literal",
              "start": 688,
              "end": 689,
              "value": 3,
              "raw": "3"
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
      "start": 691,
      "end": 722,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 697,
          "end": 721,
          "id": {
            "type": "Identifier",
            "start": 697,
            "end": 699,
            "name": "n2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 702,
            "end": 721,
            "left": {
              "type": "Identifier",
              "start": 702,
              "end": 710,
              "name": "serialNo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 713,
              "end": 721,
              "name": "serialNo",
              "typeAnnotation": null,
              "decorators": [],
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
      "start": 723,
      "end": 746,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 729,
          "end": 745,
          "id": {
            "type": "Identifier",
            "start": 729,
            "end": 731,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 734,
            "end": 745,
            "left": {
              "type": "Identifier",
              "start": 734,
              "end": 738,
              "name": "guid",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 743,
              "end": 745,
              "value": "",
              "raw": "\"\""
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
      "start": 747,
      "end": 772,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 753,
          "end": 771,
          "id": {
            "type": "Identifier",
            "start": 753,
            "end": 755,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 758,
            "end": 771,
            "left": {
              "type": "Identifier",
              "start": 758,
              "end": 762,
              "name": "guid",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 767,
              "end": 771,
              "name": "guid",
              "typeAnnotation": null,
              "decorators": [],
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
      "start": 773,
      "end": 799,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 779,
          "end": 798,
          "id": {
            "type": "Identifier",
            "start": 779,
            "end": 781,
            "name": "b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 784,
            "end": 798,
            "left": {
              "type": "Identifier",
              "start": 784,
              "end": 792,
              "name": "serialNo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 797,
              "end": 798,
              "value": 0,
              "raw": "0"
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
      "start": 800,
      "end": 833,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 806,
          "end": 832,
          "id": {
            "type": "Identifier",
            "start": 806,
            "end": 808,
            "name": "b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 811,
            "end": 832,
            "left": {
              "type": "Identifier",
              "start": 811,
              "end": 819,
              "name": "serialNo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 824,
              "end": 832,
              "name": "serialNo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
