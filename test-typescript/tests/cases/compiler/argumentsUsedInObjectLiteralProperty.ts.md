__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    176
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          176
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
              "name": "createSelectableViewModel",
              "optional": false,
              "range": [
                28,
                53
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                53,
                174
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "selectedValue",
                            "optional": false,
                            "range": [
                              126,
                              139
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 4
                              },
                              "start": {
                                "column": 12,
                                "line": 4
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arguments",
                              "optional": false,
                              "range": [
                                141,
                                150
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 4
                                },
                                "start": {
                                  "column": 27,
                                  "line": 4
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "range": [
                                151,
                                157
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 4
                                },
                                "start": {
                                  "column": 37,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              141,
                              157
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 4
                              },
                              "start": {
                                "column": 27,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            126,
                            157
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 4
                            },
                            "start": {
                              "column": 12,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        112,
                        167
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      105,
                      168
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  95,
                  174
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 85,
                    "line": 2
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
                  "name": "initialState",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 2
                      },
                      "start": {
                        "column": 57,
                        "line": 2
                      }
                    },
                    "range": [
                      67,
                      72
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        69,
                        72
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 2
                        },
                        "start": {
                          "column": 59,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    54,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 2
                    },
                    "start": {
                      "column": 44,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "selectedValue",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 2
                      },
                      "start": {
                        "column": 78,
                        "line": 2
                      }
                    },
                    "range": [
                      88,
                      93
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        90,
                        93
                      ],
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 2
                        },
                        "start": {
                          "column": 80,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    74,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 2
                    },
                    "start": {
                      "column": 64,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 43,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              174
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
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
            "line": 7
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
        "name": "A",
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
        176
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
      "column": 1,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
