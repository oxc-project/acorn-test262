__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    955
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
          125
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
                  "column": 41,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              },
              "range": [
                93,
                122
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
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
                          95,
                          98
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 6
                          },
                          "start": {
                            "column": 14,
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
                          99,
                          106
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 6
                          },
                          "start": {
                            "column": 18,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        95,
                        106
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 6
                        },
                        "start": {
                          "column": 14,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      95,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 6
                      },
                      "start": {
                        "column": 14,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JSX",
                          "optional": false,
                          "range": [
                            109,
                            112
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 6
                            },
                            "start": {
                              "column": 28,
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
                            113,
                            120
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 6
                            },
                            "start": {
                              "column": 32,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          109,
                          120
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 6
                          },
                          "start": {
                            "column": 28,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        109,
                        120
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 6
                        },
                        "start": {
                          "column": 28,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      109,
                      122
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 6
                      },
                      "start": {
                        "column": 28,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  95,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 41,
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
              123
            ],
            "loc": {
              "end": {
                "column": 42,
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
        125
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
          174,
          236
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
                180,
                186
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
                186,
                234
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
                            212,
                            221
                          ],
                          "raw": "My Button",
                          "value": "My Button",
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 11
                            },
                            "start": {
                              "column": 21,
                              "line": 11
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
                            223,
                            226
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 11
                            },
                            "start": {
                              "column": 32,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          221,
                          227
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 11
                          },
                          "start": {
                            "column": 30,
                            "line": 11
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
                            208,
                            211
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
                        "selfClosing": false,
                        "range": [
                          207,
                          212
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 11
                          },
                          "start": {
                            "column": 16,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        207,
                        227
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 11
                        },
                        "start": {
                          "column": 16,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      199,
                      228
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  189,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
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
                  "line": 12
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              }
            },
            "range": [
              180,
              234
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
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
            "line": 13
          },
          "start": {
            "column": 47,
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
          133,
          139
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
            148,
            153
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
            154,
            163
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
          148,
          163
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
          163,
          173
        ],
        "params": [
          {
            "type": "TSAnyKeyword",
            "range": [
              164,
              167
            ],
            "loc": {
              "end": {
                "column": 40,
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
              169,
              172
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 9
              },
              "start": {
                "column": 42,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 9
          },
          "start": {
            "column": 36,
            "line": 9
          }
        }
      },
      "range": [
        127,
        236
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 9
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
                    286,
                    305
                  ],
                  "raw": "Just Another Button",
                  "value": "Just Another Button",
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 16
                    },
                    "start": {
                      "column": 15,
                      "line": 16
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
                    307,
                    309
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 16
                    },
                    "start": {
                      "column": 36,
                      "line": 16
                    }
                  }
                },
                "range": [
                  305,
                  310
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 16
                  },
                  "start": {
                    "column": 34,
                    "line": 16
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
                    283,
                    285
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
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
                  282,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 16
                  },
                  "start": {
                    "column": 11,
                    "line": 16
                  }
                }
              },
              "range": [
                282,
                310
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "range": [
              275,
              311
            ],
            "loc": {
              "end": {
                "column": 40,
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
          269,
          313
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 31,
            "line": 15
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherButton",
        "optional": false,
        "range": [
          247,
          260
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
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
                "column": 29,
                "line": 15
              },
              "start": {
                "column": 24,
                "line": 15
              }
            },
            "range": [
              262,
              267
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                264,
                267
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 15
                },
                "start": {
                  "column": 26,
                  "line": 15
                }
              }
            }
          },
          "range": [
            261,
            267
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 15
            },
            "start": {
              "column": 23,
              "line": 15
            }
          }
        }
      ],
      "range": [
        238,
        313
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
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
                        357,
                        358
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
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        359,
                        360
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 20
                        },
                        "start": {
                          "column": 19,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      357,
                      360
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 20
                      },
                      "start": {
                        "column": 17,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    356,
                    361
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 20
                    },
                    "start": {
                      "column": 16,
                      "line": 20
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
                    363,
                    366
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 20
                    },
                    "start": {
                      "column": 23,
                      "line": 20
                    }
                  }
                },
                "range": [
                  361,
                  367
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 20
                  },
                  "start": {
                    "column": 21,
                    "line": 20
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
                    352,
                    355
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 20
                    },
                    "start": {
                      "column": 12,
                      "line": 20
                    }
                  }
                },
                "selfClosing": false,
                "range": [
                  351,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 20
                  },
                  "start": {
                    "column": 11,
                    "line": 20
                  }
                }
              },
              "range": [
                351,
                367
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "range": [
              344,
              368
            ],
            "loc": {
              "end": {
                "column": 28,
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
          338,
          370
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 23,
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
        "name": "Comp",
        "optional": false,
        "range": [
          324,
          328
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 19
              },
              "start": {
                "column": 15,
                "line": 19
              }
            },
            "range": [
              330,
              336
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prop",
                "optional": false,
                "range": [
                  332,
                  336
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 19
                  },
                  "start": {
                    "column": 17,
                    "line": 19
                  }
                }
              },
              "range": [
                332,
                336
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 19
                },
                "start": {
                  "column": 17,
                  "line": 19
                }
              }
            }
          },
          "range": [
            329,
            336
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 19
            },
            "start": {
              "column": 14,
              "line": 19
            }
          }
        }
      ],
      "range": [
        315,
        370
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
              382,
              384
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
                "type": "JSXFragment",
                "children": [],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "range": [
                    409,
                    412
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 24
                    },
                    "start": {
                      "column": 31,
                      "line": 24
                    }
                  }
                },
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "range": [
                    407,
                    409
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 24
                    },
                    "start": {
                      "column": 29,
                      "line": 24
                    }
                  }
                },
                "range": [
                  407,
                  412
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 24
                  },
                  "start": {
                    "column": 29,
                    "line": 24
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
                    412,
                    422
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "range": [
                      413,
                      419
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 24
                      },
                      "start": {
                        "column": 35,
                        "line": 24
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 24
                    },
                    "start": {
                      "column": 34,
                      "line": 24
                    }
                  }
                },
                "range": [
                  412,
                  422
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 24
                  },
                  "start": {
                    "column": 34,
                    "line": 24
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
                    422,
                    439
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "range": [
                      423,
                      436
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 24
                      },
                      "start": {
                        "column": 45,
                        "line": 24
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 24
                    },
                    "start": {
                      "column": 44,
                      "line": 24
                    }
                  }
                },
                "range": [
                  422,
                  439
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 24
                  },
                  "start": {
                    "column": 44,
                    "line": 24
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
                  441,
                  445
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 24
                  },
                  "start": {
                    "column": 63,
                    "line": 24
                  }
                }
              },
              "range": [
                439,
                446
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 24
                },
                "start": {
                  "column": 61,
                  "line": 24
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
                      393,
                      394
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 24
                      },
                      "start": {
                        "column": 15,
                        "line": 24
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
                        396,
                        398
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 24
                        },
                        "start": {
                          "column": 18,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      395,
                      399
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 24
                      },
                      "start": {
                        "column": 17,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    393,
                    399
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 24
                    },
                    "start": {
                      "column": 15,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "range": [
                      400,
                      401
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 24
                      },
                      "start": {
                        "column": 22,
                        "line": 24
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      402,
                      406
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 24
                      },
                      "start": {
                        "column": 24,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    400,
                    406
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 24
                    },
                    "start": {
                      "column": 22,
                      "line": 24
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  388,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 24
                  },
                  "start": {
                    "column": 10,
                    "line": 24
                  }
                }
              },
              "selfClosing": false,
              "range": [
                387,
                407
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              }
            },
            "range": [
              387,
              446
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 24
              }
            }
          },
          "range": [
            382,
            446
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 24
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
        378,
        447
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 24
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
              452,
              454
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [
              {
                "type": "JSXFragment",
                "children": [
                  {
                    "type": "JSXElement",
                    "children": [],
                    "closingElement": null,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "range": [
                        479,
                        489
                      ],
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Button",
                        "range": [
                          480,
                          486
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 25
                          },
                          "start": {
                            "column": 32,
                            "line": 25
                          }
                        }
                      },
                      "selfClosing": true,
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 25
                        },
                        "start": {
                          "column": 31,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      479,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 25
                      },
                      "start": {
                        "column": 31,
                        "line": 25
                      }
                    }
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "range": [
                    489,
                    492
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 25
                    },
                    "start": {
                      "column": 41,
                      "line": 25
                    }
                  }
                },
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "range": [
                    477,
                    479
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 25
                    },
                    "start": {
                      "column": 29,
                      "line": 25
                    }
                  }
                },
                "range": [
                  477,
                  492
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 25
                  },
                  "start": {
                    "column": 29,
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
                    492,
                    509
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "range": [
                      493,
                      506
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 25
                      },
                      "start": {
                        "column": 45,
                        "line": 25
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 25
                    },
                    "start": {
                      "column": 44,
                      "line": 25
                    }
                  }
                },
                "range": [
                  492,
                  509
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 25
                  },
                  "start": {
                    "column": 44,
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
                  511,
                  515
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 25
                  },
                  "start": {
                    "column": 63,
                    "line": 25
                  }
                }
              },
              "range": [
                509,
                516
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 25
                },
                "start": {
                  "column": 61,
                  "line": 25
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
                      463,
                      464
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 25
                      },
                      "start": {
                        "column": 15,
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
                        466,
                        468
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 25
                        },
                        "start": {
                          "column": 18,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      465,
                      469
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 25
                      },
                      "start": {
                        "column": 17,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    463,
                    469
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 25
                    },
                    "start": {
                      "column": 15,
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
                      470,
                      471
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 25
                      },
                      "start": {
                        "column": 22,
                        "line": 25
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      472,
                      476
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 25
                      },
                      "start": {
                        "column": 24,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    470,
                    476
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 25
                    },
                    "start": {
                      "column": 22,
                      "line": 25
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  458,
                  462
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 25
                  },
                  "start": {
                    "column": 10,
                    "line": 25
                  }
                }
              },
              "selfClosing": false,
              "range": [
                457,
                477
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 25
                },
                "start": {
                  "column": 9,
                  "line": 25
                }
              }
            },
            "range": [
              457,
              516
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 25
              },
              "start": {
                "column": 9,
                "line": 25
              }
            }
          },
          "range": [
            452,
            516
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        448,
        517
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
              522,
              524
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [
              {
                "type": "JSXFragment",
                "children": [
                  {
                    "type": "JSXElement",
                    "children": [],
                    "closingElement": null,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "range": [
                        549,
                        559
                      ],
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Button",
                        "range": [
                          550,
                          556
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 26
                          },
                          "start": {
                            "column": 32,
                            "line": 26
                          }
                        }
                      },
                      "selfClosing": true,
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 26
                        },
                        "start": {
                          "column": 31,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      549,
                      559
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 26
                      },
                      "start": {
                        "column": 31,
                        "line": 26
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
                        559,
                        576
                      ],
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "AnotherButton",
                        "range": [
                          560,
                          573
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 26
                          },
                          "start": {
                            "column": 42,
                            "line": 26
                          }
                        }
                      },
                      "selfClosing": true,
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 26
                        },
                        "start": {
                          "column": 41,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      559,
                      576
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 26
                      },
                      "start": {
                        "column": 41,
                        "line": 26
                      }
                    }
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "range": [
                    576,
                    579
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 26
                    },
                    "start": {
                      "column": 58,
                      "line": 26
                    }
                  }
                },
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "range": [
                    547,
                    549
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 26
                    },
                    "start": {
                      "column": 29,
                      "line": 26
                    }
                  }
                },
                "range": [
                  547,
                  579
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 26
                  },
                  "start": {
                    "column": 29,
                    "line": 26
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
                  581,
                  585
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 26
                  },
                  "start": {
                    "column": 63,
                    "line": 26
                  }
                }
              },
              "range": [
                579,
                586
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 26
                },
                "start": {
                  "column": 61,
                  "line": 26
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
                      533,
                      534
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 26
                      },
                      "start": {
                        "column": 15,
                        "line": 26
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
                        536,
                        538
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 26
                        },
                        "start": {
                          "column": 18,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      535,
                      539
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 26
                      },
                      "start": {
                        "column": 17,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    533,
                    539
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 26
                    },
                    "start": {
                      "column": 15,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "range": [
                      540,
                      541
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 26
                      },
                      "start": {
                        "column": 22,
                        "line": 26
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      542,
                      546
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 26
                      },
                      "start": {
                        "column": 24,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    540,
                    546
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 26
                    },
                    "start": {
                      "column": 22,
                      "line": 26
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  528,
                  532
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 26
                  },
                  "start": {
                    "column": 10,
                    "line": 26
                  }
                }
              },
              "selfClosing": false,
              "range": [
                527,
                547
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 26
                }
              }
            },
            "range": [
              527,
              586
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 26
              },
              "start": {
                "column": 9,
                "line": 26
              }
            }
          },
          "range": [
            522,
            586
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        518,
        587
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          615,
          675
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
                621,
                622
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
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
                  "line": 29
                },
                "start": {
                  "column": 5,
                  "line": 29
                }
              },
              "range": [
                622,
                630
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  624,
                  630
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 29
                  },
                  "start": {
                    "column": 7,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              621,
              631
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
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
                636,
                637
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
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
                  "line": 30
                },
                "start": {
                  "column": 5,
                  "line": 30
                }
              },
              "range": [
                637,
                645
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  639,
                  645
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 30
                  },
                  "start": {
                    "column": 7,
                    "line": 30
                  }
                }
              }
            },
            "range": [
              636,
              646
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
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
                651,
                659
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
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
                  "column": 25,
                  "line": 31
                },
                "start": {
                  "column": 12,
                  "line": 31
                }
              },
              "range": [
                659,
                672
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
                      661,
                      664
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 31
                      },
                      "start": {
                        "column": 14,
                        "line": 31
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "range": [
                      665,
                      672
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 31
                      },
                      "start": {
                        "column": 18,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    661,
                    672
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 31
                    },
                    "start": {
                      "column": 14,
                      "line": 31
                    }
                  }
                },
                "range": [
                  661,
                  672
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 31
                  },
                  "start": {
                    "column": 14,
                    "line": 31
                  }
                }
              }
            },
            "range": [
              651,
              673
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 26,
            "line": 28
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SingleChildProp",
        "optional": false,
        "range": [
          599,
          614
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 28
          },
          "start": {
            "column": 10,
            "line": 28
          }
        }
      },
      "range": [
        589,
        675
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 28
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
                        741,
                        742
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 35
                        },
                        "start": {
                          "column": 17,
                          "line": 35
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
                        743,
                        744
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 35
                        },
                        "start": {
                          "column": 19,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      741,
                      744
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 35
                      },
                      "start": {
                        "column": 17,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    740,
                    745
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 35
                    },
                    "start": {
                      "column": 16,
                      "line": 35
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
                    747,
                    750
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 35
                    },
                    "start": {
                      "column": 23,
                      "line": 35
                    }
                  }
                },
                "range": [
                  745,
                  751
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 35
                  },
                  "start": {
                    "column": 21,
                    "line": 35
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
                    736,
                    739
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 35
                    },
                    "start": {
                      "column": 12,
                      "line": 35
                    }
                  }
                },
                "selfClosing": false,
                "range": [
                  735,
                  740
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 35
                  },
                  "start": {
                    "column": 11,
                    "line": 35
                  }
                }
              },
              "range": [
                735,
                751
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 35
                },
                "start": {
                  "column": 11,
                  "line": 35
                }
              }
            },
            "range": [
              728,
              752
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "range": [
          722,
          754
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 45,
            "line": 34
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SingleChildComp",
        "optional": false,
        "range": [
          686,
          701
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 34
          },
          "start": {
            "column": 9,
            "line": 34
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
                "column": 43,
                "line": 34
              },
              "start": {
                "column": 26,
                "line": 34
              }
            },
            "range": [
              703,
              720
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SingleChildProp",
                "optional": false,
                "range": [
                  705,
                  720
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 34
                  },
                  "start": {
                    "column": 28,
                    "line": 34
                  }
                }
              },
              "range": [
                705,
                720
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 34
                },
                "start": {
                  "column": 28,
                  "line": 34
                }
              }
            }
          },
          "range": [
            702,
            720
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 34
            },
            "start": {
              "column": 25,
              "line": 34
            }
          }
        }
      ],
      "range": [
        677,
        754
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 34
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
              766,
              768
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [
              {
                "type": "JSXFragment",
                "children": [
                  {
                    "type": "JSXElement",
                    "children": [],
                    "closingElement": null,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "range": [
                        804,
                        814
                      ],
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Button",
                        "range": [
                          805,
                          811
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 39
                          },
                          "start": {
                            "column": 43,
                            "line": 39
                          }
                        }
                      },
                      "selfClosing": true,
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 39
                        },
                        "start": {
                          "column": 42,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      804,
                      814
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 39
                      },
                      "start": {
                        "column": 42,
                        "line": 39
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
                        814,
                        831
                      ],
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "AnotherButton",
                        "range": [
                          815,
                          828
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 39
                          },
                          "start": {
                            "column": 53,
                            "line": 39
                          }
                        }
                      },
                      "selfClosing": true,
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 39
                        },
                        "start": {
                          "column": 52,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      814,
                      831
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 39
                      },
                      "start": {
                        "column": 52,
                        "line": 39
                      }
                    }
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "range": [
                    831,
                    834
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 39
                    },
                    "start": {
                      "column": 69,
                      "line": 39
                    }
                  }
                },
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "range": [
                    802,
                    804
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 39
                    },
                    "start": {
                      "column": 40,
                      "line": 39
                    }
                  }
                },
                "range": [
                  802,
                  834
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 39
                  },
                  "start": {
                    "column": 40,
                    "line": 39
                  }
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SingleChildComp",
                "range": [
                  836,
                  851
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 39
                  },
                  "start": {
                    "column": 74,
                    "line": 39
                  }
                }
              },
              "range": [
                834,
                852
              ],
              "loc": {
                "end": {
                  "column": 90,
                  "line": 39
                },
                "start": {
                  "column": 72,
                  "line": 39
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
                      788,
                      789
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 39
                      },
                      "start": {
                        "column": 26,
                        "line": 39
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
                        791,
                        793
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 39
                        },
                        "start": {
                          "column": 29,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      790,
                      794
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 39
                      },
                      "start": {
                        "column": 28,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    788,
                    794
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 39
                    },
                    "start": {
                      "column": 26,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "range": [
                      795,
                      796
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 39
                      },
                      "start": {
                        "column": 33,
                        "line": 39
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      797,
                      801
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 39
                      },
                      "start": {
                        "column": 35,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    795,
                    801
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 39
                    },
                    "start": {
                      "column": 33,
                      "line": 39
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "SingleChildComp",
                "range": [
                  772,
                  787
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 39
                  },
                  "start": {
                    "column": 10,
                    "line": 39
                  }
                }
              },
              "selfClosing": false,
              "range": [
                771,
                802
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 39
                },
                "start": {
                  "column": 9,
                  "line": 39
                }
              }
            },
            "range": [
              771,
              852
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 39
              },
              "start": {
                "column": 9,
                "line": 39
              }
            }
          },
          "range": [
            766,
            852
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 39
            },
            "start": {
              "column": 4,
              "line": 39
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        762,
        853
      ],
      "loc": {
        "end": {
          "column": 91,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
              868,
              870
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
                "type": "JSXFragment",
                "children": [],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "range": [
                    906,
                    909
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 42
                    },
                    "start": {
                      "column": 42,
                      "line": 42
                    }
                  }
                },
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "range": [
                    904,
                    906
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 42
                    },
                    "start": {
                      "column": 40,
                      "line": 42
                    }
                  }
                },
                "range": [
                  904,
                  909
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 42
                  },
                  "start": {
                    "column": 40,
                    "line": 42
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
                    909,
                    919
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "range": [
                      910,
                      916
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 42
                      },
                      "start": {
                        "column": 46,
                        "line": 42
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 42
                    },
                    "start": {
                      "column": 45,
                      "line": 42
                    }
                  }
                },
                "range": [
                  909,
                  919
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 42
                  },
                  "start": {
                    "column": 45,
                    "line": 42
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
                    919,
                    936
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "range": [
                      920,
                      933
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 42
                      },
                      "start": {
                        "column": 56,
                        "line": 42
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 42
                    },
                    "start": {
                      "column": 55,
                      "line": 42
                    }
                  }
                },
                "range": [
                  919,
                  936
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 42
                  },
                  "start": {
                    "column": 55,
                    "line": 42
                  }
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SingleChildComp",
                "range": [
                  938,
                  953
                ],
                "loc": {
                  "end": {
                    "column": 89,
                    "line": 42
                  },
                  "start": {
                    "column": 74,
                    "line": 42
                  }
                }
              },
              "range": [
                936,
                954
              ],
              "loc": {
                "end": {
                  "column": 90,
                  "line": 42
                },
                "start": {
                  "column": 72,
                  "line": 42
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
                      890,
                      891
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 42
                      },
                      "start": {
                        "column": 26,
                        "line": 42
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
                        893,
                        895
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 42
                        },
                        "start": {
                          "column": 29,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      892,
                      896
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 42
                      },
                      "start": {
                        "column": 28,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    890,
                    896
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 42
                    },
                    "start": {
                      "column": 26,
                      "line": 42
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "range": [
                      897,
                      898
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 42
                      },
                      "start": {
                        "column": 33,
                        "line": 42
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      899,
                      903
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 42
                      },
                      "start": {
                        "column": 35,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    897,
                    903
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 42
                    },
                    "start": {
                      "column": 33,
                      "line": 42
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "SingleChildComp",
                "range": [
                  874,
                  889
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 42
                  },
                  "start": {
                    "column": 10,
                    "line": 42
                  }
                }
              },
              "selfClosing": false,
              "range": [
                873,
                904
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 42
                },
                "start": {
                  "column": 9,
                  "line": 42
                }
              }
            },
            "range": [
              873,
              954
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 42
              },
              "start": {
                "column": 9,
                "line": 42
              }
            }
          },
          "range": [
            868,
            954
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 42
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
        864,
        955
      ],
      "loc": {
        "end": {
          "column": 91,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 91,
      "line": 42
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
