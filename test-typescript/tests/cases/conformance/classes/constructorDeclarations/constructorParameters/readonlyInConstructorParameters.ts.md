__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    197
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          50
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                14,
                25
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                25,
                48
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  46,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 2
                  },
                  "start": {
                    "column": 36,
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
                  "type": "TSParameterProperty",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 2
                        },
                        "start": {
                          "column": 26,
                          "line": 2
                        }
                      },
                      "range": [
                        36,
                        44
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          38,
                          44
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 2
                          },
                          "start": {
                            "column": 28,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      35,
                      44
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 2
                      },
                      "start": {
                        "column": 25,
                        "line": 2
                      }
                    }
                  },
                  "readonly": true,
                  "static": false,
                  "range": [
                    26,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              48
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 2
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
            "line": 3
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
        50
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  57,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 4
                  },
                  "start": {
                    "column": 6,
                    "line": 4
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                55,
                56
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              51,
              59
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 4
              },
              "start": {
                "column": 0,
                "line": 4
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              60,
              61
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 4
              },
              "start": {
                "column": 9,
                "line": 4
              }
            }
          },
          "range": [
            51,
            61
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "2",
          "value": 2,
          "range": [
            64,
            65
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        },
        "range": [
          51,
          65
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        51,
        66
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          76,
          125
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                82,
                93
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                93,
                123
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  121,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 7
                  },
                  "start": {
                    "column": 43,
                    "line": 7
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 7
                        },
                        "start": {
                          "column": 33,
                          "line": 7
                        }
                      },
                      "range": [
                        111,
                        119
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          113,
                          119
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 7
                          },
                          "start": {
                            "column": 35,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      110,
                      119
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 7
                      },
                      "start": {
                        "column": 32,
                        "line": 7
                      }
                    }
                  },
                  "readonly": true,
                  "static": false,
                  "range": [
                    94,
                    119
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 7
                    },
                    "start": {
                      "column": 16,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 7
                }
              }
            },
            "range": [
              82,
              123
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 8,
            "line": 6
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "range": [
          74,
          75
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        68,
        125
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          135,
          185
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                141,
                152
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                152,
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
                    "column": 46,
                    "line": 11
                  },
                  "start": {
                    "column": 44,
                    "line": 11
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 11
                        },
                        "start": {
                          "column": 34,
                          "line": 11
                        }
                      },
                      "range": [
                        171,
                        179
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          173,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 11
                          },
                          "start": {
                            "column": 36,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      170,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 11
                      },
                      "start": {
                        "column": 33,
                        "line": 11
                      }
                    }
                  },
                  "readonly": true,
                  "static": false,
                  "range": [
                    153,
                    179
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 11
                    },
                    "start": {
                      "column": 16,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              }
            },
            "range": [
              141,
              183
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 8,
            "line": 10
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "range": [
          133,
          134
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 10
          },
          "start": {
            "column": 6,
            "line": 10
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        127,
        185
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "NewExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                192,
                193
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 13
                },
                "start": {
                  "column": 6,
                  "line": 13
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "range": [
              190,
              191
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "range": [
            186,
            194
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            195,
            196
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 13
            },
            "start": {
              "column": 9,
              "line": 13
            }
          }
        },
        "range": [
          186,
          196
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        186,
        197
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 11,
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
