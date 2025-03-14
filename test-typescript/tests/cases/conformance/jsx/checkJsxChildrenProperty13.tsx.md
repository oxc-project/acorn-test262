__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    522
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
          55,
          110
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
                61,
                62
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
                62,
                70
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  64,
                  70
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
              61,
              71
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
                76,
                77
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
                77,
                85
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  79,
                  85
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
              76,
              86
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
                91,
                99
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
                  "column": 20,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              },
              "range": [
                99,
                107
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Button",
                  "optional": false,
                  "range": [
                    101,
                    107
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
                "range": [
                  101,
                  107
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
              }
            },
            "range": [
              91,
              108
            ],
            "loc": {
              "end": {
                "column": 21,
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
            "column": 21,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ButtonProp",
        "optional": false,
        "range": [
          44,
          54
        ],
        "loc": {
          "end": {
            "column": 20,
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
        110
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
          166,
          360
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
                172,
                178
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
                178,
                358
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
                            288,
                            301
                          ],
                          "raw": "\n            ",
                          "value": "\n            ",
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 13
                            },
                            "start": {
                              "column": 59,
                              "line": 12
                            }
                          }
                        },
                        {
                          "type": "JSXElement",
                          "children": [
                            {
                              "type": "JSXText",
                              "range": [
                                306,
                                317
                              ],
                              "raw": "Hello World",
                              "value": "Hello World",
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 13
                                },
                                "start": {
                                  "column": 17,
                                  "line": 13
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
                                319,
                                322
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 13
                                },
                                "start": {
                                  "column": 30,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              317,
                              323
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 13
                              },
                              "start": {
                                "column": 28,
                                "line": 13
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
                                302,
                                305
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 13
                                },
                                "start": {
                                  "column": 13,
                                  "line": 13
                                }
                              }
                            },
                            "selfClosing": false,
                            "range": [
                              301,
                              306
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 13
                              },
                              "start": {
                                "column": 12,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            301,
                            323
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 13
                            },
                            "start": {
                              "column": 12,
                              "line": 13
                            }
                          }
                        },
                        {
                          "type": "JSXText",
                          "range": [
                            323,
                            336
                          ],
                          "raw": "\n            ",
                          "value": "\n            ",
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 14
                            },
                            "start": {
                              "column": 34,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "InnerButton",
                          "range": [
                            338,
                            349
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 14
                            },
                            "start": {
                              "column": 14,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          336,
                          350
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 14
                          },
                          "start": {
                            "column": 12,
                            "line": 14
                          }
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "argument": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  262,
                                  266
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 12
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
                                  267,
                                  272
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                262,
                                272
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 12
                                },
                                "start": {
                                  "column": 33,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              258,
                              273
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 12
                              },
                              "start": {
                                "column": 29,
                                "line": 12
                              }
                            }
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "children",
                              "range": [
                                274,
                                282
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 12
                                },
                                "start": {
                                  "column": 45,
                                  "line": 12
                                }
                              }
                            },
                            "value": {
                              "type": "Literal",
                              "raw": "\"hi\"",
                              "value": "hi",
                              "range": [
                                283,
                                287
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 12
                                },
                                "start": {
                                  "column": 54,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              274,
                              287
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 12
                              },
                              "start": {
                                "column": 45,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "InnerButton",
                          "range": [
                            246,
                            257
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 12
                            },
                            "start": {
                              "column": 17,
                              "line": 12
                            }
                          }
                        },
                        "selfClosing": false,
                        "range": [
                          245,
                          288
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 12
                          },
                          "start": {
                            "column": 16,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        245,
                        350
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 14
                        },
                        "start": {
                          "column": 16,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      237,
                      352
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  181,
                  358
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
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
                  "line": 15
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              }
            },
            "range": [
              172,
              358
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
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
            "line": 16
          },
          "start": {
            "column": 54,
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
          118,
          124
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
            133,
            138
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
            139,
            148
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
          133,
          148
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
          148,
          165
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ButtonProp",
              "optional": false,
              "range": [
                149,
                159
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 9
                },
                "start": {
                  "column": 37,
                  "line": 9
                }
              }
            },
            "range": [
              149,
              159
            ],
            "loc": {
              "end": {
                "column": 47,
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
              161,
              164
            ],
            "loc": {
              "end": {
                "column": 52,
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
            "column": 53,
            "line": 9
          },
          "start": {
            "column": 36,
            "line": 9
          }
        }
      },
      "range": [
        112,
        360
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          388,
          402
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
                391,
                392
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 19
                },
                "start": {
                  "column": 1,
                  "line": 19
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
                  "column": 10,
                  "line": 19
                },
                "start": {
                  "column": 2,
                  "line": 19
                }
              },
              "range": [
                392,
                400
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  394,
                  400
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              391,
              400
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 19
              },
              "start": {
                "column": 1,
                "line": 19
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 26,
            "line": 18
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InnerButtonProp",
        "optional": false,
        "range": [
          372,
          387
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 18
          },
          "start": {
            "column": 10,
            "line": 18
          }
        }
      },
      "range": [
        362,
        402
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          468,
          521
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
                471,
                477
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 23
                },
                "start": {
                  "column": 1,
                  "line": 23
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
                477,
                519
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
                            500,
                            505
                          ],
                          "raw": "Hello",
                          "value": "Hello",
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 24
                            },
                            "start": {
                              "column": 18,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "button",
                          "range": [
                            507,
                            513
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 24
                            },
                            "start": {
                              "column": 25,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          505,
                          514
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 24
                          },
                          "start": {
                            "column": 23,
                            "line": 24
                          }
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "button",
                          "range": [
                            493,
                            499
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 24
                            },
                            "start": {
                              "column": 11,
                              "line": 24
                            }
                          }
                        },
                        "selfClosing": false,
                        "range": [
                          492,
                          500
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 24
                          },
                          "start": {
                            "column": 10,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        492,
                        514
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 24
                        },
                        "start": {
                          "column": 10,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      484,
                      516
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 24
                      },
                      "start": {
                        "column": 2,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  480,
                  519
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 25
                  },
                  "start": {
                    "column": 10,
                    "line": 23
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
                  "column": 2,
                  "line": 25
                },
                "start": {
                  "column": 7,
                  "line": 23
                }
              }
            },
            "range": [
              471,
              519
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 25
              },
              "start": {
                "column": 1,
                "line": 23
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 64,
            "line": 22
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InnerButton",
        "optional": false,
        "range": [
          410,
          421
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 22
          },
          "start": {
            "column": 6,
            "line": 22
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
            430,
            435
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 22
            },
            "start": {
              "column": 26,
              "line": 22
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
            436,
            445
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 22
            },
            "start": {
              "column": 32,
              "line": 22
            }
          }
        },
        "range": [
          430,
          445
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 22
          },
          "start": {
            "column": 26,
            "line": 22
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          445,
          467
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "InnerButtonProp",
              "optional": false,
              "range": [
                446,
                461
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 22
                },
                "start": {
                  "column": 42,
                  "line": 22
                }
              }
            },
            "range": [
              446,
              461
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 22
              },
              "start": {
                "column": 42,
                "line": 22
              }
            }
          },
          {
            "type": "TSAnyKeyword",
            "range": [
              463,
              466
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 22
              },
              "start": {
                "column": 59,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 22
          },
          "start": {
            "column": 41,
            "line": 22
          }
        }
      },
      "range": [
        404,
        521
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
