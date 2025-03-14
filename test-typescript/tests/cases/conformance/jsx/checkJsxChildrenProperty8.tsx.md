__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    660
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
          145
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
                  "column": 61,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              },
              "range": [
                93,
                142
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
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            119,
                            125
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 6
                            },
                            "start": {
                              "column": 38,
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
                                128,
                                131
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 6
                                },
                                "start": {
                                  "column": 47,
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
                                132,
                                139
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 6
                                },
                                "start": {
                                  "column": 51,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              128,
                              139
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 6
                              },
                              "start": {
                                "column": 47,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            128,
                            139
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 6
                            },
                            "start": {
                              "column": 47,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "range": [
                        119,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 6
                        },
                        "start": {
                          "column": 38,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      118,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 6
                      },
                      "start": {
                        "column": 37,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  95,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 61,
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
              143
            ],
            "loc": {
              "end": {
                "column": 62,
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
        145
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
          194,
          256
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
                200,
                206
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
                206,
                254
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
                            232,
                            241
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
                            243,
                            246
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
                          241,
                          247
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
                            228,
                            231
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
                          227,
                          232
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
                        227,
                        247
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
                      219,
                      248
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
                  209,
                  254
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
              200,
              254
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
          153,
          159
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
            168,
            173
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
            174,
            183
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
          168,
          183
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
          183,
          193
        ],
        "params": [
          {
            "type": "TSAnyKeyword",
            "range": [
              184,
              187
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
              189,
              192
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
        147,
        256
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
                    306,
                    325
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
                    327,
                    329
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
                  325,
                  330
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
                    303,
                    305
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
                  302,
                  306
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
                302,
                330
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
              295,
              331
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
          289,
          333
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
          267,
          280
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
              282,
              287
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                284,
                287
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
            281,
            287
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
        258,
        333
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
                        377,
                        378
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
                        379,
                        380
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
                      377,
                      380
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
                    376,
                    381
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
                    383,
                    386
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
                  381,
                  387
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
                    372,
                    375
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
                  371,
                  376
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
                371,
                387
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
              364,
              388
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
          358,
          390
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
          344,
          348
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
              350,
              356
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prop",
                "optional": false,
                "range": [
                  352,
                  356
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
                352,
                356
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
            349,
            356
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
        335,
        390
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
              402,
              404
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
                "type": "JSXElement",
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "range": [
                    427,
                    437
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "range": [
                      428,
                      434
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 24
                      },
                      "start": {
                        "column": 30,
                        "line": 24
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 24
                    },
                    "start": {
                      "column": 29,
                      "line": 24
                    }
                  }
                },
                "range": [
                  427,
                  437
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 24
                  },
                  "start": {
                    "column": 29,
                    "line": 24
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  437,
                  439
                ],
                "raw": "  ",
                "value": "  ",
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 24
                  },
                  "start": {
                    "column": 39,
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
                        "column": 55,
                        "line": 24
                      },
                      "start": {
                        "column": 42,
                        "line": 24
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 24
                    },
                    "start": {
                      "column": 41,
                      "line": 24
                    }
                  }
                },
                "range": [
                  439,
                  456
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 24
                  },
                  "start": {
                    "column": 41,
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
                  458,
                  462
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 24
                  },
                  "start": {
                    "column": 60,
                    "line": 24
                  }
                }
              },
              "range": [
                456,
                463
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 24
                },
                "start": {
                  "column": 58,
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
                      413,
                      414
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
                        416,
                        418
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
                      415,
                      419
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
                    413,
                    419
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
                      420,
                      421
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
                      422,
                      426
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
                    420,
                    426
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
                  408,
                  412
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
                407,
                427
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
              407,
              463
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 24
              }
            }
          },
          "range": [
            402,
            463
          ],
          "loc": {
            "end": {
              "column": 65,
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
        398,
        464
      ],
      "loc": {
        "end": {
          "column": 66,
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
              469,
              471
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
                "type": "JSXElement",
                "children": [],
                "closingElement": null,
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "range": [
                    494,
                    504
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "range": [
                      495,
                      501
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 25
                      },
                      "start": {
                        "column": 30,
                        "line": 25
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 25
                    },
                    "start": {
                      "column": 29,
                      "line": 25
                    }
                  }
                },
                "range": [
                  494,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 25
                  },
                  "start": {
                    "column": 29,
                    "line": 25
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  504,
                  509
                ],
                "raw": "\n    ",
                "value": "\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 26
                  },
                  "start": {
                    "column": 39,
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
                    509,
                    526
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "range": [
                      510,
                      523
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
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
                      "column": 21,
                      "line": 26
                    },
                    "start": {
                      "column": 4,
                      "line": 26
                    }
                  }
                },
                "range": [
                  509,
                  526
                ],
                "loc": {
                  "end": {
                    "column": 21,
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
                  526,
                  528
                ],
                "raw": "  ",
                "value": "  ",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 26
                  },
                  "start": {
                    "column": 21,
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
                  530,
                  534
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 26
                  },
                  "start": {
                    "column": 25,
                    "line": 26
                  }
                }
              },
              "range": [
                528,
                535
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 26
                },
                "start": {
                  "column": 23,
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
                      480,
                      481
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
                        483,
                        485
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
                      482,
                      486
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
                    480,
                    486
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
                      487,
                      488
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
                      489,
                      493
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
                    487,
                    493
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
                  475,
                  479
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
                474,
                494
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
              474,
              535
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 26
              },
              "start": {
                "column": 9,
                "line": 25
              }
            }
          },
          "range": [
            469,
            535
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 26
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
        465,
        536
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 26
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
              541,
              543
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [
              {
                "type": "JSXText",
                "range": [
                  566,
                  570
                ],
                "raw": "    ",
                "value": "    ",
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 27
                  },
                  "start": {
                    "column": 29,
                    "line": 27
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
                    570,
                    580
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "range": [
                      571,
                      577
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 27
                      },
                      "start": {
                        "column": 34,
                        "line": 27
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 27
                    },
                    "start": {
                      "column": 33,
                      "line": 27
                    }
                  }
                },
                "range": [
                  570,
                  580
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 27
                  },
                  "start": {
                    "column": 33,
                    "line": 27
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  580,
                  585
                ],
                "raw": "\n    ",
                "value": "\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 28
                  },
                  "start": {
                    "column": 43,
                    "line": 27
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
                    585,
                    602
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "AnotherButton",
                    "range": [
                      586,
                      599
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 28
                      },
                      "start": {
                        "column": 5,
                        "line": 28
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 28
                    },
                    "start": {
                      "column": 4,
                      "line": 28
                    }
                  }
                },
                "range": [
                  585,
                  602
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 28
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
                  604,
                  608
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 28
                  },
                  "start": {
                    "column": 23,
                    "line": 28
                  }
                }
              },
              "range": [
                602,
                609
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 28
                },
                "start": {
                  "column": 21,
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
                      552,
                      553
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 27
                      },
                      "start": {
                        "column": 15,
                        "line": 27
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
                        555,
                        557
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 27
                        },
                        "start": {
                          "column": 18,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      554,
                      558
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 27
                      },
                      "start": {
                        "column": 17,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    552,
                    558
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 27
                    },
                    "start": {
                      "column": 15,
                      "line": 27
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "range": [
                      559,
                      560
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 27
                      },
                      "start": {
                        "column": 22,
                        "line": 27
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      561,
                      565
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 27
                      },
                      "start": {
                        "column": 24,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    559,
                    565
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 27
                    },
                    "start": {
                      "column": 22,
                      "line": 27
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  547,
                  551
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 27
                  },
                  "start": {
                    "column": 10,
                    "line": 27
                  }
                }
              },
              "selfClosing": false,
              "range": [
                546,
                566
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 27
                },
                "start": {
                  "column": 9,
                  "line": 27
                }
              }
            },
            "range": [
              546,
              609
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 28
              },
              "start": {
                "column": 9,
                "line": 27
              }
            }
          },
          "range": [
            541,
            609
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        537,
        610
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 27
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
              615,
              617
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
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
                    640,
                    650
                  ],
                  "attributes": [],
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "range": [
                      641,
                      647
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 29
                      },
                      "start": {
                        "column": 30,
                        "line": 29
                      }
                    }
                  },
                  "selfClosing": true,
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 29
                    },
                    "start": {
                      "column": 29,
                      "line": 29
                    }
                  }
                },
                "range": [
                  640,
                  650
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 29
                  },
                  "start": {
                    "column": 29,
                    "line": 29
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  650,
                  652
                ],
                "raw": "  ",
                "value": "  ",
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 29
                  },
                  "start": {
                    "column": 39,
                    "line": 29
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
                  654,
                  658
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 29
                  },
                  "start": {
                    "column": 43,
                    "line": 29
                  }
                }
              },
              "range": [
                652,
                659
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 29
                },
                "start": {
                  "column": 41,
                  "line": 29
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
                      626,
                      627
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 29
                      },
                      "start": {
                        "column": 15,
                        "line": 29
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
                        629,
                        631
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 29
                        },
                        "start": {
                          "column": 18,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      628,
                      632
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 29
                      },
                      "start": {
                        "column": 17,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    626,
                    632
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 29
                    },
                    "start": {
                      "column": 15,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "range": [
                      633,
                      634
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 29
                      },
                      "start": {
                        "column": 22,
                        "line": 29
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      635,
                      639
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 29
                      },
                      "start": {
                        "column": 24,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    633,
                    639
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 29
                    },
                    "start": {
                      "column": 22,
                      "line": 29
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "range": [
                  621,
                  625
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 29
                  },
                  "start": {
                    "column": 10,
                    "line": 29
                  }
                }
              },
              "selfClosing": false,
              "range": [
                620,
                640
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 29
                },
                "start": {
                  "column": 9,
                  "line": 29
                }
              }
            },
            "range": [
              620,
              659
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 29
              },
              "start": {
                "column": 9,
                "line": 29
              }
            }
          },
          "range": [
            615,
            659
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        611,
        660
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 49,
      "line": 29
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
