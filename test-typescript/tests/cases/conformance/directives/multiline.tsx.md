__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    160
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        34
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "texts",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 18,
                    "line": 1
                  }
                },
                "range": [
                  18,
                  28
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      20,
                      26
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 1
                      },
                      "start": {
                        "column": 20,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    20,
                    28
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 1
                    },
                    "start": {
                      "column": 20,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                13,
                28
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                31,
                33
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 31,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              33
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          34
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 34,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "100",
            "value": 100,
            "range": [
              66,
              69
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 11,
                "line": 5
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
            "name": "texts",
            "optional": false,
            "range": [
              55,
              60
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 0,
                "line": 5
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "range": [
              61,
              65
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "range": [
            55,
            65
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "optional": false,
        "range": [
          55,
          70
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        55,
        71
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "100",
            "value": 100,
            "range": [
              109,
              112
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
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "texts",
            "optional": false,
            "range": [
              98,
              103
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 0,
                "line": 9
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "range": [
              104,
              108
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "range": [
            98,
            108
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          98,
          113
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        98,
        114
      ],
      "loc": {
        "end": {
          "column": 16,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"100\"",
            "value": "100",
            "range": [
              152,
              157
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 13
              },
              "start": {
                "column": 11,
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
            "name": "texts",
            "optional": false,
            "range": [
              141,
              146
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 0,
                "line": 13
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "range": [
              147,
              151
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "range": [
            141,
            151
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "optional": false,
        "range": [
          141,
          158
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        141,
        159
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
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
    0,
    566
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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              12,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            7,
            17
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        31
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        33,
        106
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "JSXElement",
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "range": [
                    96,
                    103
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "range": [
                      97,
                      100
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 4
                      },
                      "start": {
                        "column": 10,
                        "line": 4
                      }
                    }
                  },
                  "selfClosing": true,
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
                "range": [
                  96,
                  103
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
              "range": [
                89,
                104
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            }
          ],
          "range": [
            85,
            106
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 52,
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
          "name": "MyComponent",
          "optional": false,
          "range": [
            49,
            60
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
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
                  "column": 50,
                  "line": 3
                },
                "start": {
                  "column": 33,
                  "line": 3
                }
              },
              "range": [
                66,
                83
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        70,
                        73
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 3
                        },
                        "start": {
                          "column": 37,
                          "line": 3
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
                          "column": 48,
                          "line": 3
                        },
                        "start": {
                          "column": 40,
                          "line": 3
                        }
                      },
                      "range": [
                        73,
                        81
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          75,
                          81
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 3
                          },
                          "start": {
                            "column": 42,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      70,
                      81
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 3
                      },
                      "start": {
                        "column": 37,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  68,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 3
                  },
                  "start": {
                    "column": 35,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              61,
              83
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 3
              },
              "start": {
                "column": 28,
                "line": 3
              }
            }
          }
        ],
        "range": [
          40,
          106
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
              112,
              113
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [
              {
                "type": "JSXText",
                "range": [
                  125,
                  130
                ],
                "raw": "\n    ",
                "value": "\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 9
                  },
                  "start": {
                    "column": 7,
                    "line": 8
                  }
                }
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "range": [
                    131,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 10
                    },
                    "start": {
                      "column": 5,
                      "line": 9
                    }
                  }
                },
                "range": [
                  130,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  151,
                  156
                ],
                "raw": "\n    ",
                "value": "\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 11
                  },
                  "start": {
                    "column": 17,
                    "line": 10
                  }
                }
              },
              {
                "type": "JSXElement",
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "range": [
                    156,
                    181
                  ],
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "range": [
                          169,
                          172
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 11
                          },
                          "start": {
                            "column": 17,
                            "line": 11
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
                            174,
                            177
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 11
                            },
                            "start": {
                              "column": 22,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          173,
                          178
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 11
                          },
                          "start": {
                            "column": 21,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        169,
                        178
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 11
                        },
                        "start": {
                          "column": 17,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "range": [
                      157,
                      168
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 11
                      },
                      "start": {
                        "column": 5,
                        "line": 11
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
                    }
                  }
                },
                "range": [
                  156,
                  181
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  181,
                  187
                ],
                "raw": "\n\n    ",
                "value": "\n\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 13
                  },
                  "start": {
                    "column": 29,
                    "line": 11
                  }
                }
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "range": [
                    188,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 5,
                      "line": 13
                    }
                  }
                },
                "range": [
                  187,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  203,
                  208
                ],
                "raw": "\n    ",
                "value": "\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 14
                  },
                  "start": {
                    "column": 20,
                    "line": 13
                  }
                }
              },
              {
                "type": "JSXElement",
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "range": [
                    208,
                    233
                  ],
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "range": [
                          221,
                          224
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 14
                          },
                          "start": {
                            "column": 17,
                            "line": 14
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
                            226,
                            229
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 14
                            },
                            "start": {
                              "column": 22,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          225,
                          230
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 14
                          },
                          "start": {
                            "column": 21,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        221,
                        230
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 14
                        },
                        "start": {
                          "column": 17,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "range": [
                      209,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 14
                      },
                      "start": {
                        "column": 5,
                        "line": 14
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                },
                "range": [
                  208,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  233,
                  239
                ],
                "raw": "\n\n    ",
                "value": "\n\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 16
                  },
                  "start": {
                    "column": 29,
                    "line": 14
                  }
                }
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "range": [
                    240,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 17
                    },
                    "start": {
                      "column": 5,
                      "line": 16
                    }
                  }
                },
                "range": [
                  239,
                  266
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  266,
                  271
                ],
                "raw": "\n    ",
                "value": "\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 18
                  },
                  "start": {
                    "column": 23,
                    "line": 17
                  }
                }
              },
              {
                "type": "JSXElement",
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "range": [
                    271,
                    296
                  ],
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "range": [
                          284,
                          287
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 18
                          },
                          "start": {
                            "column": 17,
                            "line": 18
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
                            289,
                            292
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 18
                            },
                            "start": {
                              "column": 22,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          288,
                          293
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 18
                          },
                          "start": {
                            "column": 21,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        284,
                        293
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 18
                        },
                        "start": {
                          "column": 17,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "range": [
                      272,
                      283
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 18
                      },
                      "start": {
                        "column": 5,
                        "line": 18
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 18
                    },
                    "start": {
                      "column": 4,
                      "line": 18
                    }
                  }
                },
                "range": [
                  271,
                  296
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  296,
                  302
                ],
                "raw": "\n\n    ",
                "value": "\n\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 20
                  },
                  "start": {
                    "column": 29,
                    "line": 18
                  }
                }
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "range": [
                    303,
                    331
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 21
                    },
                    "start": {
                      "column": 5,
                      "line": 20
                    }
                  }
                },
                "range": [
                  302,
                  332
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  332,
                  337
                ],
                "raw": "\n    ",
                "value": "\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 22
                  },
                  "start": {
                    "column": 26,
                    "line": 21
                  }
                }
              },
              {
                "type": "JSXElement",
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "range": [
                    337,
                    362
                  ],
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "range": [
                          350,
                          353
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 22
                          },
                          "start": {
                            "column": 17,
                            "line": 22
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
                            355,
                            358
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 22
                            },
                            "start": {
                              "column": 22,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          354,
                          359
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 22
                          },
                          "start": {
                            "column": 21,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        350,
                        359
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 22
                        },
                        "start": {
                          "column": 17,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "range": [
                      338,
                      349
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 22
                      },
                      "start": {
                        "column": 5,
                        "line": 22
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
                    }
                  }
                },
                "range": [
                  337,
                  362
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  362,
                  368
                ],
                "raw": "\n\n    ",
                "value": "\n\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 24
                  },
                  "start": {
                    "column": 29,
                    "line": 22
                  }
                }
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "range": [
                    369,
                    396
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 25
                    },
                    "start": {
                      "column": 5,
                      "line": 24
                    }
                  }
                },
                "range": [
                  368,
                  397
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 24
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  397,
                  402
                ],
                "raw": "\n    ",
                "value": "\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 26
                  },
                  "start": {
                    "column": 25,
                    "line": 25
                  }
                }
              },
              {
                "type": "JSXElement",
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "range": [
                    402,
                    427
                  ],
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "range": [
                          415,
                          418
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 26
                          },
                          "start": {
                            "column": 17,
                            "line": 26
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
                            420,
                            423
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 26
                            },
                            "start": {
                              "column": 22,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          419,
                          424
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 26
                          },
                          "start": {
                            "column": 21,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        415,
                        424
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 26
                        },
                        "start": {
                          "column": 17,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "range": [
                      403,
                      414
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 26
                      },
                      "start": {
                        "column": 5,
                        "line": 26
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 26
                    },
                    "start": {
                      "column": 4,
                      "line": 26
                    }
                  }
                },
                "range": [
                  402,
                  427
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 26
                  },
                  "start": {
                    "column": 4,
                    "line": 26
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  427,
                  433
                ],
                "raw": "\n\n    ",
                "value": "\n\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 28
                  },
                  "start": {
                    "column": 29,
                    "line": 26
                  }
                }
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "range": [
                    434,
                    454
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 28
                    },
                    "start": {
                      "column": 5,
                      "line": 28
                    }
                  }
                },
                "range": [
                  433,
                  455
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 28
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  455,
                  460
                ],
                "raw": "\n    ",
                "value": "\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 29
                  },
                  "start": {
                    "column": 26,
                    "line": 28
                  }
                }
              },
              {
                "type": "JSXElement",
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "range": [
                    460,
                    485
                  ],
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "range": [
                          473,
                          476
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 29
                          },
                          "start": {
                            "column": 17,
                            "line": 29
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
                            478,
                            481
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 29
                            },
                            "start": {
                              "column": 22,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          477,
                          482
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 29
                          },
                          "start": {
                            "column": 21,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        473,
                        482
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 29
                        },
                        "start": {
                          "column": 17,
                          "line": 29
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "range": [
                      461,
                      472
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 29
                      },
                      "start": {
                        "column": 5,
                        "line": 29
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 29
                    },
                    "start": {
                      "column": 4,
                      "line": 29
                    }
                  }
                },
                "range": [
                  460,
                  485
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 29
                  },
                  "start": {
                    "column": 4,
                    "line": 29
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  485,
                  491
                ],
                "raw": "\n\n    ",
                "value": "\n\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 31
                  },
                  "start": {
                    "column": 29,
                    "line": 29
                  }
                }
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "range": [
                    492,
                    517
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 32
                    },
                    "start": {
                      "column": 5,
                      "line": 31
                    }
                  }
                },
                "range": [
                  491,
                  518
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 32
                  },
                  "start": {
                    "column": 4,
                    "line": 31
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  518,
                  523
                ],
                "raw": "\n    ",
                "value": "\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 33
                  },
                  "start": {
                    "column": 23,
                    "line": 32
                  }
                }
              },
              {
                "type": "JSXElement",
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "range": [
                    523,
                    553
                  ],
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "range": [
                          536,
                          539
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 33
                          },
                          "start": {
                            "column": 17,
                            "line": 33
                          }
                        }
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "raw": "\"hooray\"",
                          "value": "hooray",
                          "range": [
                            541,
                            549
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 33
                            },
                            "start": {
                              "column": 22,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          540,
                          550
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 33
                          },
                          "start": {
                            "column": 21,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        536,
                        550
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 33
                        },
                        "start": {
                          "column": 17,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "range": [
                      524,
                      535
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 33
                      },
                      "start": {
                        "column": 5,
                        "line": 33
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 33
                    },
                    "start": {
                      "column": 4,
                      "line": 33
                    }
                  }
                },
                "range": [
                  523,
                  553
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 33
                  },
                  "start": {
                    "column": 4,
                    "line": 33
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  553,
                  556
                ],
                "raw": "\n  ",
                "value": "\n  ",
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 34
                  },
                  "start": {
                    "column": 34,
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
                  558,
                  561
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 34
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              },
              "range": [
                556,
                562
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 34
                },
                "start": {
                  "column": 2,
                  "line": 34
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
                  121,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 8
                  },
                  "start": {
                    "column": 3,
                    "line": 8
                  }
                }
              },
              "selfClosing": false,
              "range": [
                120,
                125
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
                }
              }
            },
            "range": [
              120,
              562
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 34
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          },
          "range": [
            112,
            564
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        108,
        565
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 36
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
