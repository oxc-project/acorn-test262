__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    79
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              },
              "range": [
                13,
                23
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        17,
                        18
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 1
                        },
                        "start": {
                          "column": 17,
                          "line": 1
                        }
                      }
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 1
                        },
                        "start": {
                          "column": 18,
                          "line": 1
                        }
                      },
                      "range": [
                        18,
                        21
                      ],
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            20,
                            21
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 1
                            },
                            "start": {
                              "column": 20,
                              "line": 1
                            }
                          }
                        },
                        "range": [
                          20,
                          21
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 1
                          },
                          "start": {
                            "column": 20,
                            "line": 1
                          }
                        }
                      }
                    },
                    "range": [
                      17,
                      21
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 1
                      },
                      "start": {
                        "column": 17,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  15,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 15,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              23
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            23
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        0,
        23
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": ">",
        "left": {
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
              "column": 1,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            28,
            29
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        },
        "range": [
          24,
          29
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        24,
        30
      ],
      "loc": {
        "end": {
          "column": 6,
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              },
              "range": [
                45,
                71
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            49,
                            50
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 4
                            },
                            "start": {
                              "column": 17,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 4
                            },
                            "start": {
                              "column": 18,
                              "line": 4
                            }
                          },
                          "range": [
                            50,
                            53
                          ],
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                52,
                                53
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 4
                                },
                                "start": {
                                  "column": 20,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              52,
                              53
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 4
                              },
                              "start": {
                                "column": 20,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          49,
                          53
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
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
                      47,
                      55
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            60,
                            61
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 4
                            },
                            "start": {
                              "column": 28,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 4
                            },
                            "start": {
                              "column": 29,
                              "line": 4
                            }
                          },
                          "range": [
                            61,
                            69
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              63,
                              69
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 4
                              },
                              "start": {
                                "column": 31,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          60,
                          69
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 4
                          },
                          "start": {
                            "column": 28,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      58,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 4
                      },
                      "start": {
                        "column": 26,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  47,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              44,
              71
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            44,
            71
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 4
            },
            "start": {
              "column": 12,
              "line": 4
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        32,
        71
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "operator": ">",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            72,
            73
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            76,
            77
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        },
        "range": [
          72,
          77
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        72,
        78
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
