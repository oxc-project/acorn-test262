__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    127
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          9,
          33
        ],
        "body": [
          {
            "type": "AccessorProperty",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                24,
                25
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              },
              "range": [
                25,
                30
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  27,
                  30
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 16,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              15,
              31
            ],
            "loc": {
              "end": {
                "column": 20,
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
            "column": 9,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "range": [
          6,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
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
        33
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
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          55,
          69
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                61,
                62
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
                65,
                66
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
              61,
              67
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 20,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "range": [
          41,
          43
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "range": [
          52,
          54
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "range": [
        35,
        69
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
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
          126
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                101,
                102
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                102,
                124
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
                        "type": "Super",
                        "range": [
                          114,
                          119
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 10
                          },
                          "start": {
                            "column": 21,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          120,
                          121
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 10
                          },
                          "start": {
                            "column": 27,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        114,
                        121
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 10
                        },
                        "start": {
                          "column": 21,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      107,
                      122
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 10
                      },
                      "start": {
                        "column": 14,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  105,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 10
                  },
                  "start": {
                    "column": 12,
                    "line": 10
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
                  "column": 31,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 10
                }
              }
            },
            "range": [
              97,
              124
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 20,
            "line": 9
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "range": [
          77,
          79
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 9
          },
          "start": {
            "column": 6,
            "line": 9
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "range": [
          88,
          90
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 9
          },
          "start": {
            "column": 17,
            "line": 9
          }
        }
      },
      "range": [
        71,
        126
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
