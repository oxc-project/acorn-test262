__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    44,
    364
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"react\"",
        "value": "react",
        "range": [
          84,
          91
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 2
          },
          "start": {
            "column": 40,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "range": [
              53,
              61
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fragment",
            "optional": false,
            "range": [
              53,
              61
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "range": [
            53,
            61
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 9,
              "line": 2
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "createElement",
            "optional": false,
            "range": [
              63,
              76
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 2
              },
              "start": {
                "column": 19,
                "line": 2
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "createElement",
            "optional": false,
            "range": [
              63,
              76
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 2
              },
              "start": {
                "column": 19,
                "line": 2
              }
            }
          },
          "range": [
            63,
            76
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 2
            },
            "start": {
              "column": 19,
              "line": 2
            }
          }
        }
      ],
      "range": [
        44,
        91
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CounterProps",
        "optional": false,
        "range": [
          98,
          110
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "count",
              "optional": false,
              "range": [
                119,
                124
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              },
              "range": [
                125,
                133
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  127,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 5
                  },
                  "start": {
                    "column": 12,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              119,
              133
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          113,
          135
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 20,
            "line": 4
          }
        }
      },
      "range": [
        93,
        135
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        137,
        364
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
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
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cnt",
                        "optional": false,
                        "range": [
                          203,
                          206
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 9
                          },
                          "start": {
                            "column": 11,
                            "line": 9
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "setCnt",
                        "optional": false,
                        "range": [
                          208,
                          214
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 9
                          },
                          "start": {
                            "column": 16,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      202,
                      215
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 9
                      },
                      "start": {
                        "column": 10,
                        "line": 9
                      }
                    }
                  },
                  "init": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        218,
                        222
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 9
                        },
                        "start": {
                          "column": 26,
                          "line": 9
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        226,
                        229
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 9
                        },
                        "start": {
                          "column": 34,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      218,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 9
                      },
                      "start": {
                        "column": 26,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    202,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 9
                    },
                    "start": {
                      "column": 10,
                      "line": 9
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                196,
                230
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "JSXFragment",
                "children": [
                  {
                    "type": "JSXText",
                    "range": [
                      244,
                      253
                    ],
                    "raw": "\n        ",
                    "value": "\n        ",
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 11
                      },
                      "start": {
                        "column": 13,
                        "line": 10
                      }
                    }
                  },
                  {
                    "type": "JSXElement",
                    "children": [
                      {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cnt",
                          "optional": false,
                          "range": [
                            257,
                            260
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 11
                            },
                            "start": {
                              "column": 12,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          256,
                          261
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 11
                          },
                          "start": {
                            "column": 11,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "p",
                        "range": [
                          263,
                          264
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 11
                          },
                          "start": {
                            "column": 18,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        261,
                        265
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 11
                        },
                        "start": {
                          "column": 16,
                          "line": 11
                        }
                      }
                    },
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "p",
                        "range": [
                          254,
                          255
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 11
                          },
                          "start": {
                            "column": 9,
                            "line": 11
                          }
                        }
                      },
                      "selfClosing": false,
                      "range": [
                        253,
                        256
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 11
                        },
                        "start": {
                          "column": 8,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      253,
                      265
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "JSXText",
                    "range": [
                      265,
                      274
                    ],
                    "raw": "\n        ",
                    "value": "\n        ",
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 12
                      },
                      "start": {
                        "column": 20,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "JSXElement",
                    "children": [
                      {
                        "type": "JSXText",
                        "range": [
                          339,
                          345
                        ],
                        "raw": "Update",
                        "value": "Update",
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 12
                          },
                          "start": {
                            "column": 73,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "button",
                        "range": [
                          347,
                          353
                        ],
                        "loc": {
                          "end": {
                            "column": 87,
                            "line": 12
                          },
                          "start": {
                            "column": 81,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        345,
                        354
                      ],
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 12
                        },
                        "start": {
                          "column": 79,
                          "line": 12
                        }
                      }
                    },
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "attributes": [
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "onClick",
                            "range": [
                              282,
                              289
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 12
                              },
                              "start": {
                                "column": 16,
                                "line": 12
                              }
                            }
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "async": false,
                                    "body": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "prev",
                                        "optional": false,
                                        "range": [
                                          314,
                                          318
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 52,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 48,
                                            "line": 12
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "raw": "1",
                                        "value": 1,
                                        "range": [
                                          321,
                                          322
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 56,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 55,
                                            "line": 12
                                          }
                                        }
                                      },
                                      "range": [
                                        314,
                                        322
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 56,
                                          "line": 12
                                        },
                                        "start": {
                                          "column": 48,
                                          "line": 12
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
                                        "name": "prev",
                                        "optional": false,
                                        "range": [
                                          305,
                                          309
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 43,
                                            "line": 12
                                          },
                                          "start": {
                                            "column": 39,
                                            "line": 12
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      304,
                                      322
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 56,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 12
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "setCnt",
                                  "optional": false,
                                  "range": [
                                    297,
                                    303
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 12
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  297,
                                  323
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 12
                                  }
                                }
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                291,
                                323
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 12
                                },
                                "start": {
                                  "column": 25,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              290,
                              324
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 12
                              },
                              "start": {
                                "column": 24,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            282,
                            324
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 12
                            },
                            "start": {
                              "column": 16,
                              "line": 12
                            }
                          }
                        },
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "type",
                            "range": [
                              325,
                              329
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 12
                              },
                              "start": {
                                "column": 59,
                                "line": 12
                              }
                            }
                          },
                          "value": {
                            "type": "Literal",
                            "raw": "\"button\"",
                            "value": "button",
                            "range": [
                              330,
                              338
                            ],
                            "loc": {
                              "end": {
                                "column": 72,
                                "line": 12
                              },
                              "start": {
                                "column": 64,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            325,
                            338
                          ],
                          "loc": {
                            "end": {
                              "column": 72,
                              "line": 12
                            },
                            "start": {
                              "column": 59,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "button",
                        "range": [
                          275,
                          281
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 12
                          },
                          "start": {
                            "column": 9,
                            "line": 12
                          }
                        }
                      },
                      "selfClosing": false,
                      "range": [
                        274,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      274,
                      354
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "JSXText",
                    "range": [
                      354,
                      359
                    ],
                    "raw": "\n    ",
                    "value": "\n    ",
                    "loc": {
                      "end": {
                        "column": 4,
                        "line": 13
                      },
                      "start": {
                        "column": 88,
                        "line": 12
                      }
                    }
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "range": [
                    359,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 13
                    }
                  }
                },
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "range": [
                    242,
                    244
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 10
                    },
                    "start": {
                      "column": 11,
                      "line": 10
                    }
                  }
                },
                "range": [
                  242,
                  362
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              },
              "range": [
                235,
                362
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            }
          ],
          "range": [
            190,
            364
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 53,
              "line": 8
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Counter",
          "optional": false,
          "range": [
            153,
            160
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 8
            },
            "start": {
              "column": 16,
              "line": 8
            }
          }
        },
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "count",
                  "optional": false,
                  "range": [
                    163,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 8
                    },
                    "start": {
                      "column": 26,
                      "line": 8
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "range": [
                    163,
                    172
                  ],
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "range": [
                      163,
                      168
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 8
                      },
                      "start": {
                        "column": 26,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      171,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 8
                      },
                      "start": {
                        "column": 34,
                        "line": 8
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 8
                    },
                    "start": {
                      "column": 26,
                      "line": 8
                    }
                  }
                },
                "range": [
                  163,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 8
                  },
                  "start": {
                    "column": 26,
                    "line": 8
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 8
                },
                "start": {
                  "column": 37,
                  "line": 8
                }
              },
              "range": [
                174,
                188
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CounterProps",
                  "optional": false,
                  "range": [
                    176,
                    188
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 8
                    },
                    "start": {
                      "column": 39,
                      "line": 8
                    }
                  }
                },
                "range": [
                  176,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 8
                  },
                  "start": {
                    "column": 39,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              161,
              188
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 8
              },
              "start": {
                "column": 24,
                "line": 8
              }
            }
          }
        ],
        "range": [
          144,
          364
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
