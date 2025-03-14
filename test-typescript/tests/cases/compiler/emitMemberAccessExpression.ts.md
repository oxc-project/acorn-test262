__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    61,
    75
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "raw": "\"use strict\"",
        "value": "use strict",
        "range": [
          61,
          73
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        61,
        74
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    61,
    242
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "raw": "\"use strict\"",
        "value": "use strict",
        "range": [
          61,
          73
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        61,
        74
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              117,
              239
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  138,
                  239
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "populate",
                      "optional": false,
                      "range": [
                        155,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
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
                        163,
                        233
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
                                  "name": "res",
                                  "optional": false,
                                  "range": [
                                    192,
                                    195
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 6
                                    }
                                  }
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Model",
                                    "optional": false,
                                    "range": [
                                      198,
                                      203
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
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
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "KnockoutExtentions",
                                    "optional": false,
                                    "range": [
                                      204,
                                      222
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    198,
                                    222
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  192,
                                  222
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 6
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var",
                            "range": [
                              188,
                              223
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 6
                              },
                              "start": {
                                "column": 12,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "range": [
                          174,
                          233
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
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
                          "name": "raw",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 5
                              },
                              "start": {
                                "column": 27,
                                "line": 5
                              }
                            },
                            "range": [
                              167,
                              172
                            ],
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "range": [
                                169,
                                172
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 5
                                },
                                "start": {
                                  "column": 29,
                                  "line": 5
                                }
                              }
                            }
                          },
                          "range": [
                            164,
                            172
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 5
                            },
                            "start": {
                              "column": 24,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 7
                        },
                        "start": {
                          "column": 23,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      148,
                      233
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 25,
                    "line": 4
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "_Person",
                "optional": false,
                "range": [
                  130,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                124,
                239
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          111,
          241
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 36,
            "line": 3
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "range": [
          82,
          110
        ],
        "left": {
          "type": "TSQualifiedName",
          "range": [
            82,
            104
          ],
          "left": {
            "type": "Identifier",
            "range": [
              82,
              91
            ],
            "decorators": [],
            "name": "Microsoft",
            "optional": false,
            "loc": {
              "end": {
                "column": 16,
                "line": 3
              },
              "start": {
                "column": 7,
                "line": 3
              }
            }
          },
          "right": {
            "type": "Identifier",
            "range": [
              92,
              104
            ],
            "decorators": [],
            "name": "PeopleAtWork",
            "optional": false,
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          },
          "loc": {
            "end": {
              "column": 29,
              "line": 3
            },
            "start": {
              "column": 7,
              "line": 3
            }
          }
        },
        "right": {
          "type": "Identifier",
          "range": [
            105,
            110
          ],
          "decorators": [],
          "name": "Model",
          "optional": false,
          "loc": {
            "end": {
              "column": 35,
              "line": 3
            },
            "start": {
              "column": 30,
              "line": 3
            }
          }
        },
        "loc": {
          "end": {
            "column": 35,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "kind": "module",
      "range": [
        75,
        241
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    122,
    229
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
            "name": "OData",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              },
              "range": [
                139,
                144
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  141,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              134,
              144
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            134,
            144
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        122,
        145
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              188,
              227
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  220,
                  227
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 36,
                    "line": 5
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "KnockoutExtentions",
                "optional": false,
                "range": [
                  201,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 5
                  },
                  "start": {
                    "column": 17,
                    "line": 5
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                195,
                227
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          182,
          229
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 36,
            "line": 4
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "range": [
          153,
          181
        ],
        "left": {
          "type": "TSQualifiedName",
          "range": [
            153,
            175
          ],
          "left": {
            "type": "Identifier",
            "range": [
              153,
              162
            ],
            "decorators": [],
            "name": "Microsoft",
            "optional": false,
            "loc": {
              "end": {
                "column": 16,
                "line": 4
              },
              "start": {
                "column": 7,
                "line": 4
              }
            }
          },
          "right": {
            "type": "Identifier",
            "range": [
              163,
              175
            ],
            "decorators": [],
            "name": "PeopleAtWork",
            "optional": false,
            "loc": {
              "end": {
                "column": 29,
                "line": 4
              },
              "start": {
                "column": 17,
                "line": 4
              }
            }
          },
          "loc": {
            "end": {
              "column": 29,
              "line": 4
            },
            "start": {
              "column": 7,
              "line": 4
            }
          }
        },
        "right": {
          "type": "Identifier",
          "range": [
            176,
            181
          ],
          "decorators": [],
          "name": "Model",
          "optional": false,
          "loc": {
            "end": {
              "column": 35,
              "line": 4
            },
            "start": {
              "column": 30,
              "line": 4
            }
          }
        },
        "loc": {
          "end": {
            "column": 35,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "kind": "module",
      "range": [
        146,
        229
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
