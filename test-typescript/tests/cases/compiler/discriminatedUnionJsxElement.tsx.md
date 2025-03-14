__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    608
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          105,
          148
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "menuItemsVariant",
              "optional": false,
              "range": [
                111,
                127
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 4,
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
                  "column": 38,
                  "line": 4
                },
                "start": {
                  "column": 21,
                  "line": 4
                }
              },
              "range": [
                128,
                145
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MenuItemVariant",
                  "optional": false,
                  "range": [
                    130,
                    145
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 4
                    },
                    "start": {
                      "column": 23,
                      "line": 4
                    }
                  }
                },
                "range": [
                  130,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 4
                  },
                  "start": {
                    "column": 23,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              111,
              146
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 83,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IData",
        "optional": false,
        "range": [
          32,
          37
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 82,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        },
        "range": [
          37,
          104
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListItemVariant",
                "optional": false,
                "range": [
                  62,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 3
                  },
                  "start": {
                    "column": 40,
                    "line": 3
                  }
                }
              },
              "range": [
                62,
                77
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 3
                },
                "start": {
                  "column": 40,
                  "line": 3
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ListItemVariant",
                  "optional": false,
                  "range": [
                    80,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 3
                    },
                    "start": {
                      "column": 58,
                      "line": 3
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OneLine",
                  "optional": false,
                  "range": [
                    96,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 3
                    },
                    "start": {
                      "column": 74,
                      "line": 3
                    }
                  }
                },
                "range": [
                  80,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 3
                  },
                  "start": {
                    "column": 58,
                    "line": 3
                  }
                }
              },
              "range": [
                80,
                103
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 3
                },
                "start": {
                  "column": 58,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "MenuItemVariant",
              "optional": false,
              "range": [
                38,
                53
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              38,
              103
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        148
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "listItemVariant",
                  "optional": false,
                  "range": [
                    273,
                    288
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 8
                    },
                    "start": {
                      "column": 10,
                      "line": 8
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "??",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "range": [
                        291,
                        295
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 8
                        },
                        "start": {
                          "column": 28,
                          "line": 8
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "menuItemsVariant",
                      "optional": false,
                      "range": [
                        296,
                        312
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 8
                        },
                        "start": {
                          "column": 33,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      291,
                      312
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 8
                      },
                      "start": {
                        "column": 28,
                        "line": 8
                      }
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ListItemVariant",
                      "optional": false,
                      "range": [
                        316,
                        331
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 8
                        },
                        "start": {
                          "column": 53,
                          "line": 8
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OneLine",
                      "optional": false,
                      "range": [
                        332,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 8
                        },
                        "start": {
                          "column": 69,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      316,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 8
                      },
                      "start": {
                        "column": 53,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    291,
                    339
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 8
                    },
                    "start": {
                      "column": 28,
                      "line": 8
                    }
                  }
                },
                "range": [
                  273,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 8
                  },
                  "start": {
                    "column": 10,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              267,
              340
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "range": [
                  352,
                  390
                ],
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "variant",
                      "range": [
                        362,
                        369
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 9
                        },
                        "start": {
                          "column": 21,
                          "line": 9
                        }
                      }
                    },
                    "value": {
                      "type": "JSXExpressionContainer",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "listItemVariant",
                        "optional": false,
                        "range": [
                          371,
                          386
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 9
                          },
                          "start": {
                            "column": 30,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        370,
                        387
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 9
                        },
                        "start": {
                          "column": 29,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      362,
                      387
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 9
                      },
                      "start": {
                        "column": 21,
                        "line": 9
                      }
                    }
                  }
                ],
                "name": {
                  "type": "JSXIdentifier",
                  "name": "ListItem",
                  "range": [
                    353,
                    361
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 9
                    },
                    "start": {
                      "column": 12,
                      "line": 9
                    }
                  }
                },
                "selfClosing": true,
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              },
              "range": [
                352,
                390
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "range": [
              345,
              391
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          261,
          393
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 111,
            "line": 7
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Menu",
        "optional": false,
        "range": [
          159,
          163
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 109,
                "line": 7
              },
              "start": {
                "column": 85,
                "line": 7
              }
            },
            "range": [
              235,
              259
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  242,
                  259
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MenuItemVariant",
                      "optional": false,
                      "range": [
                        243,
                        258
                      ],
                      "loc": {
                        "end": {
                          "column": 108,
                          "line": 7
                        },
                        "start": {
                          "column": 93,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      243,
                      258
                    ],
                    "loc": {
                      "end": {
                        "column": 108,
                        "line": 7
                      },
                      "start": {
                        "column": 93,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 109,
                    "line": 7
                  },
                  "start": {
                    "column": 92,
                    "line": 7
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IData",
                "optional": false,
                "range": [
                  237,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 7
                  },
                  "start": {
                    "column": 87,
                    "line": 7
                  }
                }
              },
              "range": [
                237,
                259
              ],
              "loc": {
                "end": {
                  "column": 109,
                  "line": 7
                },
                "start": {
                  "column": 87,
                  "line": 7
                }
              }
            }
          },
          "range": [
            231,
            259
          ],
          "loc": {
            "end": {
              "column": 109,
              "line": 7
            },
            "start": {
              "column": 81,
              "line": 7
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 80,
            "line": 7
          },
          "start": {
            "column": 13,
            "line": 7
          }
        },
        "range": [
          163,
          230
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListItemVariant",
                "optional": false,
                "range": [
                  188,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 7
                  },
                  "start": {
                    "column": 38,
                    "line": 7
                  }
                }
              },
              "range": [
                188,
                203
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 7
                },
                "start": {
                  "column": 38,
                  "line": 7
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ListItemVariant",
                  "optional": false,
                  "range": [
                    206,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 7
                    },
                    "start": {
                      "column": 56,
                      "line": 7
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OneLine",
                  "optional": false,
                  "range": [
                    222,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 7
                    },
                    "start": {
                      "column": 72,
                      "line": 7
                    }
                  }
                },
                "range": [
                  206,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 7
                  },
                  "start": {
                    "column": 56,
                    "line": 7
                  }
                }
              },
              "range": [
                206,
                229
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 7
                },
                "start": {
                  "column": 56,
                  "line": 7
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "MenuItemVariant",
              "optional": false,
              "range": [
                164,
                179
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              164,
              229
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 7
              },
              "start": {
                "column": 14,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        150,
        393
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IListItemData",
        "optional": false,
        "range": [
          400,
          413
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 12
          },
          "start": {
            "column": 5,
            "line": 12
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
                  "name": "variant",
                  "optional": false,
                  "range": [
                    418,
                    425
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 12
                    },
                    "start": {
                      "column": 23,
                      "line": 12
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
                      "column": 54,
                      "line": 12
                    },
                    "start": {
                      "column": 30,
                      "line": 12
                    }
                  },
                  "range": [
                    425,
                    449
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListItemVariant",
                        "optional": false,
                        "range": [
                          427,
                          442
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 12
                          },
                          "start": {
                            "column": 32,
                            "line": 12
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Avatar",
                        "optional": false,
                        "range": [
                          443,
                          449
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 12
                          },
                          "start": {
                            "column": 48,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        427,
                        449
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 12
                        },
                        "start": {
                          "column": 32,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      427,
                      449
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 12
                      },
                      "start": {
                        "column": 32,
                        "line": 12
                      }
                    }
                  }
                },
                "range": [
                  418,
                  450
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 12
                  },
                  "start": {
                    "column": 23,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              416,
              452
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 12
              },
              "start": {
                "column": 21,
                "line": 12
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
                  "name": "variant",
                  "optional": false,
                  "range": [
                    457,
                    464
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 12
                    },
                    "start": {
                      "column": 62,
                      "line": 12
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
                      "column": 94,
                      "line": 12
                    },
                    "start": {
                      "column": 69,
                      "line": 12
                    }
                  },
                  "range": [
                    464,
                    489
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListItemVariant",
                        "optional": false,
                        "range": [
                          466,
                          481
                        ],
                        "loc": {
                          "end": {
                            "column": 86,
                            "line": 12
                          },
                          "start": {
                            "column": 71,
                            "line": 12
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OneLine",
                        "optional": false,
                        "range": [
                          482,
                          489
                        ],
                        "loc": {
                          "end": {
                            "column": 94,
                            "line": 12
                          },
                          "start": {
                            "column": 87,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        466,
                        489
                      ],
                      "loc": {
                        "end": {
                          "column": 94,
                          "line": 12
                        },
                        "start": {
                          "column": 71,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      466,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 94,
                        "line": 12
                      },
                      "start": {
                        "column": 71,
                        "line": 12
                      }
                    }
                  }
                },
                "range": [
                  457,
                  490
                ],
                "loc": {
                  "end": {
                    "column": 95,
                    "line": 12
                  },
                  "start": {
                    "column": 62,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              455,
              492
            ],
            "loc": {
              "end": {
                "column": 97,
                "line": 12
              },
              "start": {
                "column": 60,
                "line": 12
              }
            }
          }
        ],
        "range": [
          416,
          492
        ],
        "loc": {
          "end": {
            "column": 97,
            "line": 12
          },
          "start": {
            "column": 21,
            "line": 12
          }
        }
      },
      "range": [
        395,
        493
      ],
      "loc": {
        "end": {
          "column": 98,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          516,
          544
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "OneLine",
              "optional": false,
              "range": [
                522,
                529
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "range": [
              522,
              529
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Avatar",
              "optional": false,
              "range": [
                535,
                541
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              535,
              541
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 21,
            "line": 14
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ListItemVariant",
        "optional": false,
        "range": [
          500,
          515
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
          }
        }
      },
      "range": [
        495,
        544
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 14
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
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                599,
                603
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "range": [
              592,
              604
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          586,
          607
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 40,
            "line": 19
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ListItem",
        "optional": false,
        "range": [
          555,
          563
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_data",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 19
              },
              "start": {
                "column": 23,
                "line": 19
              }
            },
            "range": [
              569,
              584
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IListItemData",
                "optional": false,
                "range": [
                  571,
                  584
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 19
                  },
                  "start": {
                    "column": 25,
                    "line": 19
                  }
                }
              },
              "range": [
                571,
                584
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 19
                },
                "start": {
                  "column": 25,
                  "line": 19
                }
              }
            }
          },
          "range": [
            564,
            584
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 19
            },
            "start": {
              "column": 18,
              "line": 19
            }
          }
        }
      ],
      "range": [
        546,
        607
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
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
      "column": 0,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
