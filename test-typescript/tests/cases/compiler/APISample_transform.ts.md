__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    287,
    503
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 7
                },
                "start": {
                  "column": 19,
                  "line": 7
                }
              },
              "range": [
                306,
                311
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  308,
                  311
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 7
                  },
                  "start": {
                    "column": 21,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              299,
              311
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 7
              },
              "start": {
                "column": 12,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            299,
            311
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 7
            },
            "start": {
              "column": 12,
              "line": 7
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        287,
        312
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"typescript\"",
        "value": "typescript",
        "range": [
          334,
          346
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 9
          },
          "start": {
            "column": 20,
            "line": 9
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "range": [
              326,
              328
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          },
          "range": [
            321,
            328
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 9
            },
            "start": {
              "column": 7,
              "line": 9
            }
          }
        }
      ],
      "range": [
        314,
        347
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "source",
            "optional": false,
            "range": [
              355,
              361
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"let x: string  = 'string'\"",
            "value": "let x: string  = 'string'",
            "range": [
              364,
              391
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 11
              },
              "start": {
                "column": 15,
                "line": 11
              }
            }
          },
          "range": [
            355,
            391
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        349,
        392
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "result",
            "optional": false,
            "range": [
              398,
              404
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "source",
                "optional": false,
                "range": [
                  420,
                  426
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 13
                  },
                  "start": {
                    "column": 26,
                    "line": 13
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
                      "name": "module",
                      "optional": false,
                      "range": [
                        430,
                        436
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 13
                        },
                        "start": {
                          "column": 36,
                          "line": 13
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "range": [
                            438,
                            440
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 13
                            },
                            "start": {
                              "column": 44,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ModuleKind",
                          "optional": false,
                          "range": [
                            441,
                            451
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 13
                            },
                            "start": {
                              "column": 47,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          438,
                          451
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 13
                          },
                          "start": {
                            "column": 44,
                            "line": 13
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CommonJS",
                        "optional": false,
                        "range": [
                          452,
                          460
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 13
                          },
                          "start": {
                            "column": 58,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        438,
                        460
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 13
                        },
                        "start": {
                          "column": 44,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      430,
                      460
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 13
                      },
                      "start": {
                        "column": 36,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  428,
                  462
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 13
                  },
                  "start": {
                    "column": 34,
                    "line": 13
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
                "name": "ts",
                "optional": false,
                "range": [
                  407,
                  409
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 13
                  },
                  "start": {
                    "column": 13,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "transpile",
                "optional": false,
                "range": [
                  410,
                  419
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 13
                  },
                  "start": {
                    "column": 16,
                    "line": 13
                  }
                }
              },
              "range": [
                407,
                419
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 13
                },
                "start": {
                  "column": 13,
                  "line": 13
                }
              }
            },
            "optional": false,
            "range": [
              407,
              463
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 13
              }
            }
          },
          "range": [
            398,
            463
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        394,
        464
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "range": [
                  493,
                  499
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 15
                  },
                  "start": {
                    "column": 27,
                    "line": 15
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
                "name": "JSON",
                "optional": false,
                "range": [
                  478,
                  482
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 15
                  },
                  "start": {
                    "column": 12,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringify",
                "optional": false,
                "range": [
                  483,
                  492
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 15
                  },
                  "start": {
                    "column": 17,
                    "line": 15
                  }
                }
              },
              "range": [
                478,
                492
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 15
                },
                "start": {
                  "column": 12,
                  "line": 15
                }
              }
            },
            "optional": false,
            "range": [
              478,
              500
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 15
              },
              "start": {
                "column": 12,
                "line": 15
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
            "name": "console",
            "optional": false,
            "range": [
              466,
              473
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 15
              },
              "start": {
                "column": 0,
                "line": 15
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              474,
              477
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 15
              },
              "start": {
                "column": 8,
                "line": 15
              }
            }
          },
          "range": [
            466,
            477
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "range": [
          466,
          501
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        466,
        502
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 7
    }
  },
  "hashbang": null
}
```
