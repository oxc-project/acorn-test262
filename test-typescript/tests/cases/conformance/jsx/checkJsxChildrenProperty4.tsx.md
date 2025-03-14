__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    767
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
          50,
          71
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Name",
              "optional": false,
              "range": [
                56,
                60
              ],
              "loc": {
                "end": {
                  "column": 8,
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
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              },
              "range": [
                60,
                68
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  62,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              56,
              69
            ],
            "loc": {
              "end": {
                "column": 17,
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
            "column": 16,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IUser",
        "optional": false,
        "range": [
          44,
          49
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
      "range": [
        34,
        71
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          99,
          146
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "range": [
                105,
                113
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 4,
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
                  "column": 42,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              },
              "range": [
                113,
                143
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "user",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 8
                        },
                        "start": {
                          "column": 19,
                          "line": 8
                        }
                      },
                      "range": [
                        120,
                        127
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IUser",
                          "optional": false,
                          "range": [
                            122,
                            127
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 8
                            },
                            "start": {
                              "column": 21,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          122,
                          127
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 8
                          },
                          "start": {
                            "column": 21,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      116,
                      127
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 8
                      },
                      "start": {
                        "column": 15,
                        "line": 8
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 8
                    },
                    "start": {
                      "column": 28,
                      "line": 8
                    }
                  },
                  "range": [
                    129,
                    143
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
                          132,
                          135
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 8
                          },
                          "start": {
                            "column": 31,
                            "line": 8
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Element",
                        "optional": false,
                        "range": [
                          136,
                          143
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 8
                          },
                          "start": {
                            "column": 35,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        132,
                        143
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 8
                        },
                        "start": {
                          "column": 31,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      132,
                      143
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 8
                      },
                      "start": {
                        "column": 31,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  115,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 8
                  },
                  "start": {
                    "column": 14,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              105,
              144
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
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
            "column": 26,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFetchUserProps",
        "optional": false,
        "range": [
          83,
          98
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "range": [
        73,
        146
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          210,
          333
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
                216,
                222
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
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
                222,
                331
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "alternate": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          320,
                          324
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 15
                          },
                          "start": {
                            "column": 14,
                            "line": 15
                          }
                        }
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  287,
                                  291
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 14
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "state",
                                "optional": false,
                                "range": [
                                  292,
                                  297
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                287,
                                297
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 14
                                },
                                "start": {
                                  "column": 34,
                                  "line": 14
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "range": [
                                298,
                                304
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 14
                                },
                                "start": {
                                  "column": 45,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              287,
                              304
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 14
                              },
                              "start": {
                                "column": 34,
                                "line": 14
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
                              "type": "ThisExpression",
                              "range": [
                                267,
                                271
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 14
                                },
                                "start": {
                                  "column": 14,
                                  "line": 14
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "props",
                              "optional": false,
                              "range": [
                                272,
                                277
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 14
                                },
                                "start": {
                                  "column": 19,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              267,
                              277
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 14
                              },
                              "start": {
                                "column": 14,
                                "line": 14
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "range": [
                              278,
                              286
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 14
                              },
                              "start": {
                                "column": 25,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            267,
                            286
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 14
                            },
                            "start": {
                              "column": 14,
                              "line": 14
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          267,
                          305
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 14
                          },
                          "start": {
                            "column": 14,
                            "line": 14
                          }
                        }
                      },
                      "test": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            242,
                            246
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 13
                            },
                            "start": {
                              "column": 15,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "range": [
                            247,
                            252
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 13
                            },
                            "start": {
                              "column": 20,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          242,
                          252
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 13
                          },
                          "start": {
                            "column": 15,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        242,
                        324
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 15
                        },
                        "start": {
                          "column": 15,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      235,
                      325
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  225,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 13,
                    "line": 12
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
                  "line": 16
                },
                "start": {
                  "column": 10,
                  "line": 12
                }
              }
            },
            "range": [
              216,
              331
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 12
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
            "column": 62,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FetchUser",
        "optional": false,
        "range": [
          154,
          163
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
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
              "column": 29,
              "line": 11
            },
            "start": {
              "column": 24,
              "line": 11
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
              "column": 39,
              "line": 11
            },
            "start": {
              "column": 30,
              "line": 11
            }
          }
        },
        "range": [
          172,
          187
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 11
          },
          "start": {
            "column": 24,
            "line": 11
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          187,
          209
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IFetchUserProps",
              "optional": false,
              "range": [
                188,
                203
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 11
                },
                "start": {
                  "column": 40,
                  "line": 11
                }
              }
            },
            "range": [
              188,
              203
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 11
              },
              "start": {
                "column": 40,
                "line": 11
              }
            }
          },
          {
            "type": "TSAnyKeyword",
            "range": [
              205,
              208
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 11
              },
              "start": {
                "column": 57,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 11
          },
          "start": {
            "column": 39,
            "line": 11
          }
        }
      },
      "range": [
        148,
        333
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 11
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
                    398,
                    411
                  ],
                  "raw": "\n            ",
                  "value": "\n            ",
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 23
                    },
                    "start": {
                      "column": 19,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
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
                              "name": "user",
                              "optional": false,
                              "range": [
                                445,
                                449
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 24
                                },
                                "start": {
                                  "column": 22,
                                  "line": 24
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "NAme",
                              "optional": false,
                              "range": [
                                450,
                                454
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 24
                                },
                                "start": {
                                  "column": 27,
                                  "line": 24
                                }
                              }
                            },
                            "range": [
                              445,
                              454
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 24
                              },
                              "start": {
                                "column": 22,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            443,
                            456
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 24
                            },
                            "start": {
                              "column": 20,
                              "line": 24
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
                            458,
                            460
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 24
                            },
                            "start": {
                              "column": 35,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          456,
                          461
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 24
                          },
                          "start": {
                            "column": 33,
                            "line": 24
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
                            440,
                            442
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 24
                            },
                            "start": {
                              "column": 17,
                              "line": 24
                            }
                          }
                        },
                        "selfClosing": false,
                        "range": [
                          439,
                          443
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 24
                          },
                          "start": {
                            "column": 16,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        439,
                        461
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 24
                        },
                        "start": {
                          "column": 16,
                          "line": 24
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
                        "name": "user",
                        "optional": false,
                        "range": [
                          413,
                          417
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 23
                          },
                          "start": {
                            "column": 14,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "range": [
                      413,
                      475
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 25
                      },
                      "start": {
                        "column": 14,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    411,
                    477
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 25
                    },
                    "start": {
                      "column": 12,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "range": [
                    477,
                    486
                  ],
                  "raw": "\n        ",
                  "value": "\n        ",
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 26
                    },
                    "start": {
                      "column": 15,
                      "line": 25
                    }
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FetchUser",
                  "range": [
                    488,
                    497
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 26
                    },
                    "start": {
                      "column": 10,
                      "line": 26
                    }
                  }
                },
                "range": [
                  486,
                  498
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FetchUser",
                  "range": [
                    388,
                    397
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 22
                    },
                    "start": {
                      "column": 9,
                      "line": 22
                    }
                  }
                },
                "selfClosing": false,
                "range": [
                  387,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              },
              "range": [
                387,
                498
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 22
                }
              }
            },
            "range": [
              370,
              505
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "range": [
          364,
          507
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 20,
            "line": 20
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UserName",
        "optional": false,
        "range": [
          353,
          361
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
          }
        }
      },
      "params": [],
      "range": [
        344,
        507
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 20
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
                    564,
                    592
                  ],
                  "raw": "\n\n\n            \n            ",
                  "value": "\n\n\n            \n            ",
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 36
                    },
                    "start": {
                      "column": 19,
                      "line": 32
                    }
                  }
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
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
                              "name": "user",
                              "optional": false,
                              "range": [
                                626,
                                630
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 37
                                },
                                "start": {
                                  "column": 22,
                                  "line": 37
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Name",
                              "optional": false,
                              "range": [
                                631,
                                635
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 37
                                },
                                "start": {
                                  "column": 27,
                                  "line": 37
                                }
                              }
                            },
                            "range": [
                              626,
                              635
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 37
                              },
                              "start": {
                                "column": 22,
                                "line": 37
                              }
                            }
                          },
                          "range": [
                            624,
                            637
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 37
                            },
                            "start": {
                              "column": 20,
                              "line": 37
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
                            639,
                            641
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 37
                            },
                            "start": {
                              "column": 35,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          637,
                          642
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 37
                          },
                          "start": {
                            "column": 33,
                            "line": 37
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
                            621,
                            623
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 37
                            },
                            "start": {
                              "column": 17,
                              "line": 37
                            }
                          }
                        },
                        "selfClosing": false,
                        "range": [
                          620,
                          624
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 37
                          },
                          "start": {
                            "column": 16,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        620,
                        642
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 37
                        },
                        "start": {
                          "column": 16,
                          "line": 37
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
                        "name": "user",
                        "optional": false,
                        "range": [
                          594,
                          598
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 36
                          },
                          "start": {
                            "column": 14,
                            "line": 36
                          }
                        }
                      }
                    ],
                    "range": [
                      594,
                      656
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 38
                      },
                      "start": {
                        "column": 14,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    592,
                    658
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 38
                    },
                    "start": {
                      "column": 12,
                      "line": 36
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "range": [
                    658,
                    671
                  ],
                  "raw": "\n            ",
                  "value": "\n            ",
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 39
                    },
                    "start": {
                      "column": 15,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
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
                              "name": "user",
                              "optional": false,
                              "range": [
                                705,
                                709
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 40
                                },
                                "start": {
                                  "column": 22,
                                  "line": 40
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Name",
                              "optional": false,
                              "range": [
                                710,
                                714
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 40
                                },
                                "start": {
                                  "column": 27,
                                  "line": 40
                                }
                              }
                            },
                            "range": [
                              705,
                              714
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 40
                              },
                              "start": {
                                "column": 22,
                                "line": 40
                              }
                            }
                          },
                          "range": [
                            703,
                            716
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 40
                            },
                            "start": {
                              "column": 20,
                              "line": 40
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
                            718,
                            720
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 40
                            },
                            "start": {
                              "column": 35,
                              "line": 40
                            }
                          }
                        },
                        "range": [
                          716,
                          721
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 40
                          },
                          "start": {
                            "column": 33,
                            "line": 40
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
                            700,
                            702
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 40
                            },
                            "start": {
                              "column": 17,
                              "line": 40
                            }
                          }
                        },
                        "selfClosing": false,
                        "range": [
                          699,
                          703
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 40
                          },
                          "start": {
                            "column": 16,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        699,
                        721
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 40
                        },
                        "start": {
                          "column": 16,
                          "line": 40
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
                        "name": "user",
                        "optional": false,
                        "range": [
                          673,
                          677
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 39
                          },
                          "start": {
                            "column": 14,
                            "line": 39
                          }
                        }
                      }
                    ],
                    "range": [
                      673,
                      735
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 41
                      },
                      "start": {
                        "column": 14,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    671,
                    737
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 41
                    },
                    "start": {
                      "column": 12,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "range": [
                    737,
                    746
                  ],
                  "raw": "\n        ",
                  "value": "\n        ",
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 42
                    },
                    "start": {
                      "column": 15,
                      "line": 41
                    }
                  }
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FetchUser",
                  "range": [
                    748,
                    757
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 42
                    },
                    "start": {
                      "column": 10,
                      "line": 42
                    }
                  }
                },
                "range": [
                  746,
                  758
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 42
                  },
                  "start": {
                    "column": 8,
                    "line": 42
                  }
                }
              },
              "openingElement": {
                "type": "JSXOpeningElement",
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "name": "FetchUser",
                  "range": [
                    554,
                    563
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 32
                    },
                    "start": {
                      "column": 9,
                      "line": 32
                    }
                  }
                },
                "selfClosing": false,
                "range": [
                  553,
                  564
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              },
              "range": [
                553,
                758
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 42
                },
                "start": {
                  "column": 8,
                  "line": 32
                }
              }
            },
            "range": [
              536,
              765
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "range": [
          530,
          767
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 21,
            "line": 30
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UserName1",
        "optional": false,
        "range": [
          518,
          527
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 30
          },
          "start": {
            "column": 9,
            "line": 30
          }
        }
      },
      "params": [],
      "range": [
        509,
        767
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 44
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
