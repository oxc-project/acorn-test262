__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    370
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          49,
          117
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                55,
                56
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                56,
                64
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  58,
                  64
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
              }
            },
            "range": [
              55,
              65
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 4
              },
              "start": {
                "column": 4,
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
              "name": "b",
              "optional": false,
              "range": [
                70,
                71
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              },
              "range": [
                71,
                79
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  73,
                  79
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
              }
            },
            "range": [
              70,
              80
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "range": [
                85,
                93
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              },
              "range": [
                93,
                115
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      95,
                      101
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 6
                      },
                      "start": {
                        "column": 14,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "JSX",
                        "optional": false,
                        "range": [
                          104,
                          107
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 6
                          },
                          "start": {
                            "column": 23,
                            "line": 6
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "range": [
                          108,
                          115
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 6
                          },
                          "start": {
                            "column": 27,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        104,
                        115
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 6
                        },
                        "start": {
                          "column": 23,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      104,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 6
                      },
                      "start": {
                        "column": 23,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  95,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 6
                  },
                  "start": {
                    "column": 14,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              85,
              115
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "range": [
          44,
          48
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        34,
        117
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 3
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
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "range": [
                        161,
                        162
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 10
                        },
                        "start": {
                          "column": 17,
                          "line": 10
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        163,
                        164
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 10
                        },
                        "start": {
                          "column": 19,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      161,
                      164
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 10
                      },
                      "start": {
                        "column": 17,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    160,
                    165
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 10
                    },
                    "start": {
                      "column": 16,
                      "line": 10
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
                    167,
                    170
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 10
                    },
                    "start": {
                      "column": 23,
                      "line": 10
                    }
                  }
                },
                "range": [
                  165,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 10
                  },
                  "start": {
                    "column": 21,
                    "line": 10
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
                    156,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 10
                    },
                    "start": {
                      "column": 12,
                      "line": 10
                    }
                  }
                },
                "selfClosing": false,
                "range": [
                  155,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              },
              "range": [
                155,
                171
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              148,
              172
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          142,
          174
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 23,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "range": [
          128,
          132
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 9
              },
              "start": {
                "column": 15,
                "line": 9
              }
            },
            "range": [
              134,
              140
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prop",
                "optional": false,
                "range": [
                  136,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 9
                  },
                  "start": {
                    "column": 17,
                    "line": 9
                  }
                }
              },
              "range": [
                136,
                140
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 9
                },
                "start": {
                  "column": 17,
                  "line": 9
                }
              }
            }
          },
          "range": [
            133,
            140
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 9
            },
            "start": {
              "column": 14,
              "line": 9
            }
          }
        }
      ],
      "range": [
        119,
        174
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
            "name": "k",
            "optional": false,
            "range": [
              186,
              187
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
                190,
                228
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "range": [
                      196,
                      197
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 14
                      },
                      "start": {
                        "column": 14,
                        "line": 14
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        199,
                        201
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 14
                        },
                        "start": {
                          "column": 17,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      198,
                      202
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
                  },
                  "range": [
                    196,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 14
                    },
                    "start": {
                      "column": 14,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "range": [
                      203,
                      204
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 14
                      },
                      "start": {
                        "column": 21,
                        "line": 14
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      205,
                      209
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 14
                      },
                      "start": {
                        "column": 23,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    203,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 14
                    },
                    "start": {
                      "column": 21,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "range": [
                      210,
                      218
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 14
                      },
                      "start": {
                        "column": 28,
                        "line": 14
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"lol\"",
                    "value": "lol",
                    "range": [
                      220,
                      225
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 14
                      },
                      "start": {
                        "column": 38,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    210,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 14
                    },
                    "start": {
                      "column": 28,
                      "line": 14
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  191,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 14
                  },
                  "start": {
                    "column": 9,
                    "line": 14
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 46,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              }
            },
            "range": [
              190,
              228
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 14
              },
              "start": {
                "column": 8,
                "line": 14
              }
            }
          },
          "range": [
            186,
            228
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        182,
        229
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "k1",
            "optional": false,
            "range": [
              234,
              236
            ],
            "loc": {
              "end": {
                "column": 6,
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
            "children": [
              {
                "type": "JSXText",
                "range": [
                  263,
                  286
                ],
                "raw": "\n        hi hi hi!\n    ",
                "value": "\n        hi hi hi!\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 18
                  },
                  "start": {
                    "column": 24,
                    "line": 16
                  }
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  288,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 18
                  },
                  "start": {
                    "column": 6,
                    "line": 18
                  }
                }
              },
              "range": [
                286,
                293
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
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
                    "name": "a",
                    "range": [
                      249,
                      250
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 16
                      },
                      "start": {
                        "column": 10,
                        "line": 16
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        252,
                        254
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 16
                        },
                        "start": {
                          "column": 13,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      251,
                      255
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 16
                      },
                      "start": {
                        "column": 12,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    249,
                    255
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 16
                    },
                    "start": {
                      "column": 10,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "range": [
                      256,
                      257
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 16
                      },
                      "start": {
                        "column": 17,
                        "line": 16
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      258,
                      262
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 16
                      },
                      "start": {
                        "column": 19,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    256,
                    262
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 16
                    },
                    "start": {
                      "column": 17,
                      "line": 16
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  244,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 16
                  },
                  "start": {
                    "column": 5,
                    "line": 16
                  }
                }
              },
              "selfClosing": false,
              "range": [
                243,
                263
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              243,
              293
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "range": [
            234,
            293
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 18
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
        230,
        294
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 18
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
            "name": "k2",
            "optional": false,
            "range": [
              299,
              301
            ],
            "loc": {
              "end": {
                "column": 6,
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
            "children": [
              {
                "type": "JSXText",
                "range": [
                  328,
                  337
                ],
                "raw": "\n        ",
                "value": "\n        ",
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 21
                  },
                  "start": {
                    "column": 24,
                    "line": 20
                  }
                }
              },
              {
                "type": "JSXElement",
                "children": [
                  {
                    "type": "JSXText",
                    "range": [
                      342,
                      351
                    ],
                    "raw": "hi hi hi!",
                    "value": "hi hi hi!",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 21
                      },
                      "start": {
                        "column": 13,
                        "line": 21
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
                      353,
                      356
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 21
                      },
                      "start": {
                        "column": 24,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    351,
                    357
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 21
                    },
                    "start": {
                      "column": 22,
                      "line": 21
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
                      338,
                      341
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 21
                      },
                      "start": {
                        "column": 9,
                        "line": 21
                      }
                    }
                  },
                  "selfClosing": false,
                  "range": [
                    337,
                    342
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                },
                "range": [
                  337,
                  357
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  357,
                  362
                ],
                "raw": "\n    ",
                "value": "\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 22
                  },
                  "start": {
                    "column": 28,
                    "line": 21
                  }
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  364,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 22
                  },
                  "start": {
                    "column": 6,
                    "line": 22
                  }
                }
              },
              "range": [
                362,
                369
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
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
                    "name": "a",
                    "range": [
                      314,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 20
                      },
                      "start": {
                        "column": 10,
                        "line": 20
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        317,
                        319
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 20
                        },
                        "start": {
                          "column": 13,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      316,
                      320
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 20
                      },
                      "start": {
                        "column": 12,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    314,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 20
                    },
                    "start": {
                      "column": 10,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "range": [
                      321,
                      322
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 20
                      },
                      "start": {
                        "column": 17,
                        "line": 20
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      323,
                      327
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 20
                      },
                      "start": {
                        "column": 19,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    321,
                    327
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 20
                    },
                    "start": {
                      "column": 17,
                      "line": 20
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  309,
                  313
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 20
                  },
                  "start": {
                    "column": 5,
                    "line": 20
                  }
                }
              },
              "selfClosing": false,
              "range": [
                308,
                328
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              308,
              369
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "range": [
            299,
            369
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 22
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
        295,
        370
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 12,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
