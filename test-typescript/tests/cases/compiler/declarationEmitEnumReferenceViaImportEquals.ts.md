__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    340
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        82
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            29,
            82
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "translationKey",
                "optional": false,
                "range": [
                  33,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 2
                  },
                  "start": {
                    "column": 2,
                    "line": 2
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
                    "column": 48,
                    "line": 2
                  },
                  "start": {
                    "column": 16,
                    "line": 2
                  }
                },
                "range": [
                  47,
                  79
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Translation",
                      "optional": false,
                      "range": [
                        49,
                        60
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 2
                        },
                        "start": {
                          "column": 18,
                          "line": 2
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TranslationKeyEnum",
                      "optional": false,
                      "range": [
                        61,
                        79
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 2
                        },
                        "start": {
                          "column": 30,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      49,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 2
                      },
                      "start": {
                        "column": 18,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    49,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 2
                    },
                    "start": {
                      "column": 18,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                33,
                80
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 29,
              "line": 1
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Translation",
          "optional": false,
          "range": [
            17,
            28
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        "range": [
          7,
          82
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        84,
        338
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
                117,
                182
              ],
              "attributes": [],
              "declaration": {
                "type": "TSTypeAliasDeclaration",
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TranslationKeyEnum",
                  "optional": false,
                  "range": [
                    129,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 6
                    },
                    "start": {
                      "column": 14,
                      "line": 6
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'translation1'",
                        "value": "translation1",
                        "range": [
                          150,
                          164
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 6
                          },
                          "start": {
                            "column": 35,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        150,
                        164
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 6
                        },
                        "start": {
                          "column": 35,
                          "line": 6
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'translation2'",
                        "value": "translation2",
                        "range": [
                          167,
                          181
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 6
                          },
                          "start": {
                            "column": 52,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        167,
                        181
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 6
                        },
                        "start": {
                          "column": 52,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "range": [
                    150,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 6
                    },
                    "start": {
                      "column": 35,
                      "line": 6
                    }
                  }
                },
                "range": [
                  124,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 6
                  },
                  "start": {
                    "column": 9,
                    "line": 6
                  }
                }
              },
              "exportKind": "type",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 6
                },
                "start": {
                  "column": 2,
                  "line": 6
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                185,
                336
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
                      "name": "TranslationKeyEnum",
                      "optional": false,
                      "range": [
                        198,
                        216
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 7
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
                            "name": "Translation1",
                            "optional": false,
                            "range": [
                              225,
                              237
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 8
                              },
                              "start": {
                                "column": 4,
                                "line": 8
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "Literal",
                              "raw": "'translation1'",
                              "value": "translation1",
                              "range": [
                                239,
                                253
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 8
                                },
                                "start": {
                                  "column": 18,
                                  "line": 8
                                }
                              }
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TranslationKeyEnum",
                                "optional": false,
                                "range": [
                                  257,
                                  275
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                257,
                                275
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 8
                                },
                                "start": {
                                  "column": 36,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              239,
                              275
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 8
                              },
                              "start": {
                                "column": 18,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            225,
                            275
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 8
                            },
                            "start": {
                              "column": 4,
                              "line": 8
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Translation2",
                            "optional": false,
                            "range": [
                              281,
                              293
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 9
                              },
                              "start": {
                                "column": 4,
                                "line": 9
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "TSAsExpression",
                            "expression": {
                              "type": "Literal",
                              "raw": "'translation2'",
                              "value": "translation2",
                              "range": [
                                295,
                                309
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 9
                                },
                                "start": {
                                  "column": 18,
                                  "line": 9
                                }
                              }
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TranslationKeyEnum",
                                "optional": false,
                                "range": [
                                  313,
                                  331
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                313,
                                331
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 9
                                },
                                "start": {
                                  "column": 36,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              295,
                              331
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 9
                              },
                              "start": {
                                "column": 18,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            281,
                            331
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
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
                        219,
                        336
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 10
                        },
                        "start": {
                          "column": 36,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      198,
                      336
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 10
                      },
                      "start": {
                        "column": 15,
                        "line": 7
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "const",
                "range": [
                  192,
                  336
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 10
                  },
                  "start": {
                    "column": 9,
                    "line": 7
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 10
                },
                "start": {
                  "column": 2,
                  "line": 7
                }
              }
            }
          ],
          "range": [
            113,
            338
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 29,
              "line": 5
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            101,
            112
          ],
          "decorators": [],
          "name": "Translation",
          "optional": false,
          "loc": {
            "end": {
              "column": 28,
              "line": 5
            },
            "start": {
              "column": 17,
              "line": 5
            }
          }
        },
        "kind": "namespace",
        "range": [
          91,
          338
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    237
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./translation\"",
        "value": "./translation",
        "range": [
          28,
          43
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 1
          },
          "start": {
            "column": 28,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Translation",
            "optional": false,
            "range": [
              9,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Translation",
            "optional": false,
            "range": [
              9,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        44
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TranslationKeyEnum",
        "optional": false,
        "range": [
          52,
          70
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Translation",
          "optional": false,
          "range": [
            73,
            84
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 2
            },
            "start": {
              "column": 28,
              "line": 2
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "TranslationKeyEnum",
          "optional": false,
          "range": [
            85,
            103
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 2
            },
            "start": {
              "column": 40,
              "line": 2
            }
          }
        },
        "range": [
          73,
          103
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 2
          },
          "start": {
            "column": 28,
            "line": 2
          }
        }
      },
      "range": [
        45,
        104
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        106,
        236
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            124,
            236
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
                "name": "TranslationKeyEnum",
                "optional": false,
                "range": [
                  128,
                  146
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 5
                  },
                  "start": {
                    "column": 2,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "TranslationKeyEnum",
                "optional": false,
                "range": [
                  149,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 5
                  },
                  "start": {
                    "column": 23,
                    "line": 5
                  }
                }
              },
              "range": [
                128,
                168
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 5
                },
                "start": {
                  "column": 2,
                  "line": 5
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "print",
                "optional": false,
                "range": [
                  171,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 6
                  },
                  "start": {
                    "column": 2,
                    "line": 6
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
                  176,
                  234
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TranslationKeyEnum",
                              "optional": false,
                              "range": [
                                197,
                                215
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 7
                                },
                                "start": {
                                  "column": 16,
                                  "line": 7
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Translation1",
                              "optional": false,
                              "range": [
                                216,
                                228
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 7
                                },
                                "start": {
                                  "column": 35,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              197,
                              228
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 7
                              },
                              "start": {
                                "column": 16,
                                "line": 7
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
                            "name": "console",
                            "optional": false,
                            "range": [
                              185,
                              192
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 7
                              },
                              "start": {
                                "column": 4,
                                "line": 7
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "range": [
                              193,
                              196
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 7
                              },
                              "start": {
                                "column": 12,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            185,
                            196
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 7
                            },
                            "start": {
                              "column": 4,
                              "line": 7
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          185,
                          229
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 7
                          },
                          "start": {
                            "column": 4,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        185,
                        230
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 7
                        },
                        "start": {
                          "column": 4,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "range": [
                    179,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 8
                    },
                    "start": {
                      "column": 10,
                      "line": 6
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
                    "column": 3,
                    "line": 8
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                }
              },
              "range": [
                171,
                234
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 6
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 18,
              "line": 4
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test",
          "optional": false,
          "range": [
            119,
            123
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          113,
          236
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    50
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./test\"",
        "value": "./test",
        "range": [
          21,
          29
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 1
          },
          "start": {
            "column": 21,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test",
            "optional": false,
            "range": [
              9,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test",
            "optional": false,
            "range": [
              9,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            13
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        30
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Test",
              "optional": false,
              "range": [
                35,
                39
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              31,
              41
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 2
              },
              "start": {
                "column": 0,
                "line": 2
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "print",
            "optional": false,
            "range": [
              42,
              47
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          },
          "range": [
            31,
            47
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "optional": false,
        "range": [
          31,
          49
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        31,
        50
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 19,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
