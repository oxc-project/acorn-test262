__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    106
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
            "name": "s",
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
                      "name": "workItem",
                      "optional": false,
                      "range": [
                        73,
                        81
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 1
                        },
                        "start": {
                          "column": 73,
                          "line": 1
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
                        "type": "ThisExpression",
                        "range": [
                          83,
                          87
                        ],
                        "loc": {
                          "end": {
                            "column": 87,
                            "line": 1
                          },
                          "start": {
                            "column": 83,
                            "line": 1
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_workItem",
                        "optional": false,
                        "range": [
                          88,
                          97
                        ],
                        "loc": {
                          "end": {
                            "column": 97,
                            "line": 1
                          },
                          "start": {
                            "column": 88,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        83,
                        97
                      ],
                      "loc": {
                        "end": {
                          "column": 97,
                          "line": 1
                        },
                        "start": {
                          "column": 83,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      73,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 97,
                        "line": 1
                      },
                      "start": {
                        "column": 73,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  71,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 99,
                    "line": 1
                  },
                  "start": {
                    "column": 71,
                    "line": 1
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  101,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 103,
                    "line": 1
                  },
                  "start": {
                    "column": 101,
                    "line": 1
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "$",
                "optional": false,
                "range": [
                  8,
                  9
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 1
                  },
                  "start": {
                    "column": 8,
                    "line": 1
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "extend",
                "optional": false,
                "range": [
                  10,
                  16
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 1
                  },
                  "start": {
                    "column": 10,
                    "line": 1
                  }
                }
              },
              "range": [
                8,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 8,
                  "line": 1
                }
              }
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                16,
                70
              ],
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "workItem",
                        "optional": false,
                        "range": [
                          20,
                          28
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 1
                          },
                          "start": {
                            "column": 20,
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
                            "column": 33,
                            "line": 1
                          },
                          "start": {
                            "column": 28,
                            "line": 1
                          }
                        },
                        "range": [
                          28,
                          33
                        ],
                        "typeAnnotation": {
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
                        }
                      },
                      "range": [
                        20,
                        33
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 1
                        },
                        "start": {
                          "column": 20,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "range": [
                    18,
                    35
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 1
                    },
                    "start": {
                      "column": 18,
                      "line": 1
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
                        "name": "workItem",
                        "optional": false,
                        "range": [
                          39,
                          47
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 1
                          },
                          "start": {
                            "column": 39,
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
                            "column": 52,
                            "line": 1
                          },
                          "start": {
                            "column": 47,
                            "line": 1
                          }
                        },
                        "range": [
                          47,
                          52
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            49,
                            52
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 1
                            },
                            "start": {
                              "column": 49,
                              "line": 1
                            }
                          }
                        }
                      },
                      "range": [
                        39,
                        53
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 1
                        },
                        "start": {
                          "column": 39,
                          "line": 1
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "width",
                        "optional": false,
                        "range": [
                          54,
                          59
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 1
                          },
                          "start": {
                            "column": 54,
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
                            "column": 67,
                            "line": 1
                          },
                          "start": {
                            "column": 59,
                            "line": 1
                          }
                        },
                        "range": [
                          59,
                          67
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            61,
                            67
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 1
                            },
                            "start": {
                              "column": 61,
                              "line": 1
                            }
                          }
                        }
                      },
                      "range": [
                        54,
                        67
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 1
                        },
                        "start": {
                          "column": 54,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "range": [
                    37,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 1
                    },
                    "start": {
                      "column": 37,
                      "line": 1
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "range": [
              8,
              104
            ],
            "loc": {
              "end": {
                "column": 104,
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
            104
          ],
          "loc": {
            "end": {
              "column": 104,
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
        105
      ],
      "loc": {
        "end": {
          "column": 105,
          "line": 1
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
