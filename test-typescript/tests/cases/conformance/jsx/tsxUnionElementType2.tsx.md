__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    25,
    245
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
          32,
          37
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
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
            48,
            55
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 3
            },
            "start": {
              "column": 23,
              "line": 3
            }
          }
        },
        "range": [
          40,
          56
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "range": [
        25,
        57
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 3
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
                  "type": "JSXText",
                  "range": [
                    112,
                    117
                  ],
                  "raw": "hello",
                  "value": "hello",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
                      "line": 6
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
                    119,
                    122
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
                "range": [
                  117,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 6
                  },
                  "start": {
                    "column": 21,
                    "line": 6
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
                    108,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
                    }
                  }
                },
                "selfClosing": false,
                "range": [
                  107,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              },
              "range": [
                107,
                123
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "range": [
              100,
              124
            ],
            "loc": {
              "end": {
                "column": 28,
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
          94,
          126
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 35,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SFC1",
        "optional": false,
        "range": [
          68,
          72
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 5
              },
              "start": {
                "column": 18,
                "line": 5
              }
            },
            "range": [
              77,
              92
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      81,
                      82
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 5
                      },
                      "start": {
                        "column": 22,
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
                        "column": 31,
                        "line": 5
                      },
                      "start": {
                        "column": 23,
                        "line": 5
                      }
                    },
                    "range": [
                      82,
                      90
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        84,
                        90
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 5
                        },
                        "start": {
                          "column": 25,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    81,
                    90
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 5
                    },
                    "start": {
                      "column": 22,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                79,
                92
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              }
            }
          },
          "range": [
            73,
            92
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 5
            },
            "start": {
              "column": 14,
              "line": 5
            }
          }
        }
      ],
      "range": [
        59,
        126
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        126,
        127
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 7
        },
        "start": {
          "column": 1,
          "line": 7
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
                    182,
                    188
                  ],
                  "raw": "World ",
                  "value": "World ",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 10
                    },
                    "start": {
                      "column": 15,
                      "line": 10
                    }
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "h1",
                  "range": [
                    190,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 10
                    },
                    "start": {
                      "column": 23,
                      "line": 10
                    }
                  }
                },
                "range": [
                  188,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 26,
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
                  "name": "h1",
                  "range": [
                    179,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
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
                  178,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              },
              "range": [
                178,
                193
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              171,
              194
            ],
            "loc": {
              "end": {
                "column": 27,
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
          165,
          196
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 36,
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
        "name": "SFC2",
        "optional": false,
        "range": [
          138,
          142
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
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 9
              },
              "start": {
                "column": 18,
                "line": 9
              }
            },
            "range": [
              147,
              163
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      151,
                      152
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 9
                      },
                      "start": {
                        "column": 22,
                        "line": 9
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
                        "column": 32,
                        "line": 9
                      },
                      "start": {
                        "column": 23,
                        "line": 9
                      }
                    },
                    "range": [
                      152,
                      161
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        154,
                        161
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 9
                        },
                        "start": {
                          "column": 25,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    151,
                    161
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 9
                    },
                    "start": {
                      "column": 22,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                149,
                163
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 9
                },
                "start": {
                  "column": 20,
                  "line": 9
                }
              }
            }
          },
          "range": [
            143,
            163
          ],
          "loc": {
            "end": {
              "column": 34,
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
        129,
        196
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
            "name": "SFCComp",
            "optional": false,
            "range": [
              202,
              209
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "SFC1",
              "optional": false,
              "range": [
                212,
                216
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 13
                },
                "start": {
                  "column": 14,
                  "line": 13
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "SFC2",
              "optional": false,
              "range": [
                220,
                224
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 13
                },
                "start": {
                  "column": 22,
                  "line": 13
                }
              }
            },
            "range": [
              212,
              224
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 13
              },
              "start": {
                "column": 14,
                "line": 13
              }
            }
          },
          "range": [
            202,
            224
          ],
          "loc": {
            "end": {
              "column": 26,
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
      "kind": "var",
      "range": [
        198,
        225
      ],
      "loc": {
        "end": {
          "column": 27,
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
            226,
            245
          ],
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "range": [
                  235,
                  236
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 14
                  },
                  "start": {
                    "column": 9,
                    "line": 14
                  }
                }
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "raw": "\"hi\"",
                  "value": "hi",
                  "range": [
                    238,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 14
                    },
                    "start": {
                      "column": 12,
                      "line": 14
                    }
                  }
                },
                "range": [
                  237,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              },
              "range": [
                235,
                243
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 14
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "SFCComp",
            "range": [
              227,
              234
            ],
            "loc": {
              "end": {
                "column": 8,
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
              "column": 19,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "range": [
          226,
          245
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        226,
        245
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 19,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
