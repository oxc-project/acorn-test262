__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    177
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "raw": "\"use strict\"",
        "value": "use strict",
        "range": [
          56,
          68
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        56,
        69
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "x",
            "optional": false,
            "range": [
              76,
              77
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              80,
              81
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 3
              },
              "start": {
                "column": 10,
                "line": 3
              }
            }
          },
          "range": [
            76,
            81
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        70,
        82
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          91,
          177
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                98,
                99
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 5
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                103,
                107
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              }
            },
            "range": [
              97,
              108
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                113,
                124
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                124,
                175
              ],
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
                          "type": "ObjectPattern",
                          "decorators": [],
                          "optional": false,
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  145,
                                  146
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 7
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  145,
                                  146
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                145,
                                146
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 7
                                },
                                "start": {
                                  "column": 16,
                                  "line": 7
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "range": [
                                  148,
                                  149
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 7
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": true,
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "range": [
                                  148,
                                  149
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                148,
                                149
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 7
                                },
                                "start": {
                                  "column": 19,
                                  "line": 7
                                }
                              }
                            }
                          ],
                          "range": [
                            143,
                            151
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 7
                            },
                            "start": {
                              "column": 14,
                              "line": 7
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
                                "name": "a",
                                "optional": false,
                                "range": [
                                  156,
                                  157
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 7
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "raw": "1",
                                "value": 1,
                                "range": [
                                  159,
                                  160
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                156,
                                160
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 7
                                },
                                "start": {
                                  "column": 27,
                                  "line": 7
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "range": [
                                  162,
                                  163
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 7
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "raw": "2",
                                "value": 2,
                                "range": [
                                  165,
                                  166
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                162,
                                166
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 7
                                },
                                "start": {
                                  "column": 33,
                                  "line": 7
                                }
                              }
                            }
                          ],
                          "range": [
                            154,
                            168
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 7
                            },
                            "start": {
                              "column": 25,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          143,
                          168
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 7
                          },
                          "start": {
                            "column": 14,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      137,
                      169
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  127,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 18,
                    "line": 6
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "range": [
              113,
              175
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 8,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          89,
          90
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
      "implements": [],
      "superClass": null,
      "range": [
        83,
        177
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
      "column": 1,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
