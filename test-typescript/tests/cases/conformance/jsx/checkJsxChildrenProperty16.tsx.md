__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    67,
    551
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
          74,
          79
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
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
            90,
            97
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 5
            },
            "start": {
              "column": 23,
              "line": 5
            }
          }
        },
        "range": [
          82,
          98
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "range": [
        67,
        99
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        101,
        260
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Props",
          "optional": false,
          "range": [
            113,
            118
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 7
            },
            "start": {
              "column": 12,
              "line": 7
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "renderNumber",
                    "optional": false,
                    "range": [
                      127,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 8
                      },
                      "start": {
                        "column": 6,
                        "line": 8
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
                        "column": 26,
                        "line": 8
                      },
                      "start": {
                        "column": 19,
                        "line": 8
                      }
                    },
                    "range": [
                      140,
                      147
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "false",
                        "value": false,
                        "range": [
                          142,
                          147
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 8
                          },
                          "start": {
                            "column": 21,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        142,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 8
                        },
                        "start": {
                          "column": 21,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    127,
                    148
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 8
                    },
                    "start": {
                      "column": 6,
                      "line": 8
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
                      149,
                      157
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 8
                      },
                      "start": {
                        "column": 28,
                        "line": 8
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
                        "column": 59,
                        "line": 8
                      },
                      "start": {
                        "column": 36,
                        "line": 8
                      }
                    },
                    "range": [
                      157,
                      180
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 8
                              },
                              "start": {
                                "column": 42,
                                "line": 8
                              }
                            },
                            "range": [
                              163,
                              171
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                165,
                                171
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 8
                                },
                                "start": {
                                  "column": 44,
                                  "line": 8
                                }
                              }
                            }
                          },
                          "range": [
                            160,
                            171
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 8
                            },
                            "start": {
                              "column": 39,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 8
                          },
                          "start": {
                            "column": 52,
                            "line": 8
                          }
                        },
                        "range": [
                          173,
                          180
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            176,
                            180
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 8
                            },
                            "start": {
                              "column": 55,
                              "line": 8
                            }
                          }
                        }
                      },
                      "range": [
                        159,
                        180
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 8
                        },
                        "start": {
                          "column": 38,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    149,
                    180
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 8
                    },
                    "start": {
                      "column": 28,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                125,
                182
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "renderNumber",
                    "optional": false,
                    "range": [
                      195,
                      207
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 10
                      },
                      "start": {
                        "column": 6,
                        "line": 10
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
                        "column": 24,
                        "line": 10
                      },
                      "start": {
                        "column": 18,
                        "line": 10
                      }
                    },
                    "range": [
                      207,
                      213
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          209,
                          213
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 10
                          },
                          "start": {
                            "column": 20,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        209,
                        213
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 10
                        },
                        "start": {
                          "column": 20,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    195,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 10
                    },
                    "start": {
                      "column": 6,
                      "line": 10
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
                      221,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 11
                      },
                      "start": {
                        "column": 6,
                        "line": 11
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
                        "column": 37,
                        "line": 11
                      },
                      "start": {
                        "column": 14,
                        "line": 11
                      }
                    },
                    "range": [
                      229,
                      252
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 11
                              },
                              "start": {
                                "column": 20,
                                "line": 11
                              }
                            },
                            "range": [
                              235,
                              243
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                237,
                                243
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 11
                                },
                                "start": {
                                  "column": 22,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            232,
                            243
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 11
                            },
                            "start": {
                              "column": 17,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 11
                          },
                          "start": {
                            "column": 30,
                            "line": 11
                          }
                        },
                        "range": [
                          245,
                          252
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            248,
                            252
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 11
                            },
                            "start": {
                              "column": 33,
                              "line": 11
                            }
                          }
                        }
                      },
                      "range": [
                        231,
                        252
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 11
                        },
                        "start": {
                          "column": 16,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    221,
                    253
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 11
                    },
                    "start": {
                      "column": 6,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                187,
                259
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            }
          ],
          "range": [
            123,
            259
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 12
            },
            "start": {
              "column": 2,
              "line": 8
            }
          }
        },
        "range": [
          108,
          260
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 12
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 6,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        262,
        317
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "range": [
            286,
            289
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 14
            },
            "start": {
              "column": 24,
              "line": 14
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
                  "column": 40,
                  "line": 14
                },
                "start": {
                  "column": 33,
                  "line": 14
                }
              },
              "range": [
                295,
                302
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "range": [
                    297,
                    302
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 14
                    },
                    "start": {
                      "column": 35,
                      "line": 14
                    }
                  }
                },
                "range": [
                  297,
                  302
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 14
                  },
                  "start": {
                    "column": 35,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              290,
              302
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 14
              },
              "start": {
                "column": 28,
                "line": 14
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 54,
              "line": 14
            },
            "start": {
              "column": 41,
              "line": 14
            }
          },
          "range": [
            303,
            316
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "range": [
                  305,
                  308
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 14
                  },
                  "start": {
                    "column": 43,
                    "line": 14
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "range": [
                  309,
                  316
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 14
                  },
                  "start": {
                    "column": 47,
                    "line": 14
                  }
                }
              },
              "range": [
                305,
                316
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 14
                },
                "start": {
                  "column": 43,
                  "line": 14
                }
              }
            },
            "range": [
              305,
              316
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 14
              },
              "start": {
                "column": 43,
                "line": 14
              }
            }
          }
        },
        "range": [
          269,
          317
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 14
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 55,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        319,
        551
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
              "name": "Test",
              "optional": false,
              "range": [
                332,
                336
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 16
                },
                "start": {
                  "column": 13,
                  "line": 16
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXFragment",
                      "children": [
                        {
                          "type": "JSXText",
                          "range": [
                            364,
                            371
                          ],
                          "raw": "\n      ",
                          "value": "\n      ",
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 19
                            },
                            "start": {
                              "column": 6,
                              "line": 18
                            }
                          }
                        },
                        {
                          "type": "JSXElement",
                          "children": [
                            {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "ArrowFunctionExpression",
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [],
                                  "range": [
                                    388,
                                    390
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 19
                                    }
                                  }
                                },
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "range": [
                                      378,
                                      383
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 19
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  377,
                                  390
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                376,
                                391
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 19
                                },
                                "start": {
                                  "column": 11,
                                  "line": 19
                                }
                              }
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Foo",
                              "range": [
                                393,
                                396
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 19
                                },
                                "start": {
                                  "column": 28,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              391,
                              397
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 19
                              },
                              "start": {
                                "column": 26,
                                "line": 19
                              }
                            }
                          },
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "attributes": [],
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Foo",
                              "range": [
                                372,
                                375
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 19
                                },
                                "start": {
                                  "column": 7,
                                  "line": 19
                                }
                              }
                            },
                            "selfClosing": false,
                            "range": [
                              371,
                              376
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 19
                              },
                              "start": {
                                "column": 6,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            371,
                            397
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 19
                            },
                            "start": {
                              "column": 6,
                              "line": 19
                            }
                          }
                        },
                        {
                          "type": "JSXText",
                          "range": [
                            397,
                            404
                          ],
                          "raw": "\n      ",
                          "value": "\n      ",
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 20
                            },
                            "start": {
                              "column": 32,
                              "line": 19
                            }
                          }
                        },
                        {
                          "type": "JSXElement",
                          "children": [
                            {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "ArrowFunctionExpression",
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [],
                                  "range": [
                                    434,
                                    436
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 20
                                    }
                                  }
                                },
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "range": [
                                      424,
                                      429
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 31,
                                        "line": 20
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 20
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  423,
                                  436
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 20
                                  }
                                }
                              },
                              "range": [
                                422,
                                437
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 20
                                },
                                "start": {
                                  "column": 24,
                                  "line": 20
                                }
                              }
                            }
                          ],
                          "closingElement": {
                            "type": "JSXClosingElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Foo",
                              "range": [
                                439,
                                442
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 20
                                },
                                "start": {
                                  "column": 41,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              437,
                              443
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 20
                              },
                              "start": {
                                "column": 39,
                                "line": 20
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
                                  "name": "renderNumber",
                                  "range": [
                                    409,
                                    421
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 11,
                                      "line": 20
                                    }
                                  }
                                },
                                "value": null,
                                "range": [
                                  409,
                                  421
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 20
                                  }
                                }
                              }
                            ],
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Foo",
                              "range": [
                                405,
                                408
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 20
                                },
                                "start": {
                                  "column": 7,
                                  "line": 20
                                }
                              }
                            },
                            "selfClosing": false,
                            "range": [
                              404,
                              422
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 20
                              },
                              "start": {
                                "column": 6,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            404,
                            443
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 20
                            },
                            "start": {
                              "column": 6,
                              "line": 20
                            }
                          }
                        },
                        {
                          "type": "JSXText",
                          "range": [
                            443,
                            451
                          ],
                          "raw": "\n\n      ",
                          "value": "\n\n      ",
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 22
                            },
                            "start": {
                              "column": 45,
                              "line": 20
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
                              451,
                              483
                            ],
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "children",
                                  "range": [
                                    456,
                                    464
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 11,
                                      "line": 22
                                    }
                                  }
                                },
                                "value": {
                                  "type": "JSXExpressionContainer",
                                  "expression": {
                                    "type": "ArrowFunctionExpression",
                                    "async": false,
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [],
                                      "range": [
                                        477,
                                        479
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 34,
                                          "line": 22
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 22
                                        }
                                      }
                                    },
                                    "expression": false,
                                    "generator": false,
                                    "id": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "range": [
                                          467,
                                          472
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 27,
                                            "line": 22
                                          },
                                          "start": {
                                            "column": 22,
                                            "line": 22
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      466,
                                      479
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 22
                                      }
                                    }
                                  },
                                  "range": [
                                    465,
                                    480
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 22
                                    }
                                  }
                                },
                                "range": [
                                  456,
                                  480
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 22
                                  }
                                }
                              }
                            ],
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Foo",
                              "range": [
                                452,
                                455
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 22
                                },
                                "start": {
                                  "column": 7,
                                  "line": 22
                                }
                              }
                            },
                            "selfClosing": true,
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 22
                              },
                              "start": {
                                "column": 6,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            451,
                            483
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 22
                            },
                            "start": {
                              "column": 6,
                              "line": 22
                            }
                          }
                        },
                        {
                          "type": "JSXText",
                          "range": [
                            483,
                            490
                          ],
                          "raw": "\n      ",
                          "value": "\n      ",
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 23
                            },
                            "start": {
                              "column": 38,
                              "line": 22
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
                              490,
                              535
                            ],
                            "attributes": [
                              {
                                "type": "JSXAttribute",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "renderNumber",
                                  "range": [
                                    495,
                                    507
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 11,
                                      "line": 23
                                    }
                                  }
                                },
                                "value": null,
                                "range": [
                                  495,
                                  507
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 23
                                  }
                                }
                              },
                              {
                                "type": "JSXAttribute",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "children",
                                  "range": [
                                    508,
                                    516
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 24,
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
                                      "type": "BlockStatement",
                                      "body": [],
                                      "range": [
                                        529,
                                        531
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 47,
                                          "line": 23
                                        },
                                        "start": {
                                          "column": 45,
                                          "line": 23
                                        }
                                      }
                                    },
                                    "expression": false,
                                    "generator": false,
                                    "id": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "range": [
                                          519,
                                          524
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 40,
                                            "line": 23
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 23
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      518,
                                      531
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 47,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 34,
                                        "line": 23
                                      }
                                    }
                                  },
                                  "range": [
                                    517,
                                    532
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 23
                                    }
                                  }
                                },
                                "range": [
                                  508,
                                  532
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 23
                                  }
                                }
                              }
                            ],
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Foo",
                              "range": [
                                491,
                                494
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 23
                                },
                                "start": {
                                  "column": 7,
                                  "line": 23
                                }
                              }
                            },
                            "selfClosing": true,
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 23
                              },
                              "start": {
                                "column": 6,
                                "line": 23
                              }
                            }
                          },
                          "range": [
                            490,
                            535
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 23
                            },
                            "start": {
                              "column": 6,
                              "line": 23
                            }
                          }
                        },
                        {
                          "type": "JSXText",
                          "range": [
                            535,
                            540
                          ],
                          "raw": "\n    ",
                          "value": "\n    ",
                          "loc": {
                            "end": {
                              "column": 4,
                              "line": 24
                            },
                            "start": {
                              "column": 51,
                              "line": 23
                            }
                          }
                        }
                      ],
                      "closingFragment": {
                        "type": "JSXClosingFragment",
                        "range": [
                          540,
                          543
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 24
                          },
                          "start": {
                            "column": 4,
                            "line": 24
                          }
                        }
                      },
                      "openingFragment": {
                        "type": "JSXOpeningFragment",
                        "range": [
                          362,
                          364
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 18
                          },
                          "start": {
                            "column": 4,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        362,
                        543
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 24
                        },
                        "start": {
                          "column": 4,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      349,
                      548
                    ],
                    "loc": {
                      "end": {
                        "column": 4,
                        "line": 25
                      },
                      "start": {
                        "column": 2,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  345,
                  550
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 26
                  },
                  "start": {
                    "column": 26,
                    "line": 16
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                339,
                550
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 26
                },
                "start": {
                  "column": 20,
                  "line": 16
                }
              }
            },
            "range": [
              332,
              550
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 26
              },
              "start": {
                "column": 13,
                "line": 16
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          326,
          551
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 26
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 2,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 5
    }
  },
  "hashbang": null
}
```
