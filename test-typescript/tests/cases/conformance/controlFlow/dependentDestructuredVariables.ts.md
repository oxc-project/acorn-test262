__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 9404,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 88,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 18,
        "end": 87,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 20,
            "end": 50,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 22,
                "end": 32,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 26,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 26,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 28,
                    "end": 31,
                    "literal": {
                      "type": "Literal",
                      "start": 28,
                      "end": 31,
                      "raw": "'A'",
                      "value": "A",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 33,
                "end": 48,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 40,
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 48,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 42,
                    "end": 48
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 57,
            "end": 87,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 59,
                "end": 69,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 63,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 63,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 65,
                    "end": 68,
                    "literal": {
                      "type": "Literal",
                      "start": 65,
                      "end": 68,
                      "raw": "'B'",
                      "value": "B",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 70,
                "end": 85,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 77,
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 77,
                  "end": 85,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 79,
                    "end": 85
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
      "type": "FunctionDeclaration",
      "start": 90,
      "end": 251,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 130,
        "end": 251,
        "body": [
          {
            "type": "IfStatement",
            "start": 136,
            "end": 188,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 154,
              "end": 188,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 164,
                  "end": 182,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 164,
                    "end": 181,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 164,
                      "end": 179,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 171,
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 179,
                        "decorators": [],
                        "name": "toFixed",
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
              "start": 140,
              "end": 152,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 140,
                "end": 144,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 149,
                "end": 152,
                "raw": "'A'",
                "value": "A",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 193,
            "end": 249,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 211,
              "end": 249,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 221,
                  "end": 243,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 221,
                    "end": 242,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 221,
                      "end": 240,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 228,
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 240,
                        "decorators": [],
                        "name": "toUpperCase",
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
              "start": 197,
              "end": 209,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 197,
                "end": 201,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 206,
                "end": 209,
                "raw": "'B'",
                "value": "B",
                "regex": null,
                "bigint": null
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
        "start": 99,
        "end": 102,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 103,
          "end": 128,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 105,
              "end": 109,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 105,
                "end": 109,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 105,
                "end": 109,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 111,
              "end": 118,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 111,
                "end": 118,
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 111,
                "end": 118,
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 120,
            "end": 128,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 122,
              "end": 128,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 122,
                "end": 128,
                "decorators": [],
                "name": "Action",
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
      "type": "FunctionDeclaration",
      "start": 253,
      "end": 441,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 282,
        "end": 441,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 288,
            "end": 321,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 294,
                "end": 320,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 294,
                  "end": 311,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 296,
                      "end": 300,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 296,
                        "end": 300,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 296,
                        "end": 300,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 302,
                      "end": 309,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 302,
                        "end": 309,
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 302,
                        "end": 309,
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 320,
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 326,
            "end": 378,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 344,
              "end": 378,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 354,
                  "end": 372,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 354,
                    "end": 371,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 354,
                      "end": 369,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 361,
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 362,
                        "end": 369,
                        "decorators": [],
                        "name": "toFixed",
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
              "start": 330,
              "end": 342,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 330,
                "end": 334,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 339,
                "end": 342,
                "raw": "'A'",
                "value": "A",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 383,
            "end": 439,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 401,
              "end": 439,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 411,
                  "end": 433,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 411,
                    "end": 432,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 411,
                      "end": 430,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 411,
                        "end": 418,
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 419,
                        "end": 430,
                        "decorators": [],
                        "name": "toUpperCase",
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
              "start": 387,
              "end": 399,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 387,
                "end": 391,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 396,
                "end": 399,
                "raw": "'B'",
                "value": "B",
                "regex": null,
                "bigint": null
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
        "start": 262,
        "end": 265,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 266,
          "end": 280,
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 272,
            "end": 280,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 274,
              "end": 280,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 274,
                "end": 280,
                "decorators": [],
                "name": "Action",
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
      "type": "FunctionDeclaration",
      "start": 443,
      "end": 700,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 483,
        "end": 700,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 489,
            "end": 698,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 513,
                "end": 572,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 535,
                    "end": 553,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 535,
                      "end": 552,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 535,
                        "end": 550,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 535,
                          "end": 542,
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 543,
                          "end": 550,
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 566,
                    "end": 572,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 518,
                  "end": 521,
                  "raw": "'A'",
                  "value": "A",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SwitchCase",
                "start": 581,
                "end": 644,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 603,
                    "end": 625,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 603,
                      "end": 624,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 603,
                        "end": 622,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 603,
                          "end": 610,
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 611,
                          "end": 622,
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 638,
                    "end": 644,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 586,
                  "end": 589,
                  "raw": "'B'",
                  "value": "B",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SwitchCase",
                "start": 653,
                "end": 682,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 674,
                    "end": 682,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 674,
                      "end": 681,
                      "decorators": [],
                      "name": "payload",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "test": null
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 497,
              "end": 501,
              "decorators": [],
              "name": "kind",
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
        "start": 452,
        "end": 455,
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 456,
          "end": 481,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 458,
              "end": 462,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 458,
                "end": 462,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 458,
                "end": 462,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 464,
              "end": 471,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 464,
                "end": 471,
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 464,
                "end": 471,
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 473,
            "end": 481,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 475,
              "end": 481,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 475,
                "end": 481,
                "decorators": [],
                "name": "Action",
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
      "type": "FunctionDeclaration",
      "start": 718,
      "end": 892,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 771,
        "end": 892,
        "body": [
          {
            "type": "IfStatement",
            "start": 777,
            "end": 829,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 795,
              "end": 829,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 805,
                  "end": 823,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 805,
                    "end": 822,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 805,
                      "end": 820,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 805,
                        "end": 812,
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 813,
                        "end": 820,
                        "decorators": [],
                        "name": "toFixed",
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
              "start": 781,
              "end": 793,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 781,
                "end": 785,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 790,
                "end": 793,
                "raw": "'A'",
                "value": "A",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 834,
            "end": 890,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 852,
              "end": 890,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 862,
                  "end": 884,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 862,
                    "end": 883,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 862,
                      "end": 881,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 862,
                        "end": 869,
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 870,
                        "end": 881,
                        "decorators": [],
                        "name": "toUpperCase",
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
              "start": 838,
              "end": 850,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 838,
                "end": 842,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 847,
                "end": 850,
                "raw": "'B'",
                "value": "B",
                "regex": null,
                "bigint": null
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
        "start": 727,
        "end": 730,
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 749,
          "end": 769,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 751,
              "end": 755,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 751,
                "end": 755,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 751,
                "end": 755,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 757,
              "end": 764,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 757,
                "end": 764,
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 757,
                "end": 764,
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 766,
            "end": 769,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 768,
              "end": 769,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 768,
                "end": 769,
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
        "start": 730,
        "end": 748,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 731,
            "end": 747,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 741,
              "end": 747,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 741,
                "end": 747,
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 731,
              "end": 732,
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
      "start": 894,
      "end": 1085,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 931,
        "end": 1085,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 937,
            "end": 965,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 943,
                "end": 964,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 943,
                  "end": 960,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 945,
                      "end": 949,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 945,
                        "end": 949,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 945,
                        "end": 949,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 951,
                      "end": 958,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 951,
                        "end": 958,
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 951,
                        "end": 958,
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 963,
                  "end": 964,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 970,
            "end": 1022,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 988,
              "end": 1022,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 998,
                  "end": 1016,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 998,
                    "end": 1015,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 998,
                      "end": 1013,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 998,
                        "end": 1005,
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1006,
                        "end": 1013,
                        "decorators": [],
                        "name": "toFixed",
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
              "start": 974,
              "end": 986,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 974,
                "end": 978,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 983,
                "end": 986,
                "raw": "'A'",
                "value": "A",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 1027,
            "end": 1083,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1045,
              "end": 1083,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1055,
                  "end": 1077,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1055,
                    "end": 1076,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1055,
                      "end": 1074,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1055,
                        "end": 1062,
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1063,
                        "end": 1074,
                        "decorators": [],
                        "name": "toUpperCase",
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
              "start": 1031,
              "end": 1043,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 1031,
                "end": 1035,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1040,
                "end": 1043,
                "raw": "'B'",
                "value": "B",
                "regex": null,
                "bigint": null
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
        "start": 903,
        "end": 906,
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 925,
          "end": 929,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 926,
            "end": 929,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 928,
              "end": 929,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 928,
                "end": 929,
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
        "start": 906,
        "end": 924,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 907,
            "end": 923,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 917,
              "end": 923,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 917,
                "end": 923,
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 907,
              "end": 908,
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
      "type": "TSTypeAliasDeclaration",
      "start": 1087,
      "end": 1200,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1092,
        "end": 1099,
        "decorators": [],
        "name": "Action2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1106,
        "end": 1199,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1108,
            "end": 1150,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1110,
                "end": 1120,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1110,
                  "end": 1114,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1114,
                  "end": 1119,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1116,
                    "end": 1119,
                    "literal": {
                      "type": "Literal",
                      "start": 1116,
                      "end": 1119,
                      "raw": "'A'",
                      "value": "A",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 1121,
                "end": 1148,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1121,
                  "end": 1128,
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1128,
                  "end": 1148,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1130,
                    "end": 1148,
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1130,
                        "end": 1136
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1139,
                        "end": 1148
                      }
                    ]
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 1157,
            "end": 1199,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1159,
                "end": 1169,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1159,
                  "end": 1163,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1163,
                  "end": 1168,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1165,
                    "end": 1168,
                    "literal": {
                      "type": "Literal",
                      "start": 1165,
                      "end": 1168,
                      "raw": "'B'",
                      "value": "B",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 1170,
                "end": 1197,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1170,
                  "end": 1177,
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1177,
                  "end": 1197,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1179,
                    "end": 1197,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1179,
                        "end": 1185
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1188,
                        "end": 1197
                      }
                    ]
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
      "type": "FunctionDeclaration",
      "start": 1202,
      "end": 1413,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1243,
        "end": 1413,
        "body": [
          {
            "type": "IfStatement",
            "start": 1249,
            "end": 1411,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1262,
              "end": 1411,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1272,
                  "end": 1332,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1290,
                    "end": 1332,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1304,
                        "end": 1322,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1304,
                          "end": 1321,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1304,
                            "end": 1319,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1304,
                              "end": 1311,
                              "decorators": [],
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1312,
                              "end": 1319,
                              "decorators": [],
                              "name": "toFixed",
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
                    "start": 1276,
                    "end": 1288,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 1276,
                      "end": 1280,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1285,
                      "end": 1288,
                      "raw": "'A'",
                      "value": "A",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 1341,
                  "end": 1405,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1359,
                    "end": 1405,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1373,
                        "end": 1395,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1373,
                          "end": 1394,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1373,
                            "end": 1392,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1373,
                              "end": 1380,
                              "decorators": [],
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1381,
                              "end": 1392,
                              "decorators": [],
                              "name": "toUpperCase",
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
                    "start": 1345,
                    "end": 1357,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 1345,
                      "end": 1349,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1354,
                      "end": 1357,
                      "raw": "'B'",
                      "value": "B",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1253,
              "end": 1260,
              "decorators": [],
              "name": "payload",
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
        "start": 1211,
        "end": 1214,
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 1215,
          "end": 1241,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 1217,
              "end": 1221,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1217,
                "end": 1221,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 1217,
                "end": 1221,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 1223,
              "end": 1230,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1223,
                "end": 1230,
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 1223,
                "end": 1230,
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1232,
            "end": 1241,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1234,
              "end": 1241,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1234,
                "end": 1241,
                "decorators": [],
                "name": "Action2",
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
      "type": "FunctionDeclaration",
      "start": 1415,
      "end": 1653,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1445,
        "end": 1653,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1451,
            "end": 1484,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1457,
                "end": 1483,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 1457,
                  "end": 1474,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1459,
                      "end": 1463,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1459,
                        "end": 1463,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 1459,
                        "end": 1463,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 1465,
                      "end": 1472,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1465,
                        "end": 1472,
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 1465,
                        "end": 1472,
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1477,
                  "end": 1483,
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 1489,
            "end": 1651,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1502,
              "end": 1651,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1512,
                  "end": 1572,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1530,
                    "end": 1572,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1544,
                        "end": 1562,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1544,
                          "end": 1561,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1544,
                            "end": 1559,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1544,
                              "end": 1551,
                              "decorators": [],
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1552,
                              "end": 1559,
                              "decorators": [],
                              "name": "toFixed",
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
                    "start": 1516,
                    "end": 1528,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 1516,
                      "end": 1520,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1525,
                      "end": 1528,
                      "raw": "'A'",
                      "value": "A",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 1581,
                  "end": 1645,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1599,
                    "end": 1645,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1613,
                        "end": 1635,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1613,
                          "end": 1634,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1613,
                            "end": 1632,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1613,
                              "end": 1620,
                              "decorators": [],
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1621,
                              "end": 1632,
                              "decorators": [],
                              "name": "toUpperCase",
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
                    "start": 1585,
                    "end": 1597,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 1585,
                      "end": 1589,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1594,
                      "end": 1597,
                      "raw": "'B'",
                      "value": "B",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1493,
              "end": 1500,
              "decorators": [],
              "name": "payload",
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
        "start": 1424,
        "end": 1427,
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1428,
          "end": 1443,
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1434,
            "end": 1443,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1436,
              "end": 1443,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1436,
                "end": 1443,
                "decorators": [],
                "name": "Action2",
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
      "type": "FunctionDeclaration",
      "start": 1655,
      "end": 1904,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1685,
        "end": 1904,
        "body": [
          {
            "type": "IfStatement",
            "start": 1691,
            "end": 1902,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1711,
              "end": 1902,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1721,
                  "end": 1754,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1727,
                      "end": 1753,
                      "definite": false,
                      "id": {
                        "type": "ObjectPattern",
                        "start": 1727,
                        "end": 1744,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1729,
                            "end": 1733,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1729,
                              "end": 1733,
                              "decorators": [],
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 1729,
                              "end": 1733,
                              "decorators": [],
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "Property",
                            "start": 1735,
                            "end": 1742,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 1735,
                              "end": 1742,
                              "decorators": [],
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 1735,
                              "end": 1742,
                              "decorators": [],
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1747,
                        "end": 1753,
                        "decorators": [],
                        "name": "action",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "IfStatement",
                  "start": 1763,
                  "end": 1823,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1781,
                    "end": 1823,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1795,
                        "end": 1813,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1795,
                          "end": 1812,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1795,
                            "end": 1810,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1795,
                              "end": 1802,
                              "decorators": [],
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1803,
                              "end": 1810,
                              "decorators": [],
                              "name": "toFixed",
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
                    "start": 1767,
                    "end": 1779,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 1767,
                      "end": 1771,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1776,
                      "end": 1779,
                      "raw": "'A'",
                      "value": "A",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 1832,
                  "end": 1896,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1850,
                    "end": 1896,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1864,
                        "end": 1886,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1864,
                          "end": 1885,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1864,
                            "end": 1883,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 1864,
                              "end": 1871,
                              "decorators": [],
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1872,
                              "end": 1883,
                              "decorators": [],
                              "name": "toUpperCase",
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
                    "start": 1836,
                    "end": 1848,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 1836,
                      "end": 1840,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1845,
                      "end": 1848,
                      "raw": "'B'",
                      "value": "B",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "MemberExpression",
              "start": 1695,
              "end": 1709,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1695,
                "end": 1701,
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1702,
                "end": 1709,
                "decorators": [],
                "name": "payload",
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
        "start": 1664,
        "end": 1667,
        "decorators": [],
        "name": "f22",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1668,
          "end": 1683,
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1674,
            "end": 1683,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1676,
              "end": 1683,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1676,
                "end": 1683,
                "decorators": [],
                "name": "Action2",
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
      "type": "FunctionDeclaration",
      "start": 1906,
      "end": 2229,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1947,
        "end": 2229,
        "body": [
          {
            "type": "IfStatement",
            "start": 1953,
            "end": 2227,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1966,
              "end": 2227,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 1976,
                  "end": 2221,
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 2004,
                      "end": 2071,
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2030,
                          "end": 2048,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 2030,
                            "end": 2047,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 2030,
                              "end": 2045,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 2030,
                                "end": 2037,
                                "decorators": [],
                                "name": "payload",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 2038,
                                "end": 2045,
                                "decorators": [],
                                "name": "toFixed",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "BreakStatement",
                          "start": 2065,
                          "end": 2071,
                          "label": null
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 2009,
                        "end": 2012,
                        "raw": "'A'",
                        "value": "A",
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 2084,
                      "end": 2155,
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2110,
                          "end": 2132,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 2110,
                            "end": 2131,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 2110,
                              "end": 2129,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 2110,
                                "end": 2117,
                                "decorators": [],
                                "name": "payload",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 2118,
                                "end": 2129,
                                "decorators": [],
                                "name": "toUpperCase",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "BreakStatement",
                          "start": 2149,
                          "end": 2155,
                          "label": null
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 2089,
                        "end": 2092,
                        "raw": "'B'",
                        "value": "B",
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 2168,
                      "end": 2201,
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "start": 2193,
                          "end": 2201,
                          "directive": null,
                          "expression": {
                            "type": "Identifier",
                            "start": 2193,
                            "end": 2200,
                            "decorators": [],
                            "name": "payload",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "test": null
                    }
                  ],
                  "discriminant": {
                    "type": "Identifier",
                    "start": 1984,
                    "end": 1988,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1957,
              "end": 1964,
              "decorators": [],
              "name": "payload",
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
        "start": 1915,
        "end": 1918,
        "decorators": [],
        "name": "f23",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 1919,
          "end": 1945,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 1921,
              "end": 1925,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1921,
                "end": 1925,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 1921,
                "end": 1925,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 1927,
              "end": 1934,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1927,
                "end": 1934,
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 1927,
                "end": 1934,
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1936,
            "end": 1945,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1938,
              "end": 1945,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1938,
                "end": 1945,
                "decorators": [],
                "name": "Action2",
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
      "type": "TSTypeAliasDeclaration",
      "start": 2231,
      "end": 2337,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2236,
        "end": 2239,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2246,
        "end": 2336,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 2248,
            "end": 2272,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2250,
                "end": 2260,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2250,
                  "end": 2254,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2254,
                  "end": 2259,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 2256,
                    "end": 2259,
                    "literal": {
                      "type": "Literal",
                      "start": 2256,
                      "end": 2259,
                      "raw": "'A'",
                      "value": "A",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 2261,
                "end": 2270,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2261,
                  "end": 2264,
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2264,
                  "end": 2270,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 2266,
                    "end": 2270,
                    "literal": {
                      "type": "Literal",
                      "start": 2266,
                      "end": 2270,
                      "raw": "true",
                      "value": true,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 2279,
            "end": 2304,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2281,
                "end": 2291,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2281,
                  "end": 2285,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2285,
                  "end": 2290,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 2287,
                    "end": 2290,
                    "literal": {
                      "type": "Literal",
                      "start": 2287,
                      "end": 2290,
                      "raw": "'B'",
                      "value": "B",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 2292,
                "end": 2302,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2292,
                  "end": 2295,
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2295,
                  "end": 2302,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 2297,
                    "end": 2302,
                    "literal": {
                      "type": "Literal",
                      "start": 2297,
                      "end": 2302,
                      "raw": "false",
                      "value": false,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 2311,
            "end": 2336,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2313,
                "end": 2323,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2313,
                  "end": 2317,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2317,
                  "end": 2322,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 2319,
                    "end": 2322,
                    "literal": {
                      "type": "Literal",
                      "start": 2319,
                      "end": 2322,
                      "raw": "'C'",
                      "value": "C",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 2324,
                "end": 2334,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2324,
                  "end": 2327,
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2327,
                  "end": 2334,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 2329,
                    "end": 2334,
                    "literal": {
                      "type": "Literal",
                      "start": 2329,
                      "end": 2334,
                      "raw": "false",
                      "value": false,
                      "regex": null,
                      "bigint": null
                    }
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
      "type": "FunctionDeclaration",
      "start": 2339,
      "end": 2624,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2372,
        "end": 2624,
        "body": [
          {
            "type": "IfStatement",
            "start": 2378,
            "end": 2426,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2396,
              "end": 2426,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2406,
                  "end": 2410,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2406,
                    "end": 2409,
                    "decorators": [],
                    "name": "isA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2382,
              "end": 2394,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2382,
                "end": 2386,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2391,
                "end": 2394,
                "raw": "'A'",
                "value": "A",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2431,
            "end": 2480,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2449,
              "end": 2480,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2459,
                  "end": 2463,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2459,
                    "end": 2462,
                    "decorators": [],
                    "name": "isA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2435,
              "end": 2447,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2435,
                "end": 2439,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2444,
                "end": 2447,
                "raw": "'B'",
                "value": "B",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2485,
            "end": 2534,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2503,
              "end": 2534,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2513,
                  "end": 2517,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2513,
                    "end": 2516,
                    "decorators": [],
                    "name": "isA",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2489,
              "end": 2501,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2489,
                "end": 2493,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2498,
                "end": 2501,
                "raw": "'C'",
                "value": "C",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2539,
            "end": 2622,
            "alternate": {
              "type": "BlockStatement",
              "start": 2587,
              "end": 2622,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2597,
                  "end": 2602,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2597,
                    "end": 2601,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2548,
              "end": 2577,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2558,
                  "end": 2563,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2558,
                    "end": 2562,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 2543,
              "end": 2546,
              "decorators": [],
              "name": "isA",
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
        "start": 2348,
        "end": 2351,
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 2352,
          "end": 2370,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 2354,
              "end": 2358,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2354,
                "end": 2358,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 2354,
                "end": 2358,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 2360,
              "end": 2363,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2360,
                "end": 2363,
                "decorators": [],
                "name": "isA",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 2360,
                "end": 2363,
                "decorators": [],
                "name": "isA",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2365,
            "end": 2370,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2367,
              "end": 2370,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2367,
                "end": 2370,
                "decorators": [],
                "name": "Foo",
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
      "type": "TSTypeAliasDeclaration",
      "start": 2626,
      "end": 2667,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2631,
        "end": 2635,
        "decorators": [],
        "name": "Args",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2638,
        "end": 2667,
        "types": [
          {
            "type": "TSTupleType",
            "start": 2638,
            "end": 2651,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 2639,
                "end": 2642,
                "literal": {
                  "type": "Literal",
                  "start": 2639,
                  "end": 2642,
                  "raw": "'A'",
                  "value": "A",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "TSNumberKeyword",
                "start": 2644,
                "end": 2650
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 2654,
            "end": 2667,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 2655,
                "end": 2658,
                "literal": {
                  "type": "Literal",
                  "start": 2655,
                  "end": 2658,
                  "raw": "'B'",
                  "value": "B",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "TSStringKeyword",
                "start": 2660,
                "end": 2666
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2669,
      "end": 2820,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2705,
        "end": 2820,
        "body": [
          {
            "type": "IfStatement",
            "start": 2711,
            "end": 2760,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2729,
              "end": 2760,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2739,
                  "end": 2754,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2739,
                    "end": 2753,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2739,
                      "end": 2751,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 2739,
                        "end": 2743,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2744,
                        "end": 2751,
                        "decorators": [],
                        "name": "toFixed",
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
              "start": 2715,
              "end": 2727,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2715,
                "end": 2719,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2724,
                "end": 2727,
                "raw": "'A'",
                "value": "A",
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2765,
            "end": 2818,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2783,
              "end": 2818,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2793,
                  "end": 2812,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2793,
                    "end": 2811,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2793,
                      "end": 2809,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 2793,
                        "end": 2797,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2798,
                        "end": 2809,
                        "decorators": [],
                        "name": "toUpperCase",
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
              "start": 2769,
              "end": 2781,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 2769,
                "end": 2773,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2778,
                "end": 2781,
                "raw": "'B'",
                "value": "B",
                "regex": null,
                "bigint": null
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
        "start": 2678,
        "end": 2681,
        "decorators": [],
        "name": "f40",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 2682,
          "end": 2703,
          "argument": {
            "type": "ArrayPattern",
            "start": 2685,
            "end": 2697,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 2686,
                "end": 2690,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2692,
                "end": 2696,
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2697,
            "end": 2703,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2699,
              "end": 2703,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2699,
                "end": 2703,
                "decorators": [],
                "name": "Args",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2844,
      "end": 2885,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2859,
        "end": 2885,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2861,
            "end": 2874,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2861,
              "end": 2868,
              "decorators": [],
              "name": "variant",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2868,
              "end": 2873,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2870,
                "end": 2873,
                "literal": {
                  "type": "Literal",
                  "start": 2870,
                  "end": 2873,
                  "raw": "'a'",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2875,
            "end": 2883,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2875,
              "end": 2880,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2880,
              "end": 2883,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2882,
                "end": 2883,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 2882,
                  "end": 2883,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2854,
        "end": 2855,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2855,
        "end": 2858,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2856,
            "end": 2857,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2856,
              "end": 2857,
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
      "type": "TSInterfaceDeclaration",
      "start": 2887,
      "end": 2935,
      "body": {
        "type": "TSInterfaceBody",
        "start": 2902,
        "end": 2935,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2904,
            "end": 2917,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2904,
              "end": 2911,
              "decorators": [],
              "name": "variant",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2911,
              "end": 2916,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2913,
                "end": 2916,
                "literal": {
                  "type": "Literal",
                  "start": 2913,
                  "end": 2916,
                  "raw": "'b'",
                  "value": "b",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2918,
            "end": 2933,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2918,
              "end": 2923,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2923,
              "end": 2933,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2925,
                "end": 2933,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2930,
                  "end": 2933,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2931,
                      "end": 2932,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2931,
                        "end": 2932,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2925,
                  "end": 2930,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 2897,
        "end": 2898,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2898,
        "end": 2901,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2899,
            "end": 2900,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2899,
              "end": 2900,
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
      "type": "TSTypeAliasDeclaration",
      "start": 2937,
      "end": 2962,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2942,
        "end": 2944,
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2950,
        "end": 2961,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2950,
            "end": 2954,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2951,
              "end": 2954,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2952,
                  "end": 2953,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2952,
                    "end": 2953,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 2950,
              "end": 2951,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 2957,
            "end": 2961,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2958,
              "end": 2961,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2959,
                  "end": 2960,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2959,
                    "end": 2960,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 2957,
              "end": 2958,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2944,
        "end": 2947,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2945,
            "end": 2946,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2945,
              "end": 2946,
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
      "type": "TSDeclareFunction",
      "start": 2964,
      "end": 3007,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2981,
        "end": 2991,
        "decorators": [],
        "name": "printValue",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2995,
          "end": 2999,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2996,
            "end": 2999,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2998,
              "end": 2999,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2998,
                "end": 2999,
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
        "start": 3000,
        "end": 3006,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3002,
          "end": 3006
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2991,
        "end": 2994,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2992,
            "end": 2993,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2992,
              "end": 2993,
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
      "type": "TSDeclareFunction",
      "start": 3009,
      "end": 3063,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3026,
        "end": 3040,
        "decorators": [],
        "name": "printValueList",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3044,
          "end": 3055,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3045,
            "end": 3055,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3047,
              "end": 3055,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3052,
                "end": 3055,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3053,
                    "end": 3054,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3053,
                      "end": 3054,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3047,
                "end": 3052,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3056,
        "end": 3062,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3058,
          "end": 3062
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3040,
        "end": 3043,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3041,
            "end": 3042,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3041,
              "end": 3042,
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
      "start": 3065,
      "end": 3257,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3105,
        "end": 3257,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3111,
            "end": 3141,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3117,
                "end": 3140,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 3117,
                  "end": 3135,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3119,
                      "end": 3126,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3119,
                        "end": 3126,
                        "decorators": [],
                        "name": "variant",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 3119,
                        "end": 3126,
                        "decorators": [],
                        "name": "variant",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 3128,
                      "end": 3133,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3128,
                        "end": 3133,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 3128,
                        "end": 3133,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 3138,
                  "end": 3140,
                  "decorators": [],
                  "name": "ab",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 3146,
            "end": 3255,
            "alternate": {
              "type": "BlockStatement",
              "start": 3214,
              "end": 3255,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3224,
                  "end": 3249,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 3224,
                    "end": 3248,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 3242,
                        "end": 3247,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 3224,
                      "end": 3238,
                      "decorators": [],
                      "name": "printValueList",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3238,
                      "end": 3241,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3239,
                          "end": 3240,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3239,
                            "end": 3240,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3167,
              "end": 3204,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3177,
                  "end": 3198,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 3177,
                    "end": 3197,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 3191,
                        "end": 3196,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 3177,
                      "end": 3187,
                      "decorators": [],
                      "name": "printValue",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 3187,
                      "end": 3190,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 3188,
                          "end": 3189,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3188,
                            "end": 3189,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 3150,
              "end": 3165,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 3150,
                "end": 3157,
                "decorators": [],
                "name": "variant",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 3162,
                "end": 3165,
                "raw": "'a'",
                "value": "a",
                "regex": null,
                "bigint": null
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
        "start": 3074,
        "end": 3084,
        "decorators": [],
        "name": "unrefined1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3088,
          "end": 3097,
          "decorators": [],
          "name": "ab",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3090,
            "end": 3097,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3092,
              "end": 3097,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3094,
                "end": 3097,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3095,
                    "end": 3096,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3095,
                      "end": 3096,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3092,
                "end": 3094,
                "decorators": [],
                "name": "AB",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3098,
        "end": 3104,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3100,
          "end": 3104
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3084,
        "end": 3087,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3085,
            "end": 3086,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3085,
              "end": 3086,
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
      "type": "TSTypeAliasDeclaration",
      "start": 3281,
      "end": 3400,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3286,
        "end": 3293,
        "decorators": [],
        "name": "Action3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 3300,
        "end": 3399,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 3302,
            "end": 3344,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 3303,
                "end": 3315,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3303,
                  "end": 3307,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3307,
                  "end": 3314,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 3309,
                    "end": 3314,
                    "literal": {
                      "type": "Literal",
                      "start": 3309,
                      "end": 3314,
                      "raw": "'add'",
                      "value": "add",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 3316,
                "end": 3342,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3316,
                  "end": 3323,
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3323,
                  "end": 3342,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 3325,
                    "end": 3342,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3327,
                        "end": 3340,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3327,
                          "end": 3332,
                          "decorators": [],
                          "name": "toAdd",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3332,
                          "end": 3340,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3334,
                            "end": 3340
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 3351,
            "end": 3399,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 3352,
                "end": 3367,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3352,
                  "end": 3356,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3356,
                  "end": 3366,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 3358,
                    "end": 3366,
                    "literal": {
                      "type": "Literal",
                      "start": 3358,
                      "end": 3366,
                      "raw": "'remove'",
                      "value": "remove",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 3368,
                "end": 3397,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3368,
                  "end": 3375,
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3375,
                  "end": 3397,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 3377,
                    "end": 3397,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3379,
                        "end": 3395,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3379,
                          "end": 3387,
                          "decorators": [],
                          "name": "toRemove",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3387,
                          "end": 3395,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3389,
                            "end": 3395
                          }
                        }
                      }
                    ]
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
      "type": "VariableDeclaration",
      "start": 3402,
      "end": 3630,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3408,
          "end": 3630,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3408,
            "end": 3421,
            "decorators": [],
            "name": "reducerBroken",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3424,
            "end": 3630,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 3471,
              "end": 3630,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 3477,
                  "end": 3628,
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 3501,
                      "end": 3554,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 3525,
                          "end": 3554,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 3532,
                            "end": 3553,
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "start": 3532,
                              "end": 3537,
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 3540,
                              "end": 3553,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 3540,
                                "end": 3547,
                                "decorators": [],
                                "name": "payload",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 3548,
                                "end": 3553,
                                "decorators": [],
                                "name": "toAdd",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 3506,
                        "end": 3511,
                        "raw": "'add'",
                        "value": "add",
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 3563,
                      "end": 3622,
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "start": 3590,
                          "end": 3622,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 3597,
                            "end": 3621,
                            "operator": "-",
                            "left": {
                              "type": "Identifier",
                              "start": 3597,
                              "end": 3602,
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 3605,
                              "end": 3621,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 3605,
                                "end": 3612,
                                "decorators": [],
                                "name": "payload",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 3613,
                                "end": 3621,
                                "decorators": [],
                                "name": "toRemove",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 3568,
                        "end": 3576,
                        "raw": "'remove'",
                        "value": "remove",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "Identifier",
                    "start": 3485,
                    "end": 3489,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 3425,
                "end": 3438,
                "decorators": [],
                "name": "state",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3430,
                  "end": 3438,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3432,
                    "end": 3438
                  }
                }
              },
              {
                "type": "ObjectPattern",
                "start": 3440,
                "end": 3466,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 3442,
                    "end": 3446,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3442,
                      "end": 3446,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 3442,
                      "end": 3446,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 3448,
                    "end": 3455,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3448,
                      "end": 3455,
                      "decorators": [],
                      "name": "payload",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 3448,
                      "end": 3455,
                      "decorators": [],
                      "name": "payload",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3457,
                  "end": 3466,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3459,
                    "end": 3466,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3459,
                      "end": 3466,
                      "decorators": [],
                      "name": "Action3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3654,
      "end": 3687,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3666,
          "end": 3686,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3666,
            "end": 3686,
            "decorators": [],
            "name": "it",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3668,
              "end": 3686,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3670,
                "end": 3686,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3678,
                  "end": 3686,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 3679,
                      "end": 3685
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 3670,
                  "end": 3678,
                  "decorators": [],
                  "name": "Iterator",
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3688,
      "end": 3722,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3694,
          "end": 3721,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 3694,
            "end": 3709,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 3696,
                "end": 3701,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3696,
                  "end": 3701,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 3696,
                  "end": 3701,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 3703,
                "end": 3707,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 3703,
                  "end": 3707,
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 3703,
                  "end": 3707,
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3712,
            "end": 3721,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 3712,
              "end": 3719,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3712,
                "end": 3714,
                "decorators": [],
                "name": "it",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3715,
                "end": 3719,
                "decorators": [],
                "name": "next",
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
      "type": "IfStatement",
      "start": 3723,
      "end": 3759,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 3734,
        "end": 3759,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3740,
            "end": 3746,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 3740,
              "end": 3745,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "UnaryExpression",
        "start": 3727,
        "end": 3732,
        "argument": {
          "type": "Identifier",
          "start": 3728,
          "end": 3732,
          "decorators": [],
          "name": "done",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3783,
      "end": 3838,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3800,
        "end": 3803,
        "decorators": [],
        "name": "f50",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3804,
          "end": 3831,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3806,
            "end": 3831,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3808,
              "end": 3831,
              "params": [
                {
                  "type": "RestElement",
                  "start": 3809,
                  "end": 3822,
                  "argument": {
                    "type": "Identifier",
                    "start": 3812,
                    "end": 3816,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3816,
                    "end": 3822,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3818,
                      "end": 3822,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3818,
                        "end": 3822,
                        "decorators": [],
                        "name": "Args",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3824,
                "end": 3831,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3827,
                  "end": 3831
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3832,
        "end": 3838,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3834,
          "end": 3838
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3840,
      "end": 3977,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 3840,
        "end": 3976,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 3844,
            "end": 3975,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 3860,
              "end": 3975,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 3866,
                  "end": 3915,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 3884,
                    "end": 3915,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 3894,
                        "end": 3909,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 3894,
                          "end": 3908,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 3894,
                            "end": 3906,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 3894,
                              "end": 3898,
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 3899,
                              "end": 3906,
                              "decorators": [],
                              "name": "toFixed",
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
                    "start": 3870,
                    "end": 3882,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 3870,
                      "end": 3874,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 3879,
                      "end": 3882,
                      "raw": "'A'",
                      "value": "A",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 3920,
                  "end": 3973,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 3938,
                    "end": 3973,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 3948,
                        "end": 3967,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 3948,
                          "end": 3966,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 3948,
                            "end": 3964,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 3948,
                              "end": 3952,
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 3953,
                              "end": 3964,
                              "decorators": [],
                              "name": "toUpperCase",
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
                    "start": 3924,
                    "end": 3936,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 3924,
                      "end": 3928,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 3933,
                      "end": 3936,
                      "raw": "'B'",
                      "value": "B",
                      "regex": null,
                      "bigint": null
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
                "start": 3845,
                "end": 3849,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3851,
                "end": 3855,
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3840,
          "end": 3843,
          "decorators": [],
          "name": "f50",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3979,
      "end": 4182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3985,
          "end": 4181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3985,
            "end": 4038,
            "decorators": [],
            "name": "f51",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3988,
              "end": 4038,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3990,
                "end": 4038,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 3991,
                    "end": 4029,
                    "argument": {
                      "type": "Identifier",
                      "start": 3994,
                      "end": 3998,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3998,
                      "end": 4029,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 4000,
                        "end": 4029,
                        "types": [
                          {
                            "type": "TSTupleType",
                            "start": 4000,
                            "end": 4013,
                            "elementTypes": [
                              {
                                "type": "TSLiteralType",
                                "start": 4001,
                                "end": 4004,
                                "literal": {
                                  "type": "Literal",
                                  "start": 4001,
                                  "end": 4004,
                                  "raw": "'A'",
                                  "value": "A",
                                  "regex": null,
                                  "bigint": null
                                }
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 4006,
                                "end": 4012
                              }
                            ]
                          },
                          {
                            "type": "TSTupleType",
                            "start": 4016,
                            "end": 4029,
                            "elementTypes": [
                              {
                                "type": "TSLiteralType",
                                "start": 4017,
                                "end": 4020,
                                "literal": {
                                  "type": "Literal",
                                  "start": 4017,
                                  "end": 4020,
                                  "raw": "'B'",
                                  "value": "B",
                                  "regex": null,
                                  "bigint": null
                                }
                              },
                              {
                                "type": "TSStringKeyword",
                                "start": 4022,
                                "end": 4028
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4031,
                  "end": 4038,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4034,
                    "end": 4038
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 4041,
            "end": 4181,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 4060,
              "end": 4181,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 4066,
                  "end": 4118,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 4084,
                    "end": 4118,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 4094,
                        "end": 4112,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 4094,
                          "end": 4111,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 4094,
                            "end": 4109,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 4094,
                              "end": 4101,
                              "decorators": [],
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 4102,
                              "end": 4109,
                              "decorators": [],
                              "name": "toFixed",
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
                    "start": 4070,
                    "end": 4082,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 4070,
                      "end": 4074,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4079,
                      "end": 4082,
                      "raw": "'A'",
                      "value": "A",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 4123,
                  "end": 4179,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 4141,
                    "end": 4179,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 4151,
                        "end": 4173,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 4151,
                          "end": 4172,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 4151,
                            "end": 4170,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 4151,
                              "end": 4158,
                              "decorators": [],
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 4159,
                              "end": 4170,
                              "decorators": [],
                              "name": "toUpperCase",
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
                    "start": 4127,
                    "end": 4139,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 4127,
                      "end": 4131,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4136,
                      "end": 4139,
                      "raw": "'B'",
                      "value": "B",
                      "regex": null,
                      "bigint": null
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
                "start": 4042,
                "end": 4046,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4048,
                "end": 4055,
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 4184,
      "end": 4367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4190,
          "end": 4366,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4190,
            "end": 4235,
            "decorators": [],
            "name": "f52",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4193,
              "end": 4235,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4195,
                "end": 4235,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 4196,
                    "end": 4226,
                    "argument": {
                      "type": "Identifier",
                      "start": 4199,
                      "end": 4203,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4203,
                      "end": 4226,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 4205,
                        "end": 4226,
                        "types": [
                          {
                            "type": "TSTupleType",
                            "start": 4205,
                            "end": 4218,
                            "elementTypes": [
                              {
                                "type": "TSLiteralType",
                                "start": 4206,
                                "end": 4209,
                                "literal": {
                                  "type": "Literal",
                                  "start": 4206,
                                  "end": 4209,
                                  "raw": "'A'",
                                  "value": "A",
                                  "regex": null,
                                  "bigint": null
                                }
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 4211,
                                "end": 4217
                              }
                            ]
                          },
                          {
                            "type": "TSTupleType",
                            "start": 4221,
                            "end": 4226,
                            "elementTypes": [
                              {
                                "type": "TSLiteralType",
                                "start": 4222,
                                "end": 4225,
                                "literal": {
                                  "type": "Literal",
                                  "start": 4222,
                                  "end": 4225,
                                  "raw": "'B'",
                                  "value": "B",
                                  "regex": null,
                                  "bigint": null
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4228,
                  "end": 4235,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4231,
                    "end": 4235
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 4238,
            "end": 4366,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 4258,
              "end": 4366,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 4264,
                  "end": 4364,
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 4326,
                    "end": 4364,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 4336,
                        "end": 4344,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 4336,
                          "end": 4343,
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 4282,
                    "end": 4316,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 4292,
                        "end": 4310,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 4292,
                          "end": 4309,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 4292,
                            "end": 4307,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 4292,
                              "end": 4299,
                              "decorators": [],
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 4300,
                              "end": 4307,
                              "decorators": [],
                              "name": "toFixed",
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
                    "start": 4268,
                    "end": 4280,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 4268,
                      "end": 4272,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4277,
                      "end": 4280,
                      "raw": "'A'",
                      "value": "A",
                      "regex": null,
                      "bigint": null
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
                "start": 4239,
                "end": 4243,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4245,
                "end": 4253,
                "decorators": [],
                "name": "payload",
                "optional": true,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 4369,
      "end": 4506,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4386,
        "end": 4394,
        "decorators": [],
        "name": "readFile",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4395,
          "end": 4407,
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4399,
            "end": 4407,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 4401,
              "end": 4407
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4409,
          "end": 4498,
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4417,
            "end": 4498,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 4419,
              "end": 4498,
              "params": [
                {
                  "type": "RestElement",
                  "start": 4420,
                  "end": 4489,
                  "argument": {
                    "type": "Identifier",
                    "start": 4423,
                    "end": 4427,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4427,
                    "end": 4489,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 4429,
                      "end": 4489,
                      "types": [
                        {
                          "type": "TSTupleType",
                          "start": 4429,
                          "end": 4457,
                          "elementTypes": [
                            {
                              "type": "TSNamedTupleMember",
                              "start": 4430,
                              "end": 4439,
                              "elementType": {
                                "type": "TSNullKeyword",
                                "start": 4435,
                                "end": 4439
                              },
                              "label": {
                                "type": "Identifier",
                                "start": 4430,
                                "end": 4433,
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false
                            },
                            {
                              "type": "TSNamedTupleMember",
                              "start": 4441,
                              "end": 4456,
                              "elementType": {
                                "type": "TSArrayType",
                                "start": 4447,
                                "end": 4456,
                                "elementType": {
                                  "type": "TSUnknownKeyword",
                                  "start": 4447,
                                  "end": 4454
                                }
                              },
                              "label": {
                                "type": "Identifier",
                                "start": 4441,
                                "end": 4445,
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false
                            }
                          ]
                        },
                        {
                          "type": "TSTupleType",
                          "start": 4460,
                          "end": 4489,
                          "elementTypes": [
                            {
                              "type": "TSNamedTupleMember",
                              "start": 4461,
                              "end": 4471,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 4466,
                                "end": 4471,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 4466,
                                  "end": 4471,
                                  "decorators": [],
                                  "name": "Error",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "label": {
                                "type": "Identifier",
                                "start": 4461,
                                "end": 4464,
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false
                            },
                            {
                              "type": "TSNamedTupleMember",
                              "start": 4473,
                              "end": 4488,
                              "elementType": {
                                "type": "TSUndefinedKeyword",
                                "start": 4479,
                                "end": 4488
                              },
                              "label": {
                                "type": "Identifier",
                                "start": 4473,
                                "end": 4477,
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false
                            }
                          ]
                        }
                      ]
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4491,
                "end": 4498,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4494,
                  "end": 4498
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4499,
        "end": 4505,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 4501,
          "end": 4505
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4508,
      "end": 4635,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 4508,
        "end": 4634,
        "arguments": [
          {
            "type": "Literal",
            "start": 4517,
            "end": 4524,
            "raw": "'hello'",
            "value": "hello",
            "regex": null,
            "bigint": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 4526,
            "end": 4633,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 4541,
              "end": 4633,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 4547,
                  "end": 4631,
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 4603,
                    "end": 4631,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 4613,
                        "end": 4625,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 4613,
                          "end": 4624,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 4613,
                            "end": 4616,
                            "decorators": [],
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 4617,
                            "end": 4624,
                            "decorators": [],
                            "name": "message",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 4565,
                    "end": 4593,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 4575,
                        "end": 4587,
                        "directive": null,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 4575,
                          "end": 4586,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 4575,
                            "end": 4579,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 4580,
                            "end": 4586,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 4551,
                    "end": 4563,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 4551,
                      "end": 4554,
                      "decorators": [],
                      "name": "err",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4559,
                      "end": 4563,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
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
                "start": 4527,
                "end": 4530,
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4532,
                "end": 4536,
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 4508,
          "end": 4516,
          "decorators": [],
          "name": "readFile",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4637,
      "end": 4742,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4642,
        "end": 4653,
        "decorators": [],
        "name": "ReducerArgs",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 4656,
        "end": 4741,
        "types": [
          {
            "type": "TSTupleType",
            "start": 4656,
            "end": 4689,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 4657,
                "end": 4662,
                "literal": {
                  "type": "Literal",
                  "start": 4657,
                  "end": 4662,
                  "raw": "\"add\"",
                  "value": "add",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "TSTypeLiteral",
                "start": 4664,
                "end": 4688,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4666,
                    "end": 4676,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4666,
                      "end": 4667,
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
                      "start": 4667,
                      "end": 4675,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4669,
                        "end": 4675
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 4677,
                    "end": 4686,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4677,
                      "end": 4678,
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
                      "start": 4678,
                      "end": 4686,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4680,
                        "end": 4686
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "TSTupleType",
            "start": 4692,
            "end": 4741,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 4693,
                "end": 4701,
                "literal": {
                  "type": "Literal",
                  "start": 4693,
                  "end": 4701,
                  "raw": "\"concat\"",
                  "value": "concat",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "TSTypeLiteral",
                "start": 4703,
                "end": 4740,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 4705,
                    "end": 4721,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4705,
                      "end": 4713,
                      "decorators": [],
                      "name": "firstArr",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4713,
                      "end": 4720,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 4715,
                        "end": 4720,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 4715,
                          "end": 4718
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 4722,
                    "end": 4738,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4722,
                      "end": 4731,
                      "decorators": [],
                      "name": "secondArr",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4731,
                      "end": 4738,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 4733,
                        "end": 4738,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 4733,
                          "end": 4736
                        }
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 4744,
      "end": 5019,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4750,
          "end": 5019,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4750,
            "end": 4789,
            "decorators": [],
            "name": "reducer",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4757,
              "end": 4789,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 4759,
                "end": 4789,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 4760,
                    "end": 4780,
                    "argument": {
                      "type": "Identifier",
                      "start": 4763,
                      "end": 4767,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4767,
                      "end": 4780,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4769,
                        "end": 4780,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4769,
                          "end": 4780,
                          "decorators": [],
                          "name": "ReducerArgs",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4782,
                  "end": 4789,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4785,
                    "end": 4789
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 4792,
            "end": 5019,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 4806,
              "end": 5019,
              "body": [
                {
                  "type": "SwitchStatement",
                  "start": 4812,
                  "end": 5017,
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 4834,
                      "end": 4906,
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "start": 4858,
                          "end": 4887,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 4858,
                            "end": 4886,
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "start": 4870,
                                "end": 4885,
                                "operator": "+",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 4870,
                                  "end": 4876,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 4870,
                                    "end": 4874,
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 4875,
                                    "end": 4876,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 4879,
                                  "end": 4885,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 4879,
                                    "end": 4883,
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 4884,
                                    "end": 4885,
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 4858,
                              "end": 4869,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 4858,
                                "end": 4865,
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 4866,
                                "end": 4869,
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "BreakStatement",
                          "start": 4900,
                          "end": 4906,
                          "label": null
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 4839,
                        "end": 4844,
                        "raw": "\"add\"",
                        "value": "add",
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 4915,
                      "end": 5011,
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "start": 4942,
                          "end": 4992,
                          "directive": null,
                          "expression": {
                            "type": "CallExpression",
                            "start": 4942,
                            "end": 4991,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 4954,
                                "end": 4990,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 4975,
                                    "end": 4989,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 4975,
                                      "end": 4979,
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 4980,
                                      "end": 4989,
                                      "decorators": [],
                                      "name": "secondArr",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 4954,
                                  "end": 4974,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 4954,
                                    "end": 4967,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 4954,
                                      "end": 4958,
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 4959,
                                      "end": 4967,
                                      "decorators": [],
                                      "name": "firstArr",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 4968,
                                    "end": 4974,
                                    "decorators": [],
                                    "name": "concat",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 4942,
                              "end": 4953,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 4942,
                                "end": 4949,
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 4950,
                                "end": 4953,
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        {
                          "type": "BreakStatement",
                          "start": 5005,
                          "end": 5011,
                          "label": null
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 4920,
                        "end": 4928,
                        "raw": "\"concat\"",
                        "value": "concat",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ],
                  "discriminant": {
                    "type": "Identifier",
                    "start": 4820,
                    "end": 4822,
                    "decorators": [],
                    "name": "op",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 4793,
                "end": 4795,
                "decorators": [],
                "name": "op",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 4797,
                "end": 4801,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 5021,
      "end": 5052,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 5021,
        "end": 5051,
        "arguments": [
          {
            "type": "Literal",
            "start": 5029,
            "end": 5034,
            "raw": "\"add\"",
            "value": "add",
            "regex": null,
            "bigint": null
          },
          {
            "type": "ObjectExpression",
            "start": 5036,
            "end": 5050,
            "properties": [
              {
                "type": "Property",
                "start": 5038,
                "end": 5042,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5038,
                  "end": 5039,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 5041,
                  "end": 5042,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 5044,
                "end": 5048,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5044,
                  "end": 5045,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 5047,
                  "end": 5048,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 5021,
          "end": 5028,
          "decorators": [],
          "name": "reducer",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5053,
      "end": 5112,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 5053,
        "end": 5111,
        "arguments": [
          {
            "type": "Literal",
            "start": 5061,
            "end": 5069,
            "raw": "\"concat\"",
            "value": "concat",
            "regex": null,
            "bigint": null
          },
          {
            "type": "ObjectExpression",
            "start": 5071,
            "end": 5110,
            "properties": [
              {
                "type": "Property",
                "start": 5073,
                "end": 5089,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5073,
                  "end": 5081,
                  "decorators": [],
                  "name": "firstArr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 5083,
                  "end": 5089,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 5084,
                      "end": 5085,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 5087,
                      "end": 5088,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 5091,
                "end": 5108,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5091,
                  "end": 5100,
                  "decorators": [],
                  "name": "secondArr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 5102,
                  "end": 5108,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 5103,
                      "end": 5104,
                      "raw": "3",
                      "value": 3,
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 5106,
                      "end": 5107,
                      "raw": "4",
                      "value": 4,
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 5053,
          "end": 5060,
          "decorators": [],
          "name": "reducer",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5204,
      "end": 5341,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5209,
        "end": 5218,
        "decorators": [],
        "name": "FooMethod",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 5221,
        "end": 5341,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 5225,
            "end": 5339,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5225,
              "end": 5231,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 5232,
                "end": 5328,
                "argument": {
                  "type": "Identifier",
                  "start": 5235,
                  "end": 5239,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5239,
                  "end": 5328,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 5245,
                    "end": 5328,
                    "types": [
                      {
                        "type": "TSTupleType",
                        "start": 5245,
                        "end": 5283,
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "start": 5246,
                            "end": 5257,
                            "elementType": {
                              "type": "TSLiteralType",
                              "start": 5252,
                              "end": 5257,
                              "literal": {
                                "type": "Literal",
                                "start": 5252,
                                "end": 5257,
                                "raw": "\"str\"",
                                "value": "str",
                                "regex": null,
                                "bigint": null
                              }
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 5246,
                              "end": 5250,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "start": 5259,
                            "end": 5282,
                            "elementType": {
                              "type": "TSFunctionType",
                              "start": 5263,
                              "end": 5282,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 5264,
                                  "end": 5273,
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 5265,
                                    "end": 5273,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 5267,
                                      "end": 5273
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 5275,
                                "end": 5282,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 5278,
                                  "end": 5282
                                }
                              },
                              "typeParameters": null
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 5259,
                              "end": 5261,
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false
                          }
                        ]
                      },
                      {
                        "type": "TSTupleType",
                        "start": 5290,
                        "end": 5328,
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "start": 5291,
                            "end": 5302,
                            "elementType": {
                              "type": "TSLiteralType",
                              "start": 5297,
                              "end": 5302,
                              "literal": {
                                "type": "Literal",
                                "start": 5297,
                                "end": 5302,
                                "raw": "\"num\"",
                                "value": "num",
                                "regex": null,
                                "bigint": null
                              }
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 5291,
                              "end": 5295,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "start": 5304,
                            "end": 5327,
                            "elementType": {
                              "type": "TSFunctionType",
                              "start": 5308,
                              "end": 5327,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 5309,
                                  "end": 5318,
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 5310,
                                    "end": 5318,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 5312,
                                      "end": 5318
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 5320,
                                "end": 5327,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 5323,
                                  "end": 5327
                                }
                              },
                              "typeParameters": null
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 5304,
                              "end": 5306,
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false
                          }
                        ]
                      }
                    ]
                  }
                },
                "value": null
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 5332,
              "end": 5338,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 5334,
                "end": 5338
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 5343,
      "end": 5468,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5347,
          "end": 5467,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5347,
            "end": 5362,
            "decorators": [],
            "name": "fooM",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5351,
              "end": 5362,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5353,
                "end": 5362,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 5353,
                  "end": 5362,
                  "decorators": [],
                  "name": "FooMethod",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 5365,
            "end": 5467,
            "properties": [
              {
                "type": "Property",
                "start": 5369,
                "end": 5465,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5369,
                  "end": 5375,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 5375,
                  "end": 5465,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 5386,
                    "end": 5465,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 5392,
                        "end": 5461,
                        "alternate": {
                          "type": "BlockStatement",
                          "start": 5438,
                          "end": 5461,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 5446,
                              "end": 5455,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 5446,
                                "end": 5455,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 5449,
                                    "end": 5454,
                                    "raw": "\"abc\"",
                                    "value": "abc",
                                    "regex": null,
                                    "bigint": null
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 5446,
                                  "end": 5448,
                                  "decorators": [],
                                  "name": "cb",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 5411,
                          "end": 5432,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 5419,
                              "end": 5426,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 5419,
                                "end": 5426,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 5422,
                                    "end": 5425,
                                    "raw": "123",
                                    "value": 123,
                                    "regex": null,
                                    "bigint": null
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 5419,
                                  "end": 5421,
                                  "decorators": [],
                                  "name": "cb",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "start": 5396,
                          "end": 5409,
                          "operator": "==",
                          "left": {
                            "type": "Identifier",
                            "start": 5396,
                            "end": 5400,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 5404,
                            "end": 5409,
                            "raw": "'num'",
                            "value": "num",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 5376,
                      "end": 5380,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 5382,
                      "end": 5384,
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5470,
      "end": 5620,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5475,
        "end": 5489,
        "decorators": [],
        "name": "FooAsyncMethod",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 5492,
        "end": 5620,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 5496,
            "end": 5618,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5496,
              "end": 5502,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 5503,
                "end": 5599,
                "argument": {
                  "type": "Identifier",
                  "start": 5506,
                  "end": 5510,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5510,
                  "end": 5599,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 5516,
                    "end": 5599,
                    "types": [
                      {
                        "type": "TSTupleType",
                        "start": 5516,
                        "end": 5554,
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "start": 5517,
                            "end": 5528,
                            "elementType": {
                              "type": "TSLiteralType",
                              "start": 5523,
                              "end": 5528,
                              "literal": {
                                "type": "Literal",
                                "start": 5523,
                                "end": 5528,
                                "raw": "\"str\"",
                                "value": "str",
                                "regex": null,
                                "bigint": null
                              }
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 5517,
                              "end": 5521,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "start": 5530,
                            "end": 5553,
                            "elementType": {
                              "type": "TSFunctionType",
                              "start": 5534,
                              "end": 5553,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 5535,
                                  "end": 5544,
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 5536,
                                    "end": 5544,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 5538,
                                      "end": 5544
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 5546,
                                "end": 5553,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 5549,
                                  "end": 5553
                                }
                              },
                              "typeParameters": null
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 5530,
                              "end": 5532,
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false
                          }
                        ]
                      },
                      {
                        "type": "TSTupleType",
                        "start": 5561,
                        "end": 5599,
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "start": 5562,
                            "end": 5573,
                            "elementType": {
                              "type": "TSLiteralType",
                              "start": 5568,
                              "end": 5573,
                              "literal": {
                                "type": "Literal",
                                "start": 5568,
                                "end": 5573,
                                "raw": "\"num\"",
                                "value": "num",
                                "regex": null,
                                "bigint": null
                              }
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 5562,
                              "end": 5566,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "start": 5575,
                            "end": 5598,
                            "elementType": {
                              "type": "TSFunctionType",
                              "start": 5579,
                              "end": 5598,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 5580,
                                  "end": 5589,
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 5581,
                                    "end": 5589,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 5583,
                                      "end": 5589
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 5591,
                                "end": 5598,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 5594,
                                  "end": 5598
                                }
                              },
                              "typeParameters": null
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 5575,
                              "end": 5577,
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false
                          }
                        ]
                      }
                    ]
                  }
                },
                "value": null
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 5603,
              "end": 5617,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5605,
                "end": 5617,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5612,
                  "end": 5617,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 5613,
                      "end": 5616
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 5605,
                  "end": 5612,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 5622,
      "end": 5763,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5626,
          "end": 5762,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5626,
            "end": 5651,
            "decorators": [],
            "name": "fooAsyncM",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5635,
              "end": 5651,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5637,
                "end": 5651,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 5637,
                  "end": 5651,
                  "decorators": [],
                  "name": "FooAsyncMethod",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 5654,
            "end": 5762,
            "properties": [
              {
                "type": "Property",
                "start": 5658,
                "end": 5760,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5664,
                  "end": 5670,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 5670,
                  "end": 5760,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 5681,
                    "end": 5760,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 5687,
                        "end": 5756,
                        "alternate": {
                          "type": "BlockStatement",
                          "start": 5733,
                          "end": 5756,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 5741,
                              "end": 5750,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 5741,
                                "end": 5750,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 5744,
                                    "end": 5749,
                                    "raw": "\"abc\"",
                                    "value": "abc",
                                    "regex": null,
                                    "bigint": null
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 5741,
                                  "end": 5743,
                                  "decorators": [],
                                  "name": "cb",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 5706,
                          "end": 5727,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 5714,
                              "end": 5721,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 5714,
                                "end": 5721,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 5717,
                                    "end": 5720,
                                    "raw": "123",
                                    "value": 123,
                                    "regex": null,
                                    "bigint": null
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 5714,
                                  "end": 5716,
                                  "decorators": [],
                                  "name": "cb",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "start": 5691,
                          "end": 5704,
                          "operator": "==",
                          "left": {
                            "type": "Identifier",
                            "start": 5691,
                            "end": 5695,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 5699,
                            "end": 5704,
                            "raw": "'num'",
                            "value": "num",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 5671,
                      "end": 5675,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 5677,
                      "end": 5679,
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5765,
      "end": 5925,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5770,
        "end": 5782,
        "decorators": [],
        "name": "FooGenMethod",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 5785,
        "end": 5925,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 5789,
            "end": 5923,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 5789,
              "end": 5795,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 5796,
                "end": 5892,
                "argument": {
                  "type": "Identifier",
                  "start": 5799,
                  "end": 5803,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5803,
                  "end": 5892,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 5809,
                    "end": 5892,
                    "types": [
                      {
                        "type": "TSTupleType",
                        "start": 5809,
                        "end": 5847,
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "start": 5810,
                            "end": 5821,
                            "elementType": {
                              "type": "TSLiteralType",
                              "start": 5816,
                              "end": 5821,
                              "literal": {
                                "type": "Literal",
                                "start": 5816,
                                "end": 5821,
                                "raw": "\"str\"",
                                "value": "str",
                                "regex": null,
                                "bigint": null
                              }
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 5810,
                              "end": 5814,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "start": 5823,
                            "end": 5846,
                            "elementType": {
                              "type": "TSFunctionType",
                              "start": 5827,
                              "end": 5846,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 5828,
                                  "end": 5837,
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 5829,
                                    "end": 5837,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 5831,
                                      "end": 5837
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 5839,
                                "end": 5846,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 5842,
                                  "end": 5846
                                }
                              },
                              "typeParameters": null
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 5823,
                              "end": 5825,
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false
                          }
                        ]
                      },
                      {
                        "type": "TSTupleType",
                        "start": 5854,
                        "end": 5892,
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "start": 5855,
                            "end": 5866,
                            "elementType": {
                              "type": "TSLiteralType",
                              "start": 5861,
                              "end": 5866,
                              "literal": {
                                "type": "Literal",
                                "start": 5861,
                                "end": 5866,
                                "raw": "\"num\"",
                                "value": "num",
                                "regex": null,
                                "bigint": null
                              }
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 5855,
                              "end": 5859,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "start": 5868,
                            "end": 5891,
                            "elementType": {
                              "type": "TSFunctionType",
                              "start": 5872,
                              "end": 5891,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 5873,
                                  "end": 5882,
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 5874,
                                    "end": 5882,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 5876,
                                      "end": 5882
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 5884,
                                "end": 5891,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 5887,
                                  "end": 5891
                                }
                              },
                              "typeParameters": null
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 5868,
                              "end": 5870,
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false
                          }
                        ]
                      }
                    ]
                  }
                },
                "value": null
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 5896,
              "end": 5922,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5898,
                "end": 5922,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 5907,
                  "end": 5922,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 5908,
                      "end": 5911
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 5913,
                      "end": 5916
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 5918,
                      "end": 5921
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 5898,
                  "end": 5907,
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 5927,
      "end": 6059,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5931,
          "end": 6058,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5931,
            "end": 5952,
            "decorators": [],
            "name": "fooGenM",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5938,
              "end": 5952,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 5940,
                "end": 5952,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 5940,
                  "end": 5952,
                  "decorators": [],
                  "name": "FooGenMethod",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 5955,
            "end": 6058,
            "properties": [
              {
                "type": "Property",
                "start": 5959,
                "end": 6056,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 5960,
                  "end": 5966,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 5966,
                  "end": 6056,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 5977,
                    "end": 6056,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 5983,
                        "end": 6052,
                        "alternate": {
                          "type": "BlockStatement",
                          "start": 6029,
                          "end": 6052,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 6037,
                              "end": 6046,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 6037,
                                "end": 6046,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 6040,
                                    "end": 6045,
                                    "raw": "\"abc\"",
                                    "value": "abc",
                                    "regex": null,
                                    "bigint": null
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6037,
                                  "end": 6039,
                                  "decorators": [],
                                  "name": "cb",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 6002,
                          "end": 6023,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 6010,
                              "end": 6017,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 6010,
                                "end": 6017,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 6013,
                                    "end": 6016,
                                    "raw": "123",
                                    "value": 123,
                                    "regex": null,
                                    "bigint": null
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6010,
                                  "end": 6012,
                                  "decorators": [],
                                  "name": "cb",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "start": 5987,
                          "end": 6000,
                          "operator": "==",
                          "left": {
                            "type": "Identifier",
                            "start": 5987,
                            "end": 5991,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 5995,
                            "end": 6000,
                            "raw": "'num'",
                            "value": "num",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 5967,
                      "end": 5971,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 5973,
                      "end": 5975,
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6061,
      "end": 6231,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 6066,
        "end": 6083,
        "decorators": [],
        "name": "FooAsyncGenMethod",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 6086,
        "end": 6231,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 6090,
            "end": 6229,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 6090,
              "end": 6096,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 6097,
                "end": 6193,
                "argument": {
                  "type": "Identifier",
                  "start": 6100,
                  "end": 6104,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6104,
                  "end": 6193,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 6110,
                    "end": 6193,
                    "types": [
                      {
                        "type": "TSTupleType",
                        "start": 6110,
                        "end": 6148,
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "start": 6111,
                            "end": 6122,
                            "elementType": {
                              "type": "TSLiteralType",
                              "start": 6117,
                              "end": 6122,
                              "literal": {
                                "type": "Literal",
                                "start": 6117,
                                "end": 6122,
                                "raw": "\"str\"",
                                "value": "str",
                                "regex": null,
                                "bigint": null
                              }
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 6111,
                              "end": 6115,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "start": 6124,
                            "end": 6147,
                            "elementType": {
                              "type": "TSFunctionType",
                              "start": 6128,
                              "end": 6147,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 6129,
                                  "end": 6138,
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 6130,
                                    "end": 6138,
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 6132,
                                      "end": 6138
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 6140,
                                "end": 6147,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 6143,
                                  "end": 6147
                                }
                              },
                              "typeParameters": null
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 6124,
                              "end": 6126,
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false
                          }
                        ]
                      },
                      {
                        "type": "TSTupleType",
                        "start": 6155,
                        "end": 6193,
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "start": 6156,
                            "end": 6167,
                            "elementType": {
                              "type": "TSLiteralType",
                              "start": 6162,
                              "end": 6167,
                              "literal": {
                                "type": "Literal",
                                "start": 6162,
                                "end": 6167,
                                "raw": "\"num\"",
                                "value": "num",
                                "regex": null,
                                "bigint": null
                              }
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 6156,
                              "end": 6160,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "start": 6169,
                            "end": 6192,
                            "elementType": {
                              "type": "TSFunctionType",
                              "start": 6173,
                              "end": 6192,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 6174,
                                  "end": 6183,
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 6175,
                                    "end": 6183,
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 6177,
                                      "end": 6183
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 6185,
                                "end": 6192,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 6188,
                                  "end": 6192
                                }
                              },
                              "typeParameters": null
                            },
                            "label": {
                              "type": "Identifier",
                              "start": 6169,
                              "end": 6171,
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false
                          }
                        ]
                      }
                    ]
                  }
                },
                "value": null
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 6197,
              "end": 6228,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6199,
                "end": 6228,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 6213,
                  "end": 6228,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 6214,
                      "end": 6217
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 6219,
                      "end": 6222
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 6224,
                      "end": 6227
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 6199,
                  "end": 6213,
                  "decorators": [],
                  "name": "AsyncGenerator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 6233,
      "end": 6381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6237,
          "end": 6380,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6237,
            "end": 6268,
            "decorators": [],
            "name": "fooAsyncGenM",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6249,
              "end": 6268,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6251,
                "end": 6268,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 6251,
                  "end": 6268,
                  "decorators": [],
                  "name": "FooAsyncGenMethod",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 6271,
            "end": 6380,
            "properties": [
              {
                "type": "Property",
                "start": 6275,
                "end": 6378,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6282,
                  "end": 6288,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 6288,
                  "end": 6378,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 6299,
                    "end": 6378,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 6305,
                        "end": 6374,
                        "alternate": {
                          "type": "BlockStatement",
                          "start": 6351,
                          "end": 6374,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 6359,
                              "end": 6368,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 6359,
                                "end": 6368,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 6362,
                                    "end": 6367,
                                    "raw": "\"abc\"",
                                    "value": "abc",
                                    "regex": null,
                                    "bigint": null
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6359,
                                  "end": 6361,
                                  "decorators": [],
                                  "name": "cb",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 6324,
                          "end": 6345,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 6332,
                              "end": 6339,
                              "directive": null,
                              "expression": {
                                "type": "CallExpression",
                                "start": 6332,
                                "end": 6339,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 6335,
                                    "end": 6338,
                                    "raw": "123",
                                    "value": 123,
                                    "regex": null,
                                    "bigint": null
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 6332,
                                  "end": 6334,
                                  "decorators": [],
                                  "name": "cb",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "start": 6309,
                          "end": 6322,
                          "operator": "==",
                          "left": {
                            "type": "Identifier",
                            "start": 6309,
                            "end": 6313,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 6317,
                            "end": 6322,
                            "raw": "'num'",
                            "value": "num",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 6289,
                      "end": 6293,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 6295,
                      "end": 6297,
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6405,
      "end": 6479,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 6410,
        "end": 6414,
        "decorators": [],
        "name": "Func",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 6417,
        "end": 6478,
        "params": [
          {
            "type": "RestElement",
            "start": 6459,
            "end": 6469,
            "argument": {
              "type": "Identifier",
              "start": 6462,
              "end": 6466,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6466,
              "end": 6469,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6468,
                "end": 6469,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 6468,
                  "end": 6469,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 6471,
          "end": 6478,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 6474,
            "end": 6478
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 6417,
          "end": 6458,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 6418,
              "end": 6457,
              "const": false,
              "constraint": {
                "type": "TSUnionType",
                "start": 6428,
                "end": 6457,
                "types": [
                  {
                    "type": "TSTupleType",
                    "start": 6428,
                    "end": 6441,
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "start": 6429,
                        "end": 6432,
                        "literal": {
                          "type": "Literal",
                          "start": 6429,
                          "end": 6432,
                          "raw": "\"a\"",
                          "value": "a",
                          "regex": null,
                          "bigint": null
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 6434,
                        "end": 6440
                      }
                    ]
                  },
                  {
                    "type": "TSTupleType",
                    "start": 6444,
                    "end": 6457,
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "start": 6445,
                        "end": 6448,
                        "literal": {
                          "type": "Literal",
                          "start": 6445,
                          "end": 6448,
                          "raw": "\"b\"",
                          "value": "b",
                          "regex": null,
                          "bigint": null
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 6450,
                        "end": 6456
                      }
                    ]
                  }
                ]
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 6418,
                "end": 6419,
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
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 6481,
      "end": 6660,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6487,
          "end": 6659,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6487,
            "end": 6496,
            "decorators": [],
            "name": "f60",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6490,
              "end": 6496,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6492,
                "end": 6496,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 6492,
                  "end": 6496,
                  "decorators": [],
                  "name": "Func",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 6499,
            "end": 6659,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 6518,
              "end": 6659,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 6524,
                  "end": 6586,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 6542,
                    "end": 6586,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 6552,
                        "end": 6570,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 6552,
                          "end": 6569,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 6552,
                            "end": 6567,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 6552,
                              "end": 6559,
                              "decorators": [],
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 6560,
                              "end": 6567,
                              "decorators": [],
                              "name": "toFixed",
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
                    "start": 6528,
                    "end": 6540,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 6528,
                      "end": 6532,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 6537,
                      "end": 6540,
                      "raw": "\"a\"",
                      "value": "a",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 6591,
                  "end": 6657,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 6609,
                    "end": 6657,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 6619,
                        "end": 6641,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 6619,
                          "end": 6640,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 6619,
                            "end": 6638,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 6619,
                              "end": 6626,
                              "decorators": [],
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 6627,
                              "end": 6638,
                              "decorators": [],
                              "name": "toUpperCase",
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
                    "start": 6595,
                    "end": 6607,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 6595,
                      "end": 6599,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 6604,
                      "end": 6607,
                      "raw": "\"b\"",
                      "value": "b",
                      "regex": null,
                      "bigint": null
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
                "start": 6500,
                "end": 6504,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 6506,
                "end": 6513,
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
      "start": 6684,
      "end": 6949,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 6947,
        "end": 6949,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 6693,
        "end": 6696,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 6697,
          "end": 6945,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 6703,
              "end": 6709,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6703,
                "end": 6709,
                "decorators": [],
                "name": "value1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 6703,
                "end": 6709,
                "decorators": [],
                "name": "value1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 6715,
              "end": 6735,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6715,
                "end": 6720,
                "decorators": [],
                "name": "test1",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 6715,
                "end": 6735,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 6715,
                  "end": 6720,
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "MemberExpression",
                  "start": 6723,
                  "end": 6735,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 6723,
                    "end": 6729,
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 6730,
                    "end": 6735,
                    "decorators": [],
                    "name": "test1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 6741,
              "end": 6761,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6741,
                "end": 6746,
                "decorators": [],
                "name": "test2",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 6741,
                "end": 6761,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 6741,
                  "end": 6746,
                  "decorators": [],
                  "name": "test2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "MemberExpression",
                  "start": 6749,
                  "end": 6761,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 6749,
                    "end": 6755,
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 6756,
                    "end": 6761,
                    "decorators": [],
                    "name": "test2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 6767,
              "end": 6787,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6767,
                "end": 6772,
                "decorators": [],
                "name": "test3",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 6767,
                "end": 6787,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 6767,
                  "end": 6772,
                  "decorators": [],
                  "name": "test3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "MemberExpression",
                  "start": 6775,
                  "end": 6787,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 6775,
                    "end": 6781,
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 6782,
                    "end": 6787,
                    "decorators": [],
                    "name": "test3",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 6793,
              "end": 6813,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6793,
                "end": 6798,
                "decorators": [],
                "name": "test4",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 6793,
                "end": 6813,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 6793,
                  "end": 6798,
                  "decorators": [],
                  "name": "test4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "MemberExpression",
                  "start": 6801,
                  "end": 6813,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 6801,
                    "end": 6807,
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 6808,
                    "end": 6813,
                    "decorators": [],
                    "name": "test4",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 6819,
              "end": 6839,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6819,
                "end": 6824,
                "decorators": [],
                "name": "test5",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 6819,
                "end": 6839,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 6819,
                  "end": 6824,
                  "decorators": [],
                  "name": "test5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "MemberExpression",
                  "start": 6827,
                  "end": 6839,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 6827,
                    "end": 6833,
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 6834,
                    "end": 6839,
                    "decorators": [],
                    "name": "test5",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 6845,
              "end": 6865,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6845,
                "end": 6850,
                "decorators": [],
                "name": "test6",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 6845,
                "end": 6865,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 6845,
                  "end": 6850,
                  "decorators": [],
                  "name": "test6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "MemberExpression",
                  "start": 6853,
                  "end": 6865,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 6853,
                    "end": 6859,
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 6860,
                    "end": 6865,
                    "decorators": [],
                    "name": "test6",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 6871,
              "end": 6891,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6871,
                "end": 6876,
                "decorators": [],
                "name": "test7",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 6871,
                "end": 6891,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 6871,
                  "end": 6876,
                  "decorators": [],
                  "name": "test7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "MemberExpression",
                  "start": 6879,
                  "end": 6891,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 6879,
                    "end": 6885,
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 6886,
                    "end": 6891,
                    "decorators": [],
                    "name": "test7",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 6897,
              "end": 6917,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6897,
                "end": 6902,
                "decorators": [],
                "name": "test8",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 6897,
                "end": 6917,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 6897,
                  "end": 6902,
                  "decorators": [],
                  "name": "test8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "MemberExpression",
                  "start": 6905,
                  "end": 6917,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 6905,
                    "end": 6911,
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 6912,
                    "end": 6917,
                    "decorators": [],
                    "name": "test8",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 6923,
              "end": 6943,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6923,
                "end": 6928,
                "decorators": [],
                "name": "test9",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 6923,
                "end": 6943,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 6923,
                  "end": 6928,
                  "decorators": [],
                  "name": "test9",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "MemberExpression",
                  "start": 6931,
                  "end": 6943,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 6931,
                    "end": 6937,
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 6938,
                    "end": 6943,
                    "decorators": [],
                    "name": "test9",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 6973,
      "end": 7220,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 7023,
        "end": 7220,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 7029,
            "end": 7054,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 7035,
                "end": 7053,
                "definite": false,
                "id": {
                  "type": "ArrayPattern",
                  "start": 7035,
                  "end": 7049,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 7036,
                      "end": 7041,
                      "decorators": [],
                      "name": "guard",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 7043,
                      "end": 7048,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 7052,
                  "end": 7053,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 7059,
            "end": 7218,
            "alternate": {
              "type": "BlockStatement",
              "start": 7146,
              "end": 7218,
              "body": [
                {
                  "type": "WhileStatement",
                  "start": 7156,
                  "end": 7212,
                  "body": {
                    "type": "BlockStatement",
                    "start": 7171,
                    "end": 7212,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 7185,
                        "end": 7191,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 7185,
                          "end": 7190,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "start": 7163,
                    "end": 7169,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 7164,
                      "end": 7169,
                      "argument": {
                        "type": "Literal",
                        "start": 7165,
                        "end": 7169,
                        "raw": "true",
                        "value": true,
                        "regex": null,
                        "bigint": null
                      },
                      "operator": "!",
                      "prefix": true
                    },
                    "operator": "!",
                    "prefix": true
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 7070,
              "end": 7136,
              "body": [
                {
                  "type": "ForStatement",
                  "start": 7080,
                  "end": 7130,
                  "body": {
                    "type": "BlockStatement",
                    "start": 7089,
                    "end": 7130,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 7103,
                        "end": 7109,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 7103,
                          "end": 7108,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "init": null,
                  "test": null,
                  "update": null
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 7063,
              "end": 7068,
              "decorators": [],
              "name": "guard",
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
        "start": 6982,
        "end": 6985,
        "decorators": [],
        "name": "fa1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 6986,
          "end": 7021,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6987,
            "end": 7021,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 6989,
              "end": 7021,
              "types": [
                {
                  "type": "TSTupleType",
                  "start": 6989,
                  "end": 7003,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 6990,
                      "end": 6994,
                      "literal": {
                        "type": "Literal",
                        "start": 6990,
                        "end": 6994,
                        "raw": "true",
                        "value": true,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 6996,
                      "end": 7002
                    }
                  ]
                },
                {
                  "type": "TSTupleType",
                  "start": 7006,
                  "end": 7021,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 7007,
                      "end": 7012,
                      "literal": {
                        "type": "Literal",
                        "start": 7007,
                        "end": 7012,
                        "raw": "false",
                        "value": false,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 7014,
                      "end": 7020
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
      "start": 7222,
      "end": 7503,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 7304,
        "end": 7503,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 7310,
            "end": 7337,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 7316,
                "end": 7336,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 7316,
                  "end": 7332,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 7318,
                      "end": 7323,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 7318,
                        "end": 7323,
                        "decorators": [],
                        "name": "guard",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 7318,
                        "end": 7323,
                        "decorators": [],
                        "name": "guard",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 7325,
                      "end": 7330,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 7325,
                        "end": 7330,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 7325,
                        "end": 7330,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 7335,
                  "end": 7336,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 7342,
            "end": 7501,
            "alternate": {
              "type": "BlockStatement",
              "start": 7429,
              "end": 7501,
              "body": [
                {
                  "type": "WhileStatement",
                  "start": 7439,
                  "end": 7495,
                  "body": {
                    "type": "BlockStatement",
                    "start": 7454,
                    "end": 7495,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 7468,
                        "end": 7474,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 7468,
                          "end": 7473,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "start": 7446,
                    "end": 7452,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 7447,
                      "end": 7452,
                      "argument": {
                        "type": "Literal",
                        "start": 7448,
                        "end": 7452,
                        "raw": "true",
                        "value": true,
                        "regex": null,
                        "bigint": null
                      },
                      "operator": "!",
                      "prefix": true
                    },
                    "operator": "!",
                    "prefix": true
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 7353,
              "end": 7419,
              "body": [
                {
                  "type": "ForStatement",
                  "start": 7363,
                  "end": 7413,
                  "body": {
                    "type": "BlockStatement",
                    "start": 7372,
                    "end": 7413,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 7386,
                        "end": 7392,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 7386,
                          "end": 7391,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "init": null,
                  "test": null,
                  "update": null
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 7346,
              "end": 7351,
              "decorators": [],
              "name": "guard",
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
        "start": 7231,
        "end": 7234,
        "decorators": [],
        "name": "fa2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 7235,
          "end": 7302,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7236,
            "end": 7302,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 7238,
              "end": 7302,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 7238,
                  "end": 7268,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 7240,
                      "end": 7252,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 7240,
                        "end": 7245,
                        "decorators": [],
                        "name": "guard",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7245,
                        "end": 7251,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 7247,
                          "end": 7251,
                          "literal": {
                            "type": "Literal",
                            "start": 7247,
                            "end": 7251,
                            "raw": "true",
                            "value": true,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 7253,
                      "end": 7266,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 7253,
                        "end": 7258,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7258,
                        "end": 7266,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 7260,
                          "end": 7266
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 7271,
                  "end": 7302,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 7273,
                      "end": 7286,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 7273,
                        "end": 7278,
                        "decorators": [],
                        "name": "guard",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7278,
                        "end": 7285,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 7280,
                          "end": 7285,
                          "literal": {
                            "type": "Literal",
                            "start": 7280,
                            "end": 7285,
                            "raw": "false",
                            "value": false,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 7287,
                      "end": 7300,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 7287,
                        "end": 7292,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 7292,
                        "end": 7300,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 7294,
                          "end": 7300
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
      "start": 7505,
      "end": 7755,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7511,
          "end": 7755,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 7511,
            "end": 7567,
            "decorators": [],
            "name": "fa3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7514,
              "end": 7567,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 7516,
                "end": 7567,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 7517,
                    "end": 7558,
                    "argument": {
                      "type": "Identifier",
                      "start": 7520,
                      "end": 7524,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 7524,
                      "end": 7558,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 7526,
                        "end": 7558,
                        "types": [
                          {
                            "type": "TSTupleType",
                            "start": 7526,
                            "end": 7540,
                            "elementTypes": [
                              {
                                "type": "TSLiteralType",
                                "start": 7527,
                                "end": 7531,
                                "literal": {
                                  "type": "Literal",
                                  "start": 7527,
                                  "end": 7531,
                                  "raw": "true",
                                  "value": true,
                                  "regex": null,
                                  "bigint": null
                                }
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 7533,
                                "end": 7539
                              }
                            ]
                          },
                          {
                            "type": "TSTupleType",
                            "start": 7543,
                            "end": 7558,
                            "elementTypes": [
                              {
                                "type": "TSLiteralType",
                                "start": 7544,
                                "end": 7549,
                                "literal": {
                                  "type": "Literal",
                                  "start": 7544,
                                  "end": 7549,
                                  "raw": "false",
                                  "value": false,
                                  "regex": null,
                                  "bigint": null
                                }
                              },
                              {
                                "type": "TSStringKeyword",
                                "start": 7551,
                                "end": 7557
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 7560,
                  "end": 7567,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 7563,
                    "end": 7567
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 7570,
            "end": 7755,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 7588,
              "end": 7755,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 7594,
                  "end": 7753,
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 7681,
                    "end": 7753,
                    "body": [
                      {
                        "type": "WhileStatement",
                        "start": 7691,
                        "end": 7747,
                        "body": {
                          "type": "BlockStatement",
                          "start": 7706,
                          "end": 7747,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 7720,
                              "end": 7726,
                              "directive": null,
                              "expression": {
                                "type": "Identifier",
                                "start": 7720,
                                "end": 7725,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "UnaryExpression",
                          "start": 7698,
                          "end": 7704,
                          "argument": {
                            "type": "UnaryExpression",
                            "start": 7699,
                            "end": 7704,
                            "argument": {
                              "type": "Literal",
                              "start": 7700,
                              "end": 7704,
                              "raw": "true",
                              "value": true,
                              "regex": null,
                              "bigint": null
                            },
                            "operator": "!",
                            "prefix": true
                          },
                          "operator": "!",
                          "prefix": true
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 7605,
                    "end": 7671,
                    "body": [
                      {
                        "type": "ForStatement",
                        "start": 7615,
                        "end": 7665,
                        "body": {
                          "type": "BlockStatement",
                          "start": 7624,
                          "end": 7665,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 7638,
                              "end": 7644,
                              "directive": null,
                              "expression": {
                                "type": "Identifier",
                                "start": 7638,
                                "end": 7643,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "init": null,
                        "test": null,
                        "update": null
                      }
                    ]
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 7598,
                    "end": 7603,
                    "decorators": [],
                    "name": "guard",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 7571,
                "end": 7576,
                "decorators": [],
                "name": "guard",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 7578,
                "end": 7583,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 7779,
      "end": 7898,
      "body": {
        "type": "TSInterfaceBody",
        "start": 7802,
        "end": 7898,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 7808,
            "end": 7832,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 7808,
              "end": 7812,
              "decorators": [],
              "name": "warn",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7812,
              "end": 7831,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 7814,
                "end": 7831,
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "start": 7815,
                    "end": 7830,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 7824,
                      "end": 7830
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 7815,
                      "end": 7822,
                      "decorators": [],
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 7837,
            "end": 7896,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 7837,
              "end": 7852,
              "decorators": [],
              "name": "shardDisconnect",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7852,
              "end": 7895,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 7854,
                "end": 7895,
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "start": 7855,
                    "end": 7877,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 7867,
                      "end": 7877,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7867,
                        "end": 7877,
                        "decorators": [],
                        "name": "CloseEvent",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 7855,
                      "end": 7865,
                      "decorators": [],
                      "name": "closeEvent",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "start": 7879,
                    "end": 7894,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 7888,
                      "end": 7894
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 7879,
                      "end": 7886,
                      "decorators": [],
                      "name": "shardId",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 7789,
        "end": 7801,
        "decorators": [],
        "name": "ClientEvents",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 7902,
      "end": 8033,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 7923,
        "end": 8033,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 7929,
            "end": 8031,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 7936,
              "end": 7938,
              "decorators": [],
              "name": "on",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 7938,
              "end": 8031,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 7969,
                  "end": 7977,
                  "decorators": [],
                  "name": "event",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 7974,
                    "end": 7977,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 7976,
                      "end": 7977,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 7976,
                        "end": 7977,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 7979,
                  "end": 8023,
                  "decorators": [],
                  "name": "listener",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 7987,
                    "end": 8023,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 7989,
                      "end": 8023,
                      "params": [
                        {
                          "type": "RestElement",
                          "start": 7990,
                          "end": 8014,
                          "argument": {
                            "type": "Identifier",
                            "start": 7993,
                            "end": 7997,
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 7997,
                            "end": 8014,
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "start": 7999,
                              "end": 8014,
                              "indexType": {
                                "type": "TSTypeReference",
                                "start": 8012,
                                "end": 8013,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 8012,
                                  "end": 8013,
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 7999,
                                "end": 8011,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 7999,
                                  "end": 8011,
                                  "decorators": [],
                                  "name": "ClientEvents",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          },
                          "value": null
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 8016,
                        "end": 8023,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8019,
                          "end": 8023
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 8024,
                "end": 8030,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 8026,
                  "end": 8030
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 7938,
                "end": 7968,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 7939,
                    "end": 7967,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 7949,
                      "end": 7967,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 7955,
                        "end": 7967,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 7955,
                          "end": 7967,
                          "decorators": [],
                          "name": "ClientEvents",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 7939,
                      "end": 7940,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 7916,
        "end": 7922,
        "decorators": [],
        "name": "Client",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 8035,
      "end": 8060,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 8041,
          "end": 8059,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 8041,
            "end": 8044,
            "decorators": [],
            "name": "bot",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 8047,
            "end": 8059,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 8051,
              "end": 8057,
              "decorators": [],
              "name": "Client",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 8061,
      "end": 8200,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 8061,
        "end": 8199,
        "arguments": [
          {
            "type": "Literal",
            "start": 8068,
            "end": 8085,
            "raw": "\"shardDisconnect\"",
            "value": "shardDisconnect",
            "regex": null,
            "bigint": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 8087,
            "end": 8198,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 8105,
              "end": 8198,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "start": 8117,
                  "end": 8197,
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 8126,
                      "end": 8131,
                      "decorators": [],
                      "name": "shard",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "MemberExpression",
                      "start": 8149,
                      "end": 8159,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 8149,
                        "end": 8154,
                        "decorators": [],
                        "name": "event",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 8155,
                        "end": 8159,
                        "decorators": [],
                        "name": "code",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "MemberExpression",
                      "start": 8163,
                      "end": 8177,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 8163,
                        "end": 8168,
                        "decorators": [],
                        "name": "event",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 8169,
                        "end": 8177,
                        "decorators": [],
                        "name": "wasClean",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "MemberExpression",
                      "start": 8183,
                      "end": 8195,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 8183,
                        "end": 8188,
                        "decorators": [],
                        "name": "event",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 8189,
                        "end": 8195,
                        "decorators": [],
                        "name": "reason",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 8117,
                      "end": 8126,
                      "tail": false,
                      "value": {
                        "cooked": "Shard ",
                        "raw": "Shard "
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 8131,
                      "end": 8149,
                      "tail": false,
                      "value": {
                        "cooked": " disconnected (",
                        "raw": " disconnected ("
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 8159,
                      "end": 8163,
                      "tail": false,
                      "value": {
                        "cooked": ",",
                        "raw": ","
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 8177,
                      "end": 8183,
                      "tail": false,
                      "value": {
                        "cooked": "): ",
                        "raw": "): "
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 8195,
                      "end": 8197,
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 8105,
                "end": 8116,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 8105,
                  "end": 8112,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 8113,
                  "end": 8116,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 8088,
                "end": 8093,
                "decorators": [],
                "name": "event",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 8095,
                "end": 8100,
                "decorators": [],
                "name": "shard",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 8061,
          "end": 8067,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 8061,
            "end": 8064,
            "decorators": [],
            "name": "bot",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 8065,
            "end": 8067,
            "decorators": [],
            "name": "on",
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
      "start": 8201,
      "end": 8300,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 8201,
        "end": 8299,
        "arguments": [
          {
            "type": "Literal",
            "start": 8208,
            "end": 8225,
            "raw": "\"shardDisconnect\"",
            "value": "shardDisconnect",
            "regex": null,
            "bigint": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 8227,
            "end": 8298,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 8236,
              "end": 8298,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "start": 8248,
                  "end": 8297,
                  "expressions": [
                    {
                      "type": "MemberExpression",
                      "start": 8251,
                      "end": 8261,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 8251,
                        "end": 8256,
                        "decorators": [],
                        "name": "event",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 8257,
                        "end": 8261,
                        "decorators": [],
                        "name": "code",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "MemberExpression",
                      "start": 8265,
                      "end": 8279,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 8265,
                        "end": 8270,
                        "decorators": [],
                        "name": "event",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 8271,
                        "end": 8279,
                        "decorators": [],
                        "name": "wasClean",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "MemberExpression",
                      "start": 8283,
                      "end": 8295,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 8283,
                        "end": 8288,
                        "decorators": [],
                        "name": "event",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 8289,
                        "end": 8295,
                        "decorators": [],
                        "name": "reason",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 8248,
                      "end": 8251,
                      "tail": false,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 8261,
                      "end": 8265,
                      "tail": false,
                      "value": {
                        "cooked": " ",
                        "raw": " "
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 8279,
                      "end": 8283,
                      "tail": false,
                      "value": {
                        "cooked": " ",
                        "raw": " "
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 8295,
                      "end": 8297,
                      "tail": true,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 8236,
                "end": 8247,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 8236,
                  "end": 8243,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 8244,
                  "end": 8247,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 8227,
                "end": 8232,
                "decorators": [],
                "name": "event",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 8201,
          "end": 8207,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 8201,
            "end": 8204,
            "decorators": [],
            "name": "bot",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 8205,
            "end": 8207,
            "decorators": [],
            "name": "on",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 8355,
      "end": 8670,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 8399,
        "end": 8670,
        "body": [
          {
            "type": "IfStatement",
            "start": 8405,
            "end": 8442,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 8418,
              "end": 8442,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 8428,
                  "end": 8430,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 8428,
                    "end": 8429,
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
              "start": 8409,
              "end": 8416,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 8409,
                "end": 8410,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 8415,
                "end": 8416,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 8447,
            "end": 8484,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 8460,
              "end": 8484,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 8470,
                  "end": 8472,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 8470,
                    "end": 8471,
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
              "start": 8451,
              "end": 8458,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 8451,
                "end": 8452,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 8457,
                "end": 8458,
                "raw": "4",
                "value": 4,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 8489,
            "end": 8534,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 8510,
              "end": 8534,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 8520,
                  "end": 8522,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 8520,
                    "end": 8521,
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
              "start": 8493,
              "end": 8508,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 8493,
                "end": 8494,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 8499,
                "end": 8508,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 8539,
            "end": 8576,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 8552,
              "end": 8576,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 8562,
                  "end": 8564,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 8562,
                    "end": 8563,
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
              "start": 8543,
              "end": 8550,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 8543,
                "end": 8544,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 8549,
                "end": 8550,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 8581,
            "end": 8618,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 8594,
              "end": 8618,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 8604,
                  "end": 8606,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 8604,
                    "end": 8605,
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
              "start": 8585,
              "end": 8592,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 8585,
                "end": 8586,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 8591,
                "end": 8592,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 8623,
            "end": 8668,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 8636,
              "end": 8668,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 8646,
                  "end": 8648,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 8646,
                    "end": 8647,
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
              "start": 8627,
              "end": 8634,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 8627,
                "end": 8628,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 8633,
                "end": 8634,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
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
        "start": 8364,
        "end": 8367,
        "decorators": [],
        "name": "fz1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 8368,
          "end": 8397,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 8369,
              "end": 8370,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 8372,
              "end": 8373,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 8374,
            "end": 8397,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 8376,
              "end": 8397,
              "types": [
                {
                  "type": "TSTupleType",
                  "start": 8376,
                  "end": 8382,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 8377,
                      "end": 8378,
                      "literal": {
                        "type": "Literal",
                        "start": 8377,
                        "end": 8378,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 8380,
                      "end": 8381,
                      "literal": {
                        "type": "Literal",
                        "start": 8380,
                        "end": 8381,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                {
                  "type": "TSTupleType",
                  "start": 8385,
                  "end": 8391,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 8386,
                      "end": 8387,
                      "literal": {
                        "type": "Literal",
                        "start": 8386,
                        "end": 8387,
                        "raw": "3",
                        "value": 3,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 8389,
                      "end": 8390,
                      "literal": {
                        "type": "Literal",
                        "start": 8389,
                        "end": 8390,
                        "raw": "4",
                        "value": 4,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                {
                  "type": "TSTupleType",
                  "start": 8394,
                  "end": 8397,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 8395,
                      "end": 8396,
                      "literal": {
                        "type": "Literal",
                        "start": 8395,
                        "end": 8396,
                        "raw": "5",
                        "value": 5,
                        "regex": null,
                        "bigint": null
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
      "start": 8694,
      "end": 8830,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 8744,
        "end": 8830,
        "body": [
          {
            "type": "IfStatement",
            "start": 8750,
            "end": 8828,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 8771,
              "end": 8828,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 8781,
                  "end": 8812,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 8787,
                      "end": 8811,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 8787,
                        "end": 8807,
                        "decorators": [],
                        "name": "shouldNotBeOk",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 8800,
                          "end": 8807,
                          "typeAnnotation": {
                            "type": "TSNeverKeyword",
                            "start": 8802,
                            "end": 8807
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 8810,
                        "end": 8811,
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
              "start": 8754,
              "end": 8769,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 8754,
                "end": 8755,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 8760,
                "end": 8769,
                "decorators": [],
                "name": "undefined",
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
        "start": 8703,
        "end": 8712,
        "decorators": [],
        "name": "tooNarrow",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 8713,
          "end": 8742,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 8714,
              "end": 8715,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 8717,
              "end": 8718,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 8719,
            "end": 8742,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 8721,
              "end": 8742,
              "types": [
                {
                  "type": "TSTupleType",
                  "start": 8721,
                  "end": 8727,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 8722,
                      "end": 8723,
                      "literal": {
                        "type": "Literal",
                        "start": 8722,
                        "end": 8723,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 8725,
                      "end": 8726,
                      "literal": {
                        "type": "Literal",
                        "start": 8725,
                        "end": 8726,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                {
                  "type": "TSTupleType",
                  "start": 8730,
                  "end": 8736,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 8731,
                      "end": 8732,
                      "literal": {
                        "type": "Literal",
                        "start": 8731,
                        "end": 8732,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 8734,
                      "end": 8735,
                      "literal": {
                        "type": "Literal",
                        "start": 8734,
                        "end": 8735,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                {
                  "type": "TSTupleType",
                  "start": 8739,
                  "end": 8742,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 8740,
                      "end": 8741,
                      "literal": {
                        "type": "Literal",
                        "start": 8740,
                        "end": 8741,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
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
      "start": 8889,
      "end": 9022,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 8944,
        "end": 9022,
        "body": [
          {
            "type": "IfStatement",
            "start": 8948,
            "end": 8983,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 8967,
              "end": 8983,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 8973,
                  "end": 8979,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 8973,
                    "end": 8978,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 8973,
                      "end": 8974,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 8977,
                      "end": 8978,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 8952,
              "end": 8965,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 8952,
                "end": 8963,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 8952,
                  "end": 8956,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 8957,
                  "end": 8963,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "IfStatement",
            "start": 8986,
            "end": 9020,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 8999,
              "end": 9020,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 9005,
                  "end": 9007,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 9005,
                    "end": 9006,
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
              "start": 8990,
              "end": 8997,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 8990,
                "end": 8991,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 8996,
                "end": 8997,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
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
        "start": 8898,
        "end": 8918,
        "decorators": [],
        "name": "parameterReassigned1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 8919,
          "end": 8942,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 8920,
              "end": 8921,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 8923,
              "end": 8924,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 8925,
            "end": 8942,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 8927,
              "end": 8942,
              "types": [
                {
                  "type": "TSTupleType",
                  "start": 8927,
                  "end": 8933,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 8928,
                      "end": 8929,
                      "literal": {
                        "type": "Literal",
                        "start": 8928,
                        "end": 8929,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 8931,
                      "end": 8932,
                      "literal": {
                        "type": "Literal",
                        "start": 8931,
                        "end": 8932,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                {
                  "type": "TSTupleType",
                  "start": 8936,
                  "end": 8942,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 8937,
                      "end": 8938,
                      "literal": {
                        "type": "Literal",
                        "start": 8937,
                        "end": 8938,
                        "raw": "3",
                        "value": 3,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 8940,
                      "end": 8941,
                      "literal": {
                        "type": "Literal",
                        "start": 8940,
                        "end": 8941,
                        "raw": "4",
                        "value": 4,
                        "regex": null,
                        "bigint": null
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
      "start": 9024,
      "end": 9157,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 9079,
        "end": 9157,
        "body": [
          {
            "type": "IfStatement",
            "start": 9083,
            "end": 9118,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 9102,
              "end": 9118,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 9108,
                  "end": 9114,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 9108,
                    "end": 9113,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 9108,
                      "end": 9109,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 9112,
                      "end": 9113,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 9087,
              "end": 9100,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 9087,
                "end": 9098,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 9087,
                  "end": 9091,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 9092,
                  "end": 9098,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "IfStatement",
            "start": 9121,
            "end": 9155,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 9134,
              "end": 9155,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 9140,
                  "end": 9142,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 9140,
                    "end": 9141,
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
              "start": 9125,
              "end": 9132,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 9125,
                "end": 9126,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 9131,
                "end": 9132,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
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
        "start": 9033,
        "end": 9053,
        "decorators": [],
        "name": "parameterReassigned2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 9054,
          "end": 9077,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 9055,
              "end": 9056,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 9058,
              "end": 9059,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 9060,
            "end": 9077,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 9062,
              "end": 9077,
              "types": [
                {
                  "type": "TSTupleType",
                  "start": 9062,
                  "end": 9068,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 9063,
                      "end": 9064,
                      "literal": {
                        "type": "Literal",
                        "start": 9063,
                        "end": 9064,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 9066,
                      "end": 9067,
                      "literal": {
                        "type": "Literal",
                        "start": 9066,
                        "end": 9067,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                {
                  "type": "TSTupleType",
                  "start": 9071,
                  "end": 9077,
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "start": 9072,
                      "end": 9073,
                      "literal": {
                        "type": "Literal",
                        "start": 9072,
                        "end": 9073,
                        "raw": "3",
                        "value": 3,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 9075,
                      "end": 9076,
                      "literal": {
                        "type": "Literal",
                        "start": 9075,
                        "end": 9076,
                        "raw": "4",
                        "value": 4,
                        "regex": null,
                        "bigint": null
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
      "start": 9237,
      "end": 9404,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 9243,
          "end": 9404,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 9243,
            "end": 9313,
            "decorators": [],
            "name": "parameterReassignedContextualRest1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9277,
              "end": 9313,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 9279,
                "end": 9313,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 9280,
                    "end": 9304,
                    "argument": {
                      "type": "Identifier",
                      "start": 9283,
                      "end": 9287,
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 9287,
                      "end": 9304,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 9289,
                        "end": 9304,
                        "types": [
                          {
                            "type": "TSTupleType",
                            "start": 9289,
                            "end": 9295,
                            "elementTypes": [
                              {
                                "type": "TSLiteralType",
                                "start": 9290,
                                "end": 9291,
                                "literal": {
                                  "type": "Literal",
                                  "start": 9290,
                                  "end": 9291,
                                  "raw": "1",
                                  "value": 1,
                                  "regex": null,
                                  "bigint": null
                                }
                              },
                              {
                                "type": "TSLiteralType",
                                "start": 9293,
                                "end": 9294,
                                "literal": {
                                  "type": "Literal",
                                  "start": 9293,
                                  "end": 9294,
                                  "raw": "2",
                                  "value": 2,
                                  "regex": null,
                                  "bigint": null
                                }
                              }
                            ]
                          },
                          {
                            "type": "TSTupleType",
                            "start": 9298,
                            "end": 9304,
                            "elementTypes": [
                              {
                                "type": "TSLiteralType",
                                "start": 9299,
                                "end": 9300,
                                "literal": {
                                  "type": "Literal",
                                  "start": 9299,
                                  "end": 9300,
                                  "raw": "3",
                                  "value": 3,
                                  "regex": null,
                                  "bigint": null
                                }
                              },
                              {
                                "type": "TSLiteralType",
                                "start": 9302,
                                "end": 9303,
                                "literal": {
                                  "type": "Literal",
                                  "start": 9302,
                                  "end": 9303,
                                  "raw": "4",
                                  "value": 4,
                                  "regex": null,
                                  "bigint": null
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 9306,
                  "end": 9313,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 9309,
                    "end": 9313
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 9316,
            "end": 9404,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 9326,
              "end": 9404,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 9330,
                  "end": 9365,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 9349,
                    "end": 9365,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 9355,
                        "end": 9361,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 9355,
                          "end": 9360,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 9355,
                            "end": 9356,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 9359,
                            "end": 9360,
                            "raw": "2",
                            "value": 2,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "CallExpression",
                    "start": 9334,
                    "end": 9347,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 9334,
                      "end": 9345,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 9334,
                        "end": 9338,
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 9339,
                        "end": 9345,
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 9368,
                  "end": 9402,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 9381,
                    "end": 9402,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 9387,
                        "end": 9389,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 9387,
                          "end": 9388,
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
                    "start": 9372,
                    "end": 9379,
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "start": 9372,
                      "end": 9373,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 9378,
                      "end": 9379,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
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
                "start": 9317,
                "end": 9318,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 9320,
                "end": 9321,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
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
