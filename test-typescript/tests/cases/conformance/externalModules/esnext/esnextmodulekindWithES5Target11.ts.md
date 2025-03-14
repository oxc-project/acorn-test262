__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    150
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          17,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              24,
              28
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 24,
                "line": 1
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 1
              },
              "start": {
                "column": 28,
                "line": 1
              }
            },
            "range": [
              28,
              35
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  30,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 1
                  },
                  "start": {
                    "column": 30,
                    "line": 1
                  }
                }
              },
              "range": [
                30,
                35
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 1
                },
                "start": {
                  "column": 30,
                  "line": 1
                }
              }
            }
          },
          "range": [
            21,
            35
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 1
          },
          "start": {
            "column": 36,
            "line": 1
          }
        },
        "range": [
          36,
          41
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            38,
            41
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 1
            },
            "start": {
              "column": 38,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        42
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "range": [
        48,
        150
      ],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            71,
            150
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  84,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
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
                  85,
                  103
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            97,
                            98
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 4
                            },
                            "start": {
                              "column": 24,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            99,
                            100
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 4
                            },
                            "start": {
                              "column": 26,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          97,
                          100
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 4
                          },
                          "start": {
                            "column": 24,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        90,
                        101
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 4
                        },
                        "start": {
                          "column": 17,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    88,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
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
                    "column": 30,
                    "line": 4
                  },
                  "start": {
                    "column": 12,
                    "line": 4
                  }
                }
              },
              "range": [
                77,
                103
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  115,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  119,
                  120
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
                108,
                120
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "range": [
                  125,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  129,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "range": [
                125,
                131
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "range": [
                  136,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
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
                  142,
                  148
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    145,
                    148
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 7
                    },
                    "start": {
                      "column": 13,
                      "line": 7
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
                    "column": 16,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 7
                  }
                }
              },
              "range": [
                136,
                148
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
            },
            "start": {
              "column": 23,
              "line": 3
            }
          }
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                44,
                47
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 2
                },
                "start": {
                  "column": 1,
                  "line": 2
                }
              }
            },
            "range": [
              43,
              47
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 2
              },
              "start": {
                "column": 0,
                "line": 2
              }
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "range": [
            69,
            70
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 3
            },
            "start": {
              "column": 21,
              "line": 3
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          63,
          150
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
