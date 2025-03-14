__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    874
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              15,
              529
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  30,
                  529
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
                      "name": "f",
                      "optional": false,
                      "range": [
                        47,
                        48
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
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
                        48,
                        261
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
                                  "name": "sum",
                                  "optional": false,
                                  "range": [
                                    94,
                                    97
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 4
                                    }
                                  }
                                },
                                "init": {
                                  "type": "Literal",
                                  "raw": "0",
                                  "value": 0,
                                  "range": [
                                    98,
                                    99
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 4
                                    }
                                  }
                                },
                                "range": [
                                  94,
                                  99
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 4
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var",
                            "range": [
                              90,
                              100
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 4
                              },
                              "start": {
                                "column": 12,
                                "line": 4
                              }
                            }
                          },
                          {
                            "type": "ForStatement",
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "+=",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "sum",
                                      "optional": false,
                                      "range": [
                                        163,
                                        166
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
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "rest",
                                        "optional": false,
                                        "range": [
                                          168,
                                          172
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 25,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 21,
                                            "line": 6
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false,
                                        "range": [
                                          173,
                                          174
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 27,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 6
                                          }
                                        }
                                      },
                                      "range": [
                                        168,
                                        175
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 6
                                        }
                                      }
                                    },
                                    "range": [
                                      163,
                                      175
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 6
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 6
                                      }
                                    }
                                  },
                                  "range": [
                                    163,
                                    176
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
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
                                145,
                                190
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 7
                                },
                                "start": {
                                  "column": 44,
                                  "line": 5
                                }
                              }
                            },
                            "init": {
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
                                      122,
                                      123
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "raw": "0",
                                    "value": 0,
                                    "range": [
                                      124,
                                      125
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "range": [
                                    122,
                                    125
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 5
                                    }
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "var",
                              "range": [
                                118,
                                125
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 5
                                },
                                "start": {
                                  "column": 17,
                                  "line": 5
                                }
                              }
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "<",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "range": [
                                  126,
                                  127
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 5
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "rest",
                                  "optional": false,
                                  "range": [
                                    128,
                                    132
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 5
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "range": [
                                    133,
                                    139
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 5
                                    }
                                  }
                                },
                                "range": [
                                  128,
                                  139
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                126,
                                139
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 5
                                },
                                "start": {
                                  "column": 25,
                                  "line": 5
                                }
                              }
                            },
                            "update": {
                              "type": "UpdateExpression",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "range": [
                                  140,
                                  141
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 5
                                  }
                                }
                              },
                              "operator": "++",
                              "prefix": false,
                              "range": [
                                140,
                                143
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 5
                                },
                                "start": {
                                  "column": 39,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              113,
                              190
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 7
                              },
                              "start": {
                                "column": 12,
                                "line": 5
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "+=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "range": [
                                  203,
                                  209
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 8
                                  }
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "range": [
                                      212,
                                      213
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "raw": "\": \"",
                                    "value": ": ",
                                    "range": [
                                      214,
                                      218
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "range": [
                                    212,
                                    218
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 8
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "sum",
                                  "optional": false,
                                  "range": [
                                    219,
                                    222
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  212,
                                  222
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                203,
                                223
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 8
                                },
                                "start": {
                                  "column": 12,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              203,
                              224
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 8
                              },
                              "start": {
                                "column": 12,
                                "line": 8
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "range": [
                                244,
                                250
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 9
                                },
                                "start": {
                                  "column": 19,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              237,
                              251
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 9
                              },
                              "start": {
                                "column": 12,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "range": [
                          76,
                          261
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 10
                          },
                          "start": {
                            "column": 44,
                            "line": 3
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 3
                              },
                              "start": {
                                "column": 18,
                                "line": 3
                              }
                            },
                            "range": [
                              50,
                              57
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                51,
                                57
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
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
                            49,
                            57
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 3
                            },
                            "start": {
                              "column": 17,
                              "line": 3
                            }
                          }
                        },
                        {
                          "type": "RestElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "range": [
                              61,
                              65
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 3
                              },
                              "start": {
                                "column": 29,
                                "line": 3
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 3
                              },
                              "start": {
                                "column": 33,
                                "line": 3
                              }
                            },
                            "range": [
                              65,
                              74
                            ],
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  66,
                                  72
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                66,
                                74
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 3
                                },
                                "start": {
                                  "column": 34,
                                  "line": 3
                                }
                              }
                            }
                          },
                          "range": [
                            58,
                            74
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 3
                            },
                            "start": {
                              "column": 26,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 10
                        },
                        "start": {
                          "column": 16,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      40,
                      261
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fnope",
                      "optional": false,
                      "range": [
                        278,
                        283
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
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
                        283,
                        325
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          309,
                          325
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 14
                          },
                          "start": {
                            "column": 46,
                            "line": 12
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 12
                              },
                              "start": {
                                "column": 22,
                                "line": 12
                              }
                            },
                            "range": [
                              285,
                              292
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                286,
                                292
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 12
                                },
                                "start": {
                                  "column": 23,
                                  "line": 12
                                }
                              }
                            }
                          },
                          "range": [
                            284,
                            292
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 12
                            },
                            "start": {
                              "column": 21,
                              "line": 12
                            }
                          }
                        },
                        {
                          "type": "RestElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "range": [
                              296,
                              300
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 12
                              },
                              "start": {
                                "column": 33,
                                "line": 12
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 12
                              },
                              "start": {
                                "column": 37,
                                "line": 12
                              }
                            },
                            "range": [
                              300,
                              307
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                301,
                                307
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 12
                                },
                                "start": {
                                  "column": 38,
                                  "line": 12
                                }
                              }
                            }
                          },
                          "range": [
                            293,
                            307
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 12
                            },
                            "start": {
                              "column": 30,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 14
                        },
                        "start": {
                          "column": 20,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      271,
                      325
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fonly",
                      "optional": false,
                      "range": [
                        342,
                        347
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 16
                        },
                        "start": {
                          "column": 15,
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
                        347,
                        523
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "builder",
                                "optional": false,
                                "range": [
                                  380,
                                  387
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 17
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "\"\"",
                                "value": "",
                                "range": [
                                  388,
                                  390
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 17
                                  }
                                }
                              },
                              "range": [
                                380,
                                390
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 17
                                },
                                "start": {
                                  "column": 12,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              380,
                              391
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 17
                              },
                              "start": {
                                "column": 12,
                                "line": 17
                              }
                            }
                          },
                          {
                            "type": "ForStatement",
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "+=",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "builder",
                                      "optional": false,
                                      "range": [
                                        454,
                                        461
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 23,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 19
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "rest",
                                        "optional": false,
                                        "range": [
                                          463,
                                          467
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 29,
                                            "line": 19
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 19
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false,
                                        "range": [
                                          468,
                                          469
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 19
                                          },
                                          "start": {
                                            "column": 30,
                                            "line": 19
                                          }
                                        }
                                      },
                                      "range": [
                                        463,
                                        470
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 25,
                                          "line": 19
                                        }
                                      }
                                    },
                                    "range": [
                                      454,
                                      470
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 32,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 19
                                      }
                                    }
                                  },
                                  "range": [
                                    454,
                                    471
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 19
                                    }
                                  }
                                }
                              ],
                              "range": [
                                436,
                                485
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 20
                                },
                                "start": {
                                  "column": 44,
                                  "line": 18
                                }
                              }
                            },
                            "init": {
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
                                      413,
                                      414
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 18
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 18
                                      }
                                    }
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "raw": "0",
                                    "value": 0,
                                    "range": [
                                      415,
                                      416
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 18
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 18
                                      }
                                    }
                                  },
                                  "range": [
                                    413,
                                    416
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 18
                                    }
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "var",
                              "range": [
                                409,
                                416
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 18
                                },
                                "start": {
                                  "column": 17,
                                  "line": 18
                                }
                              }
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "<",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "range": [
                                  417,
                                  418
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 18
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "rest",
                                  "optional": false,
                                  "range": [
                                    419,
                                    423
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 18
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "range": [
                                    424,
                                    430
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 18
                                    }
                                  }
                                },
                                "range": [
                                  419,
                                  430
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                417,
                                430
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 18
                                },
                                "start": {
                                  "column": 25,
                                  "line": 18
                                }
                              }
                            },
                            "update": {
                              "type": "UpdateExpression",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "range": [
                                  431,
                                  432
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 18
                                  }
                                }
                              },
                              "operator": "++",
                              "prefix": false,
                              "range": [
                                431,
                                434
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 18
                                },
                                "start": {
                                  "column": 39,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              404,
                              485
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 20
                              },
                              "start": {
                                "column": 12,
                                "line": 18
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "builder",
                              "optional": false,
                              "range": [
                                505,
                                512
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 21
                                },
                                "start": {
                                  "column": 19,
                                  "line": 21
                                }
                              }
                            },
                            "range": [
                              498,
                              513
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 21
                              },
                              "start": {
                                "column": 12,
                                "line": 21
                              }
                            }
                          }
                        ],
                        "range": [
                          366,
                          523
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 22
                          },
                          "start": {
                            "column": 39,
                            "line": 16
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "range": [
                              351,
                              355
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 16
                              },
                              "start": {
                                "column": 24,
                                "line": 16
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 16
                              },
                              "start": {
                                "column": 28,
                                "line": 16
                              }
                            },
                            "range": [
                              355,
                              364
                            ],
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSStringKeyword",
                                "range": [
                                  356,
                                  362
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 16
                                  }
                                }
                              },
                              "range": [
                                356,
                                364
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 16
                                },
                                "start": {
                                  "column": 29,
                                  "line": 16
                                }
                              }
                            }
                          },
                          "range": [
                            348,
                            364
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 16
                            },
                            "start": {
                              "column": 21,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 22
                        },
                        "start": {
                          "column": 20,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      335,
                      523
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 19,
                    "line": 2
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
                  28,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 2
                  },
                  "start": {
                    "column": 17,
                    "line": 2
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                22,
                529
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          9,
          531
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          8
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
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
      "kind": "module",
      "range": [
        0,
        531
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
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
            "name": "x",
            "optional": false,
            "range": [
              537,
              538
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "range": [
                  543,
                  544
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 26
                  },
                  "start": {
                    "column": 10,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  545,
                  546
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 26
                  },
                  "start": {
                    "column": 12,
                    "line": 26
                  }
                }
              },
              "range": [
                543,
                546
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 26
                },
                "start": {
                  "column": 10,
                  "line": 26
                }
              }
            },
            "range": [
              539,
              548
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
              }
            }
          },
          "range": [
            537,
            548
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        533,
        549
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
              554,
              560
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              561,
              563
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 27
              },
              "start": {
                "column": 11,
                "line": 27
              }
            }
          },
          "range": [
            554,
            563
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        550,
        564
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "range": [
            565,
            571
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                577,
                578
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 28
                },
                "start": {
                  "column": 12,
                  "line": 28
                }
              }
            },
            {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                579,
                580
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 28
                },
                "start": {
                  "column": 14,
                  "line": 28
                }
              }
            },
            {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                581,
                582
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 28
                },
                "start": {
                  "column": 16,
                  "line": 28
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
              "name": "x",
              "optional": false,
              "range": [
                573,
                574
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 28
                },
                "start": {
                  "column": 8,
                  "line": 28
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                575,
                576
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 28
                },
                "start": {
                  "column": 10,
                  "line": 28
                }
              }
            },
            "range": [
              573,
              576
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 28
              },
              "start": {
                "column": 8,
                "line": 28
              }
            }
          },
          "optional": false,
          "range": [
            573,
            583
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 28
            },
            "start": {
              "column": 8,
              "line": 28
            }
          }
        },
        "range": [
          565,
          583
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        565,
        584
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "range": [
            604,
            610
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                616,
                617
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 29
                },
                "start": {
                  "column": 12,
                  "line": 29
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"hello\"",
              "value": "hello",
              "range": [
                618,
                625
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 29
                },
                "start": {
                  "column": 14,
                  "line": 29
                }
              }
            },
            {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                626,
                627
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 29
                },
                "start": {
                  "column": 22,
                  "line": 29
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
              "name": "x",
              "optional": false,
              "range": [
                612,
                613
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 29
                },
                "start": {
                  "column": 8,
                  "line": 29
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                614,
                615
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 29
                },
                "start": {
                  "column": 10,
                  "line": 29
                }
              }
            },
            "range": [
              612,
              615
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 29
              },
              "start": {
                "column": 8,
                "line": 29
              }
            }
          },
          "optional": false,
          "range": [
            612,
            628
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 29
            },
            "start": {
              "column": 8,
              "line": 29
            }
          }
        },
        "range": [
          604,
          628
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        604,
        629
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "range": [
            650,
            656
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "\"hello\"",
              "value": "hello",
              "range": [
                662,
                669
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 30
                },
                "start": {
                  "column": 12,
                  "line": 30
                }
              }
            },
            {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                670,
                671
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 30
                },
                "start": {
                  "column": 20,
                  "line": 30
                }
              }
            },
            {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                672,
                673
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 30
                },
                "start": {
                  "column": 22,
                  "line": 30
                }
              }
            },
            {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                674,
                675
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 30
                },
                "start": {
                  "column": 24,
                  "line": 30
                }
              }
            },
            {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                676,
                677
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 30
                },
                "start": {
                  "column": 26,
                  "line": 30
                }
              }
            },
            {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                678,
                679
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 30
                },
                "start": {
                  "column": 28,
                  "line": 30
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
              "name": "x",
              "optional": false,
              "range": [
                658,
                659
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 30
                },
                "start": {
                  "column": 8,
                  "line": 30
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                660,
                661
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 30
                },
                "start": {
                  "column": 10,
                  "line": 30
                }
              }
            },
            "range": [
              658,
              661
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 30
              },
              "start": {
                "column": 8,
                "line": 30
              }
            }
          },
          "optional": false,
          "range": [
            658,
            680
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 30
            },
            "start": {
              "column": 8,
              "line": 30
            }
          }
        },
        "range": [
          650,
          680
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        650,
        681
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "range": [
            688,
            694
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "\"hello\"",
              "value": "hello",
              "range": [
                700,
                707
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 31
                },
                "start": {
                  "column": 12,
                  "line": 31
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
              "name": "x",
              "optional": false,
              "range": [
                696,
                697
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 31
                },
                "start": {
                  "column": 8,
                  "line": 31
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                698,
                699
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 31
                },
                "start": {
                  "column": 10,
                  "line": 31
                }
              }
            },
            "range": [
              696,
              699
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 31
              },
              "start": {
                "column": 8,
                "line": 31
              }
            }
          },
          "optional": false,
          "range": [
            696,
            708
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 31
            },
            "start": {
              "column": 8,
              "line": 31
            }
          }
        },
        "range": [
          688,
          708
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        688,
        709
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "range": [
            733,
            739
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                749,
                750
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 32
                },
                "start": {
                  "column": 16,
                  "line": 32
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
              "name": "x",
              "optional": false,
              "range": [
                741,
                742
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 32
                },
                "start": {
                  "column": 8,
                  "line": 32
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fonly",
              "optional": false,
              "range": [
                743,
                748
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 32
                },
                "start": {
                  "column": 10,
                  "line": 32
                }
              }
            },
            "range": [
              741,
              748
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 32
              },
              "start": {
                "column": 8,
                "line": 32
              }
            }
          },
          "optional": false,
          "range": [
            741,
            751
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 32
            },
            "start": {
              "column": 8,
              "line": 32
            }
          }
        },
        "range": [
          733,
          751
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        733,
        752
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "range": [
            770,
            776
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                786,
                787
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 33
                },
                "start": {
                  "column": 16,
                  "line": 33
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
              "name": "x",
              "optional": false,
              "range": [
                778,
                779
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 33
                },
                "start": {
                  "column": 8,
                  "line": 33
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fonly",
              "optional": false,
              "range": [
                780,
                785
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 33
                },
                "start": {
                  "column": 10,
                  "line": 33
                }
              }
            },
            "range": [
              778,
              785
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 33
              },
              "start": {
                "column": 8,
                "line": 33
              }
            }
          },
          "optional": false,
          "range": [
            778,
            788
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 33
            },
            "start": {
              "column": 8,
              "line": 33
            }
          }
        },
        "range": [
          770,
          788
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        770,
        789
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "range": [
            803,
            809
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "\"a\"",
              "value": "a",
              "range": [
                819,
                822
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 34
                },
                "start": {
                  "column": 16,
                  "line": 34
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
              "name": "x",
              "optional": false,
              "range": [
                811,
                812
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 34
                },
                "start": {
                  "column": 8,
                  "line": 34
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fonly",
              "optional": false,
              "range": [
                813,
                818
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 34
                },
                "start": {
                  "column": 10,
                  "line": 34
                }
              }
            },
            "range": [
              811,
              818
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 34
              },
              "start": {
                "column": 8,
                "line": 34
              }
            }
          },
          "optional": false,
          "range": [
            811,
            823
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 34
            },
            "start": {
              "column": 8,
              "line": 34
            }
          }
        },
        "range": [
          803,
          823
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        803,
        824
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "range": [
            832,
            838
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Literal",
              "raw": "\"a\"",
              "value": "a",
              "range": [
                848,
                851
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 35
                },
                "start": {
                  "column": 16,
                  "line": 35
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"b\"",
              "value": "b",
              "range": [
                852,
                855
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 35
                },
                "start": {
                  "column": 20,
                  "line": 35
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"c\"",
              "value": "c",
              "range": [
                856,
                859
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 35
                },
                "start": {
                  "column": 24,
                  "line": 35
                }
              }
            },
            {
              "type": "Literal",
              "raw": "\"d\"",
              "value": "d",
              "range": [
                860,
                863
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 35
                },
                "start": {
                  "column": 28,
                  "line": 35
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
              "name": "x",
              "optional": false,
              "range": [
                840,
                841
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 35
                },
                "start": {
                  "column": 8,
                  "line": 35
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "fonly",
              "optional": false,
              "range": [
                842,
                847
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 35
                },
                "start": {
                  "column": 10,
                  "line": 35
                }
              }
            },
            "range": [
              840,
              847
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 35
              },
              "start": {
                "column": 8,
                "line": 35
              }
            }
          },
          "optional": false,
          "range": [
            840,
            864
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 35
            },
            "start": {
              "column": 8,
              "line": 35
            }
          }
        },
        "range": [
          832,
          864
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        832,
        865
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 38
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
