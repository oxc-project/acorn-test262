__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    354
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
            "name": "aaa",
            "optional": false,
            "range": [
              4,
              7
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
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
            4,
            11
          ],
          "loc": {
            "end": {
              "column": 11,
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
        12
      ],
      "loc": {
        "end": {
          "column": 12,
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
          23,
          203
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                29,
                30
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              },
              "range": [
                30,
                38
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  32,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 3
                  },
                  "start": {
                    "column": 7,
                    "line": 3
                  }
                }
              }
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "aaa",
              "optional": false,
              "range": [
                41,
                44
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            "range": [
              29,
              45
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticY",
              "optional": false,
              "range": [
                57,
                64
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              },
              "range": [
                64,
                72
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  66,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 4
                  },
                  "start": {
                    "column": 20,
                    "line": 4
                  }
                }
              }
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "aaa",
              "optional": false,
              "range": [
                75,
                78
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 4
                },
                "start": {
                  "column": 29,
                  "line": 4
                }
              }
            },
            "range": [
              50,
              79
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                110,
                121
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                121,
                201
              ],
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
                          "type": "ThisExpression",
                          "range": [
                            137,
                            141
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
                          "name": "y",
                          "optional": false,
                          "range": [
                            142,
                            143
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 6
                            },
                            "start": {
                              "column": 13,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          137,
                          143
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
                      "right": {
                        "type": "Literal",
                        "raw": "''",
                        "value": "",
                        "range": [
                          146,
                          148
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 6
                          },
                          "start": {
                            "column": 17,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        137,
                        148
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      137,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
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
                  127,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 21,
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
                  "name": "aaa",
                  "optional": false,
                  "range": [
                    122,
                    125
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 5
                    },
                    "start": {
                      "column": 16,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            },
            "range": [
              110,
              201
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
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CCC",
        "optional": false,
        "range": [
          19,
          22
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        13,
        203
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
            "name": "aaaa",
            "optional": false,
            "range": [
              241,
              245
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              248,
              249
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
          "range": [
            241,
            249
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        237,
        250
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 11
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
          262,
          351
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                268,
                269
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 13
                },
                "start": {
                  "column": 5,
                  "line": 13
                }
              },
              "range": [
                269,
                274
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  271,
                  274
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 13
                  },
                  "start": {
                    "column": 7,
                    "line": 13
                  }
                }
              }
            },
            "value": null,
            "range": [
              268,
              275
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                280,
                291
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                291,
                349
              ],
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
                          "type": "ThisExpression",
                          "range": [
                            308,
                            312
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 15
                            },
                            "start": {
                              "column": 8,
                              "line": 15
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            313,
                            314
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 15
                            },
                            "start": {
                              "column": 13,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          308,
                          314
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 15
                          },
                          "start": {
                            "column": 8,
                            "line": 15
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "aaaa",
                        "optional": false,
                        "range": [
                          317,
                          321
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 15
                          },
                          "start": {
                            "column": 17,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        308,
                        321
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      308,
                      322
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
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
                          "type": "ThisExpression",
                          "range": [
                            331,
                            335
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 16
                            },
                            "start": {
                              "column": 8,
                              "line": 16
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            336,
                            337
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 16
                            },
                            "start": {
                              "column": 13,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          331,
                          337
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "''",
                        "value": "",
                        "range": [
                          340,
                          342
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 16
                          },
                          "start": {
                            "column": 17,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        331,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      331,
                      343
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  298,
                  349
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 22,
                    "line": 14
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
                  "name": "aaaa",
                  "optional": false,
                  "range": [
                    292,
                    296
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 14
                    },
                    "start": {
                      "column": 16,
                      "line": 14
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 15,
                  "line": 14
                }
              }
            },
            "range": [
              280,
              349
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 11,
            "line": 12
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CCCC",
        "optional": false,
        "range": [
          257,
          261
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 12
          },
          "start": {
            "column": 6,
            "line": 12
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        251,
        351
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
