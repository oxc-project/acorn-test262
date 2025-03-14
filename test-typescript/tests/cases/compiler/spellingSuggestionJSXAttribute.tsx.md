__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    44,
    427
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
          67,
          74
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 2
          },
          "start": {
            "column": 23,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              56,
              61
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "range": [
            51,
            61
          ],
          "loc": {
            "end": {
              "column": 17,
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
        44,
        75
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  156,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "range": [
                156,
                161
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              149,
              162
            ],
            "loc": {
              "end": {
                "column": 17,
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
          143,
          164
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 66,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComp2",
        "optional": false,
        "range": [
          86,
          93
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 64,
                "line": 4
              },
              "start": {
                "column": 22,
                "line": 4
              }
            },
            "range": [
              99,
              141
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
                    "name": "className",
                    "optional": false,
                    "range": [
                      103,
                      112
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 4
                      },
                      "start": {
                        "column": 26,
                        "line": 4
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
                        "column": 44,
                        "line": 4
                      },
                      "start": {
                        "column": 36,
                        "line": 4
                      }
                    },
                    "range": [
                      113,
                      121
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        115,
                        121
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 4
                        },
                        "start": {
                          "column": 38,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    103,
                    122
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 4
                    },
                    "start": {
                      "column": 26,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "htmlFor",
                    "optional": false,
                    "range": [
                      123,
                      130
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 4
                      },
                      "start": {
                        "column": 46,
                        "line": 4
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
                        "column": 62,
                        "line": 4
                      },
                      "start": {
                        "column": 54,
                        "line": 4
                      }
                    },
                    "range": [
                      131,
                      139
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        133,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 4
                        },
                        "start": {
                          "column": 56,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    123,
                    139
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 4
                    },
                    "start": {
                      "column": 46,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                101,
                141
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 4
                },
                "start": {
                  "column": 24,
                  "line": 4
                }
              }
            }
          },
          "range": [
            94,
            141
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 4
            },
            "start": {
              "column": 17,
              "line": 4
            }
          }
        }
      ],
      "range": [
        77,
        164
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          244,
          247
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 82,
            "line": 7
          },
          "start": {
            "column": 79,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComp",
        "optional": false,
        "range": [
          171,
          177
        ],
        "loc": {
          "end": {
            "column": 12,
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
            186,
            191
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 7
            },
            "start": {
              "column": 21,
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
            192,
            201
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 7
            },
            "start": {
              "column": 27,
              "line": 7
            }
          }
        },
        "range": [
          186,
          201
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 7
          },
          "start": {
            "column": 21,
            "line": 7
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          201,
          243
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
                  "name": "className",
                  "optional": false,
                  "range": [
                    204,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 7
                    },
                    "start": {
                      "column": 39,
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
                      "column": 57,
                      "line": 7
                    },
                    "start": {
                      "column": 49,
                      "line": 7
                    }
                  },
                  "range": [
                    214,
                    222
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      216,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 7
                      },
                      "start": {
                        "column": 51,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  204,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 7
                  },
                  "start": {
                    "column": 39,
                    "line": 7
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "htmlFor",
                  "optional": false,
                  "range": [
                    224,
                    231
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 7
                    },
                    "start": {
                      "column": 59,
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
                      "column": 75,
                      "line": 7
                    },
                    "start": {
                      "column": 67,
                      "line": 7
                    }
                  },
                  "range": [
                    232,
                    240
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      234,
                      240
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 7
                      },
                      "start": {
                        "column": 69,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  224,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 7
                  },
                  "start": {
                    "column": 59,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              202,
              242
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 7
              },
              "start": {
                "column": 37,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 7
          },
          "start": {
            "column": 36,
            "line": 7
          }
        }
      },
      "range": [
        165,
        247
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            248,
            262
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "class",
                "range": [
                  251,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 8
                  },
                  "start": {
                    "column": 3,
                    "line": 8
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  257,
                  259
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              },
              "range": [
                251,
                259
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 8
                },
                "start": {
                  "column": 3,
                  "line": 8
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "a",
            "range": [
              249,
              250
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 8
              },
              "start": {
                "column": 1,
                "line": 8
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 14,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "range": [
          248,
          262
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        248,
        263
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            264,
            276
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "for",
                "range": [
                  267,
                  270
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 9
                  },
                  "start": {
                    "column": 3,
                    "line": 9
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  271,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 9
                  },
                  "start": {
                    "column": 7,
                    "line": 9
                  }
                }
              },
              "range": [
                267,
                273
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 9
                },
                "start": {
                  "column": 3,
                  "line": 9
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "a",
            "range": [
              265,
              266
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 9
              },
              "start": {
                "column": 1,
                "line": 9
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 12,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "range": [
          264,
          276
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        264,
        277
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            300,
            316
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "for",
                "range": [
                  307,
                  310
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 10
                  },
                  "start": {
                    "column": 7,
                    "line": 10
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  311,
                  313
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
                307,
                313
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 10
                },
                "start": {
                  "column": 7,
                  "line": 10
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "label",
            "range": [
              301,
              306
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 1,
                "line": 10
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 16,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "range": [
          300,
          316
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        300,
        317
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            318,
            343
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "for",
                "range": [
                  325,
                  328
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 11
                  },
                  "start": {
                    "column": 7,
                    "line": 11
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  329,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                }
              },
              "range": [
                325,
                331
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 11
                },
                "start": {
                  "column": 7,
                  "line": 11
                }
              }
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "class",
                "range": [
                  332,
                  337
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 11
                  },
                  "start": {
                    "column": 14,
                    "line": 11
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  338,
                  340
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 11
                  },
                  "start": {
                    "column": 20,
                    "line": 11
                  }
                }
              },
              "range": [
                332,
                340
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "label",
            "range": [
              319,
              324
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 11
              },
              "start": {
                "column": 1,
                "line": 11
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 25,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "range": [
          318,
          343
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        318,
        344
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            345,
            364
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "class",
                "range": [
                  353,
                  358
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  359,
                  361
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 12
                  },
                  "start": {
                    "column": 14,
                    "line": 12
                  }
                }
              },
              "range": [
                353,
                361
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComp",
            "range": [
              346,
              352
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 12
              },
              "start": {
                "column": 1,
                "line": 12
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 19,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "range": [
          345,
          364
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        345,
        365
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            366,
            386
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "class",
                "range": [
                  375,
                  380
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 13
                  },
                  "start": {
                    "column": 9,
                    "line": 13
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  381,
                  383
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 13
                  },
                  "start": {
                    "column": 15,
                    "line": 13
                  }
                }
              },
              "range": [
                375,
                383
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 13
                },
                "start": {
                  "column": 9,
                  "line": 13
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComp2",
            "range": [
              367,
              374
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 13
              },
              "start": {
                "column": 1,
                "line": 13
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 20,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "range": [
          366,
          386
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        366,
        387
      ],
      "loc": {
        "end": {
          "column": 21,
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
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            388,
            405
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "for",
                "range": [
                  396,
                  399
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  400,
                  402
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 14
                  },
                  "start": {
                    "column": 12,
                    "line": 14
                  }
                }
              },
              "range": [
                396,
                402
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComp",
            "range": [
              389,
              395
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 14
              },
              "start": {
                "column": 1,
                "line": 14
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 17,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "range": [
          388,
          405
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        388,
        406
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [],
        "closingElement": null,
        "openingElement": {
          "type": "JSXOpeningElement",
          "range": [
            407,
            425
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "for",
                "range": [
                  416,
                  419
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 15
                  },
                  "start": {
                    "column": 9,
                    "line": 15
                  }
                }
              },
              "value": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  420,
                  422
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 15
                  },
                  "start": {
                    "column": 13,
                    "line": 15
                  }
                }
              },
              "range": [
                416,
                422
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 15
                },
                "start": {
                  "column": 9,
                  "line": 15
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComp2",
            "range": [
              408,
              415
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 15
              },
              "start": {
                "column": 1,
                "line": 15
              }
            }
          },
          "selfClosing": true,
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
        "range": [
          407,
          425
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
      "range": [
        407,
        426
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
