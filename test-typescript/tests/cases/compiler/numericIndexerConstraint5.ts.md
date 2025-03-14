__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    76
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
            "name": "x",
            "optional": false,
            "range": [
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
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
                  "name": "name",
                  "optional": false,
                  "range": [
                    10,
                    14
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 1
                    },
                    "start": {
                      "column": 10,
                      "line": 1
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"x\"",
                  "value": "x",
                  "range": [
                    16,
                    19
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 1
                    },
                    "start": {
                      "column": 16,
                      "line": 1
                    }
                  }
                },
                "range": [
                  10,
                  19
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 1
                  },
                  "start": {
                    "column": 10,
                    "line": 1
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    21,
                    22
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 1
                    },
                    "start": {
                      "column": 21,
                      "line": 1
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "range": [
                      28,
                      32
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 1
                      },
                      "start": {
                        "column": 28,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    24,
                    34
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 1
                    },
                    "start": {
                      "column": 24,
                      "line": 1
                    }
                  }
                },
                "range": [
                  21,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 1
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              8,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
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
        37
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              },
              "range": [
                43,
                71
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 2
                            },
                            "start": {
                              "column": 14,
                              "line": 2
                            }
                          },
                          "range": [
                            52,
                            60
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              54,
                              60
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 2
                              },
                              "start": {
                                "column": 16,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          48,
                          60
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 2
                          },
                          "start": {
                            "column": 10,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 2
                        },
                        "start": {
                          "column": 23,
                          "line": 2
                        }
                      },
                      "range": [
                        61,
                        69
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          63,
                          69
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 2
                          },
                          "start": {
                            "column": 25,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      47,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 2
                      },
                      "start": {
                        "column": 9,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  45,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              42,
              71
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              74,
              75
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 2
              },
              "start": {
                "column": 36,
                "line": 2
              }
            }
          },
          "range": [
            42,
            75
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        38,
        76
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 38,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
