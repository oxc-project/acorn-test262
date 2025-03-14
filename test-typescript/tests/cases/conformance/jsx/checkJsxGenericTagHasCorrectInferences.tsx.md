__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    741
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          55,
          107
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "initialValues",
              "optional": false,
              "range": [
                59,
                72
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 2,
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
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              },
              "range": [
                72,
                75
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    74,
                    75
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 3
                    },
                    "start": {
                      "column": 17,
                      "line": 3
                    }
                  }
                },
                "range": [
                  74,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              59,
              76
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nextValues",
              "optional": false,
              "range": [
                79,
                89
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 2,
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
                  "column": 27,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              },
              "range": [
                89,
                104
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cur",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 4
                        },
                        "start": {
                          "column": 18,
                          "line": 4
                        }
                      },
                      "range": [
                        95,
                        98
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            97,
                            98
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 4
                            },
                            "start": {
                              "column": 20,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          97,
                          98
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 4
                          },
                          "start": {
                            "column": 20,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      92,
                      98
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 4
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 4
                    },
                    "start": {
                      "column": 23,
                      "line": 4
                    }
                  },
                  "range": [
                    100,
                    104
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        103,
                        104
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 4
                        },
                        "start": {
                          "column": 26,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      103,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 4
                      },
                      "start": {
                        "column": 26,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  91,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 4
                  },
                  "start": {
                    "column": 14,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              79,
              105
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 4
              },
              "start": {
                "column": 2,
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
            "column": 23,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseProps",
        "optional": false,
        "range": [
          42,
          51
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 2
          },
          "start": {
            "column": 19,
            "line": 2
          }
        },
        "range": [
          51,
          54
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                52,
                53
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 20,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              52,
              53
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 20,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        32,
        107
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          223,
          240
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iv",
              "optional": false,
              "range": [
                227,
                229
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 7
                },
                "start": {
                  "column": 2,
                  "line": 7
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
                  "column": 12,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              },
              "range": [
                229,
                237
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Values",
                  "optional": false,
                  "range": [
                    231,
                    237
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
                "range": [
                  231,
                  237
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
              }
            },
            "value": null,
            "range": [
              227,
              238
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 115,
            "line": 6
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericComponent",
        "optional": false,
        "range": [
          122,
          138
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 6
          },
          "start": {
            "column": 14,
            "line": 6
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
            176,
            181
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 6
            },
            "start": {
              "column": 68,
              "line": 6
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
            182,
            191
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 6
            },
            "start": {
              "column": 74,
              "line": 6
            }
          }
        },
        "range": [
          176,
          191
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 6
          },
          "start": {
            "column": 68,
            "line": 6
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          191,
          222
        ],
        "params": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "range": [
                    192,
                    197
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 6
                    },
                    "start": {
                      "column": 84,
                      "line": 6
                    }
                  }
                },
                "range": [
                  192,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 6
                  },
                  "start": {
                    "column": 84,
                    "line": 6
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    209,
                    217
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Values",
                        "optional": false,
                        "range": [
                          210,
                          216
                        ],
                        "loc": {
                          "end": {
                            "column": 108,
                            "line": 6
                          },
                          "start": {
                            "column": 102,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        210,
                        216
                      ],
                      "loc": {
                        "end": {
                          "column": 108,
                          "line": 6
                        },
                        "start": {
                          "column": 102,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 109,
                      "line": 6
                    },
                    "start": {
                      "column": 101,
                      "line": 6
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BaseProps",
                  "optional": false,
                  "range": [
                    200,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 101,
                      "line": 6
                    },
                    "start": {
                      "column": 92,
                      "line": 6
                    }
                  }
                },
                "range": [
                  200,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 109,
                    "line": 6
                  },
                  "start": {
                    "column": 92,
                    "line": 6
                  }
                }
              }
            ],
            "range": [
              192,
              217
            ],
            "loc": {
              "end": {
                "column": 109,
                "line": 6
              },
              "start": {
                "column": 84,
                "line": 6
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              219,
              221
            ],
            "loc": {
              "end": {
                "column": 113,
                "line": 6
              },
              "start": {
                "column": 111,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 114,
            "line": 6
          },
          "start": {
            "column": 83,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 59,
            "line": 6
          },
          "start": {
            "column": 30,
            "line": 6
          }
        },
        "range": [
          138,
          167
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                147,
                149
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 6
                },
                "start": {
                  "column": 39,
                  "line": 6
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "range": [
                139,
                144
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 6
                },
                "start": {
                  "column": 31,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              139,
              149
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 6
              },
              "start": {
                "column": 31,
                "line": 6
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSObjectKeyword",
              "range": [
                160,
                166
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 6
                },
                "start": {
                  "column": 52,
                  "line": 6
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Values",
              "optional": false,
              "range": [
                151,
                157
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 6
                },
                "start": {
                  "column": 43,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              151,
              166
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 6
              },
              "start": {
                "column": 43,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        108,
        240
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
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
              246,
              247
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
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
                250,
                317
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "initialValues",
                    "range": [
                      268,
                      281
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 10
                      },
                      "start": {
                        "column": 26,
                        "line": 10
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              285,
                              286
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 10
                              },
                              "start": {
                                "column": 43,
                                "line": 10
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"y\"",
                            "value": "y",
                            "range": [
                              288,
                              291
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 10
                              },
                              "start": {
                                "column": 46,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            285,
                            291
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 10
                            },
                            "start": {
                              "column": 43,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        283,
                        293
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 10
                        },
                        "start": {
                          "column": 41,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      282,
                      294
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 10
                      },
                      "start": {
                        "column": 40,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    268,
                    294
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 10
                    },
                    "start": {
                      "column": 26,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "nextValues",
                    "range": [
                      295,
                      305
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 10
                      },
                      "start": {
                        "column": 53,
                        "line": 10
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          312,
                          313
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 10
                          },
                          "start": {
                            "column": 70,
                            "line": 10
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            307,
                            308
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 10
                            },
                            "start": {
                              "column": 65,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        307,
                        313
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 10
                        },
                        "start": {
                          "column": 65,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      306,
                      314
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 10
                      },
                      "start": {
                        "column": 64,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    295,
                    314
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 10
                    },
                    "start": {
                      "column": 53,
                      "line": 10
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "GenericComponent",
                "range": [
                  251,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 10
                  },
                  "start": {
                    "column": 9,
                    "line": 10
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 75,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            "range": [
              250,
              317
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 10
              },
              "start": {
                "column": 8,
                "line": 10
              }
            }
          },
          "range": [
            246,
            317
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        242,
        318
      ],
      "loc": {
        "end": {
          "column": 76,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
              335,
              336
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
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
                339,
                398
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "initialValues",
                    "range": [
                      357,
                      370
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 11
                      },
                      "start": {
                        "column": 26,
                        "line": 11
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        372,
                        374
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 11
                        },
                        "start": {
                          "column": 41,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      371,
                      375
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 11
                      },
                      "start": {
                        "column": 40,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    357,
                    375
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 11
                    },
                    "start": {
                      "column": 26,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "nextValues",
                    "range": [
                      376,
                      386
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 11
                      },
                      "start": {
                        "column": 45,
                        "line": 11
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          393,
                          394
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 11
                          },
                          "start": {
                            "column": 62,
                            "line": 11
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            388,
                            389
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 11
                            },
                            "start": {
                              "column": 57,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        388,
                        394
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 11
                        },
                        "start": {
                          "column": 57,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      387,
                      395
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 11
                      },
                      "start": {
                        "column": 56,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    376,
                    395
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 11
                    },
                    "start": {
                      "column": 45,
                      "line": 11
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "GenericComponent",
                "range": [
                  340,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 11
                  },
                  "start": {
                    "column": 9,
                    "line": 11
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 67,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            },
            "range": [
              339,
              398
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 11
              },
              "start": {
                "column": 8,
                "line": 11
              }
            }
          },
          "range": [
            335,
            398
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        331,
        399
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
              512,
              513
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
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
                516,
                594
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "initialValues",
                    "range": [
                      534,
                      547
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 12
                      },
                      "start": {
                        "column": 26,
                        "line": 12
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              551,
                              552
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 12
                              },
                              "start": {
                                "column": 43,
                                "line": 12
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"y\"",
                            "value": "y",
                            "range": [
                              554,
                              557
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 12
                              },
                              "start": {
                                "column": 46,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            551,
                            557
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 12
                            },
                            "start": {
                              "column": 43,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "range": [
                        549,
                        559
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 12
                        },
                        "start": {
                          "column": 41,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      548,
                      560
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 12
                      },
                      "start": {
                        "column": 40,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    534,
                    560
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 12
                    },
                    "start": {
                      "column": 26,
                      "line": 12
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "nextValues",
                    "range": [
                      561,
                      571
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 12
                      },
                      "start": {
                        "column": 53,
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
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                581,
                                582
                              ],
                              "loc": {
                                "end": {
                                  "column": 74,
                                  "line": 12
                                },
                                "start": {
                                  "column": 73,
                                  "line": 12
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  584,
                                  585
                                ],
                                "loc": {
                                  "end": {
                                    "column": 77,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 76,
                                    "line": 12
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  586,
                                  587
                                ],
                                "loc": {
                                  "end": {
                                    "column": 79,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 78,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                584,
                                587
                              ],
                              "loc": {
                                "end": {
                                  "column": 79,
                                  "line": 12
                                },
                                "start": {
                                  "column": 76,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              581,
                              587
                            ],
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
                        "range": [
                          579,
                          589
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 12
                          },
                          "start": {
                            "column": 71,
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            573,
                            574
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 12
                            },
                            "start": {
                              "column": 65,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "range": [
                        573,
                        590
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 12
                        },
                        "start": {
                          "column": 65,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      572,
                      591
                    ],
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 12
                      },
                      "start": {
                        "column": 64,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    561,
                    591
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 12
                    },
                    "start": {
                      "column": 53,
                      "line": 12
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "GenericComponent",
                "range": [
                  517,
                  533
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 12
                  },
                  "start": {
                    "column": 9,
                    "line": 12
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 86,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "range": [
              516,
              594
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 12
              },
              "start": {
                "column": 8,
                "line": 12
              }
            }
          },
          "range": [
            512,
            594
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        508,
        595
      ],
      "loc": {
        "end": {
          "column": 87,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
              612,
              613
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
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
                616,
                685
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "initialValues",
                    "range": [
                      634,
                      647
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 13
                      },
                      "start": {
                        "column": 26,
                        "line": 13
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
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
                                "column": 44,
                                "line": 13
                              },
                              "start": {
                                "column": 43,
                                "line": 13
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"y\"",
                            "value": "y",
                            "range": [
                              654,
                              657
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 13
                              },
                              "start": {
                                "column": 46,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            651,
                            657
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 13
                            },
                            "start": {
                              "column": 43,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "range": [
                        649,
                        659
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 13
                        },
                        "start": {
                          "column": 41,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      648,
                      660
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 13
                      },
                      "start": {
                        "column": 40,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    634,
                    660
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 13
                    },
                    "start": {
                      "column": 26,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "nextValues",
                    "range": [
                      661,
                      671
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 13
                      },
                      "start": {
                        "column": 53,
                        "line": 13
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            678,
                            679
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 13
                            },
                            "start": {
                              "column": 70,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            680,
                            681
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 13
                            },
                            "start": {
                              "column": 72,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          678,
                          681
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 13
                          },
                          "start": {
                            "column": 70,
                            "line": 13
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            673,
                            674
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 13
                            },
                            "start": {
                              "column": 65,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "range": [
                        673,
                        681
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 13
                        },
                        "start": {
                          "column": 65,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      672,
                      682
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 13
                      },
                      "start": {
                        "column": 64,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    661,
                    682
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 13
                    },
                    "start": {
                      "column": 53,
                      "line": 13
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "GenericComponent",
                "range": [
                  617,
                  633
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 13
                  },
                  "start": {
                    "column": 9,
                    "line": 13
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 77,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              }
            },
            "range": [
              616,
              685
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 13
              },
              "start": {
                "column": 8,
                "line": 13
              }
            }
          },
          "range": [
            612,
            685
          ],
          "loc": {
            "end": {
              "column": 77,
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
      "kind": "let",
      "range": [
        608,
        686
      ],
      "loc": {
        "end": {
          "column": 78,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 133,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
