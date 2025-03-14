__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    697
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
                "type": "JSXText",
                "range": [
                  411,
                  420
                ],
                "raw": "\n        ",
                "value": "\n        ",
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 26
                  },
                  "start": {
                    "column": 24,
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
                    420,
                    430
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "range": [
                      421,
                      427
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 26
                      },
                      "start": {
                        "column": 9,
                        "line": 26
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                },
                "range": [
                  420,
                  430
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  430,
                  439
                ],
                "raw": "\n        ",
                "value": "\n        ",
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 27
                  },
                  "start": {
                    "column": 18,
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
                    439,
                    456
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "range": [
                      440,
                      453
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 27
                      },
                      "start": {
                        "column": 9,
                        "line": 27
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                "range": [
                  439,
                  456
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  456,
                  461
                ],
                "raw": "\n    ",
                "value": "\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 28
                  },
                  "start": {
                    "column": 25,
                    "line": 27
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
                  463,
                  467
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 28
                  },
                  "start": {
                    "column": 6,
                    "line": 28
                  }
                }
              },
              "range": [
                461,
                468
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
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
                      397,
                      398
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
                        400,
                        402
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
                      399,
                      403
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
                    397,
                    403
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
                      404,
                      405
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
                      406,
                      410
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
                    404,
                    410
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
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  392,
                  396
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
                391,
                411
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "range": [
              391,
              468
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "range": [
            382,
            468
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 28
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
        469
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 28
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
              475,
              477
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
                  504,
                  529
                ],
                "raw": "\n     \n    \n    \n        ",
                "value": "\n     \n    \n    \n        ",
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 35
                  },
                  "start": {
                    "column": 24,
                    "line": 31
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
                    529,
                    539
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "range": [
                      530,
                      536
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 35
                      },
                      "start": {
                        "column": 9,
                        "line": 35
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                },
                "range": [
                  529,
                  539
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 35
                  },
                  "start": {
                    "column": 8,
                    "line": 35
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  539,
                  548
                ],
                "raw": "\n        ",
                "value": "\n        ",
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 36
                  },
                  "start": {
                    "column": 18,
                    "line": 35
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
                    548,
                    565
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "range": [
                      549,
                      562
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 36
                      },
                      "start": {
                        "column": 9,
                        "line": 36
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                },
                "range": [
                  548,
                  565
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 36
                  },
                  "start": {
                    "column": 8,
                    "line": 36
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  565,
                  570
                ],
                "raw": "\n    ",
                "value": "\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 37
                  },
                  "start": {
                    "column": 25,
                    "line": 36
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
                  572,
                  576
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 37
                  },
                  "start": {
                    "column": 6,
                    "line": 37
                  }
                }
              },
              "range": [
                570,
                577
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
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
                      490,
                      491
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
                        493,
                        495
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
                      492,
                      496
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
                    490,
                    496
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
                      497,
                      498
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
                      499,
                      503
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
                    497,
                    503
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
                  485,
                  489
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
                484,
                504
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
              484,
              577
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          "range": [
            475,
            577
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 37
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
        471,
        578
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 37
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
              584,
              586
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
                "type": "JSXElement",
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "range": [
                    609,
                    619
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "range": [
                      610,
                      616
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 39
                      },
                      "start": {
                        "column": 30,
                        "line": 39
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 39
                    },
                    "start": {
                      "column": 29,
                      "line": 39
                    }
                  }
                },
                "range": [
                  609,
                  619
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 39
                  },
                  "start": {
                    "column": 29,
                    "line": 39
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  619,
                  622
                ],
                "raw": "  \n",
                "value": "  \n",
                "loc": {
                  "end": {
                    "column": 0,
                    "line": 40
                  },
                  "start": {
                    "column": 39,
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
                    622,
                    639
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "range": [
                      623,
                      636
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 40
                      },
                      "start": {
                        "column": 1,
                        "line": 40
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 40
                    },
                    "start": {
                      "column": 0,
                      "line": 40
                    }
                  }
                },
                "range": [
                  622,
                  639
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 40
                  },
                  "start": {
                    "column": 0,
                    "line": 40
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  639,
                  640
                ],
                "raw": "\n",
                "value": "\n",
                "loc": {
                  "end": {
                    "column": 0,
                    "line": 41
                  },
                  "start": {
                    "column": 17,
                    "line": 40
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
                  642,
                  646
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 41
                  },
                  "start": {
                    "column": 2,
                    "line": 41
                  }
                }
              },
              "range": [
                640,
                647
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 41
                },
                "start": {
                  "column": 0,
                  "line": 41
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
                      595,
                      596
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 39
                      },
                      "start": {
                        "column": 15,
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
                        598,
                        600
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 39
                        },
                        "start": {
                          "column": 18,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      597,
                      601
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 39
                      },
                      "start": {
                        "column": 17,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    595,
                    601
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 39
                    },
                    "start": {
                      "column": 15,
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
                      602,
                      603
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 39
                      },
                      "start": {
                        "column": 22,
                        "line": 39
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      604,
                      608
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 39
                      },
                      "start": {
                        "column": 24,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    602,
                    608
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 39
                    },
                    "start": {
                      "column": 22,
                      "line": 39
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  590,
                  594
                ],
                "loc": {
                  "end": {
                    "column": 14,
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
                589,
                609
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 39
                },
                "start": {
                  "column": 9,
                  "line": 39
                }
              }
            },
            "range": [
              589,
              647
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 41
              },
              "start": {
                "column": 9,
                "line": 39
              }
            }
          },
          "range": [
            584,
            647
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 41
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
        580,
        648
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 41
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
            "name": "k4",
            "optional": false,
            "range": [
              654,
              656
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [
              {
                "type": "JSXElement",
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "range": [
                    679,
                    689
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "range": [
                      680,
                      686
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 43
                      },
                      "start": {
                        "column": 30,
                        "line": 43
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 43
                    },
                    "start": {
                      "column": 29,
                      "line": 43
                    }
                  }
                },
                "range": [
                  679,
                  689
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 43
                  },
                  "start": {
                    "column": 29,
                    "line": 43
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
                  691,
                  695
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 43
                  },
                  "start": {
                    "column": 41,
                    "line": 43
                  }
                }
              },
              "range": [
                689,
                696
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 43
                },
                "start": {
                  "column": 39,
                  "line": 43
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
                      665,
                      666
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 43
                      },
                      "start": {
                        "column": 15,
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
                        668,
                        670
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 43
                        },
                        "start": {
                          "column": 18,
                          "line": 43
                        }
                      }
                    },
                    "range": [
                      667,
                      671
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 43
                      },
                      "start": {
                        "column": 17,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    665,
                    671
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 43
                    },
                    "start": {
                      "column": 15,
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
                      672,
                      673
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 43
                      },
                      "start": {
                        "column": 22,
                        "line": 43
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      674,
                      678
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 43
                      },
                      "start": {
                        "column": 24,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    672,
                    678
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 43
                    },
                    "start": {
                      "column": 22,
                      "line": 43
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  660,
                  664
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 43
                  },
                  "start": {
                    "column": 10,
                    "line": 43
                  }
                }
              },
              "selfClosing": false,
              "range": [
                659,
                679
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 43
                },
                "start": {
                  "column": 9,
                  "line": 43
                }
              }
            },
            "range": [
              659,
              696
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 43
              },
              "start": {
                "column": 9,
                "line": 43
              }
            }
          },
          "range": [
            654,
            696
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 43
            },
            "start": {
              "column": 4,
              "line": 43
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        650,
        697
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 47,
      "line": 43
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
