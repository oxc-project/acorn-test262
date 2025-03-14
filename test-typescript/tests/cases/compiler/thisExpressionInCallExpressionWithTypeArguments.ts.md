__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    78
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          77
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                21,
                24
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                24,
                75
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "ThisExpression",
                                  "range": [
                                    66,
                                    70
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 60,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 56,
                                      "line": 2
                                    }
                                  }
                                },
                                "range": [
                                  59,
                                  71
                                ],
                                "loc": {
                                  "end": {
                                    "column": 61,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 49,
                                    "line": 2
                                  }
                                }
                              }
                            ],
                            "range": [
                              57,
                              73
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 2
                              },
                              "start": {
                                "column": 47,
                                "line": 2
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                51,
                                52
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 2
                                },
                                "start": {
                                  "column": 41,
                                  "line": 2
                                }
                              }
                            }
                          ],
                          "range": [
                            50,
                            73
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 2
                            },
                            "start": {
                              "column": 40,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                30,
                                31
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 2
                                },
                                "start": {
                                  "column": 20,
                                  "line": 2
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                32,
                                33
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 2
                                },
                                "start": {
                                  "column": 22,
                                  "line": 2
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "3",
                              "value": 3,
                              "range": [
                                34,
                                35
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 2
                                },
                                "start": {
                                  "column": 24,
                                  "line": 2
                                }
                              }
                            }
                          ],
                          "range": [
                            29,
                            36
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 2
                            },
                            "start": {
                              "column": 19,
                              "line": 2
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
                            37,
                            40
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 2
                            },
                            "start": {
                              "column": 27,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          29,
                          40
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 2
                          },
                          "start": {
                            "column": 19,
                            "line": 2
                          }
                        }
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          40,
                          49
                        ],
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "range": [
                              41,
                              44
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 2
                              },
                              "start": {
                                "column": 31,
                                "line": 2
                              }
                            }
                          },
                          {
                            "type": "TSAnyKeyword",
                            "range": [
                              45,
                              48
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 2
                              },
                              "start": {
                                "column": 35,
                                "line": 2
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 2
                          },
                          "start": {
                            "column": 30,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        29,
                        74
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 2
                        },
                        "start": {
                          "column": 19,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      29,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 2
                      },
                      "start": {
                        "column": 19,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  27,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 2
                  },
                  "start": {
                    "column": 17,
                    "line": 2
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
                  "column": 65,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              75
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 8,
            "line": 1
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
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        77
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
