__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    221
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'file'",
        "value": "file",
        "range": [
          14,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            7,
            8
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "range": [
              7,
              8
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 1
              },
              "start": {
                "column": 7,
                "line": 1
              }
            }
          },
          "loc": {
            "end": {
              "column": 8,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        21
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'other_file'",
        "value": "other_file",
        "range": [
          36,
          48
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 2
          },
          "start": {
            "column": 14,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            29,
            30
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Z",
            "optional": false,
            "range": [
              29,
              30
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 2
              },
              "start": {
                "column": 7,
                "line": 2
              }
            }
          },
          "loc": {
            "end": {
              "column": 8,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        }
      ],
      "range": [
        22,
        49
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          69,
          108
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                73,
                84
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 2,
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
                84,
                106
              ],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "range": [
                            99,
                            100
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 6
                            },
                            "start": {
                              "column": 10,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          93,
                          98
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 6
                          },
                          "start": {
                            "column": 4,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        93,
                        101
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 6
                        },
                        "start": {
                          "column": 4,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      93,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 6
                      },
                      "start": {
                        "column": 4,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  87,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 7
                  },
                  "start": {
                    "column": 16,
                    "line": 5
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
                  "column": 3,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "range": [
              73,
              106
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 7
              },
              "start": {
                "column": 2,
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
            "column": 18,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
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
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "range": [
          67,
          68
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 16,
            "line": 4
          }
        }
      },
      "range": [
        51,
        108
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'file2'",
        "value": "file2",
        "range": [
          125,
          132
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 10
          },
          "start": {
            "column": 15,
            "line": 10
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            117,
            119
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "X2",
            "optional": false,
            "range": [
              117,
              119
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 10
              },
              "start": {
                "column": 7,
                "line": 10
              }
            }
          },
          "loc": {
            "end": {
              "column": 9,
              "line": 10
            },
            "start": {
              "column": 7,
              "line": 10
            }
          }
        }
      ],
      "range": [
        110,
        133
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'file3'",
        "value": "file3",
        "range": [
          149,
          156
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 11
          },
          "start": {
            "column": 15,
            "line": 11
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            141,
            143
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "X3",
            "optional": false,
            "range": [
              141,
              143
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 11
              },
              "start": {
                "column": 7,
                "line": 11
              }
            }
          },
          "loc": {
            "end": {
              "column": 9,
              "line": 11
            },
            "start": {
              "column": 7,
              "line": 11
            }
          }
        }
      ],
      "range": [
        134,
        157
      ],
      "loc": {
        "end": {
          "column": 23,
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
          176,
          220
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                180,
                191
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 13
                },
                "start": {
                  "column": 2,
                  "line": 13
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
                191,
                218
              ],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X2",
                          "optional": false,
                          "range": [
                            206,
                            208
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 14
                            },
                            "start": {
                              "column": 10,
                              "line": 14
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "X3",
                          "optional": false,
                          "range": [
                            210,
                            212
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 14
                            },
                            "start": {
                              "column": 14,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          200,
                          205
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 14
                          },
                          "start": {
                            "column": 4,
                            "line": 14
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        200,
                        213
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 14
                        },
                        "start": {
                          "column": 4,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      200,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 14
                      },
                      "start": {
                        "column": 4,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  194,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 15
                  },
                  "start": {
                    "column": 16,
                    "line": 13
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
                  "column": 3,
                  "line": 15
                },
                "start": {
                  "column": 13,
                  "line": 13
                }
              }
            },
            "range": [
              180,
              218
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 15
              },
              "start": {
                "column": 2,
                "line": 13
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 18,
            "line": 12
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q",
        "optional": false,
        "range": [
          164,
          165
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 12
          },
          "start": {
            "column": 6,
            "line": 12
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "range": [
          174,
          175
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 12
          },
          "start": {
            "column": 16,
            "line": 12
          }
        }
      },
      "range": [
        158,
        220
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
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
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
