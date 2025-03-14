__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    373
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
          68
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
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              },
              "range": [
                63,
                66
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    65,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "range": [
                  65,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              61,
              66
            ],
            "loc": {
              "end": {
                "column": 9,
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
        "name": "OptionProp",
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
        68
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          120,
          177
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
                126,
                132
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                132,
                175
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
                            157,
                            162
                          ],
                          "raw": "Hello",
                          "value": "Hello",
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 9
                            },
                            "start": {
                              "column": 20,
                              "line": 9
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
                            164,
                            167
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 9
                            },
                            "start": {
                              "column": 27,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          162,
                          168
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 9
                          },
                          "start": {
                            "column": 25,
                            "line": 9
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
                            153,
                            156
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 9
                            },
                            "start": {
                              "column": 16,
                              "line": 9
                            }
                          }
                        },
                        "selfClosing": false,
                        "range": [
                          152,
                          157
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 9
                          },
                          "start": {
                            "column": 15,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        152,
                        168
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      145,
                      169
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  135,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 13,
                    "line": 8
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
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 8
                }
              }
            },
            "range": [
              126,
              175
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
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
            "line": 11
          },
          "start": {
            "column": 50,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Opt",
        "optional": false,
        "range": [
          76,
          79
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
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
            88,
            93
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 7
            },
            "start": {
              "column": 18,
              "line": 7
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
            94,
            103
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 7
            },
            "start": {
              "column": 24,
              "line": 7
            }
          }
        },
        "range": [
          88,
          103
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 7
          },
          "start": {
            "column": 18,
            "line": 7
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          103,
          119
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "OptionProp",
              "optional": false,
              "range": [
                104,
                114
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 7
                },
                "start": {
                  "column": 34,
                  "line": 7
                }
              }
            },
            "range": [
              104,
              114
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 7
              },
              "start": {
                "column": 34,
                "line": 7
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              116,
              118
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 7
              },
              "start": {
                "column": 46,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 7
          },
          "start": {
            "column": 33,
            "line": 7
          }
        }
      },
      "range": [
        70,
        177
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 7
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 13
                },
                "start": {
                  "column": 9,
                  "line": 13
                }
              },
              "range": [
                188,
                200
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionProp",
                  "optional": false,
                  "range": [
                    190,
                    200
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 13
                    },
                    "start": {
                      "column": 11,
                      "line": 13
                    }
                  }
                },
                "range": [
                  190,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              185,
              200
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              203,
              205
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 13
              },
              "start": {
                "column": 24,
                "line": 13
              }
            }
          },
          "range": [
            185,
            205
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        179,
        206
      ],
      "loc": {
        "end": {
          "column": 27,
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 14
                },
                "start": {
                  "column": 10,
                  "line": 14
                }
              },
              "range": [
                217,
                229
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionProp",
                  "optional": false,
                  "range": [
                    219,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 14
                    },
                    "start": {
                      "column": 12,
                      "line": 14
                    }
                  }
                },
                "range": [
                  219,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 14
                  },
                  "start": {
                    "column": 12,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              213,
              229
            ],
            "loc": {
              "end": {
                "column": 22,
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
                    238,
                    239
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 4,
                      "line": 15
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    241,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 15
                    },
                    "start": {
                      "column": 7,
                      "line": 15
                    }
                  }
                },
                "range": [
                  238,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              232,
              244
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 16
              },
              "start": {
                "column": 25,
                "line": 14
              }
            }
          },
          "range": [
            213,
            244
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
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
        207,
        244
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
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
              259,
              260
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
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
                263,
                284
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
                      272,
                      275
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 19
                      },
                      "start": {
                        "column": 17,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    268,
                    276
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 19
                    },
                    "start": {
                      "column": 13,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "range": [
                      277,
                      278
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 19
                      },
                      "start": {
                        "column": 22,
                        "line": 19
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        280,
                        281
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 19
                        },
                        "start": {
                          "column": 25,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      279,
                      282
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 19
                      },
                      "start": {
                        "column": 24,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    277,
                    282
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 19
                    },
                    "start": {
                      "column": 22,
                      "line": 19
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "range": [
                  264,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 19
                  },
                  "start": {
                    "column": 9,
                    "line": 19
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 29,
                  "line": 19
                },
                "start": {
                  "column": 8,
                  "line": 19
                }
              }
            },
            "range": [
              263,
              284
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 19
              }
            }
          },
          "range": [
            259,
            284
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        255,
        285
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 19
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
            "name": "y1",
            "optional": false,
            "range": [
              290,
              292
            ],
            "loc": {
              "end": {
                "column": 6,
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
                295,
                318
              ],
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "range": [
                      304,
                      308
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 20
                      },
                      "start": {
                        "column": 18,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    300,
                    309
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 20
                    },
                    "start": {
                      "column": 14,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "range": [
                      310,
                      311
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 20
                      },
                      "start": {
                        "column": 24,
                        "line": 20
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"Hi\"",
                    "value": "Hi",
                    "range": [
                      312,
                      316
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 20
                      },
                      "start": {
                        "column": 26,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    310,
                    316
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 20
                    },
                    "start": {
                      "column": 24,
                      "line": 20
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "range": [
                  296,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 20
                  },
                  "start": {
                    "column": 10,
                    "line": 20
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 32,
                  "line": 20
                },
                "start": {
                  "column": 9,
                  "line": 20
                }
              }
            },
            "range": [
              295,
              318
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 20
              },
              "start": {
                "column": 9,
                "line": 20
              }
            }
          },
          "range": [
            290,
            318
          ],
          "loc": {
            "end": {
              "column": 32,
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
        286,
        319
      ],
      "loc": {
        "end": {
          "column": 33,
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
            "name": "y2",
            "optional": false,
            "range": [
              324,
              326
            ],
            "loc": {
              "end": {
                "column": 6,
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
                329,
                351
              ],
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "range": [
                      338,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 21
                      },
                      "start": {
                        "column": 18,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    334,
                    343
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 21
                    },
                    "start": {
                      "column": 14,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "range": [
                      344,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 21
                      },
                      "start": {
                        "column": 24,
                        "line": 21
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        347,
                        348
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 21
                        },
                        "start": {
                          "column": 27,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      346,
                      349
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 21
                      },
                      "start": {
                        "column": 26,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    344,
                    349
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 21
                    },
                    "start": {
                      "column": 24,
                      "line": 21
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "range": [
                  330,
                  333
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 21
                  },
                  "start": {
                    "column": 10,
                    "line": 21
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 31,
                  "line": 21
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              }
            },
            "range": [
              329,
              351
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 21
              },
              "start": {
                "column": 9,
                "line": 21
              }
            }
          },
          "range": [
            324,
            351
          ],
          "loc": {
            "end": {
              "column": 31,
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
        320,
        352
      ],
      "loc": {
        "end": {
          "column": 32,
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
            "name": "y3",
            "optional": false,
            "range": [
              357,
              359
            ],
            "loc": {
              "end": {
                "column": 6,
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
                362,
                371
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "range": [
                      367,
                      368
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 22
                      },
                      "start": {
                        "column": 14,
                        "line": 22
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    367,
                    368
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 22
                    },
                    "start": {
                      "column": 14,
                      "line": 22
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "range": [
                  363,
                  366
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 22
                  },
                  "start": {
                    "column": 10,
                    "line": 22
                  }
                }
              },
              "selfClosing": true,
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
            "range": [
              362,
              371
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
          "range": [
            357,
            371
          ],
          "loc": {
            "end": {
              "column": 18,
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
        353,
        372
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 22
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
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
