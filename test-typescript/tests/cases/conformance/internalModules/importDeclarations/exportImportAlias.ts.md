__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    26,
    1149
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              42,
              70
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      53,
                      54
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 5
                      },
                      "start": {
                        "column": 15,
                        "line": 5
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "'hello world'",
                    "value": "hello world",
                    "range": [
                      57,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 5
                      },
                      "start": {
                        "column": 19,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    53,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                49,
                70
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 32,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              75,
              161
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  94,
                  161
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "range": [
                        104,
                        115
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        115,
                        155
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          152,
                          155
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 7
                          },
                          "start": {
                            "column": 56,
                            "line": 7
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 7
                                },
                                "start": {
                                  "column": 28,
                                  "line": 7
                                }
                              },
                              "range": [
                                124,
                                132
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  126,
                                  132
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 7
                                  }
                                }
                              }
                            },
                            "range": [
                              123,
                              132
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 7
                              },
                              "start": {
                                "column": 27,
                                "line": 7
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "range": [
                            116,
                            132
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 7
                            },
                            "start": {
                              "column": 20,
                              "line": 7
                            }
                          }
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 7
                                },
                                "start": {
                                  "column": 46,
                                  "line": 7
                                }
                              },
                              "range": [
                                142,
                                150
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  144,
                                  150
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 7
                                  }
                                }
                              }
                            },
                            "range": [
                              141,
                              150
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 7
                              },
                              "start": {
                                "column": 45,
                                "line": 7
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "range": [
                            134,
                            150
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 7
                            },
                            "start": {
                              "column": 38,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 7
                        },
                        "start": {
                          "column": 19,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      104,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 23,
                    "line": 6
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "range": [
                  88,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 6
                  },
                  "start": {
                    "column": 17,
                    "line": 6
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                82,
                161
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              166,
              255
            ],
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "range": [
                      192,
                      249
                    ],
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "body": {
                        "type": "TSInterfaceBody",
                        "range": [
                          212,
                          249
                        ],
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "range": [
                                226,
                                230
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 11
                                },
                                "start": {
                                  "column": 12,
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
                                  "column": 24,
                                  "line": 11
                                },
                                "start": {
                                  "column": 16,
                                  "line": 11
                                }
                              },
                              "range": [
                                230,
                                238
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  232,
                                  238
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 11
                                  }
                                }
                              }
                            },
                            "range": [
                              226,
                              239
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 11
                              },
                              "start": {
                                "column": 12,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 12
                          },
                          "start": {
                            "column": 28,
                            "line": 10
                          }
                        }
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Id",
                        "optional": false,
                        "range": [
                          209,
                          211
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 10
                          },
                          "start": {
                            "column": 25,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        199,
                        249
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  182,
                  255
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 20,
                    "line": 9
                  }
                }
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "range": [
                  180,
                  181
                ],
                "decorators": [],
                "name": "B",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 9
                  },
                  "start": {
                    "column": 18,
                    "line": 9
                  }
                }
              },
              "kind": "module",
              "range": [
                173,
                255
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          35,
          257
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          33,
          34
        ],
        "decorators": [],
        "name": "A",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "kind": "module",
      "range": [
        26,
        257
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              274,
              294
            ],
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  288,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 17
                  },
                  "start": {
                    "column": 18,
                    "line": 17
                  }
                }
              },
              "importKind": "value",
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  292,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 17
                  },
                  "start": {
                    "column": 22,
                    "line": 17
                  }
                }
              },
              "range": [
                281,
                294
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 24,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          268,
          296
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 16
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          266,
          267
        ],
        "decorators": [],
        "name": "C",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "kind": "module",
      "range": [
        259,
        296
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 20
                },
                "start": {
                  "column": 5,
                  "line": 20
                }
              },
              "range": [
                303,
                311
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  305,
                  311
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 20
                  },
                  "start": {
                    "column": 7,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              302,
              311
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  314,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 20
                  },
                  "start": {
                    "column": 16,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  316,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 20
                  },
                  "start": {
                    "column": 18,
                    "line": 20
                  }
                }
              },
              "range": [
                314,
                317
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 20
                },
                "start": {
                  "column": 16,
                  "line": 20
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
                318,
                319
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 20
                },
                "start": {
                  "column": 20,
                  "line": 20
                }
              }
            },
            "range": [
              314,
              319
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
          },
          "range": [
            302,
            319
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        298,
        320
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 21
                },
                "start": {
                  "column": 5,
                  "line": 21
                }
              },
              "range": [
                326,
                353
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        330,
                        331
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 21
                        },
                        "start": {
                          "column": 9,
                          "line": 21
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
                          "line": 21
                        },
                        "start": {
                          "column": 10,
                          "line": 21
                        }
                      },
                      "range": [
                        331,
                        339
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          333,
                          339
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 21
                          },
                          "start": {
                            "column": 12,
                            "line": 21
                          }
                        }
                      }
                    },
                    "range": [
                      330,
                      340
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 21
                      },
                      "start": {
                        "column": 9,
                        "line": 21
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        341,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 21
                        },
                        "start": {
                          "column": 20,
                          "line": 21
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
                          "column": 29,
                          "line": 21
                        },
                        "start": {
                          "column": 21,
                          "line": 21
                        }
                      },
                      "range": [
                        342,
                        350
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          344,
                          350
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 21
                          },
                          "start": {
                            "column": 23,
                            "line": 21
                          }
                        }
                      }
                    },
                    "range": [
                      341,
                      351
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 21
                      },
                      "start": {
                        "column": 20,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  328,
                  353
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 21
                  },
                  "start": {
                    "column": 7,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              325,
              353
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  370,
                  371
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 21
                  },
                  "start": {
                    "column": 49,
                    "line": 21
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  373,
                  374
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 21
                  },
                  "start": {
                    "column": 52,
                    "line": 21
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    360,
                    361
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 21
                    },
                    "start": {
                      "column": 39,
                      "line": 21
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    362,
                    363
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 21
                    },
                    "start": {
                      "column": 41,
                      "line": 21
                    }
                  }
                },
                "range": [
                  360,
                  363
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 21
                  },
                  "start": {
                    "column": 39,
                    "line": 21
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "range": [
                  364,
                  369
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 21
                  },
                  "start": {
                    "column": 43,
                    "line": 21
                  }
                }
              },
              "range": [
                360,
                369
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 21
                },
                "start": {
                  "column": 39,
                  "line": 21
                }
              }
            },
            "range": [
              356,
              375
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 21
              },
              "start": {
                "column": 35,
                "line": 21
              }
            }
          },
          "range": [
            325,
            375
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        321,
        376
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 22
                },
                "start": {
                  "column": 5,
                  "line": 22
                }
              },
              "range": [
                382,
                400
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "range": [
                        386,
                        390
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 22
                        },
                        "start": {
                          "column": 9,
                          "line": 22
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
                          "column": 21,
                          "line": 22
                        },
                        "start": {
                          "column": 13,
                          "line": 22
                        }
                      },
                      "range": [
                        390,
                        398
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          392,
                          398
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 22
                          },
                          "start": {
                            "column": 15,
                            "line": 22
                          }
                        }
                      }
                    },
                    "range": [
                      386,
                      398
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 22
                      },
                      "start": {
                        "column": 9,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  384,
                  400
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 22
                  },
                  "start": {
                    "column": 7,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              381,
              400
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": null,
          "range": [
            381,
            400
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        377,
        401
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 23
                },
                "start": {
                  "column": 5,
                  "line": 23
                }
              },
              "range": [
                407,
                417
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          409,
                          410
                        ],
                        "loc": {
                          "end": {
                            "column": 8,
                            "line": 23
                          },
                          "start": {
                            "column": 7,
                            "line": 23
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          411,
                          412
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 23
                          },
                          "start": {
                            "column": 9,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        409,
                        412
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
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        413,
                        414
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 23
                        },
                        "start": {
                          "column": 11,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      409,
                      414
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 23
                      },
                      "start": {
                        "column": 7,
                        "line": 23
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Id",
                    "optional": false,
                    "range": [
                      415,
                      417
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 23
                      },
                      "start": {
                        "column": 13,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    409,
                    417
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 23
                    },
                    "start": {
                      "column": 7,
                      "line": 23
                    }
                  }
                },
                "range": [
                  409,
                  417
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 23
                  },
                  "start": {
                    "column": 7,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              406,
              417
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": null,
          "range": [
            406,
            417
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        402,
        418
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              435,
              481
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        472,
                        474
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 27
                        },
                        "start": {
                          "column": 15,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      465,
                      475
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 27
                      }
                    }
                  }
                ],
                "range": [
                  455,
                  481
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 28
                  },
                  "start": {
                    "column": 24,
                    "line": 26
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "range": [
                  451,
                  452
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 26
                  },
                  "start": {
                    "column": 20,
                    "line": 26
                  }
                }
              },
              "params": [],
              "range": [
                442,
                481
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 28
                },
                "start": {
                  "column": 11,
                  "line": 26
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              487,
              613
            ],
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "range": [
                      513,
                      607
                    ],
                    "attributes": [],
                    "declaration": {
                      "type": "ClassDeclaration",
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "range": [
                          532,
                          607
                        ],
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "range": [
                                546,
                                557
                              ],
                              "decorators": [],
                              "name": "constructor",
                              "optional": false,
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 32
                                },
                                "start": {
                                  "column": 12,
                                  "line": 32
                                }
                              }
                            },
                            "kind": "constructor",
                            "optional": false,
                            "override": false,
                            "static": false,
                            "value": {
                              "type": "FunctionExpression",
                              "range": [
                                557,
                                597
                              ],
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "range": [
                                  594,
                                  597
                                ],
                                "loc": {
                                  "end": {
                                    "column": 63,
                                    "line": 32
                                  },
                                  "start": {
                                    "column": 60,
                                    "line": 32
                                  }
                                }
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "TSParameterProperty",
                                  "accessibility": "public",
                                  "decorators": [],
                                  "override": false,
                                  "parameter": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "loc": {
                                        "end": {
                                          "column": 40,
                                          "line": 32
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 32
                                        }
                                      },
                                      "range": [
                                        566,
                                        574
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "range": [
                                          568,
                                          574
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 40,
                                            "line": 32
                                          },
                                          "start": {
                                            "column": 34,
                                            "line": 32
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      565,
                                      574
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 40,
                                        "line": 32
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 32
                                      }
                                    }
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "range": [
                                    558,
                                    574
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 32
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 32
                                    }
                                  }
                                },
                                {
                                  "type": "TSParameterProperty",
                                  "accessibility": "public",
                                  "decorators": [],
                                  "override": false,
                                  "parameter": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "loc": {
                                        "end": {
                                          "column": 58,
                                          "line": 32
                                        },
                                        "start": {
                                          "column": 50,
                                          "line": 32
                                        }
                                      },
                                      "range": [
                                        584,
                                        592
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "range": [
                                          586,
                                          592
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 58,
                                            "line": 32
                                          },
                                          "start": {
                                            "column": 52,
                                            "line": 32
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      583,
                                      592
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 32
                                      },
                                      "start": {
                                        "column": 49,
                                        "line": 32
                                      }
                                    }
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "range": [
                                    576,
                                    592
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 58,
                                      "line": 32
                                    },
                                    "start": {
                                      "column": 42,
                                      "line": 32
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 63,
                                  "line": 32
                                },
                                "start": {
                                  "column": 23,
                                  "line": 32
                                }
                              }
                            },
                            "range": [
                              546,
                              597
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 32
                              },
                              "start": {
                                "column": 12,
                                "line": 32
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 33
                          },
                          "start": {
                            "column": 27,
                            "line": 31
                          }
                        }
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "range": [
                          526,
                          531
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 31
                          },
                          "start": {
                            "column": 21,
                            "line": 31
                          }
                        }
                      },
                      "implements": [],
                      "superClass": null,
                      "range": [
                        520,
                        607
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 33
                        },
                        "start": {
                          "column": 15,
                          "line": 31
                        }
                      }
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  503,
                  613
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 34
                  },
                  "start": {
                    "column": 20,
                    "line": 30
                  }
                }
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "range": [
                  501,
                  502
                ],
                "decorators": [],
                "name": "Y",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 30
                  },
                  "start": {
                    "column": 18,
                    "line": 30
                  }
                }
              },
              "kind": "module",
              "range": [
                494,
                613
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 34
                },
                "start": {
                  "column": 11,
                  "line": 30
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "range": [
          429,
          615
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 9,
            "line": 25
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          427,
          428
        ],
        "decorators": [],
        "name": "X",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 25
          },
          "start": {
            "column": 7,
            "line": 25
          }
        }
      },
      "kind": "module",
      "range": [
        420,
        615
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              669,
              691
            ],
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  683,
                  684
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 40
                  },
                  "start": {
                    "column": 18,
                    "line": 40
                  }
                }
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    687,
                    688
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 40
                    },
                    "start": {
                      "column": 22,
                      "line": 40
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "range": [
                    689,
                    690
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 40
                    },
                    "start": {
                      "column": 24,
                      "line": 40
                    }
                  }
                },
                "range": [
                  687,
                  690
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 40
                  },
                  "start": {
                    "column": 22,
                    "line": 40
                  }
                }
              },
              "range": [
                676,
                691
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 40
                },
                "start": {
                  "column": 11,
                  "line": 40
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 26,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "range": [
          626,
          693
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 9,
            "line": 37
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          624,
          625
        ],
        "decorators": [],
        "name": "Z",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 37
          },
          "start": {
            "column": 7,
            "line": 37
          }
        }
      },
      "kind": "module",
      "range": [
        617,
        693
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 37
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 43
                },
                "start": {
                  "column": 5,
                  "line": 43
                }
              },
              "range": [
                700,
                708
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  702,
                  708
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 43
                  },
                  "start": {
                    "column": 7,
                    "line": 43
                  }
                }
              }
            },
            "range": [
              699,
              708
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "range": [
                  711,
                  712
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 43
                  },
                  "start": {
                    "column": 16,
                    "line": 43
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  713,
                  714
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 43
                  },
                  "start": {
                    "column": 18,
                    "line": 43
                  }
                }
              },
              "range": [
                711,
                714
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 43
                },
                "start": {
                  "column": 16,
                  "line": 43
                }
              }
            },
            "optional": false,
            "range": [
              711,
              716
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 43
              },
              "start": {
                "column": 16,
                "line": 43
              }
            }
          },
          "range": [
            699,
            716
          ],
          "loc": {
            "end": {
              "column": 21,
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
      "kind": "var",
      "range": [
        695,
        717
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 44
                },
                "start": {
                  "column": 5,
                  "line": 44
                }
              },
              "range": [
                723,
                750
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        727,
                        728
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 44
                        },
                        "start": {
                          "column": 9,
                          "line": 44
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
                          "line": 44
                        },
                        "start": {
                          "column": 10,
                          "line": 44
                        }
                      },
                      "range": [
                        728,
                        736
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          730,
                          736
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 44
                          },
                          "start": {
                            "column": 12,
                            "line": 44
                          }
                        }
                      }
                    },
                    "range": [
                      727,
                      737
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 44
                      },
                      "start": {
                        "column": 9,
                        "line": 44
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        738,
                        739
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 44
                        },
                        "start": {
                          "column": 20,
                          "line": 44
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
                          "column": 29,
                          "line": 44
                        },
                        "start": {
                          "column": 21,
                          "line": 44
                        }
                      },
                      "range": [
                        739,
                        747
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          741,
                          747
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 44
                          },
                          "start": {
                            "column": 23,
                            "line": 44
                          }
                        }
                      }
                    },
                    "range": [
                      738,
                      748
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 44
                      },
                      "start": {
                        "column": 20,
                        "line": 44
                      }
                    }
                  }
                ],
                "range": [
                  725,
                  750
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 44
                  },
                  "start": {
                    "column": 7,
                    "line": 44
                  }
                }
              }
            },
            "range": [
              722,
              750
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  767,
                  768
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 44
                  },
                  "start": {
                    "column": 49,
                    "line": 44
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  770,
                  771
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 44
                  },
                  "start": {
                    "column": 52,
                    "line": 44
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "range": [
                    757,
                    758
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 44
                    },
                    "start": {
                      "column": 39,
                      "line": 44
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    759,
                    760
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 44
                    },
                    "start": {
                      "column": 41,
                      "line": 44
                    }
                  }
                },
                "range": [
                  757,
                  760
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 44
                  },
                  "start": {
                    "column": 39,
                    "line": 44
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "range": [
                  761,
                  766
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 44
                  },
                  "start": {
                    "column": 43,
                    "line": 44
                  }
                }
              },
              "range": [
                757,
                766
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 44
                },
                "start": {
                  "column": 39,
                  "line": 44
                }
              }
            },
            "range": [
              753,
              772
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 44
              },
              "start": {
                "column": 35,
                "line": 44
              }
            }
          },
          "range": [
            722,
            772
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 44
            },
            "start": {
              "column": 4,
              "line": 44
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        718,
        773
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              790,
              857
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  805,
                  857
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "range": [
                        815,
                        826
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 48
                        },
                        "start": {
                          "column": 8,
                          "line": 48
                        }
                      }
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        826,
                        851
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          848,
                          851
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 48
                          },
                          "start": {
                            "column": 41,
                            "line": 48
                          }
                        }
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 48
                                },
                                "start": {
                                  "column": 31,
                                  "line": 48
                                }
                              },
                              "range": [
                                838,
                                846
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  840,
                                  846
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 48
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 48
                                  }
                                }
                              }
                            },
                            "range": [
                              834,
                              846
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 48
                              },
                              "start": {
                                "column": 27,
                                "line": 48
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "range": [
                            827,
                            846
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 48
                            },
                            "start": {
                              "column": 20,
                              "line": 48
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 48
                        },
                        "start": {
                          "column": 19,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      815,
                      851
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 49
                  },
                  "start": {
                    "column": 19,
                    "line": 47
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "L",
                "optional": false,
                "range": [
                  803,
                  804
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 47
                  },
                  "start": {
                    "column": 17,
                    "line": 47
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                797,
                857
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 49
                },
                "start": {
                  "column": 11,
                  "line": 47
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              863,
              1002
            ],
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "range": [
                      889,
                      907
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
                            "name": "y",
                            "optional": false,
                            "range": [
                              900,
                              901
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 52
                              },
                              "start": {
                                "column": 19,
                                "line": 52
                              }
                            }
                          },
                          "init": {
                            "type": "Literal",
                            "raw": "12",
                            "value": 12,
                            "range": [
                              904,
                              906
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 52
                              },
                              "start": {
                                "column": 23,
                                "line": 52
                              }
                            }
                          },
                          "range": [
                            900,
                            906
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 52
                            },
                            "start": {
                              "column": 19,
                              "line": 52
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var",
                      "range": [
                        896,
                        907
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 52
                        },
                        "start": {
                          "column": 15,
                          "line": 52
                        }
                      }
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 52
                      },
                      "start": {
                        "column": 8,
                        "line": 52
                      }
                    }
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "range": [
                      916,
                      996
                    ],
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "body": {
                        "type": "TSInterfaceBody",
                        "range": [
                          939,
                          996
                        ],
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                953,
                                954
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 54
                                },
                                "start": {
                                  "column": 12,
                                  "line": 54
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
                                  "column": 21,
                                  "line": 54
                                },
                                "start": {
                                  "column": 13,
                                  "line": 54
                                }
                              },
                              "range": [
                                954,
                                962
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  956,
                                  962
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 54
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 54
                                  }
                                }
                              }
                            },
                            "range": [
                              953,
                              963
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 54
                              },
                              "start": {
                                "column": 12,
                                "line": 54
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                976,
                                977
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 55
                                },
                                "start": {
                                  "column": 12,
                                  "line": 55
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
                                  "column": 21,
                                  "line": 55
                                },
                                "start": {
                                  "column": 13,
                                  "line": 55
                                }
                              },
                              "range": [
                                977,
                                985
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  979,
                                  985
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 55
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 55
                                  }
                                }
                              }
                            },
                            "range": [
                              976,
                              986
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 55
                              },
                              "start": {
                                "column": 12,
                                "line": 55
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 56
                          },
                          "start": {
                            "column": 31,
                            "line": 53
                          }
                        }
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "range": [
                          933,
                          938
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 53
                          },
                          "start": {
                            "column": 25,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        923,
                        996
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 56
                        },
                        "start": {
                          "column": 15,
                          "line": 53
                        }
                      }
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 56
                      },
                      "start": {
                        "column": 8,
                        "line": 53
                      }
                    }
                  }
                ],
                "range": [
                  879,
                  1002
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 57
                  },
                  "start": {
                    "column": 20,
                    "line": 51
                  }
                }
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "range": [
                  877,
                  878
                ],
                "decorators": [],
                "name": "L",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 51
                  },
                  "start": {
                    "column": 18,
                    "line": 51
                  }
                }
              },
              "kind": "module",
              "range": [
                870,
                1002
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 57
                },
                "start": {
                  "column": 11,
                  "line": 51
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          }
        ],
        "range": [
          784,
          1004
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 58
          },
          "start": {
            "column": 9,
            "line": 46
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          782,
          783
        ],
        "decorators": [],
        "name": "K",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 46
          },
          "start": {
            "column": 7,
            "line": 46
          }
        }
      },
      "kind": "module",
      "range": [
        775,
        1004
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1021,
              1043
            ],
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "range": [
                  1035,
                  1036
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 61
                  },
                  "start": {
                    "column": 18,
                    "line": 61
                  }
                }
              },
              "importKind": "value",
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    1039,
                    1040
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 61
                    },
                    "start": {
                      "column": 22,
                      "line": 61
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "L",
                  "optional": false,
                  "range": [
                    1041,
                    1042
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 61
                    },
                    "start": {
                      "column": 24,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1039,
                  1042
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 61
                  },
                  "start": {
                    "column": 22,
                    "line": 61
                  }
                }
              },
              "range": [
                1028,
                1043
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 61
                },
                "start": {
                  "column": 11,
                  "line": 61
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 26,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          }
        ],
        "range": [
          1015,
          1045
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 62
          },
          "start": {
            "column": 9,
            "line": 60
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1013,
          1014
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 60
          },
          "start": {
            "column": 7,
            "line": 60
          }
        }
      },
      "kind": "module",
      "range": [
        1006,
        1045
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 60
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 64
                },
                "start": {
                  "column": 5,
                  "line": 64
                }
              },
              "range": [
                1052,
                1070
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "range": [
                        1056,
                        1060
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 64
                        },
                        "start": {
                          "column": 9,
                          "line": 64
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
                          "column": 21,
                          "line": 64
                        },
                        "start": {
                          "column": 13,
                          "line": 64
                        }
                      },
                      "range": [
                        1060,
                        1068
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1062,
                          1068
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 64
                          },
                          "start": {
                            "column": 15,
                            "line": 64
                          }
                        }
                      }
                    },
                    "range": [
                      1056,
                      1068
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 64
                      },
                      "start": {
                        "column": 9,
                        "line": 64
                      }
                    }
                  }
                ],
                "range": [
                  1054,
                  1070
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 64
                  },
                  "start": {
                    "column": 7,
                    "line": 64
                  }
                }
              }
            },
            "range": [
              1051,
              1070
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          },
          "init": null,
          "range": [
            1051,
            1070
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 64
            },
            "start": {
              "column": 4,
              "line": 64
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1047,
        1071
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 64
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
            "name": "o",
            "optional": false,
            "range": [
              1076,
              1077
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'Hello'",
                "value": "Hello",
                "range": [
                  1088,
                  1095
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 65
                  },
                  "start": {
                    "column": 16,
                    "line": 65
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "range": [
                  1084,
                  1085
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 65
                  },
                  "start": {
                    "column": 12,
                    "line": 65
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "range": [
                  1086,
                  1087
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 65
                  },
                  "start": {
                    "column": 14,
                    "line": 65
                  }
                }
              },
              "range": [
                1084,
                1087
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 65
                },
                "start": {
                  "column": 12,
                  "line": 65
                }
              }
            },
            "range": [
              1080,
              1096
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 65
              },
              "start": {
                "column": 8,
                "line": 65
              }
            }
          },
          "range": [
            1076,
            1096
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 65
            },
            "start": {
              "column": 4,
              "line": 65
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1072,
        1097
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 65
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 67
                },
                "start": {
                  "column": 5,
                  "line": 67
                }
              },
              "range": [
                1104,
                1131
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1108,
                        1109
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 67
                        },
                        "start": {
                          "column": 9,
                          "line": 67
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
                          "line": 67
                        },
                        "start": {
                          "column": 10,
                          "line": 67
                        }
                      },
                      "range": [
                        1109,
                        1117
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1111,
                          1117
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 67
                          },
                          "start": {
                            "column": 12,
                            "line": 67
                          }
                        }
                      }
                    },
                    "range": [
                      1108,
                      1118
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 67
                      },
                      "start": {
                        "column": 9,
                        "line": 67
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        1119,
                        1120
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 67
                        },
                        "start": {
                          "column": 20,
                          "line": 67
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
                          "column": 29,
                          "line": 67
                        },
                        "start": {
                          "column": 21,
                          "line": 67
                        }
                      },
                      "range": [
                        1120,
                        1128
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1122,
                          1128
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 67
                          },
                          "start": {
                            "column": 23,
                            "line": 67
                          }
                        }
                      }
                    },
                    "range": [
                      1119,
                      1129
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 67
                      },
                      "start": {
                        "column": 20,
                        "line": 67
                      }
                    }
                  }
                ],
                "range": [
                  1106,
                  1131
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 67
                  },
                  "start": {
                    "column": 7,
                    "line": 67
                  }
                }
              }
            },
            "range": [
              1103,
              1131
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          },
          "init": null,
          "range": [
            1103,
            1131
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 67
            },
            "start": {
              "column": 4,
              "line": 67
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1099,
        1131
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 67
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 68
                },
                "start": {
                  "column": 5,
                  "line": 68
                }
              },
              "range": [
                1137,
                1148
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "range": [
                        1139,
                        1140
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 68
                        },
                        "start": {
                          "column": 7,
                          "line": 68
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "range": [
                        1141,
                        1142
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 68
                        },
                        "start": {
                          "column": 9,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      1139,
                      1142
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 68
                      },
                      "start": {
                        "column": 7,
                        "line": 68
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "range": [
                      1143,
                      1148
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 68
                      },
                      "start": {
                        "column": 11,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    1139,
                    1148
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 68
                    },
                    "start": {
                      "column": 7,
                      "line": 68
                    }
                  }
                },
                "range": [
                  1139,
                  1148
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 68
                  },
                  "start": {
                    "column": 7,
                    "line": 68
                  }
                }
              }
            },
            "range": [
              1136,
              1148
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          },
          "init": null,
          "range": [
            1136,
            1148
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 68
            },
            "start": {
              "column": 4,
              "line": 68
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1132,
        1149
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 17,
      "line": 68
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
