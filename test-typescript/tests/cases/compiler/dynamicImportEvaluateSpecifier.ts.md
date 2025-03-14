__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    334
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
            "name": "i",
            "optional": false,
            "range": [
              60,
              61
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              64,
              65
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          },
          "range": [
            60,
            65
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        56,
        66
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "options": null,
        "source": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  82,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 14,
                    "line": 4
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                82,
                85
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
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "String",
            "optional": false,
            "range": [
              75,
              81
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 7,
                "line": 4
              }
            }
          },
          "optional": false,
          "range": [
            75,
            86
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 4
            },
            "start": {
              "column": 7,
              "line": 4
            }
          }
        },
        "range": [
          68,
          87
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        68,
        88
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "options": null,
        "source": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  103,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 5
                  },
                  "start": {
                    "column": 14,
                    "line": 5
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                103,
                106
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "String",
            "optional": false,
            "range": [
              96,
              102
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 5
              },
              "start": {
                "column": 7,
                "line": 5
              }
            }
          },
          "optional": false,
          "range": [
            96,
            107
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 5
            },
            "start": {
              "column": 7,
              "line": 5
            }
          }
        },
        "range": [
          89,
          108
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        89,
        109
      ],
      "loc": {
        "end": {
          "column": 20,
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
            "name": "getPath",
            "optional": false,
            "range": [
              117,
              124
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "\"/root/my/cool/path\"",
                    "value": "/root/my/cool/path",
                    "range": [
                      223,
                      243
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    216,
                    244
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 9
                    },
                    "start": {
                      "column": 1,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                139,
                246
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 10
                },
                "start": {
                  "column": 28,
                  "line": 7
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              127,
              246
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 16,
                "line": 7
              }
            }
          },
          "range": [
            117,
            246
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        111,
        247
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "someFunction",
            "optional": false,
            "range": [
              255,
              267
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
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
                        "name": "result",
                        "optional": false,
                        "range": [
                          291,
                          297
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 13
                          },
                          "start": {
                            "column": 7,
                            "line": 13
                          }
                        }
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "ImportExpression",
                          "options": null,
                          "source": {
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "getPath",
                                "optional": false,
                                "range": [
                                  319,
                                  326
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 13
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                319,
                                328
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 13
                                },
                                "start": {
                                  "column": 35,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              313,
                              328
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 13
                              },
                              "start": {
                                "column": 29,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            306,
                            329
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 13
                            },
                            "start": {
                              "column": 22,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          300,
                          329
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 13
                          },
                          "start": {
                            "column": 16,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        291,
                        329
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 13
                        },
                        "start": {
                          "column": 7,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    285,
                    330
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 13
                    },
                    "start": {
                      "column": 1,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                282,
                332
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 14
                },
                "start": {
                  "column": 33,
                  "line": 12
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              270,
              332
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 14
              },
              "start": {
                "column": 21,
                "line": 12
              }
            }
          },
          "range": [
            255,
            332
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        249,
        333
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 14
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
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
