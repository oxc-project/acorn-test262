__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    44,
    298
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
          81,
          88
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 2
          },
          "start": {
            "column": 37,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            51,
            56
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              51,
              56
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 2
              },
              "start": {
                "column": 7,
                "line": 2
              }
            }
          },
          "loc": {
            "end": {
              "column": 12,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "range": [
              60,
              73
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 2
              },
              "start": {
                "column": 16,
                "line": 2
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentType",
            "optional": false,
            "range": [
              60,
              73
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 2
              },
              "start": {
                "column": 16,
                "line": 2
              }
            }
          },
          "range": [
            60,
            73
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 2
            },
            "start": {
              "column": 16,
              "line": 2
            }
          }
        }
      ],
      "range": [
        44,
        89
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "Elem",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 54,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              },
              "range": [
                109,
                145
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    124,
                    145
                  ],
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "someKey",
                            "optional": false,
                            "range": [
                              127,
                              134
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 4
                              },
                              "start": {
                                "column": 36,
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
                                "column": 51,
                                "line": 4
                              },
                              "start": {
                                "column": 43,
                                "line": 4
                              }
                            },
                            "range": [
                              134,
                              142
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                136,
                                142
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 4
                                },
                                "start": {
                                  "column": 45,
                                  "line": 4
                                }
                              }
                            }
                          },
                          "range": [
                            127,
                            142
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 4
                            },
                            "start": {
                              "column": 36,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        125,
                        144
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 4
                        },
                        "start": {
                          "column": 34,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 4
                    },
                    "start": {
                      "column": 33,
                      "line": 4
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "range": [
                    111,
                    124
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 4
                    },
                    "start": {
                      "column": 20,
                      "line": 4
                    }
                  }
                },
                "range": [
                  111,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 54,
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
              105,
              145
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            105,
            145
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 4
            },
            "start": {
              "column": 14,
              "line": 4
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        91,
        146
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "bad",
            "optional": false,
            "range": [
              154,
              157
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
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
                160,
                168
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem",
                "range": [
                  161,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 6
                  },
                  "start": {
                    "column": 13,
                    "line": 6
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 20,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              }
            },
            "range": [
              160,
              168
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 6
              },
              "start": {
                "column": 12,
                "line": 6
              }
            }
          },
          "range": [
            154,
            168
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        148,
        169
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 6
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
            "name": "good",
            "optional": false,
            "range": [
              177,
              181
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
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
                184,
                205
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "someKey",
                    "range": [
                      190,
                      197
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 8
                      },
                      "start": {
                        "column": 19,
                        "line": 8
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"ok\"",
                    "value": "ok",
                    "range": [
                      198,
                      202
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 8
                      },
                      "start": {
                        "column": 27,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    190,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 8
                    },
                    "start": {
                      "column": 19,
                      "line": 8
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem",
                "range": [
                  185,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 8
                  },
                  "start": {
                    "column": 14,
                    "line": 8
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              }
            },
            "range": [
              184,
              205
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 8
              },
              "start": {
                "column": 13,
                "line": 8
              }
            }
          },
          "range": [
            177,
            205
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        171,
        206
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 8
        },
        "start": {
          "column": 0,
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
            "name": "Elem2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 52,
                  "line": 10
                },
                "start": {
                  "column": 19,
                  "line": 10
                }
              },
              "range": [
                227,
                260
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    242,
                    260
                  ],
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "opt",
                            "optional": false,
                            "range": [
                              245,
                              248
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 10
                              },
                              "start": {
                                "column": 37,
                                "line": 10
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
                                "column": 49,
                                "line": 10
                              },
                              "start": {
                                "column": 41,
                                "line": 10
                              }
                            },
                            "range": [
                              249,
                              257
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                251,
                                257
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
                          },
                          "range": [
                            245,
                            257
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 10
                            },
                            "start": {
                              "column": 37,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        243,
                        259
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 10
                        },
                        "start": {
                          "column": 35,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 10
                    },
                    "start": {
                      "column": 34,
                      "line": 10
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "range": [
                    229,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 10
                    },
                    "start": {
                      "column": 21,
                      "line": 10
                    }
                  }
                },
                "range": [
                  229,
                  260
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 10
                  },
                  "start": {
                    "column": 21,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              222,
              260
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 10
              },
              "start": {
                "column": 14,
                "line": 10
              }
            }
          },
          "init": null,
          "range": [
            222,
            260
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 10
            },
            "start": {
              "column": 14,
              "line": 10
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        208,
        261
      ],
      "loc": {
        "end": {
          "column": 53,
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
            "name": "alsoOk",
            "optional": false,
            "range": [
              268,
              274
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [
              {
                "type": "JSXText",
                "range": [
                  284,
                  288
                ],
                "raw": "text",
                "value": "text",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 11
                  },
                  "start": {
                    "column": 22,
                    "line": 11
                  }
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem2",
                "range": [
                  290,
                  295
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 11
                  },
                  "start": {
                    "column": 28,
                    "line": 11
                  }
                }
              },
              "range": [
                288,
                296
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 11
                },
                "start": {
                  "column": 26,
                  "line": 11
                }
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem2",
                "range": [
                  278,
                  283
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
              "selfClosing": false,
              "range": [
                277,
                284
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              }
            },
            "range": [
              277,
              296
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 11
              },
              "start": {
                "column": 15,
                "line": 11
              }
            }
          },
          "range": [
            268,
            296
          ],
          "loc": {
            "end": {
              "column": 34,
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
      "kind": "const",
      "range": [
        262,
        297
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
