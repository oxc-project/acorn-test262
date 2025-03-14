__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    166
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              },
              "range": [
                15,
                23
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  17,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
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
        24
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "range": [
          43,
          48
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 26,
                "line": 3
              }
            },
            "range": [
              52,
              60
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                54,
                60
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 3
                },
                "start": {
                  "column": 28,
                  "line": 3
                }
              }
            }
          },
          "range": [
            49,
            60
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 3
            },
            "start": {
              "column": 23,
              "line": 3
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 3
              },
              "start": {
                "column": 39,
                "line": 3
              }
            },
            "range": [
              65,
              77
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  74,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 3
                  },
                  "start": {
                    "column": 48,
                    "line": 3
                  }
                }
              },
              "range": [
                67,
                77
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 3
                },
                "start": {
                  "column": 41,
                  "line": 3
                }
              }
            }
          },
          "range": [
            62,
            77
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 3
            },
            "start": {
              "column": 36,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 64,
            "line": 3
          },
          "start": {
            "column": 52,
            "line": 3
          }
        },
        "range": [
          78,
          90
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              87,
              90
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 3
              },
              "start": {
                "column": 61,
                "line": 3
              }
            }
          },
          "range": [
            80,
            90
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 3
            },
            "start": {
              "column": 54,
              "line": 3
            }
          }
        }
      },
      "range": [
        26,
        91
      ],
      "loc": {
        "end": {
          "column": 65,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "range": [
          109,
          114
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
          }
        }
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  116,
                  119
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
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  116,
                  119
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
                116,
                119
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
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 4
              },
              "start": {
                "column": 28,
                "line": 4
              }
            },
            "range": [
              120,
              135
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
                    "name": "foo",
                    "optional": false,
                    "range": [
                      123,
                      126
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 4
                      },
                      "start": {
                        "column": 31,
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
                        "column": 42,
                        "line": 4
                      },
                      "start": {
                        "column": 34,
                        "line": 4
                      }
                    },
                    "range": [
                      126,
                      134
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        128,
                        134
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 4
                        },
                        "start": {
                          "column": 36,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    123,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 4
                    },
                    "start": {
                      "column": 31,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                122,
                135
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 4
                },
                "start": {
                  "column": 30,
                  "line": 4
                }
              }
            }
          },
          "range": [
            115,
            135
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 4
            },
            "start": {
              "column": 23,
              "line": 4
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 60,
                "line": 4
              },
              "start": {
                "column": 48,
                "line": 4
              }
            },
            "range": [
              140,
              152
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  149,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 4
                  },
                  "start": {
                    "column": 57,
                    "line": 4
                  }
                }
              },
              "range": [
                142,
                152
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 4
                },
                "start": {
                  "column": 50,
                  "line": 4
                }
              }
            }
          },
          "range": [
            137,
            152
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 4
            },
            "start": {
              "column": 45,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 73,
            "line": 4
          },
          "start": {
            "column": 61,
            "line": 4
          }
        },
        "range": [
          153,
          165
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              162,
              165
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 4
              },
              "start": {
                "column": 70,
                "line": 4
              }
            }
          },
          "range": [
            155,
            165
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 4
            },
            "start": {
              "column": 63,
              "line": 4
            }
          }
        }
      },
      "range": [
        92,
        166
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 74,
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
