__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    259
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
            "name": "prop",
            "optional": false,
            "range": [
              6,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              13,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          },
          "range": [
            6,
            18
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        18
      ],
      "loc": {
        "end": {
          "column": 18,
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
          32,
          49
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                37,
                41
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 4
                },
                "start": {
                  "column": 3,
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
                47
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  45,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
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
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "range": [
              36,
              47
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 12,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "range": [
          26,
          31
        ],
        "loc": {
          "end": {
            "column": 11,
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
        20,
        49
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
          80,
          106
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                94,
                98
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                99,
                104
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  102,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 8
                  },
                  "start": {
                    "column": 20,
                    "line": 8
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
                  "column": 22,
                  "line": 8
                },
                "start": {
                  "column": 17,
                  "line": 8
                }
              }
            },
            "range": [
              84,
              104
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 29,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "range": [
          57,
          65
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "range": [
          74,
          79
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 7
          },
          "start": {
            "column": 23,
            "line": 7
          }
        }
      },
      "range": [
        51,
        106
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          120,
          137
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                125,
                129
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 12
                },
                "start": {
                  "column": 3,
                  "line": 12
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
                130,
                135
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  133,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
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
                  "column": 13,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "range": [
              124,
              135
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
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
            "column": 12,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "range": [
          114,
          119
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        108,
        137
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          168,
          185
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                173,
                177
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 16
                },
                "start": {
                  "column": 3,
                  "line": 16
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
                178,
                183
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  181,
                  183
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 16
                  },
                  "start": {
                    "column": 11,
                    "line": 16
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
                  "column": 13,
                  "line": 16
                },
                "start": {
                  "column": 8,
                  "line": 16
                }
              }
            },
            "range": [
              172,
              183
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 16
              },
              "start": {
                "column": 2,
                "line": 16
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 29,
            "line": 15
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "range": [
          145,
          153
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 15
          },
          "start": {
            "column": 6,
            "line": 15
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "range": [
          162,
          167
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 15
          },
          "start": {
            "column": 23,
            "line": 15
          }
        }
      },
      "range": [
        139,
        185
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          199,
          201
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 14,
            "line": 19
          },
          "start": {
            "column": 12,
            "line": 19
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base3",
        "optional": false,
        "range": [
          193,
          198
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 19
          },
          "start": {
            "column": 6,
            "line": 19
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        187,
        201
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          232,
          258
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                246,
                250
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 22
                },
                "start": {
                  "column": 12,
                  "line": 22
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                251,
                256
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  254,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 22
                  },
                  "start": {
                    "column": 20,
                    "line": 22
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
                  "column": 22,
                  "line": 22
                },
                "start": {
                  "column": 17,
                  "line": 22
                }
              }
            },
            "range": [
              236,
              256
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 22
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 29,
            "line": 21
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "range": [
          209,
          217
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 21
          },
          "start": {
            "column": 6,
            "line": 21
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base3",
        "optional": false,
        "range": [
          226,
          231
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 21
          },
          "start": {
            "column": 23,
            "line": 21
          }
        }
      },
      "range": [
        203,
        258
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
