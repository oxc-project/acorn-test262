__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    169
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "range": [
          62,
          63
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              66,
              69
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          },
          {
            "type": "TemplateElement",
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            },
            "range": [
              75,
              77
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 18,
                "line": 3
              }
            }
          }
        ],
        "types": [
          {
            "type": "TSNumberKeyword",
            "range": [
              69,
              75
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          }
        ],
        "range": [
          66,
          77
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "range": [
        57,
        78
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              85,
              86
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    93,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 5
                    },
                    "start": {
                      "column": 2,
                      "line": 5
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "FunctionExpression",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    140,
                                    141
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 11,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 6
                                    }
                                  }
                                },
                                "init": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "range": [
                                          149,
                                          150
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 20,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 19,
                                            "line": 6
                                          }
                                        }
                                      },
                                      "range": [
                                        146,
                                        150
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 6
                                        }
                                      }
                                    },
                                    {
                                      "type": "Property",
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "range": [
                                          152,
                                          153
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 22,
                                            "line": 6
                                          }
                                        }
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "optional": false,
                                      "shorthand": false,
                                      "value": {
                                        "type": "Literal",
                                        "raw": "6",
                                        "value": 6,
                                        "range": [
                                          155,
                                          156
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 26,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 6
                                          }
                                        }
                                      },
                                      "range": [
                                        152,
                                        156
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 26,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 22,
                                          "line": 6
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    144,
                                    158
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  140,
                                  158
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 6
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const",
                            "range": [
                              134,
                              159
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 6
                              },
                              "start": {
                                "column": 4,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "range": [
                          128,
                          163
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 7
                          },
                          "start": {
                            "column": 37,
                            "line": 5
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "range": [
                            125,
                            126
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 5
                            },
                            "start": {
                              "column": 34,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        115,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 7
                        },
                        "start": {
                          "column": 24,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "raw": "\"4\"",
                            "value": "4",
                            "range": [
                              98,
                              101
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 5
                              },
                              "start": {
                                "column": 7,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "range": [
                          97,
                          102
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 5
                          },
                          "start": {
                            "column": 6,
                            "line": 5
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "range": [
                              106,
                              107
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 5
                              },
                              "start": {
                                "column": 15,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            106,
                            107
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 5
                            },
                            "start": {
                              "column": 15,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          106,
                          109
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 5
                          },
                          "start": {
                            "column": 15,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        97,
                        109
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 5
                        },
                        "start": {
                          "column": 6,
                          "line": 5
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "range": [
                        111,
                        114
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 5
                        },
                        "start": {
                          "column": 20,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      96,
                      114
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 5
                      },
                      "start": {
                        "column": 5,
                        "line": 5
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    96,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 7
                    },
                    "start": {
                      "column": 5,
                      "line": 5
                    }
                  }
                },
                "range": [
                  93,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 7
                  },
                  "start": {
                    "column": 2,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              89,
              167
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 8
              },
              "start": {
                "column": 10,
                "line": 4
              }
            }
          },
          "range": [
            85,
            167
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        79,
        168
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
