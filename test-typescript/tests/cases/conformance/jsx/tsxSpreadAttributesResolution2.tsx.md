__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    443
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
          57,
          87
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
                63,
                64
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
                64,
                72
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  66,
                  72
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
              63,
              73
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
              "name": "y",
              "optional": false,
              "range": [
                78,
                79
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
                  "column": 10,
                  "line": 5
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              },
              "range": [
                79,
                84
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"2\"",
                  "value": "2",
                  "range": [
                    81,
                    84
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 5
                    },
                    "start": {
                      "column": 7,
                      "line": 5
                    }
                  }
                },
                "range": [
                  81,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 10,
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
              78,
              85
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 23,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PoisonedProp",
        "optional": false,
        "range": [
          44,
          56
        ],
        "loc": {
          "end": {
            "column": 22,
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
        87
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
          146,
          203
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
                152,
                158
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                158,
                201
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
                            183,
                            188
                          ],
                          "raw": "Hello",
                          "value": "Hello",
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 10
                            },
                            "start": {
                              "column": 20,
                              "line": 10
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
                            190,
                            193
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 10
                            },
                            "start": {
                              "column": 27,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          188,
                          194
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 10
                          },
                          "start": {
                            "column": 25,
                            "line": 10
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
                            179,
                            182
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 10
                            },
                            "start": {
                              "column": 16,
                              "line": 10
                            }
                          }
                        },
                        "selfClosing": false,
                        "range": [
                          178,
                          183
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 10
                          },
                          "start": {
                            "column": 15,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        178,
                        194
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 10
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      171,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  161,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 13,
                    "line": 9
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
                  "line": 11
                },
                "start": {
                  "column": 10,
                  "line": 9
                }
              }
            },
            "range": [
              152,
              201
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 57,
            "line": 8
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Poisoned",
        "optional": false,
        "range": [
          95,
          103
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 8
          },
          "start": {
            "column": 6,
            "line": 8
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
            112,
            117
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 8
            },
            "start": {
              "column": 23,
              "line": 8
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
            118,
            127
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 8
            },
            "start": {
              "column": 29,
              "line": 8
            }
          }
        },
        "range": [
          112,
          127
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 8
          },
          "start": {
            "column": 23,
            "line": 8
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          127,
          145
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PoisonedProp",
              "optional": false,
              "range": [
                128,
                140
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 8
                },
                "start": {
                  "column": 39,
                  "line": 8
                }
              }
            },
            "range": [
              128,
              140
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 8
              },
              "start": {
                "column": 39,
                "line": 8
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              142,
              144
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 8
              },
              "start": {
                "column": 53,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 8
          },
          "start": {
            "column": 38,
            "line": 8
          }
        }
      },
      "range": [
        89,
        203
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
            "name": "obj",
            "optional": false,
            "range": [
              211,
              214
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              217,
              219
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 14
              },
              "start": {
                "column": 12,
                "line": 14
              }
            }
          },
          "range": [
            211,
            219
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        205,
        220
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            228,
            263
          ],
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        243,
                        244
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 17
                        },
                        "start": {
                          "column": 15,
                          "line": 17
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"ok\"",
                      "value": "ok",
                      "range": [
                        246,
                        250
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 17
                        },
                        "start": {
                          "column": 18,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      243,
                      250
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 17
                      },
                      "start": {
                        "column": 15,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        252,
                        253
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 17
                        },
                        "start": {
                          "column": 24,
                          "line": 17
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"2\"",
                      "value": "2",
                      "range": [
                        255,
                        258
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 17
                        },
                        "start": {
                          "column": 27,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      252,
                      258
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 17
                      },
                      "start": {
                        "column": 24,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  242,
                  259
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 17
                  },
                  "start": {
                    "column": 14,
                    "line": 17
                  }
                }
              },
              "range": [
                238,
                260
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 17
                },
                "start": {
                  "column": 10,
                  "line": 17
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "Poisoned",
            "range": [
              229,
              237
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 17
              },
              "start": {
                "column": 1,
                "line": 17
              }
            }
          },
          "selfClosing": true,
          "loc": {
            "end": {
              "column": 35,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "range": [
          228,
          263
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        228,
        264
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
            "range": [
              279,
              280
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
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
                283,
                304
              ],
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      297,
                      300
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 20
                      },
                      "start": {
                        "column": 22,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    293,
                    301
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 20
                    },
                    "start": {
                      "column": 18,
                      "line": 20
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Poisoned",
                "range": [
                  284,
                  292
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
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 29,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              }
            },
            "range": [
              283,
              304
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          },
          "range": [
            279,
            304
          ],
          "loc": {
            "end": {
              "column": 29,
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
      "kind": "let",
      "range": [
        275,
        305
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "name": "y",
            "optional": false,
            "range": [
              310,
              311
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
                314,
                326
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Poisoned",
                "range": [
                  315,
                  323
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 21
                  },
                  "start": {
                    "column": 9,
                    "line": 21
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 20,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 21
                }
              }
            },
            "range": [
              314,
              326
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 21
              },
              "start": {
                "column": 8,
                "line": 21
              }
            }
          },
          "range": [
            310,
            326
          ],
          "loc": {
            "end": {
              "column": 20,
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
      "kind": "let",
      "range": [
        306,
        327
      ],
      "loc": {
        "end": {
          "column": 21,
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
            "name": "z",
            "optional": false,
            "range": [
              332,
              333
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
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
                336,
                351
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "range": [
                      346,
                      347
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 22
                      },
                      "start": {
                        "column": 18,
                        "line": 22
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    346,
                    347
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 22
                    },
                    "start": {
                      "column": 18,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "range": [
                      348,
                      349
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 22
                      },
                      "start": {
                        "column": 20,
                        "line": 22
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    348,
                    349
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 22
                    },
                    "start": {
                      "column": 20,
                      "line": 22
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Poisoned",
                "range": [
                  337,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 22
                  },
                  "start": {
                    "column": 9,
                    "line": 22
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 23,
                  "line": 22
                },
                "start": {
                  "column": 8,
                  "line": 22
                }
              }
            },
            "range": [
              336,
              351
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 22
              },
              "start": {
                "column": 8,
                "line": 22
              }
            }
          },
          "range": [
            332,
            351
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
      "kind": "let",
      "range": [
        328,
        352
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
            "name": "w",
            "optional": false,
            "range": [
              357,
              358
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
                361,
                392
              ],
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            376,
                            377
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 23
                            },
                            "start": {
                              "column": 23,
                              "line": 23
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "5",
                          "value": 5,
                          "range": [
                            379,
                            380
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 23
                            },
                            "start": {
                              "column": 26,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          376,
                          380
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 23
                          },
                          "start": {
                            "column": 23,
                            "line": 23
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            382,
                            383
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 23
                            },
                            "start": {
                              "column": 29,
                              "line": 23
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "\"2\"",
                          "value": "2",
                          "range": [
                            385,
                            388
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 23
                            },
                            "start": {
                              "column": 32,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          382,
                          388
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 23
                          },
                          "start": {
                            "column": 29,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "range": [
                      375,
                      389
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 23
                      },
                      "start": {
                        "column": 22,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    371,
                    390
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 23
                    },
                    "start": {
                      "column": 18,
                      "line": 23
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Poisoned",
                "range": [
                  362,
                  370
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 23
                  },
                  "start": {
                    "column": 9,
                    "line": 23
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 39,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 23
                }
              }
            },
            "range": [
              361,
              392
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 23
              },
              "start": {
                "column": 8,
                "line": 23
              }
            }
          },
          "range": [
            357,
            392
          ],
          "loc": {
            "end": {
              "column": 39,
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
      "kind": "let",
      "range": [
        353,
        393
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "w1",
            "optional": false,
            "range": [
              398,
              400
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
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                403,
                442
              ],
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            418,
                            419
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 24
                            },
                            "start": {
                              "column": 24,
                              "line": 24
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "5",
                          "value": 5,
                          "range": [
                            421,
                            422
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 24
                            },
                            "start": {
                              "column": 27,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          418,
                          422
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
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            424,
                            425
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 24
                            },
                            "start": {
                              "column": 30,
                              "line": 24
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "\"2\"",
                          "value": "2",
                          "range": [
                            427,
                            430
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 24
                            },
                            "start": {
                              "column": 33,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          424,
                          430
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
                      }
                    ],
                    "range": [
                      417,
                      431
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 24
                      },
                      "start": {
                        "column": 23,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    413,
                    432
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 24
                    },
                    "start": {
                      "column": 19,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "X",
                    "range": [
                      433,
                      434
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 24
                      },
                      "start": {
                        "column": 39,
                        "line": 24
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"hi\"",
                    "value": "hi",
                    "range": [
                      435,
                      439
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 24
                      },
                      "start": {
                        "column": 41,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    433,
                    439
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 24
                    },
                    "start": {
                      "column": 39,
                      "line": 24
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Poisoned",
                "range": [
                  404,
                  412
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
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 48,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              }
            },
            "range": [
              403,
              442
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 24
              }
            }
          },
          "range": [
            398,
            442
          ],
          "loc": {
            "end": {
              "column": 48,
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
        394,
        443
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 49,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
