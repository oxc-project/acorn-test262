__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    154
  ],
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
            "name": "symbol",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 10,
                  "line": 1
                }
              },
              "range": [
                10,
                15
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  12,
                  15
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 1
                  },
                  "start": {
                    "column": 12,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            15
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        16
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 1
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
          28,
          72
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "symbol",
              "optional": false,
              "range": [
                35,
                41
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
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
                42,
                70
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        62,
                        63
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
                      55,
                      64
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  45,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
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
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              }
            },
            "range": [
              34,
              70
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 4
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
            "column": 10,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          24,
          27
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        18,
        72
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
          96,
          154
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "symbol",
              "optional": false,
              "range": [
                103,
                109
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 10
                },
                "start": {
                  "column": 5,
                  "line": 10
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
                110,
                152
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "range": [
                            130,
                            135
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 11
                            },
                            "start": {
                              "column": 15,
                              "line": 11
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "symbol",
                          "optional": false,
                          "range": [
                            136,
                            142
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 11
                            },
                            "start": {
                              "column": 21,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          130,
                          143
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 11
                          },
                          "start": {
                            "column": 15,
                            "line": 11
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        130,
                        145
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      123,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  113,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 15,
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
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 12,
                  "line": 10
                }
              }
            },
            "range": [
              102,
              152
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
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
            "line": 13
          },
          "start": {
            "column": 22,
            "line": 9
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "range": [
          80,
          83
        ],
        "loc": {
          "end": {
            "column": 9,
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
        "name": "Foo",
        "optional": false,
        "range": [
          92,
          95
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 9
          },
          "start": {
            "column": 18,
            "line": 9
          }
        }
      },
      "range": [
        74,
        154
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
      "column": 1,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
