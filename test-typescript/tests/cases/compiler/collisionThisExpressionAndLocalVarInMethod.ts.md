__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    355
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          355
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "range": [
                14,
                21
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                21,
                185
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "doStuff",
                            "optional": false,
                            "range": [
                              55,
                              62
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 4
                              },
                              "start": {
                                "column": 12,
                                "line": 4
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "async": false,
                            "body": {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
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
                                          "name": "_this",
                                          "optional": false,
                                          "range": [
                                            106,
                                            111
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 25,
                                              "line": 5
                                            },
                                            "start": {
                                              "column": 20,
                                              "line": 5
                                            }
                                          }
                                        },
                                        "init": {
                                          "type": "Literal",
                                          "raw": "2",
                                          "value": 2,
                                          "range": [
                                            114,
                                            115
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 29,
                                              "line": 5
                                            },
                                            "start": {
                                              "column": 28,
                                              "line": 5
                                            }
                                          }
                                        },
                                        "range": [
                                          106,
                                          115
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 29,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 5
                                          }
                                        }
                                      }
                                    ],
                                    "declare": false,
                                    "kind": "var",
                                    "range": [
                                      102,
                                      116
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
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "CallExpression",
                                      "arguments": [
                                        {
                                          "type": "ThisExpression",
                                          "range": [
                                            149,
                                            153
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 36,
                                              "line": 6
                                            },
                                            "start": {
                                              "column": 32,
                                              "line": 6
                                            }
                                          }
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "callback",
                                        "optional": false,
                                        "range": [
                                          140,
                                          148
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 23,
                                            "line": 6
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        140,
                                        154
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 37,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 23,
                                          "line": 6
                                        }
                                      }
                                    },
                                    "range": [
                                      133,
                                      155
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 6
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  84,
                                  169
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 4
                                  }
                                }
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                78,
                                169
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 7
                                },
                                "start": {
                                  "column": 35,
                                  "line": 4
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
                                "name": "callback",
                                "optional": false,
                                "range": [
                                  65,
                                  73
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 4
                                  }
                                }
                              }
                            ],
                            "range": [
                              64,
                              169
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 7
                              },
                              "start": {
                                "column": 21,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            55,
                            169
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        41,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      34,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  24,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 14,
                    "line": 2
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
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              185
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "range": [
                190,
                197
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
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
                197,
                353
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
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
                          "name": "_this",
                          "optional": false,
                          "range": [
                            214,
                            219
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 11
                            },
                            "start": {
                              "column": 12,
                              "line": 11
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            222,
                            223
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 11
                            },
                            "start": {
                              "column": 20,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          214,
                          223
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 11
                          },
                          "start": {
                            "column": 12,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      210,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "doStuff",
                            "optional": false,
                            "range": [
                              254,
                              261
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 13
                              },
                              "start": {
                                "column": 12,
                                "line": 13
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "async": false,
                            "body": {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "CallExpression",
                                      "arguments": [
                                        {
                                          "type": "ThisExpression",
                                          "range": [
                                            317,
                                            321
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 36,
                                              "line": 14
                                            },
                                            "start": {
                                              "column": 32,
                                              "line": 14
                                            }
                                          }
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "callback",
                                        "optional": false,
                                        "range": [
                                          308,
                                          316
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 14
                                          },
                                          "start": {
                                            "column": 23,
                                            "line": 14
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        308,
                                        322
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 37,
                                          "line": 14
                                        },
                                        "start": {
                                          "column": 23,
                                          "line": 14
                                        }
                                      }
                                    },
                                    "range": [
                                      301,
                                      323
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 14
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  283,
                                  337
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 13
                                  }
                                }
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                277,
                                337
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 15
                                },
                                "start": {
                                  "column": 35,
                                  "line": 13
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
                                "name": "callback",
                                "optional": false,
                                "range": [
                                  264,
                                  272
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 13
                                  }
                                }
                              }
                            ],
                            "range": [
                              263,
                              337
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 15
                              },
                              "start": {
                                "column": 21,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            254,
                            337
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 15
                            },
                            "start": {
                              "column": 12,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "range": [
                        240,
                        347
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 16
                        },
                        "start": {
                          "column": 15,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      233,
                      347
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  200,
                  353
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 14,
                    "line": 10
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
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              190,
              353
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 10
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
        "name": "a",
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
        355
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
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
      "column": 1,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
