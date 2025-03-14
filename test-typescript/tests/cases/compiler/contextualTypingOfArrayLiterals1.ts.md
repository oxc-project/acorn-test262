__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    101
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          12,
          37
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 2
                    },
                    "start": {
                      "column": 5,
                      "line": 2
                    }
                  },
                  "range": [
                    19,
                    27
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      21,
                      27
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
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
                  18,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
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
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              },
              "range": [
                28,
                34
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "range": [
                    30,
                    34
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                },
                "range": [
                  30,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 20,
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
              17,
              35
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 3,
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
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          10,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        37
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 5
                },
                "start": {
                  "column": 6,
                  "line": 5
                }
              },
              "range": [
                45,
                48
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    47,
                    48
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
                },
                "range": [
                  47,
                  48
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
            },
            "range": [
              43,
              48
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "range": [
                    56,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 5
                    },
                    "start": {
                      "column": 17,
                      "line": 5
                    }
                  }
                },
                "range": [
                  52,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 5
                  },
                  "start": {
                    "column": 13,
                    "line": 5
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  64,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 5
                  },
                  "start": {
                    "column": 25,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              51,
              66
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          },
          "range": [
            43,
            66
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        39,
        67
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "r2",
            "optional": false,
            "range": [
              73,
              75
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x3",
              "optional": false,
              "range": [
                78,
                80
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                81,
                82
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              }
            },
            "range": [
              78,
              83
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 6
              },
              "start": {
                "column": 9,
                "line": 6
              }
            }
          },
          "range": [
            73,
            83
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        69,
        84
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "range": [
              86,
              88
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 7
              },
              "start": {
                "column": 0,
                "line": 7
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getDate",
            "optional": false,
            "range": [
              89,
              96
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 7
              },
              "start": {
                "column": 3,
                "line": 7
              }
            }
          },
          "range": [
            86,
            96
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "optional": false,
        "range": [
          86,
          98
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        86,
        99
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
