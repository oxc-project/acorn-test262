__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    981
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "range": [
          7,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "'react'",
          "value": "react",
          "range": [
            23,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        },
        "range": [
          15,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        32
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "children": [
                {
                  "type": "JSXText",
                  "range": [
                    84,
                    91
                  ],
                  "raw": "Hello, ",
                  "value": "Hello, ",
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 4
                    },
                    "start": {
                      "column": 13,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      92,
                      93
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 4
                      },
                      "start": {
                        "column": 21,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    91,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 4
                    },
                    "start": {
                      "column": 20,
                      "line": 4
                    }
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "range": [
                    96,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 4
                    },
                    "start": {
                      "column": 25,
                      "line": 4
                    }
                  }
                },
                "range": [
                  94,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 23,
                    "line": 4
                  }
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "range": [
                    80,
                    83
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 4
                    },
                    "start": {
                      "column": 9,
                      "line": 4
                    }
                  }
                },
                "selfClosing": false,
                "range": [
                  79,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              },
              "range": [
                79,
                100
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "range": [
              72,
              101
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 4
              },
              "start": {
                "column": 1,
                "line": 4
              }
            }
          }
        ],
        "range": [
          69,
          103
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 35,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Greet",
        "optional": false,
        "range": [
          43,
          48
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
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
                "column": 33,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            },
            "range": [
              50,
              67
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "range": [
                      53,
                      57
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 3
                      },
                      "start": {
                        "column": 19,
                        "line": 3
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
                        "column": 32,
                        "line": 3
                      },
                      "start": {
                        "column": 24,
                        "line": 3
                      }
                    },
                    "range": [
                      58,
                      66
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        60,
                        66
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 3
                        },
                        "start": {
                          "column": 26,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    53,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 3
                    },
                    "start": {
                      "column": 19,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                52,
                67
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            }
          },
          "range": [
            49,
            67
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 3
            },
            "start": {
              "column": 15,
              "line": 3
            }
          }
        }
      ],
      "range": [
        34,
        103
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          169,
          228
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "range": [
                172,
                178
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 8
                },
                "start": {
                  "column": 1,
                  "line": 8
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
                178,
                207
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "range": [
                            199,
                            202
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 9
                            },
                            "start": {
                              "column": 16,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          197,
                          203
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 9
                          },
                          "start": {
                            "column": 14,
                            "line": 9
                          }
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "range": [
                            193,
                            196
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 9
                            },
                            "start": {
                              "column": 10,
                              "line": 9
                            }
                          }
                        },
                        "selfClosing": false,
                        "range": [
                          192,
                          197
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 9
                          },
                          "start": {
                            "column": 9,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        192,
                        203
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 9
                        },
                        "start": {
                          "column": 9,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      185,
                      204
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 9
                      },
                      "start": {
                        "column": 2,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  181,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 8
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
                  "column": 2,
                  "line": 10
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              }
            },
            "range": [
              172,
              207
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 10
              },
              "start": {
                "column": 1,
                "line": 8
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
              "name": "greeting",
              "optional": false,
              "range": [
                209,
                217
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 11
                },
                "start": {
                  "column": 1,
                  "line": 11
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
                  "column": 17,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 11
                }
              },
              "range": [
                217,
                225
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  219,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                }
              }
            },
            "value": null,
            "range": [
              209,
              226
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 11
              },
              "start": {
                "column": 1,
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
            "column": 64,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BigGreeter",
        "optional": false,
        "range": [
          111,
          121
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "range": [
            130,
            135
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 7
            },
            "start": {
              "column": 25,
              "line": 7
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            136,
            145
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 7
            },
            "start": {
              "column": 31,
              "line": 7
            }
          }
        },
        "range": [
          130,
          145
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 7
          },
          "start": {
            "column": 25,
            "line": 7
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          145,
          168
        ],
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "range": [
                    148,
                    152
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 7
                    },
                    "start": {
                      "column": 43,
                      "line": 7
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
                      "column": 56,
                      "line": 7
                    },
                    "start": {
                      "column": 48,
                      "line": 7
                    }
                  },
                  "range": [
                    153,
                    161
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      155,
                      161
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 7
                      },
                      "start": {
                        "column": 50,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  148,
                  161
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 7
                  },
                  "start": {
                    "column": 43,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              146,
              163
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 7
              },
              "start": {
                "column": 41,
                "line": 7
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              165,
              167
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 7
              },
              "start": {
                "column": 60,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 7
          },
          "start": {
            "column": 40,
            "line": 7
          }
        }
      },
      "range": [
        105,
        228
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
            "name": "a",
            "optional": false,
            "range": [
              240,
              241
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                244,
                253
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Greet",
                "range": [
                  245,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 15
                  },
                  "start": {
                    "column": 9,
                    "line": 15
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 17,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            },
            "range": [
              244,
              253
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 15
              },
              "start": {
                "column": 8,
                "line": 15
              }
            }
          },
          "range": [
            240,
            253
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        236,
        254
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "b",
            "optional": false,
            "range": [
              297,
              298
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                301,
                318
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "range": [
                      308,
                      311
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 17
                      },
                      "start": {
                        "column": 15,
                        "line": 17
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"k\"",
                    "value": "k",
                    "range": [
                      312,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 17
                      },
                      "start": {
                        "column": 19,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    308,
                    315
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 17
                    },
                    "start": {
                      "column": 15,
                      "line": 17
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Greet",
                "range": [
                  302,
                  307
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 17
                  },
                  "start": {
                    "column": 9,
                    "line": 17
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 25,
                  "line": 17
                },
                "start": {
                  "column": 8,
                  "line": 17
                }
              }
            },
            "range": [
              301,
              318
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 17
              },
              "start": {
                "column": 8,
                "line": 17
              }
            }
          },
          "range": [
            297,
            318
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        293,
        319
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
            "name": "c",
            "optional": false,
            "range": [
              372,
              373
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                376,
                397
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "range": [
                      383,
                      386
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 19
                      },
                      "start": {
                        "column": 15,
                        "line": 19
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"myRef\"",
                    "value": "myRef",
                    "range": [
                      387,
                      394
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 19
                      },
                      "start": {
                        "column": 19,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    383,
                    394
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 19
                    },
                    "start": {
                      "column": 15,
                      "line": 19
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Greet",
                "range": [
                  377,
                  382
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 19
                  },
                  "start": {
                    "column": 9,
                    "line": 19
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 29,
                  "line": 19
                },
                "start": {
                  "column": 8,
                  "line": 19
                }
              }
            },
            "range": [
              376,
              397
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 19
              }
            }
          },
          "range": [
            372,
            397
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        368,
        398
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "d",
            "optional": false,
            "range": [
              438,
              439
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                442,
                489
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "range": [
                      454,
                      457
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 23
                      },
                      "start": {
                        "column": 20,
                        "line": 23
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
                            "type": "Literal",
                            "raw": "10",
                            "value": 10,
                            "range": [
                              482,
                              484
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 23
                              },
                              "start": {
                                "column": 48,
                                "line": 23
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                464,
                                465
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 23
                                },
                                "start": {
                                  "column": 30,
                                  "line": 23
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "greeting",
                              "optional": false,
                              "range": [
                                466,
                                474
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 23
                                },
                                "start": {
                                  "column": 32,
                                  "line": 23
                                }
                              }
                            },
                            "range": [
                              464,
                              474
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 23
                              },
                              "start": {
                                "column": 30,
                                "line": 23
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "substr",
                            "optional": false,
                            "range": [
                              475,
                              481
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 23
                              },
                              "start": {
                                "column": 41,
                                "line": 23
                              }
                            }
                          },
                          "range": [
                            464,
                            481
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 23
                            },
                            "start": {
                              "column": 30,
                              "line": 23
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          464,
                          485
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 23
                          },
                          "start": {
                            "column": 30,
                            "line": 23
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            459,
                            460
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 23
                            },
                            "start": {
                              "column": 25,
                              "line": 23
                            }
                          }
                        }
                      ],
                      "range": [
                        459,
                        485
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 23
                        },
                        "start": {
                          "column": 25,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      458,
                      486
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 23
                      },
                      "start": {
                        "column": 24,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    454,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 23
                    },
                    "start": {
                      "column": 20,
                      "line": 23
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "BigGreeter",
                "range": [
                  443,
                  453
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 23
                  },
                  "start": {
                    "column": 9,
                    "line": 23
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 55,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 23
                }
              }
            },
            "range": [
              442,
              489
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 23
              },
              "start": {
                "column": 8,
                "line": 23
              }
            }
          },
          "range": [
            438,
            489
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        434,
        490
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "e",
            "optional": false,
            "range": [
              528,
              529
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                532,
                578
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "range": [
                      544,
                      547
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 25
                      },
                      "start": {
                        "column": 20,
                        "line": 25
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
                            "type": "Literal",
                            "raw": "10",
                            "value": 10,
                            "range": [
                              571,
                              573
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 25
                              },
                              "start": {
                                "column": 47,
                                "line": 25
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                554,
                                555
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 25
                                },
                                "start": {
                                  "column": 30,
                                  "line": 25
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "greeting",
                              "optional": false,
                              "range": [
                                556,
                                564
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 25
                                },
                                "start": {
                                  "column": 32,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              554,
                              564
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 25
                              },
                              "start": {
                                "column": 30,
                                "line": 25
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "subtr",
                            "optional": false,
                            "range": [
                              565,
                              570
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 25
                              },
                              "start": {
                                "column": 41,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            554,
                            570
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 25
                            },
                            "start": {
                              "column": 30,
                              "line": 25
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          554,
                          574
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 25
                          },
                          "start": {
                            "column": 30,
                            "line": 25
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            549,
                            550
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 25
                            },
                            "start": {
                              "column": 25,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "range": [
                        549,
                        574
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 25
                        },
                        "start": {
                          "column": 25,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      548,
                      575
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 25
                      },
                      "start": {
                        "column": 24,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    544,
                    575
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 25
                    },
                    "start": {
                      "column": 20,
                      "line": 25
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "BigGreeter",
                "range": [
                  533,
                  543
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 25
                  },
                  "start": {
                    "column": 9,
                    "line": 25
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 54,
                  "line": 25
                },
                "start": {
                  "column": 8,
                  "line": 25
                }
              }
            },
            "range": [
              532,
              578
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 25
              },
              "start": {
                "column": 8,
                "line": 25
              }
            }
          },
          "range": [
            528,
            578
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        524,
        579
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "f",
            "optional": false,
            "range": [
              630,
              631
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                634,
                678
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "range": [
                      646,
                      649
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 27
                      },
                      "start": {
                        "column": 20,
                        "line": 27
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            656,
                            657
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 27
                            },
                            "start": {
                              "column": 30,
                              "line": 27
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "notARealProperty",
                          "optional": false,
                          "range": [
                            658,
                            674
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 27
                            },
                            "start": {
                              "column": 32,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          656,
                          674
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 27
                          },
                          "start": {
                            "column": 30,
                            "line": 27
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            651,
                            652
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 27
                            },
                            "start": {
                              "column": 25,
                              "line": 27
                            }
                          }
                        }
                      ],
                      "range": [
                        651,
                        674
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 27
                        },
                        "start": {
                          "column": 25,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      650,
                      675
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 27
                      },
                      "start": {
                        "column": 24,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    646,
                    675
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 27
                    },
                    "start": {
                      "column": 20,
                      "line": 27
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "BigGreeter",
                "range": [
                  635,
                  645
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 27
                  },
                  "start": {
                    "column": 9,
                    "line": 27
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 52,
                  "line": 27
                },
                "start": {
                  "column": 8,
                  "line": 27
                }
              }
            },
            "range": [
              634,
              678
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 27
              },
              "start": {
                "column": 8,
                "line": 27
              }
            }
          },
          "range": [
            630,
            678
          ],
          "loc": {
            "end": {
              "column": 52,
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
      "kind": "let",
      "range": [
        626,
        679
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
            "name": "g",
            "optional": false,
            "range": [
              713,
              714
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                717,
                741
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "range": [
                      729,
                      732
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 30
                      },
                      "start": {
                        "column": 20,
                        "line": 30
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "100",
                      "value": 100,
                      "range": [
                        734,
                        737
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 30
                        },
                        "start": {
                          "column": 25,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      733,
                      738
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 30
                      },
                      "start": {
                        "column": 24,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    729,
                    738
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 30
                    },
                    "start": {
                      "column": 20,
                      "line": 30
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "BigGreeter",
                "range": [
                  718,
                  728
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 30
                  },
                  "start": {
                    "column": 9,
                    "line": 30
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 32,
                  "line": 30
                },
                "start": {
                  "column": 8,
                  "line": 30
                }
              }
            },
            "range": [
              717,
              741
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 30
              },
              "start": {
                "column": 8,
                "line": 30
              }
            }
          },
          "range": [
            713,
            741
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        709,
        742
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
            "name": "h",
            "optional": false,
            "range": [
              808,
              809
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                812,
                842
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "range": [
                      817,
                      820
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 33
                      },
                      "start": {
                        "column": 13,
                        "line": 33
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            827,
                            828
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 33
                            },
                            "start": {
                              "column": 23,
                              "line": 33
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "innerText",
                          "optional": false,
                          "range": [
                            829,
                            838
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 33
                            },
                            "start": {
                              "column": 25,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          827,
                          838
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 33
                          },
                          "start": {
                            "column": 23,
                            "line": 33
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            822,
                            823
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 33
                            },
                            "start": {
                              "column": 18,
                              "line": 33
                            }
                          }
                        }
                      ],
                      "range": [
                        822,
                        838
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 33
                        },
                        "start": {
                          "column": 18,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      821,
                      839
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 33
                      },
                      "start": {
                        "column": 17,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    817,
                    839
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 33
                    },
                    "start": {
                      "column": 13,
                      "line": 33
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "range": [
                  813,
                  816
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 33
                  },
                  "start": {
                    "column": 9,
                    "line": 33
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 38,
                  "line": 33
                },
                "start": {
                  "column": 8,
                  "line": 33
                }
              }
            },
            "range": [
              812,
              842
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 33
              },
              "start": {
                "column": 8,
                "line": 33
              }
            }
          },
          "range": [
            808,
            842
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        804,
        843
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
            "name": "i",
            "optional": false,
            "range": [
              926,
              927
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                930,
                978
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "ref",
                    "range": [
                      935,
                      938
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 35
                      },
                      "start": {
                        "column": 13,
                        "line": 35
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            945,
                            946
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 35
                            },
                            "start": {
                              "column": 23,
                              "line": 35
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "propertyNotOnHtmlDivElement",
                          "optional": false,
                          "range": [
                            947,
                            974
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 35
                            },
                            "start": {
                              "column": 25,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          945,
                          974
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 35
                          },
                          "start": {
                            "column": 23,
                            "line": 35
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            940,
                            941
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 35
                            },
                            "start": {
                              "column": 18,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "range": [
                        940,
                        974
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 35
                        },
                        "start": {
                          "column": 18,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      939,
                      975
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 35
                      },
                      "start": {
                        "column": 17,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    935,
                    975
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 35
                    },
                    "start": {
                      "column": 13,
                      "line": 35
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "range": [
                  931,
                  934
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 35
                  },
                  "start": {
                    "column": 9,
                    "line": 35
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 56,
                  "line": 35
                },
                "start": {
                  "column": 8,
                  "line": 35
                }
              }
            },
            "range": [
              930,
              978
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 35
              },
              "start": {
                "column": 8,
                "line": 35
              }
            }
          },
          "range": [
            926,
            978
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        922,
        979
      ],
      "loc": {
        "end": {
          "column": 57,
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
      "line": 37
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
