__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    375
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TextProps",
        "optional": false,
        "range": [
          39,
          48
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
                  "name": "editable",
                  "optional": false,
                  "range": [
                    53,
                    61
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 3
                    },
                    "start": {
                      "column": 19,
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
                      "column": 34,
                      "line": 3
                    },
                    "start": {
                      "column": 27,
                      "line": 3
                    }
                  },
                  "range": [
                    61,
                    68
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        63,
                        68
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 3
                        },
                        "start": {
                          "column": 29,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      63,
                      68
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 3
                      },
                      "start": {
                        "column": 29,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  53,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              51,
              70
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
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
                  "name": "editable",
                  "optional": false,
                  "range": [
                    90,
                    98
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 4
                    },
                    "start": {
                      "column": 19,
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
                      "column": 33,
                      "line": 4
                    },
                    "start": {
                      "column": 27,
                      "line": 4
                    }
                  },
                  "range": [
                    98,
                    104
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        100,
                        104
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 4
                        },
                        "start": {
                          "column": 29,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      100,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 4
                      },
                      "start": {
                        "column": 29,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  90,
                  105
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 4
                  },
                  "start": {
                    "column": 19,
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
                  "name": "onEdit",
                  "optional": false,
                  "range": [
                    106,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 4
                    },
                    "start": {
                      "column": 35,
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
                      "column": 68,
                      "line": 4
                    },
                    "start": {
                      "column": 41,
                      "line": 4
                    }
                  },
                  "range": [
                    112,
                    139
                  ],
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "newText",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 4
                            },
                            "start": {
                              "column": 51,
                              "line": 4
                            }
                          },
                          "range": [
                            122,
                            130
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              124,
                              130
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 4
                              },
                              "start": {
                                "column": 53,
                                "line": 4
                              }
                            }
                          }
                        },
                        "range": [
                          115,
                          130
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 4
                          },
                          "start": {
                            "column": 44,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 4
                        },
                        "start": {
                          "column": 61,
                          "line": 4
                        }
                      },
                      "range": [
                        132,
                        139
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          135,
                          139
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 4
                          },
                          "start": {
                            "column": 64,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      114,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 4
                      },
                      "start": {
                        "column": 43,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  106,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 4
                  },
                  "start": {
                    "column": 35,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              88,
              141
            ],
            "loc": {
              "end": {
                "column": 70,
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
          51,
          141
        ],
        "loc": {
          "end": {
            "column": 70,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "range": [
        34,
        142
      ],
      "loc": {
        "end": {
          "column": 71,
          "line": 4
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
          203,
          268
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
                209,
                215
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                215,
                266
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
                            241,
                            252
                          ],
                          "raw": "Some Text..",
                          "value": "Some Text..",
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 8
                            },
                            "start": {
                              "column": 21,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "span",
                          "range": [
                            254,
                            258
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 8
                            },
                            "start": {
                              "column": 34,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          252,
                          259
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 8
                          },
                          "start": {
                            "column": 32,
                            "line": 8
                          }
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "span",
                          "range": [
                            236,
                            240
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 8
                            },
                            "start": {
                              "column": 16,
                              "line": 8
                            }
                          }
                        },
                        "selfClosing": false,
                        "range": [
                          235,
                          241
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 8
                          },
                          "start": {
                            "column": 15,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        235,
                        259
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      228,
                      260
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  218,
                  266
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 13,
                    "line": 7
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
                  "line": 9
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              }
            },
            "range": [
              209,
              266
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 59,
            "line": 6
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TextComponent",
        "optional": false,
        "range": [
          150,
          163
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 6
          },
          "start": {
            "column": 6,
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
            172,
            177
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 6
            },
            "start": {
              "column": 28,
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
            178,
            187
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 6
            },
            "start": {
              "column": 34,
              "line": 6
            }
          }
        },
        "range": [
          172,
          187
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 6
          },
          "start": {
            "column": 28,
            "line": 6
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          187,
          202
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TextProps",
              "optional": false,
              "range": [
                188,
                197
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 6
                },
                "start": {
                  "column": 44,
                  "line": 6
                }
              }
            },
            "range": [
              188,
              197
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 6
              },
              "start": {
                "column": 44,
                "line": 6
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              199,
              201
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 6
              },
              "start": {
                "column": 55,
                "line": 6
              }
            }
          }
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
      },
      "range": [
        144,
        268
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
            "name": "x",
            "optional": false,
            "range": [
              283,
              284
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
                287,
                320
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "editable",
                    "range": [
                      302,
                      310
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 13
                      },
                      "start": {
                        "column": 23,
                        "line": 13
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        312,
                        316
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
                    "range": [
                      311,
                      317
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 13
                      },
                      "start": {
                        "column": 32,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    302,
                    317
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 13
                    },
                    "start": {
                      "column": 23,
                      "line": 13
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "TextComponent",
                "range": [
                  288,
                  301
                ],
                "loc": {
                  "end": {
                    "column": 22,
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
                  "column": 41,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              }
            },
            "range": [
              287,
              320
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 13
              },
              "start": {
                "column": 8,
                "line": 13
              }
            }
          },
          "range": [
            283,
            320
          ],
          "loc": {
            "end": {
              "column": 41,
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
        279,
        320
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "textProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 15
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              },
              "range": [
                337,
                348
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TextProps",
                  "optional": false,
                  "range": [
                    339,
                    348
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 15
                    },
                    "start": {
                      "column": 17,
                      "line": 15
                    }
                  }
                },
                "range": [
                  339,
                  348
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 15
                  },
                  "start": {
                    "column": 17,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              328,
              348
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
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
                  "name": "editable",
                  "optional": false,
                  "range": [
                    357,
                    365
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 16
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    367,
                    372
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 16
                    },
                    "start": {
                      "column": 14,
                      "line": 16
                    }
                  }
                },
                "range": [
                  357,
                  372
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              }
            ],
            "range": [
              351,
              374
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 17
              },
              "start": {
                "column": 29,
                "line": 15
              }
            }
          },
          "range": [
            328,
            374
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        322,
        375
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 17
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
      "column": 2,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
