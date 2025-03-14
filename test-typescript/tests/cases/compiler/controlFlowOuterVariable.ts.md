__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    23,
    187
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
            "name": "CONFIG",
            "optional": false,
            "range": [
              29,
              35
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    44,
                    47
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
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
                  "raw": "''",
                  "value": "",
                  "range": [
                    49,
                    51
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 4
                    },
                    "start": {
                      "column": 9,
                      "line": 4
                    }
                  }
                },
                "range": [
                  44,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "setFoo",
                  "optional": false,
                  "range": [
                    57,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CONFIG",
                              "optional": false,
                              "range": [
                                97,
                                103
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
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
                              "name": "foo",
                              "optional": false,
                              "range": [
                                104,
                                107
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 6
                                },
                                "start": {
                                  "column": 15,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              97,
                              107
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 6
                              },
                              "start": {
                                "column": 8,
                                "line": 6
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "range": [
                              110,
                              113
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 6
                              },
                              "start": {
                                "column": 21,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            97,
                            113
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 6
                            },
                            "start": {
                              "column": 8,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          97,
                          114
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "range": [
                      87,
                      120
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 7
                      },
                      "start": {
                        "column": 34,
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 5
                          },
                          "start": {
                            "column": 24,
                            "line": 5
                          }
                        },
                        "range": [
                          77,
                          85
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            79,
                            85
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 5
                            },
                            "start": {
                              "column": 26,
                              "line": 5
                            }
                          }
                        }
                      },
                      "range": [
                        74,
                        85
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 5
                        },
                        "start": {
                          "column": 21,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    65,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 7
                    },
                    "start": {
                      "column": 12,
                      "line": 5
                    }
                  }
                },
                "range": [
                  57,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              38,
              122
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 8
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          },
          "range": [
            29,
            122
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        23,
        123
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "helper",
            "optional": false,
            "range": [
              131,
              137
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              181,
                              182
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 11
                              },
                              "start": {
                                "column": 19,
                                "line": 11
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
                            "name": "t",
                            "optional": false,
                            "range": [
                              173,
                              174
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 11
                              },
                              "start": {
                                "column": 11,
                                "line": 11
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "slice",
                            "optional": false,
                            "range": [
                              175,
                              180
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 11
                              },
                              "start": {
                                "column": 13,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            173,
                            180
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 11
                            },
                            "start": {
                              "column": 11,
                              "line": 11
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          173,
                          183
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 11
                          },
                          "start": {
                            "column": 11,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "helper",
                      "optional": false,
                      "range": [
                        166,
                        172
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 11
                        },
                        "start": {
                          "column": 4,
                          "line": 11
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      166,
                      184
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 11
                      },
                      "start": {
                        "column": 4,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    166,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                160,
                187
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 12
                },
                "start": {
                  "column": 35,
                  "line": 10
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
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 10
                    },
                    "start": {
                      "column": 28,
                      "line": 10
                    }
                  },
                  "range": [
                    153,
                    158
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          155,
                          156
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 10
                          },
                          "start": {
                            "column": 30,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        155,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 10
                        },
                        "start": {
                          "column": 30,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      155,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 10
                      },
                      "start": {
                        "column": 30,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  152,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 10
                  },
                  "start": {
                    "column": 27,
                    "line": 10
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 10
                },
                "start": {
                  "column": 23,
                  "line": 10
                }
              },
              "range": [
                148,
                151
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      149,
                      150
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 10
                      },
                      "start": {
                        "column": 24,
                        "line": 10
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    149,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 10
                    },
                    "start": {
                      "column": 24,
                      "line": 10
                    }
                  }
                }
              ]
            },
            "range": [
              140,
              187
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 12
              },
              "start": {
                "column": 15,
                "line": 10
              }
            }
          },
          "range": [
            131,
            187
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        125,
        187
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
