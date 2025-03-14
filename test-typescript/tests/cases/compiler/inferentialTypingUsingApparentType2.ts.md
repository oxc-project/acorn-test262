__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    119
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "range": [
                71,
                80
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              64,
              81
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          58,
          83
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 58,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          9,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 1
              },
              "start": {
                "column": 50,
                "line": 1
              }
            },
            "range": [
              50,
              53
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  52,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 1
                  },
                  "start": {
                    "column": 52,
                    "line": 1
                  }
                }
              },
              "range": [
                52,
                53
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 1
                },
                "start": {
                  "column": 52,
                  "line": 1
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
              "column": 53,
              "line": 1
            },
            "start": {
              "column": 49,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 57,
            "line": 1
          },
          "start": {
            "column": 54,
            "line": 1
          }
        },
        "range": [
          54,
          57
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              56,
              57
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 1
              },
              "start": {
                "column": 56,
                "line": 1
              }
            }
          },
          "range": [
            56,
            57
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 1
            },
            "start": {
              "column": 56,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 48,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        },
        "range": [
          12,
          48
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "range": [
                      25,
                      26
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 1
                      },
                      "start": {
                        "column": 25,
                        "line": 1
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 1
                          },
                          "start": {
                            "column": 28,
                            "line": 1
                          }
                        },
                        "range": [
                          28,
                          36
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            30,
                            36
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
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
                        27,
                        36
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 1
                        },
                        "start": {
                          "column": 27,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 1
                      },
                      "start": {
                        "column": 37,
                        "line": 1
                      }
                    },
                    "range": [
                      37,
                      45
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        39,
                        45
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 1
                        },
                        "start": {
                          "column": 39,
                          "line": 1
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    25,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 1
                    },
                    "start": {
                      "column": 25,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                23,
                47
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              13,
              47
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        83
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "range": [
                    91,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 5
                    },
                    "start": {
                      "column": 6,
                      "line": 5
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    92,
                    115
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
                            "name": "x",
                            "optional": false,
                            "range": [
                              105,
                              106
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 5
                              },
                              "start": {
                                "column": 20,
                                "line": 5
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
                              107,
                              113
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 5
                              },
                              "start": {
                                "column": 22,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            105,
                            113
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 5
                            },
                            "start": {
                              "column": 20,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          98,
                          113
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 5
                          },
                          "start": {
                            "column": 13,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "range": [
                      96,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 5
                      },
                      "start": {
                        "column": 11,
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        93,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 5
                    },
                    "start": {
                      "column": 7,
                      "line": 5
                    }
                  }
                },
                "range": [
                  91,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 5
                  },
                  "start": {
                    "column": 6,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              89,
              117
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            85,
            88
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "optional": false,
        "range": [
          85,
          118
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        85,
        119
      ],
      "loc": {
        "end": {
          "column": 34,
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
      "column": 34,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
