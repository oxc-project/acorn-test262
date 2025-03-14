__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    880
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
              207,
              208
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
                211,
                233
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "range": [
                      217,
                      218
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
                        220,
                        222
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
                      219,
                      223
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
                    217,
                    223
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
                      224,
                      225
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
                      226,
                      230
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
                    224,
                    230
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
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  212,
                  216
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
                  "column": 30,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              }
            },
            "range": [
              211,
              233
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 14
              },
              "start": {
                "column": 8,
                "line": 14
              }
            }
          },
          "range": [
            207,
            233
          ],
          "loc": {
            "end": {
              "column": 30,
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
        203,
        234
      ],
      "loc": {
        "end": {
          "column": 31,
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
            "name": "k0",
            "optional": false,
            "range": [
              240,
              242
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [
              {
                "type": "JSXText",
                "range": [
                  288,
                  311
                ],
                "raw": "\n        hi hi hi!\n    ",
                "value": "\n        hi hi hi!\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 19
                  },
                  "start": {
                    "column": 43,
                    "line": 17
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
                  313,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 19
                  },
                  "start": {
                    "column": 6,
                    "line": 19
                  }
                }
              },
              "range": [
                311,
                318
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
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
                      255,
                      256
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 17
                      },
                      "start": {
                        "column": 10,
                        "line": 17
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
                        258,
                        260
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 17
                        },
                        "start": {
                          "column": 13,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      257,
                      261
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 17
                      },
                      "start": {
                        "column": 12,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    255,
                    261
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 17
                    },
                    "start": {
                      "column": 10,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "range": [
                      262,
                      263
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 17
                      },
                      "start": {
                        "column": 17,
                        "line": 17
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      264,
                      268
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 17
                      },
                      "start": {
                        "column": 19,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    262,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 17
                    },
                    "start": {
                      "column": 17,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "range": [
                      269,
                      277
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 17
                      },
                      "start": {
                        "column": 24,
                        "line": 17
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"Random\"",
                    "value": "Random",
                    "range": [
                      278,
                      286
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 17
                      },
                      "start": {
                        "column": 33,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    269,
                    286
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 17
                    },
                    "start": {
                      "column": 24,
                      "line": 17
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  250,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 17
                  },
                  "start": {
                    "column": 5,
                    "line": 17
                  }
                }
              },
              "selfClosing": false,
              "range": [
                249,
                288
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              249,
              318
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "range": [
            240,
            318
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        236,
        319
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "o",
            "optional": false,
            "range": [
              325,
              326
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "range": [
                    336,
                    344
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 22
                    },
                    "start": {
                      "column": 5,
                      "line": 22
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"Random\"",
                  "value": "Random",
                  "range": [
                    345,
                    353
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 22
                    },
                    "start": {
                      "column": 14,
                      "line": 22
                    }
                  }
                },
                "range": [
                  336,
                  353
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 22
                  },
                  "start": {
                    "column": 5,
                    "line": 22
                  }
                }
              }
            ],
            "range": [
              329,
              355
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 23
              },
              "start": {
                "column": 8,
                "line": 21
              }
            }
          },
          "range": [
            325,
            355
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        321,
        355
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 21
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
              360,
              362
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [
              {
                "type": "JSXText",
                "range": [
                  397,
                  420
                ],
                "raw": "\n        hi hi hi!\n    ",
                "value": "\n        hi hi hi!\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 27
                  },
                  "start": {
                    "column": 32,
                    "line": 25
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
                  422,
                  426
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 27
                  },
                  "start": {
                    "column": 6,
                    "line": 27
                  }
                }
              },
              "range": [
                420,
                427
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
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
                      375,
                      376
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 25
                      },
                      "start": {
                        "column": 10,
                        "line": 25
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
                        378,
                        380
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 25
                        },
                        "start": {
                          "column": 13,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      377,
                      381
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 25
                      },
                      "start": {
                        "column": 12,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    375,
                    381
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 25
                    },
                    "start": {
                      "column": 10,
                      "line": 25
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "range": [
                      382,
                      383
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 25
                      },
                      "start": {
                        "column": 17,
                        "line": 25
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      384,
                      388
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 25
                      },
                      "start": {
                        "column": 19,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    382,
                    388
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 25
                    },
                    "start": {
                      "column": 17,
                      "line": 25
                    }
                  }
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "range": [
                      393,
                      394
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 25
                      },
                      "start": {
                        "column": 28,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    389,
                    395
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 25
                    },
                    "start": {
                      "column": 24,
                      "line": 25
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  370,
                  374
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 25
                  },
                  "start": {
                    "column": 5,
                    "line": 25
                  }
                }
              },
              "selfClosing": false,
              "range": [
                369,
                397
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "range": [
              369,
              427
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "range": [
            360,
            427
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        356,
        428
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 24
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
              459,
              461
            ],
            "loc": {
              "end": {
                "column": 6,
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
            "children": [
              {
                "type": "JSXText",
                "range": [
                  488,
                  497
                ],
                "raw": "\n        ",
                "value": "\n        ",
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 32
                  },
                  "start": {
                    "column": 24,
                    "line": 31
                  }
                }
              },
              {
                "type": "JSXElement",
                "children": [
                  {
                    "type": "JSXText",
                    "range": [
                      502,
                      510
                    ],
                    "raw": " My Div ",
                    "value": " My Div ",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 32
                      },
                      "start": {
                        "column": 13,
                        "line": 32
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
                      512,
                      515
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 32
                      },
                      "start": {
                        "column": 23,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    510,
                    516
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 32
                    },
                    "start": {
                      "column": 21,
                      "line": 32
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
                      498,
                      501
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 32
                      },
                      "start": {
                        "column": 9,
                        "line": 32
                      }
                    }
                  },
                  "selfClosing": false,
                  "range": [
                    497,
                    502
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                },
                "range": [
                  497,
                  516
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  516,
                  525
                ],
                "raw": "\n        ",
                "value": "\n        ",
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 33
                  },
                  "start": {
                    "column": 27,
                    "line": 32
                  }
                }
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "JSXElement",
                    "children": [
                      {
                        "type": "JSXText",
                        "range": [
                          549,
                          558
                        ],
                        "raw": " My name ",
                        "value": " My name ",
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 33
                          },
                          "start": {
                            "column": 32,
                            "line": 33
                          }
                        }
                      },
                      {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "range": [
                            559,
                            563
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 33
                            },
                            "start": {
                              "column": 42,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          558,
                          564
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 33
                          },
                          "start": {
                            "column": 41,
                            "line": 33
                          }
                        }
                      },
                      {
                        "type": "JSXText",
                        "range": [
                          564,
                          565
                        ],
                        "raw": " ",
                        "value": " ",
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 33
                          },
                          "start": {
                            "column": 47,
                            "line": 33
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
                          567,
                          570
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 33
                          },
                          "start": {
                            "column": 50,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        565,
                        571
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 33
                        },
                        "start": {
                          "column": 48,
                          "line": 33
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
                          545,
                          548
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 33
                          },
                          "start": {
                            "column": 28,
                            "line": 33
                          }
                        }
                      },
                      "selfClosing": false,
                      "range": [
                        544,
                        549
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 33
                        },
                        "start": {
                          "column": 27,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      544,
                      571
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 33
                      },
                      "start": {
                        "column": 27,
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 33
                          },
                          "start": {
                            "column": 14,
                            "line": 33
                          }
                        },
                        "range": [
                          531,
                          539
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            533,
                            539
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 33
                            },
                            "start": {
                              "column": 16,
                              "line": 33
                            }
                          }
                        }
                      },
                      "range": [
                        527,
                        539
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 33
                        },
                        "start": {
                          "column": 10,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "range": [
                    526,
                    571
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 33
                    },
                    "start": {
                      "column": 9,
                      "line": 33
                    }
                  }
                },
                "range": [
                  525,
                  572
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 33
                  },
                  "start": {
                    "column": 8,
                    "line": 33
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  572,
                  577
                ],
                "raw": "\n    ",
                "value": "\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 34
                  },
                  "start": {
                    "column": 55,
                    "line": 33
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
                  579,
                  583
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 34
                  },
                  "start": {
                    "column": 6,
                    "line": 34
                  }
                }
              },
              "range": [
                577,
                584
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
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
                      474,
                      475
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
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        477,
                        479
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 31
                        },
                        "start": {
                          "column": 13,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      476,
                      480
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 31
                      },
                      "start": {
                        "column": 12,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    474,
                    480
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 31
                    },
                    "start": {
                      "column": 10,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "range": [
                      481,
                      482
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 31
                      },
                      "start": {
                        "column": 17,
                        "line": 31
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      483,
                      487
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 31
                      },
                      "start": {
                        "column": 19,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    481,
                    487
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 31
                    },
                    "start": {
                      "column": 17,
                      "line": 31
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  469,
                  473
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 31
                  },
                  "start": {
                    "column": 5,
                    "line": 31
                  }
                }
              },
              "selfClosing": false,
              "range": [
                468,
                488
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            "range": [
              468,
              584
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          "range": [
            459,
            584
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 34
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
        455,
        585
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 34
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
            "name": "k3",
            "optional": false,
            "range": [
              591,
              593
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [
              {
                "type": "JSXText",
                "range": [
                  620,
                  629
                ],
                "raw": "\n        ",
                "value": "\n        ",
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 38
                  },
                  "start": {
                    "column": 24,
                    "line": 37
                  }
                }
              },
              {
                "type": "JSXElement",
                "children": [
                  {
                    "type": "JSXText",
                    "range": [
                      634,
                      642
                    ],
                    "raw": " My Div ",
                    "value": " My Div ",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 38
                      },
                      "start": {
                        "column": 13,
                        "line": 38
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
                      644,
                      647
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 38
                      },
                      "start": {
                        "column": 23,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    642,
                    648
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 38
                    },
                    "start": {
                      "column": 21,
                      "line": 38
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
                      630,
                      633
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 38
                      },
                      "start": {
                        "column": 9,
                        "line": 38
                      }
                    }
                  },
                  "selfClosing": false,
                  "range": [
                    629,
                    634
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                },
                "range": [
                  629,
                  648
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 38
                  },
                  "start": {
                    "column": 8,
                    "line": 38
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  648,
                  657
                ],
                "raw": "\n        ",
                "value": "\n        ",
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 39
                  },
                  "start": {
                    "column": 27,
                    "line": 38
                  }
                }
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "raw": "1000000",
                  "value": 1000000,
                  "range": [
                    658,
                    665
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 39
                    },
                    "start": {
                      "column": 9,
                      "line": 39
                    }
                  }
                },
                "range": [
                  657,
                  666
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 39
                  },
                  "start": {
                    "column": 8,
                    "line": 39
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  666,
                  671
                ],
                "raw": "\n    ",
                "value": "\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 40
                  },
                  "start": {
                    "column": 17,
                    "line": 39
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
                  673,
                  677
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 40
                  },
                  "start": {
                    "column": 6,
                    "line": 40
                  }
                }
              },
              "range": [
                671,
                678
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
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
                      606,
                      607
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 37
                      },
                      "start": {
                        "column": 10,
                        "line": 37
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
                        609,
                        611
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 37
                        },
                        "start": {
                          "column": 13,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      608,
                      612
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 37
                      },
                      "start": {
                        "column": 12,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    606,
                    612
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 37
                    },
                    "start": {
                      "column": 10,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "range": [
                      613,
                      614
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 37
                      },
                      "start": {
                        "column": 17,
                        "line": 37
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      615,
                      619
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 37
                      },
                      "start": {
                        "column": 19,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    613,
                    619
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 37
                    },
                    "start": {
                      "column": 17,
                      "line": 37
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  601,
                  605
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 37
                  },
                  "start": {
                    "column": 5,
                    "line": 37
                  }
                }
              },
              "selfClosing": false,
              "range": [
                600,
                620
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            },
            "range": [
              600,
              678
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          "range": [
            591,
            678
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 40
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        587,
        679
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 36
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
            "name": "k4",
            "optional": false,
            "range": [
              685,
              687
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [
              {
                "type": "JSXText",
                "range": [
                  715,
                  724
                ],
                "raw": "\n        ",
                "value": "\n        ",
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 44
                  },
                  "start": {
                    "column": 25,
                    "line": 43
                  }
                }
              },
              {
                "type": "JSXElement",
                "children": [
                  {
                    "type": "JSXText",
                    "range": [
                      729,
                      737
                    ],
                    "raw": " My Div ",
                    "value": " My Div ",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 44
                      },
                      "start": {
                        "column": 13,
                        "line": 44
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
                      739,
                      742
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 44
                      },
                      "start": {
                        "column": 23,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    737,
                    743
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 44
                    },
                    "start": {
                      "column": 21,
                      "line": 44
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
                      725,
                      728
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 44
                      },
                      "start": {
                        "column": 9,
                        "line": 44
                      }
                    }
                  },
                  "selfClosing": false,
                  "range": [
                    724,
                    729
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
                    }
                  }
                },
                "range": [
                  724,
                  743
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 44
                  },
                  "start": {
                    "column": 8,
                    "line": 44
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  743,
                  766
                ],
                "raw": "\n        hi hi hi!\n    ",
                "value": "\n        hi hi hi!\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 46
                  },
                  "start": {
                    "column": 27,
                    "line": 44
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
                  768,
                  772
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 46
                  },
                  "start": {
                    "column": 6,
                    "line": 46
                  }
                }
              },
              "range": [
                766,
                773
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
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
                      700,
                      701
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 43
                      },
                      "start": {
                        "column": 10,
                        "line": 43
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
                        703,
                        705
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 43
                        },
                        "start": {
                          "column": 13,
                          "line": 43
                        }
                      }
                    },
                    "range": [
                      702,
                      706
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 43
                      },
                      "start": {
                        "column": 12,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    700,
                    706
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 43
                    },
                    "start": {
                      "column": 10,
                      "line": 43
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "range": [
                      707,
                      708
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 43
                      },
                      "start": {
                        "column": 17,
                        "line": 43
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      709,
                      713
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 43
                      },
                      "start": {
                        "column": 19,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    707,
                    713
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 43
                    },
                    "start": {
                      "column": 17,
                      "line": 43
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  695,
                  699
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 43
                  },
                  "start": {
                    "column": 5,
                    "line": 43
                  }
                }
              },
              "selfClosing": false,
              "range": [
                694,
                715
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 43
                }
              }
            },
            "range": [
              694,
              773
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          "range": [
            685,
            773
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 46
            },
            "start": {
              "column": 4,
              "line": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        681,
        774
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 42
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
            "name": "k5",
            "optional": false,
            "range": [
              780,
              782
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [
              {
                "type": "JSXText",
                "range": [
                  810,
                  819
                ],
                "raw": "\n        ",
                "value": "\n        ",
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 50
                  },
                  "start": {
                    "column": 25,
                    "line": 49
                  }
                }
              },
              {
                "type": "JSXElement",
                "children": [
                  {
                    "type": "JSXText",
                    "range": [
                      824,
                      832
                    ],
                    "raw": " My Div ",
                    "value": " My Div ",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 50
                      },
                      "start": {
                        "column": 13,
                        "line": 50
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
                      834,
                      837
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 50
                      },
                      "start": {
                        "column": 23,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    832,
                    838
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 50
                    },
                    "start": {
                      "column": 21,
                      "line": 50
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
                      820,
                      823
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 50
                      },
                      "start": {
                        "column": 9,
                        "line": 50
                      }
                    }
                  },
                  "selfClosing": false,
                  "range": [
                    819,
                    824
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 50
                    },
                    "start": {
                      "column": 8,
                      "line": 50
                    }
                  }
                },
                "range": [
                  819,
                  838
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 50
                  },
                  "start": {
                    "column": 8,
                    "line": 50
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  838,
                  847
                ],
                "raw": "\n        ",
                "value": "\n        ",
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 51
                  },
                  "start": {
                    "column": 27,
                    "line": 50
                  }
                }
              },
              {
                "type": "JSXElement",
                "children": [
                  {
                    "type": "JSXText",
                    "range": [
                      852,
                      860
                    ],
                    "raw": " My Div ",
                    "value": " My Div ",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 51
                      },
                      "start": {
                        "column": 13,
                        "line": 51
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
                      862,
                      865
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 51
                      },
                      "start": {
                        "column": 23,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    860,
                    866
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 51
                    },
                    "start": {
                      "column": 21,
                      "line": 51
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
                      848,
                      851
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 51
                      },
                      "start": {
                        "column": 9,
                        "line": 51
                      }
                    }
                  },
                  "selfClosing": false,
                  "range": [
                    847,
                    852
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 51
                    },
                    "start": {
                      "column": 8,
                      "line": 51
                    }
                  }
                },
                "range": [
                  847,
                  866
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 51
                  },
                  "start": {
                    "column": 8,
                    "line": 51
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  866,
                  871
                ],
                "raw": "\n    ",
                "value": "\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 52
                  },
                  "start": {
                    "column": 27,
                    "line": 51
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
                  873,
                  877
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 52
                  },
                  "start": {
                    "column": 6,
                    "line": 52
                  }
                }
              },
              "range": [
                871,
                878
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 52
                },
                "start": {
                  "column": 4,
                  "line": 52
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
                      795,
                      796
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 49
                      },
                      "start": {
                        "column": 10,
                        "line": 49
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
                        798,
                        800
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 49
                        },
                        "start": {
                          "column": 13,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      797,
                      801
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 49
                      },
                      "start": {
                        "column": 12,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    795,
                    801
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 49
                    },
                    "start": {
                      "column": 10,
                      "line": 49
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "range": [
                      802,
                      803
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 49
                      },
                      "start": {
                        "column": 17,
                        "line": 49
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      804,
                      808
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 49
                      },
                      "start": {
                        "column": 19,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    802,
                    808
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 49
                    },
                    "start": {
                      "column": 17,
                      "line": 49
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  790,
                  794
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 49
                  },
                  "start": {
                    "column": 5,
                    "line": 49
                  }
                }
              },
              "selfClosing": false,
              "range": [
                789,
                810
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
                }
              }
            },
            "range": [
              789,
              878
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          "range": [
            780,
            878
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 52
            },
            "start": {
              "column": 4,
              "line": 48
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        776,
        879
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 53
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
