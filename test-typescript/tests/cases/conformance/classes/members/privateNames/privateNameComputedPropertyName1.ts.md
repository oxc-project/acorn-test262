__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 719,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 700,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 700,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 23,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 16,
              "name": "a"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 19,
              "end": 22,
              "raw": "'a'",
              "value": "a"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 39,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 28,
              "end": 30,
              "name": "b"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 45,
            "end": 63,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 54,
              "end": 56,
              "name": "c"
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 59,
              "end": 62,
              "raw": "'c'",
              "value": "c"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 68,
            "end": 88,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 77,
              "end": 79,
              "name": "d"
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 94,
            "end": 102,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 94,
              "end": 96,
              "name": "e"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 99,
              "end": 101,
              "raw": "''",
              "value": ""
            }
          },
          {
            "type": "MethodDefinition",
            "start": 108,
            "end": 175,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 119,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 119,
              "end": 175,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 122,
                "end": 175,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 132,
                    "end": 146,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 132,
                      "end": 145,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 132,
                        "end": 139,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 132,
                          "end": 136
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 137,
                          "end": 139,
                          "name": "b"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 142,
                        "end": 145,
                        "raw": "'b'",
                        "value": "b"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 155,
                    "end": 169,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 155,
                      "end": 168,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 155,
                        "end": 162,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 155,
                          "end": 159
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 160,
                          "end": 162,
                          "name": "d"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 165,
                        "end": 168,
                        "raw": "'d'",
                        "value": "d"
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
          },
          {
            "type": "MethodDefinition",
            "start": 181,
            "end": 698,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 185,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 185,
              "end": 698,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 188,
                "end": 698,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 198,
                    "end": 278,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 204,
                        "end": 277,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 232,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 208,
                            "end": 232,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 210,
                              "end": 232,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 216,
                                "end": 232,
                                "params": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 217,
                                    "end": 223
                                  },
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 225,
                                    "end": 231
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 210,
                                "end": 216,
                                "decorators": [],
                                "name": "Record",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 235,
                          "end": 277,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 237,
                              "end": 243,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 237,
                                "end": 238,
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
                                "start": 240,
                                "end": 243,
                                "raw": "'a'",
                                "value": "a"
                              }
                            },
                            {
                              "type": "Property",
                              "start": 245,
                              "end": 251,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 245,
                                "end": 246,
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
                                "start": 248,
                                "end": 251,
                                "raw": "'b'",
                                "value": "b"
                              }
                            },
                            {
                              "type": "Property",
                              "start": 253,
                              "end": 259,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 253,
                                "end": 254,
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 256,
                                "end": 259,
                                "raw": "'c'",
                                "value": "c"
                              }
                            },
                            {
                              "type": "Property",
                              "start": 261,
                              "end": 267,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 261,
                                "end": 262,
                                "decorators": [],
                                "name": "d",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 264,
                                "end": 267,
                                "raw": "'d'",
                                "value": "d"
                              }
                            },
                            {
                              "type": "Property",
                              "start": 269,
                              "end": 275,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 269,
                                "end": 270,
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 272,
                                "end": 275,
                                "raw": "'e'",
                                "value": "e"
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 287,
                    "end": 448,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 293,
                        "end": 447,
                        "definite": false,
                        "id": {
                          "type": "ObjectPattern",
                          "start": 293,
                          "end": 440,
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 307,
                              "end": 319,
                              "computed": true,
                              "key": {
                                "type": "MemberExpression",
                                "start": 308,
                                "end": 315,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 308,
                                  "end": 312
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 313,
                                  "end": 315,
                                  "name": "a"
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 318,
                                "end": 319,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Property",
                              "start": 333,
                              "end": 345,
                              "computed": true,
                              "key": {
                                "type": "MemberExpression",
                                "start": 334,
                                "end": 341,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 334,
                                  "end": 338
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 339,
                                  "end": 341,
                                  "name": "b"
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 344,
                                "end": 345,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Property",
                              "start": 359,
                              "end": 371,
                              "computed": true,
                              "key": {
                                "type": "MemberExpression",
                                "start": 360,
                                "end": 367,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 360,
                                  "end": 364
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 365,
                                  "end": 367,
                                  "name": "c"
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 370,
                                "end": 371,
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Property",
                              "start": 385,
                              "end": 397,
                              "computed": true,
                              "key": {
                                "type": "MemberExpression",
                                "start": 386,
                                "end": 393,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 386,
                                  "end": 390
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 391,
                                  "end": 393,
                                  "name": "d"
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 396,
                                "end": 397,
                                "decorators": [],
                                "name": "d",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "Property",
                              "start": 411,
                              "end": 429,
                              "computed": true,
                              "key": {
                                "type": "AssignmentExpression",
                                "start": 412,
                                "end": 425,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 412,
                                  "end": 419,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 412,
                                    "end": 416
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "start": 417,
                                    "end": 419,
                                    "name": "e"
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 422,
                                  "end": 425,
                                  "raw": "'e'",
                                  "value": "e"
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Identifier",
                                "start": 428,
                                "end": 429,
                                "decorators": [],
                                "name": "e",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ],
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 443,
                          "end": 447,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 457,
                    "end": 484,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 457,
                      "end": 483,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 469,
                          "end": 470,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 472,
                          "end": 473,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 475,
                          "end": 476,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 478,
                          "end": 479,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 481,
                          "end": 482,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 457,
                        "end": 468,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 457,
                          "end": 464,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 465,
                          "end": 468,
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
                    "type": "VariableDeclaration",
                    "start": 494,
                    "end": 519,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 500,
                        "end": 518,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 500,
                          "end": 502,
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 505,
                          "end": 518,
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "start": 505,
                            "end": 509,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "MemberExpression",
                            "start": 510,
                            "end": 517,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 510,
                              "end": 514
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 515,
                              "end": 517,
                              "name": "a"
                            }
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 528,
                    "end": 553,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 534,
                        "end": 552,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 534,
                          "end": 536,
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 539,
                          "end": 552,
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "start": 539,
                            "end": 543,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "MemberExpression",
                            "start": 544,
                            "end": 551,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 544,
                              "end": 548
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 549,
                              "end": 551,
                              "name": "b"
                            }
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 562,
                    "end": 587,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 568,
                        "end": 586,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 568,
                          "end": 570,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 573,
                          "end": 586,
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "start": 573,
                            "end": 577,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "MemberExpression",
                            "start": 578,
                            "end": 585,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 578,
                              "end": 582
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 583,
                              "end": 585,
                              "name": "c"
                            }
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 596,
                    "end": 621,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 602,
                        "end": 620,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 602,
                          "end": 604,
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 607,
                          "end": 620,
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "start": 607,
                            "end": 611,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "MemberExpression",
                            "start": 612,
                            "end": 619,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 612,
                              "end": 616
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 617,
                              "end": 619,
                              "name": "d"
                            }
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
                    "end": 655,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 636,
                        "end": 654,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 636,
                          "end": 638,
                          "decorators": [],
                          "name": "e1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 641,
                          "end": 654,
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "start": 641,
                            "end": 645,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "MemberExpression",
                            "start": 646,
                            "end": 653,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 646,
                              "end": 650
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 651,
                              "end": 653,
                              "name": "e"
                            }
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 664,
                    "end": 692,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 664,
                      "end": 691,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 676,
                          "end": 678,
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 680,
                          "end": 682,
                          "decorators": [],
                          "name": "b1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 684,
                          "end": 686,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 688,
                          "end": 690,
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 664,
                        "end": 675,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 664,
                          "end": 671,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 672,
                          "end": 675,
                          "decorators": [],
                          "name": "log",
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
      "type": "ExpressionStatement",
      "start": 702,
      "end": 717,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 702,
        "end": 716,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 702,
          "end": 714,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 702,
            "end": 709,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 706,
              "end": 707,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 710,
            "end": 714,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
