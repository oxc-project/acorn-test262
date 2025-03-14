__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    192
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          16,
          32
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                22,
                25
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              22,
              25
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                27,
                30
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            },
            "range": [
              27,
              30
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 2
              },
              "start": {
                "column": 9,
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
            "column": 16,
            "line": 1
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyEnumType",
        "optional": false,
        "range": [
          5,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "range": [
        0,
        32
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
            "name": "_arr",
            "optional": false,
            "range": [
              37,
              41
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "range": [
                        47,
                        50
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 4
                        },
                        "start": {
                          "column": 14,
                          "line": 4
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'foo'",
                      "value": "foo",
                      "range": [
                        52,
                        57
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 4
                        },
                        "start": {
                          "column": 19,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      47,
                      57
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 4
                      },
                      "start": {
                        "column": 14,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  45,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 4
                  },
                  "start": {
                    "column": 12,
                    "line": 4
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "range": [
                        63,
                        66
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 4
                        },
                        "start": {
                          "column": 30,
                          "line": 4
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'bar'",
                      "value": "bar",
                      "range": [
                        68,
                        73
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 4
                        },
                        "start": {
                          "column": 35,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      63,
                      73
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 4
                      },
                      "start": {
                        "column": 30,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  61,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 42,
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
              44,
              76
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          },
          "range": [
            37,
            76
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        33,
        76
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "enumValue",
            "optional": false,
            "range": [
              81,
              90
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyEnumType",
              "optional": false,
              "range": [
                93,
                103
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                104,
                107
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 27,
                  "line": 5
                }
              }
            },
            "range": [
              93,
              107
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 5
              }
            }
          },
          "range": [
            81,
            107
          ],
          "loc": {
            "end": {
              "column": 30,
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
        77,
        108
      ],
      "loc": {
        "end": {
          "column": 31,
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
            "name": "x",
            "optional": false,
            "range": [
              113,
              114
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyEnumType",
                      "optional": false,
                      "range": [
                        131,
                        141
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 6
                        },
                        "start": {
                          "column": 22,
                          "line": 6
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "range": [
                          142,
                          143
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 6
                          },
                          "start": {
                            "column": 33,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "range": [
                          144,
                          147
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 6
                          },
                          "start": {
                            "column": 35,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        142,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 6
                        },
                        "start": {
                          "column": 33,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      131,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 6
                      },
                      "start": {
                        "column": 22,
                        "line": 6
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "enumValue",
                    "optional": false,
                    "range": [
                      153,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 6
                      },
                      "start": {
                        "column": 44,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    131,
                    162
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 6
                    },
                    "start": {
                      "column": 22,
                      "line": 6
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "range": [
                      126,
                      127
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  126,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 6
                  },
                  "start": {
                    "column": 17,
                    "line": 6
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
                "name": "_arr",
                "optional": false,
                "range": [
                  117,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  122,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 6
                  },
                  "start": {
                    "column": 13,
                    "line": 6
                  }
                }
              },
              "range": [
                117,
                125
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "optional": false,
            "range": [
              117,
              163
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 6
              },
              "start": {
                "column": 8,
                "line": 6
              }
            }
          },
          "range": [
            113,
            163
          ],
          "loc": {
            "end": {
              "column": 54,
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
        109,
        164
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
