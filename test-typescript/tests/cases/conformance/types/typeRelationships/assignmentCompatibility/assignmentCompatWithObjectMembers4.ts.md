__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 121,
  "end": 1815,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 121,
      "end": 988,
      "body": {
        "type": "TSModuleBlock",
        "start": 140,
        "end": 988,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 146,
            "end": 173,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 157,
              "end": 173,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 159,
                  "end": 171,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 162,
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
                    "start": 162,
                    "end": 170,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 164,
                      "end": 170
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
              "start": 152,
              "end": 156,
              "decorators": [],
              "name": "Base",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ClassDeclaration",
            "start": 178,
            "end": 221,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 205,
              "end": 221,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 207,
                  "end": 219,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 207,
                    "end": 210,
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
                    "start": 210,
                    "end": 218,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 212,
                      "end": 218
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
              "start": 184,
              "end": 191,
              "decorators": [],
              "name": "Derived",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 200,
              "end": 204,
              "decorators": [],
              "name": "Base",
              "optional": false
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 226,
            "end": 270,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 254,
              "end": 270,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 256,
                  "end": 268,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 256,
                    "end": 259,
                    "decorators": [],
                    "name": "baz",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 259,
                    "end": 267,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 261,
                      "end": 267
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
              "start": 232,
              "end": 240,
              "decorators": [],
              "name": "Derived2",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 249,
              "end": 253,
              "decorators": [],
              "name": "Base",
              "optional": false
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 276,
            "end": 301,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 284,
              "end": 301,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 286,
                  "end": 299,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 286,
                    "end": 289,
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
                    "start": 289,
                    "end": 298,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 291,
                      "end": 298,
                      "typeName": {
                        "type": "Identifier",
                        "start": 291,
                        "end": 298,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
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
              "start": 282,
              "end": 283,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ClassDeclaration",
            "start": 306,
            "end": 332,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 314,
              "end": 332,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 316,
                  "end": 330,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 316,
                    "end": 319,
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
                    "start": 319,
                    "end": 329,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 321,
                      "end": 329,
                      "typeName": {
                        "type": "Identifier",
                        "start": 321,
                        "end": 329,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false
                      }
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
              "start": 312,
              "end": 313,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "VariableDeclaration",
            "start": 337,
            "end": 346,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 341,
                "end": 345,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 345,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 342,
                    "end": 345,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 344,
                      "end": 345,
                      "typeName": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 345,
                        "decorators": [],
                        "name": "S",
                        "optional": false
                      }
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
            "start": 351,
            "end": 360,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 355,
                "end": 359,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 359,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 356,
                    "end": 359,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 358,
                      "end": 359,
                      "typeName": {
                        "type": "Identifier",
                        "start": 358,
                        "end": 359,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
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
            "type": "TSInterfaceDeclaration",
            "start": 366,
            "end": 396,
            "body": {
              "type": "TSInterfaceBody",
              "start": 379,
              "end": 396,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 381,
                  "end": 394,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 381,
                    "end": 384,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 384,
                    "end": 393,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 386,
                      "end": 393,
                      "typeName": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 393,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
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
              "start": 376,
              "end": 378,
              "decorators": [],
              "name": "S2",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 401,
            "end": 432,
            "body": {
              "type": "TSInterfaceBody",
              "start": 414,
              "end": 432,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 416,
                  "end": 430,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 419,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 419,
                    "end": 429,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 421,
                      "end": 429,
                      "typeName": {
                        "type": "Identifier",
                        "start": 421,
                        "end": 429,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false
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
              "start": 411,
              "end": 413,
              "decorators": [],
              "name": "T2",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 437,
            "end": 448,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 441,
                "end": 447,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 447,
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 443,
                    "end": 447,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 445,
                      "end": 447,
                      "typeName": {
                        "type": "Identifier",
                        "start": 445,
                        "end": 447,
                        "decorators": [],
                        "name": "S2",
                        "optional": false
                      }
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
            "start": 453,
            "end": 464,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 457,
                "end": 463,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 457,
                  "end": 463,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 459,
                    "end": 463,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 461,
                      "end": 463,
                      "typeName": {
                        "type": "Identifier",
                        "start": 461,
                        "end": 463,
                        "decorators": [],
                        "name": "T2",
                        "optional": false
                      }
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
            "start": 470,
            "end": 494,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 474,
                "end": 494,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 494,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 475,
                    "end": 494,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 477,
                      "end": 494,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 479,
                          "end": 492,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 479,
                            "end": 482,
                            "decorators": [],
                            "name": "foo",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 482,
                            "end": 491,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 484,
                              "end": 491,
                              "typeName": {
                                "type": "Identifier",
                                "start": 484,
                                "end": 491,
                                "decorators": [],
                                "name": "Derived",
                                "optional": false
                              }
                            }
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
            "type": "VariableDeclaration",
            "start": 499,
            "end": 524,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 503,
                "end": 524,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 503,
                  "end": 524,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 504,
                    "end": 524,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 506,
                      "end": 524,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 508,
                          "end": 522,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 508,
                            "end": 511,
                            "decorators": [],
                            "name": "foo",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 511,
                            "end": 521,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 513,
                              "end": 521,
                              "typeName": {
                                "type": "Identifier",
                                "start": 513,
                                "end": 521,
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false
                              }
                            }
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
            "type": "VariableDeclaration",
            "start": 530,
            "end": 562,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 534,
                "end": 561,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 536,
                  "decorators": [],
                  "name": "a2",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 539,
                  "end": 561,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 541,
                      "end": 559,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 541,
                        "end": 544,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "NewExpression",
                        "start": 546,
                        "end": 559,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 550,
                          "end": 557,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 567,
            "end": 600,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 571,
                "end": 599,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 571,
                  "end": 573,
                  "decorators": [],
                  "name": "b2",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 576,
                  "end": 599,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 578,
                      "end": 597,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 578,
                        "end": 581,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "NewExpression",
                        "start": 583,
                        "end": 597,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 587,
                          "end": 595,
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 606,
            "end": 612,
            "expression": {
              "type": "AssignmentExpression",
              "start": 606,
              "end": 611,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 606,
                "end": 607,
                "decorators": [],
                "name": "s",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 610,
                "end": 611,
                "decorators": [],
                "name": "t",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 626,
            "end": 632,
            "expression": {
              "type": "AssignmentExpression",
              "start": 626,
              "end": 631,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 626,
                "end": 627,
                "decorators": [],
                "name": "t",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 630,
                "end": 631,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 646,
            "end": 653,
            "expression": {
              "type": "AssignmentExpression",
              "start": 646,
              "end": 652,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 646,
                "end": 647,
                "decorators": [],
                "name": "s",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 650,
                "end": 652,
                "decorators": [],
                "name": "s2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 664,
            "end": 671,
            "expression": {
              "type": "AssignmentExpression",
              "start": 664,
              "end": 670,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 664,
                "end": 665,
                "decorators": [],
                "name": "s",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 668,
                "end": 670,
                "decorators": [],
                "name": "a2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 683,
            "end": 691,
            "expression": {
              "type": "AssignmentExpression",
              "start": 683,
              "end": 690,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 683,
                "end": 685,
                "decorators": [],
                "name": "s2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 688,
                "end": 690,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 705,
            "end": 713,
            "expression": {
              "type": "AssignmentExpression",
              "start": 705,
              "end": 712,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 705,
                "end": 707,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 710,
                "end": 712,
                "decorators": [],
                "name": "s2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 727,
            "end": 734,
            "expression": {
              "type": "AssignmentExpression",
              "start": 727,
              "end": 733,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 727,
                "end": 729,
                "decorators": [],
                "name": "s2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 732,
                "end": 733,
                "decorators": [],
                "name": "t",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 748,
            "end": 755,
            "expression": {
              "type": "AssignmentExpression",
              "start": 748,
              "end": 754,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 748,
                "end": 750,
                "decorators": [],
                "name": "s2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 753,
                "end": 754,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 769,
            "end": 777,
            "expression": {
              "type": "AssignmentExpression",
              "start": 769,
              "end": 776,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 769,
                "end": 771,
                "decorators": [],
                "name": "s2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 774,
                "end": 776,
                "decorators": [],
                "name": "a2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 789,
            "end": 795,
            "expression": {
              "type": "AssignmentExpression",
              "start": 789,
              "end": 794,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 789,
                "end": 790,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 793,
                "end": 794,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 809,
            "end": 815,
            "expression": {
              "type": "AssignmentExpression",
              "start": 809,
              "end": 814,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 809,
                "end": 810,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 813,
                "end": 814,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 829,
            "end": 835,
            "expression": {
              "type": "AssignmentExpression",
              "start": 829,
              "end": 834,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 829,
                "end": 830,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 833,
                "end": 834,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 846,
            "end": 853,
            "expression": {
              "type": "AssignmentExpression",
              "start": 846,
              "end": 852,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 846,
                "end": 847,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 850,
                "end": 852,
                "decorators": [],
                "name": "s2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 864,
            "end": 871,
            "expression": {
              "type": "AssignmentExpression",
              "start": 864,
              "end": 870,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 864,
                "end": 865,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 868,
                "end": 870,
                "decorators": [],
                "name": "a2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 883,
            "end": 891,
            "expression": {
              "type": "AssignmentExpression",
              "start": 883,
              "end": 890,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 883,
                "end": 885,
                "decorators": [],
                "name": "a2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 888,
                "end": 890,
                "decorators": [],
                "name": "b2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 905,
            "end": 913,
            "expression": {
              "type": "AssignmentExpression",
              "start": 905,
              "end": 912,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 905,
                "end": 907,
                "decorators": [],
                "name": "b2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 910,
                "end": 912,
                "decorators": [],
                "name": "a2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 927,
            "end": 934,
            "expression": {
              "type": "AssignmentExpression",
              "start": 927,
              "end": 933,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 927,
                "end": 929,
                "decorators": [],
                "name": "a2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 932,
                "end": 933,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 948,
            "end": 956,
            "expression": {
              "type": "AssignmentExpression",
              "start": 948,
              "end": 955,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 948,
                "end": 950,
                "decorators": [],
                "name": "a2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 953,
                "end": 955,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 970,
            "end": 977,
            "expression": {
              "type": "AssignmentExpression",
              "start": 970,
              "end": 976,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 970,
                "end": 972,
                "decorators": [],
                "name": "a2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 975,
                "end": 976,
                "decorators": [],
                "name": "t",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 139,
        "decorators": [],
        "name": "OnlyDerived",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 990,
      "end": 1815,
      "body": {
        "type": "TSModuleBlock",
        "start": 1006,
        "end": 1815,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 1012,
            "end": 1039,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1023,
              "end": 1039,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1025,
                  "end": 1037,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1025,
                    "end": 1028,
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
                    "start": 1028,
                    "end": 1036,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1030,
                      "end": 1036
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
              "start": 1018,
              "end": 1022,
              "decorators": [],
              "name": "Base",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ClassDeclaration",
            "start": 1044,
            "end": 1087,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1071,
              "end": 1087,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1073,
                  "end": 1085,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1073,
                    "end": 1076,
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
                    "start": 1076,
                    "end": 1084,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1078,
                      "end": 1084
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
              "start": 1050,
              "end": 1057,
              "decorators": [],
              "name": "Derived",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 1066,
              "end": 1070,
              "decorators": [],
              "name": "Base",
              "optional": false
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 1092,
            "end": 1136,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1120,
              "end": 1136,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1122,
                  "end": 1134,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1122,
                    "end": 1125,
                    "decorators": [],
                    "name": "baz",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1125,
                    "end": 1133,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1127,
                      "end": 1133
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
              "start": 1098,
              "end": 1106,
              "decorators": [],
              "name": "Derived2",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 1115,
              "end": 1119,
              "decorators": [],
              "name": "Base",
              "optional": false
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 1142,
            "end": 1164,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1150,
              "end": 1164,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1152,
                  "end": 1162,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1152,
                    "end": 1155,
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
                    "start": 1155,
                    "end": 1161,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1157,
                      "end": 1161,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1157,
                        "end": 1161,
                        "decorators": [],
                        "name": "Base",
                        "optional": false
                      }
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
              "start": 1148,
              "end": 1149,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ClassDeclaration",
            "start": 1169,
            "end": 1195,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1177,
              "end": 1195,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1179,
                  "end": 1193,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1179,
                    "end": 1182,
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
                    "start": 1182,
                    "end": 1192,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1184,
                      "end": 1192,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1184,
                        "end": 1192,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false
                      }
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
              "start": 1175,
              "end": 1176,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1200,
            "end": 1209,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1204,
                "end": 1208,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1204,
                  "end": 1208,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1205,
                    "end": 1208,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1207,
                      "end": 1208,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1207,
                        "end": 1208,
                        "decorators": [],
                        "name": "S",
                        "optional": false
                      }
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
            "start": 1214,
            "end": 1223,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1218,
                "end": 1222,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1218,
                  "end": 1222,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1219,
                    "end": 1222,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1221,
                      "end": 1222,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1221,
                        "end": 1222,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
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
            "type": "TSInterfaceDeclaration",
            "start": 1229,
            "end": 1256,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1242,
              "end": 1256,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1244,
                  "end": 1254,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1244,
                    "end": 1247,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1247,
                    "end": 1253,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1249,
                      "end": 1253,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1249,
                        "end": 1253,
                        "decorators": [],
                        "name": "Base",
                        "optional": false
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
              "start": 1239,
              "end": 1241,
              "decorators": [],
              "name": "S2",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1261,
            "end": 1292,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1274,
              "end": 1292,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1276,
                  "end": 1290,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1276,
                    "end": 1279,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1279,
                    "end": 1289,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1281,
                      "end": 1289,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1281,
                        "end": 1289,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false
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
              "start": 1271,
              "end": 1273,
              "decorators": [],
              "name": "T2",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1297,
            "end": 1308,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1301,
                "end": 1307,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1301,
                  "end": 1307,
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1303,
                    "end": 1307,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1305,
                      "end": 1307,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1305,
                        "end": 1307,
                        "decorators": [],
                        "name": "S2",
                        "optional": false
                      }
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
            "start": 1313,
            "end": 1324,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1317,
                "end": 1323,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1317,
                  "end": 1323,
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1319,
                    "end": 1323,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1321,
                      "end": 1323,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1321,
                        "end": 1323,
                        "decorators": [],
                        "name": "T2",
                        "optional": false
                      }
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
            "start": 1330,
            "end": 1351,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1334,
                "end": 1351,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1334,
                  "end": 1351,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1335,
                    "end": 1351,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1337,
                      "end": 1351,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1339,
                          "end": 1349,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1339,
                            "end": 1342,
                            "decorators": [],
                            "name": "foo",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1342,
                            "end": 1348,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1344,
                              "end": 1348,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1344,
                                "end": 1348,
                                "decorators": [],
                                "name": "Base",
                                "optional": false
                              }
                            }
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
            "type": "VariableDeclaration",
            "start": 1356,
            "end": 1381,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1360,
                "end": 1381,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1360,
                  "end": 1381,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1361,
                    "end": 1381,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1363,
                      "end": 1381,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1365,
                          "end": 1379,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1365,
                            "end": 1368,
                            "decorators": [],
                            "name": "foo",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1368,
                            "end": 1378,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1370,
                              "end": 1378,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1370,
                                "end": 1378,
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false
                              }
                            }
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
            "type": "VariableDeclaration",
            "start": 1387,
            "end": 1416,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1391,
                "end": 1415,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1391,
                  "end": 1393,
                  "decorators": [],
                  "name": "a2",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1396,
                  "end": 1415,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1398,
                      "end": 1413,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1398,
                        "end": 1401,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "NewExpression",
                        "start": 1403,
                        "end": 1413,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 1407,
                          "end": 1411,
                          "decorators": [],
                          "name": "Base",
                          "optional": false
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1421,
            "end": 1454,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1425,
                "end": 1453,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1425,
                  "end": 1427,
                  "decorators": [],
                  "name": "b2",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1430,
                  "end": 1453,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1432,
                      "end": 1451,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1432,
                        "end": 1435,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "NewExpression",
                        "start": 1437,
                        "end": 1451,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 1441,
                          "end": 1449,
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 1460,
            "end": 1466,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1460,
              "end": 1465,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1460,
                "end": 1461,
                "decorators": [],
                "name": "s",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1464,
                "end": 1465,
                "decorators": [],
                "name": "t",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1477,
            "end": 1483,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1477,
              "end": 1482,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1477,
                "end": 1478,
                "decorators": [],
                "name": "t",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1481,
                "end": 1482,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1497,
            "end": 1504,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1497,
              "end": 1503,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1497,
                "end": 1498,
                "decorators": [],
                "name": "s",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1501,
                "end": 1503,
                "decorators": [],
                "name": "s2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1515,
            "end": 1522,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1515,
              "end": 1521,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1515,
                "end": 1516,
                "decorators": [],
                "name": "s",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1519,
                "end": 1521,
                "decorators": [],
                "name": "a2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1534,
            "end": 1542,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1534,
              "end": 1541,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1534,
                "end": 1536,
                "decorators": [],
                "name": "s2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1539,
                "end": 1541,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1553,
            "end": 1561,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1553,
              "end": 1560,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1553,
                "end": 1555,
                "decorators": [],
                "name": "t2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1558,
                "end": 1560,
                "decorators": [],
                "name": "s2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1575,
            "end": 1582,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1575,
              "end": 1581,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1575,
                "end": 1577,
                "decorators": [],
                "name": "s2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1580,
                "end": 1581,
                "decorators": [],
                "name": "t",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1593,
            "end": 1600,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1593,
              "end": 1599,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1593,
                "end": 1595,
                "decorators": [],
                "name": "s2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1598,
                "end": 1599,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1611,
            "end": 1619,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1611,
              "end": 1618,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1611,
                "end": 1613,
                "decorators": [],
                "name": "s2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1616,
                "end": 1618,
                "decorators": [],
                "name": "a2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1631,
            "end": 1637,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1631,
              "end": 1636,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1631,
                "end": 1632,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1635,
                "end": 1636,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1648,
            "end": 1654,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1648,
              "end": 1653,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1648,
                "end": 1649,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1652,
                "end": 1653,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1668,
            "end": 1674,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1668,
              "end": 1673,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1668,
                "end": 1669,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1672,
                "end": 1673,
                "decorators": [],
                "name": "s",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1685,
            "end": 1692,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1685,
              "end": 1691,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1685,
                "end": 1686,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1689,
                "end": 1691,
                "decorators": [],
                "name": "s2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1703,
            "end": 1710,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1703,
              "end": 1709,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1703,
                "end": 1704,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1707,
                "end": 1709,
                "decorators": [],
                "name": "a2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1722,
            "end": 1730,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1722,
              "end": 1729,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1722,
                "end": 1724,
                "decorators": [],
                "name": "a2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1727,
                "end": 1729,
                "decorators": [],
                "name": "b2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1741,
            "end": 1749,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1741,
              "end": 1748,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1741,
                "end": 1743,
                "decorators": [],
                "name": "b2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1746,
                "end": 1748,
                "decorators": [],
                "name": "a2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1763,
            "end": 1770,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1763,
              "end": 1769,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1763,
                "end": 1765,
                "decorators": [],
                "name": "a2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1768,
                "end": 1769,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1781,
            "end": 1789,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1781,
              "end": 1788,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1781,
                "end": 1783,
                "decorators": [],
                "name": "a2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1786,
                "end": 1788,
                "decorators": [],
                "name": "t2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1800,
            "end": 1807,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1800,
              "end": 1806,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1800,
                "end": 1802,
                "decorators": [],
                "name": "a2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1805,
                "end": 1806,
                "decorators": [],
                "name": "t",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 997,
        "end": 1005,
        "decorators": [],
        "name": "WithBase",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
