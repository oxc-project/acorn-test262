__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    133
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          12,
          133
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
              "name": "greeter",
              "optional": false,
              "range": [
                25,
                32
              ],
              "loc": {
                "end": {
                  "column": 18,
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
                32,
                131
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "unused",
                          "optional": false,
                          "range": [
                            80,
                            86
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
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "20",
                          "value": 20,
                          "range": [
                            89,
                            91
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 3
                            },
                            "start": {
                              "column": 21,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          80,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 3
                          },
                          "start": {
                            "column": 12,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      76,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "person2",
                        "optional": false,
                        "range": [
                          101,
                          108
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"dummy value\"",
                        "value": "dummy value",
                        "range": [
                          111,
                          124
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 4
                          },
                          "start": {
                            "column": 18,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        101,
                        124
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      101,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  66,
                  131
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 52,
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
                  "name": "person",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 2
                      },
                      "start": {
                        "column": 25,
                        "line": 2
                      }
                    },
                    "range": [
                      39,
                      47
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        41,
                        47
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 2
                        },
                        "start": {
                          "column": 27,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    33,
                    47
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 2
                    },
                    "start": {
                      "column": 19,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "person2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 2
                      },
                      "start": {
                        "column": 42,
                        "line": 2
                      }
                    },
                    "range": [
                      56,
                      64
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        58,
                        64
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 2
                        },
                        "start": {
                          "column": 44,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    49,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
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
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "range": [
              18,
              131
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
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
            "line": 6
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dummy",
        "optional": false,
        "range": [
          6,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
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
        133
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
