__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    45,
    541
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'react'",
        "value": "react",
        "range": [
          68,
          75
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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              57,
              62
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          "range": [
            52,
            62
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 3
            },
            "start": {
              "column": 7,
              "line": 3
            }
          }
        }
      ],
      "range": [
        45,
        76
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 3
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
            "name": "myHoc",
            "optional": false,
            "range": [
              84,
              89
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
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
                  "type": "TSTypeAliasDeclaration",
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "WrapperComponentProps",
                    "optional": false,
                    "range": [
                      215,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ComposedComponentProps",
                          "optional": false,
                          "range": [
                            239,
                            261
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 8
                            },
                            "start": {
                              "column": 33,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          239,
                          261
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 8
                          },
                          "start": {
                            "column": 33,
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
                              "name": "myProp",
                              "optional": false,
                              "range": [
                                266,
                                272
                              ],
                              "loc": {
                                "end": {
                                  "column": 66,
                                  "line": 8
                                },
                                "start": {
                                  "column": 60,
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
                                  "column": 74,
                                  "line": 8
                                },
                                "start": {
                                  "column": 66,
                                  "line": 8
                                }
                              },
                              "range": [
                                272,
                                280
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  274,
                                  280
                                ],
                                "loc": {
                                  "end": {
                                    "column": 74,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 68,
                                    "line": 8
                                  }
                                }
                              }
                            },
                            "range": [
                              266,
                              280
                            ],
                            "loc": {
                              "end": {
                                "column": 74,
                                "line": 8
                              },
                              "start": {
                                "column": 60,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "range": [
                          264,
                          282
                        ],
                        "loc": {
                          "end": {
                            "column": 76,
                            "line": 8
                          },
                          "start": {
                            "column": 58,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      239,
                      282
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 8
                      },
                      "start": {
                        "column": 33,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    210,
                    283
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WrapperComponent",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 9
                            },
                            "start": {
                              "column": 26,
                              "line": 9
                            }
                          },
                          "range": [
                            310,
                            355
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                332,
                                355
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "WrapperComponentProps",
                                    "optional": false,
                                    "range": [
                                      333,
                                      354
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 70,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 49,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    333,
                                    354
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 70,
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
                                  "column": 71,
                                  "line": 9
                                },
                                "start": {
                                  "column": 48,
                                  "line": 9
                                }
                              }
                            },
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "React",
                                "optional": false,
                                "range": [
                                  312,
                                  317
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 9
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ComponentClass",
                                "optional": false,
                                "range": [
                                  318,
                                  332
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                312,
                                332
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 9
                                },
                                "start": {
                                  "column": 28,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              312,
                              355
                            ],
                            "loc": {
                              "end": {
                                "column": 71,
                                "line": 9
                              },
                              "start": {
                                "column": 28,
                                "line": 9
                              }
                            }
                          }
                        },
                        "range": [
                          294,
                          355
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 9
                          },
                          "start": {
                            "column": 10,
                            "line": 9
                          }
                        }
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "raw": "null",
                          "value": null,
                          "range": [
                            358,
                            362
                          ],
                          "loc": {
                            "end": {
                              "column": 78,
                              "line": 9
                            },
                            "start": {
                              "column": 74,
                              "line": 9
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            366,
                            369
                          ],
                          "loc": {
                            "end": {
                              "column": 85,
                              "line": 9
                            },
                            "start": {
                              "column": 82,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          358,
                          369
                        ],
                        "loc": {
                          "end": {
                            "column": 85,
                            "line": 9
                          },
                          "start": {
                            "column": 74,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        294,
                        369
                      ],
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 9
                        },
                        "start": {
                          "column": 10,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    288,
                    370
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 9
                    },
                    "start": {
                      "column": 4,
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
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 11
                            },
                            "start": {
                              "column": 15,
                              "line": 11
                            }
                          },
                          "range": [
                            387,
                            411
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ComposedComponentProps",
                              "optional": false,
                              "range": [
                                389,
                                411
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 11
                                },
                                "start": {
                                  "column": 17,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              389,
                              411
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
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
                          382,
                          411
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 11
                          },
                          "start": {
                            "column": 10,
                            "line": 11
                          }
                        }
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "raw": "null",
                          "value": null,
                          "range": [
                            414,
                            418
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 11
                            },
                            "start": {
                              "column": 42,
                              "line": 11
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            422,
                            425
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 11
                            },
                            "start": {
                              "column": 50,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          414,
                          425
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 11
                          },
                          "start": {
                            "column": 42,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        382,
                        425
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 11
                        },
                        "start": {
                          "column": 10,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    376,
                    426
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
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
                        432,
                        482
                      ],
                      "attributes": [
                        {
                          "type": "JSXSpreadAttribute",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "range": [
                              454,
                              459
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 13
                              },
                              "start": {
                                "column": 26,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            450,
                            460
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 13
                            },
                            "start": {
                              "column": 22,
                              "line": 13
                            }
                          }
                        },
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "myProp",
                            "range": [
                              461,
                              467
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 13
                              },
                              "start": {
                                "column": 33,
                                "line": 13
                              }
                            }
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "Literal",
                              "raw": "'1000000'",
                              "value": "1000000",
                              "range": [
                                469,
                                478
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 13
                                },
                                "start": {
                                  "column": 41,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              468,
                              479
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 13
                              },
                              "start": {
                                "column": 40,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            461,
                            479
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 13
                            },
                            "start": {
                              "column": 33,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "WrapperComponent",
                        "range": [
                          433,
                          449
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 13
                          },
                          "start": {
                            "column": 5,
                            "line": 13
                          }
                        }
                      },
                      "selfClosing": true,
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 13
                        },
                        "start": {
                          "column": 4,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      432,
                      482
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 13
                      },
                      "start": {
                        "column": 4,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    432,
                    483
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
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
                        488,
                        536
                      ],
                      "attributes": [
                        {
                          "type": "JSXSpreadAttribute",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "range": [
                              510,
                              515
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 14
                              },
                              "start": {
                                "column": 26,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            506,
                            516
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 14
                            },
                            "start": {
                              "column": 22,
                              "line": 14
                            }
                          }
                        },
                        {
                          "type": "JSXAttribute",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "myProp",
                            "range": [
                              517,
                              523
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 14
                              },
                              "start": {
                                "column": 33,
                                "line": 14
                              }
                            }
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "Literal",
                              "raw": "1000000",
                              "value": 1000000,
                              "range": [
                                525,
                                532
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 14
                                },
                                "start": {
                                  "column": 41,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              524,
                              533
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 14
                              },
                              "start": {
                                "column": 40,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            517,
                            533
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 14
                            },
                            "start": {
                              "column": 33,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "WrapperComponent",
                        "range": [
                          489,
                          505
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
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
                          "column": 52,
                          "line": 14
                        },
                        "start": {
                          "column": 4,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      488,
                      536
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 14
                      },
                      "start": {
                        "column": 4,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    488,
                    537
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                204,
                539
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 15
                },
                "start": {
                  "column": 5,
                  "line": 7
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
                "name": "ComposedComponent",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 6
                    },
                    "start": {
                      "column": 21,
                      "line": 6
                    }
                  },
                  "range": [
                    151,
                    197
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        173,
                        197
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ComposedComponentProps",
                            "optional": false,
                            "range": [
                              174,
                              196
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 6
                              },
                              "start": {
                                "column": 44,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            174,
                            196
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 6
                            },
                            "start": {
                              "column": 44,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 6
                        },
                        "start": {
                          "column": 43,
                          "line": 6
                        }
                      }
                    },
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "React",
                        "optional": false,
                        "range": [
                          153,
                          158
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
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
                        "name": "ComponentClass",
                        "optional": false,
                        "range": [
                          159,
                          173
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 6
                          },
                          "start": {
                            "column": 29,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        153,
                        173
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 6
                        },
                        "start": {
                          "column": 23,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      153,
                      197
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 6
                      },
                      "start": {
                        "column": 23,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  134,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              },
              "range": [
                92,
                128
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSAnyKeyword",
                    "range": [
                      124,
                      127
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 5
                      },
                      "start": {
                        "column": 46,
                        "line": 5
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComposedComponentProps",
                    "optional": false,
                    "range": [
                      93,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 5
                      },
                      "start": {
                        "column": 15,
                        "line": 5
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    93,
                    127
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                }
              ]
            },
            "range": [
              92,
              539
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 15
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          },
          "range": [
            84,
            539
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        78,
        540
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 5
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
      "line": 3
    }
  },
  "hashbang": null
}
```
