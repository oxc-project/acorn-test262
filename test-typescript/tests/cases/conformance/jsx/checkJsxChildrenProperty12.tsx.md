__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    552
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
          55,
          110
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
                61,
                62
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
                62,
                70
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  64,
                  70
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
              61,
              71
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
                76,
                77
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
                77,
                85
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  79,
                  85
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
              76,
              86
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
                91,
                99
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
                  "column": 20,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              },
              "range": [
                99,
                107
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Button",
                  "optional": false,
                  "range": [
                    101,
                    107
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
                "range": [
                  101,
                  107
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
              }
            },
            "range": [
              91,
              108
            ],
            "loc": {
              "end": {
                "column": 21,
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
            "column": 21,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ButtonProp",
        "optional": false,
        "range": [
          44,
          54
        ],
        "loc": {
          "end": {
            "column": 20,
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
        110
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          166,
          390
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
                  "column": 10,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
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
                388
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
                          "name": "condition",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 11
                              },
                              "start": {
                                "column": 15,
                                "line": 11
                              }
                            },
                            "range": [
                              198,
                              207
                            ],
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "range": [
                                200,
                                207
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 11
                                },
                                "start": {
                                  "column": 17,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            189,
                            207
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 11
                            },
                            "start": {
                              "column": 6,
                              "line": 11
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          189,
                          207
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 11
                          },
                          "start": {
                            "column": 6,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      185,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 2,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "alternate": {
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
                                  330,
                                  335
                                ],
                                "raw": "\n\t\t\t\t",
                                "value": "\n\t\t\t\t",
                                "loc": {
                                  "end": {
                                    "column": 4,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 16
                                  }
                                }
                              },
                              {
                                "type": "JSXElement",
                                "children": [
                                  {
                                    "type": "JSXText",
                                    "range": [
                                      340,
                                      351
                                    ],
                                    "raw": "Hello World",
                                    "value": "Hello World",
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 9,
                                        "line": 17
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
                                        "column": 25,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 17
                                      }
                                    }
                                  },
                                  "range": [
                                    351,
                                    357
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 17
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
                                      336,
                                      339
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 8,
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
                                    335,
                                    340
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 9,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 4,
                                      "line": 17
                                    }
                                  }
                                },
                                "range": [
                                  335,
                                  357
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 4,
                                    "line": 17
                                  }
                                }
                              },
                              {
                                "type": "JSXText",
                                "range": [
                                  357,
                                  362
                                ],
                                "raw": "\n\t\t\t\t",
                                "value": "\n\t\t\t\t",
                                "loc": {
                                  "end": {
                                    "column": 4,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 17
                                  }
                                }
                              }
                            ],
                            "closingElement": {
                              "type": "JSXClosingElement",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "InnerButton",
                                "range": [
                                  364,
                                  375
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                362,
                                376
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
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
                                  "type": "JSXSpreadAttribute",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        317,
                                        321
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 28,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "props",
                                      "optional": false,
                                      "range": [
                                        322,
                                        327
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 33,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "range": [
                                      317,
                                      327
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 16
                                      }
                                    }
                                  },
                                  "range": [
                                    313,
                                    328
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 16
                                    }
                                  }
                                }
                              ],
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "InnerButton",
                                "range": [
                                  301,
                                  312
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 16
                                  }
                                }
                              },
                              "selfClosing": false,
                              "range": [
                                300,
                                330
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 16
                                },
                                "start": {
                                  "column": 11,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              300,
                              376
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 18
                              },
                              "start": {
                                "column": 11,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            292,
                            378
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 18
                            },
                            "start": {
                              "column": 3,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        287,
                        382
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 19
                        },
                        "start": {
                          "column": 7,
                          "line": 15
                        }
                      }
                    },
                    "consequent": {
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
                                244,
                                275
                              ],
                              "attributes": [
                                {
                                  "type": "JSXSpreadAttribute",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        261,
                                        265
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 37,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 33,
                                          "line": 13
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "props",
                                      "optional": false,
                                      "range": [
                                        266,
                                        271
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 38,
                                          "line": 13
                                        }
                                      }
                                    },
                                    "range": [
                                      261,
                                      271
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "range": [
                                    257,
                                    272
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 13
                                    }
                                  }
                                }
                              ],
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "InnerButton",
                                "range": [
                                  245,
                                  256
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 13
                                  }
                                }
                              },
                              "selfClosing": true,
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 13
                                },
                                "start": {
                                  "column": 16,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              244,
                              275
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 13
                              },
                              "start": {
                                "column": 16,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            237,
                            275
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 13
                            },
                            "start": {
                              "column": 9,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "range": [
                        226,
                        279
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 14
                        },
                        "start": {
                          "column": 17,
                          "line": 12
                        }
                      }
                    },
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "condition",
                      "optional": false,
                      "range": [
                        215,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 12
                        },
                        "start": {
                          "column": 6,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      211,
                      382
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 19
                      },
                      "start": {
                        "column": 2,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  181,
                  388
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 13,
                    "line": 10
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
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              }
            },
            "range": [
              172,
              388
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 54,
            "line": 9
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Button",
        "optional": false,
        "range": [
          118,
          124
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 9
          },
          "start": {
            "column": 6,
            "line": 9
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
            133,
            138
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 9
            },
            "start": {
              "column": 21,
              "line": 9
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
            139,
            148
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 9
            },
            "start": {
              "column": 27,
              "line": 9
            }
          }
        },
        "range": [
          133,
          148
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 9
          },
          "start": {
            "column": 21,
            "line": 9
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          148,
          165
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ButtonProp",
              "optional": false,
              "range": [
                149,
                159
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 9
                },
                "start": {
                  "column": 37,
                  "line": 9
                }
              }
            },
            "range": [
              149,
              159
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 9
              },
              "start": {
                "column": 37,
                "line": 9
              }
            }
          },
          {
            "type": "TSAnyKeyword",
            "range": [
              161,
              164
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 9
              },
              "start": {
                "column": 49,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 9
          },
          "start": {
            "column": 36,
            "line": 9
          }
        }
      },
      "range": [
        112,
        390
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          418,
          432
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
                421,
                422
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 24
                },
                "start": {
                  "column": 1,
                  "line": 24
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
                  "column": 10,
                  "line": 24
                },
                "start": {
                  "column": 2,
                  "line": 24
                }
              },
              "range": [
                422,
                430
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  424,
                  430
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 24
                  },
                  "start": {
                    "column": 4,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              421,
              430
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 24
              },
              "start": {
                "column": 1,
                "line": 24
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 26,
            "line": 23
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InnerButtonProp",
        "optional": false,
        "range": [
          402,
          417
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 23
          },
          "start": {
            "column": 10,
            "line": 23
          }
        }
      },
      "range": [
        392,
        432
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          498,
          551
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
                501,
                507
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 28
                },
                "start": {
                  "column": 1,
                  "line": 28
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
                507,
                549
              ],
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
                            530,
                            535
                          ],
                          "raw": "Hello",
                          "value": "Hello",
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 29
                            },
                            "start": {
                              "column": 18,
                              "line": 29
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
                            537,
                            543
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 29
                            },
                            "start": {
                              "column": 25,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          535,
                          544
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 29
                          },
                          "start": {
                            "column": 23,
                            "line": 29
                          }
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "button",
                          "range": [
                            523,
                            529
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 29
                            },
                            "start": {
                              "column": 11,
                              "line": 29
                            }
                          }
                        },
                        "selfClosing": false,
                        "range": [
                          522,
                          530
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 29
                          },
                          "start": {
                            "column": 10,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        522,
                        544
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 29
                        },
                        "start": {
                          "column": 10,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      514,
                      546
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 29
                      },
                      "start": {
                        "column": 2,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  510,
                  549
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 30
                  },
                  "start": {
                    "column": 10,
                    "line": 28
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
                  "line": 30
                },
                "start": {
                  "column": 7,
                  "line": 28
                }
              }
            },
            "range": [
              501,
              549
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 30
              },
              "start": {
                "column": 1,
                "line": 28
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 64,
            "line": 27
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InnerButton",
        "optional": false,
        "range": [
          440,
          451
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 27
          },
          "start": {
            "column": 6,
            "line": 27
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
            460,
            465
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 27
            },
            "start": {
              "column": 26,
              "line": 27
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
            466,
            475
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 27
            },
            "start": {
              "column": 32,
              "line": 27
            }
          }
        },
        "range": [
          460,
          475
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 27
          },
          "start": {
            "column": 26,
            "line": 27
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          475,
          497
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "InnerButtonProp",
              "optional": false,
              "range": [
                476,
                491
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 27
                },
                "start": {
                  "column": 42,
                  "line": 27
                }
              }
            },
            "range": [
              476,
              491
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 27
              },
              "start": {
                "column": 42,
                "line": 27
              }
            }
          },
          {
            "type": "TSAnyKeyword",
            "range": [
              493,
              496
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 27
              },
              "start": {
                "column": 59,
                "line": 27
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 27
          },
          "start": {
            "column": 41,
            "line": 27
          }
        }
      },
      "range": [
        434,
        551
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 32
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
